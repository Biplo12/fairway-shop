import { questions } from "@/content/fitting";

/**
 * The questions asked at the counter, answered the way they are answered at
 * the counter. Native details and summary, so it opens without JavaScript and
 * a browser can find text inside a closed answer.
 */
export function Questions() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="max-w-[26rem]">
            <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
              Before you book
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              What people ask at the counter
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.6] text-charcoal/70">
              If yours is not here, call the shop on 01334 555 187 and ask for
              the studio. Somebody who fits clubs will answer it.
            </p>
            <a
              href="tel:+441334555187"
              className="mt-7 inline-flex rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
            >
              Call the studio
            </a>
          </div>

          <div>
            {questions.map((entry) => (
              <details
                key={entry.question}
                className="group border-b border-charcoal/12 last:border-b-0"
              >
                <summary className="flex items-start justify-between gap-6 py-5 text-[1.0625rem] leading-[1.4] marker:content-none [&::-webkit-details-marker]:hidden">
                  {entry.question}
                  <span
                    aria-hidden
                    className="relative mt-2 h-px w-4 shrink-0 bg-charcoal/60 before:absolute before:inset-0 before:bg-charcoal/60 before:transition-transform before:duration-200 before:content-[''] before:[transform:rotate(90deg)] group-open:before:[transform:rotate(0deg)]"
                  />
                </summary>
                <p className="max-w-[40rem] pb-6 text-[0.9375rem] leading-[1.7] text-charcoal/70">
                  {entry.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
