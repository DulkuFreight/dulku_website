import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Building2, Navigation, FileText } from "lucide-react";
import { Logo } from "./Logo";
import { openLanguageModal } from "./LanguageChoiceModal";

const SERVICES = [
  { label: "Cross-Docking", to: "/cross-dock-new-jersey" },
  { label: "Container Unloading", to: "/container-unloading-new-jersey" },
  { label: "Pallet Storage", to: "/pallet-storage-new-jersey" },
  { label: "Pallet Restacking & Rework", to: "/pallet-restacking-new-jersey" },
  { label: "Transloading", to: "/transloading-new-jersey" },
  { label: "3PL Fulfillment", to: "/fulfillment-new-jersey" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12">
        {/* Column 1 (Left - Brand & Contact Info) */}
        <div className="md:col-span-5 space-y-4">
          <Logo />

          <div className="space-y-2.5 pt-2 text-sm text-foreground/80 font-sans">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Building2 className="h-4 w-4 text-[#F40009] shrink-0" />
              <span>
                <span className="text-muted-foreground/70">Operated by:</span>{" "}
                <strong className="text-foreground font-medium">Dulku Freight</strong>
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-[#F40009] shrink-0 mt-0.5" />
              <span>Carteret, NJ</span>
            </div>

            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Mail className="h-4 w-4 text-[#F40009] shrink-0" />
              <a
                href="mailto:info@dulkufreight.com"
                className="hover:text-[#F40009] transition-colors text-foreground/90 font-mono"
              >
                info@dulkufreight.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 (Center - Services) */}
        <div className="md:col-span-3 space-y-4">
          <p className="label-mono text-muted-foreground uppercase font-mono text-xs tracking-wider">
            Services
          </p>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.to}
                  className="text-foreground/80 transition-colors duration-250 hover:text-[#F40009]"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 (Right - Action Buttons & Summary) */}
        <div className="md:col-span-4 space-y-4">
          <p className="label-mono text-muted-foreground uppercase font-mono text-xs tracking-wider">
            Get Started
          </p>

          <div className="space-y-3">
            {/* Request a Quote Button */}
            <Link
              to="/quote"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-accent hover:text-[#F40009]"
            >
              <FileText className="h-4 w-4" />
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Bulleted inline summary list */}
          <p className="text-xs text-muted-foreground leading-relaxed pt-2">
            Cross-Dock • Container Unloading • Pallet Storage • Pallet Restacking & Rework • Transloading • 3PL Fulfillment
          </p>
        </div>
      </div>

      {/* Bottom Bar (Separated by top border line) */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dulku Freight. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openLanguageModal}
              className="hover:text-[#F40009] transition-colors flex items-center gap-1.5 cursor-pointer lowercase first-letter:uppercase"
            >
              <span>🌐 Language / Idioma</span>
            </button>
            <a
              href="https://dulkufreight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F40009] transition-colors"
            >
              dulkufreight.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
