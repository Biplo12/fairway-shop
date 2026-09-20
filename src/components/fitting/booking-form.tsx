"use client";

import { useState } from "react";

import { times } from "@/content/fitting";

/**
 * The only interactive part of the page, kept apart so the band around it
 * stays a server component. There is no diary behind it yet, so the submit
 * stays local rather than pretending to post somewhere, the same way the
 * newsletter field does.
 *
 * The session arrives in the query rather than in client state, so a card
 * higher up the page can choose it and the choice survives a reload. A select
 * only reads its default value once, so it is keyed on the slug and remounts
 * when the query changes.
 */
export function BookingForm({
  options,
  selected,
}: {
  options: { slug: string; name: string; duration: string; price: string }[];
  selected?: string;
}) {
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-control border border-offwhite/35 bg-white/10 px-4 py-3.5 text-[1rem] text-offwhite placeholder:text-offwhite/45 focus:border-offwhite/80 focus:outline-none";
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
        <select
          id="booking-session"
          name="session"
          key={selected ?? "none"}
          defaultValue={selected}
          required
          className={`${field} mt-2.5 appearance-none`}
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
      </div>

      <div>
        <label htmlFor="booking-name" className={label}>
          Name
        </label>
        <input
          id="booking-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={`${field} mt-2.5`}
        />
      </div>

      <div>
        <label htmlFor="booking-phone" className={label}>
          Telephone
        </label>
        <input
          id="booking-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={`${field} mt-2.5`}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="booking-email" className={label}>
          Email
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${field} mt-2.5`}
        />
      </div>

      <div>
        <label htmlFor="booking-date" className={label}>
          Preferred date
        </label>
        <input
          id="booking-date"
          name="date"
          type="date"
          required
          className={`${field} mt-2.5 [color-scheme:dark]`}
        />
      </div>

      <div>
        <label htmlFor="booking-time" className={label}>
          Time of day
        </label>
        <select
          id="booking-time"
          name="time"
          required
          className={`${field} mt-2.5 appearance-none`}
        >
          {times.map((time) => (
            <option key={time} value={time} className="bg-charcoal">
              {time}
            </option>
          ))}
        </select>
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
          className={`${field} mt-2.5 resize-y`}
        />
      </div>

      <div className="sm:col-span-2 sm:flex sm:items-center sm:gap-6">
        <button
          type="submit"
          className="w-full rounded-control bg-offwhite px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal transition-colors hover:bg-white sm:w-auto"
        >
          Request a session
        </button>
        <p className="mt-4 text-[0.8125rem] leading-[1.6] text-offwhite/55 sm:mt-0">
          We call to confirm the slot. Nothing is charged online.
        </p>
      </div>
    </form>
  );
}
