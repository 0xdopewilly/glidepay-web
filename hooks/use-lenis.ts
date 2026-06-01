"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

/** Module-level handle so non-hook callers (route transitions, click-to-top
 * links) can drive the same instance via `getLenis()?.scrollTo(...)`. */
let lenisInstance: Lenis | null = null;
export const getLenis = () => lenisInstance;

/** Smooth wheel/trackpad scroll for desktop. No-ops on touch devices (iOS
 * Safari's native momentum is already perfect) and when the user has asked
 * for reduced motion. The `prevent` function auto-detects inner scrollable
 * containers (modals, dropdowns, panels) so they keep their native scroll
 * even though the page itself is being lerped. Mark explicit opt-outs with
 * `data-lenis-prevent` on any ancestor. */
export function useLenis() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || reduceMotion) return;

    const lenis = new Lenis({
      lerp: 0.08, // sweet-spot: smoother than 0.1, less laggy than 0.06
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      prevent: (node) => {
        let el: HTMLElement | null = node as HTMLElement;
        while (el && el !== document.body && el !== document.documentElement) {
          if (el.dataset && el.dataset.lenisPrevent !== undefined) return true;
          const oy = window.getComputedStyle(el).overflowY;
          if (
            (oy === "auto" || oy === "scroll") &&
            el.scrollHeight > el.clientHeight + 1
          ) {
            return true;
          }
          el = el.parentElement;
        }
        return false;
      },
    });
    lenisInstance = lenis;

    const raf = (t: number) => {
      lenis.raf(t);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
