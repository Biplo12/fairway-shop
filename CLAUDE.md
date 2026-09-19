@AGENTS.md

# FAIRWAY, Golf Equipment Retailer

## 0. WORKING RULES

### Git

- Write all commit messages in English.
- Use Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`, `test:`).
- Never add a `Co-Authored-By: Claude` trailer (or any other AI co-author trailer).
- Never add a "Generated with Claude Code" footer to commits or pull request descriptions.
- The commit author is always the repository owner.

### Docs

- This file is the single source of truth for brand, art direction and structure.
- Do not create separate docs unless asked; keep decisions here.
- Never use em dashes, in copy, comments, commit messages or docs. Use a comma,
  a colon or a full stop.

---

## 1. WHAT THIS IS

FAIRWAY is a **multi-brand golf equipment retailer**, a shop, not a manufacturer. It sells the real
brands golfers actually buy: Titleist, TaylorMade, Callaway, Ping, Mizuno, Srixon, Cleveland, Vokey,
Scotty Cameron, FootJoy, Odyssey.

Positioning in one line:

> EVERY BRAND THAT MATTERS. FITTED TO THE WAY YOU PLAY.

The site should read like a specialist retailer with decades of counter time, closer to a serious
fitting studio than to a discount warehouse. A fictional shop presented as a design project; never
imply an official partnership, endorsement or affiliation with any brand it sells.

**Why this model:** generating convincing own-brand product photography is not realistic. Real
products, photographed properly, are both credible and obtainable.

---

## 2. THE SHOP

Founded 1987 near St. Andrews, Scotland, as a single fitting bench behind a pro shop. Now a
specialist retailer with a fitting studio at its centre.

What FAIRWAY sells on:

- **Fitting first.** Nothing leaves the shop unmatched to the player. Launch monitor, not a guess.
- **Curation.** Fewer lines, chosen deliberately. If it is on the rack, it earned the space.
- **Counter knowledge.** Staff who play, and who will talk a customer out of the wrong purchase.

What it does not sell on: discounts, hype, or the newest thing because it is newest.

---

## 3. VOICE

FAIRWAY speaks as a fitter behind a counter, specific, unhurried, occasionally willing to say
"that's not for you".

The critical shift from a maker's voice: **FAIRWAY did not build these clubs, it chose them.**

- Good: "Three shafts in the same head. The difference is eleven yards of dispersion."
- Good: "We keep the P790 and the i230 side by side because most players guess wrong between them."
- Bad: "We spent two years refining the sole geometry." That is the manufacturer's sentence.
- Bad: "Revolutionary technology transforms your game."

Copy is short, confident, understated, factual. Never generic marketing language.

---

## 4. PERSONALITY

Should feel: quiet, confident, expert, precise, timeless, human, understated, premium, mature.

Should NOT feel: loud, aggressive, cheap, discount-driven, overly sporty, neon, gamer-like,
mass-market, overly corporate.

Communicate authority through restraint and specificity.

---

## 5. MESSAGES

Primary:

> EVERY BRAND THAT MATTERS. FITTED TO THE WAY YOU PLAY.

Secondary, used sparingly:

> PLAY THE LONG GAME. · FITTED, NOT GUESSED. · THE RIGHT CLUB IS THE ONE THAT SUITS YOU.
> LESS NOISE. MORE GOLF. · STOCKED BY PEOPLE WHO PLAY.

---

## 6. AUDIENCE

Golfers roughly 25–55 who care about equipment, value expertise over discount, and would rather be
fitted once than buy twice. They appreciate design, craftsmanship, golf culture and understated
premium retail.

---

## 7. CATALOGUE

Categories: **CLUBS** (drivers, fairway woods, hybrids, irons, wedges, putters) · **BALLS** ·
**BAGS** · **GLOVES** · **HEADWEAR** · **APPAREL** · **ACCESSORIES** · **FITTING** (a service, sold
like a product).

Products carry the real brand and model, "TaylorMade P790 Irons", "Titleist Pro V1", "Ping Hoofer
Lite". Never invent model names for real brands, and never attribute invented technology to them.

---

## 8. DATA MODEL

Products are data-driven, never repeated hard-coded cards:

```ts
{ slug: "taylormade-p790-irons", brand: "TaylorMade", model: "P790 Irons",
  category: "clubs", subcategory: "irons", price: 1499, currency: "GBP",
  statement: "Forged face, hollow body, distance without the look.",
  options: [{ id: "shaft", values: [...] }, { id: "flex", values: [...] }],
  specs: [...], images: { primary, gallery }, inStock: true, fittingRecommended: true }
