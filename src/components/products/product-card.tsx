import Link from "next/link";

import { Media } from "@/components/ui/media";
import { formatPrice, type Product } from "@/content/products";

/** One product, one card. Brand first, because that is how golfers shop. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.category}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-card bg-white"
    >
      <Media
        src={product.image}
        alt={product.alt}
        ratio="1/1"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
          {product.brand}
        </p>
        <h3 className="mt-2 text-[1.125rem] leading-tight">{product.model}</h3>
        <p className="mt-2 text-[0.875rem] leading-[1.5] text-charcoal/70">
          {product.statement}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-mist pt-4">
          <div>
            <p className="text-[1.125rem] leading-none">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1.5 text-[0.75rem] text-charcoal/55">
              {product.detail}
            </p>
          </div>
          <p
            className={`text-[0.75rem] uppercase tracking-[0.08em] ${
              product.inStock ? "text-forest" : "text-charcoal/45"
            }`}
          >
            {product.inStock ? "In stock" : "Back in Friday"}
          </p>
        </div>
      </div>
    </Link>
  );
}
