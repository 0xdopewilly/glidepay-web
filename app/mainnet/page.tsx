import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  PiggyBank,
  Route,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { BuiltOnCircle } from "@/components/built-on-circle";
import { DotGrid } from "@/components/dot-grid";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/how-it-works";
import { Reveal } from "@/components/reveal";
import { Security } from "@/components/security";
import { ROLLOUT } from "@/components/universal-receive";
import { WordmarkBand } from "@/components/wordmark-band";
import { MAINNET_FAQ } from "@/lib/faq";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

const TITLE = "glidepay is live on Arc mainnet";
const DESCRIPTION =
  "The launch note. glidepay went live on Arc mainnet on 24 September 2026: what works today, what's rolling out next, how your money is protected, and how to get started.";

export const metadata: Metadata = {
  // The home page already uses TITLE as its default, so the tab title here
  // says what this page is; social cards keep the headline.
  title: { absolute: `Launch note: ${TITLE}` },
  description: DESCRIPTION,
  alternates: { canonical: "/mainnet" },
  openGraph: {
    type: "article",
    siteName: "glidepay",
    title: TITLE,
    description: DESCRIPTION,
    url: "/mainnet",
    publishedTime: "2026-09-24T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const GLANCE: { label: string; value: string }[] = [
  { label: "Live since", value: "24 Sep 2026" },
  { label: "Network", value: "Arc mainnet" },
  { label: "Tokens", value: "USDC, EURC, cirBTC" },
  { label: "glidepay fee", value: "None today" },
];

const TIMELINE: {
  when: string;
  dateTime?: string;
  title: string;
  body: string;
  done: boolean;
}[] = [
  {
    when: "16 SEP 2026",
    dateTime: "2026-09-16",
    title: "Arc mainnet launches",
    body: "Circle\u2019s Layer-1 blockchain for stablecoin payments goes live.",
    done: true,
  },
  {
    when: "24 SEP 2026",
    dateTime: "2026-09-24",
    title: "glidepay goes live on Arc mainnet",
    body: "Pay, get paid, save, automate, swap and bridge, with real money.",
    done: true,
  },
  {
    when: "NEXT",
    title: "Universal Receive rolls out",
    body: "Base, Arbitrum and Polygon first. Ethereum later.",
    done: false,
  },
];

type Group = {
  icon: typeof Send;
  name: string;
  line: string;
  items: { title: string; body: string }[];
};

const GROUPS: Group[] = [
  {
    icon: Send,
    name: "Pay",
    line: "Money out, amount first.",
    items: [
      {
        title: "Send to anyone",
        body: "An amount-first keypad. Pay an @paytag, a contact or any 0x address, in USDC, EURC or any token you hold.",
      },
      {
        title: "Scan to pay",
        body: "Scan a QR code instead of typing who you’re paying.",
      },
      {
        title: "A PIN on money out",
        body: "A 6-digit PIN confirms every payment before it leaves your balance.",
      },
      {
        title: "Payment threads",
        body: "Every payment and request with one person as a conversation, with Send and Request buttons in the thread.",
      },
    ],
  },
  {
    icon: ArrowDownLeft,
    name: "Get paid",
    line: "Money in, without the hex.",
    items: [
      {
        title: "Receive",
        body: "Your Arc address and QR code, easy to share.",
      },
      {
        title: "Request links and QR",
        body: "Ask for USDC or EURC with a link and QR code. The payer opens the pay link to pay you.",
      },
      {
        title: "Request from a person",
        body: "Send a request straight to someone’s @paytag or email address.",
      },
      {
        title: "Split a bill",
        body: "Ask Billy to “split $60 with @a @b”. Equal shares, in USDC or EURC.",
      },
      {
        title: "Alerts",
        body: "Push alerts when USDC or EURC arrives on the installed app, plus an in-app notification feed.",
      },
    ],
  },
  {
    icon: PiggyBank,
    name: "Grow & automate",
    line: "Set a rule once. It runs on its own.",
    items: [
      {
        title: "Auto-save",
        body: "Put a percentage of every payment you receive into Savings.",
      },
      {
        title: "Scheduled sends",
        body: "Daily, weekly or monthly payments for rent, allowances and subscriptions.",
      },
      {
        title: "Balance ceiling",
        body: "Keep your balance at or under an amount, and sweep the excess into Savings.",
      },
      {
        title: "Approval rules",
        body: "Automated payments above an amount you set, or to someone not in your contacts, wait for your approval.",
      },
      {
        title: "Savings",
        body: "A separate Savings account on Arc, with its own Circle wallet. Withdraw back anytime.",
      },
    ],
  },
  {
    icon: Route,
    name: "Move across chains",
    line: "Swap tokens. Bridge USDC out.",
    items: [
      {
        title: "Swap",
        body: "USDC ↔ EURC ↔ cirBTC through Circle App Kit, at market rate with slippage capped at 3%.",
      },
      {
        title: "Bridge",
        body: "Move USDC from Arc to Base, Ethereum, Polygon or Arbitrum over Circle CCTP V2, including to someone else’s address.",
      },
    ],
  },
  {
    icon: Sparkles,
    name: "Billy",
    line: "Ask in plain words.",
    items: [
      {
        title: "Money moves in the chat",
        body: "Billy sends, requests, splits, swaps and bridges without leaving the conversation.",
      },
      {
        title: "A confirm card, every time",
        body: "Every money move shows a confirm card before anything happens.",
      },
      {
        title: "Slash commands",
        body: "For power users who would rather type a command than a sentence.",
      },
    ],
  },
];

const ALSO_LIVE = [
  "Activity with filters",
  "Search across contacts, @paytags, transactions and actions",
  "Light and dark themes",
  "Install to your home screen",
];

const ROLLOUT_FACTS: { title: string; body: string }[] = [
  {
    title: "Not your @paytag",
    body: "Senders on other chains will use the deposit address shown in your Receive screen. Each chain has its own address.",
  },
  {
    title: "Gas covered",
    body: "glidepay covers the gas on the source chain, so you never need ETH or another gas token.",
  },
  {
    title: "Minimum sweep",
    body: "$10 from Ethereum. $1 from Base, Arbitrum and Polygon.",
  },
  {
    title: "Until then",
    body: "Add money with USDC or EURC on Arc: from another wallet, an exchange that supports Arc, or another glidepay user.",
  },
];

export default function MainnetPage() {
  return (
    <>
      {/* Hero: the announcement itself. */}
      <section className="relative overflow-hidden bg-[#F7F9FC] px-5 pb-20 pt-40 sm:px-8 sm:pb-28 sm:pt-48">
        <DotGrid tint="light" position="left" className="top-40" />
        <DotGrid tint="light" position="right" className="top-40" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.25fr_1fr] md:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow">
                LAUNCH NOTE · <time dateTime="2026-09-24">24 SEP 2026</time>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="mt-6 font-bold leading-[1.02] tracking-[-0.04em] text-[#062448]"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)" }}
              >
                <span className="block">glidepay is live</span>
                <span className="block text-[#5D6B85]">on Arc mainnet.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#062448]/75 sm:text-lg">
                Arc mainnet launched on 16 September 2026. On 24 September,
                glidepay went live on it. Your balance is now real USDC, EURC
                and cirBTC: paid by @paytag, confirmed with your PIN, settled on
                Arc. Still no seed phrase, and still no gas token to buy.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  Open glidepay
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <Link href="#live" className="btn-ghost w-full sm:w-auto">
                  See what&apos;s live
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <aside
              aria-label="Launch timeline"
              className="glow-green-soft rounded-[2rem] border border-[rgba(6,36,72,0.18)] bg-[#062448] p-7 sm:p-8"
            >
              <p className="eyebrow" style={{ color: "#A9B7D0" }}>
                TIMELINE
              </p>
              <ol className="mt-7">
                {TIMELINE.map((t, i) => {
                  const last = i === TIMELINE.length - 1;
                  return (
                    <li
                      key={t.title}
                      className={`relative pl-8 ${last ? "" : "pb-8"}`}
                    >
                      {last ? null : (
                        <span
                          aria-hidden
                          className="absolute left-[5px] top-4 bottom-0 w-px bg-[rgba(255,255,255,0.14)]"
                        />
                      )}
                      <span
                        aria-hidden
                        className={
                          t.done
                            ? "absolute left-0 top-1 h-[11px] w-[11px] rounded-full bg-[#16C784]"
                            : "absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-[rgba(255,255,255,0.45)] bg-[#062448]"
                        }
                      />
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#A9B7D0]">
                        {t.dateTime ? (
                          <time dateTime={t.dateTime}>{t.when}</time>
                        ) : (
                          t.when
                        )}
                      </p>
                      <p className="mt-2 text-lg font-bold tracking-[-0.01em] text-[#FFFFFF]">
                        {t.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#FFFFFF]/70">
                        {t.body}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* At a glance. */}
      <section
        data-theme="dark"
        aria-label="At a glance"
        className="border-y border-[rgba(255,255,255,0.08)] bg-[#062448] px-5 py-12 sm:px-8 sm:py-14"
      >
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {GLANCE.map((g, i) => (
            <Reveal
              key={g.label}
              delay={i * 70}
              className="border-t border-[rgba(255,255,255,0.14)] pt-4"
            >
              <dt className="eyebrow">{g.label}</dt>
              <dd className="mt-2 text-lg font-bold tracking-[-0.01em] text-[#FFFFFF] sm:text-xl">
                {g.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* What launched. */}
      <section
        id="live"
        data-theme="dark"
        className="scroll-mt-20 bg-[#062448] px-5 py-28 sm:px-8 sm:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="eyebrow">WHAT LAUNCHED</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#FFFFFF]">
              Everything live today.
              <span className="block text-[rgba(255,255,255,0.65)]">
                With real money.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FFFFFF]/70 sm:text-lg">
              Everything below works on Arc mainnet now, grouped the way
              you&apos;ll use it.
            </p>
          </Reveal>

          <div className="mt-16 divide-y divide-[rgba(255,255,255,0.08)] border-y border-[rgba(255,255,255,0.08)]">
            {GROUPS.map((g) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.name}>
                  <div className="grid gap-8 py-10 sm:py-12 md:grid-cols-[260px_1fr] md:gap-12">
                    <div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#0A2F5C]">
                        <Icon
                          className="h-4 w-4 text-[#FFFFFF]"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                      </span>
                      <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#FFFFFF]">
                        {g.name}
                      </h3>
                      <p className="mt-2 text-sm text-[rgba(255,255,255,0.65)]">
                        {g.line}
                      </p>
                    </div>
                    <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                      {g.items.map((item) => (
                        <li key={item.title}>
                          <p className="font-semibold text-[#FFFFFF]">
                            {item.title}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#FFFFFF]/70">
                            {item.body}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
              <p className="eyebrow shrink-0">ALSO LIVE</p>
              <ul className="flex flex-wrap gap-2">
                {ALSO_LIVE.map((x) => (
                  <li
                    key={x}
                    className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[#0A2F5C] px-3 py-1.5 text-xs font-medium text-[#FFFFFF]/85"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rolling out next: only Universal Receive. */}
      <section
        id="next"
        className="relative scroll-mt-20 overflow-hidden border-t border-[#E7EDF5] px-5 py-28 sm:px-8 sm:py-36"
      >
        <DotGrid tint="light" position="right" className="top-24" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-[#062448]" />
              <span className="eyebrow">ROLLING OUT NEXT</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#062448]">
              Universal Receive.
              <span className="block text-[#5D6B85]">Chain by chain.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#062448]/75 sm:text-lg">
              The one feature that isn&apos;t live yet. Universal Receive gives
              you a deposit address on other chains, and USDC sent there bridges
              to your Arc balance automatically over CCTP V2. It isn&apos;t live
              on any chain today. Chains switch on one at a time, and your
              Receive screen shows a chain&apos;s address only once it&apos;s
              enabled.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <ol
                aria-label="Rollout order"
                className="divide-y divide-[#E7EDF5] overflow-hidden rounded-3xl border border-[#E7EDF5] bg-white"
              >
                {ROLLOUT.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
                        <Image
                          src={c.src}
                          alt=""
                          width={36}
                          height={36}
                          className="h-full w-full object-contain"
                        />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#062448]">
                          {c.name}
                        </p>
                        <p className="text-xs text-[#5D6B85]">
                          {c.name === "Ethereum" ? "$10" : "$1"} minimum sweep
                        </p>
                      </div>
                    </div>
                    <span
                      className={
                        c.status === "First"
                          ? "rounded-full bg-[rgba(91,61,245,0.10)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5B3DF5]"
                          : "rounded-full border border-[rgba(6,36,72,0.18)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5D6B85]"
                      }
                    >
                      {c.status === "First" ? "Rolling out first" : "Later"}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120}>
              <dl className="grid gap-7 sm:grid-cols-2">
                {ROLLOUT_FACTS.map((f) => (
                  <div key={f.title} className="border-t border-[#E7EDF5] pt-4">
                    <dt className="text-sm font-bold text-[#062448]">
                      {f.title}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-[#5D6B85]">
                      {f.body}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/docs/universal-receive"
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B3DF5]"
              >
                How Universal Receive works
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 [transition-timing-function:var(--ease-smooth)] group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Security
        title="How your money is protected."
        titleMuted="Keys never touch the app."
      />
      <BuiltOnCircle />
      <HowItWorks appUrl={APP_URL} />
      <Faq items={MAINNET_FAQ} />

      {/* Closing CTA. */}
      <section
        data-theme="dark"
        className="border-t border-[rgba(255,255,255,0.08)] bg-[#062448] px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2
            className="font-black tracking-[-0.04em] text-[#FFFFFF]"
            style={{
              fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
              lineHeight: 0.98,
            }}
          >
            <Reveal as="span" className="block">
              Real money.
            </Reveal>
            <Reveal as="span" delay={80} className="block">
              Sent like a text.
            </Reveal>
            <Reveal as="span" delay={160} className="block">
              Live <span className="text-[rgba(255,255,255,0.65)]">today.</span>
            </Reveal>
          </h2>
          <Reveal delay={240}>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#FFFFFF]/70 sm:text-lg">
              Sign in with email or Google, claim your @paytag, and make your
              first payment on Arc mainnet.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Open glidepay
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link href="/docs" className="btn-ghost w-full sm:w-auto">
                Read the docs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer appUrl={APP_URL} />
      <WordmarkBand />
    </>
  );
}
