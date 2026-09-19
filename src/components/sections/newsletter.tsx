import { Media } from "@/components/ui/media";
import { NewsletterForm } from "@/components/sections/newsletter-form";

/**
 * The page closes on a photograph rather than on a form. A shop that fits
 * clubs has one reason to write, so the promise stays small and the whole
 * block is a heading, two lines and a field.
 */
export function Newsletter() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-card bg-charcoal">
        {/* Media is position: relative, so the absolute box goes around it
            rather than on it, or h-full resolves against nothing. */}
        <div className="absolute inset-0">
          <Media
            src="/images/editorial/newsletter-green.jpg"
            alt="An empty green at dusk, the flagstick standing against the trees"
            ratio="fill"
            sizes="100vw"
          />
        </div>
        {/* A left to right scrim holds the text on a wide band. On a phone the
            copy crosses the whole frame, so it gets a flat veil underneath. */}
        <div aria-hidden className="absolute inset-0 bg-charcoal/45 md:hidden" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/35 to-transparent"
        />

        <div className="relative flex min-h-[30rem] items-center p-6 md:min-h-[26rem] md:p-12 lg:min-h-[28rem]">
          <div className="max-w-[36rem]">
            <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.875rem] uppercase leading-none tracking-[0.02em] text-white">
              Newsletter
            </span>

            <h2 className="mt-5 text-[clamp(2rem,3.2vw,3rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
              One letter a month
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.5] text-white/80">
              What came in, what we have been fitting, and the occasional note
              about a club worth waiting for. No discount codes, because we do
              not run them.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
