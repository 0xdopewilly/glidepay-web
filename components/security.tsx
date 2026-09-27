import {
  AlertTriangle,
  KeyRound,
  ListChecks,
  LockKeyhole,
  MailCheck,
  ShieldAlert,
  ShieldCheck,
  UserX,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

type Item = {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    icon: KeyRound,
    title: "Keys stay with Circle",
    body: "Your account is a Circle developer-controlled smart account. Circle holds the keys, and they are never shown in the app. There is no seed phrase to lose or leak.",
  },
  {
    icon: LockKeyhole,
    title: "A PIN for money out",
    body: "Money going out needs your 6-digit PIN. It is stored hashed on the server and never sent to the app.",
  },
  {
    icon: MailCheck,
    title: "PIN reset checks your email",
    body: "Forgot your PIN? Resetting it means re-verifying your email first.",
  },
  {
    icon: ListChecks,
    title: "Approvals on automations",
    body: "Automated payments above an amount you set, or to someone who isn’t in your contacts, wait for your approval.",
  },
  {
    icon: ShieldAlert,
    title: "Scam tokens flagged",
    body: "Look-alike “USDC” tokens are flagged Possible scam and hidden by default. Unknown tokens are labelled Unverified and never counted in your balance.",
  },
  {
    icon: UserX,
    title: "Closing takes your PIN",
    body: "Closing your account needs your PIN and an empty balance, so nothing is left behind by mistake.",
  },
];

/** Security facts, dark band. Used on the landing page and the mainnet note
 * (which passes its own heading). */
export function Security({
  title = "Security by design.",
  titleMuted = "Keys never touch the app.",
}: {
  title?: string;
  titleMuted?: string;
}) {
  return (
    <section
      id="security"
      data-theme="dark"
      className="scroll-mt-20 border-t border-[rgba(255,255,255,0.08)] bg-[#062448] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#FFFFFF]" />
            <span className="eyebrow">SECURITY</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#FFFFFF]">
            {title}
            <span className="block text-[rgba(255,255,255,0.65)]">
              {titleMuted}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FFFFFF]/70 sm:text-lg">
            Transactions are signed server-side through Circle&apos;s wallet
            infrastructure. No keys or secrets live in the app, and nothing
            leaves your balance without your PIN or a rule you set up.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#0A2F5C] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#062448]">
                    <Icon
                      className="h-4 w-4 text-[#FFFFFF]"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-[#FFFFFF]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#FFFFFF]/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={80}>
          <div className="mt-5 flex items-start gap-3 rounded-3xl border border-[rgba(255,255,255,0.14)] px-6 py-5">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-[#FFFFFF]"
              strokeWidth={2.25}
              aria-hidden
            />
            <p className="text-sm leading-relaxed text-[#FFFFFF]/75">
              <strong className="font-semibold text-[#FFFFFF]">
                Payments on Arc are final.
              </strong>{" "}
              They can&apos;t be reversed, so check the @paytag or address on
              the confirm screen before you enter your PIN.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            <Link href="/docs/security" className="btn-ghost">
              Read the security model
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
