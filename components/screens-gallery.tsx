import Image from "next/image";
import { Reveal } from "@/components/reveal";

const SCREENS = [
  {
    src: "/screens/v2/send.png",
    title: "Send",
    caption: "Amount first, then who. An @paytag, a contact or an address, in USDC, EURC or any token you hold.",
  },
  {
    src: "/screens/v2/thread.png",
    title: "Payment threads",
    caption: "Every payment and request with one person, as a conversation.",
  },
  {
    src: "/screens/v2/payments.png",
    title: "Payments",
    caption: "Send, request, receive, scan, split a bill, schedule and bridge.",
  },
  {
    src: "/screens/v2/automate.png",
    title: "Automate",
    caption: "Savings, auto-save rules, recurring payments and a balance ceiling.",
  },
];

/** App screenshots are captured at 390×844 @2x. */
const SCREEN_WIDTH = 780;
const SCREEN_HEIGHT = 1688;

/** A four-up gallery of the real app surfaces — the things the hero shot
 * doesn't show. Each card is a flat tile with a hairline border and the
 * actual screenshot; no glow, no gradient. */
export function ScreensGallery() {
  return (
    <section
      data-theme="dark"
      className="border-t border-[rgba(255,255,255,0.08)] bg-[#062448] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">THE APP</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#FFFFFF]">
            What it actually <span className="text-[rgba(255,255,255,0.65)]">looks like.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FFFFFF]/70 sm:text-lg">
            The real app, the same screens you&apos;ll see after sign-in.
            Balances shown are sample data.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-6 lg:grid-cols-4">
          {SCREENS.map((s, i) => (
            <Reveal key={s.src} delay={i * 90}>
              <figure className="flex h-full flex-col">
                <div className="overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[#0A2F5C] p-1.5">
                  <Image
                    src={s.src}
                    alt={`${s.title} screen in the glidepay app.`}
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT}
                    sizes="(max-width: 1024px) 46vw, 270px"
                    className="block h-auto w-full rounded-[1.625rem]"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="text-sm font-bold tracking-tight text-[#FFFFFF]">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[rgba(255,255,255,0.65)]">
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
