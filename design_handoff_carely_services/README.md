# Claude Code Handoff — Carely Services Page

## About the design files in this bundle

The `.dc.html` files here are **design references authored in HTML** — prototypes that show the approved look and behavior. They are not production code to copy. Their layout uses inline styles plus a small custom runtime (`support.js`, `image-slot.js`) that exists only to render the prototype. Neither runtime belongs in the target app.

Your task: **recreate this design in the existing React + TypeScript + Tailwind + Vite project**, using that project's conventions, and preserve the approved design exactly. Do not redesign, simplify, or "improve" any section.

**Fidelity: high (hifi).** All colors, type, spacing, radii, and motion values below are final.

Read `SHARED_COMPONENTS.md` first — the navbar, page hero, CTA band, footer, and all design tokens/breakpoints live there. This file covers the one section unique to Services. When anything is ambiguous, read the source `.dc.html` directly; its inline `style="…"` values are literal CSS and map to Tailwind arbitrary values 1:1.

---

## 1. Page Overview

The Services page is a card catalogue. An apricot page hero → a seven-card grid split into three **primary** service cards (the flagship offerings, larger padding and type) and four **secondary** cards (condition-specific programs, tighter) → the shared "Join Us Today" CTA → footer.

Every card is white at rest and flips to a photo-backed forest-green panel on hover. That state change is the page's one substantial interaction and §9 specifies it precisely.

Single scroll, no filtering or tabs. Page background is `#F3F6E9`; the card section sits on `#F8FBEF`.

---

## 2. Page Component Tree

```text
ServicesPage
├── SiteNavbar             current="Services"                       [shared]
├── PageHero               "Our services" / breadcrumb Home / Services  [shared]
├── ServiceCardsSection
│   ├── PrimaryGrid
│   │   └── ServiceCard × 3   (variant="primary")
│   └── SecondaryGrid
│       └── ServiceCard × 4   (variant="secondary")
├── CtaSection                                                      [shared]
└── SiteFooter                                                      [shared]
```

Source files: `Services.dc.html` (composition only) → `SiteNavbar`, `PageHero`, `ServiceCards`, `CtaSection`, `SiteFooter`.

---

## 3. Section-by-Section Specification

### ServiceCardsSection

Source: `ServiceCards.dc.html`. Section background `#F8FBEF`, padding `clamp(60px,7vw,110px) 0 clamp(70px,8vw,130px)`, `aria-label="Our services"` (no visible heading — the page hero titles the page).

Inner: `width: calc(100% - 80px); max-width: 1440px; margin: 0 auto`, `display: flex; flex-direction: column; gap: clamp(22px,2.2vw,32px)`. Two grids inside, each `display: grid; gap: clamp(22px,2.2vw,32px)`:

- **PrimaryGrid** — `repeat(3, minmax(0,1fr))` at ≥1040px, `repeat(2, …)` at ≥700px, single column below.
- **SecondaryGrid** — `repeat(4, minmax(0,1fr))` at ≥1200px, `repeat(2, …)` at ≥700px, single column below.

The grid gap and the gap between the two grids are the same value, so the seven cards read as one field, not two blocks. Keep them equal.

### ServiceCard

One component, two variants. Shared structure: `position: relative`, `overflow: hidden`, `display: flex; flex-direction: column`, background `#FFFFFF`, border `1px solid #ECEFE4`, `border-radius: 24px`, `min-width: 0`, `box-sizing: border-box`. Focus `outline: 2px solid #E2A76F; outline-offset: 3px`.

| | primary (×3) | secondary (×4) |
|---|---|---|
| padding | `clamp(28px,2.8vw,40px)` | `clamp(24px,2.2vw,32px)` |
| icon circle | 74px, glyph 34px | 66px, glyph 31px |
| `h3` margin-top | `clamp(26px,2.4vw,34px)` | `clamp(22px,2vw,30px)` |
| `h3` size | `clamp(21px,1.8vw,27px)` | `clamp(20px,1.6vw,24px)` |
| `p` margin | `14px 0 clamp(26px,2.6vw,36px)` | `12px 0 clamp(22px,2.2vw,30px)` |
| "Learn More" margin-top | 22px | 20px |

Contents, in order, inside a `position: relative; z-index: 1` flex column with `flex: 1`:

