import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Requests & splits",
  description:
    "Getting paid in glidepay: request links and QR codes in USDC or EURC, requesting from an @paytag or an email, splitting a bill with Billy, and payment threads.",
};

export default function Page() {
  return (
    <DocsShell title="Requests & splits">
      <p>
        Three ways to get paid back without sharing an address: a request, a
        bill split, or a payment thread with the person who owes you.
      </p>

      <h2>Request links and QR</h2>
      <p>
        Open <strong>Request</strong>, pick <strong>USDC</strong> or{" "}
        <strong>EURC</strong>, enter the amount and add a note if you like.
        glidepay creates a request link and a QR code for it.
      </p>
      <ul>
        <li>
          <strong>Share the link</strong> in any chat or email. The payer opens
          the pay link and pays the amount you asked for.
        </li>
        <li>
          <strong>Show the QR code</strong> when you&apos;re in the same room.
        </li>
      </ul>

      <h2>Request from a specific person</h2>
      <p>Instead of sharing a link, send the request straight to someone:</p>
      <ul>
        <li>
          <strong>By @paytag</strong>, for someone who already uses glidepay.
        </li>
        <li>
          <strong>By email</strong>, for someone you know by their email
          address.
        </li>
      </ul>
      <p>
        You can also ask Billy: <code>request $20 from @aisha</code>. Billy
        creates the request in the chat and shows a confirm card first.
      </p>

      <h2>Split a bill</h2>
      <p>
        Ask Billy to split it: <code>split $60 with @fifi @khadee</code>. Billy
        splits the total into equal shares, in USDC or EURC, without leaving the
        chat. As with every money move, you see a confirm card before anything
        happens.
      </p>

      <h2>Payment threads</h2>
      <p>
        Every payment and request between you and one person is collected into a
        thread, shown as a conversation. It&apos;s the quickest way to see who
        paid what, and each thread has <strong>Send</strong> and{" "}
        <strong>Request</strong> buttons so you can settle up from there.
      </p>

      <h2>Paying a request</h2>
      <p>
        When someone sends you a pay link, open it and check the amount and
        token before you pay. Money going out needs your 6-digit PIN, and
        payments on Arc are final.
      </p>

      <p>
        See also: <Link href="/docs/send-receive">Send &amp; receive</Link>,{" "}
        <Link href="/docs/billy">Billy</Link>,{" "}
        <Link href="/docs/automations">Automations &amp; Savings</Link>.
      </p>
    </DocsShell>
  );
}
