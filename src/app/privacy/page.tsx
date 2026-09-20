import type { Metadata } from "next";
import Link from "next/link";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "What we keep",
  description:
    "What FAIRWAY does with a name, a telephone number and an email address, written the way it would be said at the counter.",
};

/**
 * A privacy page for a shop that takes bookings on the phone and sells clubs
 * across a counter. It says what happens to the three things the site asks
 * for and stops, because a page that runs to two thousand words is a page
 * written to be skipped.
 */
const points = [
  {
    title: "A booking request",
    body: "Name, telephone number, email address, the session you want and roughly when. Somebody from the studio rings to put it in the diary, and that is the only reason the number is there. Nothing is charged online.",
  },
  {
    title: "The letter",
    body: "One email address, twelve times a year, and a link at the foot of every one that takes you off the list. We do not sell it, lend it or hand it to a maker whose clubs we stock.",
  },
  {
    title: "Your bag",
    body: "What you put in the bag stays in your own browser and never reaches us. Clear your browser data and it is gone, which is also why it does not follow you to another computer.",
  },
  {
    title: "Fitting notes",
    body: "Numbers from a session are written down and kept, so a player fitted five years ago is measured against their own numbers rather than from scratch. Ask and we will read them back to you, or delete them.",
  },
];

export default function Privacy() {
  return (
    <>
      <FloatingNav />
      <main id="main" className="p-3 md:p-5">
        <div className="overflow-hidden rounded-card bg-white">
          <PageNav current="shop" />

          <div className="px-6 py-12 md:px-12 md:py-16">
            <div className="max-w-[40rem]">
              <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
                Privacy
              </p>
              <h1 className="mt-3 text-[clamp(1.875rem,3vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                What we keep, and what we do not
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/70">
                This site asks for three things: an email address for the
                letter, and a name and a telephone number when you ask for a
                session. Here is what happens to each of them. If something is
                not on this page, we are not doing it.
              </p>
            </div>

            <dl className="mt-12 grid gap-y-10 md:grid-cols-2 md:gap-x-12">
              {points.map((point) => (
                <div key={point.title} className="border-t border-mist pt-5">
                  <dt className="text-[1.25rem] leading-[1.2] tracking-[-0.015em]">
                    {point.title}
                  </dt>
                  <dd className="mt-3 text-[0.9375rem] leading-[1.65] text-charcoal/70">
                    {point.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 max-w-[40rem] border-t border-mist pt-8">
              <p className="text-[1rem] leading-[1.6] text-charcoal/70">
                Ask us to show you what we hold, correct it or delete it, and we
                will. Ring the shop on{" "}
                <a
                  href="tel:+441334555187"
                  className="underline underline-offset-4 hover:text-charcoal"
                >
                  01334 555 187
                </a>{" "}
                and ask for whoever is behind the counter.
              </p>
              <p className="mt-6 text-[0.8125rem] leading-[1.6] text-charcoal/50">
                FAIRWAY is a fictional shop, built as a design project. Nothing
                typed into this site is sent anywhere or stored on a server.
              </p>
              <Link
                href="/fitting#book"
                className="mt-8 inline-flex rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
              >
                Back to booking
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
