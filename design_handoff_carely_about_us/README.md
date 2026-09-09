# Claude Code Handoff — Carely About Us Page

## About the design files in this bundle

The `.dc.html` files here are **design references authored in HTML** — prototypes that show the approved look and behavior. They are not production code to copy. Their layout uses inline styles plus a small custom runtime (`support.js`, `image-slot.js`) that exists only to render the prototype and let a reviewer drop images into placeholders. Neither runtime belongs in the target app.

Your task: **recreate this design in the existing React + TypeScript + Tailwind + Vite project**, using that project's conventions, and preserve the approved design exactly. Do not redesign, simplify, or "improve" any section.

**Fidelity: high (hifi).** All colors, type, spacing, radii, and motion values below are final.

Read `SHARED_COMPONENTS.md` first — the navbar, page hero, CTA band, footer, and all design tokens/breakpoints live there. This file covers only the two sections unique to About Us. When anything is ambiguous, read the source `.dc.html` directly; its inline `style="…"` values are literal CSS and map to Tailwind arbitrary values 1:1.

---

## 1. Page Overview

The About Us page introduces Carely's clinical model to facility operators. It is short and confident: an apricot page hero → a two-column "Who we are" section pairing overlapping photography with the service narrative, credentials, and a 17-year experience stat → a three-column "Our Care Home" results section with a tall photo carrying a "200 +" residents stat card → the shared "Join Us Today" CTA → footer.

Single scroll, no in-page tabs. Page background is `#F3F6E9`; sections alternate to `#F8FBEF`.

---

## 2. Page Component Tree

```text
AboutUsPage
├── SiteNavbar                current="About Us"                  [shared]
├── PageHero                  "About us" / breadcrumb Home / About Us  [shared]
├── WhoWeAreSection
│   ├── OverlappingImagePair
│   └── WhoWeAreContent
│       ├── WhoWeAreBadge     (rotating "Who We Are" ring)
│       ├── CredentialList    (2 checkmark items)
│       └── ExperienceStat    (17+ / Years of experience)
├── OurCareHomeSection
│   ├── ResultsColumnLeft     (2 icon blocks)
│   ├── StatImageCard         (photo + "200 +" overlay card)
│   └── ResultsColumnRight    (2 icon blocks)
├── CtaSection                                                     [shared]
└── SiteFooter                                                     [shared]
```

Source files: `About Us.dc.html` (composition only) → `SiteNavbar`, `PageHero`, `WhoWeAre`, `OurCareHome`, `CtaSection`, `SiteFooter`.

---

## 3. Section-by-Section Specification

### WhoWeAreSection

Source: `WhoWeAre.dc.html`. Section background `#F3F6E9`, padding `clamp(70px,8vw,130px) 0`. Inner `width: calc(100% - 80px); max-width: 1440px; margin: 0 auto`, `display: grid`, `align-items: center`, `gap: clamp(48px,5vw,80px)`. Columns `minmax(0,0.9fr) minmax(0,1.1fr)` at ≥1100px, single column below.

**OverlappingImagePair** (left column) — `position: relative`, `max-width: 660px`, `min-height: clamp(420px,38vw,640px)`. Two absolutely positioned photos, both `border-radius: 26px; overflow: hidden`:
- Back: `left:0; top:0; width:62%; height:80%`.
- Front: `left:32%; top:20%; width:68%; height:80%`, `z-index:2`, `box-shadow: 0 18px 44px rgba(39,58,41,0.14)`.

The overlap is the point — the front image covers the back image's right third. Keep the percentages; do not convert to a flex pair.

**WhoWeAreContent** (right column, `max-width: 700px`), in order:

