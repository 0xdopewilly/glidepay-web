"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Tiny reveal-on-scroll wrapper using IntersectionObserver. No framer-motion
 * dependency at this layer — keeps the marketing bundle light. Triggers once,
 * fade-up at ~85% viewport. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0,0,0)" : "translate3d(0,28px,0)",
        transition: `opacity 700ms cubic-bezier(0.32, 0.72, 0, 1) ${delay}ms, transform 700ms cubic-bezier(0.32, 0.72, 0, 1) ${delay}ms`,
        willChange: shown ? undefined : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
