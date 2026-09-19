import { Hero } from "@/components/hero/hero";
import { PromoBanner } from "@/components/sections/promo-banner";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Categories } from "@/components/sections/categories";
import { BrandsBand } from "@/components/sections/brands-band";
import { SplitFeature } from "@/components/sections/split-feature";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main id="main">
        <Hero />

        <Reveal>
          <Categories />
        </Reveal>

        <Reveal>
          <FeaturedProducts />
        </Reveal>

        <Reveal>
          <PromoBanner
            image="/images/editorial/irons-banner.jpg"
            alt="A set of TaylorMade irons standing in a bag on the course"
            label="New in: TaylorMade P790"
            heading="Irons, fitted properly"
            body="P790, i230 and the JPX Tour on the rack. Hit all three before you choose. Most players guess wrong between them."
            href="/shop/clubs/irons"
            cta="Explore irons"
          />
        </Reveal>

        <Reveal>
          <BrandsBand />
        </Reveal>

        <Reveal>
          <SplitFeature
            image="/images/fitting/ball-fitting.jpg"
            alt="A golf ball on the lip of the hole beside the flagstick"
            overlay="A ball that suits your flight is worth more than a new driver. It is also a hundred times cheaper."
            label="Ball fitting"
            heading="Find your best golf ball"
            body="The ball is the only piece of equipment you use on every shot, and the gap between models is wider than most players expect. We test three models across wedge, mid iron and driver, then give you the numbers to keep."
            meta={["£40|Session", "45 min|On the monitor", "3|Models tested"]}
            href="/fitting/ball"
            cta="Explore ball fitting"
          />
        </Reveal>

        <Reveal>
          <SplitFeature
            image="/images/fitting/club-fitting.jpg"
            alt="Two golfers examining clubs on a rack in the shop"
            overlay="If you have never been fit, you are guessing. Most players are."
            label="Club fitting"
            heading="Better fit. Better game."
            body="A fitting is not about writing down your specs. It is about finding which shots you are missing and which clubs give them back. We work through distance, dispersion and descent angle, then gap the whole bag so no two clubs do the same job."
            meta={[
              "£75|Session",
              "90 min|On the monitor",
              "Refunded|Against a purchase",
            ]}
            href="/fitting/clubs"
            cta="Book a fitting"
            action="button"
            imageSide="right"
          />
        </Reveal>

        <Reveal>
          <PromoBanner
            image="/images/editorial/bags-band.jpg"
            alt="Two golfers walking a fairway with bags over their shoulders"
            label="New season bags"
            heading="Carry less. Play more."
            body="Stand bags from Ping, Titleist and Sun Mountain, weighed on the same scale so you can compare what you will actually carry for four hours."
            href="/shop/bags"
            cta="Shop bags"
            align="bottom"
            size="short"
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
