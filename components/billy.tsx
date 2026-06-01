import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Billy() {
  return (
    <section className="relative border-t border-white/5 px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">Meet Billy</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.5rem]">
              Just ask.{" "}
              <span className="bg-gradient-to-r from-white to-[#8aa5c2] bg-clip-text text-transparent">
                Billy moves money.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Glidepay&apos;s in-app AI assistant. Send, request, swap, bridge,
              and split bills conversationally — no taps through screens, no
              hunting for buttons. Confirm with a button before any money
              moves. Slash commands for power users.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-7 space-y-2.5 text-sm text-white/75">
              {[
                '"Split $60 with @fifi and @khadee"',
                '"Send $5 to @aisha"',
                '"Swap $10 to EURC"',
                '"How does Universal Receive work?"',
              ].map((q) => (
                <li
                  key={q}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/85"
                  style={{ marginRight: 8 }}
                >
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white">
                <Sparkles
                  className="h-5 w-5 text-[#041f3d]"
                  strokeWidth={2.5}
                />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-white">
                  Billy
                </p>
                <p className="text-[11px] font-medium text-white/55">
                  Send, swap, bridge. Just ask.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <UserBubble text="Split $60 with @fifi and @khadee" />
              <BillyBubble
                text='OK, $20 each from @fifi and @khadee (your $20 share is covered). Send the requests?'
              />
              <UserBubble text="Yes" />
              <ConfirmCard amount="$20.00" to="2 friends" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-white px-3.5 py-2 text-sm font-medium text-[#041f3d]">
        {text}
      </div>
    </div>
  );
}

function BillyBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.05] px-3.5 py-2 text-sm text-white">
        {text}
      </div>
    </div>
  );
}

function ConfirmCard({ amount, to }: { amount: string; to: string }) {
  return (
    <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5">
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">
        Confirm
      </p>
      <p className="mt-1.5 text-base font-bold tracking-tight text-white">
        Request {amount} each from {to}
      </p>
      <div className="mt-3 flex gap-2">
        <span className="flex-1 rounded-full bg-white py-2 text-center text-[11px] font-bold text-[#041f3d]">
          Confirm
        </span>
        <span className="flex-1 rounded-full border border-white/15 py-2 text-center text-[11px] font-bold text-white">
          Cancel
        </span>
      </div>
    </div>
  );
}
