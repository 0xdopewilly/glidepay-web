import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Shared Open Graph card: navy band, wordmark + Mainnet pill, a two-line
 * headline with a muted second clause (same shape as the site's headings). */
export function renderOgImage({
  eyebrow,
  title,
  muted,
}: {
  eyebrow: string;
  title: string;
  muted: string;
}) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        background: "#062448",
        color: "#FFFFFF",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          glidepay.
        </div>
        <div
          style={{
            display: "flex",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 999,
            padding: "4px 14px",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          MAINNET
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#A9B7D0",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {muted}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 26, color: "#A9B7D0" }}>
        USDC, EURC and cirBTC on Arc, Circle&apos;s payments chain
      </div>
    </div>,
    OG_SIZE,
  );
}
