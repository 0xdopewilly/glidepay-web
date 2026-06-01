"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms — apply per item, ~80ms increments feel right. */
  delay?: number;
  /** Render-as element. Default `div`. Use `span` inside inline contexts. */
  as?: ElementType;
  className?: string;
};

/** One-shot fade-up tied to viewport entry. The visual transition is in CSS
 * (`.reveal-on-scroll` + `.is-in-view`); this component only flips the class
 * when the element first crosses the threshold. After that, the observer
 * disconnects — no per-scroll work, no flicker on re-entry. */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal-on-scroll ${inView ? "is-in-view" : ""} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
