# Handoff: Carely Senior-Care Homepage

## Overview

A single-page marketing homepage for **Carely**, a senior-care / facility-partnership healthcare provider. The page sells two audiences at once: families evaluating senior care, and facility operators evaluating a clinical partnership (telemedicine + on-site provider support). It ends on a risk-free 6-month pilot CTA and a contact form.

Sections, in order: floating navbar → hero (editorial grid + marquee value strip) → Core Services (3 alternating editorial rows) → Why Partner with Us (3×3 mosaic) → Who We Are (overlapping images + editorial column) → Risk-Free Pilot CTA → Contact ("write us a message") → Footer.

## About the Design Files

The files in this bundle are **design references created in HTML** — a working prototype that shows the intended look, layout, motion, and interaction behavior. They are **not production code to copy directly**.

`Navbar.dc.html` is authored in a design-tool component format: markup lives inside an `<x-dc>` element, styling is **inline `style="…"` attributes** (plus one `<style>` block in `<helmet>` for keyframes/reveal classes), `style-hover` / `style-focus` attributes express pseudo-states, `{{ … }}` holes are values from a small logic class, and `<sc-if>` is conditional rendering. `<image-slot>` is a drag-and-drop image placeholder used during design.

**Your task:** recreate this design in the target codebase's existing environment (React/Next, Vue, Astro, SwiftUI, etc.) using its established component patterns, styling solution, and image pipeline. If no environment exists yet, choose the most appropriate framework and implement there. Translate:

| In the prototype | In your implementation |
| --- | --- |
| Inline `style="…"` | The codebase's styling system (CSS modules, Tailwind, styled-components…) |
| `style-hover="…"` / `style-focus="…"` | `:hover` / `:focus-visible` rules |
| `<image-slot id="…">` | A real `<img>` / `next/image` with `object-fit` per the asset table |
| `{{ mosaicCols }}` etc. | CSS media queries (preferred) — see "Responsive" |
| `<sc-if value="{{ isMobile }}">` | CSS-driven responsive nav, or a JS breakpoint hook |
| `.om-*` reveal classes + IntersectionObserver | Your own reveal utility / hook, same values |

## Fidelity

**High-fidelity.** Colors, typography, spacing, radii, motion timings, and easing are final and specified exactly below. Recreate pixel-accurately using the codebase's libraries. Imagery is placeholder — real assets are pending (see Assets).

## Source of truth

The final design prototype (`Navbar.dc.html` in this bundle) is the **primary visual source of truth**. Where any earlier written instruction conflicts with it, follow the prototype. Do not reintroduce earlier variants.

---

## 1. Brand tokens

### Color

| Token | Hex | Use |
| --- | --- | --- |
| Deep Forest Green | `#273A29` | Navbar, hero editorial card, dark metrics tile, footer, primary buttons, body headings |
| Warm Apricot | `#E2A76F` | Working Hours card, metric icon circles, eyebrow dots, accent rules, Enroll Now / Let's Talk buttons, footer accents |
| Lime Green | `#D2E761` | Logo leaf, service icon circles, arrow chips, corner accents, dividers, hover fills, decorative rings |
| Soft Ivory (bg A) | `#F8FBEF` | Page background, sections A, footer text color |
| Section bg B | `#F3F6E9` | Alternating sections |
| White | `#FFFFFF` | Cards, form fields, floating pill, nav CTA |
| Near Black | `#0A0A0A` | Marquee text, form input text, pilot paragraph |

Supporting tints (used as-is, all derived from the palette):

- `#FCFDF7` benefit tile background
- `#EAF3BE` benefit icon circle, "Our Core Services" chip, pilot pill icon
- `#FBEEE0` light metrics tile background
- `#FCFBF3` contact form panel background
- `#EFF2E6` marquee strip background
- `#DCE8B4` form input border
- `#1D2C1F` "Learn more" button hover
- `#333A34` body copy on light backgrounds
- `rgba(39,58,41,0.09)` benefit tile border
- `rgba(210,231,97,0.9)` contact panel border, `rgba(210,231,97,0.75)` Who-We-Are divider
- `rgba(255,255,255,0.88)` hero paragraph, `rgba(255,255,255,0.16)` dark metric divider
- `rgba(248,251,239,0.82)` footer legal text, `rgba(248,251,239,0.1)` footer social chips

### Typography

Google Fonts: `DM Sans` (400, 500, 600, 700 + italic 400) and `Lora` (italic 400 only).

- **DM Sans** — everything by default: nav, body copy, UI, buttons, form fields, benefit tile titles, metric titles, hero H1 (weight 400), Who-We-Are H2 (600), Pilot H2 (600).
- **Lora Italic** — editorial accents only: hero eyebrow "Discover The Power Of Premium", the italic fragment inside the hero H1 (`individual's life journey`), Core Services H2 second line + service row H3s, Who-We-Are `compassion` and `care always`, Pilot H2 second line `for your facility`, Contact H2 `write us a message`, footer column headings, footer "Email Address" label, the `17+` numeral.

Type scale as authored (all `clamp(min, vw, max)`):

| Element | Size | Weight | Line-height | Letter-spacing |
| --- | --- | --- | --- | --- |
| Hero H1 | `clamp(30px,3.3vw,56px)` | 400 | 1.14 | -0.02em |
| Section H2 (Services) | `clamp(34px,4.4vw,62px)` | 400 Lora | 1.12 | — |
| Section H2 (Why Partner) | `clamp(34px,4.2vw,58px)` | 400 Lora | 1.14 | — |
| Section H2 (Who We Are) | `clamp(36px,3.4vw,60px)` | 600 | 1.12 | -0.02em |
| Section H2 (Pilot) | `clamp(36px,4.6vw,68px)` | 600 | 1.10 | -0.02em |
| Section H2 (Contact) | `clamp(46px,5.6vw,78px)` | 400 Lora | 1.05 | — |
| Service row H3 | `clamp(27px,2.6vw,35px)` | 400 Lora | 1.20 | — |
| Benefit tile H3 | `clamp(24px,2.1vw,29px)` | 500 | 1.22 | -0.01em |
| Metric H3 | `clamp(21px,1.8vw,25px)` | 500 | 1.25 | — |
| `17+` stat | `clamp(52px,5vw,74px)` | 400 Lora | 1 | — |
| Body large | 18–19px | 400 | 1.6–1.7 | — |
| Body / service copy | 17px | 400 | 1.6 | — |
| Eyebrow | 16–17px | 400/500 | — | — |
| Uppercase label ("SUCCESS METRICS") | 13.5px | 500 | — | 0.13em, uppercase |
| Buttons | 16–20px | 600 | — | — |

