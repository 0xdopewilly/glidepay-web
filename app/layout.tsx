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
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#060B1C" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "glidepay, money like a text",
    template: "%s, glidepay",
  },
  description:
    "A Cash App for stablecoins. Send and receive USDC, EURC, and cirBTC on Arc, Circle's payments chain.",
  applicationName: "glidepay",
  keywords: [
    "USDC wallet",
    "stablecoin payments",
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
    title: "glidepay, money like a text",
    description:
      "Send and receive stablecoins instantly. A Cash App for USDC on Arc.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "glidepay",
    description:
      "Send and receive stablecoins instantly. A Cash App for USDC on Arc.",
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
