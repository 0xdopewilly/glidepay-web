export type FaqItem = { question: string; answer: string };

export type FaqGroup = { title: string; items: FaqItem[] };

/** "app.glidepay.cash" from "https://app.glidepay.cash/". */
export function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  }
}

// Every answer lives here once. The landing page, the launch note and the
// docs FAQ pick from the same items, so they can never contradict each other.

const REAL_MONEY: FaqItem = {
  question: "Is this real money?",
  answer:
    "Yes. glidepay has run on Arc mainnet since 24 September 2026, and balances are real USDC, EURC and cirBTC. Payments on Arc are final and can't be reversed, so check who you're paying before you confirm.",
};

const WHATS_LIVE: FaqItem = {
  question: "What can I do on glidepay today?",
  answer:
    "Pay anyone by @paytag, contact, 0x address or QR code; request money with a link; split bills; see every payment with a person as a thread; swap between USDC, EURC and cirBTC; bridge USDC to Base, Ethereum, Polygon and Arbitrum; auto-save, schedule payments and set a balance ceiling with Savings; and ask Billy to do any of it for you. Receiving from other chains (Universal Receive) is the one thing still rolling out.",
};

const DIFFERENT: FaqItem = {
  question: "How is glidepay different from a crypto wallet?",
  answer:
    "There's no seed phrase and no browser extension. You sign in with email or Google, a Circle smart account on Arc is created for you at first sign-in, and you pay people by @paytag instead of pasting addresses. Circle holds the keys, and money going out is confirmed with your 6-digit PIN.",
};

const ARC: FaqItem = {
  question: "What is Arc?",
  answer:
    "Circle's Layer-1 blockchain for stablecoin payments. USDC is the gas, finality is sub-second, and CCTP V2 connects it to other chains. Arc mainnet launched on 16 September 2026, and glidepay went live on it on 24 September.",
};

const TOKENS: FaqItem = {
  question: "Which tokens are supported?",
  answer:
    'USDC and EURC, Circle\'s dollar and euro stablecoins, and cirBTC, all on Arc and valued at live market prices: EURC at the euro rate and cirBTC at the bitcoin price, not 1:1 with the dollar. Any other token on Arc still shows up, labelled Unverified. It\'s never counted in your balance, but you can still send it. Look-alike "USDC" tokens are flagged Possible scam and hidden by default.',
};

const ADD_MONEY: FaqItem = {
  question: "How do I add money?",
  answer:
    "Open Receive to see your Arc address and QR code, and send USDC or EURC to it on Arc from another wallet or from an exchange that supports Arc. Or get paid by another glidepay user: share your @paytag or a request link. Whatever the source, make sure it's sent on Arc.",
};

const SPEED: FaqItem = {
  question: "How fast are payments?",
  answer:
    "Payments on Arc settle in seconds, and they're final once they do. Swaps take about as long. Bridges to other chains take longer, because the other chain has to confirm too.",
};

const COST: FaqItem = {
  question: "What does it cost?",
  answer:
    "glidepay doesn't currently charge a fee of its own. Network fees on Arc are paid in USDC, so there's no separate gas token to buy. Swaps run at market rate within a 3% slippage cap, and bridges may include network and bridge fees.",
};

const LIMITS: FaqItem = {
  question: "Are there limits?",
  answer:
    "glidepay doesn't cap how much you send: you can send up to your balance. The same payment to the same person twice within 10 seconds is blocked as a likely double tap. Once Universal Receive is live, deposits from other chains are bridged from $10 on Ethereum and $1 on the other chains.",
};

const CASH_OUT: FaqItem = {
  question: "How do I cash out?",
  answer:
    "Send to any Arc address, including an exchange that supports Arc. Or bridge USDC from Arc to Base, Ethereum, Polygon or Arbitrum, to your own wallet there or someone else's. Money in Savings can be moved back to your balance anytime.",
};

const WRONG_ADDRESS: FaqItem = {
  question: "What if I send money to the wrong address?",
  answer:
    "Payments on Arc are final and can't be reversed, by us or anyone else. Check the @paytag or address on the confirm screen before you enter your PIN. If you paid another glidepay user by mistake, ask them to send it back.",
};

const UNIVERSAL_RECEIVE: FaqItem = {
  question: "What is Universal Receive?",
  answer:
    "A deposit address on another chain, shown in Receive, where USDC bridges to your Arc balance automatically over CCTP V2, with glidepay covering the gas on that chain. It isn't live on any chain yet: it's rolling out, starting with Base, Arbitrum and Polygon, with Ethereum later. Senders will use the chain address shown in Receive, not your @paytag.",
};

const UNIVERSAL_RECEIVE_WHEN: FaqItem = {
  question: "When does Universal Receive go live?",
  answer:
    "It's rolling out chain by chain, starting with Base, Arbitrum and Polygon, with Ethereum later. It isn't live on any chain yet. Your Receive screen shows a chain's deposit address once that chain is enabled. Until then, add money with USDC or EURC on Arc.",
};

const SAFE: FaqItem = {
  question: "Is my money safe?",
  answer:
    "Your account is a Circle developer-controlled smart account on Arc. Circle holds the keys, transactions are signed server-side through Circle's wallet infrastructure, and no keys or secrets live in the app. Money only moves when you confirm it with your PIN, or through automations you set up yourself.",
};

