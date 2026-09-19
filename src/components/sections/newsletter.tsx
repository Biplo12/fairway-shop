"use client";

import { useState } from "react";

/**
 * The quiet end of the page. A shop that fits clubs has one reason to write,
 * so the promise is a small one and the form is two fields wide.
 *
 * Client only for the acknowledgement. There is no list behind it yet, so the
 * submit stays local rather than pretending to post somewhere.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-paper px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
              Newsletter
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,2.8vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              One letter a month
            </h2>
            <p className="mt-4 max-w-[34rem] text-[1.0625rem] leading-[1.5] text-charcoal/70">
              What came in, what we have been fitting, and the occasional note
              about a club worth waiting for. No discount codes, because we do
              not run them.
            </p>
          </div>

          {signedUp ? (
            <p
              role="status"
              className="text-[1.0625rem] leading-[1.5] text-charcoal/70 lg:pb-2"
            >
              Thank you. The first letter goes out at the start of the month.
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSignedUp(true);
              }}
              className="lg:pb-2"
            >
              <label
                htmlFor="newsletter-email"
                className="text-[0.75rem] uppercase tracking-[0.16em] text-olive"
              >
                Email address
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-control border border-charcoal/20 bg-white px-4 py-3.5 text-[1rem] text-charcoal placeholder:text-charcoal/40 focus:border-charcoal/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                >
                  Sign up
                </button>
              </div>
              <p className="mt-3 text-[0.8125rem] text-charcoal/55">
                Twelve emails a year. Leave whenever you like.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
