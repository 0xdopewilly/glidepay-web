import { Reveal } from "@/components/reveal";

const STACK: { name: string; role: string; line: string }[] = [
  {
    name: "Arc",
    role: "The chain",
    line: "Circle’s Layer-1 blockchain for stablecoin payments. USDC is the gas, with sub-second finality.",
  },
  {
    name: "Circle Wallets",
    role: "Your account",
    line: "Developer-controlled smart accounts. Circle holds the keys and signs server-side.",
  },
  {
    name: "USDC",
    role: "Dollars",
    line: "Circle’s dollar stablecoin. What you hold, send, and pay network fees in.",
  },
  {
    name: "EURC",
    role: "Euros",
    line: "Circle’s euro stablecoin, valued at the market rate in your balance.",
  },
  {
    name: "CCTP V2",
    role: "Cross-chain",
    line: "Circle’s Cross-Chain Transfer Protocol. Moves native USDC between Arc and other chains.",
  },
  {
    name: "App Kit",
    role: "Swap and bridge",
    line: "Circle’s toolkit behind Swap and Bridge in the app.",
  },
];

export function BuiltOnCircle() {
  return (
    <section
      id="built-on-circle"
      data-theme="dark"
      className="scroll-mt-20 border-t border-[rgba(255,255,255,0.08)] bg-[#062448] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">BUILT ON CIRCLE</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#FFFFFF]">
            Circle&apos;s rails,
            <span className="block text-[rgba(255,255,255,0.65)]">
              from wallet to settlement.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FFFFFF]/70 sm:text-lg">
            glidepay is the app you tap. Underneath, Circle provides the
            wallets, the stablecoins, the chain they settle on, and the
            protocols that move them.
          </p>
        </Reveal>

        <dl className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((s, i) => (
            <Reveal
              key={s.name}
              delay={(i % 3) * 80}
              className="h-full border-t border-[rgba(255,255,255,0.14)] pt-5"
            >
              <dt>
                <span className="eyebrow block">{s.role}</span>
                <span
                  className="mt-3 block text-2xl font-bold tracking-[-0.02em] text-[#FFFFFF] sm:text-[1.75rem]"
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                  }}
                >
                  {s.name}
                </span>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#FFFFFF]/70">
                {s.line}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
