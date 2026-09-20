import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/utils";
import { tones } from "../constants";

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
      className={cn("inline-flex items-center justify-center rounded-control px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors", tones[tone], className)}
    >
      {children}
    </Link>
  );
}
