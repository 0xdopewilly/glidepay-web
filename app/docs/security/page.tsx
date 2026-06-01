import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Security model",
};

export default function Page() {
  return (
    <DocsShell title="Security model">
      <p>
        Glidepay is a server-custodial wallet: Circle holds the signing
        capability, glidepay coordinates user intent, and you authenticate via
        email. Here&apos;s exactly what that means and what the trust
        boundaries are.
      </p>

      <h2>Who holds the keys</h2>
      <p>
        Circle&apos;s Developer-Controlled Wallets infrastructure. The signing
        material is sealed inside Circle&apos;s entity secret + their HSM
        setup. Glidepay never sees private keys; we send signing requests over
        Circle&apos;s API.
      </p>
      <p>
        This is the same custody model used by{" "}
        <em>any wallet app that doesn&apos;t make you write down a seed
        phrase</em>. The trade-off vs self-custody is well-known: easier UX
        for normal users, slightly more trust required.
      </p>

      <h2>What we store about you</h2>
      <ul>
        <li>Your email (from Clerk)</li>
        <li>Optional display name, avatar, pay tag</li>
        <li>Your Circle wallet IDs (Arc + each receive chain)</li>
        <li>Transaction history we&apos;ve recorded (off-chain mirror of on-chain events)</li>
        <li>Saved contacts, payment requests, scheduled transfers</li>
        <li>Push notification subscription (if enabled)</li>
        <li>Recent Billy chat history (last ~80 messages)</li>
      </ul>
      <p>
        Full detail: see the in-app{" "}
        <a
          href={
            (process.env.NEXT_PUBLIC_APP_URL ??
              "https://glide-arc.vercel.app") + "/privacy"
          }
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2>What we don&apos;t store</h2>
      <ul>
        <li>Private keys, seed phrases, signing credentials — Circle&apos;s
          domain, not ours</li>
        <li>Marketing trackers, behavioural analytics, device fingerprints</li>
        <li>Card / bank details — there&apos;s no fiat onramp</li>
      </ul>

      <h2>On-chain data</h2>
      <p>
        Everything you do on Arc is public: wallet address, transaction hashes,
        amounts. Anyone with a block explorer can see them. This is true of
        every wallet on every public blockchain.
      </p>

      <h2>Account deletion</h2>
      <p>
        Profile → Delete account hard-deletes your glidepay profile, all
        related rows, and your Clerk account. <strong>On-chain balances stay
        on Arc</strong> — they aren&apos;t ours to delete. Withdraw them first
        if you want them.
      </p>

      <h2>Idempotency & double-spend protection</h2>
      <p>
        Every send through <code>/api/send</code> checks for a duplicate
        (same recipient, amount, token, last 10s) and short-circuits if one
        exists. Money-out chat intents require an explicit confirmation tap.
        Webhook retries from Circle can&apos;t trigger duplicate Universal
        Receive sweeps — the claim is atomically locked by a DB unique
        constraint.
      </p>

      <h2>Disclosure</h2>
      <p>
        Found a security issue? Email{" "}
        <a href="mailto:security@glidepay.cash">security@glidepay.cash</a>{" "}
        before disclosing publicly. We&apos;ll respond within 48 hours and
        coordinate a fix.
      </p>

      <p>
        Related: <Link href="/docs/architecture">Architecture</Link>,{" "}
        <Link href="/docs/faq">FAQ</Link>.
      </p>
    </DocsShell>
  );
}
