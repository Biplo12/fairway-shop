import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";

type Tone = "light" | "dark";

const tones: Record<Tone, { panel: string; chip: string; body: string }> = {
  light: {
    panel: "bg-white text-charcoal",
    chip: "border-charcoal/40",
    body: "text-charcoal/85",
  },
  dark: {
    panel: "bg-forest text-offwhite",
    chip: "border-offwhite/45",
    body: "text-offwhite/80",
  },
};

/**
 * Half photograph, half statement. Used for the services the shop sells on,
 * the things a customer books rather than adds to a bag. Pass `sessions` and
 * the panel carries a price list, which is what "sold like a product" means
 * for something you cannot put in a bag.
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
  meta,
  sessions,
  note,
  action = "link",
  imageSide = "left",
  tone = "light",
}: {
  image: string;
  alt: string;
  overlay?: string;
  label: string;
  heading: string;
  body: string;
  href: string;
  cta: string;
  /** price, duration, anything a customer would ask at the counter */
  meta?: string[];
  /** the bookable sessions, priced, for a service sold like a product */
  sessions?: { name: string; duration: string; price: string }[];
  /** the line a fitter would add after quoting a price */
  note?: string;
  action?: "link" | "button";
  imageSide?: "left" | "right";
  tone?: Tone;
}) {
  const t = tones[tone];

  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="grid overflow-hidden rounded-card md:grid-cols-2">
        <div
          className={`relative min-h-[24rem] md:min-h-[44rem] ${
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
            <p className="absolute inset-x-0 top-[22%] mx-auto max-w-[26rem] px-6 text-center text-[1.0625rem] leading-[1.5] text-white drop-shadow-[0_1px_14px_rgba(23,24,23,0.9)]">
              {overlay}
            </p>
          ) : null}
        </div>

        <div
          className={`flex flex-col justify-between gap-12 p-6 md:p-14 ${t.panel}`}
        >
          <span
            className={`inline-flex w-fit items-center rounded-full border px-4 py-2.5 text-[0.8125rem] uppercase leading-none tracking-[0.02em] ${t.chip}`}
          >
            {label}
          </span>

          <div>
            <h2 className="text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.025em]">
              {heading}
            </h2>
            <p className={`mt-5 text-[1.0625rem] leading-[1.6] ${t.body}`}>
              {body}
            </p>

            {meta ? (
              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                {meta.map((entry) => {
                  const [value, label] = entry.split("|");
                  return (
                    <div key={entry}>
                      <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-[1.375rem] leading-none">
                        {value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            ) : null}

            {sessions ? (
              <ul className="mt-8 border-t border-current/15">
                {sessions.map((session) => (
                  <li
                    key={session.name}
                    className="flex items-baseline justify-between gap-6 border-b border-current/15 py-3.5"
                  >
                    <span className="text-[1.0625rem]">{session.name}</span>
                    <span className="flex items-baseline gap-6">
                      <span className="text-[0.8125rem] uppercase tracking-[0.08em] text-olive">
                        {session.duration}
                      </span>
                      <span className="w-14 text-right text-[1.0625rem]">
                        {session.price}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            {note ? (
              <p className={`mt-4 text-[0.875rem] leading-[1.6] ${t.body}`}>
                {note}
              </p>
            ) : null}

            {action === "button" ? (
              <Button href={href} className="mt-8">
                {cta}
              </Button>
            ) : (
              <Link
                href={href}
                className="group mt-8 inline-flex items-center gap-3 text-[0.9375rem] uppercase tracking-[0.04em]"
              >
                <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                <span className="underline underline-offset-4">{cta}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
