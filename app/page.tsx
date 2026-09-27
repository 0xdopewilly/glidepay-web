import { Billy } from "@/components/billy";
import { BuiltOnCircle } from "@/components/built-on-circle";
import { ChainsStrip } from "@/components/chains-strip";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Fees } from "@/components/fees";
import { Footer } from "@/components/footer";
import { GetStarted } from "@/components/get-started";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ProofBand } from "@/components/proof-band";
import { RealMoneyStatement } from "@/components/real-money-statement";
import { ScreensGallery } from "@/components/screens-gallery";
import { Security } from "@/components/security";
import { Stats } from "@/components/stats";
import { UniversalReceive } from "@/components/universal-receive";
import { WordmarkBand } from "@/components/wordmark-band";
import { hostOf, landingFaq } from "@/lib/faq";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export default function HomePage() {
  return (
    <>
      <Hero appUrl={APP_URL} />
      <ChainsStrip />
      <RealMoneyStatement />
      <Features />
      <Stats />
      <ScreensGallery />
      <Billy />
      <HowItWorks appUrl={APP_URL} />
      <Security />
      <Fees />
      <BuiltOnCircle />
      <ProofBand appUrl={APP_URL} />
      <UniversalReceive />
      <GetStarted appUrl={APP_URL} />
      <Faq items={landingFaq(hostOf(APP_URL))} />
      <Footer appUrl={APP_URL} />
      <WordmarkBand />
    </>
  );
}
