import Link from "next/link";

import { Media } from "@/components/ui/media";
import { feeNote } from "@/content/fitting";

import type { SessionViewProps } from "../../../types";

export function SessionHero({ session, page }: SessionViewProps) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col justify-between gap-12 p-6 md:p-12 lg:p-14">
        <div>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-charcoal/65">
              <li>
                <Link href="/" className="hover:text-charcoal">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/fitting" className="hover:text-charcoal">
                  Fitting
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-charcoal">{session.name}</li>
            </ol>
          </nav>

          <h1 className="mt-10 text-[clamp(2.25rem,4vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.03em]">
            {session.name}
          </h1>
          <p className="mt-5 max-w-[30rem] text-[1.125rem] leading-[1.5] text-charcoal/80">
            {page.lead}
          </p>
          <p className="mt-5 max-w-[30rem] text-[1.0625rem] leading-[1.6] text-charcoal/70">
            {session.question}
          </p>
        </div>

        <div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-mist pt-7 sm:grid-cols-3">
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                In the bay
              </dt>
              <dd className="mt-1.5 text-[1.25rem] leading-none">
                {session.duration}
              </dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                Session fee
              </dt>
              <dd className="mt-1.5 text-[1.25rem] leading-none tabular-nums">
                {session.price}
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-olive">
                Fitter
              </dt>
              <dd className="mt-1.5 text-[1.25rem] leading-none">One, yours</dd>
            </div>
          </dl>

          <p className="mt-6 max-w-[30rem] text-[0.875rem] leading-[1.6] text-charcoal/65">
            {feeNote}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#book"
              className="rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90"
            >
              Book this session
            </Link>
            <Link
              href={page.shelf.href}
              className="rounded-control border border-charcoal/30 px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] transition-colors hover:border-charcoal/70"
            >
              {page.shelf.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-[20rem] md:min-h-[34rem]">
        <div className="absolute inset-0">
          <Media
            src={page.image}
            alt={page.alt}
            ratio="fill"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
