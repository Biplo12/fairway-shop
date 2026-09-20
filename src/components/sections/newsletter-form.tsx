"use client";

import { useState } from "react";

/**
 * The only interactive part of the newsletter band, kept apart so the section
 * around it stays a server component. There is no list behind it yet, so the
 * submit stays local rather than pretending to post somewhere.
 *
 * The form and the thank you share one grid cell, so one fades out as the
 * other fades in and the band never changes height. Section 16: one gesture,
 * and none of it under prefers-reduced-motion.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  return (
    <div className="mt-7 grid">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSignedUp(true);
        }}
        aria-hidden={signedUp}
        inert={signedUp}
        className={`col-start-1 row-start-1 transition-all duration-500 ease-out motion-reduce:transition-none ${
          signedUp
            ? "pointer-events-none translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-control border border-white/40 bg-white/10 px-4 py-3.5 text-[1rem] text-white backdrop-blur-sm placeholder:text-white/55 focus:border-white/80 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-control bg-offwhite px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:bg-white"
          >
            Sign up
          </button>
        </div>
        <p className="mt-3 text-[0.8125rem] text-white/65">
          Twelve emails a year. Leave whenever you like.
        </p>
      </form>

      <p
        role="status"
        className={`col-start-1 row-start-1 self-center text-[1.0625rem] leading-[1.5] text-white transition-all duration-500 ease-out motion-reduce:transition-none ${
          signedUp
            ? "translate-y-0 opacity-100 delay-200"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {signedUp
          ? "Thank you. The first letter goes out at the start of the month."
          : null}
      </p>
    </div>
  );
}
