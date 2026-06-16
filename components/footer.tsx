import Link from "next/link";

export function Footer({ appUrl }: { appUrl: string }) {
  return (
    <footer
      data-theme="dark"
      className="border-t border-[rgba(255,255,255,0.08)] bg-[#062448]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span
              aria-label="glidepay"
              role="img"
              className="block h-7"
              style={{
                width: 88,
                backgroundColor: "#FFFFFF",
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
            <span className="rounded-full border border-[rgba(255,255,255,0.25)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFFFF]/70">
              Testnet
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#FFFFFF]/65">
            A Cash App for stablecoins. Send and receive USDC, EURC, and cirBTC
            on Arc, Circle&apos;s payments chain.
          </p>
        </div>

        <FooterColumn
          title="Product"
          links={[
            { label: "Open app", href: appUrl, external: true },
            { label: "Universal Receive", href: "/#universal-receive" },
            { label: "How it works", href: "/#how-it-works" },
            { label: "Why Arc", href: "/#why-arc" },
          ]}
        />

        <FooterColumn
          title="Docs"
          links={[
            { label: "Getting started", href: "/docs/getting-started" },
            { label: "Universal Receive", href: "/docs/universal-receive" },
            { label: "Billy", href: "/docs/billy" },
            { label: "All docs", href: "/docs" },
          ]}
        />

        <FooterColumn
          title="Legal & contact"
          links={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Support", href: "/support" },
            {
              label: "support@glidepay.cash",
              href: "mailto:support@glidepay.cash",
            },
          ]}
        />
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[rgba(255,255,255,0.65)]">
          <span>© 2026 glidepay. Testnet, no real money at risk.</span>
          <span>Built on Arc.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="group/footer-link relative inline-flex text-sm text-[#FFFFFF]/65 transition-colors hover:text-[#FFFFFF]"
            >
              <span>{l.label}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/footer-link:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
