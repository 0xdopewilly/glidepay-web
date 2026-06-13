import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const DETAILS = [
  {
    label: "USDC IS GAS",
    body: "Arc settles in USDC. No second token to acquire, hold, or budget for.",
  },
  {
    label: "60S MEDIAN",
    body: "CCTP V2 sweeps from Base, Ethereum, Polygon, Arbitrum to your @handle on Arc.",
  },
  {
    label: "TESTNET, FREE",
    body: "Sign in, grab a handle, send your first $5. No real funds at risk.",
  },
];

export function ProofBand({ appUrl }: { appUrl: string }) {
  return (
    <section
      data-theme="dark"
      className="flex min-h-[60vh] items-center border-t border-[#1E293B] bg-[#0A0F0F] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          className="text-center font-black tracking-[-0.04em] text-[#F1F5F9]"
          style={{
            fontFamily: "var(--font-jakarta), system-ui, sans-serif",
            fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
            lineHeight: 0.98,
          }}
        >
          <Reveal as="span" className="block">
            $0 in gas.
          </Reveal>
          <Reveal as="span" delay={80} className="block">
            60-second receives.
          </Reveal>
          <Reveal as="span" delay={160} className="block">
            Live <span className="text-[#94A3B8]">now.</span>
          </Reveal>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {DETAILS.map((d, i) => (
            <Reveal key={d.label} delay={(i + 3) * 80}>
              <div>
                <span className="eyebrow">{d.label}</span>
                <p className="mt-3 text-[#F1F5F9]/70">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={6 * 80}>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Open glidepay
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="/docs" className="btn-ghost">
              Read the docs
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