const KEYS: FaqItem = {
  question: "Who holds my keys?",
  answer:
    "Circle. Your account is a Circle developer-controlled smart account on Arc. The keys are never shown in the app, and transactions are signed server-side through Circle's wallet infrastructure.",
};

const EXPORT: FaqItem = {
  question: "Can I export my wallet or keys?",
  answer:
    "No. There's no seed phrase or private key to export, because Circle holds the keys and never shows them. Your money is never locked in, though: you can send it to any Arc address, or bridge USDC to a wallet you control on Base, Ethereum, Polygon or Arbitrum, at any time.",
};

const PIN: FaqItem = {
  question: "What is the PIN for?",
  answer:
    "A 6-digit PIN confirms any money going out. It's stored hashed on the server and never sent to the app. If you forget it, you can reset it after re-verifying your email.",
};

const LOSE_PHONE: FaqItem = {
  question: "What if I lose my phone?",
  answer:
    "Sign in on any other device with the same email or Google account. Your keys are with Circle, not on your phone, so there's nothing to recover from the device itself. Money going out still needs your PIN.",
};

const LOSE_EMAIL: FaqItem = {
  question: "What if I lose access to my email?",
  answer:
    "If you signed up with Google, keep signing in with Google. Otherwise, email support@glidepay.cash from any address. Your email is how you sign in and reset your PIN, so we'll ask you to prove the account is yours before we change anything on it.",
};

const DELETE: FaqItem = {
  question: "Can I delete my account?",
  answer:
    "Yes, from Profile. Closing your account requires your PIN and an empty balance, so send or bridge your money out first.",
};

const SHUTDOWN: FaqItem = {
  question: "What happens to my money if glidepay shuts down?",
  answer:
    "Your money isn't held in a glidepay account. It sits in your own Circle wallet on Arc, and you can move all of it out whenever you like, by sending it to any Arc address or bridging USDC to another chain. If glidepay ever winds down, we'll announce it in the app first, so you can move your money out.",
};

const BILLY: FaqItem = {
  question: "Who is Billy?",
  answer:
    "The in-app AI assistant. Ask Billy to send, request, split, swap or bridge, and it happens in the chat. Every money move shows a confirm card before anything happens. Slash commands are there for power users.",
};

const AUTOMATE: FaqItem = {
  question: "Can glidepay save and pay for me automatically?",
  answer:
    "Yes, from the Automate tab. Save a percentage of every payment you receive into Savings, schedule daily, weekly or monthly payments like rent, or set a balance ceiling that sweeps anything above it into Savings. Automated payments above an amount you choose, or to someone not in your contacts, wait for your approval.",
};

function install(appHost: string): FaqItem {
  return {
    question: "How do I install the app?",
    answer: `glidepay runs in your browser at ${appHost} and installs to your home screen like an app. On iPhone, open it in Safari, tap Share, then Add to Home Screen. On Android, open it in Chrome and tap Install app. Push alerts for incoming USDC and EURC need the installed app.`,
  };
}

const CIRCLE: FaqItem = {
  question: "Who provides the wallet and the stablecoins?",
  answer:
    "Circle. Your wallet is a Circle developer-controlled smart account, USDC and EURC are Circle's stablecoins, Arc is Circle's blockchain, and swaps and bridges run on Circle's App Kit and CCTP V2. glidepay is the app on top.",
};

const OPEN_SOURCE: FaqItem = {
  question: "Is the code open source?",
  answer:
    "The app's code is public at github.com/0xdopewilly/glide, so anyone can read how it works. It doesn't carry an open-source license yet. Issues and pull requests are welcome.",
};

const HELP: FaqItem = {
  question: "Where do I get help?",
  answer:
    "Email support@glidepay.cash with what you tried and what happened. For a payment, include the transaction hash from its Activity row.",
};

export function landingFaq(appHost: string): FaqItem[] {
  return [
    REAL_MONEY,
    WHATS_LIVE,
    DIFFERENT,
    ARC,
    COST,
    TOKENS,
    ADD_MONEY,
    CASH_OUT,
    WRONG_ADDRESS,
    SAFE,
    LOSE_PHONE,
    install(appHost),
    DELETE,
    UNIVERSAL_RECEIVE,
    BILLY,
  ];
}

export const MAINNET_FAQ: FaqItem[] = [
  REAL_MONEY,
  COST,
  ADD_MONEY,
  UNIVERSAL_RECEIVE_WHEN,
  KEYS,
  HELP,
];

/** The full FAQ on /docs/faq, grouped. */
export function docsFaq(appHost: string): FaqGroup[] {
  return [
    { title: "The basics", items: [REAL_MONEY, WHATS_LIVE, DIFFERENT, ARC, TOKENS] },
    {
      title: "Money in and out",
      items: [ADD_MONEY, SPEED, COST, LIMITS, CASH_OUT, WRONG_ADDRESS, UNIVERSAL_RECEIVE],
    },
    {
      title: "Your account and safety",
      items: [SAFE, KEYS, EXPORT, PIN, LOSE_PHONE, LOSE_EMAIL, DELETE, SHUTDOWN],
    },
    { title: "Features", items: [BILLY, AUTOMATE, install(appHost)] },
    { title: "About glidepay", items: [CIRCLE, OPEN_SOURCE, HELP] },
  ];
}
