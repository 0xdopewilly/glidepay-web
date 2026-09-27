import { DocsShell } from "@/components/docs-shell";
import Link from "next/link";

export const metadata = {
  title: "Getting started",
  description:
    "Get started with glidepay on Arc mainnet: sign in with email or Google, claim your @paytag, add money, install the app and make your first payment.",
};

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export default function Page() {
  const appHost = APP_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <DocsShell title="Getting started">
      <p>
        glidepay is a mobile-first stablecoin wallet, live on Arc mainnet.
        Balances are real USDC, EURC and cirBTC. There&apos;s no seed phrase
        and no wallet extension: you sign in like any other app.
      </p>

      <h2>1. Open the app</h2>
      <p>
        Go to{" "}
        <Link href={APP_URL} target="_blank" rel="noreferrer">
          {appHost}
        </Link>{" "}
        in your phone&apos;s browser. It works right away in the browser, and
        you can install it to your home screen in step 5.
      </p>

      <h2>2. Sign in</h2>
      <p>
        Use email or Google. At your first sign-in, glidepay creates a Circle
        developer-controlled smart account on Arc for you. Circle holds the
        keys, and they are never shown in the app, so there&apos;s nothing to
        write down or back up.
      </p>

      <h2>3. Claim your @paytag</h2>
      <p>
        Pick a unique <code>@paytag</code>. It&apos;s your handle, so people
        can pay you by name instead of by a 0x address. You can skip this and
        claim it later from <strong>Profile</strong>.
      </p>

      <h2>4. Add money</h2>
      <p>
        Open the in-app{" "}
        <Link href={`${APP_URL}/receive`} target="_blank" rel="noreferrer">
          Receive
        </Link>{" "}
        screen for your Arc address and QR code. Then either:
      </p>
      <ul>
        <li>
          <strong>Send USDC or EURC on Arc</strong> to that address from
          another wallet, or from an exchange that supports Arc.
        </li>
        <li>
          <strong>Get paid by another glidepay user.</strong> Share your
          @paytag, a{" "}
          <Link href="/docs/requests">request link</Link>, or your QR code.
        </li>
      </ul>
      <p>
        This is real money, so make sure it&apos;s sent on Arc. Tokens other
        than USDC, EURC and cirBTC still show up, labelled{" "}
        <strong>Unverified</strong>, but aren&apos;t counted in your balance.
      </p>

      <h2>5. Install it to your home screen</h2>
      <p>
        glidepay installs to your home screen like an app. Push alerts for
        incoming USDC and EURC need the installed app.
      </p>
      <ul>
        <li>
          <strong>iPhone:</strong> open {appHost} in Safari, tap{" "}
          <strong>Share</strong>, then <strong>Add to Home Screen</strong>.
        </li>
        <li>
          <strong>Android:</strong> open {appHost} in Chrome and tap{" "}
          <strong>Install app</strong>.
        </li>
      </ul>

      <h2>6. Make your first payment</h2>
      <p>
        Tap <strong>Send</strong> and type the amount on the keypad. Pick an
        @paytag, a contact or a 0x address, or scan a QR code, then confirm
        with your 6-digit PIN. Payments on Arc are final and can&apos;t be
        reversed, so check the recipient before you confirm.
      </p>

      <h2>Coming next: Universal Receive</h2>
      <p>
        Universal Receive will give you a deposit address on other chains, and
        USDC sent there will bridge to your Arc balance automatically. It
        isn&apos;t live on any chain yet. It&apos;s rolling out starting with
        Base, Arbitrum and Polygon, with Ethereum later, and your Receive
        screen shows a chain&apos;s address only once it&apos;s enabled. See{" "}
        <Link href="/docs/universal-receive">Universal Receive</Link>.
      </p>

      <h2>Next</h2>
      <ul>
        <li>
          <Link href="/docs/billy">Ask Billy to do things for you</Link>. Try
          &quot;split $60 with @fifi and @khadee&quot;.
        </li>
        <li>
          <Link href="/docs/automations">Set up auto-save and scheduled sends</Link>
        </li>
        <li>
          <Link href="/docs/fees">See what things cost</Link>
        </li>
        <li>
          <Link href="/docs/send-receive">Send &amp; receive deep-dive</Link>
        </li>
      </ul>
    </DocsShell>
  );
}
