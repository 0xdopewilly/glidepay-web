"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SMOOTH_EASE } from "@/lib/easing";

const LINKS = [
  { label: "Universal Receive", href: "/#universal-receive" },
  { label: "Billy", href: "/#billy" },
  { label: "FAQ", href: "/#faq" },
  { label: "Docs", href: "/docs" },
];

type Theme = "light" | "dark";

export function Nav({ appUrl }: { appUrl: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number | null = null;

    const compute = () => {
      rafId = null;
      setScrolled(window.scrollY > 12);

      // Find any [data-theme] element overlapping the nav band (0..80px from top).
      const nodes = document.querySelectorAll<HTMLElement>("[data-theme]");
      let nextTheme: Theme = "light";
      for (const node of nodes) {
        if (node === headerRef.current) continue;
        const rect = node.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 0) {
          const t = node.getAttribute("data-theme");
          if (t === "dark" || t === "light") {
            nextTheme = t;
          }
        }
      }
      setTheme(nextTheme);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const isDark = theme === "dark";

  const headerClass = [
    "fixed inset-x-0 top-0 z-[100] transition-colors duration-200",
    scrolled
      ? isDark
        ? "border-b border-white/10 bg-[#060B1C]"
        : "border-b border-[rgba(31,41,55,0.08)] bg-[#FFFFFF]"
      : isDark
        ? "border-b border-transparent bg-transparent"
        : "border-b border-transparent bg-[#FFFFFF]",
    isDark ? "text-[#FFFFFF]" : "text-[#1F2937]",
  ].join(" ");

  const linkClass = isDark
    ? "group/link relative inline-flex items-center text-sm font-semibold text-[#FFFFFF] transition-colors hover:text-[rgba(255,255,255,0.7)] data-[active=true]:font-bold"
    : "group/link relative inline-flex items-center text-sm font-semibold text-[#1F2937] transition-colors hover:text-[#8B5CF6] data-[active=true]:font-bold";

  const pillClass = isDark
    ? "rounded-full border border-[#FFFFFF]/25 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFFFF]"
    : "rounded-full border border-[#1F2937]/25 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#1F2937]";

  const sheetClass = isDark
    ? "border-t border-white/10 bg-[#060B1C] text-[#FFFFFF] md:hidden"
    : "border-t border-[rgba(31,41,55,0.08)] bg-[#FFFFFF] text-[#1F2937] md:hidden";

  const sheetLinkClass = isDark
    ? "rounded-xl px-3 py-3 text-base font-medium text-[#FFFFFF]/90"
    : "rounded-xl px-3 py-3 text-base font-medium text-[#1F2937]/85";

  const ctaClass = [
    "group/cta glow-green inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 [transition-timing-function:var(--ease-smooth)] hover:scale-[1.02]",
    isDark
      ? "bg-[#A78BFA] text-[#060B1C] hover:bg-[#C4B5FD]"
      : "bg-[#8B5CF6] text-[#FFFFFF] hover:bg-[#7C3AED]",
  ].join(" ");

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header ref={headerRef} className={headerClass} data-theme={theme}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="tap-press flex items-center gap-2.5">
          <span
            aria-label="glidepay"
            role="img"
            className="block h-7"
            style={{
              width: 88,
              backgroundColor: isDark ? "#FFFFFF" : "#1F2937",
              WebkitMaskImage: "url(/glidepay-wordmark.png)",
              maskImage: "url(/glidepay-wordmark.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "left center",
              maskPosition: "left center",
            }}
          />
          <span className={pillClass}>Testnet</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = isLinkActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={active}
                className={linkClass}
              >
                <span>{l.label}</span>
                <span
                  aria-hidden
                  data-active={active}
                  className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100 data-[active=true]:scale-x-100 data-[active=true]:h-0.5"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className={ctaClass}
          >
            Open app
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 [transition-timing-function:var(--ease-smooth)] group-hover/cta:-translate-y-px group-hover/cta:translate-x-px"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="tap-press md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: SMOOTH_EASE }}
            className={sheetClass}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={sheetLinkClass}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-2 ${ctaClass}`}
                onClick={() => setMenuOpen(false)}
              >
                Open app
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 [transition-timing-function:var(--ease-smooth)] group-hover/cta:-translate-y-px group-hover/cta:translate-x-px"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
