import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { clubTypes } from "@/content/products";

export function ClubTypes() {
  if (clubTypes.length < 2) return null;

  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-charcoal px-6 py-8 text-offwhite md:px-10 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
              The club racks
            </p>
            <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,2.125rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              Straight to the one you came in for
            </h2>
          </div>
          <Link
            href="/shop/clubs"
            className="group inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em]"
          >
            <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
            <span className="underline underline-offset-4">Every club</span>
          </Link>
        </div>

        <ul className="mt-7 flex flex-wrap gap-2">
          {clubTypes.map((type) => (
            <li key={type.slug}>
              <Link
                href={`/shop/clubs?type=${encodeURIComponent(type.slug)}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-offwhite/25 px-4 py-2.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-offwhite/70 hover:bg-white/10"
              >
                <span className="capitalize">{type.slug}</span>
                <span className="text-[0.6875rem] tabular-nums text-offwhite/55">
                  {type.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
