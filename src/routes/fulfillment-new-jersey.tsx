import { createFileRoute } from "@tanstack/react-router";
import fulfillmentHero from "@/assets/fulfillment-hero.png";
import {
  SubpageHero,
  InteractiveProcessSection,
  FulfillmentServicesSection,
  OperationalComparison,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { ShoppingBag, PackageCheck, BarChart3, Clock, ShieldCheck, Zap, Layers, Truck } from "lucide-react";

const TITLE = "3PL Fulfillment & Distribution Services New Jersey | Dulku Freight";
const DESCRIPTION =
  "3PL fulfillment, pick & pack, inventory management, and B2B/eCommerce distribution services in Avenel, NJ near Port Newark.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/fulfillment-new-jersey")({
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
  component: FulfillmentPage,
});

function FulfillmentPage() {
  const steps = [
    {
      step: "01",
      title: "Inbound Receiving & Stocking",
      badge: "RECEIVING",
      description:
        "Freight or cartons arrive at our Avenel, NJ facility. Cargo is checked in and placed into designated warehouse locations.",
      details: [
        "Inbound SKU verification",
        "Carton count check",
        "Warehouse stocking",
      ],
    },
    {
      step: "02",
      title: "Order Entry & Queue",
      badge: "ORDER QUEUE",
      description:
        "Order requests are imported and queued for warehouse picking and preparation.",
      details: [
        "Order verification",
        "Picking list generation",
        "Inventory allocation",
      ],
    },
    {
      step: "03",
      title: "Pick, Pack & Kitting",
      badge: "PICK & PACK",
      description:
        "Warehouse teams pick items, box orders, add protective packaging, and apply shipping labels.",
      details: [
        "Order item picking",
        "Carton packing & insert placement",
        "Shipping label application",
      ],
    },
    {
      step: "04",
      title: "Outbound Dispatch",
      badge: "DISPATCH",
      description:
        "Carrier pickups and freight dispatches move orders to regional distribution channels.",
      details: [
        "Outbound carrier staging",
        "Tracking generation",
        "Regional dispatch",
      ],
    },
  ];

  const capabilities = [
    {
      title: "B2B & B2C Order Pick & Pack",
      description: "Order fulfillment for direct-to-consumer orders and wholesale retail store replenishment.",
      icon: PackageCheck,
      tag: "PICK & PACK",
    },
    {
      title: "Order Kitting & Bundling",
      description: "Custom assembly, promotional insert placement, and multi-item product packaging.",
      icon: Layers,
      tag: "KITTING",
    },
    {
      title: "Inventory Stocking & Storage",
      description: "Organized warehouse storage and inventory tracking for order fulfillment.",
      icon: BarChart3,
      tag: "INVENTORY",
    },
    {
      title: "Standard Prep & Labeling",
      description: "Carton labeling, poly-bagging, and pallet prep for retail and distribution networks.",
      icon: ShieldCheck,
      tag: "PREP & LABEL",
    },
    {
      title: "Outbound Dispatch Support",
      description: "Daily coordination with parcel carriers, LTL trucking, and regional freight dispatch.",
      icon: Zap,
      tag: "DISPATCH",
    },
    {
      title: "Northeast Regional Hub Access",
      description: "Strategic Avenel, NJ location near major transportation hubs and shipping routes.",
      icon: Truck,
      tag: "REGIONAL HUB",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow="AVENEL, NJ 3PL FULFILLMENT & DISTRIBUTION HUB"
        title="3PL Warehouse Fulfillment & Order Distribution in New Jersey"
        subtitle="Scale your business distribution. Dulku Freight provides 3PL order fulfillment, pick and pack, kitting, prep, and freight shipping from Avenel, NJ."
        image={fulfillmentHero}
        imageAlt="Dulku Freight 3PL Fulfillment Operations in New Jersey"
        metrics={[
          { label: "Location", value: "Avenel, NJ" },
          { label: "Core Service", value: "3PL Fulfillment" },
          { label: "Access", value: "Port Newark" },
        ]}
      />

      {/* Factual Fulfillment Services Section */}
      <FulfillmentServicesSection />

      {/* Operational Comparison */}
      <OperationalComparison
        eyebrow="WHY CHOOSE DULKU FOR 3PL"
        title="Eliminate Shipping Delays & Mis-Ships"
        traditionalTitle="Outdated 3PL Centers / Slow Shipping"
        traditionalPoints={[
          "Slow order turnaround leading to delivery delays",
          "Frequent mis-ships and unorganized packing",
          "Opaque billing with hidden per-item fees",
          "Inflexible warehousing contracts",
        ]}
        dulkuTitle="Dulku Modern 3PL Fulfillment Hub"
        dulkuPoints={[
          "Attentive pick and pack handling by dedicated warehouse teams",
          "Transparent pricing structures for storage and handling",
          "Organized inventory receiving and location tracking",
          "Flexible warehousing solutions tailored to your operational needs",
        ]}
      />

      {/* Interactive Process */}
      <InteractiveProcessSection
        eyebrow="FULFILLMENT WORKFLOW"
        title="Our 4-Step Order Fulfillment Workflow"
        subtitle="From receiving inventory to packing boxes and carrier pickups, every order is handled seamlessly."
        steps={steps}
      />

      {/* Capabilities Matrix */}
      <CapabilitiesMatrix
        eyebrow="FULFILLMENT CAPABILITIES"
        title="Full-Service E-Commerce & Wholesale Distribution"
        items={capabilities}
      />

      {/* Port Connectivity */}
      <PortConnectivitySection />

      {/* Related Services */}
      <InteractiveRelatedServices currentPath="/fulfillment-new-jersey" />

      {/* CTA */}
      <SubpageCtaSection
        title="Request a Custom 3PL Fulfillment Proposal"
        subtitle="Get a customized order fulfillment and warehousing proposal for your business from our Avenel, NJ operations desk."
      />
    </main>
  );
}