1. **Icon circle** — `border-radius: 50%`, background `#E2A76F`, centered; glyph is a 24×24-grid SVG with `fill: none; stroke: #FFFFFF; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round`. `aria-hidden`.
2. **`h3`** — DM Sans weight 700, `line-height: 1.25`, `#273A29`.
3. **`p`** — 17px, `line-height: 1.6`, `#6E756E`, `text-wrap: pretty`.
4. **Divider** — 1px, `background: #E7EADF`, `margin-top: auto` (this is what makes every card in a row bottom-align its footer regardless of copy length — keep it). `aria-hidden`.
5. **"Learn More"** — inline flex row, gap 10px, 18px weight 700 `#273A29`, with a 17px arrow-up-right glyph (`M7 17 17 7M9 7h8v8`, `currentColor`, stroke 2.1).

Behind that content sits the **hover image layer** — `position: absolute; inset: 0; border-radius: inherit; overflow: hidden`, `opacity: 0` at rest. It contains two stacked absolute spans:
- Photo: `background: #E8ECE0 url(service-hover.png) center/cover no-repeat`.
- Green wash: `background: #273A29; opacity: 0.78; pointer-events: none`.

The cards are `<div>`s in the prototype with a `text-decoration: none` and a focus outline — they were authored as future links. **Render each card as an `<a>`** (or a `<button>` if the destination is a modal) so the "Learn More" affordance and the focus outline are real.

---

## 4. Content

Use verbatim.

**Page hero:** `Our services` (accent italic on "services") · breadcrumb `Home / Services`

**Primary cards**

| Title | Description |
|---|---|
| `Telemedicine Services` | `Our telemedicine services further enhance the level of care we provide by allowing PCAs and NPs to triage cases via video with immediate physician backup.` |
| `On-Site Care` | `Daily rounding, early treatment, and on-site medication management ensure residents receive the right care, right away.` |
| `Specialist Access` | `We provide direct access to specialists including psychiatry, ID, cardiology, and more—at the right time for better outcomes.` |

**Secondary cards**

| Title | Description |
|---|---|
| `Medication Management` | `Optimization, reconciliation, monitoring.` |
| `CHF/COPD` | `On-site treatment to prevent exacerbation.` |
| `Sepsis` | `Early recognition and IV antibiotic protocols.` |
| `UTI/Pneumonia` | `Culture-guided therapy, resistance prevention.` |

Card link label (all seven): `Learn More`

**CTA band:** `Join Us Today` / `Schedule a personalized tour or` / `care consultation` / button `Book Appointment`

Footer copy is in `SHARED_COMPONENTS.md`. Note the em dash in the Specialist Access copy (`more—at`) is intentional and unspaced.

---

## 5. Asset Inventory

| File | Where | Subject | Aspect / rendered size | object-fit | Radius | Overlay | Hover |
|---|---|---|---|---|---|---|---|
| `services-hero-bg.webp` | PageHero background | Caregiver with an elderly person, warm care setting | ~16:5 band, `min-height: clamp(250px,27vw,380px)` | cover | inherits `clamp(20px,2.4vw,34px)` | 72% `#E2A76F` wash | none |
| `service-hover.png` | All seven card hover layers | Care-setting photograph — reads as texture, not as a subject | fills the card, any ratio ≥ ~1:1 | `center/cover` | inherits 24px | `#273A29` @ **0.78** | fades in on hover |

**`service-hover.png` ships with this bundle** in the folder root — it is the actual approved asset, already used by the prototype.

One important note: the prototype's card data carries a per-card `slot` id (`service-hover-telemedicine`, `service-hover-onsite`, and so on), but **every card currently renders the same `service-hover.png`**. Build the component to take a per-card image prop and pass the shared file for all seven; when the client supplies seven distinct photos they drop in with no structural change. Do not hard-code the single asset inside the component.

Because the hover photo sits under a 78% forest-green wash, it functions as tone and texture — a busy or high-contrast image will read as noise. Any replacement photos should be soft, mid-tone, and free of small detail.

---

## 6. Icon Inventory

Seven card glyphs plus the shared chrome. All are hand-written inline SVG on a 24×24 grid, `fill: none`, stroke 1.7, round caps and joins, `#FFFFFF` at rest and `#273A29` on card hover. `lucide-react` matches the language closely.

