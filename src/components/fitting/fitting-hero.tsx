import Link from "next/link";

import { Media } from "@/components/ui/media";

/**
 * The band under the navigation, built the way the shelves are: one
 * photograph, where you are, and the two things a customer does here, book a
 * session or read what the sessions cover.
 *
 * The frame is 2.56:1, so the band takes that proportion from lg rather than a
 * fixed height, and the minimum heights underneath hold the narrow end where
 * the copy needs the room.
 */
export function FittingHero({
  facts,
}: {
  facts: { value: string; label: string }[];
}) {
  return (
    <div className="relative bg-charcoal">
      <div className="absolute inset-0">
        <Media
          src="/images/fitting/range-tee.jpg"
          alt="A golfer teeing a ball on the mat at the practice ground"
          ratio="fill"
          sizes="100vw"
          imageClassName="object-[70%_center] lg:object-center"
          priority
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/55 to-charcoal/30"
      />

      <div className="relative flex min-h-[32rem] flex-col justify-between gap-10 p-6 pb-16 md:min-h-[30rem] md:p-10 md:pb-20 lg:min-h-[32rem] lg:p-12 lg:pb-24 lg:aspect-[2.7/1]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-white">Fitting studio</li>
          </ol>
        </nav>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[34rem]">
            <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em] text-white">
              Fitting studio, since 1987
            </span>
            <h1 className="mt-5 text-[clamp(2.5rem,5vw,4.25rem)] font-normal leading-[1.02] tracking-[-0.03em] text-white">
              Fitted, not guessed
            </h1>
            <p className="mt-4 text-[1.0625rem] leading-[1.55] text-white/80">
              A fitting is not a list of specs written down. It is finding which
              shots you are missing and which clubs give them back, then gapping
              the rest of the bag so nothing does the same job twice.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#book"
                className="rounded-control bg-white px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:bg-white/90"
              >
                Book a session
              </Link>
              <Link
                href="#sessions"
                className="rounded-control border border-white/50 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/15"
              >
                What we fit
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-6 lg:grid-cols-1 lg:gap-y-5 lg:text-right">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[1.375rem] leading-none text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
