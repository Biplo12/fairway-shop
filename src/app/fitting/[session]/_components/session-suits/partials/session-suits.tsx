import Link from "next/link";

import type { SessionViewProps } from "../../../types";

export function SessionSuits({ session, page }: SessionViewProps) {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              Book it if
            </h2>

            <ul className="mt-8 border-t border-mist">
              {page.suits.map((line) => (
                <li
                  key={line}
                  className="border-b border-mist py-4 text-[1.0625rem] leading-[1.5]"
                >
                  {line}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[38rem] text-[1.0625rem] leading-[1.6]">
              {page.notFor}
            </p>

            <Link
              href={page.shelf.href}
              className="mt-8 inline-flex rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
            >
              {page.shelf.label}
            </Link>
          </div>

          <div className="rounded-card bg-paper p-6 md:p-8">
            <h3 className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
              Bring with you
            </h3>
            <ul className="mt-6">
              {page.bring.map((item) => (
                <li
                  key={item}
                  className="border-t border-charcoal/12 py-3.5 text-[1rem] leading-[1.5] first:border-t-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-charcoal/12 pt-5 text-[0.875rem] leading-[1.6] text-charcoal/65">
              {session.duration} in the bay, {session.price}, and the fee comes
              off anything you buy on the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
