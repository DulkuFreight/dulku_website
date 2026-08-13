import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { PortConnectivitySection, InteractiveRelatedServices } from "@/components/site/SubpagePrimitives";
import { Mail, MapPin, Zap } from "lucide-react";

const TITLE = "Get a Freight & Warehousing Quote | Dulku Freight";
const DESCRIPTION =
  "Request a fast, custom quote for cross-docking, container transloading, pallet storage, restacking, and 3PL fulfillment in Carteret, NJ near Port Newark.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/quote")({
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
  component: QuotePage,
});

function QuotePage() {
  return (
    <main className="min-h-screen bg-[#09090b] pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F40009]/30 bg-[#F40009]/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F40009]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F40009] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F40009]" />
            </span>
            INSTANT DISPATCH RESPONSE
          </span>
          <span className="rounded-full border border-[#262626] bg-[#121212] px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#aaaaaa]">
            CARTERET, NJ FACILITY
          </span>
        </div>

        <h1 className="display-xl mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get an Instant Freight &amp; Warehousing Quote
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
          Need cross-docking, container transloading, pallet storage, emergency load restacking, or 3PL fulfillment near Port Newark? Select your service below for fast pricing and dock availability.
        </p>

        {/* Main Grid: Form Container & Direct Dispatch Desk */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column (7/12 width): Quote Form Card */}
          <div className="lg:col-span-7 rounded-2xl border border-[#262626] bg-[#121212] p-6 sm:p-10 shadow-2xl">
            <h2 className="text-xl font-bold font-mono text-white">Request Your Custom Quote</h2>
            <p className="mt-1 text-xs text-[#aaaaaa]">
              Select your required logistics service and our operations desk in Carteret, NJ will respond promptly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Right Column (5/12 width): Direct Operations Desk */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#262626] bg-[#121212] p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <h3 className="font-mono text-lg font-bold text-white">Direct Operations Desk</h3>
                <p className="mt-2 text-xs text-[#aaaaaa] leading-relaxed">
                  Have an urgent shifted load or container on chassis right now? Reach out to our dispatch team directly.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Dispatch Badge */}
                <a
                  href="mailto:info@dulkufreight.com"
                  className="group flex items-center gap-4 rounded-xl border border-[#262626] bg-[#161616] p-4 text-white transition-all duration-200 hover:border-[#F40009] hover:bg-[#F40009]/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                      EMAIL DISPATCH
                    </span>
                    <span className="font-mono text-xs font-semibold text-white group-hover:text-[#F40009] transition-colors">
                      info@dulkufreight.com
                    </span>
                  </div>
                </a>

                {/* Address Badge */}
                <div className="group flex items-center gap-4 rounded-xl border border-[#262626] bg-[#161616] p-4 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                      FACILITY ADDRESS
                    </span>
                    <span className="text-xs font-medium text-white">
                      Carteret, NJ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support Box */}
            <div className="rounded-2xl border border-[#F40009]/40 bg-[#F40009]/10 p-6">
              <div className="flex items-center gap-3 text-[#F40009]">
                <Zap className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  EMERGENCY TURNED-AWAY TRUCKLOAD?
                </span>
              </div>
              <p className="mt-2 text-xs text-[#aaaaaa] leading-relaxed">
                If your driver has a rejected or shifted load right now, submit your request form for instant dock door assignment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <PortConnectivitySection />
        <InteractiveRelatedServices currentPath="/quote" />
      </div>
    </main>
  );
}
