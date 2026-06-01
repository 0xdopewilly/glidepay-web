import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Cta({ appUrl }: { appUrl: string }) {
  return (
    <section className="relative border-t border-white/5 px-5 py-28 sm:px-8 sm:py-36">
      <div className="absolute inset-0 bg-brand-glow" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">Ready?</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-[2.5rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[4rem]">
            Open glidepay.{" "}
            <span className="bg-gradient-to-r from-white to-[#8aa5c2] bg-clip-text text-transparent">
              Receive your first $5.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Free, testnet, no commitment. Sign in with email or Google and grab
            your @handle. We&apos;ll handle the rest.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={appUrl}
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
  );
}
