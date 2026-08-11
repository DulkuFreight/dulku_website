import { createFileRoute, Link } from "@tanstack/react-router";
import {
  SubpageHero,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { BookOpen, Calculator, Zap, Warehouse, ArrowRight, ChevronRight } from "lucide-react";

const TITLE = "Logistics Resources & Field Notes | Dulku Freight";
const DESCRIPTION =
  "Practical resources for operators evaluating yard automation, cross-docking, and port logistics—how it deploys, what it costs, and what it returns.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/resources")({
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
  component: ResourcesPage,
});

const POSTS = [
  {
    kind: "GUIDE",
    t: "The Yard Operating System™ Explained",
    b: "Why the yard is the last unautomated link in the supply chain, and what an operating system changes from gate to dock.",
    to: "/what-is-terminal-yos",
    icon: BookOpen,
  },
  {
    kind: "CALCULATOR",
    t: "Yard Efficiency & ROI Model",
    b: "Estimate annual savings across labor, spotters, container dwell, and detention in under a minute.",
    to: "/",
    icon: Calculator,
  },
  {
    kind: "FIELD NOTE",
    t: "85% Faster Gate Processing",
    b: "How vision-based check-in removes the queue without adding heavy hardware for your IT team to support.",
    to: "/terminal-at-the-gate",
    icon: Zap,
  },
  {
    kind: "FIELD NOTE",
    t: "Killing the Manual Yard Check",
    b: "What continuous asset location does to spot inventory accuracy and spotter hours in a modern logistics yard.",
    to: "/terminal-in-the-yard",
    icon: Warehouse,
  },
];

function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <section className="bg-[#09090b] pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F40009]/30 bg-[#F40009]/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F40009]">
            LOGISTICS INTELLIGENCE &amp; GUIDES
          </span>

          <h1 className="display-xl mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Field Notes From Modernizing the Yard
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
            Practical material for operators evaluating yard automation and port logistics—how it deploys, what it costs, and what it returns.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {POSTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Link
                  key={i}
                  to={p.to}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244, 0, 9,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
                        {p.kind}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-[#aaaaaa] transition-colors group-hover:border-[#F40009]/40 group-hover:bg-[#F40009] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    <h2 className="mt-6 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-[#F40009]">
                      {p.t}
                    </h2>

                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {p.b}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#F40009]">
                    Read Resource <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <PortConnectivitySection />
      <InteractiveRelatedServices currentPath="/resources" />
      <SubpageCtaSection
        title="Ready to Learn More?"
        subtitle="Contact our team to discuss yard efficiency assessment and custom logistics solutions."
      />
    </main>
  );
}
