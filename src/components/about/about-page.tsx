import Link from "next/link";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";

/** What the shop sells on, and what it does not. */
const principles = [
  {
    index: "01",
    title: "Fitting first",
    body: "Nothing leaves matched to somebody else. A launch monitor, a lie board and an hour, rather than a guess and a sticker that says regular flex.",
  },
  {
    index: "02",
    title: "Fewer lines, chosen",
    body: "Twelve makers and a fraction of what each of them builds. If it is on the rack it won an argument at the counter, and we can tell you which one.",
  },
  {
    index: "03",
    title: "Staff who play",
    body: "Everybody here plays, most of them badly enough to be useful. That is why we will talk you out of a purchase roughly once a week.",
  },
];

const timeline = [
  {
    year: "1987",
    title: "One bench",
    body: "A fitting bench behind a pro shop near St. Andrews, a vice, a loft and lie machine and a second hand launch net.",
  },
  {
    year: "1994",
    title: "The shop",
    body: "Twelve Links Road, with the bench moved to the back where it has stayed ever since. The rack took the front.",
  },
  {
    year: "2006",
    title: "The monitor",
    body: "The first launch monitor arrived and the arguments got shorter. Numbers ended discussions that used to run all afternoon.",
  },
  {
    year: "Today",
    title: "The studio",
    body: "One bay, five sessions, twelve brands and a filing cabinet of fitting notes going back to the bench.",
  },
];

/**
 * The shop, told the way a customer would hear it across the counter: what it
 * sells on, what is in the back room, and how it got from one bench to a
 * studio. Photography carries most of it, which is the point of a page like
 * this on a site that is otherwise a rack.
 */
export function AboutPage() {
  return (
    <>
      <FloatingNav />
      <main id="main">
        <section className="p-3 md:p-5">
          <div className="overflow-hidden rounded-card bg-white">
            <PageNav current="info" />

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

              <div className="relative flex min-h-[26rem] flex-col justify-between gap-10 p-6 pb-16 md:min-h-[24rem] md:p-10 md:pb-20 lg:p-12 lg:pb-24 lg:aspect-[3.05/1]">
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
                      FAIRWAY opened in 1987 as a fitting bench behind somebody
                      else's pro shop. The bench is still here. Everything else
                      was built around it.
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

            {/* The panel lifts over the band, the join the shop pages use. */}
            <div className="relative -mt-7 rounded-t-[1.75rem] bg-white px-6 py-10 md:-mt-9 md:rounded-t-[2.25rem] md:px-10 md:py-14">
              <div className="max-w-[36rem]">
                <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                  What we sell on
                </h2>
                <p className="mt-4 text-[1.0625rem] leading-[1.6] text-charcoal/70">
                  Not discounts, not the newest thing because it is newest. A
                  shop this size survives on being right more often than the
                  internet is, which is a lower bar than it sounds and a harder
                  one to keep.
                </p>
              </div>

              <ol className="mt-12 grid gap-y-10 md:grid-cols-3 md:gap-x-10">
                {principles.map((principle) => (
                  <li
                    key={principle.index}
                    className="border-t border-mist pt-5"
                  >
                    <span className="text-[0.75rem] tabular-nums tracking-[0.12em] text-olive">
                      {principle.index}
                    </span>
                    <h3 className="mt-4 text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
                      {principle.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="px-3 pb-3 md:px-5 md:pb-5">
            <div className="grid overflow-hidden rounded-card md:grid-cols-2">
              <div className="relative min-h-[22rem] md:min-h-[38rem]">
                <div className="absolute inset-0">
                  <Media
                    src="/images/shop-info/about-backroom.jpg"
                    alt="Two members of staff working among racked bags in the back room, in black and white"
                    ratio="fill"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-12 bg-white p-6 md:p-14">
                <span className="inline-flex w-fit items-center rounded-full border border-charcoal/40 px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em]">
                  The back room
                </span>

                <div>
                  <h2 className="text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                    Most of the work happens behind the rack
                  </h2>
                  <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/80">
                    Shafts pulled and replaced, lofts and lies checked against
                    the card, grips cut at the size on your hands rather than
                    the size in the box. A set that arrives from a maker is not
                    finished until somebody here has put a wrench on it.
                  </p>

                  <ul className="mt-8 border-t border-mist">
                    {[
                      "Regrips while you wait, most days",
                      "Loft and lie checked against your card",
                      "Shaft pulls, tip trims and reweighting",
                      "Fitting notes kept for every customer",
                    ].map((line) => (
                      <li
                        key={line}
                        className="border-b border-mist py-3.5 text-[1rem]"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/fitting"
                    className="mt-8 inline-flex rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                  >
                    The fitting studio
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
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
                  <li
                    key={entry.year}
                    className="border-t border-offwhite/20 pt-5"
                  >
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
        </Reveal>

        <Reveal>
          <section className="px-3 pb-3 md:px-5 md:pb-5">
            <div className="relative overflow-hidden rounded-card bg-paper">
              <div className="absolute inset-0">
                <Media
                  src="/images/shop-info/about-dusk.jpg"
                  alt="A calm sea at dusk seen from the links, an island on the horizon"
                  ratio="fill"
                  sizes="100vw"
                />
              </div>

              {/* A pale frame, so the copy is charcoal on the photograph
                  rather than white under a scrim. */}
              <div className="relative flex min-h-[22rem] items-end p-6 md:min-h-[24rem] md:p-12">
                <div className="max-w-[30rem]">
                  <p className="text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em] text-charcoal">
                    Play the long game.
                  </p>
                  <p className="mt-4 text-[1rem] leading-[1.6] text-charcoal/75">
                    Fitted once beats bought twice, and a set that suits you is
                    still the right set in ten years. That is the whole argument
                    and we have not needed another one since 1987.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/fitting#book"
                      className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
                    >
                      Book a fitting
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-control border border-charcoal/40 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:border-charcoal/80"
                    >
                      Find the shop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
