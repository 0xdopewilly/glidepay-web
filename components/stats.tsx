import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "5", suffix: "", label: "Chains supported" },
  { value: "60", suffix: "s", label: "Median sweep" },
  { value: "$0", suffix: "", label: "User gas" },
  { value: "1", suffix: "", label: "Handle to receive it all" },
];

/** Arcium-style numerals: outrageous size, monospace eyebrow labels.
 * Lives between Universal Receive and How It Works. */
export function Stats() {
  return (
    <section className="relative z-15 border-t border-white/10 bg-[#031629] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">By the numbers</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.5rem]">
            Built for the Arc team.{" "}
            <span className="text-white/55">Running now.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="border-t border-white/15 pt-5">
                <p
                  className="font-black leading-none tracking-[-0.05em] text-white"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  }}
                >
                  {stat.value}
                  <span className="text-white/65">{stat.suffix}</span>
                  <span className="text-white/30">+</span>
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
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
