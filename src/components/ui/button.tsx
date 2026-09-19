import Link from "next/link";
import type { ReactNode } from "react";

const tones = {
  solid: "bg-charcoal text-offwhite hover:bg-charcoal/90",
  outline: "border border-charcoal/30 text-charcoal hover:border-charcoal/70",
  light: "bg-white text-charcoal hover:bg-white/90",
};

/**
 * The one control that looks like an action. Everything else on the site is a
 * rule and an arrow, so this has to stay rare to keep its weight.
 */
export function Button({
  href,
  children,
  tone = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-control px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors ${tones[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}
