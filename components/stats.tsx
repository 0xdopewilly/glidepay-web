import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "5", suffix: "+", label: "Chains supported" },
  { value: "60", suffix: "s", label: "Median receive" },
  { value: "$0", suffix: "", label: "User pays in gas" },
  { value: "1", suffix: "", label: "Handle for all" },
];

export function Stats() {
  return (
    <section className="border-t border-[rgba(34,197,94,0.18)] px-5 sm:px-8 py-28 sm:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="eyebrow">BATTLE TESTED</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-bold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.03em] text-[#0A0A0A] max-w-3xl mt-5">
            Public testnet.{" "}
            <span className="text-[#475569]">Running today.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#0A0A0A]/75">
            Glidepay runs on Arc testnet today. Every send, every Universal Receive sweep, every Billy chat. Already shipping.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="border-t border-[rgba(34,197,94,0.18)] pt-5">
                <p
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  }}
                  className="font-black leading-none tracking-[-0.05em] text-[#0A0A0A] tabular-nums"
                >
                  {stat.value}
                  <span className="text-[#475569]">{stat.suffix}</span>
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#475569]">
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
