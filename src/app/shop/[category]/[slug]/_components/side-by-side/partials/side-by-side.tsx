import { ProductCard } from "@/components/product-card";
import { relatedProducts, type Product } from "@/content/products";

export function SideBySide({ product }: { product: Product }) {
  const others = relatedProducts(product, 3);
  if (others.length < 2) return null;

  return (
    <section className="border-t border-mist px-6 py-12 md:px-10 md:py-16">
      <p className="text-[0.75rem] uppercase tracking-[0.16em] text-olive">
        On the bench beside it
      </p>
      <h2 className="mt-3 max-w-[34rem] text-[clamp(1.5rem,2.4vw,2.125rem)] font-normal leading-[1.1] tracking-[-0.02em]">
        Hit these before you choose. Most players guess wrong between them.
      </h2>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {others.map((other) => (
          <ProductCard key={other.slug} product={other} />
        ))}
      </div>
    </section>
  );
}
