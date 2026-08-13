import { createFileRoute, Link } from "@tanstack/react-router";
import marketsHero from "@/assets/markets-hero.png";
import {
  SubpageHero,
  VisualMetricsSection,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Truck, ShoppingBag, Warehouse, ShieldCheck, Zap, Layers, RefreshCw, BarChart3 } from "lucide-react";

const TITLE = "Markets & Industries Served | Dulku Freight New Jersey";
const DESCRIPTION =
  "Dulku Freight delivers cross-docking, container transloading, warehouse storage, and 3PL fulfillment services in Carteret, NJ near Port Newark, supporting importers, trucking companies, freight forwarders, distributors, and eCommerce brands.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/markets")({
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
  component: MarketsPage,
});

function MarketsPage() {
  const metrics = [
    {
      stat: "3PL & FREIGHT",
      label: "LOGISTICS PROVIDERS",
      description: "Evidence-backed gate records, accurate billing events, and customer visibility.",
      icon: Truck,
    },
    {
      stat: "RETAIL / CPG",
      label: "DISTRIBUTION",
      description: "Protect service levels during peaks with automated check-in and dock sequencing.",
      icon: ShoppingBag,
    },
    {
      stat: "COLD CHAIN",
      label: "FOOD & PERISHABLES",
      description: "Reduce detention exposure and keep temperature-sensitive loads moving.",
      icon: ShieldCheck,
    },
    {
      stat: "ENTERPRISE",
      label: "MULTI-SITE NETWORKS",
      description: "Global control tower with network-wide KPIs, dwell benchmarking, and cross-site flow.",
      icon: BarChart3,
    },
  ];

  const segments = [
    {
      title: "Medium-Sized Operations",
      description: "One yard, one problem, one application. Go live in days at low cost and prove value before you expand.",
      icon: Zap,
      tag: "RAPID DEPLOYMENT",
    },
    {
      title: "Multi-Site Operators",
      description: "Standardize gate and yard execution across sites while each facility keeps the custom configuration it needs.",
      icon: Layers,
      tag: "MULTI-SITE",
    },
    {
      title: "Enterprise Networks",
      description: "A global control tower with network-wide KPIs, dwell benchmarking, and cross-site orchestration.",
      icon: BarChart3,
      tag: "ENTERPRISE",
    },
    {
      title: "3PL & Logistics Providers",
      description: "Evidence-backed gate records, accurate billing events, and customer-facing visibility per account.",
      icon: Truck,
      tag: "3PL LOGISTICS",
    },
    {
      title: "Retail & CPG Distribution",
      description: "Protect service levels during volume peaks with automated check-in and dock sequencing that scales.",
      icon: ShoppingBag,
      tag: "RETAIL & CPG",
    },
    {
      title: "Cold Chain & Food Logistics",
      description: "Reduce detention exposure and keep temperature-sensitive reefer loads moving with predictable turns.",
      icon: RefreshCw,
      tag: "COLD CHAIN",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="INDUSTRIES & SECTORS SERVED"
        title="Tailored Logistics Solutions Built for Your Supply Chain"
        subtitle="Dulku Freight supports regional trucking carriers, 3PL providers, importers, and distributors with efficient cross-docking, transloading, and warehousing near Port Newark."
        image={marketsHero}
        imageAlt="Multi-industry freight logistics hub"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "Industries", value: "Supply Chain" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      {/* Visual Statistics */}
      <VisualMetricsSection
        eyebrow="SECTOR COVERAGE"
        title="Customized Terminal Execution Across Key Market Segments"
        metrics={metrics}
      />

      {/* Capabilities Bento Grid */}
      <CapabilitiesMatrix
        eyebrow="WHO WE SERVE"
        title="Tailored Operational Architectures"
        items={segments}
      />

      {/* Port Connectivity */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/markets" />

      {/* CTA */}
      <SubpageCtaSection
        title="Run the Numbers on Your Facility"
        subtitle="Discuss your logistics requirements with our Carteret, NJ operations team today."
      />
    </main>
  );
}
