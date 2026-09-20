"use client";

import { useState } from "react";
import { cn } from "@/utils";
import { contactSubjects } from "../../../constants";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-control border border-charcoal/20 bg-white px-4 py-3.5 text-[1rem] text-charcoal placeholder:text-charcoal/35 focus:border-charcoal";
  const label = "block text-[0.6875rem] uppercase tracking-[0.16em] text-olive";

  if (sent) {
    return (
      <div role="status" className="border-t border-mist pt-8">
        <p className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.02em]">
          That is with us.
        </p>
        <p className="mt-4 max-w-[30rem] text-[1rem] leading-[1.6] text-charcoal/70">
          Somebody behind the counter answers these between customers, so it is
          usually the same day and never longer than two. If it is urgent, the
          telephone is quicker and we would rather you rang.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 text-[0.875rem] uppercase tracking-[0.06em] text-charcoal/60 underline underline-offset-4 hover:text-charcoal"
        >
          Write another
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
      className="grid gap-5 border-t border-mist pt-8 sm:grid-cols-2"
    >
      <div>
        <label htmlFor="contact-name" className={label}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={cn(field, "mt-2.5")}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={label}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={cn(field, "mt-2.5")}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-subject" className={label}>
          What is it about
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          className={cn(field, "mt-2.5 appearance-none")}
        >
          {contactSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className={label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="What you play now, what you are after, and anything a fitter would want to know."
          className={cn(field, "mt-2.5 resize-y")}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-control bg-charcoal px-6 py-3.5 text-[0.875rem] uppercase tracking-[0.06em] text-offwhite transition-colors hover:bg-charcoal/90 sm:w-auto"
        >
          Send it
        </button>
      </div>
    </form>
  );
}
