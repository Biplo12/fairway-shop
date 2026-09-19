import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

import { Mark } from "@/components/brand/mark";
import { Media } from "@/components/ui/media";
import { Arrow } from "@/components/ui/arrow";

const tabs = [
  { href: "/shop", name: "Shop", index: "01", current: false },
  { href: "/brands", name: "Brands", index: "02", current: false },
  { href: "/fitting", name: "Fitting", index: "03", current: false },
];

export function Hero() {
  return (
    <section className="p-3 md:p-5 lg:h-dvh">
      <div className="grid h-full gap-3 lg:grid-cols-2 lg:gap-4">
        {/* Light editorial card */}
        <div
          className="rise order-2 flex min-h-0 flex-col overflow-hidden rounded-card bg-white lg:order-1"
          style={{ animationDelay: "90ms" }}
        >
          <nav aria-label="Sections" className="grid grid-cols-3">
            {tabs.map((tab, i) => (
              <Link
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={`flex flex-col gap-4 px-3 pb-3 pt-4 text-[0.75rem] leading-tight md:gap-6 md:px-6 md:text-[0.875rem] ${
                  i < tabs.length - 1 ? "border-r border-mist/70" : ""
                } ${
                  tab.current
                    ? "border-b-[3px] border-b-forest text-charcoal"
                    : "border-b border-b-mist/70 text-charcoal/80 hover:text-charcoal"
                }`}
              >
                <span>{tab.name}</span>
                <span className="self-start text-charcoal/50">{tab.index}</span>
              </Link>
            ))}
          </nav>

          <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 p-5 md:p-7">
            <span
              className="inline-flex w-fit items-center rounded-full border border-charcoal/40 px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em]">
              In stock: 2026 tour balls
            </span>

            <Media
              src="/images/products/tour-balls.jpg"
              alt="Tour golf balls lit against a dark background"
              ratio="16/10"
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="rounded-[12px]"
              priority
            />

            <div>
              <h2 className="text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                Tour balls
              </h2>
              <p className="mt-5 text-[1.1875rem] leading-[1.55] text-charcoal/85">
                Pro V1, Chrome Soft and TP5 on the same shelf. We fit a ball the
                way we fit a club: by flight, spin and what you actually do off
                the tee. Come in with a{" "}
                <Link href="/fitting" className="underline underline-offset-2">
                  sleeve of each
                </Link>{" "}
                and leave knowing.
              </p>

              <div className="mt-6 flex justify-end">
                <Link
                  href="/shop/balls"
                  className="group inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em]"
                >
                  <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                  <span className="underline underline-offset-4">
                      Shop balls
                    </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Photographic card */}
        <div className="rise relative order-1 min-h-[30rem] overflow-hidden rounded-card bg-forest lg:order-2 lg:min-h-0">
          <Media
            src="/images/editorial/hero-links.jpg"
            alt="A golfer at the top of the backswing on a links fairway under a wide cloud-filled sky"
            ratio="fill"
            sizes="100vw"
            quality={90}
            className="h-full w-full"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/30 to-charcoal/10"
          />

          <div className="absolute inset-0 flex flex-col p-5 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <Link href="/" className="flex items-center gap-3 text-white">
                <Mark compact className="h-5 w-5" />
                <span className="text-[1rem] font-medium uppercase tracking-[0.26em]">
                  Fairway
                </span>
                <span className="sr-only">home</span>
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Search"
                  className="grid size-9 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/15"
                >
                  <Search className="size-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  className="hidden size-9 place-items-center rounded-full border border-white/50 text-[0.75rem] text-white transition-colors hover:bg-white/15 sm:grid"
                >
                  En
                </button>
                <Link
                  href="/account"
                  aria-label="Account"
                  className="hidden size-9 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/15 sm:grid"
                >
                  <User className="size-4" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/bag"
                  className="flex items-center gap-3 rounded-full bg-white py-1 pl-4 pr-1 text-[0.875rem] text-charcoal sm:w-[7.5rem] sm:justify-between sm:pl-5"
                >
                  Cart
                  <span className="grid size-7 place-items-center rounded-full bg-charcoal text-[0.75rem] text-white">
                    0
                  </span>
                </Link>
              </div>
            </div>

            <div className="my-auto max-w-[38rem]">
              <span className="inline-flex items-center rounded-full bg-white px-3.5 py-2 text-[0.75rem] uppercase leading-none tracking-[0.02em] text-charcoal">
                Est. 1987
              </span>
              <h1 className="mt-5 text-[clamp(2.5rem,4.6vw,4rem)] font-normal leading-[1.05] tracking-[-0.025em] text-white">
                Play the long game
              </h1>
              <p className="mt-4 text-[1.125rem] leading-[1.55] text-white/90">
                Titleist, TaylorMade, Callaway, Ping and Mizuno on the rack. Every
                one of them fitted to the way you actually play.
              </p>

              <p className="mt-8 text-[0.875rem] uppercase tracking-[0.02em] text-white">
                New to Fairway? Start on the launch monitor.
              </p>
              <Link
                href="/fitting"
                className="group mt-3 inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.02em] text-white"
              >
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                <span className="underline underline-offset-4">
                  Book a fitting
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
