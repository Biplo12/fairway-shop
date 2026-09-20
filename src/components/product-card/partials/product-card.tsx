import Link from "next/link";

import { AddToBag } from "@/components/cart/add-to-bag";
import { Media } from "@/components/ui/media";
import { formatPrice, type Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.category}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-card bg-offwhite"
    >
      <Media
        src={product.image}
        alt={product.alt}
        ratio="1/1"
        sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
          {product.brand}
        </p>
        <h3 className="mt-1.5 text-[1rem] leading-tight">{product.model}</h3>
        <p className="mt-1.5 text-[0.8125rem] leading-[1.45] text-charcoal/70">
          {product.statement}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-mist pt-3.5">
          <div>
            <p className="text-[1rem] leading-none">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1.5 text-[0.6875rem] text-charcoal/55">
              {product.detail}
            </p>
          </div>
          {product.fittingRecommended ? (
            <p className="text-[0.6875rem] uppercase tracking-[0.08em] text-forest">
              Fit first
            </p>
          ) : null}
        </div>

        <div className="mt-3.5">
          <AddToBag
            slug={product.slug}
            model={product.model}
            inStock={product.inStock}
          />
        </div>
      </div>
    </Link>
  );
}
