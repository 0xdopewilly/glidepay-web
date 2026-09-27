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
        Pick the destination network and the address that should receive the
        USDC: your own wallet on that chain, or someone else&apos;s. Type the
        amount and confirm. Double-check the address: payments are final.
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
          <strong>Swap</strong>: market rate, with slippage capped at 3%.
          This is real value on Arc mainnet, so check the quote before you
          confirm.
        </li>
        <li>
          <strong>Bridge</strong>: network and bridge fees may apply. Arc
          network fees are paid in USDC.
        </li>
      </ul>
      <p>
        glidepay doesn&apos;t currently add a fee of its own to swaps or
        bridges. See <Link href="/docs/fees">Fees &amp; limits</Link>.
      </p>

      <p>
        See also: <Link href="/docs/universal-receive">Universal Receive</Link>
        .
      </p>
    </DocsShell>
  );
}
