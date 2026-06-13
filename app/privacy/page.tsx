import type { Metadata } from "next";
import { Footer } from "@/components/footer";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How glidepay collects, stores, and uses your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <article className="mx-auto max-w-3xl px-5 sm:px-8 pt-32 pb-24 sm:pt-40">
        <p className="eyebrow mb-4">LEGAL</p>
        <h1 className="font-bold text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em] leading-[1.05] text-[#0A0A0A]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#475569]">
          Last updated: 2026-06-01.
        </p>
        <div className="prose-doc mt-10 space-y-6 text-[15px] leading-[1.7] text-[#0A0A0A]/75">
          <p>
            glidepay is a mobile-first stablecoin wallet built on Arc testnet.
            This page explains what data we collect, why we collect it, and what
            we do not do with it. We&apos;ve tried to keep it human.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Account</strong>: email address (via Clerk), and
              optionally your display name and avatar. You give us this when
              you sign up.
            </li>
            <li>
              <strong>Wallet identifier</strong>: a Circle wallet ID and its
              public Arc, Base, Ethereum, Polygon, and Arbitrum address.
              Created automatically when you first sign in.
            </li>
            <li>
              <strong>Activity</strong>: transactions you initiate through
              glidepay, your contacts list, your pay tag (@username), saved
              payment requests, and your chat history with Billy. Stored so the
              app works across your devices.
            </li>
            <li>
              <strong>Push subscriptions</strong>: if you turn on
              notifications, your device&apos;s push endpoint is stored so we
              can notify you of incoming money.
            </li>
            <li>
              <strong>Operational logs</strong>: IP address and basic request
              info via Vercel and Supabase logs, retained roughly 30 days for
              debugging and fraud protection.
            </li>
          </ul>

          <h2>What we don&apos;t collect</h2>
          <ul>
            <li>
              No private keys, no seed phrases, no signing credentials. Your
              wallet is operated server-side by Circle.
            </li>
            <li>
              No location tracking, no device fingerprinting beyond what Clerk
              and Vercel store for auth and infra.
            </li>
            <li>No marketing or advertising trackers.</li>
            <li>
              No financial information beyond what&apos;s already public on
              chain.
            </li>
          </ul>

          <h2>Who we share data with</h2>
          <ul>
            <li>
              <strong>Clerk</strong>, authentication. Privacy:{" "}
              <a
                href="https://clerk.com/legal/privacy"
                target="_blank"
                rel="noreferrer"
              >
                clerk.com/legal/privacy
              </a>
              .
            </li>
            <li>
              <strong>Circle</strong>, wallet custody. Privacy:{" "}
              <a
                href="https://www.circle.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                circle.com/legal/privacy-policy
              </a>
              .
            </li>
            <li>
              <strong>Supabase</strong>, database. Privacy:{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                supabase.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Vercel</strong>, hosting. Privacy:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </li>
            <li>
              <strong>Groq</strong>, AI assistant. We send your latest 24 chat
              messages to Groq when you message Billy. Privacy:{" "}
              <a
                href="https://groq.com/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                groq.com/privacy-policy
              </a>
              .
            </li>
          </ul>
          <p>
            We do not sell your data. We do not share it with marketers. We
            share only what&apos;s necessary with the providers above to make
            the product work.
          </p>

          <h2>On-chain data</h2>
          <p>
            Anything you do on Arc (send, receive, swap, bridge) is recorded on
            a public blockchain. Your wallet address, transaction hashes, and
            amounts are visible to anyone using a block explorer. This is true
            of every wallet, not just glidepay.
          </p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Profile, then Delete
              account. This permanently removes your glidepay profile,
              activity, contacts, chat history, and push subscriptions from
              our database and deletes your Clerk auth record. On-chain
              balances stay on Arc, so withdraw them first if you want them.
            </li>
            <li>
              <strong>Export your data.</strong> Email{" "}
              <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>{" "}
              and we&apos;ll send you a JSON dump of everything we have within
              30 days.
            </li>
            <li>
              <strong>Correct your data.</strong> Display name, avatar, and
              pay tag are editable in Profile.
            </li>
          </ul>

          <h2>Testnet</h2>
          <p>
            glidepay currently operates on Arc testnet. Test tokens have no
            real monetary value. When we ship on mainnet we&apos;ll update
            this policy and notify you in-app.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>.
          </p>
        </div>
      </article>
      <Footer appUrl={APP_URL} />
    </>
  );
}
