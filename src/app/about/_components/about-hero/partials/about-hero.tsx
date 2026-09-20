import Link from "next/link";

import { Media } from "@/components/ui/media";

export function AboutHero() {
  return (
    <div className="relative bg-charcoal">
      <div className="absolute inset-0">
        <Media
          src="/images/shop-info/about-links.jpg"
          alt="A misty links fairway with a single golfer and a trolley"
          ratio="fill"
          sizes="100vw"
          priority
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-transparent"
      />

      <div className="relative flex min-h-[26rem] flex-col justify-between gap-10 p-6 pb-16 md:min-h-[24rem] md:p-10 md:pb-20 lg:aspect-[3.05/1] lg:p-12 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-white">About</li>
          </ol>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[34rem]">
            <span className="inline-flex items-center rounded-full border border-white/50 px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em] text-white">
              The shop
            </span>
            <h1 className="mt-5 text-[clamp(2.25rem,4.4vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
              One bench, then a studio
            </h1>
            <p className="mt-4 text-[1rem] leading-[1.55] text-white/80">
              FAIRWAY opened in 1987 as a fitting bench behind another
              shop&apos;s counter. The bench is still here. Everything else was
              built around it.
            </p>
          </div>

          <dl className="flex gap-10 lg:justify-end">
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                Est.
              </dt>
              <dd className="mt-1.5 text-[1.375rem] leading-none tabular-nums text-white">
                1987
              </dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                Where
              </dt>
              <dd className="mt-1.5 text-[1.375rem] leading-none text-white">
                St. Andrews
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
