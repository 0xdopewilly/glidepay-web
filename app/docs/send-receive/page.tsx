import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Send & receive",
};

export default function Page() {
  return (
    <DocsShell title="Send & receive">
      <h2>Sending</h2>
      <p>
        Open the in-app <strong>Send</strong> screen. It&apos;s amount-first:
        type the amount on the keypad, choose USDC, EURC or any token you
        hold, then pick a recipient:
      </p>
      <ul>
        <li>
          <strong>Pay tag</strong>. Type <code>@khadee</code> or just{" "}
          <code>khadee</code>. Resolves to their Arc address instantly.
        </li>
        <li>
          <strong>Saved contact</strong>. If you&apos;ve sent to someone
          before and tapped &quot;Save&quot;, just type their name.
        </li>
        <li>
          <strong>0x address</strong>. For sending to wallets outside
          glidepay. The address is validated as you type.
        </li>
        <li>
          <strong>QR code</strong>. Scan it instead of typing.
        </li>
      </ul>
      <p>
        Optionally add a note (140-char limit), tap{" "}
        <strong>Continue</strong>, then <strong>Pay</strong> and confirm with
        your 6-digit PIN. Payments on Arc are final, so check the recipient
        before you confirm.
      </p>

      <h2>Receiving</h2>
      <p>
        Open the in-app <strong>Receive</strong> screen. It shows your Arc
        address with a QR code, easy to share. Anyone can send USDC or EURC to
        it on Arc, from another wallet or an exchange that supports Arc.
      </p>
      <p>
        Per-chain deposit addresses arrive with{" "}
        <Link href="/docs/universal-receive">Universal Receive</Link>, which is
        rolling out and not live yet. A chain&apos;s pill appears on Receive
        only once that chain is enabled.
      </p>

      <h2>Tokens supported</h2>
      <p>
        Your balance counts three tokens on Arc, valued at live market
        prices:
      </p>
      <ul>
        <li>
          <strong>USDC</strong>. Circle&apos;s dollar stablecoin.
        </li>
        <li>
          <strong>EURC</strong>. Circle&apos;s euro stablecoin, priced at
          market rather than 1:1 with the dollar.
        </li>
        <li>
          <strong>cirBTC</strong>. Bitcoin on Arc, priced at market.
        </li>
      </ul>
      <p>
        Any other token on Arc still shows up, labelled{" "}
        <strong>Unverified</strong>. It&apos;s never counted in your balance,
        but you can still send it. Look-alike &quot;USDC&quot; tokens are
        flagged <strong>Possible scam</strong> and hidden by default.
      </p>

      <h2>Notes & payment requests</h2>
      <p>
        Add a note on the send screen, visible to the recipient in their
        Activity feed. To <em>ask</em> someone to pay you, use the{" "}
        <strong>Request</strong> screen: type an amount, optional note, and
        either share the generated link/QR or send it directly to an @paytag
        or email. See <Link href="/docs/requests">Requests &amp; splits</Link>.
      </p>

      <h2>Activity & receipts</h2>
      <p>
        Every send and receive lands in <strong>Activity</strong> with a tap
        target. Tap a row to see the on-chain transaction hash, explorer link,
        and (for sends) a shareable receipt.
      </p>

      <p>
        See also: <Link href="/docs/swap-bridge">Swap & bridge</Link>.
      </p>
    </DocsShell>
  );
}
