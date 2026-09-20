import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { rackPicks } from "@/content/products";
import Link from "next/link";

export function FeaturedProducts() {
  const picks = rackPicks(8);

  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="rounded-card bg-paper p-6 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
              On the rack this week
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,2.8vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              Eight we would put in your hands
            </h2>
          </div>
          <Button href="/shop">Shop all equipment</Button>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {picks.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/shop/clubs"
            className="group inline-flex items-center gap-3 text-[0.875rem] uppercase tracking-[0.04em]"
          >
            <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
            <span className="underline underline-offset-4">
              See the full club range
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
