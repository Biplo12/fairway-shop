import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";
import { feeNote, fullBag, sessions } from "@/content/fitting";

export function Sessions() {
  return (
    <div
      id="sessions"
      className="relative -mt-7 scroll-mt-24 rounded-t-[1.75rem] bg-white px-6 py-10 md:-mt-9 md:rounded-t-[2.25rem] md:px-10 md:py-12"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[34rem]">
          <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
            Five sessions
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.6] text-charcoal/70">
            Book the one that matches the question you came in with. If you pick
            the wrong one we will say so at the door and swap it.
          </p>
        </div>
        <p className="max-w-[20rem] text-[0.875rem] leading-[1.6] text-charcoal/60">
          {feeNote}
        </p>
      </div>

      <div className="mt-9 grid gap-3 md:gap-4 lg:grid-cols-2">
        {sessions.map((session) => (
          <article
            key={session.slug}
            id={session.slug}
            className="group flex scroll-mt-24 flex-col overflow-hidden rounded-card bg-paper"
          >
            {session.image ? (
              <Media
                src={session.image}
                alt={session.alt ?? ""}
                ratio="16/10"
                sizes="(min-width: 1024px) 45vw, 100vw"
                imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            ) : null}

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-6 border-b border-charcoal/12 pb-4">
                <h3 className="text-[1.5rem] leading-none tracking-[-0.015em]">
                  {session.name}
                </h3>
                <span className="flex items-baseline gap-5">
                  <span className="text-[0.75rem] uppercase tracking-[0.12em] text-olive">
                    {session.duration}
                  </span>
                  <span className="text-[1.25rem] leading-none tabular-nums">
                    {session.price}
                  </span>
                </span>
              </div>

              <p className="mt-5 text-[1.0625rem] leading-[1.5]">
                {session.question}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
                {session.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {session.covers.map((cover) => (
                  <li
                    key={cover}
                    className="rounded-full border border-charcoal/15 px-3 py-1.5 text-[0.75rem] uppercase tracking-[0.04em] text-charcoal/65"
                  >
                    {cover}
                  </li>
                ))}
              </ul>

              <Link
                href={`/fitting?session=${session.slug}#book`}
                className="mt-auto inline-flex items-center gap-3 pt-7 text-[0.875rem] uppercase tracking-[0.04em]"
              >
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                <span className="underline underline-offset-4">
                  Book {session.name.toLowerCase()}
                </span>
              </Link>
            </div>
          </article>
        ))}

        <article
          id={fullBag.slug}
          className="group flex scroll-mt-24 flex-col justify-between gap-10 rounded-card bg-charcoal p-6 text-offwhite md:p-8 lg:col-span-2 lg:flex-row lg:items-end"
        >
          <div className="max-w-[38rem]">
            <div className="flex items-baseline gap-5">
              <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] leading-none tracking-[-0.02em]">
                {fullBag.name}
              </h3>
              <span className="text-[0.75rem] uppercase tracking-[0.12em] text-offwhite/55">
                {fullBag.duration}
              </span>
            </div>
            <p className="mt-4 text-[1.0625rem] leading-[1.6] text-offwhite/80">
              {fullBag.body}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-[2rem] leading-none tabular-nums">
              {fullBag.price}
            </span>
            <Link
              href={`/fitting?session=${fullBag.slug}#book`}
              className="inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em]"
            >
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              <span className="underline underline-offset-4">Book the day</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
