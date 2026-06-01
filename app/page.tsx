import { Billy } from "@/components/billy";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Stats } from "@/components/stats";
import { UniversalReceive } from "@/components/universal-receive";
import { WhyArc } from "@/components/why-arc";
import { WordmarkBand } from "@/components/wordmark-band";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export default function HomePage() {
  return (
    <>
      {/*
        Arcium-style pinned scroll. The hero is position:fixed, occupying the
        viewport from page-load. The h-screen spacer creates the first
        viewport of scroll where the hero is visible alone. After that, the
        subsequent sections (each z-10+ with solid backgrounds) scroll
        upward over the hero and cover it permanently.
      */}
      <Hero appUrl={APP_URL} />
      <div className="h-screen" aria-hidden />

      <UniversalReceive />
      <Stats />
      <HowItWorks />
      <WhyArc />
      <Billy />
      <Cta appUrl={APP_URL} />
      <WordmarkBand />
    </>
  );
}
