import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://glide-arc.vercel.app";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://glidepay.cash";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#062448" },
  ],
};

const SITE_TITLE = "glidepay is live on Arc mainnet";
const SITE_DESCRIPTION =
  "glidepay is live on Arc mainnet. A Cash App for stablecoins: pay and request USDC and EURC by @paytag, split bills, swap to cirBTC, bridge USDC to four chains and automate your savings. No seed phrase, no gas token to buy.";
const SHARE_DESCRIPTION =
  "Live on Arc mainnet. Pay anyone by @paytag in USDC or EURC, with no seed phrase and no gas token to buy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s, glidepay",
  },
  description: SITE_DESCRIPTION,
  applicationName: "glidepay",
  keywords: [
    "USDC wallet",
    "stablecoin payments",
    "Arc mainnet",
    "Arc blockchain",
    "Circle wallet",
    "CCTP",
    "crypto payments",
    "EURC",
    "cross-chain stablecoin",
  ],
  authors: [{ name: "glidepay" }],
  openGraph: {
    type: "website",
    siteName: "glidepay",
    title: SITE_TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SHARE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <LenisProvider>
          <Nav appUrl={APP_URL} />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
