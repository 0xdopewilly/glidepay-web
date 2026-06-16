"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SMOOTH_EASE } from "@/lib/easing";

const ITEMS: { question: string; answer: string }[] = [
  {
    question: "How is glidepay different from a regular crypto wallet?",
    answer:
      "No seed phrases. No browser extension. No 'export private key' anxiety. Sign in with email or Google like any other app, and glidepay provisions a Circle smart-account wallet for you in the background.",
  },
  {
    question: "What is Arc?",
    answer:
      "Circle's payments blockchain. Sub-second finality. USDC is the gas token. Native support for CCTP V2 cross-chain transfers, which is what makes Universal Receive work.",
  },
  {
    question: "Why testnet only?",
    answer:
      "Glidepay is a beta product. Arc itself is on public testnet. When Arc mainnet launches, glidepay moves with it. Until then, no real funds at risk. Every dollar shown is testnet USDC.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Wallets are non-custodial smart accounts on Arc, signed via Circle's developer-controlled key infrastructure. You authenticate; we never touch your funds. Funds move only when you confirm.",
  },
  {
    question: "What is Universal Receive?",
    answer:
      "A USDC send to your @glidepay handle on Base, Ethereum, Polygon, or Arbitrum is automatically bridged to Arc via CCTP V2. Median ~60 seconds end-to-end. The sender doesn't need to know what Arc is. They just send USDC to your handle.",
  },
  {
    question: "Who is Billy?",
    answer:
      "The in-app AI assistant. Send, swap, bridge, split bills, just by asking. Every money move surfaces a confirm card before executing. Slash commands for power users.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-theme="dark"
      className="bg-[#041f3d] border-t border-[rgba(255,255,255,0.08)] px-5 sm:px-8 py-28 sm:py-36"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2
            className="font-black text-[#FFFFFF] leading-[0.85] tracking-[-0.04em]"
            style={{ fontSize: "clamp(5rem, 12vw, 10rem)" }}
          >
            FAQ
          </h2>
          <div className="mt-10">
            <p className="text-sm text-[rgba(255,255,255,0.65)]">Have more questions?</p>
            <a
              href="mailto:support@glidepay.cash"
              className="btn-primary mt-4 inline-flex"
            >
              Email support
            </a>
          </div>
        </div>

        <div>
          {ITEMS.map((item, i) => {
            const open = openIdx === i;
            const isLast = i === ITEMS.length - 1;
            return (
              <Reveal key={item.question} delay={i * 60}>
                <div className={isLast ? "border-b border-[rgba(255,255,255,0.08)]" : ""}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left border-t border-[rgba(255,255,255,0.08)]"
                    onClick={() => setOpenIdx(open ? null : i)}
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#FFFFFF] pr-6">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={
                        "h-5 w-5 text-[rgba(255,255,255,0.65)] shrink-0 transition-transform duration-300 " +
                        (open ? "rotate-180" : "")
                      }
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: SMOOTH_EASE }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="pb-5 pr-12 text-[#FFFFFF]/70 leading-relaxed text-sm sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
