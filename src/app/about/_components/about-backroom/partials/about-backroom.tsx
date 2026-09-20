import Link from "next/link";

import { Media } from "@/components/ui/media";

import { backroomServices } from "../../../constants";

export function AboutBackroom() {
  return (
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
              Shafts pulled and replaced, lofts and lies checked against the
              card, grips cut at the size on your hands rather than the size in
              the box. A set that arrives from a maker is not finished until
              somebody here has put a wrench on it.
            </p>

            <ul className="mt-8 border-t border-mist">
              {backroomServices.map((line) => (
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
  );
}
