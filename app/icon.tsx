import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          borderRadius: 7,
          color: "#4ADE80",
          fontSize: 24,
          fontWeight: 700,
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
