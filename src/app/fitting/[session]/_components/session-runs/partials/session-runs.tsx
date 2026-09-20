import type { SessionViewProps } from "../../../types";

export function SessionRuns({ session, page }: SessionViewProps) {
  return (
    <div className="border-t border-mist px-6 py-12 md:px-12 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
            How the session runs
          </span>
          {page.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-charcoal/80"
            >
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 flex flex-wrap gap-2">
            {session.covers.map((cover) => (
              <li
                key={cover}
                className="rounded-full border border-charcoal/15 px-3 py-1.5 text-[0.75rem] uppercase tracking-[0.04em] text-charcoal/65"
              >
                {cover}
              </li>
            ))}
          </ul>
        </div>

        <ol className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-10">
          {page.runs.map((run) => (
            <li key={run.index} className="border-t border-mist pt-5">
              <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-olive">
                {run.index}
              </span>
              <h2 className="mt-4 text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                {run.name}
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
                {run.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
