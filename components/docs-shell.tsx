"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

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
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/45">
                  {section.section}
                </p>
                <ul className="space-y-1">
                  {section.links.map((l) => {
                    const active = pathname === l.href;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="relative block rounded-lg px-3 py-1.5 text-sm transition-colors"
                          style={{
                            color: active
                              ? "#ffffff"
                              : "rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          {/* Sliding active pill (Arcium-style). Shared
                              layout id makes it animate between links as the
                              user navigates between docs pages. */}
                          {active ? (
                            <motion.span
                              layoutId="docs-active-pill"
                              className="absolute inset-0 rounded-lg bg-white/10"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                                mass: 0.7,
                              }}
                            />
                          ) : null}
                          <span className="relative z-10 flex items-center justify-between">
                            <span className={active ? "font-semibold" : ""}>
                              {l.label}
                            </span>
                            {active ? (
                              <ChevronRight className="h-3.5 w-3.5 text-white" />
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

        {/* Content fades + slides in each time you navigate between docs
            pages. Keyed by pathname so the same DocsShell re-runs the
            animation on route change. */}
        <article className="min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.32,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[2.75rem]">
                {title}
              </h1>
              <div className="prose-doc mt-8 space-y-5 text-[15px] leading-[1.7] text-white/75">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </div>
  );
}
