import { Reveal } from "@/components/reveal";

export function RealMoneyStatement() {
  return (
    <section
      data-theme="dark"
      className="flex min-h-[80vh] items-center bg-[#0A0F0F] px-5 py-28 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0}>
          <div className="flex justify-center">
            <span className="eyebrow">BUILT FOR ARC</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="mt-8 text-center font-black leading-[0.92] tracking-[-0.04em] text-[#F1F5F9]"
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontSize: "clamp(3rem, 8vw, 8rem)",
            }}
          >
            <span className="block">Real money.</span>
            <span className="block">Real chains.</span>
            <span className="block">
              Running <span className="text-[#94A3B8]">now.</span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[#F1F5F9]/70 sm:text-lg">
            Stablecoins on Arc, sent like a text. Sub-second finality. USDC as
            gas. 60-second cross-chain receive. The sender doesn&apos;t need to
            know what Arc is.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
