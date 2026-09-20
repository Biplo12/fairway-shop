"use client";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <title>Something went wrong | FAIRWAY</title>
        <main className="flex min-h-screen items-center justify-center p-6">
          <div className="w-full max-w-[34rem] rounded-card bg-white p-8 md:p-12">
            <p className="text-[0.75rem] uppercase tracking-[0.26em]">
              Fairway
            </p>
            <h1 className="mt-6 text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              The site is having a bad minute
            </h1>
            <p className="mt-4 text-[1rem] leading-[1.6] text-charcoal/70">
              Nothing you did caused this. Reload, and if it is still here, the
              shop is open seven days and the counter does not go down.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => retry()}
                className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
              >
                Try again
              </button>
              <a
                href="tel:+441334555187"
                className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
              >
                01334 555 187
              </a>
            </div>

            {error.digest ? (
              <p className="mt-8 border-t border-mist pt-5 text-[0.875rem] text-charcoal/55">
                Reference{" "}
                <span className="font-mono text-charcoal/80">
                  {error.digest}
                </span>
              </p>
            ) : null}
          </div>
        </main>
      </body>
    </html>
  );
}
