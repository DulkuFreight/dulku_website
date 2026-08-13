import { createFileRoute } from "@tanstack/react-router";
import networkOps from "@/assets/network-ops.jpg";
import yardAerial from "@/assets/yard-aerial.jpg";
import gateEntry from "@/assets/gate-entry.jpg";
import {
  SubpageHero,
  VisualMetricsSection,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Zap, Layers, RefreshCw, BarChart3, ShieldCheck, Warehouse } from "lucide-react";

const TITLE = "What is Dulku Freight YOS™? | Yard Operating System";
const DESCRIPTION =
  "The only end-to-end, AI-native configurable yard automation platform where agents interact seamlessly with yard workflows, material, and workers.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/what-is-terminal-yos")({
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
  component: YosPage,
});

function YosPage() {
  const metrics = [
    {
      stat: "AI-FIRST",
      label: "AGENTIC WORKFLOWS",
      description: "Agents interact with workers and make optimized decisions in real time.",
      icon: Zap,
    },
    {
      stat: "LOW IT LIFT",
      label: "SYSTEM INTEGRATION",
      description: "Seamless event-based integration with WMS, TMS, and ERP platforms.",
      icon: Layers,
    },
    {
      stat: "MODULAR",
      label: "FACILITY DEPLOYMENT",
      description: "Deploy applications as needed without rip-and-replace capital projects.",
      icon: RefreshCw,
    },
    {
      stat: "100%",
      label: "END-TO-END VISIBILITY",
      description: "Connect pre-planning in TMS/WMS with execution from gate to dock.",
      icon: ShieldCheck,
    },
  ];

  const pillars = [
    {
      title: "Agentic AI Workflows",
      description: "Built AI-first, where agents interact with workers and make optimized decisions in real time—automating critical yard processes from gate to dock.",
      icon: Zap,
      tag: "01 // AI WORKFLOWS",
    },
    {
      title: "Event-Based System Integrations",
      description: "Low IT lift integrations with WMS, TMS, ERP, and core logistics systems keep your data and operations flowing smoothly.",
      icon: Layers,
      tag: "02 // INTEGRATION",
    },
    {
      title: "Modular Deployment Architecture",
      description: "Deploy the specific applications your operation needs today, then expand as complexity grows—no rip-and-replace required.",
      icon: RefreshCw,
      tag: "03 // MODULAR",
    },
    {
      title: "Automated Gate Entry & Compliance",
      description: "Vision technology checks in trucks, verifies container IDs and seal numbers, and matches TMS appointment schedules instantly.",
      icon: ShieldCheck,
      tag: "04 // GATE AI",
    },
    {
      title: "Continuous Yard Inventory Tracking",
      description: "Real-time location of every trailer, container, and chassis eliminating manual yard checks and stale inventory reports.",
      icon: Warehouse,
      tag: "05 // ASSET TRACKING",
    },
    {
      title: "Dock Door & Labor Alignment",
      description: "Orchestrate dock door staging, labor scheduling, and spotter moves to keep trailers flowing with zero unnecessary dwell time.",
      icon: BarChart3,
      tag: "06 // DOCK DWELL",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="SYSTEM ARCHITECTURE • AI-NATIVE PLATFORM"
        title="What is Dulku Freight YOS™?"
        subtitle="The only end-to-end, AI-native configurable yard automation platform where agents interact seamlessly with yard workflows, material, and workers to drive process transformation from gate to dock."
        image={networkOps}
        imageAlt="Connected logistics network visualization"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "System", value: "Yard Operations" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      {/* Overview Statement Box */}
      <section className="bg-[#0c0c0e] py-16 border-y border-[#262626]">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
            PLATFORM OVERVIEW
          </p>
          <p className="mt-4 text-xl sm:text-2xl font-normal leading-relaxed text-white">
            The Dulku Freight Yard Operating System™ is built to close the technology and data gaps in yard logistics. It provides a unified solution beginning with pre-planning in your TMS and WMS, then automates operations from the gate to the warehouse dock. Using advanced computer vision and AI, Dulku Freight replaces manual processes with an intelligent workflow that improves throughput and delivers repeatable ROI.
          </p>
        </div>
      </section>

      {/* Telemetry Metrics */}
      <VisualMetricsSection
        eyebrow="PLATFORM TELEMETRY"
        title="End-to-End Intelligence Across Gate, Yard & Dock"
        metrics={metrics}
      />

      {/* Pillars Bento Grid */}
      <CapabilitiesMatrix
        eyebrow="THREE PILLARS OF YOS"
        title="Core System Capabilities & Modular Applications"
        items={pillars}
      />

      {/* Visual Pillar Cards with Images */}
      <section className="bg-[#0c0c0e] py-20 border-t border-[#262626]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 space-y-8">
          <article className="grid items-center gap-8 overflow-hidden rounded-2xl border border-[#262626] bg-[#121212] md:grid-cols-2">
            <img src={gateEntry} alt="Gate automation" className="h-full min-h-64 w-full object-cover" />
            <div className="p-8 sm:p-10">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
                01 // GATE APPLICATION
              </span>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Automated Gate Check-In
              </h3>
              <p className="mt-4 leading-relaxed text-[#aaaaaa]">
                Vision computer systems scan license plates, container IDs, and seal numbers instantly—removing queue bottlenecks and automating TMS appointment matching.
              </p>
            </div>
          </article>

          <article className="grid items-center gap-8 overflow-hidden rounded-2xl border border-[#262626] bg-[#121212] md:grid-cols-2">
            <div className="p-8 sm:p-10 order-2 md:order-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
                02 // YARD APPLICATION
              </span>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Continuous Yard Visibility
              </h3>
              <p className="mt-4 leading-relaxed text-[#aaaaaa]">
                Track every trailer, container, and chassis in real time. AI agents sequence spotter moves based on live dock demand and arrival priority.
              </p>
            </div>
            <img src={yardAerial} alt="Yard tracking" className="h-full min-h-64 w-full object-cover order-1 md:order-2" />
          </article>
        </div>
      </section>

      <PortConnectivitySection />
      <InteractiveRelatedServices currentPath="/what-is-terminal-yos" />
      <SubpageCtaSection
        title="See Dulku Freight YOS™ Running in Your Yard"
        subtitle="Schedule a demo or run a 2-day proof of value with our logistics team."
      />
    </main>
  );
}
