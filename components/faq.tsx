"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SMOOTH_EASE } from "@/lib/easing";
import type { FaqItem } from "@/lib/faq";

/** Accordion FAQ on a dark band. Items come from lib/faq.ts so server pages
 * can pick the set (landing vs. mainnet note). */
export function Faq({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-theme="dark"
      className="scroll-mt-20 bg-[#062448] border-t border-[rgba(255,255,255,0.08)] px-5 sm:px-8 py-28 sm:py-36"
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
          {items.map((item, i) => {
            const open = openIdx === i;
            const isLast = i === items.length - 1;
            const panelId = `faq-panel-${i}`;
            return (
              <Reveal key={item.question} delay={Math.min(i, 6) * 60}>
                <div className={isLast ? "border-b border-[rgba(255,255,255,0.08)]" : ""}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
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
                        id={panelId}
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
