import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Billy (AI assistant)",
};

export default function Page() {
  return (
    <DocsShell title="Billy">
      <p>
        Billy is glidepay&apos;s in-app AI assistant. He moves money on your
        behalf (sends, requests, splits, swaps, bridges) through plain
        conversation. Tap the sparkle tab.
      </p>

      <h2>What you can ask</h2>
      <ul>
        <li>&quot;Send $5 to @khadee&quot;</li>
        <li>&quot;Swap $10 to EURC&quot;</li>
        <li>&quot;Split $60 with @fifi and @khadee&quot;</li>
        <li>&quot;Bridge $5 to Base&quot;</li>
        <li>&quot;Request $20 from @aisha&quot;</li>
        <li>&quot;What is glidepay?&quot;</li>
        <li>&quot;How does Universal Receive work?&quot;</li>
      </ul>

      <h2>Safety</h2>
      <p>
        Every money action that moves funds <em>out</em> of your wallet (send,
        request, split) shows a{" "}
        <strong>Confirm / Cancel</strong> card before anything happens. Billy
        can hallucinate; the confirm card is the seatbelt.
      </p>
      <p>
        Saying any of <em>stop</em>, <em>cancel</em>, <em>don&apos;t</em>,{" "}
        <em>nevermind</em>, <em>wait</em>, or <em>abort</em> in chat hard-stops
        all money actions for that turn, even if the LLM tries to fire one.
      </p>

      <h2>Slash commands (power users)</h2>
      <p>
        Skip the LLM entirely. Commands are parsed deterministically. Zero
        cost, zero hallucination risk:
      </p>
      <ul>
        <li>
          <code>/send 5 @khadee</code>. Send $5 to a pay tag.
        </li>
        <li>
          <code>/swap 10</code>. Swap $10 to EURC.
        </li>
        <li>
          <code>/bridge 5 base</code>. Bridge to Base.
        </li>
        <li>
          <code>/request 20 @aisha</code>. Ask Aisha to pay you.
        </li>
        <li>
          <code>/balance</code>, <code>/activity</code>, <code>/receive</code>.
          Open those screens.
        </li>
        <li>
          <code>/help</code>. List all commands.
        </li>
      </ul>

      <h2>Did-you-mean</h2>
      <p>
        If you misspell a recipient (e.g. <code>@khade</code>), Billy
        fuzzy-matches your contacts and Glidepay usernames and suggests the
        closest matches:{" "}
        <em>&quot;I couldn&apos;t find @khade. Did you mean @khadee?&quot;</em>
      </p>

      <h2>Try again</h2>
      <p>
        Failed sends show a{" "}
        <strong>Try again</strong> button that re-injects the original prompt
        with the actual error reason. No retyping.
      </p>

      <p>
        See also: <Link href="/docs/send-receive">Send & receive</Link>,{" "}
        <Link href="/docs/security">Security model</Link>.
      </p>
    </DocsShell>
  );
}
