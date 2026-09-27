import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

type Row = {
  item: string;
  cost: string;
  note: string;
  badge?: string;
};

const ROWS: Row[] = [
  {
    item: "glidepay fee",
    cost: "None today",
    note: "glidepay doesn’t currently charge a fee of its own on sends, requests, swaps, bridges or Savings.",
  },
  {
    item: "Payments on Arc",
    cost: "Arc network fee, paid in USDC",
    note: "No separate gas token to buy or top up.",
  },
  {
    item: "Swaps",
    cost: "Market rate",
    note: "USDC, EURC and cirBTC through Circle App Kit, with slippage capped at 3%.",
  },
  {
    item: "Bridging out",
    cost: "Network and bridge fees may apply",
    note: "USDC from Arc to Base, Ethereum, Polygon or Arbitrum over CCTP V2.",
  },
  {
    item: "Universal Receive",
    badge: "Rolling out",
    cost: "glidepay covers source-chain gas",
    note: "Minimum sweep: $10 from Ethereum, $1 from the other chains.",
  },
];

export function Fees() {
  return (
    <section
      id="fees"
      className="relative scroll-mt-20 border-t border-[#E7EDF5] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-14">
        <div>
          <Reveal>
            <span className="eyebrow">FEES</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#062448]">
              Fees, <span className="text-[#5D6B85]">plainly.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#062448]/75 sm:text-lg">
              No glidepay fee today. Here&apos;s what moving money on Arc, and
              off it, can cost.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/docs/fees"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B3DF5]"
            >
              Fees and limits in detail
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 [transition-timing-function:var(--ease-smooth)] group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="divide-y divide-[#E7EDF5] overflow-hidden rounded-3xl border border-[#E7EDF5] bg-white">
            {ROWS.map((row) => (
              <div
                key={row.item}
                className="grid gap-1.5 px-6 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6 sm:py-6"
              >
                <dt className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#062448]">
                  {row.item}
                  {row.badge ? (
                    <span className="rounded-full bg-[rgba(91,61,245,0.10)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5B3DF5]">
                      {row.badge}
                    </span>
                  ) : null}
                </dt>
                <dd>
                  <p className="text-sm font-semibold text-[#062448]">
                    {row.cost}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#5D6B85]">
                    {row.note}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
