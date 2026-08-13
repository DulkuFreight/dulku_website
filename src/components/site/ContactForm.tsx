import { useState, FormEvent } from "react";
import { submitQuoteRequest } from "@/services/quoteService";

const SERVICE_OPTIONS = [
  "Cross-dock",
  "Container unloading",
  "Pallet storage",
  "Pallet restacking & rework / pallet restocking",
  "Transloading",
  "Trailer unload / reload",
  "Export container loading",
  "3PL fulfillment",
  "Other warehouse support",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // 1. Validate required fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.service.trim()) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await submitQuoteRequest({ data: formData });
      if (res && res.success) {
        setStatus("success");
      } else {
        setErrorMessage("Failed to send request. Please try again or contact info@dulkufreight.com directly.");
        setStatus("error");
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      try {
        const apiRes = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const apiData = await apiRes.json().catch(() => null);
        if (apiRes.ok && apiData?.success) {
          setStatus("success");
          return;
        }
      } catch (fallbackErr) {
        console.error("Fallback API error:", fallbackErr);
      }

      setErrorMessage(
        err?.message || "Failed to send quote request. Please try again or contact info@dulkufreight.com directly."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#F40009]/40 bg-[#121212] p-8 sm:p-10 shadow-2xl">
        <p className="label-mono font-mono text-xs uppercase tracking-widest text-[#F40009]">
          QUOTE REQUEST RECEIVED
        </p>
        <h3 className="display-xl mt-4 text-2xl sm:text-3xl font-medium text-white">
          Thank you! Your quote request has been submitted. Our team will get back to you shortly.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#aaaaaa]">
          A Dulku Freight specialist will review your request for <span className="text-[#F40009] font-semibold">{formData.service || "logistics support"}</span> and respond to <strong className="text-white">{formData.email}</strong> as quickly as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#262626] bg-[#121212] p-6 sm:p-8 shadow-xl"
    >
      {status === "error" && errorMessage && (
        <div className="mb-4 rounded-lg border border-[#F40009]/40 bg-[#F40009]/10 p-4 text-xs font-mono text-red-400">
          {errorMessage}
        </div>
      )}

      <div className="space-y-4">
        {/* Your Name * (Required) */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Your Name <span className="text-[#F40009]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="mt-1.5 w-full rounded-lg border border-[#2a2a2a] bg-[#141414] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[#F40009] focus:shadow-[0_0_10px_rgba(244,0,9,0.2)]"
          />
        </div>

        {/* Company Name (Optional) */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Company Name <span className="text-muted-foreground/60 text-[10px] lowercase">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Freight Logistics Inc."
            className="mt-1.5 w-full rounded-lg border border-[#2a2a2a] bg-[#141414] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[#F40009] focus:shadow-[0_0_10px_rgba(244,0,9,0.2)]"
          />
        </div>

        {/* Phone * (Required) & Email * (Required) Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Phone <span className="text-[#F40009]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone number"
              className="mt-1.5 w-full rounded-lg border border-[#2a2a2a] bg-[#141414] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[#F40009] focus:shadow-[0_0_10px_rgba(244,0,9,0.2)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Email <span className="text-[#F40009]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ops@company.com"
              className="mt-1.5 w-full rounded-lg border border-[#2a2a2a] bg-[#141414] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[#F40009] focus:shadow-[0_0_10px_rgba(244,0,9,0.2)]"
            />
          </div>
        </div>

        {/* Service Needed * (Required Dropdown Field) */}
        <div>
          <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Service Needed <span className="text-[#F40009]">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-[#2a2a2a] bg-[#141414] px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-[#F40009] focus:shadow-[0_0_10px_rgba(244,0,9,0.2)]"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action Button & Direct Call Footer */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-lg bg-[#F40009] py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(244,0,9,0.4)] disabled:opacity-50 disabled:pointer-events-none"
      >
        {status === "submitting" ? "SENDING REQUEST..." : "SEND QUOTE REQUEST"}
      </button>
    </form>
  );
}
