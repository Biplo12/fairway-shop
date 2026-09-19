import type { ReactNode } from "react";

/** Small uppercase metadata, the technical voice against the serif headlines. */
export function Label({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const tones = {
    dark: "border-charcoal/25 text-charcoal",
    light: "border-offwhite/40 text-offwhite",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[0.6875rem] uppercase leading-none tracking-[0.16em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
