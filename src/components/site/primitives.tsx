import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="label-mono text-[#F40009]">{children}</p>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-28 ${className}`}>
      <Reveal className="mx-auto max-w-6xl">{children}</Reveal>
    </section>
  );
}

export function CtaLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-85";
  const styles =
    variant === "primary"
      ? "bg-[#F40009] text-white"
      : "border border-border text-foreground";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <section className={`px-5 pb-10 pt-36 sm:pt-44 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal variant="blur">
          <p className={`label-mono text-[#F40009] ${eyebrowClassName}`}>{eyebrow}</p>
        </Reveal>
        <Reveal variant="blur" delay={80}>
          <h1 className={`display-xl mt-5 max-w-4xl text-4xl sm:text-6xl ${titleClassName}`}>{title}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className={`mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg ${subtitleClassName}`}>
            {subtitle}
          </p>
        </Reveal>
        {image && (
          <Reveal delay={220} className="mt-12 overflow-hidden rounded-2xl border border-border">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
