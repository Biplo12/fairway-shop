import { steps } from "@/content/fitting";

/**
 * Four steps, set as a spec sheet rather than as a journey: a rule, a number,
 * a heading and one paragraph. The page is heavy with photography by this
 * point, so this section is type on white and nothing else.
 */
export function HowItRuns() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-[34rem]">
          <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
            How a session runs
          </span>
          <h2 className="mt-5 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
            Ninety minutes, in four parts
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.6] text-charcoal/70">
            The same order every time, whatever the session. The shorter ones
            skip nothing, they simply cover fewer clubs.
          </p>
        </div>

        <ol className="mt-12 grid gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((step) => (
            <li key={step.index} className="border-t border-charcoal/15 pt-5">
              <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-olive">
                {step.index}
              </span>
              <h3 className="mt-4 text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                {step.name}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
