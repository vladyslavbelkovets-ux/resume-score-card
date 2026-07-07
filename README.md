# ResumeLeader — Paywall Prototype

Pixel-perfect static reproduction of the ResumeLeader payment screen from Figma,
built with plain HTML/CSS/JS (no build step).

**Live:** https://resume-score-card.vercel.app

## Pages

- [`index.html`](index.html) — full paywall: score-card preview (87, confetti,
  chips, resume raster), payment panel (PayPal / Apple Pay / Google Pay, card
  fields, trust bullets, legal descriptor) and a Trustpilot reviews carousel.
  Includes an opening animation: card slide-in, score count-up, badge pop,
  staggered chips/resume rise, floating confetti (disabled with
  `prefers-reduced-motion`).
- [`card.html`](card.html) — the original standalone score card (first version).

## Figma sources

File `Vwz50pOgwwbqmy8niwjiQ8` (💼 ResumeLeader — Main file):

| Part | Node |
| --- | --- |
| Payment screen 1440px | `15354-36063` |
| Updated score card | `15354-37789` |
| Right payment panel | `15366-103681` |
| Original standalone card | `15350-33550` |

All geometry, colors, gradients, shadows and text styles were extracted from
the Figma nodes via the figma-console MCP Desktop Bridge; decorative vectors
were exported as SVG and rasters (resume preview, avatars, payment logos) as
PNG @2x into [`assets/`](assets/).

Fonts: [Outfit](https://fonts.google.com/specimen/Outfit) +
[Material Symbols Rounded](https://fonts.google.com/icons) (`FILL 1`).

## Development

Any static server works, e.g.:

```sh
npx serve .
```

## Deploy

```sh
vercel deploy --prod
```

`vercel.json` pins a plain static deployment (no framework, no build).
