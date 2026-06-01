import Image from "next/image";
import { Reveal } from "@/components/reveal";

const CHAINS: { name: string; src: string }[] = [
  { name: "Base", src: "/chains/base.png" },
  { name: "Ethereum", src: "/chains/ethereum.png" },
  { name: "Polygon", src: "/chains/polygon.png" },
  { name: "Arbitrum", src: "/chains/arbitrum.png" },
  { name: "Arc", src: "/chains/arc.jpg" },
];

export function ChainsStrip() {
  return (
    <section
      data-theme="dark"
      className="border-y border-white/10 bg-[#041f3d] px-5 py-10 sm:px-8 sm:py-14"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal>
            <span className="eyebrow">UNIVERSAL RECEIVE</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
              Send from <span className="text-white/55">any chain.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
          {CHAINS.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-4">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={c.src}
                    alt={c.name + " logo"}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-white">
                  {c.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
