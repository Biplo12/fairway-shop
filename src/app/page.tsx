import { Hero } from "@/components/hero/hero";
import { PromoBanner } from "@/components/sections/promo-banner";
import { Categories } from "@/components/sections/categories";

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
    </main>
  );
}