1. **Eyebrow** — 9px `#E2A76F` dot + "Who we are", gap 11px, 17px `#E2A76F` (DM Sans, not Lora — this section differs from the other inner-page eyebrows).
2. **`h2`** — `margin-top: 30px`, `max-width: 680px`, DM Sans weight 600, `clamp(36px,3.4vw,60px)`, `line-height: 1.12`, `letter-spacing: -0.02em`, `#273A29`, `text-wrap: pretty`. Two inline `<em>`s in Lora italic weight 400: "Integrated healthcare support with *compassion* and *care always*".
3. **Badge + body row** — `margin-top: clamp(32px,3.4vw,44px)`, `display:flex; flex-wrap:wrap; align-items:flex-start; gap:36px`.
   - **WhoWeAreBadge** — decorative (`aria-hidden`), 136×136, `flex-shrink:0`, centered. An absolutely positioned SVG renders "Who We Are • Who We Are • Who We Are •" on a circular `textPath` (radius 53, centre 68,68, `startOffset: 2%`), DM Sans 12.5px, `letter-spacing: 1.4`, fill `#E2A76F`. Ring rotates 360° over **24s linear infinite**. Centre holds a 26px arrow-up-right glyph (`M7 17 17 7M9 7h8v8`, stroke `#E2A76F` 1.7, round caps). Not a link, no hover state.
   - **Body block** — `flex: 1 1 380px; min-width: 280px; max-width: 650px`. Two paragraphs, 18px, `line-height: 1.65`, `#333A34`, `text-wrap: pretty`; second has `margin-top: 24px`.
4. **Divider** — 1px, `background: rgba(210,231,97,0.75)`, `margin: 34px 0 30px`.
5. **CredentialList** — `<ul>`, no bullets, `display:flex; flex-wrap:wrap; gap: 18px 48px`. Each `<li>`: `flex: 1 1 280px`, row, gap 14px — a 30px `#E2A76F` circle holding a 16px white checkmark (`m6 12.6 4 4 8-9`, stroke 2.2, round caps) + label 17px weight 600 `#273A29`.
6. **ExperienceStat** — `margin-top: 34px`, row, `align-items: center`, gap 26px: "17+" in Lora italic weight 400 `clamp(52px,5vw,74px)` `line-height: 1` `#273A29`; a 1px × 60px `#D2E761` vertical rule; "Years of<br>experience" 19px weight 500 `line-height: 1.4` `#273A29`.

### OurCareHomeSection

Source: `OurCareHome.dc.html`. Section background `#F8FBEF`, padding `clamp(70px,8vw,130px) 0`. Inner `width: calc(100% - 80px); max-width: 1440px; margin: 0 auto`, `display: grid`, `align-items: center`, `gap: clamp(40px,4vw,72px)`.

Column behavior (three DOM children: left text, image, right text):
- **≥ 1180px** — three columns `minmax(0,0.83fr) minmax(0,1fr) minmax(0,0.83fr)`. Right column renders as `display: block` with its internal divider visible.
- **760–1179px** — two columns (`1fr 1fr`): left text beside the image; the right column spans `grid-column: 1 / -1` below them and becomes a two-up grid (`1fr 1fr`, `gap: clamp(32px,4vw,56px)`) with its internal divider hidden.
- **< 760px** — single column, everything stacked; right column back to `display: block` with its divider visible.

**Left column**
- Eyebrow: 9px `#E2A76F` dot + "Our Care Home", gap 11px, Lora italic `clamp(18px,1.6vw,22px)` `#273A29`.
- `h2` — `margin-top: 18px`, DM Sans weight 700, `clamp(34px,3.3vw,56px)`, `line-height: 1.1`, `letter-spacing: -0.025em`, `#273A29`, `text-wrap: pretty`: "Your trusted partner in home" + a **block-level** `<em>` (Lora italic 400, `letter-spacing: 0`, `line-height: 1.15`) "health and wellness".
- Two **ResultBlocks** separated by a 1px `rgba(39,58,41,0.12)` rule with `margin: clamp(26px,2.6vw,36px) 0`. First block `margin-top: clamp(32px,3.2vw,46px)`.

**ResultBlock** (left column variant) — `display:flex; align-items:flex-start; gap: 20px`: a 66px `#E2A76F` circle with a 30px white 1.8px-stroke icon, then a text block — `h3` DM Sans weight 700 `clamp(20px,1.7vw,25px)` `#273A29`; `p` `margin-top: 8px`, 17px `line-height: 1.55` `#6E756E`, `text-wrap: pretty`.

**Right column** blocks use the same parts but stack vertically: icon circle above the text, `display:flex; flex-direction:column; gap: 18px`.

**StatImageCard** (middle) — `position: relative`, `border-radius: 28px`, `overflow: hidden`, `aspect-ratio: 3 / 4` at ≥760px, `4 / 5` below. Photo fills it (`object-fit: cover`). Overlay card: absolute `left:5%; right:5%; bottom:5%`, background `#273A29`, `border-radius: 20px`, padding `clamp(20px,2vw,28px)`, `pointer-events: none`.
- Top row: `align-items:center; gap:16px` — a 38px two-people icon stroked `#E2A76F` 1.7 + "200 +" (verbatim, with the space) DM Sans weight 700 `clamp(36px,3.6vw,54px)` `line-height: 1` `letter-spacing: -0.02em` `#FFFFFF`.
- Caption `p`: `margin-top: 14px`, `clamp(15px,1.35vw,19px)`, `line-height: 1.5`, `#FFFFFF`, `text-wrap: pretty`.