Apply `text-wrap: pretty` to headings and body paragraphs (as authored).

### Radii, shadows, spacing

- Radii: navbar pill `44px`; hero cards `32px`; hero sub-cards + marquee `26px`; service images `30px`; mosaic tiles `22px`; Who-We-Are images `26px`; contact panel `28px`; form fields `15px`; Enroll/Submit buttons `16px`/`15px`; pills `999px`; Who-We-Are images `26px`.
- Shadows (deliberately soft, forest-tinted): `0 18px 44px rgba(39,58,41,0.14)` front Who-We-Are image; `0 12px 34px rgba(39,58,41,0.06)` contact panel; `0 10px 30px rgba(39,58,41,0.12)` pilot floating pill; `0 16px 34px rgba(39,58,41,0.10)` mosaic tile hover.
- Section vertical padding: `clamp(64px,7vw,110px)` – `clamp(70px,8vw,130px)`. Horizontal gutters: `clamp(24px,4vw,60px)`.
- Grid gaps: hero `24px`; mosaic `16px`; service rows `clamp(32px,5vw,80px)`; Who-We-Are columns `clamp(48px,5vw,80px)`; footer columns `clamp(40px,4.5vw,70px)`.
- Content max-widths: navbar `1080px`; hero `1560px`; services `1340px`; mosaic wrapper `1340px` at `calc(100% - 64px)`; Who-We-Are `1440px` at `calc(100% - 80px)`; pilot `1180px`; contact `1440px`; footer `1440px`.

---

## 2. Section background system

Full-bleed section wrappers alternate:

| # | Section | Background |
| --- | --- | --- |
| 0 | Navbar band | A `#F8FBEF` |
| 1 | Hero | A `#F8FBEF` |
| 2 | Core Services | B `#F3F6E9` |
| 3 | Why Partner with Us | A `#F8FBEF` |
| 4 | Who We Are | B `#F3F6E9` |
| 5 | Risk-Free Pilot | A `#F8FBEF` |
| 6 | Contact | B `#F3F6E9` |
| 7 | Footer | `#273A29` |

`body` background is `#F8FBEF`. Internal cards keep their own colors — never inherit the section tone. Any new section continues the A/B alternation.

---

## 3. Section specs

### 3.1 Navbar

Floating centered pill inside an ivory band (`padding: 30px 0 8px`).

- `width: calc(100% - 64px)`, `max-width: 1080px`, `height: 80px`, `background:#273A29`, `border-radius:44px`, `padding: 8px 14px 8px 32px`, `display:flex; justify-content:space-between; align-items:center`.
- Left: 24px lime leaf logo mark + "Carely" 25px/500, `letter-spacing:-0.015em`, white. Gap 9px.
- Right (desktop): links `Home · About Us · Services · Programs` at 17px/500 white, `gap:42px`, hover `#D2E761` (0.2s); then **Contact Us** pill — white bg, `#273A29` text, 600, height 52px, `padding: 0 30px`, radius 999px, hover bg `#D2E761`, focus ring `2px #E2A76F` offset 2px.
- Mobile (< 860px): links replaced by a 44×44 hamburger button, transparent with `1.5px solid rgba(255,255,255,0.35)` border, radius 50px, hover border `#D2E761`, `aria-label="Open menu"`, `aria-expanded` bound to state.
- Drawer: fixed full-screen scrim `rgba(10,10,10,0.35)`, panel matches pill width, `margin-top:120px`, `background:#273A29`, radius 28px, `padding:12px`; items 17px/500 white, `padding:14px 20px`, radius 14px, hover `rgba(255,255,255,0.08)` + `#D2E761`; final Contact Us item `background:#F8FBEF`, `#0A0A0A`, 700. Clicking the scrim closes; clicks inside the panel do not propagate.
- Nav does not scroll-animate. It is not sticky in the prototype — if the codebase wants sticky, keep the same pill geometry.

### 3.2 Hero

`padding: 8px clamp(20px,3.2vw,48px) 60px`, inner `max-width:1560px`, column `gap:24px`.

Top block is a wrapping flex row, `align-items:stretch`, `gap:24px`:

- **Left column** (`flex: 1 1 620px`, `min-width:300px`, column, `gap:24px`):
  - **Editorial card** — `background:#273A29`, radius 32px, `padding: clamp(28px,3vw,52px)`. Contents: Lora-italic apricot eyebrow with 8px apricot dot — "Discover The Power Of Premium"; H1 "Delivering holistic senior care that honors each *individual's life journey*" (italic fragment in Lora); then a wrapping row (`justify-content:space-between`, `gap:32px`, `margin-top:clamp(40px,5vw,86px)`) holding the paragraph (max-width 560px, 18px/1.7, `rgba(255,255,255,0.88)`) and the **Book Appointment** circular badge; a 7px apricot pulse dot below (`margin-top:26px`, opacity .85).
  - **Book Appointment badge** — 132×132 anchor, `aria-label="Book Appointment"`, radius 50%; SVG circular text on a 52r arc, DM Sans 12.5px, `letter-spacing:1.6`, fill `#E2A76F`, content `Book Appointment ✳ Book Appointment ✳` at `startOffset:4%`; static 26px apricot up-right arrow centered. Hover: whole badge `scale(1.04)` (0.3s), ring speeds up 21s → 9s, arrow `translate(4px,-4px)`. Focus ring `2px #E2A76F` offset 4px.
  - **Sub-row** (wrap, `gap:24px`): small image card (`flex:1 1 260px`, `min-height:300px`, radius 26px, overflow hidden, floating inner wrapper) and **Working Hours** card (`flex:1 1 320px`, `background:#E2A76F`, radius 26px, `padding:32px`): H2 22px/600 white; 16px white paragraph (max-width 340px); `<dl>` pushed to the bottom (`margin: auto 0 0; padding-top:36px`), 2-col `auto auto`, `gap:14px 24px`, `align-items:baseline`, values right-aligned 500 — `Monday - Friday / 8:00 AM - 8:00 PM`, `Saturday - Sunday / Closed`.
