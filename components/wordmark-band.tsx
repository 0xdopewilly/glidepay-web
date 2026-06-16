/** Full-bleed brand wordmark before the footer. Uses the real glidepay
 * logo (with the trailing period — that punctuation IS the brand). The
 * PNG is used as a mask so the wordmark can be recolored against the
 * dark background. */
export function WordmarkBand() {
  return (
    <section
      aria-hidden
      data-theme="dark"
      className="overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-[#060B1C] pt-12 pb-8"
    >
      <div
        aria-hidden
        className="w-[82vw] max-w-[1400px] mx-auto block select-none"
        style={{
          aspectRatio: "1205 / 397",
          backgroundColor: "#FFFFFF",
          WebkitMaskImage: "url(/glidepay-wordmark.png)",
          maskImage: "url(/glidepay-wordmark.png)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </section>
  );
}
