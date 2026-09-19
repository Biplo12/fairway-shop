import Link from "next/link";
import type { ReactNode } from "react";

/** Minimal uppercase link with a rule that extends on hover — CLAUDE.md §29. */
export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const tones = {
    dark: "text-charcoal decoration-charcoal/30",
    light: "text-offwhite decoration-offwhite/40",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] ${tones[tone]} ${className}`}
    >
      <span
        aria-hidden
        className="h-px w-8 origin-left bg-current transition-transform duration-200 ease-out group-hover:scale-x-150"
      />
      <span className="underline decoration-1 underline-offset-[6px]">
        {children}
      </span>
    </Link>
  );
}
