import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#060B1C",
          borderRadius: 40,
          color: "#FFFFFF",
          fontSize: 130,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        g.
      </div>
    ),
    size,
  );
}
