/** Decorative dot grid — the braille-like ornament you see along the edges
 * of Arcium-style sections. Pure SVG so it costs zero JS and scales crisply.
 *
 * tint: 'light' → dots tinted for placement on a WHITE background (dark blue)
 * tint: 'dark'  → dots tinted for placement on a DARK  background (white)
 * position: which edge to hug — caller supplies `top` via Tailwind utilities.
 */
type DotGridProps = {
  tint: "light" | "dark";
  position: "left" | "right";
  /** Override anchor utilities (e.g. "top-24" or "top-1/3"). */
  className?: string;
};

const COLS = 8;
const ROWS = 18;
const GAP = 14;
const R = 1.5;

export function DotGrid({
  tint,
  position,
  className = "top-24",
}: DotGridProps) {
  const fill =
    tint === "light" ? "rgba(4, 31, 61, 0.18)" : "rgba(255, 255, 255, 0.18)";
  const width = COLS * GAP;
  const height = ROWS * GAP;

  // Slight pseudo-random opacity drop on a fixed pattern so the grid reads as
  // "braille-like" texture rather than perfectly uniform. Deterministic so SSR
  // markup matches the client.
  const isMuted = (r: number, c: number) => (r * 7 + c * 11) % 5 === 0;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${position === "left" ? "left-0 sm:left-4" : "right-0 sm:right-4"} ${className}`}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        role="presentation"
      >
        {Array.from({ length: ROWS }).map((_, r) =>
          Array.from({ length: COLS }).map((__, c) => (
            <circle
              key={`${r}-${c}`}
              cx={c * GAP + GAP / 2}
              cy={r * GAP + GAP / 2}
              r={R}
              fill={fill}
              opacity={isMuted(r, c) ? 0.35 : 1}
            />
          )),
        )}
      </svg>
    </div>
  );
}
