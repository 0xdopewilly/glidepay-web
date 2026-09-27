import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Docs",
  description:
    "Documentation for glidepay on Arc mainnet: getting started, fees, requests, automations, swaps, bridges, Billy and the security model.",
};

export default function DocsIndex() {
  return (
    <DocsShell title="Documentation">
      <p>
        Everything you need to understand and use glidepay on Arc mainnet.
        What it does, what it costs, how it works under the hood, and how to
        get the most out of it. New here? Read the{" "}
        <Link href="/mainnet">mainnet launch note</Link> first.
      </p>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/docs/getting-started">Getting started</Link>. Sign in,
          claim your @paytag, add money, install the app.
        </li>
        <li>
          <Link href="/docs/fees">Fees &amp; limits</Link>. No glidepay fee
          today, network fees in USDC, slippage, sweep minimums, finality.
        </li>
      </ul>

      <h2>Core features</h2>
      <ul>
        <li>
          <Link href="/docs/send-receive">Send &amp; receive</Link>. Pay by
          @paytag, contact, 0x address or QR; your Arc address; supported
          tokens.
        </li>
        <li>
          <Link href="/docs/requests">Requests &amp; splits</Link>. Request
          links and QR, requests to an @paytag or email, bill splits, payment
          threads.
        </li>
        <li>
          <Link href="/docs/automations">Automations &amp; Savings</Link>.
          Auto-save, scheduled sends, a balance ceiling, approval rules and
          your Savings account.
        </li>
        <li>
          <Link href="/docs/swap-bridge">Swap &amp; bridge</Link>. USDC, EURC
          and cirBTC swaps; bridging USDC to Base, Ethereum, Polygon and
          Arbitrum.
        </li>
        <li>
          <Link href="/docs/billy">Billy</Link>. The AI assistant that moves
          money in the chat.
        </li>
        <li>
          <Link href="/docs/universal-receive">Universal Receive</Link>.
          Rolling out: USDC from other chains, bridged to your Arc balance.
        </li>
      </ul>

      <h2>Under the hood</h2>
      <ul>
        <li>
          <Link href="/docs/architecture">Architecture</Link>. Next.js, Clerk,
          Circle Developer-Controlled Wallets, Arc, CCTP V2.
        </li>
        <li>
          <Link href="/docs/security">Security model</Link>. Who holds the
          keys, how the PIN works, what we store, what stays on chain.
        </li>
        <li>
          <Link href="/docs/faq">FAQ</Link>. Mainnet, real money, accounts,
          deletion.
        </li>
      </ul>
    </DocsShell>
  );
}
