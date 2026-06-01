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
        Open the in-app <strong>Send</strong> screen. Three ways to pick a
        recipient:
      </p>
      <ul>
        <li>
          <strong>Pay tag</strong> — type <code>@khadee</code> or just{" "}
          <code>khadee</code>. Resolves to their Arc address instantly.
        </li>
        <li>
          <strong>Saved contact</strong> — if you&apos;ve sent to someone
          before and tapped &quot;Save&quot;, just type their name.
        </li>
        <li>
          <strong>0x address</strong> — for sending to wallets outside
          glidepay. The address is validated as you type.
        </li>
      </ul>
      <p>
        Tap your amount on the keypad, optionally add a note (140-char limit),
        tap <strong>Continue</strong>, then <strong>Pay</strong>. Done in two
        screens.
      </p>

      <h2>Receiving</h2>
      <p>
        Open the in-app <strong>Receive</strong> screen. By default it shows
        your Arc address with a QR. Tap the chain pills to switch to your
        per-chain receive address (Base, Ethereum, Polygon, Arbitrum). Any
        USDC sent to one of those addresses auto-sweeps to Arc — see{" "}
        <Link href="/docs/universal-receive">Universal Receive</Link>.
      </p>

      <h2>Tokens supported</h2>
      <ul>
        <li>
          <strong>USDC</strong> — Circle&apos;s USD stablecoin (1:1 USD-backed)
        </li>
        <li>
          <strong>EURC</strong> — Circle&apos;s EUR stablecoin (1:1 EUR-backed)
        </li>
        <li>
          <strong>cirBTC</strong> — Circle&apos;s tokenized Bitcoin (1:1
          BTC-backed). 8 decimal places.
        </li>
      </ul>

      <h2>Notes & payment requests</h2>
      <p>
        Add a note on the send screen — visible to the recipient in their
        Activity feed. To <em>ask</em> someone to pay you, use the{" "}
        <strong>Request</strong> screen: type an amount, optional note, and
        either share the generated link/QR or send it directly to a pay tag.
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
