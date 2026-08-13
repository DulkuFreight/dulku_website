import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { PortConnectivitySection, InteractiveRelatedServices } from "@/components/site/SubpagePrimitives";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Zap } from "lucide-react";

const TITLE = "Contact Operations Desk | Dulku Freight New Jersey";
const DESCRIPTION =
  "Contact Dulku Freight operations desk in Carteret, NJ for fast rates, emergency shifted load support, container transloading, and warehousing.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090b] pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Side: Contact Information & Direct Action Badges */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F40009]/30 bg-[#F40009]/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F40009]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F40009] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F40009]" />
              </span>
              DIRECT DISPATCH ONLINE
            </span>

            <h1 className="display-xl mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Operations Desk
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Have an urgent shifted load, rejected freight, or ocean container on chassis right now? Reach out to our Carteret, NJ dispatch team for immediate bay assignment.
            </p>

            <div className="mt-8 space-y-4">
              {/* Address Badge */}
              <div className="group flex items-center gap-4 rounded-xl border border-[#262626] bg-[#121212] p-4 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                    FACILITY ADDRESS
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Carteret, NJ
                  </p>
                </div>
              </div>

              {/* Email Badge */}
              <a
                href="mailto:info@dulkufreight.com"
                className="group flex items-center gap-4 rounded-xl border border-[#262626] bg-[#121212] p-4 text-white transition-all hover:border-[#F40009] hover:bg-[#181818]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                    EMAIL DISPATCH
                  </p>
                  <p className="font-mono text-sm font-semibold text-white group-hover:text-[#F40009] transition-colors">
                    info@dulkufreight.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#262626] pt-6">
              <div className="flex items-center gap-2 text-xs text-[#aaaaaa]">
                <Clock className="h-4 w-4 text-[#F40009]" />
                <span>24/7 Gate &amp; Dispatch Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#aaaaaa]">
                <ShieldCheck className="h-4 w-4 text-[#F40009]" />
                <span>15 Min to Port Newark Terminals</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Container */}
          <div className="lg:col-span-6 rounded-2xl border border-[#262626] bg-[#121212] p-6 sm:p-10 shadow-2xl">
            <h2 className="text-xl font-bold font-mono text-white">Send Message to Operations Desk</h2>
            <p className="mt-1 text-xs text-[#aaaaaa]">
              Fill out the details below and our team will get back to you same day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <PortConnectivitySection />
        <InteractiveRelatedServices currentPath="/contact" />
      </div>
    </main>
  );
}
