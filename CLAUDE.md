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

**Brand voice:** the products are sourced from verlimpio, but what the site sells is the
**Omniclean** brand. Copy should reinforce this everywhere — "Combo Omniclean", "soluciones
Omniclean", "Productos Omniclean", etc. Never surface "verlimpio" in client-facing text (it
only appears in internal code comments). The catalog is positioned as **growing**: a
6th "Próximamente / más productos" teaser card sits at the end of the products grid.

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

**Single page + legal routes.** [src/app/page.tsx](src/app/page.tsx) stacks the one-pager:
`Navbar` → `Hero` → `Products` → `BundleSection` → `Benefits` → `SocialProof` → `About` →
`Contact` → `Footer` → `WhatsappFloat`. In-page nav is anchor-based (`#inicio`, `#productos`,
`#paquete`, `#beneficios`, `#nosotros`, `#contacto`). Section order is intentional (sales
funnel) — CTAs always point **forward/down** (WhatsApp or `#contacto`), never back up.

Besides the home, there are **three standalone legal routes** (`/privacidad`, `/terminos`,
`/cookies`) — added for SEO and to satisfy Facebook Ads / Google policies. They share the
[legal-page.tsx](src/components/layout/legal-page.tsx) shell (reuses Navbar + Footer, wraps
content in a `.legal-prose` container styled in globals.css) and are listed in `sitemap.ts`.
Their text is data-driven from the `site.legal` block. The **"Sobre nosotros"** content is
NOT a separate page — it's the [about.tsx](src/components/sections/about.tsx) section inside
the one-pager (keep it that way; this is a one-pager by design).

**Two source-of-truth config modules in `src/lib/` drive everything:**

- [src/lib/site.ts](src/lib/site.ts) — business identity: name, contact info, WhatsApp
  number, socials, developer credit, and a `legal` block (entity, lastUpdated, payment
  methods, delivery area) consumed by the legal pages. `whatsappUrl(message?)` builds `wa.me`
  links. Change business data **here only**; it propagates to layout metadata, JSON-LD,
  footer, contact, and the legal pages.
- [src/lib/products.ts](src/lib/products.ts) — the `products[]` catalog and the `bundle`
  object, plus `productWhatsappUrl(product)` / `bundleWhatsappUrl()` which compose detailed
  WhatsApp order messages. Each product has a `category: "hogar" | "industrial"`. Two derived
  exports split the catalog: `homeProducts` (5 — the **hogar** line) and `industrialProducts`
  (3 — ALKA-FOAM, BIOCLEANER ALKA, QUAT CLEANER, a professional **food-plant** line sold
  separately). **`bundle.includes` is derived from `homeProducts` only** — industrial
  products NEVER go in the $20 combo. `homeProducts.length` (not `products.length`) backs the
  "5 esenciales" hero stat.

To add/edit a product, edit the `products` array (set its `category`) — cards, the modal,
JSON-LD pricing, and WhatsApp messages all read from it. No per-product pages exist. The
Products section renders two grids: hogar (+ a "Próximamente" teaser) and a separate
**"Línea Industrial"** subgroup with its own heading/copy; industrial cards carry a dark
"Industrial" badge (Factory icon) as the differentiator.

**Product images are imported as static modules** (`import img from "@/assets/products/*.webp"`,
typed `StaticImageData`), NOT referenced by string path from `/public`. This is deliberate:
Next adds a content hash so replacing a photo busts the browser cache automatically. Keep
this pattern; do not move product images to `/public` string paths. (Brand/hero images in
`/public` are string-referenced and fine.) The lifestyle collage used by the full-width
social-proof CTA banner ([social-proof.tsx](src/components/sections/social-proof.tsx)) is
also a static import (`@/assets/products/clientes.webp`) with a brand-gradient veil overlaid
for legibility.

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
Each legal page also exports its own `metadata` (title/description/canonical) and is in the
sitemap, so they're independently indexable.

**Mobile:** the site is mobile-first; the responsive layout has been audited. When adding
sections, keep touch targets ≥44px, give oversized headings/prices a smaller base size
(`text-4xl sm:text-5xl …`) with `flex-wrap` on price rows, and verify nothing overflows at
~360px width. Don't position floating badges with negative offsets on mobile (they clip off
the card edge).

## Known pending work

- **Resend is installed but not connected.** The contact form currently composes a WhatsApp
  message instead of emailing. There is a `TODO` in
  [contact.tsx](src/components/sections/contact.tsx) marking where to POST to `/api/contact`.
- **No analytics/tracking yet.** Meta Pixel and Google Analytics are intentionally NOT wired
  (user deferred). The Cookies policy already references them, so wiring is just plug-in work
  — ideally behind a consent banner (also deferred).
- Social links in `site.ts` are `"#"` placeholders; they are **auto-hidden** (filtered) in
  the footer and contact section until real profiles exist.
- Social-proof banner copy ("Cientos de familias…") is a placeholder claim — swap for a real
  figure when available (matters for Facebook Ads policy).
