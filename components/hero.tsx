"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { DotGrid } from "@/components/dot-grid";

/** Light hero on solid white. Two-column on desktop: copy + CTAs on the left,
 * a phone mockup on the right. As the page scrolls past, the hero physically
 * recedes (scale + lift + fade). */
export function Hero({ appUrl }: { appUrl: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const heroStyle = reduceMotion
    ? undefined
    : { scale, y, opacity, transformOrigin: "50% 30%" as const };

  return (
    <motion.section
      ref={ref}
      style={heroStyle}
      className="relative min-h-screen overflow-hidden bg-[#FFFFFF] px-5 pt-32 sm:px-8 sm:pt-40"
    >
      <DotGrid tint="light" position="left" className="top-32" />
      <DotGrid tint="light" position="right" className="top-32" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-start gap-12 md:grid-cols-[1.2fr_1fr]">
        {/* LEFT: copy and CTAs */}
        <div className="text-center md:text-left">
          <Reveal>
            <span className="eyebrow text-[11px]">
              NOW LIVE ON ARC TESTNET
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="mt-6 font-bold leading-[1.02] tracking-[-0.04em] text-[#041f3d]"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 5.25rem)" }}
            >
              <span className="block">Money like a text.</span>
              <span className="block text-[rgba(4,31,61,0.55)]">On Arc.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#041f3d]/75 sm:text-lg md:mx-0">
              A Cash App for stablecoins. Send and receive USDC, EURC, and
              cirBTC on Arc, Circle&apos;s payments chain. No seed phrases, no
              gas tokens, no jargon.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:items-start md:justify-start">
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
                href="#universal-receive"
                className="btn-ghost w-full sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium text-[rgba(4,31,61,0.55)] md:justify-start">
              <span>Free</span>
              <span className="h-3 w-px bg-[rgba(4,31,61,0.18)]" />
              <span>Email or Google sign-in</span>
              <span className="h-3 w-px bg-[rgba(4,31,61,0.18)]" />
              <span>No wallet extension needed</span>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: phone mockup */}
        <Reveal delay={200}>
          <div className="relative mx-auto aspect-[902/1586] w-full max-w-[360px]">
            <div className="glow-green relative h-full w-full overflow-hidden rounded-[2.75rem] border border-[rgba(4,31,61,0.18)] bg-[#041f3d] p-1.5">
              <Image
                src="/screens/home.png"
                alt="The glidepay home screen, showing balance across USDC, EURC, and cirBTC on Arc."
                width={902}
                height={1586}
                priority
                sizes="(max-width: 768px) 320px, 360px"
                className="block h-auto w-full rounded-[2.25rem]"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-2xl border border-[rgba(4,31,61,0.18)] bg-white px-3.5 py-2.5 text-xs font-medium text-[#041f3d] shadow-lg sm:-bottom-4 sm:-left-4">
              <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
              Received +$20 via Base
            </div>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}
