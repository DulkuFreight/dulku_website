import { createFileRoute } from "@tanstack/react-router";
import dockDoors from "@/assets/dock-doors.jpg";
import {
  SubpageHero,
  VisualMetricsSection,
  CapabilitiesMatrix,
  PortConnectivitySection,
  InteractiveRelatedServices,
  SubpageCtaSection,
} from "@/components/site/SubpagePrimitives";
import { Clock, ShieldCheck, Zap, Layers, BarChart3, Truck } from "lucide-react";

const TITLE = "At The Dock Terminal Operations | Dulku Freight";
const DESCRIPTION =
  "Dulku Freight connects yard execution to the dock so the right trailer is at the right door at the right time, every shift.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/terminal-at-the-dock")({
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
  component: DockPage,
});

function DockPage() {
  const metrics = [
    {
      stat: "LIVE",
      label: "DOOR STATUS TRACKING",
      description: "Know which doors are occupied, ready, or blocked without radio calls.",
      icon: Clock,
    },
    {
      stat: "100%",
      label: "APPOINTMENT ADHERENCE",
      description: "Arrivals are sequenced to the right door measured against your WMS plan.",
      icon: ShieldCheck,
    },
    {
      stat: "< 2 HRS",
      label: "DWELL REDUCTION",
      description: "Pull units the moment a door frees up to minimize detention exposure.",
      icon: Zap,
    },
    {
      stat: "24/7",
      label: "LABOR ALIGNMENT",
      description: "Dock crews see what is coming next so labor is staged instead of idle.",
      icon: Layers,
    },
  ];

  const capabilities = [
    {
      title: "Live Door Status Visibility",
      description: "Know which doors are occupied, ready, or blocked in real time without manual walks.",
      icon: Clock,
      tag: "REAL-TIME",
    },
    {
      title: "Appointment & WMS Sequencing",
      description: "Arrivals are sequenced to the correct dock door matched against your WMS plan.",
      icon: ShieldCheck,
      tag: "WMS SYNC",
    },
    {
      title: "Trailer Dwell Reduction",
      description: "Reduce trailer dwell and detention exposure by pulling units the instant a door clears.",
      icon: Zap,
      tag: "ZERO DWELL",
    },
    {
      title: "Dock Crew Labor Alignment",
      description: "Dock teams see inbound loads in advance, staging crews instead of keeping labor idle.",
      icon: Layers,
      tag: "CREW STAGING",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b]">
      <SubpageHero
        eyebrow="AT THE DOCK • YARD & DOCK EXECUTION"
        title="Optimize Loading and Improve Dock Efficiency"
        subtitle="Dulku Freight connects yard execution to the dock so the right trailer is at the right door at the right time, every shift."
        image={dockDoors}
        imageAlt="Warehouse dock doors at night"
        metrics={[
          { label: "Location", value: "Carteret, NJ" },
          { label: "Operations", value: "Dock Management" },
          { label: "Port Access", value: "Port Newark" },
        ]}
      />

      <VisualMetricsSection
        eyebrow="DOCK TELEMETRY"
        title="Precision Dock Door & Loading Orchestration"
        metrics={metrics}
      />

      <CapabilitiesMatrix
        eyebrow="DOCK CAPABILITIES"
        title="Automated Dock Operations Infrastructure"
        items={capabilities}
      />

      <PortConnectivitySection />
      <InteractiveRelatedServices currentPath="/terminal-at-the-dock" />
      <SubpageCtaSection
        title="Talk to a Dock Operations Expert"
        subtitle="Contact our Carteret, NJ team to optimize your dock doors and yard execution."
      />
    </main>
  );
}
