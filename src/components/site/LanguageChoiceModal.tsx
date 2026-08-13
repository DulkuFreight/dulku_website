import React, { useEffect, useState } from "react";
import { X, Globe, Check, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const STORAGE_KEY = "dulku_language_preference";
export const OPEN_LANG_MODAL_EVENT = "dulkufreight:open-lang-modal";

/**
 * Spanish Flag SVG Component
 * Clean, accurate representation of the flag of Spain.
 */
export function SpanishFlagIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#aa151b" d="M0 0h640v480H0z" />
        <path fill="#f1bf00" d="M0 120h640v240H0z" />
        <path fill="#aa151b" d="M0 0h640v120H0zm0 360h640v120H0z" />
      </g>
    </svg>
  );
}

/**
 * Helper to trigger language change programmatically from anywhere on the site
 */
export function openLanguageModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_LANG_MODAL_EVENT));
  }
}

/**
 * Applies Google Translate cookie and reloads/updates page if needed
 */
function applyLanguagePreference(lang: "es" | "en") {
  if (typeof window === "undefined") return;

  const currentCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("googtrans="));

  if (lang === "es") {
    // Set Google Translate cookie for English to Spanish
    document.cookie = "googtrans=/en/es; path=/; domain=" + window.location.hostname;
    document.cookie = "googtrans=/en/es; path=/";
    
    // Inject Google Translate script if not already loaded
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = function () {
        // @ts-ignore
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "es,en", layout: 0 },
          "google_translate_element"
        );
      };
    } else {
      // Reload or trigger translation update if cookie was updated
      if (!currentCookie || !currentCookie.includes("/en/es")) {
        window.location.reload();
      }
    }
  } else {
    // English chosen: reset cookie
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    if (currentCookie && currentCookie.includes("/en/es")) {
      window.location.reload();
    }
  }
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

export function LanguageChoiceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"es" | "en" | null>(null);

  useEffect(() => {
    // Check local storage on mount (first-time visitor check)
    const savedPreference = localStorage.getItem(STORAGE_KEY) as "es" | "en" | null;
    
    if (savedPreference) {
      setCurrentLang(savedPreference);
      if (savedPreference === "es") {
        applyLanguagePreference("es");
      }
    } else {
      // First visit: show popup with a small delay for smooth intro
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom event to manually re-open popup from header/footer
  useEffect(() => {
    const handleReopen = () => {
      setIsOpen(true);
    };

    window.addEventListener(OPEN_LANG_MODAL_EVENT, handleReopen);
    return () => window.removeEventListener(OPEN_LANG_MODAL_EVENT, handleReopen);
  }, []);

  const handleSelectLanguage = (lang: "es" | "en") => {
    localStorage.setItem(STORAGE_KEY, lang);
    setCurrentLang(lang);
    setIsOpen(false);
    applyLanguagePreference(lang);
  };

  return (
    <>
      {/* Hidden container for Google Translate element if used */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="sm:max-w-[460px] p-0 overflow-hidden border border-white/15 bg-[#121215] text-white shadow-2xl rounded-2xl sm:rounded-3xl backdrop-blur-2xl"
          aria-describedby="lang-dialog-description"
        >
          {/* Background Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#F40009]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#aa151b]/15 blur-3xl" />

          {/* Modal Header Badge & Icon */}
          <div className="relative pt-7 px-6 sm:px-8 pb-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative mb-4 flex items-center justify-center">
              {/* Spanish Flag Badge with Ring Highlight */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-0.5 shadow-xl border border-white/15 backdrop-blur-md group">
                <div className="h-full w-full overflow-hidden rounded-[14px] flex items-center justify-center bg-black/40">
                  <SpanishFlagIcon className="h-full w-full object-cover scale-110" />
                </div>
                {/* Small Globe Icon Badge */}
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#F40009] text-white shadow-md ring-2 ring-[#121215]">
                  <Globe className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
              Would you like to view this website in Spanish?
            </DialogTitle>

            {/* Message */}
            <DialogDescription
              id="lang-dialog-description"
              className="mt-2 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed"
            >
              A Spanish version of our website is available.
            </DialogDescription>
          </div>

          {/* Action Buttons */}
          <div className="relative p-6 sm:p-8 pt-4 flex flex-col gap-3">
            {/* Primary Button */}
            <button
              type="button"
              onClick={() => handleSelectLanguage("es")}
              className="group relative flex h-12 sm:h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-[#F40009] px-5 text-sm font-semibold text-white shadow-lg shadow-[#F40009]/25 transition-all duration-200 hover:bg-[#F40009]/90 hover:shadow-[#F40009]/40 active:scale-[0.99] cursor-pointer"
            >
              <SpanishFlagIcon className="h-4 w-5 rounded-[2px] shadow-sm" />
              <span>Yes, View in Spanish</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={() => handleSelectLanguage("en")}
              className="flex h-11 sm:h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-white/[0.1] hover:border-white/30 hover:text-white active:scale-[0.99] cursor-pointer"
            >
              <span>Continue in English</span>
            </button>

            {/* Supporting Note */}
            <p className="mt-1 text-center font-mono text-[11px] text-zinc-400">
              You can change your language preference anytime.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/**
 * Language Selector Button Component for Header/Footer
 * Allows user to view current selection and reopen the modal anytime
 */
export function LanguageSelectorButton() {
  const [currentLang, setCurrentLang] = useState<"es" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as "es" | "en" | null;
    if (saved === "es") setCurrentLang("es");

    const updateLang = () => {
      const updated = localStorage.getItem(STORAGE_KEY) as "es" | "en" | null;
      setCurrentLang(updated === "es" ? "es" : "en");
    };

    window.addEventListener("storage", updateLang);
    window.addEventListener(OPEN_LANG_MODAL_EVENT, updateLang);
    return () => {
      window.removeEventListener("storage", updateLang);
      window.removeEventListener(OPEN_LANG_MODAL_EVENT, updateLang);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={openLanguageModal}
      aria-label="Change website language"
      title="Change Language / Cambiar Idioma"
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/[0.05] px-2.5 py-1.5 text-xs font-medium text-foreground/90 transition-all duration-200 hover:border-[#F40009]/50 hover:bg-white/[0.1] hover:text-white cursor-pointer"
    >
      {currentLang === "es" ? (
        <>
          <SpanishFlagIcon className="h-3.5 w-4 rounded-[2px]" />
          <span>ES</span>
        </>
      ) : (
        <>
          <Globe className="h-3.5 w-3.5 text-muted-foreground" />
          <span>EN</span>
        </>
      )}
    </button>
  );
}