- **Right column** — `flex: 1 1 440px`, `min-width:300px`, `min-height:720px`, radius 32px, overflow hidden; main caregiving image, spans the full height of both left rows on desktop.

**Value strip (marquee)** below the grid: outer `background:#EFF2E6`, radius 26px, `padding: 22px clamp(20px,2.4vw,36px)`, `overflow:hidden`. Inner track `display:flex; width:max-content` with **two identical `<ul>` groups** (second `aria-hidden="true"`), each `gap:40px`, `padding-right:40px`; each item `width: clamp(320px,30vw,470px)`, 50px apricot icon circle + 18px/500 `#0A0A0A` label. Items:

1. Family-Like Bonds, Not Just Staff and Residents
2. Comfort That Never Compromises on Dignity
3. Every Detail Designed with Seniors in Mind

Animation: `@keyframes` from `translateX(-50%)` to `translateX(0)` — i.e. **content travels left → right**, 26s linear infinite (32s below 760px), `will-change:transform`, `animation-play-state:paused` on hover, disabled under reduced motion. The duplicate group makes the loop seamless; never animate `left`.

### 3.3 Core Services

Centered header: 34px-tall chip `background:#EAF3BE`, `#273A29`, 15px/600, radius 999px, `padding: 0 18px` — "Our Core Services"; H2 in two blocks — line 1 `Comprehensive care,` (Lora regular `#273A29`), line 2 `wherever you need it.` (Lora italic `#E2A76F`); 18px/1.7 intro paragraph, max-width 880px.

Three `<article>` rows, wrapping flex, `align-items:center`, `gap: clamp(32px,5vw,80px)`, `margin-top: clamp(56px,7vw,88px)` (rows 2–3: `clamp(64px,8vw,110px)`). Alternation is done with `flex-direction: row-reverse` on row 2 — **do not convert to cards or a grid**.

| Row | Order | Title | Icon |
| --- | --- | --- | --- |
| 1 | text left / image right | Telemedicine Services | monitor + video |
| 2 | image left / text right | On-Site Care | house |
| 3 | text left / image right | Specialist Access | bar-chart / trend |

Text column `flex: 1 1 340px` (row 1 `max-width:420px`; rows 2–3 cap H3/paragraph at 420px): 70px lime (`#D2E761`) icon circle with 30px forest icon → H3 (Lora) → 17px/1.6 `#333A34` paragraph → **Learn more** pill: height 50px, `padding: 0 8px 0 26px`, radius 999px, `background:#273A29`, white 16px/600, trailing 34px lime circle with a 17px forest arrow; hover bg `#1D2C1F`, focus ring `2px #E2A76F` offset 3px.

Image column `flex: 1 1 520px`, `min-width:280px`, `height: clamp(300px,32vw,440px)`, radius 30px, `overflow:hidden`, `position:relative`; inner absolute image wrapper + an absolute tint overlay span.

### 3.4 Why Partner with Us — 3×3 mosaic

Wrapper `width: calc(100% - 64px)`, `max-width:1340px`. Header is a wrapping flex row, `align-items:flex-end`, `justify-content:space-between`, `gap:24px 32px`, `margin-bottom: clamp(32px,4vw,52px)`:

- Left: eyebrow "Partnership" — 16px/500 forest, preceded by a 2×2 lime square cluster (four 9px squares, `gap:3px`, alternating `border-radius: 3px 0 3px 0` / `0 3px 0 3px`); H2 "Why Partner with Us?" (Lora, `margin-top:14px`).
- Right: **Book Consultation** pill — height 52px, `padding: 0 31px`, radius 999px, `background:#273A29`, white 16px/600; hover `background:#D2E761; color:#273A29`; focus ring `2px #E2A76F` offset 3px.

Grid: `display:grid; gap:16px`, 3 columns desktop. **Exact tile order (source of truth):**

| # | Row/col | Tile |
| --- | --- | --- |
| 1 | R1 left | Benefit — "Integrated into your daily operations" (interlock/puzzle icon) |
| 2 | R1 center | Image — clinician with tablet |
| 3 | R1 right | Benefit — "Faster treatment, better outcomes" (stopwatch icon) |
| 4 | R2 left | Image — caregiver in green scrubs with senior woman |
| 5 | R2 center | **Dark** Success Metrics card |
| 6 | R2 right | Image — provider with senior man |
| 7 | R3 left | Benefit — "Reduce costs and improve staff satisfaction" (bar-chart icon) |
| 8 | R3 center | **Light** Success Metrics card |
| 9 | R3 right | Benefit — "Compliance with CMS & EHR integration" (shield-check icon) |

All tiles `min-height:300px`, radius 22px.

- **Benefit tile**: `background:#FCFDF7`, `border:1px solid rgba(39,58,41,0.09)`, `padding:34px`, `overflow:hidden`. 62px `#EAF3BE` icon circle with a 28px forest stroke icon; H3 `margin-top:30px`, `max-width:280px`; decorative lime corner accent — 30×30 span, `position:absolute; right:20px; bottom:20px`, `border-radius: 30px 0 0 0`, `background:#D2E761`.
- **Image tile**: radius 22px, `overflow:hidden`, image `object-fit:cover`, plus an absolute forest tint overlay (opacity 0 at rest).
- **Dark metrics tile**: `background:#273A29`, `padding:34px`, flex column, `overflow:hidden`. Decorative ring: 230×230 span, `1px solid #D2E761`, radius 50%, `opacity:0.16`, `right:-70px; top:20px`. Label "Success Metrics" 13.5px/500 uppercase `#D2E761`, `letter-spacing:0.13em`. Row 1 (`margin-top:26px`, `gap:18px`): 46px apricot circle with a white down-arrow icon + H3 "Reduced readmissions" (white). Divider: 1px `rgba(255,255,255,0.16)`, `margin: 26px 0`. Row 2: 46px apricot circle with a white clock icon + H3 "Faster treatment times".
- **Light metrics tile**: `background:#FBEEE0`, `padding:34px`, flex column. Decorative ring 150×150, `1px solid #E2A76F`, `opacity:0.35`, `right:14px; bottom:14px`, `z-index:0` (content `z-index:1`). Label uppercase `#E2A76F`. Row 1: apricot circle + dollar icon + H3 "Cost savings per facility/month" (forest). Divider 1px `rgba(39,58,41,0.13)`. Row 2: apricot circle + people icon + H3 "Staff retention improvements".

