import { createFileRoute } from "@tanstack/react-router";
import crossDockHero from "@/assets/cross-dock-hero.png";
import {
  SubpageHero,
  InteractiveProcessSection,
  VisualMetricsSection,
  OperationalComparison,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
  CrossDockServicesSection,
} from "@/components/site/SubpagePrimitives";
import { Clock, ShieldCheck, Truck, Zap, Layers, RefreshCw, BarChart3, Box } from "lucide-react";

const TITLE = "Cross-Docking Services New Jersey | Dulku Freight";
const DESCRIPTION =
  "Fast, reliable cross-docking services in Carteret, NJ near Port Newark & Port Elizabeth. Same-day transloading, freight consolidation, and outbound distribution for carriers, 3PLs, and importers.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/cross-dock-new-jersey")({
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
  component: CrossDockPage,
});

function CrossDockPage() {
  const steps = [
    {
      step: "01",
      title: "Inbound Trailer / Container Arrival",
      description:
        "Truck arrives at our Carteret, NJ terminal. Inbound seal verification, piece count, and dock door assignment.",
      detail:
        "Priority dock levelers and high-capacity forklift unloading for palletized or floor-loaded freight.",
    },
    {
      step: "02",
      title: "Receiving Audit & Freight Inspection",
      description:
        "Detailed inspection of cargo condition, pallet count verification, and SKU segregation.",
      detail:
        "Instant identification of shifted, damaged, or leaning cargo with immediate restacking options.",
    },
    {
      step: "03",
      title: "Cross-Dock Transfer & Outbound Staging",
      description:
        "Freight is moved directly across the warehouse floor to dedicated outbound staging bays.",
      detail:
        "No unnecessary warehouse rack storage—minimizing dwell time and eliminating storage fees.",
    },
    {
      step: "04",
      title: "Outbound Loading & Rapid Dispatch",
      description:
        "Cargo is reloaded into 53' dry vans or over-the-road trailers, sealed, and dispatched.",
      detail:
        "Complete bill of lading generation and outbound seal documentation for carrier sign-off.",
    },
  ];

  const metrics = [
    {
      stat: "15 MIN",
      label: "PORT NEWARK DISTANCE",
      description: "Direct access to Maher, APM, and PNCT steamship terminals via I-95.",
      icon: Truck,
    },
    {
      stat: "< 2 HRS",
      label: "DOCK TURNAROUND",
      description: "Fast-track receiving, sorting, and loading directly onto outbound trucks.",
      icon: Clock,
    },
    {
      stat: "99.8%",
      label: "AUDIT ACCURACY",
      description: "Digital barcode scanning and piece-count verification on every bay.",
      icon: ShieldCheck,
    },
    {
      stat: "$0",
      label: "STORAGE DWELL PENALTY",
      description: "Bypass costly long-term warehouse storage fees and port demurrage.",
      icon: Zap,
    },
  ];

  const capabilities = [
    {
      title: "Trailer-to-Trailer Cross-Docking",
      description: "Direct freight transfer between inbound and outbound over-the-road trailers.",
      icon: Truck,
      tag: "TRAILER TRANSFER",
    },
    {
      title: "Ocean Container Transloading",
      description: "Stripping 20' & 40' import containers directly into 53' domestic dry vans.",
      icon: RefreshCw,
      tag: "CONTAINER STRIPPING",
    },
    {
      title: "Shifted Load Rework & Restacking",
      description: "Emergency correction for rejected loads, fallen pallets, and overweight axles.",
      icon: Layers,
      tag: "EMERGENCY REWORK",
    },
    {
      title: "Same-Day Priority Docking",
      description: "Urgent dock doors for time-sensitive freight and demurrage prevention.",
      icon: Clock,
      tag: "SAME-DAY DOCK",
    },
    {
      title: "Freight Audits & Documentation",
      description: "Piece-count verification, photo receiving audits, and instant BOL documentation.",
      icon: BarChart3,
      tag: "PIECE COUNT AUDIT",
    },
    {
      title: "High-Capacity Heavy Rigging",
      description: "Equipped with heavy-duty forklifts and experienced warehouse operators for heavy freight.",
      icon: Box,
      tag: "HEAVY RIGGING",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Immersive Subpage Hero */}
      <SubpageHero
        eyebrow="CARTERET, NJ CROSS-DOCKING TERMINAL NEAR PORT NEWARK"
        title="Same-Day Cross-Docking & Freight Transfer in New Jersey"
        subtitle="Eliminate warehouse dwell times and streamline your supply chain. Dulku Freight provides rapid cross-docking, cargo consolidation, and outbound re-routing just minutes from Port Newark and Port Elizabeth."
        image={crossDockHero}
        imageAlt="Dulku Freight Cross-Dock Facility in New Jersey"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "Core Service", value: "Cross-Dock" },
          { label: "Port Corridor", value: "Port Newark" },
        ]}
      />

      {/* Factual Cross-Docking Services Section */}
      <CrossDockServicesSection />

      {/* Operational Comparison: Traditional vs Dulku */}
      <OperationalComparison
        eyebrow="WHY CHOOSE DULKU FOR CROSS-DOCKING"
        title="Eliminate Warehouse Storage Fees & Port Demurrage"
        traditionalTitle="Standard Warehouses / Slow Port Terminals"
        traditionalPoints={[
          "Days of unneeded warehouse staging and extra handling fees",
          "High risk of container demurrage and chassis detention charges",
          "Inaccurate manual piece counts and missing shipment visibility",
          "No emergency support for shifted or rejected truckloads",
        ]}
        dulkuTitle="Dulku Freight Dedicated Cross-Dock Terminal"
        dulkuPoints={[
          "Direct trailer-to-trailer freight cross-docking for fast turnaround",
          "Strategic location in Carteret, NJ near Port Newark and Port Elizabeth",
          "Piece-count verification and cargo inspection upon dock arrival",
          "Responsive dock support for shifted loads, reworks, and urgent transfers",
        ]}
      />

      {/* Step-by-Step Interactive Process */}
      <InteractiveProcessSection
        eyebrow="OPERATIONAL WORKFLOW"
        title="Our 4-Step Rapid Cross-Dock Process"
        subtitle="Every shipment is received, audited, sorted, and dispatched with digital precision."
        steps={steps}
      />

      {/* Capabilities Bento Grid */}
      <CapabilitiesMatrix
        eyebrow="SERVICE CAPABILITIES"
        title="Full-Spectrum Cross-Docking & Freight Handling"
        items={capabilities}
      />

      {/* Port Connectivity Matrix */}
      <PortConnectivitySection />

      {/* Interactive Related Services */}
      <InteractiveRelatedServices currentPath="/cross-dock-new-jersey" />

      {/* Subpage CTA */}
      <SubpageCtaSection
        title="Need Immediate Cross-Docking in New Jersey?"
        subtitle="Contact our dispatch desk in Carteret, NJ for fast rates, dock door availability, and immediate load scheduling."
      />
    </main>
  );
}
