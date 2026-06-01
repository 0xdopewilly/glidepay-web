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
      <Hero appUrl={APP_URL} />
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
