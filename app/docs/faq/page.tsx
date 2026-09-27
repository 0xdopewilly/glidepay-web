import { Fragment, type ReactNode } from "react";
import { DocsShell } from "@/components/docs-shell";
import { docsFaq, hostOf } from "@/lib/faq";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";

export const metadata = {
  title: "FAQ",
  description:
    "Answers about glidepay on Arc mainnet: real money, fees, adding and cashing out, keys and safety, your account, Billy and automations.",
};

const SUPPORT_EMAIL = "support@glidepay.cash";
const REPO = "github.com/0xdopewilly/glide";

/** Answers are plain strings (shared with the landing page); here the
 * support address and the repo become links. */
function linkify(text: string): ReactNode {
  return text.split(/(support@glidepay\.cash|github\.com\/0xdopewilly\/glide)/).map((part, i) => {
    if (part === SUPPORT_EMAIL) {
      return (
        <a key={i} href={`mailto:${SUPPORT_EMAIL}`}>
          {part}
        </a>
      );
    }
    if (part === REPO) {
      return (
        <a key={i} href={`https://${REPO}`} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function Page() {
  const groups = docsFaq(hostOf(APP_URL));
  return (
    <DocsShell title="FAQ">
      <p>
        Short answers about glidepay on Arc mainnet. Can&apos;t find yours?
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
      {groups.map((group) => (
        <Fragment key={group.title}>
          <h2>{group.title}</h2>
          {group.items.map((item) => (
            <Fragment key={item.question}>
              <h3>{item.question}</h3>
              <p>{linkify(item.answer)}</p>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </DocsShell>
  );
}
