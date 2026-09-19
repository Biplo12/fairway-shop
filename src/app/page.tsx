import { Hero } from "@/components/hero/hero";
import { PromoBanner } from "@/components/sections/promo-banner";
import { Categories } from "@/components/sections/categories";
import { SplitFeature } from "@/components/sections/split-feature";

export default function Home() {
  return (
    <main id="main">
      <Hero />

      <PromoBanner
        image="/images/editorial/irons-banner.jpg"
        alt="A set of TaylorMade irons standing in a bag on the course"
        label="New — TaylorMade P790"
        heading="Irons, fitted properly"
        body="P790, i230 and the JPX Tour on the rack. Hit all three before you choose — most players guess wrong between them."
        href="/shop/clubs/irons"
        cta="Explore irons"
      />

      <Categories />

      <PromoBanner
        image="/images/editorial/drivers-banner.jpg"
        alt="A driver and an iron lying on mown turf"
        label="Titleist TSR metals"
        heading="Find your faster"
        body="Nine grams of movable weight and four heads that behave differently. We put all four on the monitor and read the numbers with you."
        href="/shop/clubs/drivers"
        cta="Explore drivers"
        align="bottom"
      />

      <SplitFeature
        image="/images/fitting/ball-fitting.jpg"
        alt="A golf ball on the lip of the hole beside the flagstick"
        overlay="A ball that suits your flight is worth more than a new driver. It is also a hundred times cheaper."
        label="Ball fitting"
        heading="Find your best golf ball"
        body="The ball is the only piece of equipment you use on every shot, and the gap between models is wider than most players expect. Half an hour on the monitor settles it — spin off the wedge, flight off the tee, and how it behaves into wind."
        href="/fitting/ball"
        cta="Explore ball fitting"
      />

      <SplitFeature
        image="/images/fitting/club-fitting.jpg"
        alt="Two golfers examining clubs on a rack in the shop"
        overlay="If you have never been fit, you are guessing. Most players are."
        label="Club fitting"
        heading="Better fit. Better game."
        body="A fitting is not about writing down your specs. It is about finding which shots you are missing and which clubs give them back. We work through distance, dispersion and descent angle, then gap the whole bag so no two clubs do the same job."
        href="/fitting/clubs"
        cta="Explore club fitting"
        imageSide="right"
        tone="dark"
      />
    </main>
  );
}
