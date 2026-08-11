import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Zap, ShieldCheck, DollarSign } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { HeroCanvas } from "@/components/site/HeroCanvas";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { ServicesSlider } from "@/components/site/ServicesSlider";
import { Faq } from "@/components/site/Faq";
import { ContactForm } from "@/components/site/ContactForm";
import { Section, Eyebrow } from "@/components/site/primitives";

const TITLE = "Dulku Freight | Cross Dock & Fulfillment NJ Near Port Newark";
const DESCRIPTION =
  "Dulku Freight delivers fast cross-docking, container transloading, ocean container unloading, pallet storage, and 3PL fulfillment services in New Jersey near Port Newark, supporting trucking carriers, importers, freight forwarders, and eCommerce brands.";
const OG_IMAGE = "/og-image.png?v=1";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const BENEFITS = [
  {
    code: "01 // LOCATION",
    icon: MapPin,
    title: "Strategic Port Newark Location",
    body: "Situated along major NJ freight corridors (I-95, Route 1/9, NJ Turnpike) for rapid container drayage transfers and fast turnarounds from Port Newark / Elizabeth.",
  },
  {
    code: "02 // SPEED",
    icon: Zap,
    title: "Same-Day Operational Coverage",
    body: "Responsive warehouse dispatch ready for emergency freight reworks, shifted pallets, and urgent cross-dock transfers to keep your trucks moving without delay.",
  },
  {
    code: "03 // SECURITY",
    icon: ShieldCheck,
    title: "Secure Cargo Handling & Accurate Counts",
    body: "Comprehensive inbound inspection, piece counting, SKU sorting, and high-security warehouse facilities protecting high-value commercial freight.",
  },
  {
    code: "04 // PRICING",
    icon: DollarSign,
    title: "Transparent & Competitive Rates",
    body: "Clear per-pallet, per-container, and per-cwt pricing with zero hidden surcharges or long-term lock-in contracts.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroCanvas />
      </section>

      <Section>
        <Reveal variant="blur">
          <h2 className="display-xl max-w-5xl text-4xl sm:text-6xl lg:text-7xl">
            New Jersey’s Trusted Partner for Cross-Dock, Warehousing & Fulfillment.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-2xl">
            Providing fast-turnaround cross-docking, ocean container transloading, flexible pallet storage, and 3PL fulfillment near Port Newark and major NJ transport corridors.
          </p>
        </Reveal>
      </Section>

      <LogoMarquee />

      <Section>
        <ServicesSlider />
      </Section>

      {/* Modern High-Tech Bento-Grid Section: WHY CHOOSE DULKU FREIGHT */}
      <Section className="bg-[#0c0c0e]">
        {/* Two-Column Header Alignment */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mono font-mono text-xs uppercase tracking-widest text-[#F40009]">
              WHY CHOOSE DULKU FREIGHT
            </p>
            <h2 className="display-xl mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              High-Efficiency Logistics Designed to Keep Supply Chains Fluid
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Dulku Freight delivers immediate, high-efficiency logistics services designed to keep supply chains fluid. From emergency shifted load reworks to ongoing 3PL fulfillment, our team ensures your cargo is handled safely, accurately, and on schedule.
            </p>
          </div>
        </div>

        {/* 4 Floating Tech Cards (Bento-Grid) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal
                key={b.title}
                delay={i * 100}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#262626] bg-[#121212] p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#F40009]/50 hover:shadow-[0_8px_24px_rgba(244, 0, 9,0.15)]"
              >
                <div>
                  {/* Top Badge / Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F40009]/20 bg-[#F40009]/10 text-[#F40009] transition-colors duration-300 group-hover:border-[#F40009]/40 group-hover:bg-[#F40009]/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#F40009]">
                      {b.code}
                    </span>
                  </div>

                  {/* Card Title & Body */}
                  <h3 className="mt-6 text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-[#F40009]">
                    {b.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#aaaaaa]">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section id="contact">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Side: Main Heading, Sub-heading & 6 Service Summary Cards */}
          <div className="lg:col-span-7">
            <h2 className="display-xl text-3xl font-medium sm:text-5xl text-white">
              Request a Free Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#aaaaaa] sm:text-lg">
              Tell us about your freight and we'll get back to you fast.
            </p>

            {/* Service Summary Light-Outlined Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#262626] bg-[#121212] p-4 sm:p-5 transition-colors hover:border-[#F40009]/40">
                <h4 className="font-medium text-sm text-white">Cross-Dock Services</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#aaaaaa]">
                  Fast freight transfer between inbound and outbound trucks — no long-term storage required.
                </p>
              </div>

              <div className="rounded-xl border border-[#262626] bg-[#121212] p-4 sm:p-5 transition-colors hover:border-[#F40009]/40">
                <h4 className="font-medium text-sm text-white">Container Unloading</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#aaaaaa]">
                  20ft, 40ft, and 40HC ocean container devanning, floor-loaded or palletized.
                </p>
              </div>

              <div className="rounded-xl border border-[#262626] bg-[#121212] p-4 sm:p-5 transition-colors hover:border-[#F40009]/40">
                <h4 className="font-medium text-sm text-white">Pallet Storage</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#aaaaaa]">
                  Short-term and overflow pallet storage in a secure NJ warehouse.
                </p>
              </div>

              <div className="rounded-xl border border-[#262626] bg-[#121212] p-4 sm:p-5 transition-colors hover:border-[#F40009]/40">
                <h4 className="font-medium text-sm text-white">Pallet Restacking & Rework</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#aaaaaa]">
                  Sort, rebuild, restack, wrap, label, and prepare damaged, mixed, shifted, or rejected freight.
                </p>
              </div>

              <div className="rounded-xl border border-[#262626] bg-[#121212] p-4 sm:p-5 transition-colors hover:border-[#F40009]/40">
                <h4 className="font-medium text-sm text-white">Transloading Services</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#aaaaaa]">
                  Container to trailer, trailer to trailer, and rail-to-truck transfers.
                </p>
              </div>

              <div className="rounded-xl border border-[#262626] bg-[#121212] p-4 sm:p-5 transition-colors hover:border-[#F40009]/40">
                <h4 className="font-medium text-sm text-white">3PL Fulfillment</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#aaaaaa]">
                  Pick, pack, and ship support for eCommerce and B2B distribution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Streamlined Quote Form */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <h2 className="display-xl text-3xl sm:text-5xl">Frequently Asked Questions</h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Find quick answers to common questions about our New Jersey cross-docking, container unloading, pallet storage, and freight services.
        </p>
        <div className="mt-12">
          <Faq />
        </div>
      </Section>
    </>
  );
}
