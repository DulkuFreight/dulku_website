import { useState } from "react";
import { Link } from "@tanstack/react-router";
import gateEntry from "@/assets/gate-entry.jpg";
import yardAerial from "@/assets/yard-aerial.jpg";
import dockDoors from "@/assets/dock-doors.jpg";
import networkOps from "@/assets/network-ops.jpg";

const TABS = [
  {
    id: "cross-dock",
    tab: "Cross-Docking",
    title: "Fast Cross-Docking & Transshipment",
    body: "Direct truck-to-truck freight transfer without long-term storage delay. Ideal for regional carriers and freight forwarders needing rapid cargo routing near Port Newark.",
    image: gateEntry,
    to: "/cross-dock-new-jersey",
  },
  {
    id: "unloading",
    tab: "Container Stripping",
    title: "20' & 40' Ocean Container Unloading",
    body: "Specialized floor-loaded cargo stripping, palletization, shrink wrapping, and piece-count verification for ocean import containers arriving from Port Newark.",
    image: yardAerial,
    to: "/container-unloading-new-jersey",
  },
  {
    id: "storage",
    tab: "Pallet Warehousing",
    title: "Flexible Pallet Storage & Staging",
    body: "Short-term overflow storage and long-term racked warehousing in New Jersey. Secure facility with SKU-level inventory tracking and fast truck dispatch.",
    image: dockDoors,
    to: "/pallet-storage-new-jersey",
  },
  {
    id: "fulfillment",
    tab: "3PL Fulfillment",
    title: "B2B & B2C Order Distribution",
    body: "Order pick, pack, and ship fulfillment for eCommerce brands, wholesale distributors, and importers with same-day order processing and carrier routing.",
    image: networkOps,
    to: "/fulfillment-new-jersey",
  },
] as const;

export function PlatformTabs() {
  const [active, setActive] = useState(0);
  const current = TABS[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-lg px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              i === active
                ? "bg-[#F40009] text-white"
                : "border border-border text-muted-foreground hover:bg-[#F40009]/10 hover:text-[#F40009]"
            }`}
          >
            {t.tab}
          </button>
        ))}
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            key={current.image}
            src={current.image}
            alt={current.title}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
        <div>
          <p className="label-mono text-[#F40009]">{current.tab}</p>
          <h3 className="display-xl mt-4 text-3xl sm:text-4xl">{current.title}</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">{current.body}</p>
          <Link
            to={current.to}
            className="mt-8 inline-flex items-center gap-2 border-b border-[#F40009] pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F40009]"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
