const SERVICES = [
  "Cross Docking",
  "Warehousing & Pallet Storage",
  "Container Transloading",
  "3PL Fulfillment",
  "Pick & Pack Services",
  "Inventory Management",
  "Freight Staging",
  "Floor-Loaded Container Unloading",
  "Export Loading",
  "Trailer Loading & Unloading",
  "Freight Consolidation",
  "Freight Deconsolidation",
  "Pallet Restacking & Rework",
  "Stretch Wrapping & Labeling",
  "Freight Inspection",
  "Returns Processing",
  "Same-Day Dock Appointments",
  "Near Port Newark",
];

export function LogoMarquee({ title }: { title?: string }) {
  const row = [...SERVICES, ...SERVICES];
  return (
    <div className="border-y border-border py-5 sm:py-6">
      <div className="marquee-mask relative overflow-hidden">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] items-center gap-6 pr-6 sm:gap-8 sm:pr-8">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-6 sm:gap-8 whitespace-nowrap font-mono text-sm uppercase tracking-[0.20em] text-muted-foreground/80"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-[#F40009]/85 shrink-0" />
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-mask { -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
      `}</style>
    </div>
  );
}