### 3.5 Who We Are

Two columns, `align-items:center`, `gap: clamp(48px,5vw,80px)`, wrapper `calc(100% - 80px)` / `max-width:1440px`. Desktop columns `minmax(0,0.9fr) minmax(0,1.1fr)`; single column below 1100px.

- **Left composition** — relative box, `max-width:660px`, `min-height: clamp(420px,38vw,640px)`. Back image: `position:absolute; left:0; top:0; width:62%; height:80%`, radius 26px. Front image: `left:32%; top:20%; width:68%; height:80%`, radius 26px, `z-index:2`, shadow `0 18px 44px rgba(39,58,41,0.14)`. **Preserve these percentages exactly** — the overlap is the composition.
- **Right column** (`max-width:700px`), in order:
  1. Eyebrow — 9px apricot dot + "Who we are", 17px `#E2A76F`.
  2. H2 (`margin-top:30px`, max-width 680px): "Integrated healthcare support with *compassion* and *care always*" — DM Sans 600 with the two italic fragments in Lora italic 400.
  3. Badge + copy row (`margin-top: clamp(32px,3.4vw,44px)`, wrap, `align-items:flex-start`, `gap:36px`): 136×136 circular badge — SVG text on a 53r arc, DM Sans 12.5px, `letter-spacing:1.4`, fill `#E2A76F`, content `Who We Are • Who We Are • Who We Are •` at `startOffset:2%`, with a static 26px apricot arrow centered; then the copy block (`flex:1 1 380px`, `min-width:280px`, `max-width:650px`) with paragraph 1 and paragraph 2 (`margin-top:24px`), both 18px/1.65 `#333A34`.
  4. Divider — 1px `rgba(210,231,97,0.75)`, `margin: 34px 0 30px`.
  5. Benefits `<ul>` — wrapping flex, `gap:18px 48px`, items `flex:1 1 280px`, each a 30px apricot circle with a white check + 17px/600 forest label: "24/7 Telemedicine Access", "Daily On-Site Provider Support".
  6. Experience stat (`margin-top:34px`, flex, `align-items:center`, `gap:26px`): `17+` in Lora italic; 1px × 60px `#D2E761` vertical rule; "Years of<br>experience" 19px/500.

### 3.6 Risk-Free Pilot CTA

Centered column, `max-width:1180px`, `padding: clamp(70px,8vw,105px) clamp(24px,4vw,60px) 0` + a 70px spacer div at the end (leaves room for the floating pill). Section is `position:relative; overflow:hidden` with four decorations: lime ring 300px at `left:-90px; top:-70px` (opacity .3); lime ring 360px at `right:-110px; bottom:60px` (opacity .28); 9px apricot dot at `left:9%; top:36%`; 7px apricot dot at `right:12%; top:44%`.

Content: eyebrow "Pilot Program" (9px apricot dot, 17px forest) → H2 two blocks — `Start with a risk-free pilot` (DM Sans 600) / `for your facility` (Lora italic, `letter-spacing:0`) → 19px/1.55 `#0A0A0A` paragraph, max-width 880px: "Explore a 6-month pilot designed to demonstrate the value of integrated provider support, telemedicine access, and faster clinical response." → **Enroll Now** button: height 60px, `padding: 0 36px`, radius 16px, `background:#E2A76F`, white 20px/600, trailing arrow; hover `background:#273A29`, focus ring `2px #273A29` offset 3px.

Visual: full-width box `height: clamp(320px,44vw,560px)`, `background:transparent`, image **`object-fit: contain`** — this slot expects a cut-out/transparent PNG of a clinician group. Floating pill overlapping its bottom edge: `position:absolute; left:50%; translateX(-50%); bottom:-24px`, `width: min(720px, calc(100% - 32px))`, white, radius 999px, `padding: 14px 26px 14px 14px`, shadow `0 10px 30px rgba(39,58,41,0.12)`; 40px `#EAF3BE` circle with shield-check icon + 17px/500 forest text "A guided 6-month pilot with measurable outcomes and low-risk onboarding."

### 3.7 Contact — "write us a message"

Grid `max-width:1440px`, `gap: clamp(48px,5vw,80px)`, `align-items:start`; desktop columns `minmax(0,0.82fr) minmax(0,1.18fr)`, single column below 1000px.

- **Left**: H2 in two blocks `write us` / `a message` (Lora, `clamp(46px,5.6vw,78px)`, line-height 1.05); 46×4 apricot rule (radius 999px, `margin-top:30px`); **Let's Talk** pill — height 60px, `padding: 0 32px`, radius 999px, `background:#E2A76F`, `#273A29` 19px/600, leading phone icon (`currentColor`), hover `background:#273A29; color:#FFFFFF`, focus ring `2px #273A29`; then a circular image `width: min(390px,100%)`, `aspect-ratio:1/1`, `border-radius:50%`, `margin-top:36px`.
- **Right — form panel**: `background:#FCFBF3`, `border:1px solid rgba(210,231,97,0.9)`, radius 28px, `padding: clamp(26px,3.4vw,50px)`, shadow `0 12px 34px rgba(39,58,41,0.06)`, `overflow:hidden`; decorative 260px lime ring at `right:-80px; bottom:-90px` (opacity .5). Header line (`margin-bottom:36px`): 30px leaf/plant icon (apricot stroke + lime fill) + "Fill out this simple form and we'll get back to you." at `clamp(20px,1.9vw,26px)`/600 forest.
- **Fields** — grid `gap:22px`, 2 columns ≥760px else 1: `Your name`, `Facility name`, `Role title`, `Phone number` (each half-width), then `Your email` and `Your message (optional)` spanning `1 / -1`. Inputs: height 76px, `padding: 0 22px`, `border:1px solid #DCE8B4`, radius 15px, white, 17px `#0A0A0A`; textarea height 190px, `padding:22px`, `resize:vertical`, `rows=5`. Focus: `border-color:#D2E761` + `box-shadow: 0 0 0 3px rgba(210,231,97,0.4)`. Each field has a visually-hidden `<span>` label (1×1px, `clip-path: inset(50%)`) matching its placeholder — **keep real `<label>`s in your implementation**; placeholders alone are not labels.
- **Submit**: height 58px, `padding: 0 34px`, radius 15px, `background:#273A29`, white 19px/600, trailing lime leaf icon; hover `background:#D2E761; color:#273A29`; focus ring `2px #E2A76F` offset 3px.
- No submit handler / validation exists in the prototype. Wire to the codebase's form handling; required fields: name, facility, role, phone, email (message optional).

