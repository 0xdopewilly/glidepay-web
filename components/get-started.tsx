import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { DotGrid } from "@/components/dot-grid";
import { Reveal } from "@/components/reveal";

type Card = {
  label: string;
  title: string;
  body: string;
  href: string;
  external: boolean;
  icon: typeof ArrowUpRight;
};

export function GetStarted({ appUrl }: { appUrl: string }) {
  const cards: Card[] = [
    {
      label: "FOR SENDERS",
      title: "Open the app",
      body: "Email or Google sign-in. Grab @yourhandle. Receive USDC from any major chain and glidepay bridges to Arc automatically.",
      href: appUrl,
      external: true,
      icon: ArrowUpRight,
    },
    {
      label: "FOR BUILDERS",
      title: "Read the docs",
      body: "Integration guides, Universal Receive flow, Billy intent schema, agent reconciliation rules, security model.",
      href: "/docs",
      external: false,
      icon: ChevronRight,
    },
    {
      label: "FOR CURIOUS",
      title: "Why Arc",
      body: "Circle's payments chain. Sub-second finality. USDC is the gas. Native CCTP V2. Built for stablecoins, not speculation.",
      href: "/docs/architecture",
      external: false,
      icon: ChevronRight,
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[rgba(4,31,61,0.08)] bg-[#FFFFFF] px-5 py-28 sm:px-8 sm:py-36">
      <DotGrid tint="light" position="left" className="top-32" />
      <DotGrid tint="light" position="right" className="bottom-32" />

      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#041f3d]">
              How to
              <br />
              <span className="text-[#1a4877]">Get Started</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#041f3d]/75">
              Three doors in. Pick the one that fits.
            </p>
          </Reveal>
        </div>

        <div className="space-y-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const linkProps = card.external
              ? { target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Reveal key={card.title} delay={i * 80}>
                <Link
                  href={card.href}
                  {...linkProps}
                  className="group glow-green-soft flex items-center justify-between gap-6 rounded-3xl border border-[rgba(4,31,61,0.18)] bg-[#041f3d] p-7 transition-all duration-300 [transition-timing-function:var(--ease-smooth)] hover:-translate-y-0.5 hover:[box-shadow:0_0_0_1px_rgba(4,31,61,0.25),0_24px_70px_-20px_rgba(4,31,61,0.45),0_0_90px_-20px_rgba(4,31,61,0.3)]"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[rgba(255,255,255,0.65)]">
                      {card.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#FFFFFF]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#FFFFFF]/75">
                      {card.body}
                    </p>
                  </div>
                  <Icon className="h-5 w-5 shrink-0 text-[#FFFFFF]" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
