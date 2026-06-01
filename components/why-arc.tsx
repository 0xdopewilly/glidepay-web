import { CircleDollarSign, Gauge, Network } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PILLARS = [
  {
    icon: CircleDollarSign,
    title: "USDC is the gas",
    body: "Most chains need two tokens to do anything: the one you hold, and the one you pay gas with. Arc uses USDC for both. The dollar you have is the dollar you spend.",
  },
  {
    icon: Gauge,
    title: "Sub-second finality",
    body: "Sending feels like swiping a debit card, not like waiting for a blockchain. No 'wait 30 seconds for confirmations' awkwardness — your friend sees the money before the conversation ends.",
  },
  {
    icon: Network,
    title: "Native CCTP",
    body: "Arc is a first-class citizen on Circle's Cross-Chain Transfer Protocol. That's the rail behind Universal Receive — no bespoke bridges, no wrapped tokens, no risk of de-pegging.",
  },
];

export function WhyArc() {
  return (
    <section
      id="why-arc"
      className="relative scroll-mt-20 border-t border-white/5 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">Why Arc</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.5rem]">
            Built on a chain made for payments.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Arc is Circle&apos;s payments blockchain. It exists because nothing
            else on the market is honest about what stablecoins are actually
            for: moving money fast, cheap, and without friction.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                  <pillar.icon
                    className="h-5 w-5 text-white"
                    strokeWidth={2.25}
                  />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
