"use client";

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
                          className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm transition-colors ${
                            active
                              ? "bg-white/10 font-semibold text-white"
                              : "text-white/70 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          {l.label}
                          {active ? (
                            <ChevronRight className="h-3.5 w-3.5 text-white" />
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[2.75rem]">
            {title}
          </h1>
          <div className="prose-doc mt-8 space-y-5 text-[15px] leading-[1.7] text-white/75">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
