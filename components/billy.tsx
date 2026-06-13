import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Billy() {
  return (
    <section
      id="billy"
      data-theme="dark"
      className="border-t border-[rgba(74,222,128,0.18)] bg-[#050505] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-[#4ADE80]" />
              <span className="eyebrow">Meet Billy</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-bold tracking-[-0.03em] text-[#FFFFFF] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">
              Just ask.
              <br />
              <span className="text-[#A1A1AA]">Billy moves money.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-[#FFFFFF]/70 sm:text-lg">
              Glidepay&apos;s in-app AI assistant. Send, request, swap, bridge,
              and split bills conversationally. No taps through screens, no
              hunting for buttons. Every money move surfaces a confirm card
              before it executes. Slash commands for power users.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {[
                '"Split $60 with @fifi and @khadee"',
                '"Send $5 to @aisha"',
                '"Swap $10 to EURC"',
                '"How does Universal Receive work?"',
              ].map((q) => (
                <li
                  key={q}
                  className="rounded-full border border-[rgba(74,222,128,0.18)] bg-[#0F0F0F] px-3 py-1.5 text-xs font-medium text-[#FFFFFF]/85"
                >
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mx-auto w-full max-w-[340px]">
            <div className="glow-green-soft relative overflow-hidden rounded-[2.75rem] border border-[rgba(74,222,128,0.18)] bg-[#0F0F0F] p-1.5">
              <Image
                src="/screens/billy.png"
                alt="Billy chat showing a conversational money move: a natural-language request, a confirm card, and a payment-sent receipt."
                width={920}
                height={1592}
                sizes="(max-width: 640px) 320px, 340px"
                className="block h-auto w-full rounded-[2.25rem]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
