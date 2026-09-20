import type { ReactNode } from "react";
import { cn } from "@/utils";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-(--container-editorial) px-5 md:px-10", className)}
    >
      {children}
    </div>
  );
}
