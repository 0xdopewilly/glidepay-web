import type { Metadata } from "next";
import { Footer } from "@/components/footer";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get in touch with the glidepay team. Bug reports, billing questions, account help.",
};

export default function SupportPage() {
  return (
    <>
      <article className="mx-auto max-w-3xl px-5 sm:px-8 pt-32 pb-24 sm:pt-40">
        <p className="eyebrow mb-4">GET HELP</p>
        <h1 className="font-bold text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.03em] leading-[1.05] text-[#0F172A]">
          Support
        </h1>
        <p className="mt-4 text-sm text-[#64748B]">
          Last updated: 2026-06-01.
        </p>
        <div className="prose-doc mt-10 space-y-6 text-[15px] leading-[1.7] text-[#0F172A]/75">
          <p>
            Need help with glidepay? We&apos;re a small team and respond as
            fast as we can. Below are the fastest ways to reach us depending on
            what you need.
          </p>

          <h2>Contact us</h2>
          <ul>
            <li>
              <strong>General help</strong>:{" "}
              <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>
            </li>
            <li>
              <strong>Bug reports</strong>:{" "}
              <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>.
              Please include what you tried, what you expected, what happened,
              and a screenshot if possible.
            </li>
            <li>
              <strong>Privacy and data requests</strong>:{" "}
              <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>
            </li>
            <li>
              <strong>Security disclosures</strong>:{" "}
              <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>.
              Please do not disclose vulnerabilities publicly before contacting
              us.
            </li>
          </ul>

          <h2>Common questions</h2>

          <h3>What is testnet?</h3>
          <p>
            glidepay runs on Arc testnet, a sandbox version of the blockchain
            used for development. Test tokens (USDC, EURC, cirBTC) on testnet
            have no real monetary value. You can play with all features
            risk-free.
          </p>

          <h3>I sent money and the recipient did not receive it</h3>
          <p>
            Check Activity for the transaction status. If it shows
            &quot;failed&quot; or &quot;pending&quot; for more than a few
            minutes, email support with the transaction hash (you can copy it
            from the Activity row).
          </p>

          <h3>I lost access to my email</h3>
          <p>
            glidepay accounts are tied to your email via Clerk. If you have
            lost access, email{" "}
            <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>{" "}
            from a related address with as much detail as you can. We will
            work with you to verify identity.
          </p>

          <h3>How do I withdraw my funds before deleting my account?</h3>
          <p>
            Use Bridge (Arc to another chain) or Send (any wallet address) to
            move your stablecoins out of your glidepay-managed wallet before
            deleting. Once deleted, your account-side data is gone but the
            on-chain balance remains, just orphaned from your glidepay login.
          </p>

          <h3>How can I follow updates?</h3>
          <p>
            We post product updates and announcements in-app. We do not have a
            social or newsletter yet, coming when we hit mainnet.
          </p>
        </div>
      </article>
      <Footer appUrl={APP_URL} />
    </>
  );
}