### 3.8 Footer

`background:#273A29`, `padding: clamp(64px,7vw,100px) clamp(24px,4.5vw,72px) 34px`, `position:relative; overflow:hidden`. Decorations: lime ring 400px at `right:-120px; top:-140px` (opacity .16); lime ring 420px at `left:-150px; bottom:-180px` (opacity .14); 8px apricot dot at `left:52%; top:42px`.

Grid `max-width:1440px`, `gap: clamp(40px,4.5vw,70px)`; desktop columns `1.2fr 1fr 0.8fr 1.2fr`, 2 columns 680–999px, 1 column below.

1. **Brand** — 26px logo mark + "Carely" 26px/500 white; 44×3 apricot rule; 18px/1.65 `#F8FBEF` blurb "Compassionate, professional, reliable senior care tailored to every need."; four 48px social chips (`rgba(248,251,239,0.1)`, radius 50%, `#F8FBEF` icons — Facebook, Instagram, LinkedIn, Email) with `aria-label`s, hover `background:#E2A76F; color:#273A29`, focus ring `2px #D2E761`.
2. **Contact Information** — Lora 27px heading; 36×2 apricot rule; pin icon + "123 Maplewood Drive,<br>Pinehill, CA 90210"; 1px `rgba(248,251,239,0.14)` divider; Lora 20px lime label "Email Address"; envelope icon + `info@seniorcarehealthgroup.com` mailto, hover `#D2E761`.
3. **Quick Links** — Lora 27px heading + rule; four items (Home, About Us, Services, Contact Us), each a 7px apricot dot + 18px `#F8FBEF` link, `gap:20px`, hover `#E2A76F`.
4. **Newsletter Subscription** — Lora 27px heading + rule; 18px/1.65 blurb "Stay updated with care insights and services."; inline form: `max-width:380px`, height 64px, `border:1px solid rgba(210,231,97,0.32)`, radius 12px, `padding:7px`; transparent 17px `#F8FBEF` email input with placeholder "Enter Your Email" and a visually-hidden label; 50×50 apricot submit button, radius 9px, `aria-label="Subscribe"`, forest send icon, hover `background:#D2E761`.

Bottom: 1px `rgba(210,231,97,0.2)` rule (`margin: clamp(48px,5vw,80px) 0 28px`), then a wrapping row `justify-content:space-between`: "Copyright © 2026 Carely. All Rights Reserved." and `Privacy Policy · Terms & Conditions` separated by a 6px apricot dot; all 16px `rgba(248,251,239,0.82)`, hover `#E2A76F`.

---

## 4. Responsive behavior

Breakpoints in use: **760px** (form columns, marquee speed), **860px** (nav → hamburger), **900px** (reveal direction flips to vertical), **1000px** (contact columns), **1024px / 680px** (mosaic 3 → 2 → 1 column), **1099px** (Who-We-Are reveal direction), **1100px** (Who-We-Are columns).

In the prototype, grid column counts come from JS (`window.innerWidth`) because the design tool needs it. **In production, prefer CSS media queries** for `mosaicCols`, `whoCols`, `contactCols`, `fieldCols`, `footerCols`; keep JS only for the mobile nav state.

| Section | Desktop (≥1100) | Tablet (~680–1099) | Mobile (<680) |
| --- | --- | --- | --- |
| Navbar | full link row + Contact pill | hamburger below 860 | hamburger + drawer |
| Hero | left column + full-height right image | left/right wrap into two stacked bands (flex-basis driven) | fully stacked: editorial card → small image → Working Hours → main image |
| Marquee | 26s, 3 items visible | same | 32s below 760, items `clamp(320px,…)` wide |
| Core Services | alternating text/image rows | rows wrap; text above image (row 2 keeps reverse order) | stacked, image below text, images `min-height 300px` |
| Why Partner | 3 columns | 2 columns (≥680) — tile order preserved by DOM order | 1 column, order 1→9 |
| Who We Are | 0.9fr / 1.1fr, overlapping images | single column, images above copy | single column; badge wraps above the paragraphs |
| Pilot | centered, `contain` visual + floating pill | same, pill `calc(100% - 32px)` | same, shorter visual |
| Contact | 0.82fr / 1.18fr | single column below 1000 | single column, 1-col fields below 760 |
| Footer | 4 columns | 2 columns (≥680) | 1 column |

Mobile is not a shrunken desktop: horizontal reveal motion becomes vertical, content order is preserved, and hover effects are gated behind `@media (hover:hover) and (pointer:fine)`.

---

## 5. Animation specifications

### 5.1 Load-time (hero only — not scroll-triggered)

| Name | Keyframes | Timing | Applied to |
| --- | --- | --- | --- |
| `om-ken` | `scale(1)` → `scale(1.03)` | 12s `ease-in-out` infinite **alternate** | hero main image wrapper |
| `om-spin` | `rotate(360deg)` | 21s linear infinite, origin 50% 50% | Book Appointment circular text (arrow stays static); 9s on badge hover |
| `om-float` | `translateY(0)` → `-5px` → `0` | 7s `ease-in-out` infinite | hero secondary image wrapper (`top:-7px; height: calc(100% + 14px)` so the drift never exposes an edge) |
| `om-pulse` | `scale(1)/opacity .65` → `scale(1.15)/opacity 1` | 3.8s `ease-in-out` infinite | hero decorative apricot dot |
| `om-rise` | `opacity 0 → 1`, `translateY(22px) → 0` | 0.75s `cubic-bezier(.22,.7,.3,1)` both | hero eyebrow, H1, paragraph row, small image, Working Hours |
| `om-left` | `opacity 0 → 1`, `translate(-24px,10px) → 0` | 0.8s same easing | hero editorial card |
| `om-right` | `opacity 0 → 1`, `translateX(26px) → 0` | 0.8s same easing | hero main image column |
| `om-marquee-rtl` | `translateX(-50%)` → `translateX(0)` | 26s linear infinite (32s ≤760px) | marquee track |

