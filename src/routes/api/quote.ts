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

          // Method A: Check for server-configured RESEND API KEY
          const resendKey = process.env.RESEND_API_KEY;
          const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
          const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

          if (resendKey) {
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
            if (res.ok) {
              emailSent = true;
            }
          } else if (webhookUrl) {
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
            if (res.ok) {
              emailSent = true;
            }
          }

          // Fallback server dispatch via Web3Forms API to recipient email
          if (!emailSent) {
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
          }

          if (emailSent) {
            return new Response(
              JSON.stringify({
                success: true,
                message:
                  "Thank you! Your quote request has been submitted. Our team will get back to you shortly.",
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
                error:
                  "Failed to send request. Please try again or contact ops@dulkufreight.com directly.",
              }),
              {
                status: 500,
                headers: { "Content-Type": "application/json" },
              }
            );
          }
        } catch (err) {
          console.error("Quote API Error:", err);
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
