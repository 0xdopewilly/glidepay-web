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
    <section className="relative overflow-hidden border-t border-[#041f3d]/10 bg-white px-5 py-28 sm:px-8 sm:py-36">
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
                  className="group flex items-center justify-between gap-6 rounded-3xl border border-[#041f3d]/10 bg-[#f5f7fb] p-7 transition-colors hover:bg-[#eef1f7]"
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#041f3d]/55">
                      {card.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#041f3d]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#041f3d]/75">
                      {card.body}
                    </p>
                  </div>
                  <Icon className="h-5 w-5 shrink-0 text-[#041f3d]" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
