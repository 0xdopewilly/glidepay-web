import { ArrowRight, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";

const CHAINS: { label: string; bg: string }[] = [
  { label: "Base", bg: "#0052FF" },
  { label: "Ethereum", bg: "#627EEA" },
  { label: "Polygon", bg: "#8247E5" },
  { label: "Arbitrum", bg: "#28A0F0" },
];

export function UniversalReceive() {
  return (
    <section
      id="universal-receive"
      className="relative scroll-mt-20 border-t border-white/5 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            <span className="eyebrow">The killer feature</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.5rem]">
            One handle.{" "}
            <span className="bg-gradient-to-r from-white to-[#8aa5c2] bg-clip-text text-transparent">
              Any chain.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            USDC sent to your glidepay handle from{" "}
            <strong className="text-white">Ethereum</strong>,{" "}
            <strong className="text-white">Base</strong>,{" "}
            <strong className="text-white">Polygon</strong>, or{" "}
            <strong className="text-white">Arbitrum</strong> automatically lands
            in your wallet on Arc, usually within 60 seconds. The sender
            doesn&apos;t need to know what Arc is. The receiver doesn&apos;t
            need to know a bridge happened. It just works.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
              {/* Source chains */}
              <div>
                <p className="eyebrow mb-4">Sender uses</p>
                <div className="grid grid-cols-2 gap-2">
                  {CHAINS.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3"
                    >
                      <span
                        className="h-7 w-7 shrink-0 rounded-full"
                        style={{ background: c.bg }}
                      />
                      <span className="text-sm font-semibold text-white">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated arrow */}
              <div className="flex flex-col items-center gap-2 py-2">
                <ArrowRight className="h-6 w-6 text-white/40" strokeWidth={2} />
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
                  60s · CCTP V2
                </span>
                <ArrowRight
                  className="h-6 w-6 -scale-x-100 text-transparent"
                  aria-hidden
                  strokeWidth={2}
                />
              </div>

              {/* Destination */}
              <div>
                <p className="eyebrow mb-4">Lands on</p>
                <div className="rounded-2xl border border-white/15 bg-white px-4 py-5 text-[#031a36]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#4a5470]">
                    Your glidepay
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">
                    @yourname
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#4a5470]">
                    on Arc
                  </p>
                </div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                  <p className="text-xs text-white/75">
                    <span className="font-bold text-emerald-400">+$20.00</span>{" "}
                    USDC · <span className="text-white/55">via Base</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats / "the proof" row */}
        <Reveal delay={320}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard label="Chains supported" value="5" />
            <StatCard label="Median sweep" value="~60s" />
            <StatCard label="User funds gas" value="$0" />
            <StatCard label="Wallets needed" value="1" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5">
      <p className="text-3xl font-bold tracking-[-0.02em] text-white">{value}</p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/55">
        {label}
      </p>
    </div>
  );
}
