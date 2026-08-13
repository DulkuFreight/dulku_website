import { createFileRoute } from "@tanstack/react-router";
import palletRestackingHero from "@/assets/pallet-restacking-hero.png";
import {
  SubpageHero,
  InteractiveProcessSection,
  PalletRestackingServicesSection,
  OperationalComparison,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { RefreshCw, AlertTriangle, Clock, ShieldCheck, Zap, Layers, Box, Truck } from "lucide-react";

const TITLE = "Pallet Restacking, Rework & Shifted Load Fix New Jersey | Dulku Freight";
const DESCRIPTION =
  "Emergency pallet restacking, shifted load correction, damaged freight rework, and re-palletizing services in Carteret, NJ near Port Newark for trucking lines.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/pallet-restacking-new-jersey")({
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
  component: PalletRestackingPage,
});

function PalletRestackingPage() {
  const steps = [
    {
      step: "01",
      title: "Dock Entry & Cargo Inspection",
      badge: "REWORK RECEIVING",
      description:
        "Trucks with turned-away, shifted, or leaning freight gate into our Carteret, NJ dock bay. Our team inspects cargo condition before unloading.",
      details: [
        "Dock assignment for turned-away trucks",
        "Initial cargo inspection",
        "Driver check-in at dock",
      ],
    },
    {
      step: "02",
      title: "Unstacking & Cargo Rework",
      badge: "LOAD REWORK",
      description:
        "Experienced teams unstack collapsed or leaning pallets. Damaged wood is replaced with heat-treated pallets, and cargo is rebuilt safely.",
      details: [
        "Safe unstacking of leaning freight",
        "Replacement with heat-treated pallets",
        "Rebuilding according to warehouse standards",
      ],
    },
    {
      step: "03",
      title: "Stretch Wrap & Corner Protection",
      badge: "LOAD STABILIZATION",
      description:
        "Restacked pallets are bound with heavy-duty stretch wrap and corner boards to ensure stability during transit.",
      details: [
        "Heavy-duty stretch film wrapping",
        "Corner board protectors applied for rigidity",
        "Outbound label placement",
      ],
    },
    {
      step: "04",
      title: "Weight Rebalance & Outbound Dispatch",
      badge: "DISPATCH",
      description:
        "Cargo is reloaded and weight distributed across trailer axles to ensure compliance with scale house limits before driver returns to the road.",
      details: [
        "Axle weight rebalancing",
        "Outbound seal verification",
        "Driver dispatched for delivery",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Shifted Load & Leaning Pallet Fix",
      description: "Safely unstack collapsed or leaning pallets without causing product damage.",
      icon: RefreshCw,
      tag: "SHIFTED LOADS",
    },
    {
      title: "Axle Weight Rebalancing",
      description: "Shift cargo weight across trailer axles to comply with highway scale limits.",
      icon: ShieldCheck,
      tag: "WEIGHT REBALANCE",
    },
    {
      title: "Broken Pallet Replacement",
      description: "Transfer damaged freight onto heavy-duty heat-treated GMA pallets.",
      icon: Box,
      tag: "WOOD REPLACEMENT",
    },
    {
      title: "DC Rejected Load Rework",
      description: "Fix distribution center compliance rejections and re-apply scannable labels.",
      icon: Layers,
      tag: "DC REWORK",
    },
    {
      title: "Industrial Stretch Wrap & Banding",
      description: "Heavy-duty stretch film, corner boards, and strapping for transport safety.",
      icon: Zap,
      tag: "HEAVY WRAPPING",
    },
    {
      title: "Receiving & Outbound Verification",
      description: "Inspection details provided upon request for carrier and shipper records.",
      icon: Truck,
      tag: "CARGO VERIFICATION",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="EMERGENCY PALLET REWORK & SHIFTED LOAD FIX IN CARTERET, NJ"
        title="Pallet Restacking, Load Rebalance & Cargo Rework in New Jersey"
        subtitle="Did your trailer load shift during transit or get rejected at a distribution center? Dulku Freight provides pallet restacking, load rebalancing, container re-palletizing, and shrink wrapping near Port Newark."
        image={palletRestackingHero}
        imageAlt="Dulku Freight Emergency Pallet Restacking in New Jersey"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "Core Service", value: "Pallet Rework" },
          { label: "Facility Access", value: "Port Newark" },
        ]}
      />

      {/* Factual Pallet Restacking Services Section */}
      <PalletRestackingServicesSection />

      {/* Operational Comparison */}
      <OperationalComparison
        eyebrow="WHY TRUCKERS CALL DULKU FOR REWORK"
        title="Turn Rejected Freight Into Delivery-Ready Payload"
        traditionalTitle="Turned-Away at DC / Shifted Load Crisis"
        traditionalPoints={[
          "Rejected truckload stranded with nowhere to go, causing driver downtime",
          "Risk of highway scale house overweight fines for improper axle balance",
          "Unsafe leaning pallets threatening to tip over and damage products",
          "Lack of immediate dock support for load adjustment",
        ]}
        dulkuTitle="Dulku Emergency Rework Terminal"
        dulkuPoints={[
          "Dedicated dock bay access in Carteret, NJ near major transport corridors",
          "Experienced warehouse teams who safely unstack and rebuild leaning cargo",
          "Pallet replacement, stretch wrapping, and corner guards",
          "Axle weight rebalancing for compliant highway transport",
        ]}
      />

      {/* Interactive Process */}
      <InteractiveProcessSection
        eyebrow="REWORK WORKFLOW"
        title="Our Emergency Load Rework Process"
        subtitle="From emergency arrival to scale verification, we get your driver back on the road fast."
        steps={steps}
      />

      {/* Capabilities Matrix */}
      <CapabilitiesMatrix
        eyebrow="REWORK CAPABILITIES"
        title="Comprehensive Load Stabilization & Pallet Repair"
        items={capabilities}
      />

      {/* Port Connectivity */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/pallet-restacking-new-jersey" />

      {/* CTA */}
      <SubpageCtaSection
        title="Have a Shifted or Rejected Load Right Now?"
        subtitle="Submit your request below for instant dock door assignment in Carteret, NJ."
      />
    </main>
  );
}
