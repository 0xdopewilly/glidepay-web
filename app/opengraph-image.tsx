import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "glidepay is live on Arc mainnet";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "NOW LIVE ON ARC MAINNET",
    title: "Money like a text.",
    muted: "On Arc mainnet.",
  });
}
