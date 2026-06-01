import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Getting started",
};

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export default function Page() {
  return (
    <DocsShell title="Getting started">
      <p>
        Glidepay is a mobile-first stablecoin wallet. Sign up takes about 30
        seconds — no seed phrases, no wallet extensions.
      </p>

      <h2>1. Open the app</h2>
      <p>
        Go to{" "}
        <Link href={APP_URL} target="_blank" rel="noreferrer">
          {APP_URL.replace(/^https?:\/\//, "")}
        </Link>{" "}
        in your phone&apos;s browser. On iPhone, tap Share → Add to Home Screen
        to install it as a PWA — feels like a real app. On Android, Chrome
        prompts you to install on first visit.
      </p>

      <h2>2. Sign in</h2>
      <p>
        Use email or Google. Behind the scenes, glidepay creates a Circle
        smart-account wallet on Arc for you and stores its address. You never
        see private keys.
      </p>

      <h2>3. Pick your handle</h2>
      <p>
        Pick a unique <code>@username</code>. This is your pay tag — friends
        can send to you by name instead of by a 0x address.
      </p>

      <h2>4. Get your first dollars</h2>
      <p>
        Open the in-app{" "}
        <Link href={`${APP_URL}/receive`} target="_blank" rel="noreferrer">
          Receive
        </Link>{" "}
        page, copy your address, and grab some testnet USDC from the{" "}
        <a
          href="https://faucet.circle.com/"
          target="_blank"
          rel="noreferrer"
        >
          Circle faucet
        </a>
        . Pick Arc Testnet. The money lands in ~10 seconds.
      </p>

      <h2>5. Try Universal Receive</h2>
      <p>
        On the Receive page, tap Base / Ethereum / Polygon / Arbitrum. Each gives
        you a unique address on that chain. Send USDC from any wallet — it
        auto-bridges to Arc in ~60 seconds. See{" "}
        <Link href="/docs/universal-receive">Universal Receive</Link> for the
        full story.
      </p>

      <h2>Next</h2>
      <ul>
        <li>
          <Link href="/docs/billy">Ask Billy to do things for you</Link> — try
          &quot;split $60 with @fifi and @khadee&quot;.
        </li>
        <li>
          <Link href="/docs/send-receive">Send & receive deep-dive</Link>
        </li>
      </ul>
    </DocsShell>
  );
}
