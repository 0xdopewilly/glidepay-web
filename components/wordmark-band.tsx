import Image from "next/image";

/** Full-bleed brand wordmark before the footer. Uses the real glidepay
 * logo (with the trailing period — that punctuation IS the brand). Pure
 * CSS, no JS, no animation, no recoloring. */
export function WordmarkBand() {
  return (
    <section
      aria-hidden
      data-theme="dark"
      className="overflow-hidden border-t border-white/10 bg-[#03070d] pt-12 pb-8"
    >
      <Image
        src="/glidepay-wordmark.png"
        alt=""
        width={1205}
        height={397}
        className="w-[82vw] max-w-[1400px] mx-auto block h-auto select-none"
      />
    </section>
  );
}
