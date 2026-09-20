import { timeline } from "../../../constants";

export function AboutTimeline() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-charcoal px-6 py-12 text-offwhite md:px-12 md:py-16">
        <div className="max-w-[34rem]">
          <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-offwhite/50">
            How it got here
          </span>
          <h2 className="mt-5 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
            Four moves in thirty nine years
          </h2>
        </div>

        <ol className="mt-12 grid gap-y-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4 lg:gap-x-8">
          {timeline.map((entry) => (
            <li key={entry.year} className="border-t border-offwhite/20 pt-5">
              <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-offwhite/55">
                {entry.year}
              </span>
              <h3 className="mt-4 text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                {entry.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-offwhite/70">
                {entry.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
