import Image from "next/image";
import Link from "next/link";

export function Footer({ appUrl }: { appUrl: string }) {
  return (
    <footer className="relative z-[60] border-t border-white/10 bg-[#031a2e]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src="/glidepay-wordmark.png"
              alt="glidepay"
              width={1205}
              height={397}
              className="h-7 w-auto"
            />
            <span className="rounded-full border border-white/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
              Testnet
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            A Cash App for stablecoins. Send and receive USDC, EURC, and cirBTC
            on Arc — Circle&apos;s payments chain.
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
            { label: "Privacy", href: `${appUrl}/privacy`, external: true },
            { label: "Terms", href: `${appUrl}/terms`, external: true },
            { label: "Support", href: `${appUrl}/support`, external: true },
            { label: "support@glidepay.cash", href: "mailto:support@glidepay.cash" },
          ]}
        />
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/45 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} glidepay. Testnet, no real money at risk.</span>
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
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
