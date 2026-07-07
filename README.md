# ResumeLeader — Paywall Prototype

Pixel-perfect reproduction of the ResumeLeader payment screen from Figma.
Vite + React + TypeScript + Tailwind CSS v4, built on the real
[`@universe-forma/ui-pes`](../ui-pes-design-crew) component library
(`Button`, `Input`, `IconButton`, `TabsRoot/TabsList/TabsTrigger`) with
ResumeLeader brand tokens (`--color-primary: #1F5DE2`, Outfit) applied on top
of the ui-pes theme.

**Live:** https://resume-score-card.vercel.app

## What's inside

- Demo bar above the page — ui-pes Tabs switching two preview variants:
  **With score** (87 + count-up) and **Resume ready**.
- Score-card preview: confetti, chips, resume raster, entrance animation
  (card slide-in, badge pop, staggered rise; respects `prefers-reduced-motion`).
- Payment panel: PayPal / Apple Pay / Google Pay (ui-pes `Button`), card fields
  (ui-pes `Input` restyled to the Figma inside-label look), trust bullets,
  legal descriptor.
- Trustpilot reviews carousel (ui-pes `IconButton` arrows).
- `public/card.html` — the original static standalone card (first version).

## Figma sources

File `Vwz50pOgwwbqmy8niwjiQ8` (💼 ResumeLeader — Main file):

| Part | Node |
| --- | --- |
| Payment screen 1440px | `15354-36063` |
| Preview "With score" | `15354-37789` |
| Preview "Resume ready" | `15366-102556` |
| Right payment panel | `15366-103681` |
| Original standalone card | `15350-33550` |

All geometry, colors, gradients, shadows and text styles were extracted from
the Figma nodes via the figma-console MCP Desktop Bridge; decorative vectors
were exported as SVG and rasters as PNG @2x into [`public/assets/`](public/assets/).

## Development

```sh
npm install
npm run dev        # http://localhost:5180
```

`@universe-forma/ui-pes` is consumed from a packed tarball in
[`vendor/`](vendor/) so the project is self-contained (works on Vercel too).
To pick up library changes, rebuild and repack it:

```sh
cd ../ui-pes-design-crew && npm run build && npm pack --pack-destination ../resume-score-card/vendor
# bump the filename in package.json if the version changed, then npm install
```

## Deploy

Build locally and ship the prebuilt output (ui-pes pulls
`@universe-forma/global-types` from a private GitHub registry, so a remote
`npm install` on Vercel fails without a token):

```sh
vercel pull --yes --environment production   # once per machine
vercel build --prod --yes
vercel deploy --prebuilt --prod --yes
```

`vercel.json` pins the Vite framework preset (`npm run build` → `dist/`).
