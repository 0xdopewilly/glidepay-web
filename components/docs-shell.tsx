"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SMOOTH_EASE } from "@/lib/easing";

const DOCS_NAV: { section: string; links: { href: string; label: string }[] }[] = [
  {
    section: "Get started",
    links: [
      { href: "/docs", label: "Overview" },
      { href: "/docs/getting-started", label: "Getting started" },
    ],
  },
  {
    section: "Core features",
    links: [
      { href: "/docs/universal-receive", label: "Universal Receive" },
      { href: "/docs/send-receive", label: "Send & receive" },
      { href: "/docs/swap-bridge", label: "Swap & bridge" },
      { href: "/docs/billy", label: "Billy (AI assistant)" },
    ],
  },
  {
    section: "Under the hood",
    links: [
      { href: "/docs/architecture", label: "Architecture" },
      { href: "/docs/security", label: "Security model" },
      { href: "/docs/faq", label: "FAQ" },
    ],
  },
];

export function DocsShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
      <div className="grid gap-10 md:grid-cols-[260px_1fr]">
        <aside className="md:sticky md:top-28 md:self-start">
          <p className="eyebrow mb-4">Documentation</p>
          <nav className="space-y-6">
            {DOCS_NAV.map((section) => (
              <div key={section.section}>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[rgba(6,36,72,0.55)]">
                  {section.section}
                </p>
                <ul className="space-y-1">
                  {section.links.map((l) => {
                    const active = pathname === l.href;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={`relative block rounded-lg px-3 py-1.5 text-sm transition-colors ${active ? "text-[#062448] font-semibold" : "text-[rgba(6,36,72,0.55)] hover:text-[#062448]"}`}
                        >
                          {/* Sliding active pill (Arcium-style). Shared
                              layout id makes it animate between links as the
                              user navigates between docs pages. */}
                          {active ? (
                            <motion.span
                              layoutId="docs-active-pill"
                              className="absolute inset-0 rounded-lg bg-[rgba(6,36,72,0.06)] [box-shadow:0_0_0_1px_rgba(6,36,72,0.18)]"
                              transition={{ duration: 0.32, ease: SMOOTH_EASE }}
                            />
                          ) : null}
                          <span className="relative z-10 flex items-center justify-between">
                            <span>{l.label}</span>
                            {active ? (
                              <ChevronRight className="h-3.5 w-3.5 text-[#062448]" />
                            ) : null}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Cross-fade between docs pages. Opacity + a barely-perceptible
            scale (0.992 → 1 → 0.996) — no slide, no shift, no layout work. */}
        <article className="min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, scale: 0.992 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.996 }}
              transition={{ duration: 0.42, ease: SMOOTH_EASE }}
            >
              <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.03em] text-[#062448] sm:text-[2.75rem]">
                {title}
              </h1>
              <div className="prose-doc mt-8 space-y-5 text-[15px] leading-[1.7] text-[#062448]/75">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </div>
  );
}
