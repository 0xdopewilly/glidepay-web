import { DocsShell } from "@/components/docs-shell";

export const metadata = {
  title: "FAQ",
};

export default function Page() {
  return (
    <DocsShell title="FAQ">
      <h2>Is this real money?</h2>
      <p>
        No. Glidepay is currently on Arc <em>Testnet</em>. Tokens here have no
        monetary value. Mainnet is on the roadmap.
      </p>

      <h2>Do I need a wallet extension?</h2>
      <p>
        No. No MetaMask, no Phantom, no &quot;Connect Wallet&quot; pop-up.
        Glidepay creates a Circle smart-account for you in the background when
        you sign in with email or Google.
      </p>

      <h2>What if I lose access to my email?</h2>
      <p>
        Email{" "}
        <a href="mailto:support@glidepay.cash">support@glidepay.cash</a>. We
        coordinate with Clerk on recovery — we&apos;ll verify identity through
        a related email and help you regain access.
      </p>

      <h2>Can I export my wallet?</h2>
      <p>
        Not today. Server-custodial wallets via Circle don&apos;t expose
        private keys — that&apos;s the point. If/when Circle adds a key-export
        path for end users, we&apos;ll plug it in.
      </p>

      <h2>What happens if glidepay shuts down?</h2>
      <p>
        Circle still holds your wallet. We&apos;d publish a migration guide
        for moving funds to a self-custodial wallet via Circle&apos;s API or
        via the in-app Bridge feature. Bridge funds to Base / Ethereum / etc.
        before deleting your account if you want them under your own keys.
      </p>

      <h2>Why USDC, EURC, and cirBTC?</h2>
      <p>
        These are the three stablecoins live on Arc testnet. USDC and EURC are
        Circle&apos;s USD and EUR-pegged stablecoins. cirBTC is Circle&apos;s
        BTC-backed token. As Circle expands Arc&apos;s token set, we&apos;ll
        add support.
      </p>

      <h2>Is glidepay regulated?</h2>
      <p>
        No, and it doesn&apos;t need to be on testnet — no real money moves.
        On mainnet, this depends on jurisdiction and the eventual product
        scope. We&apos;ll surface the relevant licensing as we work through
        it.
      </p>

      <h2>Why &quot;Billy&quot;?</h2>
      <p>
        Named after Billy Luedtke, founder of Intuition. The product owner is
        a longtime fan of the work, and naming the assistant after someone
        whose taste he respects felt right.
      </p>

      <h2>Open source?</h2>
      <p>
        The app code lives at{" "}
        <a
          href="https://github.com/0xdopewilly/glide"
          target="_blank"
          rel="noreferrer"
        >
          github.com/0xdopewilly/glide
        </a>
        . Not currently MIT-licensed, but PRs and issues are welcome.
      </p>
    </DocsShell>
  );
}
