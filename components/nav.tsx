"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Universal Receive", href: "#universal-receive" },
  { label: "Why Arc", href: "#why-arc" },
  { label: "Docs", href: "/docs" },
];

export function Nav({ appUrl }: { appUrl: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-white/10 bg-[#041f3d]/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="tap-press flex items-center gap-2">
          <Image
            src="/glidepay-wordmark.png"
            alt="glidepay"
            width={1205}
            height={397}
            priority
            className="h-7 w-auto"
          />
          <span className="rounded-full border border-white/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
            Testnet
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Open app
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
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

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#041f3d] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/90"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Open app
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