| Icon | Card | Size | Suggested lucide |
|---|---|---|---|
| Monitor with a person inside | Telemedicine Services | 34px | `MonitorSmartphone` / `Video` — the custom glyph is a screen containing a head-and-shoulders figure; if no lucide icon carries that, keep the inline SVG |
| House with a plus | On-Site Care | 34px | `HousePlus` (or `Home` + inline plus) |
| Two people | Specialist Access | 34px | `Users` |
| Capsule / pill (rotated 45°) | Medication Management | 31px | `Pill` |
| Lungs | CHF/COPD | 31px | `Wind` — lucide has no lungs glyph; **keep the inline SVG**, it is a recognizable custom mark |
| Shield with a plus | Sepsis | 31px | `ShieldPlus` |
| Circle with radiating ticks (pathogen) | UTI/Pneumonia | 31px | `Sun` is the closest shape but reads wrong in a clinical context — **keep the inline SVG** |
| Arrow up-right | "Learn More" ×7, CTA button | 17 / 19px | `ArrowUpRight` (stroke 2.1 / 2) |
| Carely leaf mark | Navbar, footer | 24 / 26px | **keep custom** |
| Botanical rosette / frond | PageHero decoration | large | **keep custom** |
| Botanical drawing / sparkle | CTA decoration | large | **keep custom** |
| Map pin / mail / socials / send | Footer | 19–20px | `MapPin`, `Mail`, `Facebook`, `Instagram`, `Linkedin`, `Send` |
| Hamburger | Mobile nav | 18×14px | `Menu` |

Three of the seven card glyphs (telemedicine, lungs, pathogen) have no faithful lucide equivalent. Copy their path data verbatim from `ServiceCards.dc.html` rather than approximating — swapping them visibly changes the page.

---

## 7. Design Tokens

See `SHARED_COMPONENTS.md` § Shared design tokens — colors, typography, layout, radius, shadows, and breakpoints are documented there and apply unchanged.

Values used **only** on this page:

```text
#ECEFE4              card border (rest)
#E7EADF              card divider (rest)
#E8ECE0              hover-image fallback background
rgba(248,251,239,0.3)  card divider (hover)
0.78                 green wash opacity over the hover photo
320ms ease           the single hover transition duration for every animated card property
```

The page uses **no shadows at all** — cards are separated by a 1px border and the cream background. Do not add elevation on hover; the color inversion is the affordance.

---

## 8. Responsive Specification

### Desktop (≥ 1440px)

- PageHero at full `1480px` max-width, `min-height` 380px, type at maximum.
- Primary grid: 3 across. Secondary grid: 4 across. Card gaps at 32px.
- Cards in a row share a height (grid stretch); the `margin-top: auto` divider keeps every footer aligned even though the primary copy lengths differ substantially.
- Footer: four columns.

### Laptop / Tablet (768–1439px)

- **< 1200px** — secondary grid drops to 2 columns (4 cards become 2×2).
- **< 1180px** — footer drops to 2 columns.
- **< 1040px** — primary grid drops to 2 columns. Three cards in a 2-column grid leaves the third card alone on its row at half width — this is the approved behavior; do not stretch or center it.
- **< 860px** — navbar becomes hamburger + drawer.
- **< 700px** — both grids drop to a single column.
- Card padding, icon size, heading size, and internal spacing all shrink continuously via `clamp()`; there is no separate tablet card design.

### Mobile (375–767px)

- Single column: nav (collapsed) → hero → 3 primary cards → 4 secondary cards → CTA → footer. All seven cards full width, in DOM order.
- Gutters: 40px each side (`calc(100% - 80px)`) on the card section, 16px on the PageHero.
- Card padding floors at 24–28px; `h3` at 20–21px; body stays 17px; "Learn More" stays 18px.
- **Hover is disabled entirely below the pointer query** — the hover layer is gated behind `@media (hover: hover) and (pointer: fine)`, so touch devices see the white card only, permanently. This is intentional: no sticky hover state, no tap-to-reveal. Keep the gate.
- Cards keep their 24px radius and 1px border. Nothing is hidden at any width.

---

## 9. Interactions & Animations

### Card hover — the page's primary interaction

Gated behind `@media (hover: hover) and (pointer: fine)`. Every animated property uses the same **320ms ease** transition, so the whole card changes as one coordinated state rather than a sequence. Hovering anywhere on the card triggers all of it.

