import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { allSessions } from "@/content/fitting";

export function OtherSessions({ current }: { current: string }) {
  const others = allSessions.filter((session) => session.slug !== current);

  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-charcoal px-6 py-10 text-offwhite md:px-12 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-[0.75rem] uppercase tracking-[0.16em] text-offwhite/50">
            The other sessions
          </p>
          <Link
            href="/fitting"
            className="text-[0.875rem] uppercase tracking-[0.04em] text-offwhite/80 underline underline-offset-4 hover:text-offwhite"
          >
            All five
          </Link>
        </div>

        <ul className="mt-8">
          {others.map((session) => (
            <li key={session.slug} className="border-t border-offwhite/15">
              <Link
                href={`/fitting/${session.slug}`}
                className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5"
              >
                <span className="text-[1.25rem] leading-none tracking-[-0.015em]">
                  {session.name}
                </span>
                <span className="flex items-baseline gap-6">
                  <span className="text-[0.75rem] uppercase tracking-[0.12em] text-offwhite/55">
                    {session.duration}
                  </span>
                  <span className="w-14 text-right text-[1.0625rem] tabular-nums">
                    {session.price}
                  </span>
                  <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
