import type { ReactNode } from "react";

/** The narrow centred column every section sits in, CLAUDE.md §46. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-(--container-editorial) px-5 md:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
