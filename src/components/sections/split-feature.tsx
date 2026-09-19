import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Media } from "@/components/ui/media";

/**
 * Half photograph, half statement. Used for the services the shop sells on —
 * the things a customer books rather than adds to a bag.
 */
export function SplitFeature({
  image,
  alt,
  overlay,
  label,
  heading,
  body,
  href,
  cta,
  imageSide = "left",
}: {
  image: string;
  alt: string;
  overlay?: string;
  label: string;
  heading: string;
  body: string;
  href: string;
  cta: string;
  imageSide?: "left" | "right";
}) {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="grid overflow-hidden rounded-card bg-paper md:grid-cols-2">
        <div
          className={`relative min-h-[18rem] md:min-h-[34rem] ${
            imageSide === "right" ? "md:order-2" : ""
          }`}
        >
          <Media
            src={image}
            alt={alt}
            ratio="fill"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="absolute inset-0"
          />
          {overlay ? (
            <p className="absolute inset-x-0 top-1/2 mx-auto max-w-[24rem] -translate-y-1/2 px-6 text-center text-[1rem] leading-[1.5] text-white drop-shadow-[0_1px_12px_rgba(23,24,23,0.85)]">
              {overlay}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col justify-between gap-10 p-6 md:p-12">
          <span className="inline-flex w-fit items-center rounded-full border border-charcoal/40 px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em]">
            {label}
          </span>

          <div>
            <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              {heading}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.6] text-charcoal/85">
              {body}
            </p>
            <Link
              href={href}
              className="group mt-7 inline-flex items-center gap-3 text-[0.9375rem] uppercase tracking-[0.04em]"
            >
              <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
              <span className="underline underline-offset-4">{cta}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
