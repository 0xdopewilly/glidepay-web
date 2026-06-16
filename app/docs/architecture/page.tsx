import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Architecture",
};

export default function Page() {
  return (
    <DocsShell title="Architecture">
      <p>
        Glidepay is a Next.js application with a server-side custody model.
        Here&apos;s the stack and the responsibility split.
      </p>

      <h2>The pieces</h2>
      <ul>
        <li>
          <strong>Next.js 16 (App Router)</strong>. UI and server routes.
          Deployed on Vercel.
        </li>
        <li>
          <strong>Clerk</strong>. Authentication. Email and Google sign-in.
          We never touch passwords.
        </li>
        <li>
          <strong>Circle Developer-Controlled Wallets</strong>. Smart
          accounts on Arc and the other supported chains. Server-side signing
          via Circle&apos;s API. No private keys ever land in the client.
        </li>
        <li>
          <strong>Circle App Kit</strong>. Swap and bridge primitives. USDC ↔
          EURC ↔ cirBTC on Arc, plus CCTP V2 cross-chain.
        </li>
        <li>
          <strong>Supabase Postgres + Prisma</strong>. User metadata,
          contacts, payment requests, scheduled transfers, activity records,
          chat history. Source of truth for off-chain state.
        </li>
        <li>
          <strong>Groq</strong>. Llama 3.1 8B-instant for Billy. ~400ms
          structured JSON responses.
        </li>
        <li>
          <strong>Web Push (VAPID)</strong>. Real-time push for incoming
          USDC, paid requests, completed swaps. Native APNs / FCM coming via
          Capacitor on iOS / Android.
        </li>
        <li>
          <strong>Capacitor</strong>. iOS and Android shells that load the
          live PWA. Adds native push, biometrics, status bar, haptics,
          share sheet.
        </li>
      </ul>

      <h2>The flow when you send</h2>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[#1F2937]/72">
        <li>You tap Send → fill recipient + amount → tap Pay</li>
        <li>
          Client POSTs <code>/api/send</code> with{" "}
          <code>{`{ walletId, destinationAddress, amount, token, note }`}</code>
        </li>
        <li>
          Server resolves the recipient (0x / @username / contact),
          validates ownership of the source wallet, asserts sufficient balance,
          checks for a duplicate send in the last 10s (idempotency)
        </li>
        <li>
          Server calls Circle{" "}
          <code>createTransaction</code> with the wallet&apos;s server-side
          signing credential
        </li>
        <li>
          Transaction lands on Arc in ~1s; we record a Transaction row,
          push-notify the recipient
        </li>
      </ol>

      <h2>The flow when someone sends to you cross-chain</h2>
      <p>
        See <Link href="/docs/universal-receive">Universal Receive</Link> for
        the full version. Short: Circle webhook fires on inbound USDC at your
        receive address → handler atomically claims the event → gas refill if
        needed → CCTP V2 burn-on-source + mint-on-Arc → push.
      </p>

      <h2>Why server-side custody</h2>
      <p>
        Browser-side wallet management means: MetaMask popups, seed phrases,
        users who lose access permanently. Server-side custody (via Circle)
        means: email-and-Google sign-in, accounts you can recover, a UX that
        looks like Venmo. The trade-off is trust. You trust glidepay and
        Circle to operate your wallet honestly. On testnet that&apos;s no
        meaningful trust burden. See{" "}
        <Link href="/docs/security">Security model</Link> for the longer
        version.
      </p>
    </DocsShell>
  );
}
