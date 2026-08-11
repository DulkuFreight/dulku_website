import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const GROUPS = [
  {
    tab: "Cross-Dock & Transloading",
    items: [
      {
        q: "What cross-docking services does Dulku Freight provide in New Jersey?",
        a: "Dulku Freight provides rapid truck-to-truck transfers, ocean container transloading, pallet restacking, and cargo staging near Port Newark and major New Jersey freight corridors.",
      },
      {
        q: "How quickly can you process an inbound truck or container?",
        a: "Standard cross-dock appointments are completed within hours of arrival. We also offer immediate same-day appointments for emergency rejected loads, shifted pallets, or urgent port transfers.",
      },
      {
        q: "Do you handle refrigerated (reefer) and dry van freight?",
        a: "Yes. Our team is equipped to handle dry van freight, ocean import containers, flatbed reloads, and temperature-controlled cargo transfers.",
      },
    ],
  },
  {
    tab: "Container Unloading",
    items: [
      {
        q: "Do you handle 20' and 40' floor-loaded ocean import containers?",
        a: "Yes. We specialize in floor-loaded container stripping, sorting by SKU, palletizing, shrink wrapping, and piece-count verification for ocean import containers.",
      },
      {
        q: "Can you transload container freight directly into 53' trailers?",
        a: "Absolutely. Our container transloading service transfers ocean container cargo directly into 53-foot dry vans for cost-effective over-the-road transport across North America.",
      },
    ],
  },
  {
    tab: "Pallet Storage & Rework",
    items: [
      {
        q: "What happens if a receiver rejects a load due to shifted pallets?",
        a: "Our emergency freight rework team unpacks shifted loads, restacks damaged pallets, re-wraps, straps, and prepares cargo for immediate re-inspection and delivery.",
      },
      {
        q: "Do you offer short-term and long-term pallet storage?",
        a: "Yes. We provide flexible daily, weekly, or monthly pallet storage in secure, climate-controlled warehouse spaces in New Jersey without rigid long-term contracts.",
      },
    ],
  },
  {
    tab: "Quotes & Scheduling",
    items: [
      {
        q: "How fast can I get a rate quote?",
        a: "Our dispatch team provides transparent rate quotes within 30 minutes of receiving your request. You can submit a quote request online.",
      },
      {
        q: "Are after-hours or weekend cross-dock appointments available?",
        a: "Yes. We accommodate weekend, late-night, and emergency after-hours appointments to support urgent freight situations and tight port demurrage windows.",
      },
    ],
  },
] as const;

export function Faq() {
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const items = GROUPS[group].items;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {GROUPS.map((g, i) => (
          <button
            key={g.tab}
            type="button"
            onClick={() => {
              setGroup(i);
              setOpen(0);
            }}
            className={`rounded-lg px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              i === group
                ? "bg-[#F40009] text-white"
                : "border border-border text-muted-foreground hover:bg-[#F40009]/10 hover:text-[#F40009]"
            }`}
          >
            {g.tab}
          </button>
        ))}
      </div>

      <div className="mt-10 border-t border-border">
        {items.map((item, i) => (
          <div key={item.q} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={open === i}
            >
              <span className="text-base font-medium sm:text-lg">{item.q}</span>
              {open === i ? (
                <Minus className="h-4 w-4 shrink-0 text-[#F40009]" />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
              )}
            </button>
            {open === i && (
              <p className="max-w-3xl pb-7 leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
