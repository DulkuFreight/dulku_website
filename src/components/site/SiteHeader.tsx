import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Mail, X, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Cross-Dock", to: "/cross-dock-new-jersey" },
  { label: "Container Unloading", to: "/container-unloading-new-jersey" },
  { label: "Pallet Storage", to: "/pallet-storage-new-jersey" },
  { label: "Pallet Restacking & Rework", to: "/pallet-restacking-new-jersey" },
  { label: "Transloading", to: "/transloading-new-jersey" },
  { label: "3PL Fulfillment", to: "/fulfillment-new-jersey" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:pt-4">
        <div
          className={`pointer-events-auto mx-auto flex h-16 max-w-[1230px] items-center gap-3.5 rounded-xl border border-border px-4 sm:px-6 py-2.5 backdrop-blur-xl transition-all duration-250 ${
            scrolled ? "bg-background/85" : "bg-surface/45"
          }`}
        >
          <Link to="/" className="mr-2 shrink-0 flex items-center h-10 transition-all duration-250">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex h-10 shrink">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="inline-flex items-center h-9 rounded-md px-2.5 text-[12px] lg:text-[13.5px] font-medium text-foreground/85 transition-colors duration-250 hover:bg-[#F40009]/10 hover:text-[#F40009] whitespace-nowrap"
                activeProps={{ className: "bg-accent text-[#F40009]" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto md:ml-3 lg:ml-5 flex items-center gap-2.5 h-10 shrink-0">
            {/* Email Button (Bottom-to-Top Black Fill Animation + Red Underline on Hover - 0.6s ease-out) */}
            <a
              href="mailto:ops@dulkufreight.com"
              aria-label="Email Dulku Freight"
              className="group relative overflow-hidden hidden h-10 items-center rounded-lg border border-border px-3.5 font-mono text-xs text-[#F40009] hover:border-[#F40009] sm:flex shrink-0"
            >
              <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-[600ms] ease-out group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-[600ms] ease-out group-hover:text-[#F40009]">
                <Mail className="h-3.5 w-3.5 text-[#F40009] transition-colors duration-[600ms] ease-out group-hover:text-[#F40009]" />
                <span className="relative whitespace-nowrap font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-[#F40009] after:transition-transform after:duration-[600ms] after:ease-out group-hover:after:scale-x-100">
                  Email
                </span>
              </span>
            </a>

            {/* Get Quote Button (Bottom-to-Top Black Fill Animation + Red Underline on Hover - 0.6s ease-out) */}
            <Link
              to="/quote"
              className="group relative overflow-hidden hidden h-10 items-center rounded-lg bg-[#F40009] px-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white font-semibold transition-colors duration-[600ms] ease-out hover:border-[#F40009] sm:inline-flex shrink-0 whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-[600ms] ease-out group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-[600ms] ease-out group-hover:text-[#F40009]">
                <span className="relative whitespace-nowrap font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-[#F40009] after:transition-transform after:duration-[600ms] after:ease-out group-hover:after:scale-x-100">
                  Get Quote
                </span>
              </span>
            </Link>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border transition-all duration-250 hover:border-[#F40009] hover:text-[#F40009] md:hidden shrink-0"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Dark Overlay Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Off-Canvas Sliding Right Side Drawer */}
      <aside
        aria-label="Mobile Navigation"
        className={`pointer-events-auto fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-[340px] flex-col border-l border-white/10 bg-[#161618]/98 p-5 text-white shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
            <Logo />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/80 transition-colors hover:border-[#F40009] hover:text-[#F40009]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer Content */}
        <nav className="flex-1 overflow-y-auto pt-4 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white/90 transition-colors duration-200 hover:bg-white/5 hover:text-[#F40009]"
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 text-white/40" />
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2.5 shrink-0">
            <div className="my-2 border-t border-white/10" />

            {/* Email Card */}
            <a
              href="mailto:ops@dulkufreight.com"
              className="group flex h-12 w-full items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] px-4 font-mono text-xs text-white/90 transition-all duration-200 hover:border-[#F40009] hover:bg-white/[0.12]"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/60 transition-colors group-hover:text-[#F40009]" />
                <span>ops@dulkufreight.com</span>
              </div>
              <ChevronRight className="h-4 w-4 text-white/40 transition-colors group-hover:text-[#F40009]" />
            </a>

            {/* Primary CTA Get Quote Button */}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-white px-4 font-mono text-xs uppercase tracking-[0.2em] text-black font-bold transition-all duration-200 hover:bg-[#F40009] hover:text-white"
            >
              Get Quote
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
