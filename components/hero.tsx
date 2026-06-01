import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Hero({ appUrl }: { appUrl: string }) {
  return (
    <section className="sticky top-0 z-0 h-screen overflow-hidden pt-32 sm:pt-40 flex flex-col justify-center">
      {/* Subtle backdrop layers */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-brand-glow" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#041f3d]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/85">
              Now live on Arc Testnet
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-center font-bold leading-[1.05] tracking-[-0.04em] text-white">
            <span className="block text-[2.75rem] sm:text-[4.5rem] md:text-[5.5rem]">
              Money like a text.
            </span>
            <span className="block bg-gradient-to-r from-white via-white to-[#8aa5c2] bg-clip-text text-[2.75rem] text-transparent sm:text-[4.5rem] md:text-[5.5rem]">
              On Arc.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
            A Cash App for stablecoins. Send and receive{" "}
            <span className="font-semibold text-white">USDC</span>,{" "}
            <span className="font-semibold text-white">EURC</span>, and{" "}
            <span className="font-semibold text-white">cirBTC</span> on Arc,
            Circle&apos;s payments chain. No seed phrases, no gas tokens, no
            jargon. Just a username and a tap.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Open glidepay
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link href="#universal-receive" className="btn-ghost w-full sm:w-auto">
              See how it works
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-10 text-center text-xs font-medium text-white/45">
            Free · Email or Google sign-in · No wallet extension needed
          </p>
        </Reveal>

        <Reveal delay={400}>
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto mt-20 flex max-w-md flex-col items-center">
      <div
        className="relative w-full overflow-hidden rounded-[2.75rem] border border-white/10 p-1.5 shadow-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)",
        }}
      >
        <div className="overflow-hidden rounded-[2.25rem] bg-[#062349] p-6">
          {/* Mocked home screen */}
          <div className="flex items-center justify-between">
            <span className="eyebrow">Balance</span>
            <div className="h-7 w-7 rounded-full bg-white/10" />
          </div>
          <p className="mt-3 text-[2.75rem] font-bold leading-none tracking-[-0.04em] text-white tabular-nums">
            $370.87
          </p>

          <div className="mt-7 grid grid-cols-4 gap-2">
            {["Receive", "Send", "Swap", "Bridge"].map((l) => (
              <div
                key={l}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] py-3"
              >
                <div className="h-7 w-7 rounded-full bg-white/10" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/75">
                  {l}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <p className="eyebrow mb-3">Recent</p>
            <div className="space-y-2">
              <ActivityRow
                title="Received via Base"
                badge="VIA BASE"
                amount="+$20.00"
              />
              <ActivityRow title="Sent to @khadee" amount="−$5.00" sent />
              <ActivityRow title="Received from Coinbase" amount="+$50.00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({
  title,
  badge,
  amount,
  sent,
}: {
  title: string;
  badge?: string;
  amount: string;
  sent?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <div className="h-8 w-8 shrink-0 rounded-full bg-white/10" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-sm font-semibold text-white">{title}</p>
          {badge ? (
            <span className="shrink-0 rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
              {badge}
            </span>
          ) : null}
        </div>
      </div>
      <p
        className={`shrink-0 text-sm font-bold tabular-nums ${
          sent ? "text-white" : "text-emerald-400"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}
