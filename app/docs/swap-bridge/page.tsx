import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Swap & bridge",
};

export default function Page() {
  return (
    <DocsShell title="Swap & bridge">
      <h2>Swap</h2>
      <p>
        Swap between USDC, EURC, and cirBTC on Arc. Powered by Circle App Kit.
        Live quote refreshes as you type the amount, then one tap to confirm.
      </p>
      <p>
        Default pair is USDC → EURC. To swap a different pair, change the
        &quot;From&quot; and &quot;To&quot; token chips on the swap screen.
      </p>

      <h2>Bridge</h2>
      <p>
        Move USDC <em>out</em> of Arc to Base, Ethereum, Polygon, or Arbitrum.
        Uses the same CCTP V2 plumbing that powers Universal Receive, except
        in the reverse direction.
      </p>
      <p>
        Pick the destination network, type the amount, confirm. The funds
        arrive on the chosen chain at <em>the same address</em> Circle holds
        for you across EVM chains. From there you can pull them into MetaMask,
        Coinbase, etc.
      </p>

      <h2>What about cirBTC?</h2>
      <p>
        cirBTC <strong>can</strong> be swapped (USDC ↔ cirBTC ↔ EURC) but{" "}
        <strong>cannot</strong> be bridged. Circle&apos;s bridge kit is
        USDC-only today. We&apos;ll wire this in when Circle ships cirBTC
        bridge support.
      </p>

      <h2>Fees</h2>
      <ul>
        <li>
          <strong>Swap</strong>: Circle&apos;s App Kit takes a small spread
          (slippage cap default 3%). On Arc testnet, no real value moves.
        </li>
        <li>
          <strong>Bridge</strong>: Arc-side gas (paid in USDC, very small),
          plus CCTP V2 Fast Transfer fee (also tiny, often free at low
          amounts).
        </li>
      </ul>

      <p>
        See also: <Link href="/docs/universal-receive">Universal Receive</Link>
        .
      </p>
    </DocsShell>
  );
}
