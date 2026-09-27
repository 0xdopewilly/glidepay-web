import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DotGrid } from "@/components/dot-grid";
import { Reveal } from "@/components/reveal";

type Step = {
  title: string;
  body: string;
  points?: string[];
  after?: string;
};

const STEPS: Step[] = [
  {
    title: "Sign in with email or Google",
    body: "A Circle smart account on Arc is created for you at first sign-in. No seed phrase, no browser extension, no keys to write down.",
  },
  {
    title: "Claim your @paytag",
    body: "Your @paytag is how people pay you, instead of a long 0x address. In a hurry? Skip it and claim it later from Profile.",
  },
  {
    title: "Add money and pay anyone",
    body: "Two ways to add money:",
    points: [
      "Receive USDC or EURC on Arc from another wallet or an exchange that supports Arc. Your address and QR code are in Receive.",
      "Get paid by another glidepay user.",
    ],
    after: "Then pay anyone by @paytag, contact, 0x address or QR.",
  },
];

export function HowItWorks({ appUrl }: { appUrl: string }) {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden border-t border-[#E7EDF5] px-5 py-28 sm:px-8 sm:py-36"
    >
      <DotGrid tint="light" position="left" className="top-24" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">HOW IT WORKS</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#062448]">
            Three steps. <span className="text-[#5D6B85]">No seed phrase.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#062448]/75 sm:text-lg">
            glidepay works like the payment apps you already use. The crypto
            parts happen underneath.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-3xl border border-[#E7EDF5] bg-white p-7">
                <span
                  aria-hidden
                  className="font-black leading-none tracking-[-0.05em] text-[#5B3DF5] tabular-nums"
                  style={{
                    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
                    fontSize: "3.25rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.01em] text-[#062448]">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5D6B85]">
                  {step.body}
                </p>
                {step.points ? (
                  <ul className="mt-3 space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-[#5D6B85]"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#062448]/40"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {step.after ? (
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-[#062448]">
                    {step.after}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Open glidepay
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="/docs/getting-started"
              className="btn-ghost w-full sm:w-auto"
            >
              Read the full guide
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
