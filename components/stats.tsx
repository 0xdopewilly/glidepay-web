import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "1", label: "@paytag to share" },
  { value: "3", label: "Tokens counted in balance" },
  { value: "5", label: "Chains, Arc plus four" },
  { value: "0", label: "Gas tokens to buy" },
];

export function Stats() {
  return (
    <section className="border-t border-[#E7EDF5] px-5 sm:px-8 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="eyebrow">BY THE NUMBERS</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-bold text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-[#062448] max-w-3xl mt-5">
            Fewer things
            <span className="block text-[#5D6B85]">to think about.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#062448]/75">
            One @paytag instead of a hex address. USDC, EURC and cirBTC,
            valued at live market prices. Arc, plus four chains you can bridge
            USDC to. And no gas token to buy: network fees on Arc are paid in
            USDC.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="border-t border-[#E7EDF5] pt-5">
                <p
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  }}
                  className="font-black leading-none tracking-[-0.05em] text-[#062448] tabular-nums"
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6B85]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