| Property | Rest | Hover |
|---|---|---|
| Hover image layer opacity | `0` | `1` |
| Card background | `#FFFFFF` | `#273A29` |
| Card border color | `#ECEFE4` | `#273A29` |
| `h3` color | `#273A29` | `#FFFFFF` |
| `p` color | `#6E756E` | `#FFFFFF` |
| "Learn More" color (and its arrow, via `currentColor`) | `#273A29` | `#FFFFFF` |
| Divider color | `#E7EADF` | `rgba(248,251,239,0.3)` |
| Icon circle background | `#E2A76F` | `#F8FBEF` |
| Icon glyph stroke | `#FFFFFF` | `#273A29` |

The icon inverts while the text goes white — the apricot circle becomes cream with a green glyph. That inversion is deliberate; it keeps the icon as the card's brightest element in both states.

There is **no transform** on hover: no lift, no scale, no image zoom. The card stays exactly in place.

### Note on the "curtain" reveal

The brief describes an image layer starting below the card and sliding upward like a curtain. **The approved design does not do that.** The hover image layer is already full-size at `inset: 0` and **cross-fades in place** — `opacity: 0 → 1` over 320ms ease — under a fixed 78% green wash. There is no vertical translation and no reveal direction.

Implement the cross-fade as documented. If a curtain slide is genuinely wanted, it is a design change that needs approval, not an implementation detail — flag it rather than building it.

### Focus

Cards take `outline: 2px solid #E2A76F; outline-offset: 3px` on focus. Because hover is pointer-gated, a keyboard user reaching a card gets **the focus ring only, not the color inversion**. Consider extending the hover rules to `:focus-visible` so keyboard users see the same state — that is an accessibility improvement, not a visual change to the approved design, and it is worth doing.

### Elsewhere on the page

No scroll reveals, no continuous animation, no marquee. The PageHero, CTA button, navbar, and footer hovers are all specified in `SHARED_COMPONENTS.md`.

### Reduced motion

`@media (prefers-reduced-motion: reduce)` sets `transition: none` on the card and every descendant. The hover **end state still applies instantly** — motion is removed, the state change is not. Reproduce this exactly; do not disable the hover.

---

## 10. Reusable Components

Worth extracting:

```text
SiteNavbar     props: current                                    [shared]
PageHero       props: titleMain, titleAccent, breadcrumbCurrent, image  [shared]
CtaSection     no props                                          [shared]
SiteFooter     no props                                          [shared]
ServiceCard    props: variant 'primary' | 'secondary', icon, title, description, href, hoverImage
IconCircle     props: size, bg, children
```

**One `ServiceCard` with a `variant` prop, not two components.** The two variants differ only in padding, icon size, heading size, and two margins — a size map keyed by variant covers it. The primary and secondary sets should come from two data arrays, ideally in a single `content/services.ts`, not from hand-repeated markup.

Do **not** componentize the decorative dots, sparkles, or botanical SVGs — inline them.

---

## 11. Accessibility Notes

None of these change the visuals.

- Heading order: PageHero's title is the page's only `h1`. All seven card titles are `h3` — with no `h2` between them, this skips a level. **Add a visually hidden `h2`** ("Our services") at the top of the card section and keep `aria-label` or switch it to `aria-labelledby`, so the outline is continuous. The CTA title and footer column titles are `h2`.
- The section currently uses `aria-label="Our services"` on a `<section>` — if you add the hidden `h2`, use `aria-labelledby` instead and drop the label.
- **Render each card as an `<a>`** with a real `href` (or a `<button>` for a modal). They are `<div>`s in the prototype and are therefore not keyboard reachable — this is the most important fix on the page. The whole card should be the link target, not just the "Learn More" text.
- With the whole card as the link, "Learn More" is decorative repetition for screen readers. Give the `<a>` an accessible name that includes the service (`aria-label="Learn more about Telemedicine Services"`) so a link list is not seven identical entries.
- Card icons are `aria-hidden="true"` — the title carries the meaning. The dividers and the hover image layer are also `aria-hidden`. Preserve all of that.
- Extend the hover state to `:focus-visible` (see §9) so keyboard users get the same visual feedback as pointer users.
- The hover photo is purely decorative texture under a 78% wash — it needs no `alt` and should stay a CSS background or an `aria-hidden` `<img alt="">`.
- Contrast: at rest, `#6E756E` on `#FFFFFF` and `#273A29` on `#FFFFFF` both pass. On hover, all text is `#FFFFFF` over `#273A29` at 78% opacity over a mid-tone photo — this passes with the approved asset, but if a lighter replacement photo is supplied, verify the ratio and raise the wash opacity rather than dimming the text.
- All focus outlines are in the shared doc. Do not remove them.

