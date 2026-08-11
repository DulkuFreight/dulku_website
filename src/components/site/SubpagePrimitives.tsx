import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Zap,
  ChevronRight,
  Sparkles,
  BarChart3,
  Layers,
  Box,
  Warehouse,
  FileCheck,
  AlertTriangle,
  RefreshCw,
  Database,
  Lock,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* 1. SUBPAGE HERO                                                           */
/* -------------------------------------------------------------------------- */

export interface SubpageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  badges?: string[];
  metrics?: { label: string; value: string }[];
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function SubpageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  badges = [
    "PORT NEWARK & ELIZABETH DIRECT ACCESS",
    "SAME-DAY DOCK APPOINTMENTS",
    "24/7 DISPATCH",
  ],
  metrics = [
    { label: "Port Newark Proximity", value: "15 MIN" },
    { label: "Dock Turnaround", value: "< 2 HRS" },
    { label: "Count Accuracy", value: "99.8%" },
  ],
  primaryCtaText = "Request a Fast Quote",
  primaryCtaLink = "/quote",
  secondaryCtaText = "Contact Desk",
  secondaryCtaLink = "/contact",
}: SubpageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#09090b] pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Background ambient lighting glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F40009]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Top Badges / Location pill */}
        <Reveal variant="blur">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F40009]/30 bg-[#F40009]/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F40009]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F40009] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F40009]" />
              </span>
              AVENEL, NJ TERMINAL
            </span>
            {badges.map((b, i) => (
              <span
                key={i}
                className="hidden rounded-full border border-[#262626] bg-[#121212] px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#aaaaaa] sm:inline-block"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Main Grid: Left Typography & Right Hero Visual Composition */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column (Typography & Quick Actions) */}
          <div className="lg:col-span-6">
            <Reveal variant="blur" delay={60}>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
                {eyebrow}
              </p>
            </Reveal>

            <Reveal variant="blur" delay={120}>
              <h1 className="display-xl mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
                {subtitle}
              </p>
            </Reveal>

            {/* Metrics pills */}
            <Reveal delay={240}>
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-[#262626] py-5">
                {metrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-mono text-xl font-bold text-white sm:text-2xl">
                      {m.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Quick Action Buttons */}
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={primaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F40009] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#F40009]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F40009]/90 hover:shadow-[#F40009]/30"
                >
                  {primaryCtaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-[#121212] px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-200 hover:border-[#F40009]/40 hover:bg-[#181818]"
                >
                  {secondaryCtaText}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Immersive Visual Hero Composition */}
          <div className="lg:col-span-6">
            <Reveal delay={200} className="relative">
              {/* Border glow card container */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#121212] shadow-2xl transition-all duration-300 hover:border-[#F40009]/40">
                {/* Main Hero Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={image}
                    alt={imageAlt || title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Telemetry Overlay Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#262626] bg-[#09090b]/90 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                        OPERATIONAL FACILITY
                      </p>
                      <p className="text-xs font-semibold text-white">
                        4 Engelhard Ave, Avenel NJ
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] font-bold text-[#F40009] bg-[#F40009]/10 border border-[#F40009]/20 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                    <Zap className="h-3.5 w-3.5" />
                    BAY READY NOW
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. INTERACTIVE WORKFLOW PROCESS SECTION                                    */
/* -------------------------------------------------------------------------- */

export interface StepItem {
  step: string;
  title: string;
  description: string;
  badge?: string;
  details?: string[];
  image?: string;
}

export function InteractiveProcessSection({
  title = "Our Step-by-Step Operational Workflow",
  eyebrow = "INTERACTIVE WORKFLOW",
  subtitle = "How Dulku Freight executes rapid, evidence-backed freight handling with zero unnecessary dwell time.",
  steps,
}: {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  steps: StepItem[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = steps[activeIdx] || steps[0];

  return (
    <section className="bg-[#0c0c0e] py-20 sm:py-28 border-y border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              {eyebrow}
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              {subtitle}
            </p>
          </div>
        </Reveal>

        {/* Step Selector Tabs (Interactive Horizontal Bar) */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`group relative text-left rounded-xl border p-6 transition-all duration-300 ${
                  isActive
                    ? "border-[#F40009] bg-[#161618] shadow-[0_8px_24px_rgba(244, 0, 9,0.15)]"
                    : "border-[#262626] bg-[#121212] hover:border-[#444444] hover:bg-[#151515]"
                }`}
              >
                {/* Active Red Accent Line */}
                <div
                  className={`absolute top-0 left-0 h-1 rounded-t-xl transition-all duration-300 ${
                    isActive ? "w-full bg-[#F40009]" : "w-0 bg-transparent"
                  }`}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-sm font-bold ${
                      isActive ? "text-[#F40009]" : "text-[#888888]"
                    }`}
                  >
                    {item.step}
                  </span>
                  {item.badge && (
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F40009]/10 text-[#F40009] border border-[#F40009]/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-medium text-white transition-colors group-hover:text-[#F40009]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#aaaaaa] line-clamp-2">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Container */}
        <Reveal key={activeIdx} className="mt-8">
          <div className="rounded-2xl border border-[#262626] bg-[#121212] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 font-mono text-sm font-bold text-[#F40009]">
                    {activeStep.step}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F40009]">
                    PHASE {activeIdx + 1} OF {steps.length}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {activeStep.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#aaaaaa]">
                  {activeStep.description}
                </p>

                {/* Sub-bullet details if provided */}
                {activeStep.details && activeStep.details.length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {activeStep.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 rounded-lg border border-[#262626] bg-[#161616] p-3 text-xs text-white"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F40009] mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Step Graphic / Illustration */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-xl border border-[#262626] bg-[#09090b] p-6">
                  {activeStep.image ? (
                    <img
                      src={activeStep.image}
                      alt={activeStep.title}
                      className="h-48 w-full rounded-lg object-cover"
                    />
                  ) : (
                    <div className="flex h-48 w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#262626] bg-[#121212] p-6 text-center">
                      <Zap className="h-10 w-10 text-[#F40009] animate-pulse" />
                      <span className="mt-3 font-mono text-xs uppercase tracking-wider text-white">
                        {activeStep.title}
                      </span>
                      <span className="mt-1 font-mono text-[10px] text-[#888888]">
                        Digital Barcode &amp; WMS Event Audited
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. VISUAL METRICS / STATISTICS SECTION                                    */
/* -------------------------------------------------------------------------- */

export interface MetricCard {
  stat: string;
  label: string;
  description: string;
  icon?: any;
}

export function VisualMetricsSection({
  eyebrow = "PERFORMANCE METRICS",
  title = "Built for Speed, Proven by Operations",
  metrics = [
    {
      stat: "15 MIN",
      label: "PORT NEWARK ACCESS",
      description: "Direct highway routing to Maher, APM, and PNCT ocean container terminals.",
      icon: MapPin,
    },
    {
      stat: "< 2 HRS",
      label: "AVERAGE DOCK TURN",
      description: "Immediate unload, inspection, and reloading with zero warehouse dwell.",
      icon: Clock,
    },
    {
      stat: "99.8%",
      label: "VERIFICATION ACCURACY",
      description: "Barcoded receiving audits and instant digital photo proof of delivery.",
      icon: ShieldCheck,
    },
    {
      stat: "24/7",
      label: "DISPATCH COVERAGE",
      description: "Continuous operational support for urgent shifted loads and drayage.",
      icon: Zap,
    },
  ],
}: {
  eyebrow?: string;
  title?: string;
  metrics?: MetricCard[];
}) {
  return (
    <section className="bg-[#09090b] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
            {eyebrow}
          </p>
          <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => {
            const Icon = m.icon || BarChart3;
            return (
              <Reveal
                key={i}
                delay={i * 80}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244, 0, 9,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F40009]">
                      0{i + 1}
                    </span>
                  </div>

                  <p className="mt-6 font-mono text-4xl font-extrabold text-white transition-colors group-hover:text-[#F40009]">
                    {m.stat}
                  </p>
                  <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    {m.label}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3B. FACTUAL CROSS-DOCK SERVICES SECTION                                   */
/* -------------------------------------------------------------------------- */

export function CrossDockServicesSection({
  eyebrow = "CROSS-DOCKING SERVICES",
  title = "Fast, Reliable Cross-Docking for Freight Moving Through New Jersey",
  subtitle = "Dulku Freight provides efficient cross-docking and freight transfer services for trucking companies, freight forwarders, importers, distributors, and other logistics partners. We help move freight between inbound and outbound equipment while minimizing unnecessary handling and storage delays.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const cards = [
    {
      num: "01",
      title: "TRAILER-TO-TRAILER TRANSFER",
      description:
        "Transfer freight from an inbound trailer directly to an outbound trailer for efficient freight movement.",
      icon: Truck,
    },
    {
      num: "02",
      title: "CONTAINER TRANSLOADING",
      description:
        "Move freight from ocean containers into trailers or other outbound equipment as needed.",
      icon: Box,
    },
    {
      num: "03",
      title: "SAME-DAY FREIGHT TRANSFER",
      description:
        "Support time-sensitive freight transfers and urgent cross-docking needs when scheduled.",
      icon: Clock,
    },
    {
      num: "04",
      title: "FREIGHT STAGING & REWORK",
      description:
        "Stage, restack, rewrap, label, and organize freight when additional handling is required.",
      icon: Layers,
    },
  ];

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              {eyebrow}
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              {subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244,0,9,0.15)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F40009]">
                        {c.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#F40009]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
                    <span>SERVICE CAPABILITY</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F40009]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CONTAINER UNLOADING SERVICES SECTION                                      */
/* -------------------------------------------------------------------------- */

export function ContainerUnloadingServicesSection() {
  const cards = [
    {
      num: "01",
      title: "OCEAN CONTAINER STRIPPING",
      description:
        "Unload 20ft, 40ft, and 45ft import containers efficiently upon arrival at our terminal.",
      icon: Box,
    },
    {
      num: "02",
      title: "SKU SORTING & SEGREGATION",
      description:
        "Sort inbound cargo by part number, purchase order, or SKU specification.",
      icon: BarChart3,
    },
    {
      num: "03",
      title: "PALLETIZING & SHRINK WRAP",
      description:
        "Rebuild floor-loaded cargo onto standard pallets with heavy-duty stretch wrapping for stability.",
      icon: Layers,
    },
    {
      num: "04",
      title: "RECEIVING INSPECTION",
      description:
        "Inspect inbound shipments for piece counts and cargo condition before staging or reload.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              CONTAINER UNLOADING SERVICES
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              Professional Ocean Container Unloading in Avenel, NJ
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Dulku Freight provides ocean container unloading, floor-loaded cargo stripping, SKU sorting, and palletizing services near Port Newark and Port Elizabeth.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244,0,9,0.15)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F40009]">
                        {c.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#F40009]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
                    <span>SERVICE CAPABILITY</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F40009]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PALLET STORAGE SERVICES SECTION                                            */
/* -------------------------------------------------------------------------- */

export function PalletStorageServicesSection() {
  const cards = [
    {
      num: "01",
      title: "SHORT-TERM & OVERFLOW STORAGE",
      description:
        "Store excess inventory, seasonal surges, or temporary freight overflow near Port Newark.",
      icon: Warehouse,
    },
    {
      num: "02",
      title: "LONG-TERM PALLET RACKING",
      description:
        "High-density pallet storage with organized location tracking for ongoing inventory management.",
      icon: Database,
    },
    {
      num: "03",
      title: "SECURE WAREHOUSE FACILITY",
      description:
        "Monitored warehouse environment with perimeter access control and physical facility security.",
      icon: Lock,
    },
    {
      num: "04",
      title: "ON-DEMAND OUTBOUND RELEASE",
      description:
        "Retrieve and load stored pallets onto outbound trucks when release orders are submitted.",
      icon: Zap,
    },
  ];

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              PALLET STORAGE SERVICES
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              Flexible Pallet Storage &amp; Warehousing in New Jersey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Dulku Freight offers short-term and long-term pallet storage, racked warehousing, and staging solutions for importers, distributors, and carriers.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244,0,9,0.15)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F40009]">
                        {c.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#F40009]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
                    <span>SERVICE CAPABILITY</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F40009]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PALLET RESTACKING SERVICES SECTION                                         */
/* -------------------------------------------------------------------------- */

export function PalletRestackingServicesSection() {
  const cards = [
    {
      num: "01",
      title: "SHIFTED LOAD CORRECTION",
      description:
        "Unstack collapsed or shifted trailer cargo safely and rebuild pallets for transport.",
      icon: RefreshCw,
    },
    {
      num: "02",
      title: "PALLET REBUILDING",
      description:
        "Replace broken or damaged pallets with standard heat-treated pallets for delivery compliance.",
      icon: Box,
    },
    {
      num: "03",
      title: "AXLE WEIGHT REBALANCING",
      description:
        "Shift cargo weight inside trailers to adjust axle distribution for legal highway transport.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "STRETCH WRAP & BANDING",
      description:
        "Secure restacked cargo with industrial stretch film, corner guards, and banding.",
      icon: Layers,
    },
  ];

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              PALLET REWORK SERVICES
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              Pallet Restacking &amp; Load Rework in New Jersey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Dulku Freight assists carriers and shippers with shifted load correction, leaning pallet restacking, broken pallet replacement, and load stabilization.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244,0,9,0.15)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F40009]">
                        {c.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#F40009]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
                    <span>SERVICE CAPABILITY</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F40009]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TRANSLOADING SERVICES SECTION                                              */
/* -------------------------------------------------------------------------- */

export function TransloadingServicesSection() {
  const cards = [
    {
      num: "01",
      title: "CONTAINER-TO-TRAILER TRANSFER",
      description:
        "Transfer freight from ocean shipping containers into 53ft dry vans for inland transport.",
      icon: RefreshCw,
    },
    {
      num: "02",
      title: "CARGO CONSOLIDATION",
      description:
        "Combine or divide shipments between equipment to optimize transport capacity.",
      icon: Layers,
    },
    {
      num: "03",
      title: "CHASSIS DISPATCH SUPPORT",
      description:
        "Rapid container stripping to return ocean equipment and reduce potential detention delays.",
      icon: Clock,
    },
    {
      num: "04",
      title: "INTERMODAL CARGO HANDLING",
      description:
        "Coordinate freight movement between sea, road, and intermodal transport channels.",
      icon: Truck,
    },
  ];

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              CONTAINER TRANSLOADING SERVICES
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              Efficient Container-to-Trailer Transloading in New Jersey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Dulku Freight provides seamless container transloading services, moving import cargo from ocean containers directly into over-the-road trailers.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244,0,9,0.15)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F40009]">
                        {c.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#F40009]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
                    <span>SERVICE CAPABILITY</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F40009]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FULFILLMENT SERVICES SECTION                                               */
/* -------------------------------------------------------------------------- */

export function FulfillmentServicesSection() {
  const cards = [
    {
      num: "01",
      title: "MANUAL PICK & PACK",
      description:
        "Human warehouse teams pick, pack, and prepare customer orders accurately for dispatch.",
      icon: PackageCheck,
    },
    {
      num: "02",
      title: "ORDER KITTING & ASSEMBLY",
      description:
        "Assemble custom order kits, promotional bundles, and multi-piece product packs.",
      icon: Layers,
    },
    {
      num: "03",
      title: "INVENTORY STOCKING & STORAGE",
      description:
        "Store, organize, and manage order inventory in clean warehouse locations.",
      icon: Warehouse,
    },
    {
      num: "04",
      title: "OUTBOUND DISPATCH",
      description:
        "Prepare packed cartons and palletized shipments for carrier pickup and regional distribution.",
      icon: Truck,
    },
  ];

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              3PL FULFILLMENT SERVICES
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              3PL Order Fulfillment &amp; Distribution in New Jersey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Dulku Freight provides 3PL order fulfillment, manual pick and pack, kitting, and distribution services from our facility in Avenel, NJ.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.num} delay={i * 80}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244,0,9,0.15)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#F40009]">
                        {c.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-[#F40009]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#262626] pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#888888]">
                    <span>SERVICE CAPABILITY</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F40009]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. BEFORE / AFTER & OPERATIONAL COMPARISON SECTION                         */
/* -------------------------------------------------------------------------- */

export function OperationalComparison({
  eyebrow = "THE DULKU DIFFERENCE",
  title = "Traditional Port Delays vs. Dulku Fast-Track Operations",
  traditionalTitle = "Generic Warehouses / Standard Freight Handling",
  traditionalPoints = [
    "Costly port demurrage & container detention accumulation",
    "Days of un-inspected dwell time at crowded facilities",
    "Paperwork delays, missing piece counts, and lost SKUs",
    "No emergency load rework or shifted pallet support",
  ],
  dulkuTitle = "Dulku Freight Dedicated Logistics Terminal",
  dulkuPoints = [
    "Same-day container stripping & immediate chassis return",
    "Instant photo audit, piece count, and digital receiving log",
    "Dedicated dock doors & heavy-lift riggers on standby",
    "Emergency shifted load correction & restacking within hours",
  ],
}: {
  eyebrow?: string;
  title?: string;
  traditionalTitle?: string;
  traditionalPoints?: string[];
  dulkuTitle?: string;
  dulkuPoints?: string[];
}) {
  return (
    <section className="bg-[#0c0c0e] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
              {eyebrow}
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Traditional Way */}
          <Reveal delay={100} className="rounded-2xl border border-red-950/40 bg-[#140c0d] p-8 sm:p-10">
            <div className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="h-6 w-6 shrink-0" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-red-300">
                {traditionalTitle}
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {traditionalPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-red-900/30 bg-[#1a0f11] p-4 text-xs text-red-200">
                  <span className="font-mono text-red-500 font-bold">✕</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Dulku Way */}
          <Reveal delay={200} className="relative rounded-2xl border border-[#F40009]/50 bg-[#161214] p-8 sm:p-10 shadow-[0_0_30px_rgba(244, 0, 9,0.15)]">
            <div className="absolute top-4 right-4 rounded-full bg-[#F40009] px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white">
              OPTIMIZED
            </div>

            <div className="flex items-center gap-3 text-[#F40009]">
              <CheckCircle2 className="h-6 w-6 shrink-0" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                {dulkuTitle}
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {dulkuPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-[#F40009]/30 bg-[#1f1416] p-4 text-xs text-white">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F40009] mt-0.5" />
                  <span className="font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. CAPABILITIES BENTO-GRID                                                */
/* -------------------------------------------------------------------------- */

export interface CapabilityItem {
  title: string;
  description: string;
  icon?: any;
  tag?: string;
}

export function CapabilitiesMatrix({
  eyebrow = "CAPABILITIES",
  title = "Operational Capabilities & Equipment Specs",
  items = [],
}: {
  eyebrow?: string;
  title?: string;
  items: CapabilityItem[];
}) {
  return (
    <section className="bg-[#09090b] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
            {eyebrow}
          </p>
          <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cap, i) => {
            const Icon = cap.icon || Layers;
            return (
              <Reveal
                key={i}
                delay={i * 80}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/40 hover:shadow-[0_8px_24px_rgba(244, 0, 9,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/20 bg-[#F40009]/10 text-[#F40009]">
                      <Icon className="h-5 w-5" />
                    </div>
                    {cap.tag && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#F40009] border border-[#F40009]/30 px-2.5 py-0.5 rounded-full bg-[#F40009]/10">
                        {cap.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-[#F40009]">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. PORT CONNECTIVITY MATRIX                                                */
/* -------------------------------------------------------------------------- */

export function PortConnectivitySection() {
  const hubs = [
    { name: "Maher Terminal (Port Newark)", distance: "14.2 Miles", time: "~15 Mins", highway: "I-95 / Rt 1&9" },
    { name: "APM Terminals (Port Elizabeth)", distance: "13.8 Miles", time: "~14 Mins", highway: "NJ Turnpike Exp" },
    { name: "PNCT (Port Newark Container Terminal)", distance: "15.1 Miles", time: "~16 Mins", highway: "I-95 North" },
    { name: "Newark Liberty Int'l Airport (EWR)", distance: "12.5 Miles", time: "~15 Mins", highway: "Route 1&9" },
    { name: "CSX & Norfolk Southern Rail Ramps", distance: "9.6 Miles", time: "~12 Mins", highway: "Local Arterial" },
  ];

  return (
    <section className="bg-[#0c0c0e] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="rounded-2xl border border-[#262626] bg-[#121212] p-8 sm:p-12">
            <div className="flex items-center gap-3 text-[#F40009]">
              <MapPin className="h-6 w-6" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">
                STRATEGIC LOCATION MATRIX
              </span>
            </div>

            <h2 className="display-xl mt-4 text-2xl font-medium tracking-tight text-white sm:text-4xl">
              Port Newark, Elizabeth &amp; NYC Metro Corridor Proximity
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#aaaaaa] max-w-3xl">
              Located directly off I-95 at 4 Engelhard Ave, Avenel, NJ 07001, Dulku Freight provides rapid drayage turnarounds for ocean import containers and domestic dry vans.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#262626] bg-[#161616] p-5 transition-colors hover:border-[#F40009]/40"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#F40009]">
                    {hub.highway}
                  </span>
                  <h4 className="mt-1 text-sm font-semibold text-white">{hub.name}</h4>
                  <div className="mt-3 flex items-center justify-between border-t border-[#262626] pt-3 font-mono text-xs text-[#aaaaaa]">
                    <span>{hub.distance}</span>
                    <span className="font-bold text-white">{hub.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. INTERACTIVE RELATED SERVICES GRID                                      */
/* -------------------------------------------------------------------------- */

export function InteractiveRelatedServices({
  currentPath = "",
}: {
  currentPath?: string;
}) {
  const services = [
    {
      title: "Cross-Docking Services",
      desc: "Same-day truck-to-truck freight transfers and cargo consolidation near Port Newark.",
      to: "/cross-dock-new-jersey",
      code: "01 // CROSS-DOCK",
    },
    {
      title: "Container Unloading",
      desc: "20ft & 40ft ocean container stripping, floor-loaded devanning, and SKU sorting.",
      to: "/container-unloading-new-jersey",
      code: "02 // DEVANNED",
    },
    {
      title: "Container Transloading",
      desc: "Ocean container to 53ft dry van transfers to eliminate demurrage fees.",
      to: "/transloading-new-jersey",
      code: "03 // TRANSLOAD",
    },
    {
      title: "Pallet Storage & Warehousing",
      desc: "Flexible short-term and long-term pallet storage in secure NJ warehouse.",
      to: "/pallet-storage-new-jersey",
      code: "04 // WAREHOUSE",
    },
    {
      title: "3PL Fulfillment & Pick-Pack",
      desc: "Order fulfillment, packaging, Amazon FBA prep, and retail distribution.",
      to: "/fulfillment-new-jersey",
      code: "05 // FULFILLMENT",
    },
    {
      title: "Pallet Restacking & Rework",
      desc: "Emergency load rework, shifted load correction, restacking, and shrink wrapping.",
      to: "/pallet-restacking-new-jersey",
      code: "06 // REWORK",
    },
  ].filter((s) => s.to !== currentPath);

  return (
    <section className="bg-[#09090b] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
                EXPLORE LOGISTICS PLATFORM
              </p>
              <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Related Services &amp; Freight Solutions
              </h2>
            </div>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#F40009] hover:underline"
            >
              Get Custom Service Quote <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, i) => (
            <Reveal key={srv.to} delay={i * 60}>
              <Link
                to={srv.to}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244, 0, 9,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#F40009]">
                      {srv.code}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#262626] bg-[#161616] text-[#aaaaaa] transition-colors group-hover:border-[#F40009]/40 group-hover:bg-[#F40009] group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-[#F40009]">
                    {srv.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#aaaaaa]">
                    {srv.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. SUBPAGE CTA & QUOTE SECTION                                            */
/* -------------------------------------------------------------------------- */

export function SubpageCtaSection({
  title = "Ready to Streamline Your New Jersey Freight Operations?",
  subtitle = "Contact our dispatch team in Avenel, NJ for immediate pricing, dock availability, and emergency load support.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="quote" className="bg-[#0c0c0e] py-20 sm:py-28 border-t border-[#262626]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F40009]">
                GET STARTED TODAY
              </p>
              <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-[#262626] bg-[#121212] p-4 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F40009]/30 bg-[#F40009]/10 text-[#F40009]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                      FACILITY ADDRESS
                    </p>
                    <p className="text-xs font-semibold text-white">
                      4 Engelhard Ave, Avenel, NJ 07001
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120} className="rounded-2xl border border-[#262626] bg-[#121212] p-6 sm:p-8 shadow-2xl">
              <h3 className="font-mono text-lg font-bold text-white">
                Request a Custom Quote
              </h3>
              <p className="mt-1 text-xs text-[#aaaaaa]">
                Fill out the request form below and our operations desk will respond promptly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
