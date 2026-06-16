import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Universal Receive",
};

export default function Page() {
  return (
    <DocsShell title="Universal Receive">
      <p>
        Universal Receive is glidepay&apos;s flagship feature: one handle, any
        chain. USDC sent to your glidepay address from Ethereum, Base, Polygon,
        or Arbitrum automatically lands in your wallet on Arc, usually within
        60 seconds.
      </p>

      <h2>For the sender</h2>
      <p>
        Open whatever wallet they use (Coinbase, MetaMask, Phantom, etc.).
        Send USDC to your glidepay address on whichever chain they hold USDC
        on. They don&apos;t need to know Arc exists.
      </p>

      <h2>For the receiver (you)</h2>
      <p>
        A push notification arrives:{" "}
        <strong>&quot;You received $20 USDC via Base.&quot;</strong>
      </p>
      <p>
        The money is on Arc, ready to spend. Your Activity feed shows a{" "}
        <code>VIA BASE</code> badge so the cross-chain trail is visible if you
        want it, hidden if you don&apos;t.
      </p>

      <h2>What actually happens under the hood</h2>
      <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-[#1F2937]/72">
        <li>Inbound USDC at the user&apos;s receive address triggers a Circle webhook.</li>
        <li>Our handler claims the event atomically (dedup against retries).</li>
        <li>If the user&apos;s source-chain wallet is low on native gas, our
          gas service wallet tops it up automatically (~$0.0005).</li>
        <li>We call CCTP V2 Fast Transfer to burn USDC on the source chain
          and mint it on Arc.</li>
        <li>One push notification fires when the mint lands.</li>
      </ol>

      <h2>Supported chains</h2>
      <ul>
        <li><strong>Base Sepolia</strong>. Fastest, lowest gas.</li>
        <li><strong>Ethereum Sepolia</strong>. Most expensive (L1), still ~$0.01.</li>
        <li><strong>Polygon Amoy</strong>. Native MATIC for gas.</li>
        <li><strong>Arbitrum Sepolia</strong>. L2, fast and cheap.</li>
      </ul>
      <p>
        Solana support is on the roadmap. It uses Circle&apos;s Solana CCTP path.
      </p>

      <h2>What about gas?</h2>
      <p>
        End users never fund gas. Glidepay operates a small ETH/MATIC service
        wallet on each source chain that refills user wallets just before
        each sweep. On mainnet this will be a metered service; on testnet
        it&apos;s free.
      </p>

      <h2>Why this works only on Arc</h2>
      <p>
        Arc is a first-class citizen on Circle&apos;s CCTP V2, the same
        protocol that powers cross-chain USDC for the rest of the ecosystem.
        Combined with Arc&apos;s sub-second finality and USDC-as-gas, it&apos;s
        the only chain where this UX feels native instead of bridged.
      </p>

      <h2>Limits</h2>
      <ul>
        <li>Median sweep time on testnet: ~60 seconds end-to-end</li>
        <li>Worst case (cold start + Ethereum mainnet block time): ~3 minutes</li>
        <li>No upper limit on send amount (testnet)</li>
        <li>Sender pays their source-chain network fee normally; glidepay pays the destination mint fee</li>
      </ul>

      <p>
        See also: <Link href="/docs/architecture">Architecture</Link>,{" "}
        <Link href="/docs/security">Security model</Link>.
      </p>
    </DocsShell>
  );
}