Stagger delays for the hero entrance: `.om-d1 .12s`, `.om-d2 .26s`, `.om-d3 .4s`, `.om-d4 .54s`.

### 5.2 Scroll-reveal system

Progressive enhancement: nothing is hidden until JS runs. On mount the script adds `om-anim` to `<body>` (so no-JS users see final state), then observes every reveal target.

Base rule:

```css
.om-anim .om-rv {
  opacity: 0;
  transition: opacity .95s cubic-bezier(.22,1,.36,1),
              translate 1.05s cubic-bezier(.22,1,.36,1),
              scale   1.2s cubic-bezier(.22,1,.36,1);
}
.om-anim .om-in .om-rv,
.om-anim .om-in.om-rv { opacity: 1; translate: 0 0; scale: 1; }
```

Note it animates the **individual `translate` / `scale` properties**, not `transform` — that is deliberate, so hover effects can own `transform` on the same element without conflict. Keep that separation (or use nested wrappers if your stack can't animate individual properties).

Initial offsets (all revert to `0 0` / `1`):

| Class | Offset |
| --- | --- |
| `om-rv-txtL` / `om-rv-txtR` | `translate: ∓24px 10px` |
| `om-rv-imgL` / `om-rv-imgR` | `translate: ∓28px 0; scale:.985` |
| `om-rv-s1…s4` (internal stagger) | `0 12px scale .9` (dur .75s) / `0 14px` (+.16s) / `0 12px` (+.32s) / `0 10px` (+.48s) |
| `om-pv` (mosaic header items) | `0 20px`; `om-pvd1 +.12s`, `om-pvd2 +.25s` |
| `om-pt-l` / `om-pt-r` | `∓26px 0` |
| `om-pt-c` | `0 24px; scale .985` |
| `om-pt-il` / `om-pt-ir` (image tiles) | `∓26px 0; scale .99` |
| `om-ptd1` / `om-ptd2` (tile stagger) | `+.1s` / `+.2s` |
| `om-mv` (metric rows) | `0 10px` |
| `om-mvi` (metric icon circles) | `scale .9`, dur .4s |
| `om-rv-line` (dividers) | `scale: 0 1`, `transform-origin: left`, dur .5s |
| `om-md1…md4` (metric internals) | `+.26s / .38s / .5s / .6s` |
| `om-wb` (Who back image) | `-28px 16px; scale .985`, dur ~.8s |
| `om-wf` (Who front image) | `26px 24px; scale .975`, dur ~.85s, delay .13s |
| `om-wu` / `om-wu22` | `0 16px` (.6s) / `0 22px` (.7s) |
| `om-wpop` (Who badge) | `scale .92`, .55s |
| `om-wleft` / `om-wright` (benefits) | `∓15px 0`, .5s |
| `om-wchk` (check circles) | `scale .85`, .45s |
| `om-wnum` (`17+`) | `scale .94`, .6s |
| `om-wvline` (vertical rule) | `scale: 1 0`, `transform-origin: bottom`, .6s |
| `om-wd0…wd9` | `+.06 / .16 / .28 / .38 / .5 / .62 / .72 / .82 / .92 / 1.02s` |

Below **900px** `om-rv-txt*`/`om-rv-img*` become `0 20px` / `0 24px`; the mosaic direction classes become `0 20px; scale .99`; below **1099px** `om-wb`/`om-wf` become `0 24px` and `om-wleft`/`om-wright` become `0 18px`. No horizontal motion on small screens.

### 5.3 Scroll trigger rule (important)

One observer for all targets. Reveals must start only once the element is meaningfully in view, and **must never be able to strand content** (fast fling, End key, anchor jump):

```js
const rm = window.innerWidth < 760 ? '0px 0px -22% 0px' : '0px 0px -30% 0px';
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('om-in');
    obs.unobserve(e.target);
  });
}, { threshold: 0, rootMargin: rm });
document.querySelectorAll('.om-svc, .om-rvs').forEach((el) => io.observe(el));
```

The later trigger is expressed **entirely through the negative bottom `rootMargin`** (~30% desktop / ~22% mobile, which corresponds to the intended "~35% desktop / ~25-30% mobile visible" feel) with `threshold: 0`. Do **not** re-add an `intersectionRatio >= 0.35` gate: elements taller than the effective root, or scrolled past between callbacks, never satisfy it and stay invisible forever. Reveal is **one-time** — `unobserve` immediately, never replay on scroll up.

Observer targets (`.om-rvs`, plus `.om-svc` service rows which double as hover roots):

- each Core Services `<article>` (row-level, so rows fire independently)
- the mosaic `<header>`
- each of the 9 mosaic tiles (row-by-row cadence emerges naturally + the `ptd1/ptd2` stagger)
- the Who-We-Are image composition, and the Who-We-Are text column

### 5.4 Reveal sequences

**Core Services row** — text column and image column converge from opposite sides (row 1 & 3: text from left, image from right; row 2: image from left, text from right), and inside the text column: icon → title → paragraph → button (`s1`→`s4`).

**Why Partner** — header (eyebrow → heading → button, the button entering from `+26px` X) then the tiles: per row **left → center → right** at ~100ms apart, left/right sliding in horizontally, center rising with a slight scale. Each metrics card then reveals its internals: label → row 1 → divider (scaleX draw from left) → row 2, with the apricot icon circles scaling `0.9 → 1` in step with their row.

**Who We Are** — back image → front image (+130ms) → eyebrow → heading → badge (pop from `scale .92`, after which its circular text spins at 24s linear infinite; center arrow static) → paragraph 1 → paragraph 2 → lime divider drawing left→right → benefit 1 (from left) → benefit 2 (from right) → `17+` block, whose numeral gets **one** `1 → 1.025 → 1` emphasis pulse (`.55s ease-out`, delay 1.6s, `1` iteration) and whose vertical rule draws upward.

### 5.5 Hover specifications

All hover rules for the mosaic are wrapped in `@media (hover:hover) and (pointer:fine)`; do the same for any hover you add, so touch devices get none of it.

**Core Services row** (`.om-svc` root):

| Target | Effect | Transition |
| --- | --- | --- |
| row | `translateY(-4px)` | .5s ease-out |
| image | `scale(1.03)` + `brightness(1.02) saturate(1.02)` | .65s ease-out |
| tint overlay | opacity 0 → .05 (`#273A29`) | .6s ease-out |
| icon circle | `translateY(-2px) scale(1.08)` | .4s ease-out |
| title | `translateX(4px)` | .35s ease-out |
| Learn more pill | `translateY(-2px)`, bg → `#1D2C1F` | .35s / .25s |
| arrow chip | `translateX(4px) scale(1.08)` (6px when hovering the pill itself) | .35s ease-out |

**Mosaic tiles** (`.om-pt` tile root, `.om-pmos` grid root):

| Target | Effect | Transition |
| --- | --- | --- |
| tile | `translateY(-4px)`, shadow `0 16px 34px rgba(39,58,41,0.10)`, `border-color: rgba(210,231,97,0.85)` | .45s ease-out |
| non-hovered tiles | `filter: opacity(.945)` (hovered tile `filter:none`) | .35s ease |
| benefit icon circle | `translateY(-2px) scale(1.08)`; inner svg `rotate(4deg)` | .38s ease-out |
| benefit title | `translateX(3px)` | .38s ease-out |
| lime corner accent | `scale(1.18) translate(-2px,-2px)`, opacity → .9 | .38s ease-out |
| image | `scale(1.035)` + `brightness(1.02) saturate(1.02)` | .68s ease-out |
| image tint | opacity 0 → .04 (`#273A29`) | .55s ease-out |
| metric icon circle | `scale(1.07)`; down-arrow svg `translateY(2px)`; clock svg `rotate(6deg)` | .35s ease-out |
| metric title | `translateX(3px)` | .38s ease-out |
| metric divider | opacity → .75 | .45s ease-out |
| decorative ring | opacity → .4 | .45s ease-out |

Neighbor softening uses `filter: opacity()` rather than `opacity` specifically so it cannot fight the reveal's opacity transition — worth preserving if you keep the same one-property-per-concern approach.

**Buttons / links** (see section specs for exact values): nav links → `#D2E761`; nav Contact Us → `#D2E761` bg; Learn more → `#1D2C1F`; Book Consultation → lime bg + forest text; Enroll Now → forest bg; Let's Talk → forest bg + white text; Submit → lime bg + forest text; footer socials → apricot bg + forest icon; footer links → `#E2A76F`.

### 5.6 Reduced motion

`@media (prefers-reduced-motion: reduce)` must:

- stop `om-ken`, `om-spin`, `om-float`, `om-pulse`, `om-wspin`, the marquee, and the `17+` pulse (`animation: none`)
- force `om-rise` / `om-left` / `om-right` to `opacity:1; transform:none`
- force `.om-anim .om-rv` to `opacity:1; translate:0 0; scale:1; transition:none` (all content visible immediately, no stagger, no divider draw, no icon scaling)
- neutralize all hover transforms/filters for service rows and mosaic tiles (`transform:none; filter:none; transition:none`)

Simple color-only hover changes may remain. All content and functionality stay fully available.

### 5.7 Performance

`transform` / `translate` / `scale` / `opacity` / `filter` only — no `top`/`left`, no width/height animation, no layout-shifting reveals, no blur. One IntersectionObserver, no scroll polling. `will-change: transform` only on the four continuously-animating elements (ken-burns wrapper, spin rings, marquee track). Don't add an animation library for any of this — plain CSS + one observer is the whole system.

---

## 6. Assets & image mapping

Every image is currently a **placeholder** (`<image-slot>`); no final photography has been supplied. Replace each with a real asset. Slot ids map 1:1 to the table below; the `placeholder` text is the art direction brief for that slot.

| Slot id | Section / position | Subject brief | Crop / ratio | object-fit | Notes |
| --- | --- | --- | --- | --- | --- |
| `carely-hero-main` | Hero, right column | caregiver holding hands with seated senior woman | tall portrait, ~0.6:1, `min-height:720px` | cover | Ken-Burns zoom to 1.03 — supply ≥1.4× the rendered size |
| `carely-hero-secondary` | Hero, left sub-row | caregiver with seated elderly man, home setting | ~4:5, `min-height:300px` | cover | inside the floating wrapper (`±5px` drift) |
| `svc-telemedicine` | Core Services row 1, right | senior on video call with doctor, laptop at home | landscape, `clamp(300px,32vw,440px)` tall | cover | zooms to 1.03 on hover |
| `svc-onsite` | Core Services row 2, left | caregiver and senior talking by a window | same | cover | same |
| `svc-specialist` | Core Services row 3, right | specialist consult / clinical review | same | cover | same |
| `partner-staff` | Mosaic tile 2 (R1 center) | clinician with tablet, warm care setting | ~1:1, `min-height:300px` | cover | zooms to 1.035 on hover |
| `partner-caregiver` | Mosaic tile 4 (R2 left) | caregiver in green scrubs with senior woman | same | cover | same |
| `partner-provider` | Mosaic tile 6 (R2 right) | provider in green scrubs talking with senior man | same | cover | same |
| `who-image-back` | Who We Are, back layer | caregiver standing beside seated senior woman | tall, 62% × 80% of the composition box | cover | partially covered on its right by the front image |
| `who-image-front` | Who We Are, front layer | caregiver seated with senior woman, warm interior | tall, 68% × 80%, offset `left:32%; top:20%` | cover | carries the drop shadow; keep subject clear of the left third |
| `pilot-team` | Pilot CTA, centerpiece | group of four clinicians | wide group shot, `clamp(320px,44vw,560px)` tall | **contain** | **transparent-background cut-out PNG required** (section shows through) |
| `contact-portrait` | Contact, left column | senior couple and care rep looking at a tablet | **1:1**, masked to a circle, ≤390px | cover | subject centered; nothing important near the corners |

Icons are all **inline SVG**, 1.4–1.8 stroke weight, `currentColor` or explicit `#273A29` / `#FFFFFF` / `#E2A76F` strokes — reuse them from the prototype or map to the codebase's icon set at matching weights. The Carely logo mark (lime leaf with a forest stem) is inline SVG in the navbar and footer; **use the project's existing brand asset if one exists** rather than inventing a new logo.

Fonts load from Google Fonts: `DM Sans:ital,wght@0,400;0,500;0,600;0,700;1,400` + `Lora:ital@1`. Self-host in production if the codebase does.

---

## 7. Accessibility requirements

- One `<h1>` (hero). Every section is a `<section aria-labelledby>` pointing at its heading (`hero-title`, `services-title`, `partner-title`, `who-title`, `pilot-title`, `contact-title`); footer is `<footer>`. Keep the heading hierarchy when converting to components.
- All decorative shapes, rings, dots, dividers, and duplicate marquee content are `aria-hidden="true"`. Keep that on the second marquee group so screen readers don't read the list twice.
- Icon-only controls carry `aria-label`: hamburger ("Open menu", with `aria-expanded`), Book Appointment badge, footer socials, newsletter Subscribe.
- Every form control has a real label (visually hidden in the design) — do not ship placeholder-only fields.
- Visible focus everywhere: `outline: 2px solid` in `#E2A76F`, `#273A29`, or `#D2E761` (per element, see specs) with `outline-offset: 2–4px`. Prefer `:focus-visible`.
- The mobile drawer should trap focus and close on Escape — not implemented in the prototype; add it.
- Text contrast: white/ivory on `#273A29` and forest on lime/ivory all pass AA at the sizes used. If you re-tint anything, re-check.
- Reduced motion as specified in 5.6. Hover-only affordances carry no information.
- Marquee pauses on hover; consider also pausing on focus-within for keyboard users.

---

## 8. Suggested component breakdown

Adopt the codebase's existing conventions and naming first; this is only a decomposition suggestion.

```
Navbar            (+ MobileDrawer)
HeroSection
  ├ HeroEditorialCard
  ├ CircularBadge        (reused: hero "Book Appointment", Who-We-Are "Who We Are")
  ├ WorkingHoursCard
  └ HeroValueMarquee     (+ MarqueeItem)
CoreServicesSection
  └ ServiceRow           (props: title, body, icon, image, side)
WhyPartnerSection
  ├ BenefitTile          (props: icon, title)
  ├ ImageTile            (props: image, alt)
  └ MetricsTile          (props: variant 'dark' | 'light', rows[])
WhoWeAreSection
  └ OverlappingImagePair
RiskFreePilotSection
  └ FloatingPill
ContactSection
  └ ContactForm          (+ TextField / TextArea)
SiteFooter
  ├ FooterBrand / FooterLinks / FooterContact
  └ NewsletterForm
```

Cross-cutting primitives worth extracting: `Reveal` (wrapper applying the `om-rv*` classes + shared observer), `PillButton` (forest / apricot / lime variants, optional trailing chip), `SectionShell` (full-bleed A/B background + max-width + gutter), `IconCircle` (sizes 30/40/46/50/62/70, lime / apricot / `#EAF3BE` fills), `DecorativeRing`.

State needed: `menuOpen` (boolean, mobile drawer) and viewport width only if you keep JS-driven columns. Reveal state lives in the DOM (`om-in` class), one-time.

---

## 9. Do-not-change constraints

- **Mosaic tile order** — the 9-tile sequence in 3.4 is approved and exact; do not reflow, reorder, or "balance" it.
- **Who-We-Are image overlap** — the `62%/80%` and `68%/80%` + `left:32%/top:20%` offsets are the composition.
- **Core Services stays editorial** — alternating full-width rows, not a card grid.
- **Navbar geometry** — 80px tall, `max-width:1080px`, radius 44px, centered pill.
- **Marquee direction** — content moves left → right, seamless, duplicated group, no visible jump.
- **A/B background alternation** and the one-to-two-background-colors-per-page discipline.
- **Motion character** — calm, small (≤30px), ease-out, one-time; no bounce, flip, 3D tilt, rotation of tiles, or dramatic shadows.
- **Scroll trigger** — one-time, rootMargin-driven, never a ratio gate (see 5.3).
- **Reduced-motion handling** — do not drop it.
- Copy is approved: use the exact strings in this document.

---

## 10. Implementation checklist

Priority order — layout accuracy first, decoration last. Do not trade layout fidelity for animation.

1. [ ] Scaffold section shells with the A/B background alternation and max-width/gutter system
2. [ ] Exact layout: hero grid, service rows, 3×3 mosaic order, Who-We-Are overlap, contact and footer grids
3. [ ] Spacing and proportions: section padding, gaps, radii, card min-heights, content max-widths
4. [ ] Typography: DM Sans + Lora Italic wiring, `clamp()` scale, weights, line-heights, letter-spacing, `text-wrap: pretty`
5. [ ] Colors and borders, including the supporting tints
6. [ ] Images: real assets, `object-fit` per the table, transparent PNG for `pilot-team`, circular mask for `contact-portrait`
7. [ ] Responsive: breakpoints in section 4, CSS-driven columns, vertical reveal motion below 900/1099px, mobile nav + drawer
8. [ ] Scroll reveals: shared observer with the exact rootMargin config, per-element offset/delay classes, one-time
9. [ ] Hover interactions behind `@media (hover:hover) and (pointer:fine)`
10. [ ] Load-time hero motion: Ken Burns, badge spin, float, pulse, marquee (+ hover pause)
11. [ ] Decorative details: rings, dots, corner accents, dividers, floating pill
12. [ ] Accessibility pass: headings, labels, `aria-label`s, focus-visible rings, drawer focus trap + Escape
13. [ ] `prefers-reduced-motion` pass across every animation and hover
14. [ ] Form wiring: validation, submit handling, success/error states (not designed yet — flag if you need designs)
15. [ ] Verify against the prototype at 1440 / 1024 / 768 / 390 widths

---

## 11. Files in this bundle

| File | What it is |
| --- | --- |
| `Navbar.dc.html` | The complete homepage design prototype — visual source of truth. Open in a browser to see it live (layout, reveals, hover, marquee). |
| `image-slot.js` | The drag-and-drop image placeholder web component used by the prototype. Design tooling only — do not port. |
| `support.js` | Runtime for the design-component format (template holes, `sc-if`, inline-style compilation). Design tooling only — do not port. |

Not designed yet, flag if needed: form success/error states, inner pages behind the nav links, 404/loading states, dark mode.
