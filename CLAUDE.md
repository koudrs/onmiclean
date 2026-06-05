# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> ⚠️ The directive in AGENTS.md above is binding: this is **Next.js 16** with breaking
> changes. Read the relevant guide in `node_modules/next/dist/docs/` before writing
> Next-specific code (App Router APIs, metadata, image, etc.).

## What this is

Single-page marketing/landing site for **Omniclean Panamá**, selling one hero product:
a **combo of 5 home-cleaning products for $20** (ref. price $32). There is no cart and no
backend checkout — **every CTA funnels to the client's WhatsApp** with a pre-filled,
context-specific message. Spanish-only (`lang="es"`, locale `es_PA`).

## Commands

Package manager is **pnpm** (via mise, Node 26). **Never use npm.**

- `pnpm dev` — dev server
- `pnpm build` — production build (run this to catch type/route errors)
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (`eslint-config-next`)

No test runner is configured. Verify changes with `pnpm build` + manual review.
Note: headless Chromium hangs in this environment — see [[no-headless-screenshots]];
verify rendered output with curl/HTML rather than screenshots.

## Architecture

**Single page, composed of sections.** [src/app/page.tsx](src/app/page.tsx) stacks
`Navbar` → section components (`Hero`, `Products`, `BundleSection`, `Benefits`, `Contact`)
→ `Footer` → `WhatsappFloat`. Navigation is anchor-based (`#inicio`, `#productos`,
`#paquete`, `#beneficios`, `#contacto`) — there are no other routes.

**Two source-of-truth config modules in `src/lib/` drive everything:**

- [src/lib/site.ts](src/lib/site.ts) — business identity: name, contact info, WhatsApp
  number, socials, developer credit. `whatsappUrl(message?)` builds `wa.me` links. Change
  business data **here only**; it propagates to layout metadata, JSON-LD, footer, contact.
- [src/lib/products.ts](src/lib/products.ts) — the `products[]` catalog (5 hardcoded items)
  and the `bundle` object, plus `productWhatsappUrl(product)` / `bundleWhatsappUrl()` which
  compose detailed WhatsApp order messages. `bundle.includes` is derived from `products`.

To add/edit a product, edit the `products` array — cards, the modal, JSON-LD pricing, and
WhatsApp messages all read from it. No per-product pages exist.

**Product images are imported as static modules** (`import img from "@/assets/products/*.webp"`,
typed `StaticImageData`), NOT referenced by string path from `/public`. This is deliberate:
Next adds a content hash so replacing a photo busts the browser cache automatically. Keep
this pattern; do not move product images to `/public` string paths. (Brand/hero images in
`/public` are string-referenced and fine.)

**Responsive detail pattern:** [product-card.tsx](src/components/sections/product-card.tsx)
shows a `Dialog` (Radix) on desktop and a `Drawer` (vaul) on mobile, switched via
[src/lib/use-media-query.ts](src/lib/use-media-query.ts) (`min-width: 768px`). Clicking
anywhere on a card opens the detail; the WhatsApp button `stopPropagation`s.

**Styling:** Tailwind CSS v4 (CSS-first, no JS config). Design tokens and brand utilities
(`brand-gradient`, `brand-gradient-text`, `cta-whatsapp` shine) live in
[src/app/globals.css](src/app/globals.css) under `@theme inline`. Buttons use a `cva`
variant system in [src/components/ui/button.tsx](src/components/ui/button.tsx) — the
`whatsapp` variant is the primary conversion CTA. Brand palette is blue (`#2563eb`) +
green (`#10b981`) on white.

**Icons:** lucide v1 dropped brand logos — use the hand-rolled SVGs in
[src/components/ui/brand-icons.tsx](src/components/ui/brand-icons.tsx) (WhatsApp, Instagram,
Facebook, TikTok), not lucide, for any brand mark. See [[lucide-no-brand-icons]].

**SEO** is wired through `site.ts`: metadata in [src/app/layout.tsx](src/app/layout.tsx),
generated [sitemap.ts](src/app/sitemap.ts) / [robots.ts](src/app/robots.ts) /
[manifest.ts](src/app/manifest.ts), and structured data in
[src/components/seo/json-ld.tsx](src/components/seo/json-ld.tsx) (LocalBusiness + Product).

## Known pending work

- **Resend is installed but not connected.** The contact form currently composes a WhatsApp
  message instead of emailing. There is a `TODO` in
  [contact.tsx](src/components/sections/contact.tsx) marking where to POST to `/api/contact`.
- Social links in `site.ts` are `"#"` placeholders; they are **auto-hidden** (filtered) in
  the footer and contact section until real profiles exist.
