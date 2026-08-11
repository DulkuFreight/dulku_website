import dulkuLogo from "@/assets/dulku-logo.png";
import dulkuLogoHover from "@/assets/dulku-logo-hover.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="relative h-8 sm:h-9 max-h-9 shrink-0 flex items-center">
        <img
          src={dulkuLogo}
          alt="Dulku Freight Logo"
          className="h-8 w-auto sm:h-9 max-h-9 object-contain rounded-md shrink-0 block transition-all duration-250 group-hover:opacity-0"
        />
        <img
          src={dulkuLogoHover}
          alt="Dulku Freight Logo Hover"
          className="absolute inset-0 h-8 w-auto sm:h-9 max-h-9 object-contain rounded-md shrink-0 block opacity-0 transition-all duration-250 group-hover:opacity-100 group-hover:scale-105"
        />
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tight text-foreground whitespace-nowrap transition-colors duration-250 group-hover:text-[#F40009]">
        Dulku Freight
      </span>
    </span>
  );
}
