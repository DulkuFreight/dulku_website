import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, company, phone, email, service } = body || {};

          // 1. Validate required fields
          if (!name?.trim() || !phone?.trim() || !email?.trim() || !service?.trim()) {
            return new Response(
              JSON.stringify({
                success: false,
                error: "Please complete all required fields.",
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // Basic email format check
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email.trim())) {
            return new Response(
              JSON.stringify({
                success: false,
                error: "Please enter a valid email address.",
              }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const resendKey = process.env.RESEND_API_KEY;
          if (!resendKey) {
            console.error("[Resend Error] RESEND_API_KEY is not configured on the server.");
            return new Response(
              JSON.stringify({
                success: false,
                error: "Server configuration error. Please contact info@dulkufreight.com directly.",
              }),
              {
                status: 500,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const internalRecipient = "info@dulkufreight.com";
          const customerEmail = email.trim();
          const customerName = name.trim();
          const customerCompany = company?.trim() || "N/A";
          const customerPhone = phone.trim();
          const requestedService = service.trim();
          const sender = "Dulku Freight <quotes@dulkufreight.com>";

          // EMAIL 1 — INTERNAL NOTIFICATION
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

          // EMAIL 2 — CUSTOMER CONFIRMATION
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

          let internalSuccess = false;
          let customerSuccess = false;
          let internalError = "";
          let customerError = "";

          try {
            // Send Internal Email
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
              console.error("[Resend API Route Error] Internal email failed:", dataInternal);
            }
          } catch (e: any) {
            internalError = e?.message || "Network exception";
            console.error("[Resend API Route Error] Internal email exception:", e);
          }

          try {
            // Send Customer Email
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
              console.error("[Resend API Route Error] Customer confirmation email failed:", dataCustomer);
            }
          } catch (e: any) {
            customerError = e?.message || "Network exception";
            console.error("[Resend API Route Error] Customer email exception:", e);
          }

          if (internalSuccess && customerSuccess) {
            return new Response(
              JSON.stringify({
                success: true,
                message: "Thank you! Your quote request has been submitted. Our team will get back to you shortly.",
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }
            );
          } else {
            return new Response(
              JSON.stringify({
                success: false,
                error: `Email delivery error (Internal: ${internalSuccess ? "OK" : internalError}, Customer: ${customerSuccess ? "OK" : customerError}). Please try again or email info@dulkufreight.com directly.`,
              }),
              {
                status: 500,
                headers: { "Content-Type": "application/json" },
              }
            );
          }
        } catch (err: any) {
          console.error("Quote API Route Error:", err);
          return new Response(
            JSON.stringify({
              success: false,
              error: "An error occurred while submitting your quote request. Please try again.",
            }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
