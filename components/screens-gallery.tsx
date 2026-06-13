import Image from "next/image";
import { Reveal } from "@/components/reveal";

const SCREENS = [
  {
    src: "/screens/home.png",
    title: "Balance",
    caption: "USDC, EURC, and cirBTC on Arc, at a glance.",
    width: 902,
    height: 1586,
  },
  {
    src: "/screens/payments.png",
    title: "Payments",
    caption: "Send, receive, request, scan, schedule, split a bill.",
    width: 888,
    height: 1600,
  },
  {
    src: "/screens/trade.png",
    title: "Trade",
    caption: "Swap USDC ↔ EURC ↔ cirBTC. Bridge USDC to any chain.",
    width: 926,
    height: 1600,
  },
];

/** A three-up gallery of the real app surfaces — the things the hero shot
 * doesn't show. Each card is a flat tile with a hairline border and the
 * actual screenshot; no glow, no gradient. */
export function ScreensGallery() {
  return (
    <section
      data-theme="dark"
      className="border-t border-[#1E293B] bg-[#0A0F0F] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">EVERY SCREEN, REAL</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-[#F1F5F9]">
            What it actually <span className="text-[#94A3B8]">looks like.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F1F5F9]/70 sm:text-lg">
            No mocks. These are screenshots straight from the live testnet
            app. Same surfaces you&apos;ll see thirty seconds after sign-in.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SCREENS.map((s, i) => (
            <Reveal key={s.src} delay={i * 90}>
              <figure className="flex h-full flex-col">
                <div className="overflow-hidden rounded-[2rem] border border-[#1E293B] bg-[#111827] p-1.5">
                  <Image
                    src={s.src}
                    alt={`${s.title} screen in the glidepay testnet app.`}
                    width={s.width}
                    height={s.height}
                    sizes="(max-width: 768px) 92vw, 360px"
                    className="block h-auto w-full rounded-[1.625rem]"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="text-sm font-bold tracking-tight text-[#F1F5F9]">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">
                    {s.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
