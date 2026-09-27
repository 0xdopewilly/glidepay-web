import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt =
  "glidepay is live on Arc mainnet. Launch note, 24 September 2026.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "LAUNCH NOTE · 24 SEP 2026",
    title: "glidepay is live",
    muted: "on Arc mainnet.",
  });
}
