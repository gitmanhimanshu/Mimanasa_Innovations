# Mimanasa Innovations — Corporate Website

Premium marketing website built with **Next.js 15 (App Router)**, React 19, Tailwind CSS,
framer-motion and next-themes. Dark/light mode, glassmorphism, scroll animations, fully responsive, SEO-ready.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

> On Windows if your shell has `NODE_ENV=development` set globally, run a **production build** with:
> `set NODE_ENV=production && npm run build` (PowerShell: `$env:NODE_ENV="production"; npm run build`).
> Vercel always builds with `NODE_ENV=production`, so deploys are unaffected.

## Deploy to Vercel (dashboard)

1. Go to **https://vercel.com/new**.
2. **Import** the GitHub repo `gitmanhimanshu/Mimanasa_Innovations`.
3. Vercel auto-detects **Next.js** — leave all settings default:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Install Command: `npm install`
   - Output Directory: *(leave empty — Next.js managed)*
4. **No environment variables are required.**
5. Click **Deploy**. Done — you get a `*.vercel.app` URL.

`vercel.json` already pins the framework, build/install commands, India region (`bom1`) and security headers.

## Custom domain

Project → **Settings → Domains** → add `mimanasa.online` (or a subdomain) and follow the DNS steps.
