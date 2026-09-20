import type { Metadata } from "next";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Booking } from "@/components/fitting/booking";
import { FittingHero } from "@/components/fitting/fitting-hero";
import { HowItRuns } from "@/components/fitting/how-it-runs";
import { Questions } from "@/components/fitting/questions";
import { Sessions } from "@/components/fitting/sessions";
import { PromoBanner } from "@/components/sections/promo-banner";
import { SplitFeature } from "@/components/sections/split-feature";
import { Reveal } from "@/components/ui/reveal";
import { fullBag, sessions, studioMeta } from "@/content/fitting";

export const metadata: Metadata = {
  title: "Fitting studio",
  description:
    "Club, ball, putter and wedge fittings in the studio at the back of the shop. Ninety minutes on a launch monitor, the fee off anything you buy on the day.",
};

const facts = [
  { value: "1987", label: "Fitting since" },
  { value: "11 brands", label: "On the rack" },
  { value: "£75", label: "Club fitting, 90 min" },
];

export default async function Fitting({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const { session } = await searchParams;
  // only a slug the studio actually sells reaches the form, so a stray query
  // cannot pick an option that does not exist
  const selected = [...sessions, fullBag].some((entry) => entry.slug === session)
    ? session
    : undefined;

  return (
    <>
      <FloatingNav />
      <main id="main">
        <section className="p-3 md:p-5">
          <div className="overflow-hidden rounded-card bg-white">
            <PageNav current="fitting" />
            <FittingHero facts={facts} />
            <Sessions />
          </div>
        </section>

        <Reveal>
          <HowItRuns />
        </Reveal>

        <Reveal>
          <PromoBanner
            image="/images/fitting/rack-bw.jpg"
            alt="Driver and fairway wood heads standing in a rack"
            label="Straight answers"
            heading="We will talk you out of the wrong club"
            body="It happens most weeks. Somebody books a driver fitting and leaves with a three wood and their own driver reshafted, because that is what the numbers said. The fee is the same either way."
            href="/fitting?session=club-fitting#book"
            cta="Book a club fitting"
            size="short"
          />
        </Reveal>

        <Reveal>
          <SplitFeature
            image="/images/fitting/launch-monitor.jpg"
            alt="A launch monitor standing on the mat in the fitting bay"
            label="The studio"
            heading="One bay, and forty years of notes"
            body="The bay sits at the back of the shop, past the rack, with a launch monitor on the floor and a lie board under the mat. Every session is written down, so a player who was fitted five years ago is measured against their own numbers rather than from scratch. Shafts come off the wall behind you, which is why a fitting here takes ninety minutes and not a morning."
            meta={studioMeta}
            note="No session is sold on the strength of a swing you made once. If the numbers are flat, we book you back in."
            href="#sessions"
            cta="What a session covers"
            action="button"
            imageSide="right"
            tone="dark"
          />
        </Reveal>

        <Reveal>
          <Booking selected={selected} />
        </Reveal>

        <Reveal>
          <Questions />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
