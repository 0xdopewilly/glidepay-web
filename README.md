# glidepay-web

Marketing site + documentation for [glidepay](https://glide-arc.vercel.app), the stablecoin wallet on Arc.

Lives at `glidepay.cash` (root) — separate from the app at `app.glidepay.cash`.

```
glidepay.cash               → this site (marketing + docs)
app.glidepay.cash           → the app (https://github.com/0xdopewilly/glide)
```

## Stack

- **Next.js 16** (App Router, static export-friendly)
- **Tailwind v4** with brand tokens mirrored from the app
- **Lenis** for buttery scroll
- **IntersectionObserver-based** reveal-on-scroll (no framer-motion bloat)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configure the app URL

The site links to the app via the `NEXT_PUBLIC_APP_URL` env var. Defaults to `https://glide-arc.vercel.app`.

For local dev, create `.env.local`:

```
NEXT_PUBLIC_APP_URL=https://app.glidepay.cash
NEXT_PUBLIC_SITE_URL=https://glidepay.cash
```

## Deploy

See [DEPLOY.md](./DEPLOY.md).

## Structure

```
app/
├─ layout.tsx              ← root + nav + footer + Lenis
├─ page.tsx                ← landing (hero + UR + how + why + Billy + CTA)
├─ globals.css             ← brand tokens + utility classes
└─ docs/
   ├─ page.tsx             ← docs index
   ├─ getting-started/
   ├─ universal-receive/
   ├─ send-receive/
   ├─ swap-bridge/
   ├─ billy/
   ├─ architecture/
   ├─ security/
   └─ faq/

components/
├─ nav.tsx                 ← top nav (sticky, blur-on-scroll)
├─ footer.tsx
├─ hero.tsx                ← landing hero + phone mockup
├─ universal-receive.tsx   ← the killer-feature section
├─ how-it-works.tsx
├─ why-arc.tsx
├─ billy.tsx               ← chat-mockup section
├─ cta.tsx
├─ docs-shell.tsx          ← docs sidebar layout
├─ reveal.tsx              ← IntersectionObserver fade-up wrapper
└─ lenis-provider.tsx
```

Everything reveals on scroll once. Once shown, it stays.
