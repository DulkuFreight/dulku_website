import { createServerFn } from "@tanstack/react-start";

export interface QuoteFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
}

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .validator((data: QuoteFormData) => {
    if (!data.name?.trim() || !data.phone?.trim() || !data.email?.trim() || !data.service?.trim()) {
      throw new Error("Please complete all required fields.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error("Please enter a valid email address.");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const { name, company, phone, email, service } = data;
    const recipientEmail = "ops@dulkufreight.com";
    const subject = "New Quote Request – Dulku Freight";

    const formattedText = `New Quote Request

Customer Information:
Name: ${name.trim()}
Company: ${company?.trim() || "N/A"}
Email: ${email.trim()}
Phone: ${phone.trim()}

Service Details:
Requested Service: ${service.trim()}
`;

    let emailSent = false;

    // 1. Check for server environment keys (Resend, Webhook, Web3Forms)
    const resendKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Dulku Freight <quotes@dulkufreight.com>",
            to: [recipientEmail],
            subject: subject,
            text: formattedText,
          }),
        });
        if (res.ok) emailSent = true;
      } catch (e) {
        console.error("Resend delivery error:", e);
      }
    } else if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: recipientEmail,
            subject: subject,
            text: formattedText,
            data: { name, company, phone, email, service },
          }),
        });
        if (res.ok) emailSent = true;
      } catch (e) {
        console.error("Webhook delivery error:", e);
      }
    }

    // 2. Fallback server-side email dispatch to ops@dulkufreight.com
    if (!emailSent) {
      try {
        const gatewayRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key || "a29e2fa8-ef37-4d76-8804-03a15ecf36fa",
            subject: subject,
            from_name: "Dulku Freight Quote Form",
            to_email: recipientEmail,
            name: name.trim(),
            company: company?.trim() || "N/A",
            email: email.trim(),
            phone: phone.trim(),
            service: service.trim(),
            message: formattedText,
          }),
        });
        const gatewayData = await gatewayRes.json().catch(() => null);
        if (gatewayRes.ok || (gatewayData && gatewayData.success)) {
          emailSent = true;
        }
      } catch (e) {
        console.error("Gateway delivery error:", e);
      }
    }

    if (!emailSent) {
      throw new Error(
        "Failed to send quote request. Please try again or email ops@dulkufreight.com directly."
      );
    }

    return {
      success: true,
      message:
        "Thank you! Your quote request has been submitted. Our team will get back to you shortly.",
    };
  });
