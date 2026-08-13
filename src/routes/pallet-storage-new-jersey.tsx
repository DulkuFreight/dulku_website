import { createFileRoute } from "@tanstack/react-router";
import palletStorageHero from "@/assets/pallet-storage-hero.png";
import {
  SubpageHero,
  InteractiveProcessSection,
  PalletStorageServicesSection,
  OperationalComparison,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Warehouse, Lock, Database, Clock, ShieldCheck, Zap, Layers, MapPin } from "lucide-react";

const TITLE = "Pallet Storage & Warehouse Warehousing New Jersey | Dulku Freight";
const DESCRIPTION =
  "Flexible short-term and long-term pallet storage in Carteret, NJ near Port Newark. Secure 3PL warehouse facility for importers & distributors.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/pallet-storage-new-jersey")({
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
  component: PalletStoragePage,
});

function PalletStoragePage() {
  const steps = [
    {
      step: "01",
      title: "Inbound Pallet Receiving",
      badge: "GATE-IN",
      description:
        "Pallets arrive via your carrier or are pulled directly from Port Newark. Inbound pallets are logged and inspected.",
      details: [
        "Inbound inspection & condition check",
        "Pallet dimension verification",
        "Receiving PO manifest logging",
      ],
    },
    {
      step: "02",
      title: "Tagging & Location Assignment",
      badge: "LOGGING",
      description:
        "Every pallet is assigned an organized bin location in our warehouse tracking system.",
      details: [
        "Bin location tracking",
        "SKU & lot number logging",
        "Inventory record creation",
      ],
    },
    {
      step: "03",
      title: "Secure High-Bay Storage",
      badge: "PROTECTED STORAGE",
      description:
        "Freight is safely stored in our monitored Carteret, NJ facility equipped with physical security controls.",
      details: [
        "Monitored facility & gated perimeter",
        "High-density pallet racking & bulk staging",
        "Clean, organized warehouse environment",
      ],
    },
    {
      step: "04",
      title: "On-Demand Pick & Outbound Release",
      badge: "DISPATCH",
      description:
        "Submit release instructions to our team. We retrieve your designated pallets and load outbound trucks.",
      details: [
        "Outbound truck loading",
        "LTL & FTL pick & load staging",
        "Instant shipping notification & BOL generation",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Flexible Short-Term & Overflow Storage",
      description: "Pallet storage for seasonal surges, port delays, or warehouse overflows.",
      icon: Warehouse,
      tag: "FLEXIBLE STORAGE",
    },
    {
      title: "High-Bay Racking & Bulk Staging",
      description: "Equipped for standard 48x40 pallets, oversized machinery, and heavy industrial freight.",
      icon: Layers,
      tag: "HIGH-BAY RACKS",
    },
    {
      title: "Secure Facility & Perimeter",
      description: "Monitored warehouse security, gated perimeter fence, and access control.",
      icon: Lock,
      tag: "SECURE STORAGE",
    },
    {
      title: "Organized Inventory Management",
      description: "Track pallet bin locations, SKU quantities, receiving timestamps, and outbound dispatches.",
      icon: Database,
      tag: "INVENTORY TRACKING",
    },
    {
      title: "Prompt In/Out Dispatch",
      description: "Pallet retrieval and truck loading upon receiving your release orders.",
      icon: Zap,
      tag: "FAST RELEASE",
    },
    {
      title: "Port Newark & NYC Gateway",
      description: "Conveniently located near Port Newark, Elizabeth, and major transportation corridors.",
      icon: MapPin,
      tag: "NJ GATEWAY",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="CARTERET, NJ SECURE PALLET STORAGE & WAREHOUSING"
        title="Short-Term & Long-Term Pallet Storage in New Jersey"
        subtitle="Need secure warehouse space near Port Newark? Dulku Freight offers flexible pallet storage, rack storage, and floor staging with facility security and organized inventory management."
        image={palletStorageHero}
        imageAlt="Dulku Freight Warehouse Pallet Storage Facility in New Jersey"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "Storage Type", value: "Pallet Storage" },
          { label: "Facility Access", value: "Port Newark" },
        ]}
      />

      {/* Factual Pallet Storage Services Section */}
      <PalletStorageServicesSection />

      {/* Operational Comparison */}
      <OperationalComparison
        eyebrow="WHY CHOOSE DULKU WAREHOUSING"
        title="Transparent Daily/Monthly Pallet Storage Near Port Newark"
        traditionalTitle="Fixed 3PL Warehouses / Strict Leases"
        traditionalPoints={[
          "Multi-year contracts with expensive minimum volume guarantees",
          "Hidden fees for inbound receiving, bin moves, and outbound releases",
          "Missing visibility into pallet locations",
          "High risk of lost pallets in unorganized storage facilities",
        ]}
        dulkuTitle="Dulku Flexible Pallet Storage Facility"
        dulkuPoints={[
          "Flexible daily, weekly, or monthly pallet storage solutions",
          "Transparent pricing with clear handling and storage rates",
          "Organized warehouse bin tracking by SKU and pallet tag",
          "Secure warehouse facility with monitored access control",
        ]}
      />

      {/* Interactive Process */}
      <InteractiveProcessSection
        eyebrow="STORAGE WORKFLOW"
        title="How Our Pallet Storage Process Works"
        subtitle="From receiving to bin racking and outbound dispatch, your cargo is fully protected."
        steps={steps}
      />

      {/* Capabilities Matrix */}
      <CapabilitiesMatrix
        eyebrow="STORAGE CAPABILITIES"
        title="High-Bay Racking & Secure Staging Infrastructure"
        items={capabilities}
      />

      {/* Port Connectivity */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/pallet-storage-new-jersey" />

      {/* CTA */}
      <SubpageCtaSection
        title="Reserve Your Pallet Storage Space Today"
        subtitle="Get an immediate per-pallet storage estimate and reserve warehouse space in Carteret, NJ."
      />
    </main>
  );
}
