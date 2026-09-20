"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { times } from "@/content/fitting";
import { cn } from "@/utils";

/**
 * Four of the six controls on this form are the same label over the same
 * input, so they are a list rather than four copies of the same markup.
 */
const bookingFields = [
  { id: "booking-name", name: "name", label: "Name", autoComplete: "name" },
  {
    id: "booking-phone",
    name: "phone",
    label: "Telephone",
    type: "tel",
    autoComplete: "tel",
  },
  {
    id: "booking-email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    wide: true,
  },
  {
    id: "booking-date",
    name: "date",
    label: "Preferred date",
    type: "date",
    className: "[color-scheme:dark]",
  },
] satisfies {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  wide?: boolean;
  className?: string;
}[];

export function BookingForm({
  options,
  selected,
}: {
  options: { slug: string; name: string; duration: string; price: string }[];
  selected?: string;
}) {
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-control border border-offwhite/35 bg-white/10 px-4 py-3.5 text-[1rem] text-offwhite placeholder:text-offwhite/55 focus:border-offwhite/80";
  const label =
    "block text-[0.6875rem] uppercase tracking-[0.16em] text-offwhite/55";

  if (sent) {
    return (
      <div role="status" className="flex h-full flex-col justify-center py-10">
        <p className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.02em]">
          Asked for. Not yet booked.
        </p>
        <p className="mt-4 max-w-[30rem] text-[1rem] leading-[1.6] text-offwhite/75">
          Somebody from the studio will call to confirm the slot, usually the
          same day. Nothing is charged until you are standing in the bay.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 w-fit text-[0.875rem] uppercase tracking-[0.06em] text-offwhite/70 underline underline-offset-4 hover:text-offwhite"
        >
          Request another session
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <label htmlFor="booking-session" className={label}>
          Session
        </label>
        <div className="relative mt-2.5">
          <select
            id="booking-session"
            name="session"
            key={selected ?? "none"}
            defaultValue={selected}
            className={cn(field, "appearance-none pr-12")}
          >
            {options.map((option) => (
              <option
                key={option.slug}
                value={option.slug}
                className="bg-charcoal"
              >
                {option.name}, {option.duration}, {option.price}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-offwhite/60"
            strokeWidth={1.75}
          />
        </div>
      </div>

      {bookingFields.map((spec) => (
        <div key={spec.id} className={spec.wide ? "sm:col-span-2" : undefined}>
          <label htmlFor={spec.id} className={label}>
            {spec.label}
          </label>
          <input
            id={spec.id}
            name={spec.name}
            type={spec.type ?? "text"}
            required
            autoComplete={spec.autoComplete}
            className={cn(field, "mt-2.5", spec.className)}
          />
        </div>
      ))}

      <div>
        <label htmlFor="booking-time" className={label}>
          Time of day
        </label>
        <div className="relative mt-2.5">
          <select
            id="booking-time"
            name="time"
            className={cn(field, "appearance-none pr-12")}
          >
            {times.map((time) => (
              <option key={time} value={time} className="bg-charcoal">
                {time}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-offwhite/60"
            strokeWidth={1.75}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="booking-notes" className={label}>
          What are you missing?
        </label>
        <textarea
          id="booking-notes"
          name="notes"
          rows={3}
          placeholder="Handicap, the shot that has gone, what is in the bag now."
          className={cn(field, "mt-2.5 resize-y")}
        />
      </div>

      <div className="sm:col-span-2 sm:flex sm:items-center sm:gap-6">
        <button
          type="submit"
          className="w-full shrink-0 whitespace-nowrap rounded-control bg-offwhite px-8 py-4 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:bg-white sm:w-auto"
        >
          Request a session
        </button>
        <p className="mt-4 text-[0.8125rem] leading-[1.6] text-offwhite/55 sm:mt-0">
          We call to confirm the slot. Nothing is charged online, and your
          number is used for that call and nothing else.{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            What we keep
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
