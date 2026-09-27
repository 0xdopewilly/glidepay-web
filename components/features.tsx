import {
  ArrowLeftRight,
  ArrowRight,
  AtSign,
  BellRing,
  CalendarClock,
  CheckCircle2,
  Gauge,
  MessagesSquare,
  PiggyBank,
  QrCode,
  Route,
  Sparkles,
  Split,
  Vault,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { DotGrid } from "@/components/dot-grid";
import { Reveal } from "@/components/reveal";

type Feature = {
  icon: typeof Zap;
  group: string;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: AtSign,
    group: "Pay",
    title: "Pay by @paytag",
    body: "Type the amount, pick an @paytag, a contact or a 0x address, and confirm with your PIN. Or scan a QR code.",
  },
  {
    icon: QrCode,
    group: "Get paid",
    title: "Request links and QR",
    body: "Ask for USDC or EURC with a link and QR code, or send the request straight to an @paytag or an email.",
  },
  {
    icon: Split,
    group: "Get paid",
    title: "Split a bill",
    body: "Tell Billy “split $60 with @a @b”. It works out equal shares, in USDC or EURC.",
  },
  {
    icon: MessagesSquare,
    group: "Pay",
    title: "Payment threads",
    body: "Every payment and request with one person, laid out as a conversation. Send or request from the thread.",
  },
  {
    icon: ArrowLeftRight,
    group: "Move",
    title: "Swap",
    body: "USDC, EURC and cirBTC through Circle App Kit, at market rate. Slippage is capped at 3%.",
  },
  {
    icon: Route,
    group: "Move",
    title: "Bridge",
    body: "Move USDC from Arc to Base, Ethereum, Polygon or Arbitrum over CCTP V2, including to someone else’s address.",
  },
  {
    icon: PiggyBank,
    group: "Save",
    title: "Auto-save",
    body: "Pick a percentage. Every payment you receive puts that share into Savings.",
  },
  {
    icon: CalendarClock,
    group: "Automate",
    title: "Scheduled sends",
    body: "Daily, weekly or monthly payments for rent, allowances and subscriptions.",
  },
  {
    icon: Gauge,
    group: "Automate",
    title: "Balance ceiling and approvals",
    body: "Keep your balance at or under an amount and sweep the rest to Savings. Big or unknown automated payments wait for you.",
  },
  {
    icon: Vault,
    group: "Save",
    title: "Savings",
    body: "A separate Savings account on Arc, with its own Circle wallet. Withdraw back to your balance anytime.",
  },
  {
    icon: Sparkles,
    group: "Assistant",
    title: "Billy",
    body: "Ask in plain words. Billy sends, requests, splits, swaps and bridges in the chat, with a confirm card before any money moves.",
  },
  {
    icon: BellRing,
    group: "Get paid",
    title: "Instant alerts",
    body: "Push alerts when USDC or EURC arrives, an in-app notification feed, filterable activity and search across it all.",
  },
];

/** "Everything you can do" grid: the twelve things that work today on Arc
 * mainnet, plus a pointer to the one feature that's still rolling out. */
export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#E7EDF5] px-5 py-28 sm:px-8 sm:py-36"
    >
      <DotGrid tint="light" position="right" className="top-24" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#062448]" />
            <span className="eyebrow">WHAT&apos;S LIVE</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#062448]">
            Everything you can do.
            <span className="block text-[#5D6B85]">Live on mainnet.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#062448]/75 sm:text-lg">
            Every card below works today, with real USDC, EURC and cirBTC on Arc
            mainnet.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal as="li" key={f.title} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-3xl border border-[#E7EDF5] bg-white p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E7EDF5] bg-[#F7F9FC]">
                      <Icon
                        className="h-4 w-4 text-[#062448]"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6B85]">
                      {f.group}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#062448] sm:mt-5">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5D6B85]">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={80}>
          <Link
            href="#universal-receive"
            className="group mt-5 flex flex-col gap-4 rounded-3xl border border-dashed border-[rgba(6,36,72,0.25)] p-6 transition-colors hover:border-[rgba(6,36,72,0.45)] sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#E7EDF5] bg-white">
                <Zap
                  className="h-4 w-4 text-[#062448]"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-[#062448]">
                    Universal Receive
                  </h3>
                  <span className="rounded-full bg-[rgba(91,61,245,0.10)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5B3DF5]">
                    Rolling out
                  </span>
                </div>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#5D6B85]">
                  USDC sent to you on other chains, bridged to your Arc balance
                  automatically. Not live yet: starting with Base, Arbitrum and
                  Polygon, with Ethereum later.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 pl-13 text-sm font-semibold text-[#5B3DF5] sm:pl-0">
              How it will work
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 [transition-timing-function:var(--ease-smooth)] group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
