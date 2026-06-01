/**
 * Full-bleed brand wordmark just before the footer, à la Arcium's giant
 * "ARCIUM" treatment. Scales fluidly with the viewport so the type runs
 * edge-to-edge on every screen size. Pure CSS — no JS, no images.
 */
export function WordmarkBand() {
  return (
    <section className="relative z-[55] overflow-hidden border-t border-white/10 bg-[#031629] pt-16 pb-0">
      <p
        className="select-none whitespace-nowrap text-center font-black uppercase leading-none tracking-[-0.06em] text-white"
        style={{
          fontSize: "clamp(6rem, 23vw, 24rem)",
          letterSpacing: "-0.06em",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
        }}
        aria-hidden
      >
        glidepay
      </p>
    </section>
  );
}