---

## 4. Content

Use verbatim.

**Page hero:** `About us` (accent italic on "us") · breadcrumb `Home / About Us`

**Who we are**
- Eyebrow: `Who we are`
- H2: `Integrated healthcare support with compassion and care always` (italic on `compassion` and `care always`)
- Badge ring: `Who We Are • Who We Are • Who We Are •`
- Paragraph 1: `We provide 24/7 telemedicine services, allowing medical concerns to be addressed before they require an emergency room visit. Our experienced providers offer daily rounds Monday through Friday, supported by rapid-response protocols for infections, CHF, COPD, and sepsis, with physician oversight available around the clock.`
- Paragraph 2: `Our team is fully integrated into your daily operations, working on-site five days a week to identify issues early and begin treatment immediately. From IV antibiotics and diuretics to steroids and BiPAP support, care can be delivered promptly without disrupting the flow of your facility.`
- Credentials: `24/7 Telemedicine Access` · `Daily On-Site Provider Support`
- Stat: `17+` / `Years of` `experience`

**Our Care Home**
- Eyebrow: `Our Care Home`
- H2: `Your trusted partner in home` / `health and wellness`
- `Clinical Results` — `Readmission reduction, faster treatment, better recovery.`
- `Operational Results` — `Lower ambulance/ER costs, improved workflow.`
- `Compliance & Reporting` — `CMS-aligned, monthly data reporting, QAPI reviews.`
- `Case Study Highlights` — `Real stories, real improvements in quality of life.`
- Stat card: `200 +` / `Residents supported with measurable health improvements.`

**CTA band:** `Join Us Today` / `Schedule a personalized tour or` / `care consultation` / button `Book Appointment`

Footer copy is in `SHARED_COMPONENTS.md`.

---

## 5. Asset Inventory

The prototype uses drop-in placeholders, so **no bitmaps ship with this handoff** — the client supplies photography. Wire each to a real `<img>` with the geometry below.

| File | Where | Subject | Aspect / rendered size | object-fit | Radius | Notes |
|---|---|---|---|---|---|---|
| `about-hero-bg.webp` | PageHero background | Caregiver with an elderly person, warm care setting | ~16:5 band, `min-height: clamp(250px,27vw,380px)` | cover | inherits `clamp(20px,2.4vw,34px)` | Rendered at `inset:-6%`, `blur(9px)`, `scale(1.06)`, under a 72% `#E2A76F` wash — detail is not readable, so composition matters more than sharpness |
| `who-image-back.webp` | Who we are, back plate | Caregiver standing beside a seated senior woman | ~4:5 portrait, 62%×80% of a `clamp(420px,38vw,640px)`-tall box | cover | 26px | Right third is covered by the front image — keep the subject left of centre |
| `who-image-front.webp` | Who we are, front plate | Caregiver seated with a senior woman, warm interior | ~4:5 portrait, 68%×80% of the same box | cover | 26px | Carries `0 18px 44px rgba(39,58,41,0.14)` |
| `care-home-image.webp` | Our Care Home | Caregiver leaning toward a smiling elderly resident, warm room | **3:4** desktop / 4:5 mobile | cover | 28px | Bottom ~30% sits under the dark stat card — keep faces in the upper two-thirds |

No hover state on any About Us image. No image changes on scroll beyond the reveal transforms in §9.

---

## 6. Icon Inventory

All icons are hand-written inline SVG on a 24×24 grid, `fill: none`, stroke-based. `lucide-react` matches the language closely; set `strokeWidth` explicitly per the table.

