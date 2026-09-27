import { Gauge, MapPin, Network, Send, Zap } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { DotGrid } from "@/components/dot-grid";

type Item = {
  icon: typeof Zap;
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    icon: MapPin,
    title: "One address per chain",
    body: "Receive shows a separate deposit address for each chain once it's enabled. Senders use that address, not your @paytag.",
  },
  {
    icon: Send,
    title: "Sent like a normal transfer",
    body: "The sender uses any wallet that holds USDC on their chain. No bridge screens, nothing new to learn.",
  },
  {
    icon: Network,
    title: "CCTP V2, never wrapped",
    body: "USDC moves to Arc over Circle's CCTP V2 and arrives as native USDC in your balance. Never a wrapped copy.",
  },
  {
    icon: Gauge,
    title: "Source-chain gas covered",
    body: "glidepay covers the gas on the source chain, so you never need ETH or another gas token. Minimum sweep: $10 from Ethereum, $1 from the others.",
  },
];

/** Rollout order for Universal Receive. No dates: chains switch on one at a
 * time, and the app shows a chain's address only once it's live. */
export const ROLLOUT: { name: string; src: string; status: string }[] = [
  { name: "Base", src: "/chains/base.png", status: "First" },
  { name: "Arbitrum", src: "/chains/arbitrum.png", status: "First" },
  { name: "Polygon", src: "/chains/polygon.png", status: "First" },
  { name: "Ethereum", src: "/chains/ethereum.png", status: "Later" },
];

export function UniversalReceive() {
  return (
    <section
      id="universal-receive"
      className="relative overflow-hidden border-t border-[#E7EDF5] px-5 sm:px-8 py-28 sm:py-36 scroll-mt-20"
    >
      <DotGrid tint="light" position="left" className="top-24" />
      <DotGrid tint="light" position="right" className="top-1/2" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-[#062448]" />
            <span className="eyebrow">UNIVERSAL RECEIVE</span>
            <span className="rounded-full bg-[rgba(91,61,245,0.10)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5B3DF5]">
              Rolling out
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-bold text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-[#062448] max-w-3xl mt-5">
            Get paid from other chains.{" "}
            <span className="text-[#5D6B85]">Rolling out next.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#062448]/75">
            Universal Receive gives you a deposit address on other chains. USDC
            sent there bridges to your Arc balance automatically over CCTP V2.
            It isn&apos;t live on any chain yet. Chains switch on one at a
            time, starting with Base, Arbitrum and Polygon, with Ethereum
            later.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <ul
            aria-label="Rollout order"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {ROLLOUT.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-2.5 rounded-full border border-[#E7EDF5] bg-white py-1.5 pl-1.5 pr-3.5"
              >
                <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={c.src}
                    alt=""
                    width={28}
                    height={28}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="text-sm font-semibold text-[#062448]">
                  {c.name}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6B85]">
                  {c.status}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="rounded-3xl border border-[#E7EDF5] bg-white p-6 h-full">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E7EDF5] bg-[#F7F9FC]">
                    <Icon
                      className="h-4 w-4 text-[#062448]"
                      strokeWidth={2.25}
                    />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-[#062448]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5D6B85]">
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
