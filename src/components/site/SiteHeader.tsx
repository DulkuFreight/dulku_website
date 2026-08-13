import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, Mail, X, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSelectorButton } from "./LanguageChoiceModal";

const STORAGE_KEY = "dulku_language_preference";
export const OPEN_LANG_MODAL_EVENT = "dulkufreight:open-lang-modal";

const NAV = [
  {
    en: "Cross-Dock",
    es: "Cross-Docking",
    to: "/cross-dock-new-jersey",
  },
  {
    en: "Container Unloading",
    es: "Descarga de Contenedores",
    to: "/container-unloading-new-jersey",
  },
  {
    en: "Pallet Storage",
    es: "Almacenamiento de Palets",
    to: "/pallet-storage-new-jersey",
  },
  {
    en: "Pallet Restacking & Rework",
    es: "Reorganización de Palés",
    to: "/pallet-restacking-new-jersey",
  },
  {
    en: "Transloading",
    es: "Transbordo",
    to: "/transloading-new-jersey",
  },
  {
    en: "3PL Fulfillment",
    es: "Logística 3PL",
    to: "/fulfillment-new-jersey",
  },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("en");
  const [isOverflowing, setIsOverflowing] = useState(false);
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navListRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  // Track scroll position for translucent header backdrop styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync language preference state from localStorage and custom events
  useEffect(() => {
    const updateLangState = () => {
      const saved = localStorage.getItem(STORAGE_KEY) as "es" | "en" | null;
      if (saved === "es") {
        setLang("es");
      } else {
        setLang("en");
      }
    };

    updateLangState();
    window.addEventListener("storage", updateLangState);
    window.addEventListener(OPEN_LANG_MODAL_EVENT, updateLangState);
    return () => {
      window.removeEventListener("storage", updateLangState);
      window.removeEventListener(OPEN_LANG_MODAL_EVENT, updateLangState);
    };
  }, []);

  // Dynamic layout overflow check: accurately measures center available width vs. nav list required width
  useEffect(() => {
    const checkOverflow = () => {
      if (navListRef.current && navContainerRef.current) {
        const containerWidth = navContainerRef.current.clientWidth;
        const logoWidth = logoRef.current ? logoRef.current.offsetWidth : 160;
        const actionsWidth = actionsRef.current ? actionsRef.current.offsetWidth : 220;
        
        // Exact remaining horizontal width available for center navigation menu items
        const availableCenterSpace = containerWidth - logoWidth - actionsWidth - 48;
        const requiredListWidth = navListRef.current.scrollWidth;

        // Trigger mobile hamburger layout if nav text exceeds available center space
        setIsOverflowing(requiredListWidth > availableCenterSpace);
      }
    };

    // Run check immediately and on window resize / layout change
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    const observer = new ResizeObserver(checkOverflow);
    if (navContainerRef.current) observer.observe(navContainerRef.current);
    if (navListRef.current) observer.observe(navListRef.current);

    return () => {
      window.removeEventListener("resize", checkOverflow);
      observer.disconnect();
    };
  }, [lang]);

  // Lock body scroll when mobile/tablet side drawer is open
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

  // Show hamburger menu if layout overflows or on small screens (<1024px)
  const showHamburgerMenu = isOverflowing;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:pt-4">
        {/* Main Header Container with 3 Distinct Flex Sections: Left (Logo), Center (Nav), Right (Actions) */}
        <div
          ref={navContainerRef}
          className={`pointer-events-auto mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-3 sm:gap-4 rounded-xl border border-border px-4 sm:px-6 py-2.5 backdrop-blur-xl transition-all duration-250 ${
            scrolled ? "bg-background/92 shadow-xl border-white/15" : "bg-surface/50"
          }`}
        >
          {/* SECTION 1 (LEFT): Brand Logo (flex-shrink: 0) */}
          <Link
            ref={logoRef}
            to="/"
            className="shrink-0 flex items-center h-10 mr-2 lg:mr-4 transition-all duration-250 z-10"
          >
            <Logo />
          </Link>

          {/* SECTION 2 (CENTER): Desktop Navigation Links (flex: 1 min-w-0) */}
          <nav
            ref={navListRef}
            className={`flex-1 min-w-[#200px] items-center justify-center transition-all duration-250 ${
              showHamburgerMenu ? "hidden" : "hidden md:flex"
            } ${lang === "es" ? "gap-1 lg:gap-1.5 xl:gap-2" : "gap-1.5 lg:gap-2.5"}`}
          >
            {NAV.map((item) => {
              const labelText = item[lang] || item.en;
              return (
                <Link
                  key={item.en}
                  to={item.to}
                  className={`inline-flex items-center justify-center rounded-md font-medium text-foreground/90 transition-colors duration-250 hover:bg-[#F40009]/10 hover:text-[#F40009] whitespace-nowrap shrink-0 ${
                    lang === "es"
                      ? "px-2 lg:px-2.5 py-1.5 text-[11px] lg:text-[12px] xl:text-[13px] tracking-tight"
                      : "px-2.5 lg:px-3 py-1.5 text-[12px] lg:text-[13.5px]"
                  }`}
                  activeProps={{ className: "bg-accent text-[#F40009] font-semibold" }}
                >
                  {labelText}
                </Link>
              );
            })}
          </nav>

          {/* SECTION 3 (RIGHT): Controls & Actions (flex-shrink: 0, ml-auto) */}
          <div
            ref={actionsRef}
            className="ml-auto flex items-center gap-2 sm:gap-2.5 h-10 shrink-0 z-10"
          >
            {/* Language Selector Pill */}
            <LanguageSelectorButton />

            {/* Email Button */}
            <a
              href="mailto:info@dulkufreight.com"
              aria-label="Email Dulku Freight"
              className="group relative overflow-hidden hidden lg:flex h-10 items-center rounded-lg border border-border px-3 font-mono text-xs text-[#F40009] hover:border-[#F40009] shrink-0"
            >
              <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-[600ms] ease-out group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-[600ms] ease-out group-hover:text-[#F40009]">
                <Mail className="h-3.5 w-3.5 text-[#F40009] transition-colors duration-[600ms] ease-out group-hover:text-[#F40009]" />
                <span className="relative whitespace-nowrap font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-[#F40009] after:transition-transform after:duration-[600ms] after:ease-out group-hover:after:scale-x-100">
                  {lang === "es" ? "Correo" : "Email"}
                </span>
              </span>
            </a>

            {/* Primary CTA Get Quote / Cotizar Button */}
            <Link
              to="/quote"
              className="group relative overflow-hidden hidden sm:inline-flex h-10 items-center rounded-lg bg-[#F40009] px-3.5 sm:px-4 font-mono text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white font-semibold transition-colors duration-[600ms] ease-out hover:border-[#F40009] shrink-0 whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-[600ms] ease-out group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-[600ms] ease-out group-hover:text-[#F40009]">
                <span className="relative whitespace-nowrap font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-[#F40009] after:transition-transform after:duration-[600ms] after:ease-out group-hover:after:scale-x-100">
                  {lang === "es" ? "Cotizar" : "Get Quote"}
                </span>
              </span>
            </Link>

            {/* Hamburger Menu Toggle Button (Appears when mobile screen or when text space is insufficient) */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-10 w-10 place-items-center rounded-lg border border-border transition-all duration-250 hover:border-[#F40009] hover:text-[#F40009] shrink-0 cursor-pointer ${
                showHamburgerMenu ? "flex" : "md:hidden"
              }`}
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
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          showHamburgerMenu ? "" : "md:hidden"
        } ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Off-Canvas Sliding Right Side Drawer for Mobile & Tablet */}
      <aside
        aria-label="Mobile Navigation"
        className={`pointer-events-auto fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-[360px] flex-col border-l border-white/10 bg-[#161618]/98 p-5 text-white shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-out ${
          showHamburgerMenu ? "" : "md:hidden"
        } ${open ? "translate-x-0" : "translate-x-full"}`}
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
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/80 transition-colors hover:border-[#F40009] hover:text-[#F40009] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex-1 overflow-y-auto pt-4 flex flex-col justify-between">
          <div className="flex flex-col gap-1.5">
            {NAV.map((item) => {
              const labelText = item[lang] || item.en;
              return (
                <Link
                  key={item.en}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm sm:text-base font-medium text-white/90 transition-colors duration-200 hover:bg-white/5 hover:text-[#F40009] leading-snug"
                >
                  <span>{labelText}</span>
                  <ChevronRight className="h-4 w-4 text-white/40 shrink-0 ml-2" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-2.5 shrink-0">
            <div className="my-2 border-t border-white/10" />

            {/* Email Card */}
            <a
              href="mailto:info@dulkufreight.com"
              className="group flex h-12 w-full items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] px-4 font-mono text-xs text-white/90 transition-all duration-200 hover:border-[#F40009] hover:bg-white/[0.12]"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/60 transition-colors group-hover:text-[#F40009]" />
                <span>info@dulkufreight.com</span>
              </div>
              <ChevronRight className="h-4 w-4 text-white/40 transition-colors group-hover:text-[#F40009]" />
            </a>

            {/* Primary CTA Get Quote Button */}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-white px-4 font-mono text-xs uppercase tracking-[0.2em] text-black font-bold transition-all duration-200 hover:bg-[#F40009] hover:text-white"
            >
              {lang === "es" ? "Obtener Cotización" : "Get Quote"}
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
