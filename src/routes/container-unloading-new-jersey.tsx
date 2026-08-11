import { createFileRoute } from "@tanstack/react-router";
import containerUnloadingHero from "@/assets/container-unloading-hero.png";
import {
  SubpageHero,
  InteractiveProcessSection,
  ContainerUnloadingServicesSection,
  OperationalComparison,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Box, Layers, CheckCircle2, Zap, BarChart3, Truck } from "lucide-react";

const TITLE = "Container Unloading & Stripping New Jersey | Dulku Freight";
const DESCRIPTION =
  "Professional ocean container unloading, floor-loaded cargo stripping, palletizing, shrink wrapping, and sorting in Avenel, NJ near Port Newark.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/container-unloading-new-jersey")({
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
  component: ContainerUnloadingPage,
});

function ContainerUnloadingPage() {
  const steps = [
    {
      step: "01",
      title: "Ocean Container Gate-In",
      badge: "RECEIVING",
      description:
        "Drayage truck delivers 20ft, 40ft, or 45ft ocean containers from Port Newark to our Avenel, NJ terminal.",
      details: [
        "Inbound seal and container verification",
        "Efficient dock door assignment",
        "Chassis unloading support",
      ],
    },
    {
      step: "02",
      title: "Devanning & Floor-Loaded Stripping",
      badge: "DE-STUFFING",
      description:
        "Warehouse teams unload floor-loaded cartons, heavy crates, or palletized import cargo safely.",
      details: [
        "Careful hand-unloading for floor-loaded cartons",
        "Pallet sorting by SKU and purchase order",
        "Forklift support for heavy crates",
      ],
    },
    {
      step: "03",
      title: "Custom Pallet Stacking & Shrink Wrap",
      badge: "PALLETIZING",
      description:
        "Cargo is palletized onto standard heat-treated pallets and stretch wrapped for transit stability.",
      details: [
        "Industrial stretch wrap application",
        "Corner board protectors for stability",
        "Clean pallet rebuilding",
      ],
    },
    {
      step: "04",
      title: "Piece-Count Audit & Storage / Reload",
      badge: "AUDIT REPORT",
      description:
        "Carton count and SKU verification are completed before freight is staged for shipping or warehousing.",
      details: [
        "Piece-count verification",
        "Cargo condition check",
        "Staging for trailer reload or storage",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Floor-Loaded Cargo Devanning",
      description: "Specialized warehouse teams for unloading floor-loaded import cartons.",
      icon: Box,
      tag: "FLOOR-LOADED",
    },
    {
      title: "Pallet Building & Stacking",
      description: "Custom pallet stacking matched to your warehousing or distribution requirements.",
      icon: Layers,
      tag: "PALLETIZING",
    },
    {
      title: "SKU Sorting & Inspection",
      description: "Carton sorting by part number, lot number, or destination specifications.",
      icon: BarChart3,
      tag: "SKU AUDIT",
    },
    {
      title: "Chassis Dispatch Support",
      description: "Prompt container stripping to support drayage chassis turnarounds.",
      icon: Truck,
      tag: "CHASSIS TURN",
    },
    {
      title: "Reefer & Dry Cargo Unloading",
      description: "Equipped to handle dry commercial products, retail goods, and industrial freight.",
      icon: Zap,
      tag: "ALL FREIGHT",
    },
    {
      title: "Outbound Trailer Reloading",
      description: "Direct reloading from devanned containers into 53ft outbound dry vans.",
      icon: CheckCircle2,
      tag: "RELOAD",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Immersive Subpage Hero */}
      <SubpageHero
        eyebrow="AVENEL, NJ OCEAN CONTAINER STRIPPING NEAR PORT NEWARK"
        title="Container Unloading, De-stuffing & Palletizing in New Jersey"
        subtitle="Fast, precise container devanning and floor-loaded cargo unloading. Dulku Freight handles 20ft, 40ft, and 45ft import containers from Port Newark with professional palletizing, sorting, and inventory count audits."
        image={containerUnloadingHero}
        imageAlt="Dulku Freight Container Unloading Facility in New Jersey"
        metrics={[
          { label: "Location", value: "Avenel, NJ" },
          { label: "Equipment", value: "20/40/45 FT" },
          { label: "Port Corridor", value: "Port Newark" },
        ]}
      />

      {/* Factual Container Unloading Services Section */}
      <ContainerUnloadingServicesSection />

      {/* Operational Comparison */}
      <OperationalComparison
        eyebrow="WHY IMPORTERS TRUST DULKU"
        title="Avoid Demurrage & Protect Fragile Import Freight"
        traditionalTitle="Unqualified Lumpers / Slow Warehouses"
        traditionalPoints={[
          "Slow manual devanning causing severe port demurrage and chassis fees",
          "Damaged cartons, incorrect pallet builds, and unaligned stacking",
          "Inaccurate piece counts and unorganized receiving",
          "Inability to handle heavy or floor-loaded container shipments",
        ]}
        dulkuTitle="Dulku Dedicated Container Stripping Terminal"
        dulkuPoints={[
          "Efficient devanning for rapid container chassis return",
          "Standard GMA palletizing built for safe storage and road transport",
          "Piece-count verification and physical cargo inspection",
          "Experienced warehouse teams equipped for floor-loaded import cargo",
        ]}
      />

      {/* Interactive Process */}
      <InteractiveProcessSection
        eyebrow="DEVANNED WORKFLOW"
        title="Our Unloading & Palletizing Workflow"
        subtitle="From container arrival at our Avenel depot to final audit dispatch, every carton is accounted for."
        steps={steps}
      />

      {/* Capabilities Matrix */}
      <CapabilitiesMatrix
        eyebrow="DEVANNING CAPABILITIES"
        title="Full-Service Ocean Container Stripping & Prep"
        items={capabilities}
      />

      {/* Port Connectivity */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/container-unloading-new-jersey" />

      {/* CTA */}
      <SubpageCtaSection
        title="Book Container Unloading Services Today"
        subtitle="Schedule your container arrival or request a transparent per-container stripping quote from our Avenel, NJ operations team."
      />
    </main>
  );
}
