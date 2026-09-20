"use client";

import Link from "next/link";
import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="info" />

          <div className="px-6 py-12 md:px-12 md:py-16">
            <div className="max-w-[38rem]">
              <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                Something went wrong
              </p>
              <h1 className="mt-3 text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                That page did not load
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/70">
                This one is ours, not yours. Try it again first, because a fair
                number of these fix themselves. If it holds, the shop is open
                and the telephone still works.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => retry()}
                  className="inline-flex items-center gap-2.5 rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                >
                  <RotateCcw className="size-4" strokeWidth={1.75} />
                  Try again
                </button>
                <Link
                  href="/shop"
                  className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
                >
                  Back to the shop
                </Link>
              </div>

              <p className="mt-10 border-t border-mist pt-6 text-[0.9375rem] leading-[1.65] text-charcoal/60">
                Ring{" "}
                <a
                  href="tel:+441334555187"
                  className="underline underline-offset-4 hover:text-charcoal"
                >
                  01334 555 187
                </a>{" "}
                and we will take the order at the counter.
                {error.digest ? (
                  <>
                    {" "}
                    Quote{" "}
                    <span className="font-mono text-charcoal/80">
                      {error.digest}
                    </span>
                    , it tells us which one this was.
                  </>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
