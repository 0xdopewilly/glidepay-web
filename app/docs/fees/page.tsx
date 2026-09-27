import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Fees & limits",
  description:
    "What glidepay costs on Arc mainnet: no glidepay fee today, Arc network fees in USDC, swaps within a 3% slippage cap, bridge fees, sweep minimums and finality.",
};

export default function Page() {
  return (
    <DocsShell title="Fees & limits">
      <p>
        glidepay doesn&apos;t currently charge a fee of its own. What you can
        pay are network costs: the fee to settle a payment on Arc, the market
        rate on a swap, and the network and bridge fees when USDC leaves Arc.
      </p>

      <h2>At a glance</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">What</th>
            <th scope="col">What you pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>glidepay fee</td>
            <td>None today.</td>
          </tr>
          <tr>
            <td>Payments on Arc</td>
            <td>The Arc network fee, paid in USDC.</td>
          </tr>
          <tr>
            <td>Swaps</td>
            <td>Market rate, within a 3% slippage cap.</td>
          </tr>
          <tr>
            <td>Bridging USDC out</td>
            <td>Network and bridge fees may apply.</td>
          </tr>
          <tr>
            <td>Universal Receive (rolling out)</td>
            <td>
              glidepay covers the source-chain gas. Minimum sweep $10 from
              Ethereum, $1 from the other chains.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Network fees on Arc</h2>
      <p>
        Arc uses USDC as its gas, so network fees are paid in USDC. There is no
        separate gas token to buy, hold or top up.
      </p>

      <h2>Swaps</h2>
      <p>
        Swaps between USDC, EURC and cirBTC run through Circle App Kit at the
        market rate, with slippage capped at 3%. EURC and cirBTC are priced at
        market, not 1:1 with the dollar, so check the quote before you confirm.
        See <Link href="/docs/swap-bridge">Swap &amp; bridge</Link>.
      </p>

      <h2>Bridges</h2>
      <p>
        Bridge moves USDC from Arc to Base, Ethereum, Polygon or Arbitrum over
        Circle CCTP V2, using App Kit. Bridges may include network and bridge
        fees, so check the details before you confirm.
      </p>

      <h2>Universal Receive sweeps</h2>
      <p>
        <strong>Rolling out, not live yet.</strong> When a chain is enabled,
        USDC sent to your deposit address on that chain bridges to your Arc
        balance automatically, and glidepay covers the source-chain gas.
      </p>
      <ul>
        <li>Minimum sweep from Ethereum: $10</li>
        <li>Minimum sweep from Base, Arbitrum and Polygon: $1</li>
      </ul>
      <p>
        See <Link href="/docs/universal-receive">Universal Receive</Link> for
        the rollout order.
      </p>

      <h2>Finality</h2>
      <p>
        Arc has sub-second finality, and payments on Arc are final. glidepay
        can&apos;t reverse a payment once it settles, so check the @paytag or
        address on the confirm screen before you enter your PIN.
      </p>

      <h2>Limits you set</h2>
      <ul>
        <li>
          <strong>Approval threshold.</strong> Automated payments above an
          amount you choose wait for your approval. See{" "}
          <Link href="/docs/automations">Automations &amp; Savings</Link>.
        </li>
        <li>
          <strong>Balance ceiling.</strong> Keep your balance at or under an
          amount and sweep the excess into Savings.
        </li>
      </ul>

      <p>
        Questions about a charge? Email{" "}
        <a href="mailto:support@glidepay.cash">support@glidepay.cash</a> with
        the transaction hash from its Activity row.
      </p>
    </DocsShell>
  );
}
