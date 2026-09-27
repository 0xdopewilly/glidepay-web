import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Security model",
  description:
    "How glidepay protects your money on Arc mainnet: Circle-held keys, server-side signing, a 6-digit PIN for money out, approvals on automations, scam-token flags and final payments.",
};

export default function Page() {
  return (
    <DocsShell title="Security model">
      <p>
        Your glidepay account is a Circle developer-controlled smart account
        on Arc. Circle holds the keys and signs transactions. glidepay&apos;s
        server asks Circle to sign when you confirm a payment or an automation
        you set up runs. You sign in with email or Google. Here&apos;s what that means and where the trust
        boundaries are.
      </p>

      <h2>Who holds the keys</h2>
      <p>
        Circle, through its Developer-Controlled Wallets infrastructure. Keys
        are never shown in the app, and no keys or secrets live in the app.
        Transactions are signed server-side: glidepay sends a signing request
        over Circle&apos;s API and never handles private keys itself.
      </p>
      <p>
        The trade-off versus a self-custody wallet is trust. There&apos;s no
        seed phrase to lose or leak, and you can sign in again on any device,
        but you rely on glidepay and Circle to operate your wallet honestly.
        On mainnet, that trust covers real money.
      </p>

      <h2>Your PIN</h2>
      <ul>
        <li>A 6-digit PIN confirms any money going out of your balance.</li>
        <li>
          The PIN is stored hashed on the server. It&apos;s never sent to the
          app, and glidepay can&apos;t read it back.
        </li>
        <li>
          Resetting the PIN requires re-verifying your email first.
        </li>
      </ul>

      <h2>Automations and approvals</h2>
      <p>
        Automations (auto-save, scheduled sends and the balance ceiling) only
        run on rules you set. Automated payments above an amount you choose,
        or to someone who isn&apos;t in your contacts, wait for your approval.
        See <Link href="/docs/automations">Automations &amp; Savings</Link>.
      </p>

      <h2>Tokens you didn&apos;t expect</h2>
      <p>
        Anyone can send any token to a public address. glidepay counts only
        USDC, EURC and cirBTC in your balance, at live market prices. Any
        other token still shows up, labelled <strong>Unverified</strong>, is
        never counted in your balance, and can still be sent. Look-alike
        &quot;USDC&quot; tokens are flagged <strong>Possible scam</strong> and
        hidden by default.
      </p>

      <h2>Payments are final</h2>
      <p>
        Payments on Arc are final and can&apos;t be reversed. Check
        the @paytag or address on the confirm screen before you enter your
        PIN. Billy shows a confirm card before any money move for the same
        reason.
      </p>

      <h2>What we store about you</h2>
      <ul>
        <li>Your email (from Clerk)</li>
        <li>Optional display name, avatar, pay tag</li>
        <li>Your Circle wallet IDs (your Arc account, your Savings account, and receive chains as they&apos;re enabled)</li>
        <li>A hash of your PIN, never the PIN itself</li>
        <li>Transaction history we&apos;ve recorded (off-chain mirror of on-chain events)</li>
        <li>Saved contacts, payment requests, scheduled sends and automation rules</li>
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
        <li>Private keys, seed phrases, signing credentials. Circle&apos;s
          domain, not ours.</li>
        <li>Marketing trackers, behavioural analytics, device fingerprints</li>
        <li>Card / bank details. There&apos;s no fiat onramp.</li>
      </ul>

      <h2>On-chain data</h2>
      <p>
        Everything you do on Arc is public: wallet address, transaction hashes,
        amounts. Anyone with a block explorer can see them. This is true of
        every wallet on every public blockchain.
      </p>

      <h2>Closing your account</h2>
      <p>
        Closing your account requires your PIN and an empty balance, so money
        can&apos;t be left behind by mistake. Send or bridge your funds out
        first. Closing deletes your glidepay profile, its related records and
        your sign-in account.
      </p>

      <h2>Idempotency & double-spend protection</h2>
      <p>
        Every send through <code>/api/send</code> checks for a duplicate
        (same recipient, amount, token, last 10s) and short-circuits if one
        exists. Money-out chat intents require an explicit confirmation tap.
        Webhook retries from Circle can&apos;t trigger duplicate Universal
        Receive sweeps. The claim is atomically locked by a DB unique
        constraint.
      </p>

      <h2>Disclosure</h2>
      <p>
        Found a security issue? Email{" "}
        <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>{" "}
        before disclosing it publicly, and we&apos;ll coordinate a fix with
        you.
      </p>

      <p>
        Related: <Link href="/docs/architecture">Architecture</Link>,{" "}
        <Link href="/docs/faq">FAQ</Link>.
      </p>
    </DocsShell>
  );
}
