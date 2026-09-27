export type FaqItem = { question: string; answer: string };

/** "app.glidepay.cash" from "https://app.glidepay.cash/". */
export function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  }
}

const COST: FaqItem = {
  question: "What does it cost?",
  answer:
    "glidepay doesn't currently charge a fee of its own. Network fees on Arc are paid in USDC, so there's no separate gas token to buy. Swaps run at market rate within a 3% slippage cap, and bridges may include network and bridge fees.",
};

const ADD_MONEY: FaqItem = {
  question: "How do I add money?",
  answer:
    "Open Receive to see your Arc address and QR code. Send USDC or EURC to it on Arc from another wallet, or from an exchange that supports Arc. Or get paid by another glidepay user: share your @paytag or a request link. Whatever the source, make sure it's sent on Arc.",
};

const UNIVERSAL_RECEIVE: FaqItem = {
  question: "What is Universal Receive?",
  answer:
    "A deposit address on another chain, shown in Receive, where USDC bridges to your Arc balance automatically over CCTP V2, with glidepay covering the source-chain gas. It isn't live on any chain yet: it's rolling out starting with Base, Arbitrum and Polygon, with Ethereum later. Senders will use the chain address shown in Receive, not your @paytag.",
};

export function landingFaq(appHost: string): FaqItem[] {
  return [
    {
      question: "What's live on Arc mainnet?",
      answer:
        "Everything in the app except Universal Receive: paying by @paytag, contact, 0x address or QR code; request links; bill splits; payment threads; swaps between USDC, EURC and cirBTC; bridging USDC to Base, Ethereum, Polygon and Arbitrum; auto-save, scheduled sends, the balance ceiling and Savings; and Billy. Balances are real money, and payments on Arc are final.",
    },
    {
      question: "How is glidepay different from a regular crypto wallet?",
      answer:
        "There's no seed phrase and no browser extension. You sign in with email or Google, a Circle smart account on Arc is created for you at first sign-in, and you pay people by @paytag instead of pasting addresses. Circle holds the keys, and money going out is confirmed with your 6-digit PIN.",
    },
    {
      question: "What is Arc?",
      answer:
        "Circle's Layer-1 blockchain for stablecoin payments. USDC is the gas, finality is sub-second, and CCTP V2 connects it to other chains. Arc mainnet launched on 16 September 2026, and glidepay went live on it on 24 September.",
    },
    COST,
    {
      question: "Which tokens are supported?",
      answer:
        'USDC, EURC and cirBTC on Arc, valued at live market prices. EURC and cirBTC are priced at market, not 1:1 with the dollar. Any other token on Arc still shows up, labelled Unverified: it\'s never counted in your balance, but you can still send it. Look-alike "USDC" tokens are flagged Possible scam and hidden by default.',
    },
    ADD_MONEY,
    {
      question: "How do I cash out?",
      answer:
        "Send to any Arc address, including an exchange that supports Arc. Or bridge USDC from Arc to Base, Ethereum, Polygon or Arbitrum, to your own wallet there or someone else's. Money in Savings can be withdrawn back to your balance anytime.",
    },
    {
      question: "What if I send money to the wrong address?",
      answer:
        "Payments on Arc are final and can't be reversed. Check the @paytag or address on the confirm screen before you enter your PIN. If you paid another glidepay user by mistake, ask them to send it back.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Your account is a Circle developer-controlled smart account on Arc. Circle holds the keys, transactions are signed server-side through Circle's wallet infrastructure, and no keys or secrets live in the app. Money only moves when you confirm it with your PIN, or through automations you set up yourself.",
    },
    {
      question: "What is the PIN for?",
      answer:
        "A 6-digit PIN confirms any money going out. It's stored hashed on the server and never sent to the app. If you forget it, you can reset it after re-verifying your email.",
    },
    {
      question: "What if I lose my phone?",
      answer:
        "Sign in on any other device with the same email or Google account. Your keys are with Circle, not on your phone, so there's nothing to recover from the device itself. Money going out still needs your PIN.",
    },
    {
      question: "How do I install the app?",
      answer: `glidepay runs in your browser at ${appHost} and installs to your home screen like an app. On iPhone, open it in Safari, tap Share, then Add to Home Screen. On Android, open it in Chrome and tap Install app. Push alerts for incoming USDC and EURC need the installed app.`,
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes. Closing your account requires your PIN and an empty balance, so send or bridge your money out first.",
    },
    UNIVERSAL_RECEIVE,
    {
      question: "Who is Billy?",
      answer:
        "The in-app AI assistant. Ask Billy to send, request, split, swap or bridge, and it happens in the chat. Every money move shows a confirm card before anything happens. Slash commands are there for power users.",
    },
  ];
}

export const MAINNET_FAQ: FaqItem[] = [
  {
    question: "Is glidepay on mainnet real money?",
    answer:
      "Yes. Since 24 September 2026, glidepay runs on Arc mainnet, and balances are real USDC, EURC and cirBTC. Payments on Arc are final and can't be reversed, so check who you're paying before you confirm.",
  },
  COST,
  ADD_MONEY,
  {
    question: "When does Universal Receive go live?",
    answer:
      "It's rolling out chain by chain, starting with Base, Arbitrum and Polygon, with Ethereum later. It isn't live on any chain yet. Your Receive screen shows a chain's deposit address once that chain is enabled. Until then, add money with USDC or EURC on Arc.",
  },
  {
    question: "Who holds my keys?",
    answer:
      "Circle. Your account is a Circle developer-controlled smart account on Arc. The keys are never shown in the app, and transactions are signed server-side through Circle's wallet infrastructure.",
  },
  {
    question: "Where do I get help?",
    answer:
      "Email support@glidepay.cash with what you tried and what happened. For a payment, include the transaction hash from its Activity row.",
  },
];
