import { createFileRoute } from "@tanstack/react-router";
import gateEntry from "@/assets/gate-entry.jpg";
import {
  SubpageHero,
  VisualMetricsSection,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Zap, Clock, ShieldCheck, FileCheck, Camera, BarChart3 } from "lucide-react";

const TITLE = "At The Gate Check-In Operations | Dulku Freight";
const DESCRIPTION =
  "Automate and expedite gate operations with digital check-in. Accelerate gate flow, improve data accuracy, and streamline gate management.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/terminal-at-the-gate")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: GatePage,
});

function GatePage() {
  const metrics = [
    {
      stat: "STREAMLINED",
      label: "GATE PROCESSING",
      description: "Log tractor, trailer, plate, and seal details efficiently upon entry.",
      icon: Zap,
    },
    {
      stat: "EFFICIENT",
      label: "GATE THROUGHPUT",
      description: "Minimize gate check-in delays and reduce entry queues.",
      icon: Clock,
    },
    {
      stat: "RAPID",
      label: "IMPLEMENTATION",
      description: "Operational deployment integrated into standard terminal workflows.",
      icon: ShieldCheck,
    },
    {
      stat: "DIGITAL",
      label: "GATE RECORDS",
      description: "Digital recordkeeping for every inbound and outbound trailer.",
      icon: FileCheck,
    },
  ];

  const capabilities = [
    {
      title: "Automated Check-In & Check-Out",
      description: "Streamlined entry and exit logging for inbound and outbound trailers.",
      icon: Zap,
      tag: "DIGITAL CHECK-IN",
    },
    {
      title: "TMS-Connected Arrivals",
      description: "Match loads and carriers on arrival so exceptions surface before dock assignment.",
      icon: BarChart3,
      tag: "LOAD MATCH",
    },
    {
      title: "Digital Compliance Records",
      description: "Replace paper-based logs with timestamped digital records.",
      icon: FileCheck,
      tag: "DIGITAL AUDIT",
    },
    {
      title: "Condition Verification",
      description: "Inspect unit condition on entry and exit for operational verification.",
      icon: Camera,
      tag: "CARGO CHECK",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      <SubpageHero
        eyebrow="AT THE GATE • AUTOMATED GATE OPERATIONS"
        title="Automate and Expedite Gate Operations"
        subtitle="Our terminal streamlines the entire check-in and check-out process. Digital gate logging accelerates flow, improves accuracy, and reduces manual delays."
        image={gateEntry}
        imageAlt="Truck entering an automated gate lane"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "Gate System", value: "Digital Check-In" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      <VisualMetricsSection
        eyebrow="GATE TELEMETRY"
        title="High-Speed Vision-Based Gate Automation"
        metrics={metrics}
      />

      <CapabilitiesMatrix
        eyebrow="GATE CAPABILITIES"
        title="Automated Check-In Infrastructure"
        items={capabilities}
      />

      <PortConnectivitySection />
      <InteractiveRelatedServices currentPath="/terminal-at-the-gate" />
      <SubpageCtaSection
        title="Book a Gate Assessment Today"
        subtitle="Contact our team to evaluate how automated computer vision gate processing can accelerate your facility."
      />
    </main>
  );
}
