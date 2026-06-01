"use client";

import { useLenis } from "@/hooks/use-lenis";

/** Mounts the Lenis instance for the entire app. Delegates all the touch /
 * reduced-motion / `prevent` logic to the hook so non-component callers
 * (e.g. anchor scroll-to-top) can grab the same instance via `getLenis()`. */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
