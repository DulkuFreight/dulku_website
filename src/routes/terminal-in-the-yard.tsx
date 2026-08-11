import { createFileRoute } from "@tanstack/react-router";
import yardAerial from "@/assets/yard-aerial.jpg";
import {
  SubpageHero,
  VisualMetricsSection,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Warehouse, MapPin, Zap, RefreshCw, BarChart3, ShieldCheck } from "lucide-react";

const TITLE = "In The Yard Real-Time Asset Tracking | Dulku Freight";
const DESCRIPTION =
  "Real-time visibility and workflow automation. Track every trailer, container, and chassis continuously with automated spotter task sequencing.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/terminal-in-the-yard")({
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
  component: YardPage,
});

function YardPage() {
  const metrics = [
    {
      stat: "ACCURATE",
      label: "CONTINUOUS ASSET LOCATION",
      description: "Trailers, containers, and chassis located in real time across the terminal yard.",
      icon: MapPin,
    },
    {
      stat: "ORGANIZED",
      label: "YARD INVENTORY",
      description: "Eliminate manual clipboard audits with organized yard inventory tracking.",
      icon: Warehouse,
    },
    {
      stat: "OPTIMIZED",
      label: "SPOTTER SEQUENCING",
      description: "Sequence spotter moves against live dock demand and driver availability.",
      icon: Zap,
    },
    {
      stat: "RESPONSIVE",
      label: "EXCEPTION MANAGEMENT",
      description: "Address misplaced units and blocked lanes promptly with planned moves.",
      icon: RefreshCw,
    },
  ];

  const capabilities = [
    {
      title: "Continuous Asset Location",
      description: "Trailers, containers, and chassis tracked accurately across the yard.",
      icon: MapPin,
      tag: "REAL-TIME YARD",
    },
    {
      title: "Spotter Move Orchestration",
      description: "Sequence spotter tasks against live dock demand and door availability.",
      icon: Zap,
      tag: "SPOTTER MOVES",
    },
    {
      title: "Automated Exception Handling",
      description: "Misplaced units and blocked lanes identified for corrective moves.",
      icon: RefreshCw,
      tag: "EXCEPTION CONTROL",
    },
    {
      title: "Organized Yard Operations",
      description: "Improves inventory tracking accuracy without manual clipboard checks.",
      icon: ShieldCheck,
      tag: "YARD MANAGEMENT",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      <SubpageHero
        eyebrow="IN THE YARD • REAL-TIME YARD VISIBILITY"
        title="Real-Time Visibility and Workflow Automation"
        subtitle="Every asset and every move, tracked continuously. Dulku Freight keeps yard inventory accurate and orchestrates the work that keeps trailers flowing."
        image={yardAerial}
        imageAlt="Aerial view of a trailer yard with digital tracking overlay"
        metrics={[
          { label: "Location", value: "Avenel, NJ" },
          { label: "Asset Tracking", value: "Real-Time Yard" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      <VisualMetricsSection
        eyebrow="YARD TELEMETRY"
        title="A Self-Aware Yard Runs With Fewer Moves & Zero Surprises"
        metrics={metrics}
      />

      <CapabilitiesMatrix
        eyebrow="YARD CAPABILITIES"
        title="Continuous Asset Tracking & Workflow Orchestration"
        items={capabilities}
      />

      <PortConnectivitySection />
      <InteractiveRelatedServices currentPath="/terminal-in-the-yard" />
      <SubpageCtaSection
        title="Run a Proof of Value in Your Yard"
        subtitle="Contact our team to see how real-time yard asset tracking and automated spotter orchestration perform in your facility."
      />
    </main>
  );
}
