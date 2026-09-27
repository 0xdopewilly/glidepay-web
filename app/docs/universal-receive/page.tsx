import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Universal Receive",
  description:
    "Universal Receive is rolling out: a deposit address on other chains whose USDC bridges to your Arc balance over CCTP V2. Rollout order, sweep minimums and how it works.",
};

export default function Page() {
  return (
    <DocsShell title="Universal Receive">
      <p>
        Universal Receive gives you a deposit address on other chains. USDC
        sent to it bridges to your Arc balance automatically over CCTP V2.
      </p>
      <p>
        <strong>It isn&apos;t live on any chain yet.</strong> It&apos;s rolling
        out chain by chain, starting with Base, Arbitrum and Polygon, with
        Ethereum later. Your Receive screen shows a chain&apos;s deposit
        address only once that chain is enabled. Until then, add money with
        USDC or EURC on Arc.
      </p>

      <h2>For the sender</h2>
      <p>
        They use whatever wallet holds their USDC and send it to{" "}
        <strong>your deposit address for their chain</strong>, copied from
        your Receive screen. Not to your @paytag: each chain has its own
        address, so share the one for the chain they&apos;re sending from.
        They don&apos;t need to know Arc exists.
      </p>

      <h2>For the receiver (you)</h2>
      <p>
        Once a chain is live and a sweep lands, a push notification arrives
        on the installed app:{" "}
        <strong>&quot;You received $20 USDC via Base.&quot;</strong>
      </p>
      <p>
        The money is on Arc, ready to spend. Your Activity feed shows a{" "}
        <code>VIA BASE</code> badge so the cross-chain trail is visible if you
        want it, hidden if you don&apos;t.
      </p>

      <h2>What actually happens under the hood</h2>
      <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-[#062448]/72">
        <li>Inbound USDC at the user&apos;s receive address triggers a Circle webhook.</li>
        <li>Our handler claims the event atomically (dedup against retries).</li>
        <li>If the user&apos;s source-chain wallet is low on native gas, our
          gas service wallet tops it up automatically.</li>
        <li>We call CCTP V2 Fast Transfer to burn USDC on the source chain
          and mint it on Arc.</li>
        <li>One push notification fires when the mint lands.</li>
      </ol>

      <h2>Rollout order</h2>
      <ul>
        <li><strong>Base</strong>. First. Minimum sweep $1.</li>
        <li><strong>Arbitrum</strong>. First. Minimum sweep $1.</li>
        <li><strong>Polygon</strong>. First. Minimum sweep $1.</li>
        <li><strong>Ethereum</strong>. Later. The most expensive chain to sweep from, so its minimum is $10.</li>
      </ul>

      <h2>What about gas?</h2>
      <p>
        You never fund gas: glidepay covers the source-chain gas for each
        sweep, from a service wallet on each source chain. glidepay
        doesn&apos;t currently charge for this.
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
        <li>Minimum sweep: $10 from Ethereum, $1 from Base, Polygon, and Arbitrum; smaller deposits wait on the Receive screen until they add up</li>
        <li>Chains go live one at a time; only send on a chain your Receive screen shows an address for</li>
        <li>Sender pays their source-chain network fee normally; glidepay pays the destination mint fee</li>
      </ul>

      <p>
        See also: <Link href="/docs/architecture">Architecture</Link>,{" "}
        <Link href="/docs/security">Security model</Link>.
      </p>
    </DocsShell>
  );
}
