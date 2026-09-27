import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Architecture",
  description:
    "How glidepay is built: Next.js, Clerk sign-in, Circle developer-controlled wallets on Arc mainnet, Circle App Kit and CCTP V2, Postgres, Groq for Billy, and web push.",
};

export default function Page() {
  return (
    <DocsShell title="Architecture">
      <p>
        glidepay is a Next.js application running on Arc mainnet. Accounts are
        Circle developer-controlled wallets: Circle holds the keys, and
        glidepay&apos;s server requests signatures through Circle&apos;s API.
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
          <strong>Circle Developer-Controlled Wallets</strong>. A smart
          account on Arc for each user, plus a separate wallet for Savings.
          Server-side signing via Circle&apos;s API. No keys or secrets ever
          land in the client.
        </li>
        <li>
          <strong>Circle App Kit</strong>. Swap and bridge primitives. USDC ↔
          EURC ↔ cirBTC on Arc, plus CCTP V2 cross-chain.
        </li>
        <li>
          <strong>Supabase Postgres + Prisma</strong>. User metadata,
          contacts, payment requests, scheduled sends, automation rules,
          activity records, chat history, and a hash of your PIN. Source of
          truth for off-chain state.
        </li>
        <li>
          <strong>Groq</strong>. The language model behind Billy. It returns
          structured JSON intents, and every money move still shows a confirm
          card before anything happens.
        </li>
        <li>
          <strong>Web Push (VAPID)</strong>. Push alerts on the installed
          app when USDC or EURC arrives, alongside the in-app notification
          feed.
        </li>
      </ul>

      <h2>The flow when you send</h2>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[#062448]/72">
        <li>
          You tap Send → type the amount → pick the recipient → confirm with
          your 6-digit PIN
        </li>
        <li>
          Client POSTs <code>/api/send</code> with{" "}
          <code>{`{ walletId, destinationAddress, amount, token, note }`}</code>
        </li>
        <li>
          Server checks your PIN, resolves the recipient (0x / @paytag /
          contact), validates ownership of the source wallet, asserts
          sufficient balance, and checks for a duplicate send in the last 10s
          (idempotency)
        </li>
        <li>
          Server calls Circle{" "}
          <code>createTransaction</code> with the wallet&apos;s server-side
          signing credential
        </li>
        <li>
          The transaction settles on Arc with sub-second finality; we record a
          Transaction row and push-notify the recipient
        </li>
      </ol>

      <h2>The flow when someone sends to you cross-chain</h2>
      <p>
        <strong>Rolling out, not live yet.</strong> See{" "}
        <Link href="/docs/universal-receive">Universal Receive</Link> for the
        full version. Short: Circle webhook fires on inbound USDC at your
        receive address → handler atomically claims the event → gas refill if
        needed → CCTP V2 burn-on-source + mint-on-Arc → push.
      </p>

      <h2>Why developer-controlled wallets</h2>
      <p>
        Browser-side wallet management means extension pop-ups, seed phrases,
        and users who lose access permanently. Developer-controlled wallets
        (via Circle) mean email-and-Google sign-in, an account you can sign
        back into from any device, and a UX that looks like Venmo. The trade-off is trust. You trust glidepay and
        Circle to operate your wallet honestly, and on mainnet that trust
        covers real money. See{" "}
        <Link href="/docs/security">Security model</Link> for the longer
        version.
      </p>
    </DocsShell>
  );
}
