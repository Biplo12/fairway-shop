import type { Metadata } from "next";

import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { PageNav } from "@/components/layout/page-nav";
import { Booking } from "./_components/booking";
import { FittingHero } from "./_components/fitting-hero";
import { HowItRuns } from "./_components/how-it-runs";
import { Questions } from "./_components/questions";
import { Sessions } from "./_components/sessions";
import { PromoBanner } from "@/components/promo-banner";
import { SplitFeature } from "@/components/split-feature";
import { Reveal } from "@/components/ui/reveal";
import { fullBag, sessions, studioMeta } from "@/content/fitting";
import { studioFacts } from "./constants";

export const metadata: Metadata = {
  title: "Fitting studio",
  description:
    "Club, ball, putter and wedge fittings in the studio at the back of the shop. Ninety minutes on a launch monitor, the fee off anything you buy on the day.",
};

export default async function Fitting({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const { session } = await searchParams;
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
            <FittingHero facts={studioFacts} />
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
            image="/images/fitting/monitor-on-the-mat.jpg"
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
