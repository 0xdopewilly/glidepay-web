# Deploying glidepay-web

This is a **separate Vercel project** from the app. Reasons in the main repo's `MOBILE.md`. Short version: marketing should ship in seconds, the app ships when the app needs to ship.

## One-time setup

### 1. Create the Vercel project

```bash
# from /Users/ibraheembusari/glidepay-web
npx vercel
```

Choose **No** when asked if it links to an existing project. Pick a name like `glidepay-web` so it doesn't collide with the app project.

### 2. Set env vars on Vercel

In Vercel project settings → Environment Variables → add:

```
NEXT_PUBLIC_APP_URL    = https://app.glidepay.cash
NEXT_PUBLIC_SITE_URL   = https://glidepay.cash
```

(While the domain isn't bought yet, leave them as the vercel.app URLs Vercel hands you. Update once DNS is live.)

### 3. Push to GitHub

Create a new GitHub repo `glidepay-web`. From here:

```bash
git remote add origin git@github.com:0xdopewilly/glidepay-web.git
git push -u origin main
```

Then connect the GitHub repo to your Vercel project via Vercel → Project → Git. From then on, every push to `main` deploys automatically.

## Adding the custom domain

Once you've registered `glidepay.cash`:

1. Vercel project settings → **Domains** → add `glidepay.cash` AND `www.glidepay.cash`
2. Vercel gives you DNS records (A + CNAME). Point your registrar (Namecheap / Cloudflare / wherever) at those.
3. SSL provisions automatically within a few minutes.

### Also configure the app subdomain

In the **other** Vercel project (the app):

1. Vercel project settings → Domains → add `app.glidepay.cash`
2. Point DNS at Vercel's records (same registrar)
3. Once it's live, update `NEXT_PUBLIC_APP_URL` here to `https://app.glidepay.cash`

## DNS summary

```
glidepay.cash              A     76.76.21.21          (Vercel marketing project)
www.glidepay.cash          CNAME cname.vercel-dns.com (same project)
app.glidepay.cash          CNAME cname.vercel-dns.com (app project)
```

(Use Vercel's exact records — these are illustrative.)

## Verify deploy

After DNS propagates:

```bash
curl -I https://glidepay.cash
curl -I https://app.glidepay.cash
```

Both should return `200 OK` with `server: Vercel` headers.

## What to test post-deploy

- Landing page loads at `glidepay.cash`
- Nav "Open app" button goes to `app.glidepay.cash`
- Docs pages load (`/docs`, `/docs/universal-receive`, etc.)
- Lighthouse mobile score on `/` should be ≥ 95 (this is a static page; no excuses)
- OG card looks right when you paste the URL into a chat
