import { Hero } from "@/components/hero/hero";
import { PromoBanner } from "@/components/sections/promo-banner";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Categories } from "@/components/sections/categories";
import { BrandsBand } from "@/components/sections/brands-band";
import { SplitFeature } from "@/components/sections/split-feature";
import { Newsletter } from "@/components/sections/newsletter";
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
            alt="TaylorMade irons standing in a bag on the course"
            label="Irons, side by side"
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
            image="/images/fitting/club-fitting.jpg"
            alt="Two golfers examining clubs on a rack in the shop"
            overlay="If you have never been fit, you are guessing. Most players are."
            label="Fitting studio"
            heading="Fitted, not guessed"
            body="A fitting is not about writing down your specs. It is about finding which shots you are missing and which clubs give them back. We work through distance, dispersion and descent angle, then gap the whole bag so no two clubs do the same job. The ball gets the same treatment, because it is the only thing you use on every shot."
            sessions={[
              { name: "Club fitting", duration: "90 min", price: "£75" },
              { name: "Ball fitting", duration: "45 min", price: "£40" },
              { name: "Putter fitting", duration: "45 min", price: "£45" },
            ]}
            note="The session fee comes off anything you buy on the day."
            href="/fitting"
            cta="Book a fitting"
            action="button"
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

        <Reveal>
          <Newsletter />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
