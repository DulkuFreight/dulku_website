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
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.error("[Resend Error] RESEND_API_KEY environment variable is not configured on the server.");
      throw new Error("Server email configuration error. Please contact info@dulkufreight.com directly.");
    }

    const internalRecipient = "info@dulkufreight.com";
    const customerEmail = email.trim();
    const customerName = name.trim();
    const customerCompany = company?.trim() || "N/A";
    const customerPhone = phone.trim();
    const requestedService = service.trim();
    const sender = "Dulku Freight <quotes@dulkufreight.com>";

    // ------------------------------------------------------------------
    // EMAIL 1 — INTERNAL NOTIFICATION (To: info@dulkufreight.com)
    // ------------------------------------------------------------------
    const internalSubject = "NEW WEBSITE QUOTE REQUEST";
    const internalText = `========================================
NEW WEBSITE QUOTE REQUEST
========================================

CUSTOMER INFORMATION:
- Name: ${customerName}
- Company: ${customerCompany}
- Phone: ${customerPhone}
- Email: ${customerEmail}

SERVICE REQUESTED:
- Service Needed: ${requestedService}

----------------------------------------
Submitted via Dulku Freight Website Quote Form
`;

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #F40009; margin-top: 0; font-size: 20px;">NEW WEBSITE QUOTE REQUEST</h2>
        <p style="color: #4a5568; font-size: 14px;">A new customer quote request has been submitted on the website.</p>
        <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 20px 0;" />
        <h3 style="color: #2d3748; font-size: 16px; margin-bottom: 12px;">Customer Details</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #718096; width: 140px;"><strong>Name:</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">${customerName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Company Name:</strong></td>
            <td style="padding: 6px 0; color: #1a202c;">${customerCompany}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Phone:</strong></td>
            <td style="padding: 6px 0; color: #1a202c;"><a href="tel:${customerPhone}" style="color: #F40009; text-decoration: none;">${customerPhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #718096;"><strong>Email:</strong></td>
            <td style="padding: 6px 0; color: #1a202c;"><a href="mailto:${customerEmail}" style="color: #F40009; text-decoration: none;">${customerEmail}</a></td>
          </tr>
        </table>
        <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 20px 0;" />
        <h3 style="color: #2d3748; font-size: 16px; margin-bottom: 12px;">Service Requested</h3>
        <p style="background: #f7fafc; padding: 14px; border-left: 4px solid #F40009; font-size: 15px; font-weight: bold; color: #1a202c; margin: 0; border-radius: 4px;">
          ${requestedService}
        </p>
        <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 24px 0 16px 0;" />
        <p style="font-size: 12px; color: #a0aec0; text-align: center; margin: 0;">
          Dulku Freight Logistics Operations Desk
        </p>
      </div>
    `;

    // ------------------------------------------------------------------
    // EMAIL 2 — CUSTOMER CONFIRMATION (To: customer's submitted email)
    // ------------------------------------------------------------------
    const customerSubject = "We Received Your Quote Request";
    const customerText = `Hello ${customerName},

Thank you for reaching out to Dulku Freight. We have received your quote request for ${requestedService}.

Our operations team is currently reviewing your details and will follow up with pricing and availability shortly.

If you have an urgent shifted load, turned-away container, or emergency requirement, please reply directly to this email or contact our dispatch team at info@dulkufreight.com.

Best regards,
Dulku Freight Logistics Team
https://dulkufreight.com
`;

    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #F40009; margin-top: 0; font-size: 20px;">We Received Your Quote Request</h2>
        <p style="color: #2d3748; font-size: 15px; line-height: 1.6;">Dear ${customerName},</p>
        <p style="color: #4a5568; font-size: 14px; line-height: 1.6;">
          Thank you for reaching out to <strong>Dulku Freight</strong>. We have received your request for <strong>${requestedService}</strong>.
        </p>
        <div style="background-color: #f7fafc; border-left: 4px solid #F40009; padding: 14px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; font-size: 13px; color: #718096; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Requested Service</p>
          <p style="margin: 4px 0 0 0; font-size: 15px; color: #1a202c; font-weight: bold;">${requestedService}</p>
        </div>
        <p style="color: #4a5568; font-size: 14px; line-height: 1.6;">
          Our operations desk is reviewing your submission and will get back to you with pricing, dock door availability, and next steps as quickly as possible.
        </p>
        <p style="color: #4a5568; font-size: 14px; line-height: 1.6;">
          If you have an urgent shifted load, rejected freight, or container on chassis right now, feel free to reply directly to this email or reach us at <a href="mailto:info@dulkufreight.com" style="color: #F40009; font-weight: bold; text-decoration: none;">info@dulkufreight.com</a>.
        </p>
        <hr style="border: 0; border-top: 1px solid #edf2f7; margin: 24px 0 16px 0;" />
        <p style="font-size: 12px; color: #718096; margin: 0;">
          <strong>Dulku Freight Logistics</strong><br />
          Cross-Dock • Transloading • Pallet Storage • 3PL Fulfillment<br />
          Carteret, NJ near Port Newark
        </p>
      </div>
    `;

    // ------------------------------------------------------------------
    // DISPATCH BOTH EMAILS VIA RESEND API
    // ------------------------------------------------------------------
    let internalSuccess = false;
    let customerSuccess = false;
    let internalError = "";
    let customerError = "";

    try {
      // 1. Send Internal Notification Email
      const resInternal = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: sender,
          to: [internalRecipient],
          reply_to: customerEmail,
          subject: internalSubject,
          text: internalText,
          html: internalHtml,
        }),
      });

      const dataInternal = await resInternal.json().catch(() => null);

      if (resInternal.ok && dataInternal?.id) {
        internalSuccess = true;
      } else {
        internalError = dataInternal?.message || `HTTP ${resInternal.status}`;
        console.error("[Resend Error] Internal notification email failed:", dataInternal);
      }
    } catch (e: any) {
      internalError = e?.message || "Network exception";
      console.error("[Resend Error] Internal email fetch exception:", e);
    }

    try {
      // 2. Send Customer Confirmation Email
      const resCustomer = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: sender,
          to: [customerEmail],
          subject: customerSubject,
          text: customerText,
          html: customerHtml,
        }),
      });

      const dataCustomer = await resCustomer.json().catch(() => null);

      if (resCustomer.ok && dataCustomer?.id) {
        customerSuccess = true;
      } else {
        customerError = dataCustomer?.message || `HTTP ${resCustomer.status}`;
        console.error("[Resend Error] Customer confirmation email failed:", dataCustomer);
      }
    } catch (e: any) {
      customerError = e?.message || "Network exception";
      console.error("[Resend Error] Customer confirmation fetch exception:", e);
    }

    // Verify BOTH emails succeeded
    if (!internalSuccess || !customerSuccess) {
      const errorMsg = `Email dispatch failed (Internal: ${internalSuccess ? "OK" : internalError}, Customer: ${customerSuccess ? "OK" : customerError}).`;
      console.error("[Resend Delivery Failure]", errorMsg);
      throw new Error("Failed to process email dispatch. Please try again or contact info@dulkufreight.com directly.");
    }

    return {
      success: true,
      message: "Thank you! Your quote request has been submitted. Our team will get back to you shortly.",
    };
  });
