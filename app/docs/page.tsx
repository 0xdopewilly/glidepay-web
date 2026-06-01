import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Docs",
  description: "Documentation for glidepay. Concepts, features, security.",
};

export default function DocsIndex() {
  return (
    <DocsShell title="Documentation">
      <p>
        Everything you need to understand and use glidepay. What it is, how it
        works under the hood, and how to get the most out of it.
      </p>

      <h2>Start here</h2>
      <ul>
        <li>
          <Link href="/docs/getting-started">Getting started</Link>. Sign up,
          pick your handle, get your first payment.
        </li>
        <li>
          <Link href="/docs/universal-receive">Universal Receive</Link>. One
          handle, any chain, lands on Arc.
        </li>
        <li>
          <Link href="/docs/billy">Billy</Link>. The AI assistant that moves
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
          <Link href="/docs/architecture">Architecture</Link>. Next.js, Clerk,
          Circle Developer-Controlled Wallets, Arc, CCTP V2.
        </li>
        <li>
          <Link href="/docs/security">Security model</Link>. Who holds the
          keys, what we store, what stays on chain.
        </li>
        <li>
          <Link href="/docs/faq">FAQ</Link>. Testnet, mainnet, real money,
          accounts, deletion.
        </li>
      </ul>
    </DocsShell>
  );
}
