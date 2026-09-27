import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Automations & Savings",
  description:
    "The Automate tab in glidepay: auto-save a percentage of every payment, scheduled and recurring sends, a balance ceiling, approval rules, and a separate Savings account on Arc.",
};

export default function Page() {
  return (
    <DocsShell title="Automations & Savings">
      <p>
        The <strong>Automate</strong> tab runs your money on rules you set once:
        save a share of what comes in, pay recurring bills on schedule, and keep
        your spending balance under a ceiling. Approval rules decide which
        automated payments wait for you first.
      </p>

      <h2>Savings</h2>
      <p>
        Savings is a separate account on Arc, with its own Circle wallet. Money
        you move there is kept apart from your everyday balance, and you can
        withdraw it back to your balance anytime.
      </p>
      <p>Auto-save and the balance ceiling both move money into Savings.</p>

      <h2>Auto-save</h2>
      <p>
        Pick a percentage. Every payment you receive puts that share into
        Savings automatically. Set it to 10% and a $50 payment moves $5 to
        Savings.
      </p>

      <h2>Scheduled sends</h2>
      <p>
        Set up a payment to repeat daily, weekly or monthly. Use it for rent, an
        allowance, a subscription, or anything else you pay on a regular cycle.
      </p>

      <h2>Balance ceiling</h2>
      <p>
        Choose an amount to keep your balance at or under. Anything above the
        ceiling sweeps into Savings, so your everyday balance stays at or under
        the level you picked.
      </p>

      <h2>Approval rules</h2>
      <p>
        Some automated payments wait for you. An automated payment needs your
        approval when:
      </p>
      <ul>
        <li>it&apos;s above an amount you set, or</li>
        <li>it&apos;s going to someone who isn&apos;t in your contacts.</li>
      </ul>
      <p>Everything else runs on its own, exactly as you set it up.</p>

      <h2>Good to know</h2>
      <ul>
        <li>
          Automated payments are real payments on Arc, and payments on Arc are
          final. Double-check the recipient and amount when you create one.
        </li>
        <li>
          glidepay doesn&apos;t currently charge a fee of its own for
          automations. Network fees on Arc are paid in USDC. See{" "}
          <Link href="/docs/fees">Fees &amp; limits</Link>.
        </li>
      </ul>

      <p>
        See also: <Link href="/docs/requests">Requests &amp; splits</Link>,{" "}
        <Link href="/docs/security">Security model</Link>.
      </p>
    </DocsShell>
  );
}