```

Brand is a first-class field: it drives filtering, the brand index, and the product card.

---

## 9. LOGO AND MARK

FAIRWAY is the retailer's own identity, and appears only in the interface, packaging and signage.
It is never printed onto the products it sells.

- **Wordmark:** FAIRWAY in uppercase Inter, letter-spaced `0.26em`–`0.3em`. Restrained and spacious.
- **Mark:** the corridor symbol, two tapered bars converging to a point, the fairway seen from the
  tee. `public/brand/mark-corridor.svg`, with `-compact` for UI below 32px and `src/app/icon.svg`
  for the favicon.

Never: mascots, shields, cartoon balls, aggressive sports logos.

---

## 10. COLOUR

| Token | Value | Use |
| --- | --- | --- |
| OFF WHITE | `#F6F6F6` | page background |
| PAPER | `#EFEFEF` | recessed surface |
| CHARCOAL | `#171817` | primary text, dark cards |
| FOREST | `#26352D` | accent, active tab rule |
| OLIVE | `#69715C` | focus ring, secondary text |
| STONE | `#B5ADA0` | neutral |
| MIST | `#E2E2E2` | borders |

A neutral light grey page with white cards, measured off the reference board. Product photography
brings whatever colour the brands bring, that contrast is the point. Avoid saturated interface
colour and pure black.

---

## 11. TYPOGRAPHY

- **Inter** carries everything: headlines, UI, product data. Uppercase and letter-spaced for labels
  and the wordmark, tight negative tracking for large headlines.
- **Instrument Serif** is loaded and available for editorial moments, but the commerce surface is
  sans-serif, this follows the bento reference rather than a magazine.

Scale: headlines `clamp(2.75rem, 5vw, 4.5rem)`, section headings `clamp(1.75rem, 2.6vw, 2.5rem)`,
body `1.0625rem`–`1.1875rem`, labels `0.75rem`–`0.875rem` uppercase with `0.02em`–`0.04em` tracking.

---

## 12. PHOTOGRAPHY

**Sources:** stock photography of real equipment (Pexels), downloaded at original resolution and
cropped locally. No AI generation, it cannot render real brands or sharp product detail credibly.

**Look:** deep green turf, natural daylight, real photographic sharpness. Product shots may be
studio-lit on black; on-course shots keep figures small, anonymous and seen from behind.

**Quality bar, non-negotiable:** every image must be sharp at 2× device pixel ratio. That means the
stored file is at least twice the CSS size of its largest slot, roughly 2400px for a card, 3200px
for a full-bleed band. Downscale from a large original with `lanczos3` and a light unsharp pass;
never upscale a small file.

Reference frames in the repo: `editorial/hero-links.jpg`, `editorial/irons-banner.jpg`,
`categories/*.jpg`.

---

## 13. LAYOUT

Full-bleed card composition with `12px`–`20px` gutters, cards edge to edge, not a narrow centred
column. Rounded corners: media `20px`, cards `14px`, controls `6px`. Generous vertical rhythm,
`clamp(5rem, 10vw, 10rem)` between major sections.

The hero is two cards filling the viewport: a light editorial card and a photographic card carrying
the navigation and the brand statement.

---

## 14. SITE STRUCTURE

`/` home · `/shop` all products with brand and category filters · `/shop/[category]` ·
`/shop/[category]/[slug]` product detail · `/brands` and `/brands/[brand]` · `/fitting` the studio
and booking · `/stories` journal · `/about` the shop · `/bag`.

---

## 15. HOMEPAGE

1. **Hero**, two cards: a featured product card and the photographic statement card with navigation.
2. **Banner**, one wide dark band for the product push of the moment.
3. **Categories**, three portrait cards into the fastest-moving categories.
4. **Brands**, the logos or names FAIRWAY stocks, as a quiet band.
5. **Fitting**, the service, sold like a product.
6. **Stories**, editorial cards.
7. **Newsletter**, minimal.
8. **Footer**, large wordmark, EST. 1987, shop, company and legal links.

---

## 16. INTERACTION

Subtle only: image scale on hover, arrow translation, underline animation, staggered entrance on
load. No bouncing, parallax, scroll hijacking or flashy effects. Everything respects
`prefers-reduced-motion`.

---

## 17. ACCESSIBILITY AND PERFORMANCE

Semantic HTML, one `<h1>` per page, visible focus states in olive, labelled controls, real
`<button>`/`<a>` semantics, sufficient contrast, proper alt text. Server components by default;
client components only where interaction demands it. `next/image` everywhere with accurate `sizes`
and `quality={90}` (declared in `next.config.ts`). Target LCP under 2s, CLS zero.

---

## 18. TECH

Next.js 16 App Router · React 19 · TypeScript strict · Tailwind CSS v4 with CSS-first tokens ·
`lucide-react` icons. No component library, the bento card language is hand-built. No CMS; content
lives in typed modules under `src/content`.

---

## 19. QUALITY BAR

- **Brand**, reads as a specialist retailer with real expertise, not a template store.
- **Design**, dominant photography, clear type hierarchy, generous whitespace, muted interface.
- **UX**, products discoverable by brand and by category, fitting always one click away.
- **Technical**, no TypeScript errors, no console errors, every image sharp at 2×, responsive,
  accessible, fast.

## 20. NORTH STAR

When uncertain, ask: *would a specialist shop with a fitting studio and forty years behind the
counter put this on their site?* If it feels like a template, remove it. Too flashy, simplify. Too
empty, add photography rather than interface. Too generic, add the specific detail only a fitter
would know.
