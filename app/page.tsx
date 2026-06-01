import { Billy } from "@/components/billy";
import { ChainsStrip } from "@/components/chains-strip";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { GetStarted } from "@/components/get-started";
import { Hero } from "@/components/hero";
import { ProofBand } from "@/components/proof-band";
import { RealMoneyStatement } from "@/components/real-money-statement";
import { ScreensGallery } from "@/components/screens-gallery";
import { Stats } from "@/components/stats";
import { UniversalReceive } from "@/components/universal-receive";
import { WordmarkBand } from "@/components/wordmark-band";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export default function HomePage() {
  return (
    <>
      <Hero appUrl={APP_URL} />
      <ChainsStrip />
      <RealMoneyStatement />
      <ScreensGallery />
      <Billy />
      <ProofBand appUrl={APP_URL} />
      <UniversalReceive />
      <Stats />
      <GetStarted appUrl={APP_URL} />
      <Faq />
      <Footer appUrl={APP_URL} />
      <WordmarkBand />
    </>
  );
}
