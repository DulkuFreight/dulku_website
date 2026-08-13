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
    const recipientEmail = "info@dulkufreight.com";
    const resendKey = process.env.RESEND_API_KEY;
    const subject = `NEW WEBSITE QUOTE REQUEST – ${service.trim()} (${name.trim()})`;

    const formattedText = `========================================
NEW WEBSITE QUOTE REQUEST
========================================

CUSTOMER INFORMATION:
- Name: ${name.trim()}
- Company: ${company?.trim() || "N/A"}
- Phone: ${phone.trim()}
- Email: ${email.trim()}

SERVICE DETAILS:
- Requested Service: ${service.trim()}

----------------------------------------
Submitted via Dulku Freight Website Quote Form
`;

    const formattedHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #F40009; margin-top: 0;">NEW WEBSITE QUOTE REQUEST</h2>
        <p style="color: #666; font-size: 14px;">A new quote request has been submitted through the Dulku Freight website.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <h3 style="color: #333; margin-bottom: 10px;">Customer Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; color: #111;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Company Name:</strong></td>
            <td style="padding: 8px 0; color: #111;">${company?.trim() || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
            <td style="padding: 8px 0; color: #111;"><a href="tel:${phone.trim()}" style="color: #F40009;">${phone.trim()}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #111;"><a href="mailto:${email.trim()}" style="color: #F40009;">${email.trim()}</a></td>
          </tr>
        </table>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <h3 style="color: #333; margin-bottom: 10px;">Service Requested</h3>
        <p style="background: #f9f9f9; padding: 12px; border-left: 4px solid #F40009; font-size: 15px; font-weight: bold; color: #111; margin: 0;">
          ${service.trim()}
        </p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999; text-align: center; margin-bottom: 0;">
          Dulku Freight Logistics • Operations Desk
        </p>
      </div>
    `;

    let emailSent = false;
    let errorDetail = "";

    // Send via Resend API
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
            reply_to: email.trim(),
            subject: subject,
            text: formattedText,
            html: formattedHtml,
          }),
        });

        const resData = await res.json().catch(() => null);

        if (res.ok && resData?.id) {
          emailSent = true;
        } else {
          // If quotes@dulkufreight.com is not configured, fallback to info@dulkufreight.com sender
          const fallbackRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Dulku Freight Quotes <info@dulkufreight.com>",
              to: [recipientEmail],
              reply_to: email.trim(),
              subject: subject,
              text: formattedText,
              html: formattedHtml,
            }),
          });
          const fallbackData = await fallbackRes.json().catch(() => null);
          if (fallbackRes.ok && fallbackData?.id) {
            emailSent = true;
          } else {
            errorDetail = resData?.message || fallbackData?.message || "Resend API returned error status";
            console.error("Resend delivery failed:", resData || fallbackData);
          }
        }
      } catch (e: any) {
        errorDetail = e?.message || "Network error while connecting to Resend";
        console.error("Resend exception:", e);
      }
    }

    if (!emailSent) {
      throw new Error(
        `Failed to send quote request (${errorDetail || "Delivery error"}). Please try again or email ${recipientEmail} directly.`
      );
    }

    return {
      success: true,
      message:
        "Thank you! Your quote request has been submitted. Our team will get back to you shortly.",
    };
  });