| Icon | Where | Size | Suggested lucide | Stroke |
|---|---|---|---|---|
| Carely leaf mark | Navbar, footer | 24 / 26px | **keep custom** | filled `#D2E761` + `#273A29` stem |
| Arrow up-right | Who We Are badge centre, CTA button | 26 / 19px | `ArrowUpRight` | 1.7 `#E2A76F` / 2 currentColor |
| Checkmark | Credential list ×2 | 16px | `Check` | 2.2 white |
| Bar chart + arrow out | Clinical Results | 30px | `TrendingUp` (or keep custom) | 1.8 white |
| Gear / sun-burst circle | Operational Results | 30px | `Settings` / `Sun` | 1.8 white |
| Document with lines | Compliance & Reporting | 30px | `FileText` | 1.8 white |
| Clock | Case Study Highlights | 30px | `Clock` | 1.8 white |
| Two people | Stat card ("200 +") | 38px | `Users` | 1.7 `#E2A76F` |
| Botanical rosette / frond | PageHero decoration | large | **keep custom** | 1.6 white, low opacity |
| Botanical line drawing | CTA decoration | large | **keep custom** | 1.4 `#273A29`, `opacity .13` |
| Four-point sparkle | CTA decoration | 20–30px | **keep custom** | filled `#E2A76F` |
| Map pin / mail / socials / send | Footer | 19–20px | `MapPin`, `Mail`, `Facebook`, `Instagram`, `Linkedin`, `Send` | see shared doc |
| Hamburger | Mobile nav | 18×14px | `Menu` | white bars |

The Operational Results glyph is a small circle with eight radiating ticks — closest lucide match is `Sun`, but the tick lengths differ slightly; if the swap reads differently, keep the inline SVG.

---

## 7. Design Tokens

See `SHARED_COMPONENTS.md` § Shared design tokens — colors, typography, layout, radius, shadows, and breakpoints are all documented there and apply unchanged to this page.

Values used **only** on this page:

```text
rgba(210,231,97,0.75)   Who We Are divider
#D2E761                 17+ vertical rule
#333A34                 Who We Are body copy (other inner pages use #6E756E)
0 18px 44px rgba(39,58,41,0.14)   front image shadow (the page's only shadow)
```

---

## 8. Responsive Specification

### Desktop (≥ 1440px)

- PageHero at full `1480px` max-width, `min-height` 380px, type at maximum.
- Who we are: two columns `0.9fr / 1.1fr`, vertically centered; overlapping image pair at full 660px width.
- Our Care Home: three columns `0.83 / 1 / 0.83`, image at 3:4.
- CTA copy block capped at 1000px, centered.
- Footer: four columns.

### Laptop / Tablet (768–1439px)

- **< 1180px** — Our Care Home drops to two columns: left text beside the image, right column full-width beneath as a two-up grid (its internal divider hides). Footer drops to two columns.
- **< 1100px** — Who we are becomes a single column: image pair first, then content. Reveal offsets switch from horizontal to vertical.
- **< 900px** — remaining reveal offsets switch to vertical.
- **< 860px** — navbar becomes hamburger + drawer.
- **< 760px** — Our Care Home fully stacks; image ratio becomes 4:5; right column's internal divider returns.
- Who we are's badge + body row wraps below 380px of body width, putting the badge above the paragraphs.
- Credential list items (`flex: 1 1 280px`) drop from side-by-side to stacked once the column is under ~600px.

### Mobile (375–767px)

- Single column throughout: nav (collapsed) → hero → image pair → Who we are content → Our Care Home left blocks → stat image → right blocks → CTA → footer.
- Gutters: 40px each side (`calc(100% - 80px)`) on content sections, 16px on the PageHero.
- Type floors: hero `h1` 42px, section `h2` 34–36px, `h3` 20px, body 17–18px, nothing below 15px.
- `aspect-ratio` keeps the Our Care Home photo from collapsing; the "200 +" card stays inset at 5% and shrinks its padding via `clamp`.
- The 136px badge stays 136px — it does not scale down.
- Nothing is hidden at any width except the Our Care Home right-column divider in the 760–1179px band (replaced by grid gap).

---

## 9. Interactions & Animations

### Continuous

| Name | Target | Keyframes | Timing |
|---|---|---|---|
| Badge spin | Who We Are badge ring | `rotate(360deg)` | 24s linear infinite, `transform-origin: 50% 50%` |

No hover on the badge — it is decorative.

### Scroll reveal (Who we are only)

Armed by the shared observer (see `SHARED_COMPONENTS.md`). Two observed rows: the image column and the content column. Base transition `opacity .95s`, `translate 1.05s`, `scale 1.2s`, `cubic-bezier(.22,1,.36,1)`; per-element overrides below.

