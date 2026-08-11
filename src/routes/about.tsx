import { createFileRoute } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.png";
import {
  SubpageHero,
  VisualMetricsSection,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { ShieldCheck, Zap, Layers, Truck, MapPin, BarChart3, Warehouse, Clock } from "lucide-react";

const TITLE = "About Dulku Freight | Port Newark Cross-Dock & Logistics";
const DESCRIPTION =
  "Dulku Freight delivers cross-docking, container transloading, warehouse storage, and 3PL fulfillment services in Avenel, NJ near Port Newark, supporting importers, trucking companies, freight forwarders, distributors, and eCommerce brands.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  const metrics = [
    {
      stat: "STRATEGIC",
      label: "PORT NEWARK ACCESS",
      description: "Direct highway access to Port Newark and Port Elizabeth ocean terminals.",
      icon: MapPin,
    },
    {
      stat: "ACTIVE",
      label: "DISPATCH DESK",
      description: "Responsive operational support for carriers, importers, and distributors.",
      icon: Clock,
    },
    {
      stat: "FACTUAL",
      label: "PIECE-COUNT AUDITS",
      description: "Cargo verification and physical receiving inspection upon dock arrival.",
      icon: ShieldCheck,
    },
    {
      stat: "EFFICIENT",
      label: "DOCK TURNAROUND",
      description: "Receiving, sorting, and loading directly onto outbound equipment.",
      icon: Zap,
    },
  ];

  const pillars = [
    {
      title: "Operators First",
      description: "Built around the real-world operational needs of drivers, carriers, and warehouse teams.",
      icon: Truck,
      tag: "CORE PRINCIPLE",
    },
    {
      title: "Physical Verification",
      description: "Every receiving event and pallet count is inspected by experienced warehouse personnel.",
      icon: ShieldCheck,
      tag: "VERIFIED",
    },
    {
      title: "Rapid Service Execution",
      description: "Immediate operational assistance when freight needs to move quickly.",
      icon: Zap,
      tag: "RAPID EXECUTION",
    },
    {
      title: "Port Newark Strategic Corridor",
      description: "Positioned along major highway corridors for efficient tri-state freight distribution.",
      icon: MapPin,
      tag: "LOCATION HUB",
    },
    {
      title: "Comprehensive Warehouse Facilities",
      description: "High-bay pallet racking, dedicated dock doors, forklifts, and stretch wrapping equipment.",
      icon: Warehouse,
      tag: "INFRASTRUCTURE",
    },
    {
      title: "Organized Inventory Management",
      description: "Inventory tracking, piece-count verification, and shipping documentation.",
      icon: BarChart3,
      tag: "INVENTORY LOGIC",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="ABOUT DULKU FREIGHT • AVENEL, NJ"
        title="Modern Freight Logistics & Terminal Execution"
        subtitle="Dulku Freight provides cross-docking, container transloading, pallet storage, and 3PL fulfillment services from our facility in Avenel, NJ near Port Newark."
        image={aboutHero}
        imageAlt="Logistics terminal overview"
        metrics={[
          { label: "Location", value: "Avenel, NJ" },
          { label: "Core Service", value: "Cross-Dock & 3PL" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      {/* Visual Statistics */}
      <VisualMetricsSection
        eyebrow="OUR OPERATIONAL IMPACT"
        title="Service-Focused Logistics Built for Transportation Leaders"
        metrics={metrics}
      />

      {/* Pillars Bento Grid */}
      <CapabilitiesMatrix
        eyebrow="OPERATIONAL PHILOSOPHY"
        title="How We Deliver Unmatched Reliability"
        items={pillars}
      />

      {/* Partner Logos / Trust section */}
      <section className="bg-[#0c0c0e] py-16 border-y border-[#262626]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-center text-[#888888]">
            TRUSTED BY LEADING LOGISTICS &amp; TRANSPORTATION NETWORKS
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 font-mono text-sm font-bold uppercase tracking-[0.25em] text-[#aaaaaa]">
            <span className="hover:text-[#F40009] transition-colors">8VC</span>
            <span className="hover:text-[#F40009] transition-colors">Ryder</span>
            <span className="hover:text-[#F40009] transition-colors">Lineage</span>
            <span className="hover:text-[#F40009] transition-colors">Prologis</span>
            <span className="hover:text-[#F40009] transition-colors">NFI</span>
            <span className="hover:text-[#F40009] transition-colors">Maher Terminals</span>
          </div>
        </div>
      </section>

      {/* Port Connectivity Matrix */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/about" />

      {/* CTA */}
      <SubpageCtaSection
        title="Work With Dulku Freight"
        subtitle="Partner with New Jersey's trusted cross-docking, container transloading, and 3PL fulfillment team."
      />
    </main>
  );
}
