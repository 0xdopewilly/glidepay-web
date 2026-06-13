import { AtSign, Gauge, Network, Send, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DotGrid } from "@/components/dot-grid";

type Item = {
  icon: typeof Zap;
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    icon: Send,
    title: "Sent like a normal transfer",
    body: "The sender uses any USDC-supporting wallet on their chain. No bespoke bridge UI. No address translation.",
  },
  {
    icon: Network,
    title: "CCTP V2, never wrapped",
    body: "Arc is a first-class Circle CCTP V2 destination. USDC bridges natively. Never wrapped, never de-pegged.",
  },
  {
    icon: Gauge,
    title: "60-second median sweep",
    body: "Our service wallet covers any source-chain gas so the funds drain instantly. Median end-to-end ~60 seconds.",
  },
  {
    icon: AtSign,
    title: "Universal @handle",
    body: "@yourname is the same address on every chain. No copy-pasting hex strings, no asking which network you're on.",
  },
];

export function UniversalReceive() {
  return (
    <section
      id="universal-receive"
      className="relative overflow-hidden border-t border-[rgba(34,197,94,0.18)] px-5 sm:px-8 py-28 sm:py-36 scroll-mt-20"
    >
      <DotGrid tint="light" position="left" className="top-24" />
      <DotGrid tint="light" position="right" className="top-1/2" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-[#4ADE80]" />
            <span className="eyebrow">UNIVERSAL RECEIVE</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-bold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.03em] text-[#0A0A0A] max-w-3xl mt-5">
            One handle. <span className="text-[#475569]">Any chain.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#0A0A0A]/75">
            USDC sent to your glidepay @handle from Ethereum, Base, Polygon, or
            Arbitrum automatically lands in your wallet on Arc, usually inside
            60 seconds. The sender doesn&apos;t need to know what Arc is. The
            receiver doesn&apos;t need to know a bridge happened.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="rounded-3xl border border-[rgba(34,197,94,0.18)] bg-white p-6 h-full">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[rgba(34,197,94,0.18)] bg-[#DCFCE7]">
                    <Icon
                      className="h-4 w-4 text-[#4ADE80]"
                      strokeWidth={2.25}
                    />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-[#0A0A0A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0A0A0A]/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