| Element | From | Duration | Delay |
|---|---|---|---|
| Back image | `translate(-28px, 16px) scale(.985)` | .8s / .8s / .85s | 0 |
| Front image | `translate(26px, 24px) scale(.975)` | .85s / .85s / .9s | .13s |
| Eyebrow | `translate(0, 16px)` | .6s | .06s |
| H2 | `translate(0, 22px)` | .7s | .16s |
| Badge | `scale(.92)` | .55s | .28s |
| Paragraph 1 | `translate(0, 16px)` | .6s | .38s |
| Paragraph 2 | `translate(0, 16px)` | .6s | .5s |
| Divider | `scaleX(0)`, `transform-origin: left` | .5s | .62s |
| Credential 1 (row + check) | `translate(-15px, 0)` / check `scale(.85)` | .5s / .45s | .72s |
| Credential 2 (row + check) | `translate(15px, 0)` / check `scale(.85)` | .5s / .45s | .82s |
| Stat row | `translate(0, 22px)` | .7s | .92s |
| "17+" numeral | `scale(.94)` | .6s | 1.02s |
| Stat vertical rule | `scaleY(0)`, `transform-origin: bottom` | .6s | 1.02s |

The images animate in from opposite sides toward their overlap — that convergence is the intended read; don't flatten both to a vertical rise on desktop.

**Numeral accent:** once the content column is revealed, "17+" runs a one-shot `scale(1 → 1.025 → 1)` pulse over `.55s ease-out` with a `1.6s` delay — it lands just after the reveal chain finishes. Runs once, not on a loop.

**Below 1099px:** image offsets become `translate(0, 24px)` and credential offsets become `translate(0, 18px)` — vertical instead of horizontal.

### Hover / focus

Our Care Home has no hover states — it is a static results layout. Interactive hovers on this page are limited to the shared navbar, breadcrumb, CTA button, and footer; all are specified in `SHARED_COMPONENTS.md`.

### Reduced motion

`prefers-reduced-motion: reduce` stops the badge spin, cancels the "17+" pulse, and renders every revealed element at `opacity: 1` with no offset and no transition.

---

## 10. Reusable Components

Worth extracting:

```text
SiteNavbar          props: current                              [shared]
PageHero            props: titleMain, titleAccent, breadcrumbCurrent, image  [shared]
CtaSection          no props                                    [shared]
SiteFooter          no props                                    [shared]
SectionEyebrow      props: text, variant 'lora' | 'sans', align
IconCircle          props: size, bg, children
ResultBlock         props: icon, title, body, layout 'row' | 'column'
CredentialItem      props: label
Reveal              wrapper applying the observer + variant/delay classes
RotatingTextBadge    props: text, size, duration   (shared with the home page's Book Appointment badge, which adds a link + hover)
```

The four Our Care Home result blocks should come from one data array with a `layout` flag, not four hand-written copies. Do **not** componentize the decorative dots, rules, sparkles, or botanical SVGs — inline them.

---

## 11. Accessibility Notes

None of these change the visuals.

- Heading order: PageHero's title is the page's only `h1`. `WhoWeAre` and `OurCareHome` titles are `h2` (ids `who-title`, `care-home-title`), as is the CTA title (`cta-title`) and each footer column title. Result-block titles are `h3`.
- Each `<section>` carries `aria-labelledby` pointing at its heading — keep the pairing.
- The breadcrumb's current page has `aria-current="page"`; the active nav item too.
- Meaningful images need real `alt` text (see §5). The badge, all icon circles, dots, rules, sparkles, and botanical SVGs are `aria-hidden="true"` — preserve that so screen readers get the credential and result text without decorative noise.
- Opening hours and stat pairs elsewhere on the site use `<dl>`; the credential list here is a real `<ul>` — keep the list semantics.
- "17+" and "200 +" are plain text, not images. Do not convert them.
- The `<br>` in "Years of / experience" and in the footer address is intentional line-breaking; if the project prefers, replace with two spans, but keep the break.
- All focus outlines are specified in the shared doc. Do not remove them.
- Contrast is compliant at the specified values — `#6E756E` on `#F8FBEF` and `#333A34` on `#F3F6E9` both pass at 17–18px. Do not lighten either.

---

## 12. Suggested File Structure

Adapt to the project's existing conventions — this is a shape, not a mandate.

