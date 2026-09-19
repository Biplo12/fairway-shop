import { Hero } from "@/components/hero/hero";
import { BannerIrons } from "@/components/sections/banner-irons";
import { Categories } from "@/components/sections/categories";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <BannerIrons />
      <Categories />
    </main>
  );
}
