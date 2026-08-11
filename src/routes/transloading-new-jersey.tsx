import { createFileRoute } from "@tanstack/react-router";
import transloadingHero from "@/assets/transloading-hero.png";
import {
  SubpageHero,
  InteractiveProcessSection,
  TransloadingServicesSection,
  OperationalComparison,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { RefreshCw, Clock, Truck, ShieldCheck, Zap, Layers, Box, BarChart3 } from "lucide-react";

const TITLE = "Container Transloading Services New Jersey | Dulku Freight";
const DESCRIPTION =
  "Seamless ocean container to dry van transloading, intermodal transfers, and container load reduction near Port Newark & Elizabeth, NJ.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/transloading-new-jersey")({
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
  component: TransloadingPage,
});

function TransloadingPage() {
  const steps = [
    {
      step: "01",
      title: "Port Drayage & Gate Entry",
      badge: "DRAYAGE",
      description:
        "Steamship container is pulled from Port Newark or Elizabeth terminals and arrives at our Avenel, NJ transloading depot.",
      details: [
        "Port Newark proximity",
        "Inbound seal verification",
        "Chassis gate check",
      ],
    },
    {
      step: "02",
      title: "Cargo Stripping & Inspection",
      badge: "UNLOADING",
      description:
        "Floor-loaded or palletized import freight is stripped from ocean containers and inspected for piece counts.",
      details: [
        "Unloading of 20ft, 40ft, and 45ft containers",
        "Overweight load reduction",
        "Cargo condition check",
      ],
    },
    {
      step: "03",
      title: "Consolidation & Pallet Wrapping",
      badge: "RE-PALLETIZING",
      description:
        "Freight is organized, consolidated, palletized onto standard pallets, and stretch wrapped for road transport.",
      details: [
        "Palletizing with stretch wrap",
        "Weight distribution for transport compliance",
        "Outbound shipping label application",
      ],
    },
    {
      step: "04",
      title: "Chassis Return & Outbound Transit",
      badge: "PORT RETURN",
      description:
        "Empty ocean containers are released back to port draymen, while outbound trailers depart for distribution.",
      details: [
        "Prompt container stripping for chassis return",
        "Over-the-road trailer loading",
        "BOL documentation",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Ocean Container to Dry Van Transfer",
      description: "Transfer cargo from steamship containers into 53ft domestic trailers for long-haul transport.",
      icon: RefreshCw,
      tag: "TRANSLOADING",
    },
    {
      title: "Overweight Load Reduction",
      description: "Offload excess weight from heavy import containers to comply with legal highway axle limits.",
      icon: ShieldCheck,
      tag: "WEIGHT BALANCE",
    },
    {
      title: "Chassis Dispatch Support",
      description: "Containers stripped promptly so drayage equipment can return to port terminals.",
      icon: Clock,
      tag: "CHASSIS RETURN",
    },
    {
      title: "Drayage & Transport Coordination",
      description: "Coordination between port draymen, local haulers, and long-haul trucking carriers.",
      icon: Truck,
      tag: "TRANSPORT SUPPORT",
    },
    {
      title: "Intermodal Handling",
      description: "Transloading between ocean containers, 53ft dry vans, and rail equipment.",
      icon: Zap,
      tag: "INTERMODAL",
    },
    {
      title: "Receiving & Piece Count Verification",
      description: "Piece counts, receiving documentation, and cargo condition inspection.",
      icon: BarChart3,
      tag: "CARGO AUDIT",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="AVENEL, NJ TRANSLOADING FACILITY NEAR PORT NEWARK"
        title="Container-to-Truck Transloading Services in New Jersey"
        subtitle="Speed up your port-to-inland distribution. Dulku Freight offers container transloading, ocean-to-over-the-road transfers, intermodal cross-docking, and container weight reduction near Port Newark."
        image={transloadingHero}
        imageAlt="Dulku Freight Transloading Facility in New Jersey"
        metrics={[
          { label: "Location", value: "Avenel, NJ" },
          { label: "Core Service", value: "Transloading" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      {/* Factual Transloading Services Section */}
      <TransloadingServicesSection />

      {/* Operational Comparison */}
      <OperationalComparison
        eyebrow="WHY TRANSLOAD WITH DULKU"
        title="Cut Long-Haul Freight Costs & Eliminate Steamship Fees"
        traditionalTitle="Direct Inland Container Drayage"
        traditionalPoints={[
          "Expensive long-haul container drayage per-mile rates across the country",
          "Accumulating daily chassis per-diem and container detention charges",
          "Risk of highway overweight fines for heavy import containers",
          "Inability to consolidate cargo from multiple ocean containers",
        ]}
        dulkuTitle="Dulku Port Newark Transloading Terminal"
        dulkuPoints={[
          "Transfer ocean container freight directly into 53ft domestic trailers",
          "Prompt container devanning supporting timely chassis returns",
          "Overweight load reduction ensuring legal highway axle compliance",
          "Seamless transfer into domestic dry vans and regional trucking networks",
        ]}
      />

      {/* Interactive Process */}
      <InteractiveProcessSection
        eyebrow="TRANSLOAD WORKFLOW"
        title="Our Container Transloading Process"
        subtitle="From port drayage arrival to empty chassis return, every step is optimized for speed."
        steps={steps}
      />

      {/* Capabilities Matrix */}
      <CapabilitiesMatrix
        eyebrow="SERVICE CAPABILITIES"
        title="Comprehensive Transloading & Intermodal Solutions"
        items={capabilities}
      />

      {/* Port Connectivity */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/transloading-new-jersey" />

      {/* CTA */}
      <SubpageCtaSection
        title="Request a Transloading Rate Quote"
        subtitle="Get competitive per-container transloading rates and fast scheduling for your import containers."
      />
    </main>
  );
}