```text
src/
├── pages/
│   └── AboutUs/
│       ├── index.tsx
│       └── sections/
│           ├── WhoWeAreSection.tsx
│           └── OurCareHomeSection.tsx
├── components/
│   ├── layout/
│   │   ├── SiteNavbar.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── PageHero.tsx
│   │   └── CtaSection.tsx
│   └── ui/
│       ├── SectionEyebrow.tsx
│       ├── IconCircle.tsx
│       ├── ResultBlock.tsx
│       ├── RotatingTextBadge.tsx
│       └── Reveal.tsx
├── content/
│   └── about.ts        (paragraphs, credentials, result blocks, stats)
├── hooks/
│   └── useReveal.ts
└── assets/images/
    ├── about-hero-bg.webp
    ├── who-image-back.webp
    ├── who-image-front.webp
    └── care-home-image.webp
```

Keyframes (`spin`, the one-shot `num-pulse`) belong in the Tailwind config's `keyframes`/`animation` extend, or a single small global CSS block if the project already keeps one. Everything else should be Tailwind utilities with arbitrary values.

---

## 13. Instructions for Claude Code

1. **Inspect the existing project first.** Read the Tailwind config, global CSS, existing layout and UI components, path aliases, and how other pages are composed and routed. Do not write until you know the conventions.
2. **Reuse the project's architecture** — its file layout, naming, import style, and component patterns, rather than the structure suggested in §12.
3. **Reuse existing shared components** (buttons, inputs, section wrappers, icon wrappers) wherever they can be styled to match. Extend them with variants instead of adding parallel components.
4. **Reuse the existing Tailwind configuration.** Add only what is missing — extend `colors`, `keyframes`, `animation`, and `screens` (the 640/700/720/760/860/900/1040/1100/1180/1200 breakpoints listed in the shared doc) rather than replacing anything.
5. **Reuse existing fonts and global styles** where they match. If DM Sans / Lora are not loaded, add them (DM Sans 400/500/600/700 + 400 italic; Lora 400 italic) with the project's existing font strategy.
6. **Build the four shared components once** (`SiteNavbar`, `PageHero`, `CtaSection`, `SiteFooter`) — the Services and Contact Us handoffs reuse them. If they already exist from another page in this batch, reuse rather than duplicate.
7. **Wire in the assets** from §5 at the specified fit, ratio, radius, blur, and overlay. Where a photo is not yet supplied, use a neutral placeholder of the correct aspect ratio — never change the layout to fit a missing image.
8. **Reproduce the design exactly** as specified in §3, §4, and the shared tokens. Read the source `.dc.html` files in this folder for any value not covered here.
9. **Preserve all responsive behavior** in §8, including the three-stage Our Care Home column change and the divider that hides only in the 760–1179px band.
10. **Preserve all animations** in §9 — the 24s badge spin, the full staged reveal chain with its exact delays, the convergent image entrance, and the one-shot "17+" pulse at 1.6s.
11. **Do not touch unrelated project files.**
12. **Add no new dependencies** beyond `lucide-react` if the project has no icon library. No animation library is needed — CSS transitions plus one `IntersectionObserver`.
13. **Do not redesign any section**, and do not substitute a different animation for a specified one.
14. **Run the project** after implementing.
15. **Fix all TypeScript and build errors** — no `any` escapes, no `@ts-ignore`.
16. **Verify at 1440px, 1180px, 1100px, 1024px, 768px, and 375px**, and with `prefers-reduced-motion: reduce` enabled.
17. **Compare against `About Us.dc.html`** side by side before calling it done: section order, spacing rhythm, type scale, image overlap geometry, and the reveal timing.

---

## Files in this bundle

| File | What it is |
|---|---|
| `About Us.dc.html` | The approved page — **open this first**. Composition only; it imports the sections below. |
| `SHARED_COMPONENTS.md` | Navbar, PageHero, CtaSection, footer, and all design tokens/breakpoints |
| `WhoWeAre.dc.html` | "Who we are" section reference |
| `OurCareHome.dc.html` | "Our Care Home" section reference |
| `PageHero.dc.html` · `CtaSection.dc.html` · `SiteNavbar.dc.html` · `SiteFooter.dc.html` | Shared component references |
| `support.js` | Prototype runtime. **Not for production.** |
| `image-slot.js` | Prototype image-placeholder element. **Not for production** — replace with `<img>`. |

Open `About Us.dc.html` locally with all files in the same folder. Sibling pages are not included in this bundle; their nav links will 404, which is expected.
