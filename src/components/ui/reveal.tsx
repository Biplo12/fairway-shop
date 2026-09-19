"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals a section as it comes into view, once. One IntersectionObserver per
 * section, disconnected after it fires, so scrolling costs nothing.
 *
 * The motion itself lives in CSS and is cancelled by prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** milliseconds, for staggering siblings */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`enter ${shown ? "enter-shown" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
