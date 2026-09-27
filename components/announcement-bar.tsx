import Link from "next/link";

/** Height of the bar in px. The nav slides up by exactly this much once the
 * page scrolls, so keep it in sync with the `h-9` below. */
export const ANNOUNCEMENT_BAR_HEIGHT = 36;

/** One-line launch banner that sits above the nav on every page. */
export function AnnouncementBar({ hideLink = false }: { hideLink?: boolean }) {
  return (
    // No data-theme here: the nav scans [data-theme] nodes under it to pick
    // its own colors, and this bar lives inside the nav.
    <div className="h-9 border-b border-[rgba(255,255,255,0.08)] bg-[#062448] text-[#FFFFFF]">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center gap-2.5 px-4 text-xs sm:px-8">
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#16C784]"
        />
        <span className="truncate font-medium text-[#FFFFFF]/85">
          glidepay is live on Arc mainnet
        </span>
        {hideLink ? null : (
          <Link
            href="/mainnet"
            className="shrink-0 whitespace-nowrap font-semibold text-[#FFFFFF] underline decoration-[rgba(255,255,255,0.35)] underline-offset-4 transition-colors hover:decoration-[#FFFFFF]"
          >
            <span className="sm:hidden">Launch note</span>
            <span className="hidden sm:inline">Read the launch note</span>
            <span aria-hidden> →</span>
          </Link>
        )}
      </div>
    </div>
  );
}