---

## 12. Suggested File Structure

Adapt to the project's existing conventions — this is a shape, not a mandate.

```text
src/
├── pages/
│   └── Services/
│       ├── index.tsx
│       └── sections/
│           └── ServiceCardsSection.tsx
├── components/
│   ├── layout/
│   │   ├── SiteNavbar.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── PageHero.tsx
│   │   └── CtaSection.tsx
│   ├── ui/
│   │   └── IconCircle.tsx
│   └── carely/
│       └── ServiceCard.tsx
├── content/
│   └── services.ts        (primary[] and secondary[] card data)
└── assets/images/
    ├── services-hero-bg.webp
    └── service-hover.png
```

This page needs no keyframes and no observer — it is entirely Tailwind utilities plus `group-hover:` (or a small CSS block for the coordinated child transitions, if `group-hover` on nine simultaneous properties gets unwieldy). Either approach is fine; keep the timing identical.

---

## 13. Instructions for Claude Code

1. **Inspect the existing project first.** Read the Tailwind config, global CSS, existing layout and UI components, path aliases, and how other pages are composed and routed. Do not write until you know the conventions.
2. **Reuse the project's architecture** — its file layout, naming, import style, and component patterns, rather than the structure suggested in §12.
3. **Reuse existing shared components** (cards, buttons, icon wrappers, section wrappers) wherever they can be styled to match. Extend them with variants instead of adding parallel components.
4. **Reuse the existing Tailwind configuration.** Add only what is missing — extend `colors` and `screens` (the 700/860/1040/1180/1200 breakpoints listed in the shared doc) rather than replacing anything.
5. **Reuse existing fonts and global styles** where they match. If DM Sans / Lora are not loaded, add them (DM Sans 400/500/600/700 + 400 italic; Lora 400 italic) with the project's existing font strategy.
6. **Build the four shared components once** (`SiteNavbar`, `PageHero`, `CtaSection`, `SiteFooter`) — the About Us and Contact Us handoffs reuse them. If they already exist from another page in this batch, reuse rather than duplicate.
7. **Integrate `service-hover.png`** from this folder. Pass it per card through a prop; do not hard-code it inside `ServiceCard` (§5).
8. **Reproduce the design exactly** as specified in §3, §4, and the shared tokens. Read `ServiceCards.dc.html` for any value not covered here — in particular, copy the seven card glyph paths verbatim.
9. **Preserve all responsive behavior** in §8, including the primary grid's orphaned third card at 700–1039px and the pointer-gated hover.
10. **Preserve the hover state exactly** as specified in §9 — all nine properties, one shared 320ms ease, no transform, and a cross-fade rather than a curtain slide. Do not substitute a different animation.
11. **Do not touch unrelated project files.**
12. **Add no new dependencies** beyond `lucide-react` if the project has no icon library. No animation library is needed.
13. **Do not redesign any section.** Two changes ARE requested and are not redesigns: cards become real `<a>` elements, and the hover state extends to `:focus-visible` (§11).
14. **Run the project** after implementing.
15. **Fix all TypeScript and build errors** — no `any` escapes, no `@ts-ignore`.
16. **Verify at 1440px, 1200px, 1040px, 768px, and 375px**, on a touch device or with pointer emulation, and with `prefers-reduced-motion: reduce` enabled.
17. **Compare against `Services.dc.html`** side by side before calling it done: grid breaks, card padding rhythm, footer alignment across cards of unequal copy length, and every hover property.

---

## Files in this bundle

| File | What it is |
|---|---|
| `Services.dc.html` | The approved page — **open this first**. Composition only; it imports the sections below. |
| `SHARED_COMPONENTS.md` | Navbar, PageHero, CtaSection, footer, and all design tokens/breakpoints |
| `ServiceCards.dc.html` | The seven-card section reference, including all icon path data |
| `service-hover.png` | **Real approved asset** — the card hover photograph |
| `PageHero.dc.html` · `CtaSection.dc.html` · `SiteNavbar.dc.html` · `SiteFooter.dc.html` | Shared component references |
| `support.js` | Prototype runtime. **Not for production.** |
| `image-slot.js` | Prototype image-placeholder element. **Not for production** — replace with `<img>`. |

Open `Services.dc.html` locally with all files in the same folder. Sibling pages are not included; their nav links will 404, which is expected.
