import { AtSign, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    icon: Mail,
    title: "Sign in with email or Google",
    body: "No seed phrases, no wallet extensions, no 'export your private key' anxiety. We use Clerk for auth — the same thing Linear and Notion use.",
  },
  {
    icon: AtSign,
    title: "Pick your handle",
    body: "Like a Venmo username. Pay @khadee instead of 0x47304e42… — friends can find you without copy-pasting a hex string.",
  },
  {
    icon: Send,
    title: "Send & receive",
    body: "Tap recipient, type amount, confirm. We provision a Circle smart-account wallet for you in the background. You never see gas.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 border-t border-white/5 px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">How it works</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.5rem]">
            Crypto, hidden.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Three steps. You&apos;ll get the rest from muscle memory of every
            other payments app you&apos;ve ever used.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <step.icon
                      className="h-4 w-4 text-white"
                      strokeWidth={2.25}
                    />
                  </span>
                  <span className="eyebrow">Step {i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
