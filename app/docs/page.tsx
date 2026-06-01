import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Docs",
  description: "Documentation for glidepay — concepts, features, security.",
};

export default function DocsIndex() {
  return (
    <DocsShell title="Documentation">
      <p>
        Everything you need to understand and use glidepay — what it is, how it
        works under the hood, and how to get the most out of it.
      </p>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/docs/getting-started">Getting started</Link> — sign up,
          pick your handle, get your first payment.
        </li>
        <li>
          <Link href="/docs/universal-receive">Universal Receive</Link> — one
          handle, any chain, lands on Arc.
        </li>
        <li>
          <Link href="/docs/billy">Billy</Link> — the AI assistant that moves
          money conversationally.
        </li>
      </ul>

      <h2>Core features</h2>
      <ul>
        <li>
          <Link href="/docs/send-receive">Send & receive</Link>
        </li>
        <li>
          <Link href="/docs/swap-bridge">Swap & bridge</Link>
        </li>
      </ul>

      <h2>Under the hood</h2>
      <ul>
        <li>
          <Link href="/docs/architecture">Architecture</Link> — Next.js, Clerk,
          Circle Developer-Controlled Wallets, Arc, CCTP V2.
        </li>
        <li>
          <Link href="/docs/security">Security model</Link> — who holds the
          keys, what we store, what stays on chain.
        </li>
        <li>
          <Link href="/docs/faq">FAQ</Link> — testnet, mainnet, real money,
          accounts, deletion.
        </li>
      </ul>
    </DocsShell>
  );
}
