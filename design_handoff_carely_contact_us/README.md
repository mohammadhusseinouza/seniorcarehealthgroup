# Claude Code Handoff — Carely Contact Us Page

## About the design files in this bundle

The `.dc.html` files here are **design references authored in HTML** — prototypes that show the approved look and behavior. They are not production code to copy. Their layout uses inline styles plus a small custom runtime (`support.js`, `image-slot.js`) that exists only to render the prototype. Neither runtime belongs in the target app.

Your task: **recreate this design in the existing React + TypeScript + Tailwind + Vite project**, using that project's conventions, and preserve the approved design exactly. Do not redesign, simplify, or "improve" any section.

**Fidelity: high (hifi).** All colors, type, spacing, and radii below are final.

Read `SHARED_COMPONENTS.md` first — the navbar, page hero, footer, and all design tokens/breakpoints live there. This file covers the two sections unique to Contact Us. When anything is ambiguous, read the source `.dc.html` directly; its inline `style="…"` values are literal CSS and map to Tailwind arbitrary values 1:1.

**Note:** this page does **not** use the shared `CtaSection` — the contact form is the call to action. Do not add the CTA band.

---

## 1. Page Overview

A short, functional contact page. An apricot page hero → a "Reach out" section pairing the invitation, a dark opening-hours card, and the contact form → a "Contact us" section pairing a desaturated map with address, email, and phone details → footer.

The two sections are deliberately tight against each other (`clamp(24px,2.4vw,36px)` of padding between them rather than the usual `clamp(70px,8vw,130px)`) so the form and the location details read as one continuous block. Preserve that asymmetric padding.

Page background is `#F3F6E9`; both sections sit on `#F8FBEF`.

---

## 2. Page Component Tree

```text
ContactUsPage
├── SiteNavbar            current="Contact Us"                       [shared]
├── PageHero              "Contact us" / breadcrumb Home / Contact Us  [shared]
├── ReachOutSection
│   ├── ReachOutIntro     (eyebrow, h2, lede)
│   ├── OpeningHoursCard  (dark card + definition list)
│   └── ContactForm       (5 fields + submit, on a grey panel)
├── ContactLocationSection
│   ├── LocationMap       (embedded map, desaturated)
│   └── LocationDetails
│       └── ContactDetail × 3   (Address, Email, Phone)
└── SiteFooter                                                        [shared]
```

Source files: `Contact Us.dc.html` (composition only) → `SiteNavbar`, `PageHero`, `ReachOut`, `ContactLocation`, `SiteFooter`.

---

## 3. Section-by-Section Specification

### ReachOutSection

Source: `ReachOut.dc.html`. Section background `#F8FBEF`, padding `clamp(70px,8vw,130px) 0 clamp(24px,2.4vw,36px)` — full top, **short bottom**. Inner `width: calc(100% - 80px); max-width: 1440px; margin: 0 auto`, `display: grid`, `align-items: start`, `gap: clamp(44px,5vw,90px)`. Columns `minmax(0,0.68fr) minmax(0,1fr)` at ≥1040px, single column below. Note `align-items: start` — the columns top-align rather than centering; the form panel is taller than the left column and that is intended.

**Left column**

1. **Eyebrow** — 9px `#E2A76F` dot + "Reach out", gap 11px, Lora italic `clamp(18px,1.6vw,22px)` `#273A29`.
2. **`h2`** — `margin-top: 18px`, DM Sans weight 700, `clamp(34px,3.4vw,56px)`, `line-height: 1.12`, `letter-spacing: -0.025em`, `#273A29`, `text-wrap: pretty`. Text: "Have questions? we're just" + an inline `<em>` in Lora italic 400 (`letter-spacing: 0`) "a message away". The lowercase "we're" is intentional — do not sentence-case it. The apostrophe is a typographic `’`.
3. **Lede** — `margin-top: 22px`, `max-width: 520px`, 18px `line-height: 1.6` `#6E756E`, `text-wrap: pretty`.
4. **OpeningHoursCard** — `margin-top: clamp(34px,3.6vw,52px)`, `max-width: 560px`, background `#273A29`, `border-radius: 22px`, padding `clamp(26px,2.6vw,36px)`.
   - Header row: `align-items:center; gap:18px` — a 56px `#E2A76F` circle with a 27px white clock icon (stroke 1.8) + `h3` DM Sans weight 700 `clamp(21px,1.8vw,26px)` `#FFFFFF`.
   - `<dl>` — `margin-top: clamp(24px,2.4vw,34px)`, `display: grid; gap: 16px`. Each row is a wrapping `<div>` with `display:flex; align-items:baseline; justify-content:space-between; gap:20px`; `<dt>` and `<dd>` both 17px `#F8FBEF`, the `<dd>` right-aligned. Keep the `<dl>`/`<dt>`/`<dd>` semantics — the space-between is styling only.

**ContactForm** (right column) — panel: background `#F3F4F2`, `border-radius: 26px`, padding `clamp(26px,3vw,52px)`. The form itself is a grid, `gap: clamp(18px,1.8vw,26px)`, `repeat(2, minmax(0,1fr))` at ≥640px, single column below.

Field order and spans: First Name, Last Name, Email, Phone (each one cell); Message (`grid-column: 1 / -1`); Submit (`grid-column: 1 / -1`).

Inputs: `width: 100%`, `height: 66px`, padding `0 22px`, `border: 1px solid transparent`, `border-radius: 14px`, background `#FFFFFF`, DM Sans 17px `#273A29`, `outline: none`. **Focus:** `border-color: #E2A76F` (the transparent rest border is what keeps the box from shifting on focus — keep it transparent, don't use `border: 0`). Placeholder color `#8A918B` at `opacity: 1`.

Textarea: same treatment, `min-height: 190px`, padding `20px 22px`, `line-height: 1.55`, `resize: vertical`, `rows="6"`.

Autocomplete attributes are set and should be carried over: `given-name`, `family-name`, `email`, `tel`.

Submit button: `margin-top: clamp(8px,1vw,16px)`, `width: 100%`, `min-height: 66px`, no border, `border-radius: 14px`, background `#E2A76F`, text `#FFFFFF` DM Sans 19px weight 700, `cursor: pointer`. Hover `background: #D2E761; color: #273A29` (`.25s ease` on both). Focus `outline: 2px solid #273A29; outline-offset: 3px`. Full-width — unlike every other button on the site, which is inline.

Every field has a visually hidden `<label>` (`position:absolute; width:1px; height:1px; overflow:hidden; clip-path: inset(50%)`) whose text matches the placeholder. Keep both — placeholders are not labels.

**Submission:** the prototype calls `preventDefault()` and does nothing, deliberately — there is no backend yet and faking a success state would be misleading. Wire this to the project's real form handling; if none exists, keep it inert rather than inventing a success screen, and flag it.

### ContactLocationSection

Source: `ContactLocation.dc.html`. Section background `#F8FBEF`, padding `clamp(24px,2.4vw,36px) 0 clamp(70px,8vw,130px)` — **short top**, full bottom, mirroring the section above. Inner `width: calc(100% - 80px); max-width: 1440px; margin: 0 auto`, `display: grid`, `align-items: center`, `gap: clamp(44px,5vw,80px)`. Columns `minmax(0,1fr) minmax(0,1fr)` at ≥1040px, single column below.

**LocationMap** (left) — `border-radius: 24px`, `overflow: hidden`, background `#E8ECE0` (the fallback behind a loading map), `aspect-ratio: 4 / 3` at ≥1040px, `16 / 10` below. Inside, a full-size embedded map: `width/height 100%`, `border: 0`, `display: block`, `filter: grayscale(0.85) contrast(0.95)`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`.

The prototype uses an OpenStreetMap embed centred on the marker at `34.0901, -118.4065` with bbox `-118.4405,34.0605,-118.3705,34.1105`. **Use whatever map provider the project already has** (Google Maps embed, Mapbox, a static image) — but keep the geometry, the 24px radius, and the `grayscale(0.85) contrast(0.95)` filter, which is what makes the map recede behind the apricot and green accents. A saturated default map will visibly break the palette.

Keep the `title` attribute on the frame: "Map showing the Senior Care Health Group location at 123 Maplewood Drive, Pinehill, CA 90210".

**LocationDetails** (right)

1. **Eyebrow** — 9px `#E2A76F` dot + "Contact us", gap 11px, Lora italic `clamp(18px,1.6vw,22px)` `#273A29`.
2. **`h2`** — `margin-top: 18px`, DM Sans weight 700, `clamp(34px,3.4vw,56px)`, `line-height: 1.12`, `letter-spacing: -0.025em`, `#273A29`, `text-wrap: pretty`. Text: "We're here to listen," + an inline `<em>` in Lora italic 400 "help, and support". Typographic apostrophe.
3. **Detail grid** — `margin-top: clamp(40px,4.4vw,66px)`, `display: grid`, `gap: clamp(28px,3vw,44px)`, `repeat(3, minmax(0,1fr))` at ≥720px, single column below.

**ContactDetail** — a 60px `#E2A76F` circle with a 28px white 1.7px-stroke icon; `h3` `margin-top: 22px`, DM Sans weight 700 `clamp(20px,1.7vw,25px)` `#273A29`; `p` `margin-top: 10px`, 17px `line-height: 1.6` `#6E756E`. The email detail's `p` adds `overflow-wrap: anywhere` (the address is long and must break rather than overflow at narrow widths) and its link is `#6E756E` with hover `#273A29` (`.25s ease`) and focus `2px solid #E2A76F` offset 2px.

---

## 4. Content

Use verbatim. Note the typographic apostrophes (`’`) and en dashes (`–`) — they are intentional.

**Page hero:** `Contact us` (accent italic on "us") · breadcrumb `Home / Contact Us`

**Reach out**
- Eyebrow: `Reach out`
- H2: `Have questions? we’re just a message away` (italic on `a message away`)
- Lede: `Fill out the form below and our team will get back to you shortly with the care and answers you need.`
- Hours card: `Opening hours` · `Monday – Friday` → `8:00 AM – 8:00 PM` · `Saturday – Sunday` → `Closed`
- Form placeholders / hidden labels: `First Name`, `Last Name`, `Email`, `Phone`, `Message`
- Submit: `Submit Message`

**Contact us**
- Eyebrow: `Contact us`
- H2: `We’re here to listen, help, and support` (italic on `help, and support`)
- `Address` — `123 Maplewood Drive,` / `Pinehill, CA 90210`
- `Email` — `info@seniorcarehealthgroup.com`
- `Phone` — `Available on request`
- Map title: `Map showing the Senior Care Health Group location at 123 Maplewood Drive, Pinehill, CA 90210`

"Available on request" is placeholder-shaped but it is the approved copy — the client has not supplied a number. Do not invent one; if a number arrives it drops into the same slot as a `tel:` link styled like the email link.

Footer copy is in `SHARED_COMPONENTS.md`. Note the hours card here uses en dashes (`Monday – Friday`) while the home page's Working Hours card uses hyphens — reproduce each as written rather than normalizing.

---

## 5. Asset Inventory

This page needs **one photograph**. Everything else is an embed, an icon, or type.

| File | Where | Subject | Aspect / rendered size | object-fit | Radius | Overlay |
|---|---|---|---|---|---|---|
| `contact-hero-bg.webp` | PageHero background | Caregiver with an elderly person, warm care setting | ~16:5 band, `min-height: clamp(250px,27vw,380px)` | cover | inherits `clamp(20px,2.4vw,34px)` | 72% `#E2A76F` wash; rendered at `inset:-6%`, `blur(9px)`, `scale(1.06)` |

The map is a live embed, not an asset — see §3. Its container carries `background: #E8ECE0` as the pre-load fill; if the project prefers a static map image instead, export it at 4:3 and apply the same `grayscale(0.85) contrast(0.95)` filter and 24px radius.

No image on this page has a hover state.

---

## 6. Icon Inventory

All icons are hand-written inline SVG on a 24×24 grid, `fill: none`, stroke-based, `#FFFFFF` inside `#E2A76F` circles. `lucide-react` matches the language closely; set `strokeWidth` explicitly.

| Icon | Where | Size | Suggested lucide | Stroke |
|---|---|---|---|---|
| Clock | Opening hours card | 27px | `Clock` | 1.8 white |
| Map pin | Address detail | 28px | `MapPin` | 1.7 white |
| Envelope | Email detail | 28px | `Mail` | 1.7 white |
| Phone handset | Phone detail | 28px | `Phone` | 1.7 white |
| Carely leaf mark | Navbar, footer | 24 / 26px | **keep custom** | filled `#D2E761` + `#273A29` stem |
| Botanical rosette / frond | PageHero decoration | large | **keep custom** | 1.6 white, low opacity |
| Map pin / mail / socials / send | Footer | 19–20px | `MapPin`, `Mail`, `Facebook`, `Instagram`, `Linkedin`, `Send` | see shared doc |
| Hamburger | Mobile nav | 18×14px | `Menu` | white bars |

All four content icons map cleanly to lucide — this page has no custom glyph problem. Only the logo mark and the hero botanicals must stay inline.

---

## 7. Design Tokens

See `SHARED_COMPONENTS.md` § Shared design tokens — colors, typography, layout, radius, shadows, and breakpoints are documented there and apply unchanged.

Values used **only** on this page:

```text
#F3F4F2                    form panel background (a neutral grey, not a cream — deliberate)
#8A918B                    placeholder text
#E8ECE0                    map container fill
grayscale(0.85) contrast(0.95)   map filter
transparent → #E2A76F      input border, rest → focus
```

The page has **no shadows**. Surfaces separate by background tint alone.

---

## 8. Responsive Specification

### Desktop (≥ 1440px)

- PageHero at full `1480px` max-width, `min-height` 380px, type at maximum.
- Reach out: two columns `0.68fr / 1fr`, **top-aligned**; form fields two-up; the form panel runs taller than the left column.
- Contact us: two equal columns, vertically centered; map at 4:3; three details across.
- Footer: four columns.

### Laptop / Tablet (768–1439px)

- **< 1180px** — footer drops to 2 columns.
- **< 1040px** — both content sections become single column. Reach out: intro → hours card → form panel. Contact us: **map first, then the details** (the map is first in DOM, so it stays on top when stacked — this is the approved order).
- **< 860px** — navbar becomes hamburger + drawer.
- **< 720px** — the three contact details stack into one column.
- **< 640px** — form fields drop to one column; Message and Submit already span full width.
- The map's `aspect-ratio` switches to `16 / 10` below 1040px so a full-width map does not become excessively tall.
- The hours card's `max-width: 560px` and the lede's `max-width: 520px` keep both from stretching across a wide single column.

### Mobile (375–767px)

- Single column: nav (collapsed) → hero → Reach out intro → hours card → form → map → Contact us heading → 3 details → footer.
- Gutters: 40px each side (`calc(100% - 80px)`) on content sections, 16px on the PageHero.
- Type floors: hero `h1` 42px, section `h2` 34px, `h3` 20–21px, body 17–18px. Nothing below 17px.
- Inputs stay 66px tall and the submit button stays 66px — comfortably above the 44px minimum touch target. Do not shrink them.
- The email address wraps mid-string via `overflow-wrap: anywhere` rather than overflowing.
- Section padding continues to be asymmetric (short between the two sections) at every width.
- Nothing is hidden at any width.

---

## 9. Interactions & Animations

This is the site's quietest page: **no scroll reveals, no continuous animation, no marquee, no card hovers.** Everything is form and link state.

| Control | Rest | Hover | Focus |
|---|---|---|---|
| Text inputs / textarea | `border: 1px solid transparent`, bg `#FFFFFF` | — | `border-color: #E2A76F` |
| Submit Message | bg `#E2A76F`, text `#FFFFFF` | bg `#D2E761`, text `#273A29` (`.25s ease` both) | `2px solid #273A29`, offset 3 |
| Email link (detail) | `#6E756E` | `#273A29` (`.25s ease`) | `2px solid #E2A76F`, offset 2 |
| Textarea resize | — | — | user-resizable vertically only |

Navbar, breadcrumb, and footer interactions are specified in `SHARED_COMPONENTS.md`.

The input focus treatment is worth noting: the border is `transparent` at rest rather than absent, so gaining a color on focus causes **no layout shift**. If you convert to Tailwind, use `border border-transparent focus:border-[#E2A76F]`, not `border-0 focus:border`.

**Form behavior to add** (the prototype has none): required-field validation, an inline error style drawn from the project's existing form patterns, a submitting state on the button, and a success message. Do not invent new visual language for these — use what the project already has. If the project has no form patterns, keep submission inert and flag it rather than guessing.

**Reduced motion:** the only transitions on the page are the `.25s` color fades on the submit button and the email link. `prefers-reduced-motion: reduce` should cancel them, consistent with the rest of the site.

---

## 10. Reusable Components

Worth extracting:

```text
SiteNavbar        props: current                                       [shared]
PageHero          props: titleMain, titleAccent, breadcrumbCurrent, image  [shared]
SiteFooter        no props                                             [shared]
SectionEyebrow    props: text, variant 'lora' | 'sans'
IconCircle        props: size, bg, children
TextField         props: name, type, placeholder, label, autoComplete, multiline, fullWidth
ContactDetail     props: icon, title, children
OpeningHoursCard  props: rows[{ label, value }]
```

`TextField` should cover both the input and the textarea via a `multiline` flag — they share every visual property except height and padding. The three contact details should come from one data array. Do **not** componentize the decorative dots — inline them.

If the About Us or Services pages were built first, `SectionEyebrow` and `IconCircle` already exist; reuse them.

---

## 11. Accessibility Notes

None of these change the visuals.

- Heading order: PageHero's title is the page's only `h1`. `ReachOut` and `ContactLocation` titles are `h2` (ids `reach-out-title`, `location-title`), as are the footer column titles. "Opening hours" and the three detail titles are `h3`.
- Each `<section>` carries `aria-labelledby` pointing at its heading — keep the pairing.
- **Every field already has a visually hidden `<label>`** matching its placeholder. Keep both; do not rely on the placeholder alone, and do not make the labels visible (that would change the approved design).
- Carry over the `autocomplete` attributes (`given-name`, `family-name`, `email`, `tel`) — they are already correct in the prototype.
- Add `required` to the fields the business needs (name and email at minimum) plus `aria-invalid` and `aria-describedby` wiring for error messages, using the project's existing error pattern.
- The map frame needs its descriptive `title` (given in §4) — it is the only accessible name a screen reader gets for the embed. If you swap providers, keep an equivalent title.
- The email address is a real `mailto:` link. When a phone number replaces "Available on request", make it a `tel:` link styled identically.
- The address `<br>` is intentional line-breaking; keep the break.
- Opening hours are a `<dl>` — day range as `<dt>`, time as `<dd>`. Keep the semantics; the space-between layout is styling only.
- All icon circles and decorative dots are `aria-hidden="true"` — preserve that so screen readers get "Address / 123 Maplewood Drive…" without icon noise.
- Contrast: `#6E756E` on `#F8FBEF` passes at 17–18px; `#8A918B` placeholder on `#FFFFFF` is intentionally low and acceptable **because a real label exists** — do not treat the placeholder as the accessible name. `#F8FBEF` on `#273A29` in the hours card passes comfortably.
- All focus outlines are specified in §9 and the shared doc. The inputs deliberately drop the default outline and replace it with a border color change — that is a visible focus indicator and is acceptable, but if the project's standard is a ring, adding one is an improvement worth flagging rather than silently changing.

---

## 12. Suggested File Structure

Adapt to the project's existing conventions — this is a shape, not a mandate.

```text
src/
├── pages/
│   └── ContactUs/
│       ├── index.tsx
│       └── sections/
│           ├── ReachOutSection.tsx
│           └── ContactLocationSection.tsx
├── components/
│   ├── layout/
│   │   ├── SiteNavbar.tsx
│   │   ├── SiteFooter.tsx
│   │   └── PageHero.tsx
│   └── ui/
│       ├── SectionEyebrow.tsx
│       ├── IconCircle.tsx
│       ├── TextField.tsx
│       ├── ContactDetail.tsx
│       └── OpeningHoursCard.tsx
├── content/
│   └── contact.ts        (hours rows, contact details, map coordinates)
└── assets/images/
    └── contact-hero-bg.webp
```

This page needs no keyframes and no observer — it is entirely Tailwind utilities.

---

## 13. Instructions for Claude Code

1. **Inspect the existing project first.** Read the Tailwind config, global CSS, existing form components, layout components, path aliases, and how other pages are composed and routed. Do not write until you know the conventions.
2. **Reuse the project's architecture** — its file layout, naming, import style, and component patterns, rather than the structure suggested in §12.
3. **Reuse existing shared components**, especially form inputs and buttons, wherever they can be styled to match. Extend them with variants instead of adding parallel components.
4. **Reuse the existing Tailwind configuration.** Add only what is missing — extend `colors` and `screens` (the 640/720/860/1040/1180 breakpoints in the shared doc) rather than replacing anything.
5. **Reuse existing fonts and global styles** where they match. If DM Sans / Lora are not loaded, add them (DM Sans 400/500/600/700 + 400 italic; Lora 400 italic) with the project's existing font strategy.
6. **Build the shared components once** (`SiteNavbar`, `PageHero`, `SiteFooter`) — the About Us and Services handoffs reuse them. If they already exist from another page in this batch, reuse rather than duplicate. **Do not add `CtaSection` to this page.**
7. **Use the project's existing map provider** for the location embed; keep the coordinates, 4:3 / 16:10 ratios, 24px radius, and the `grayscale(0.85) contrast(0.95)` filter (§3).
8. **Reproduce the design exactly** as specified in §3, §4, and the shared tokens — including the asymmetric section padding that pulls the two sections together, and the typographic apostrophes and en dashes in the copy. Read the source `.dc.html` files for anything not covered here.
9. **Preserve all responsive behavior** in §8, including the top-aligned (not centered) Reach out columns and the map-above-details stacking order.
10. **Preserve the focus and hover states** in §9 — in particular the transparent-to-apricot input border, which must not cause layout shift.
11. **Wire the form to the project's real submission handling.** If none exists, keep it inert (as the prototype is) and flag it — do not fake a success state. Add validation and error states using the project's existing patterns (§9, §11).
12. **Do not touch unrelated project files.** **Add no new dependencies** beyond `lucide-react` if the project has no icon library. No animation library is needed.
13. **Do not redesign any section.** Do not make the hidden field labels visible.
14. **Run the project** after implementing.
15. **Fix all TypeScript and build errors** — no `any` escapes, no `@ts-ignore`.
16. **Verify at 1440px, 1040px, 768px, 640px, and 375px**, with keyboard-only navigation through the whole form, and with `prefers-reduced-motion: reduce` enabled.
17. **Compare against `Contact Us.dc.html`** side by side before calling it done: the tight gap between the two sections, form panel padding, input heights, map desaturation, and detail grid alignment.

---

## Files in this bundle

| File | What it is |
|---|---|
| `Contact Us.dc.html` | The approved page — **open this first**. Composition only; it imports the sections below. |
| `SHARED_COMPONENTS.md` | Navbar, PageHero, footer, and all design tokens/breakpoints |
| `ReachOut.dc.html` | "Reach out" section reference (intro, hours card, form) |
| `ContactLocation.dc.html` | "Contact us" section reference (map + details) |
| `PageHero.dc.html` · `SiteNavbar.dc.html` · `SiteFooter.dc.html` | Shared component references |
| `support.js` | Prototype runtime. **Not for production.** |
| `image-slot.js` | Prototype image-placeholder element. **Not for production** — replace with `<img>`. |

Open `Contact Us.dc.html` locally with all files in the same folder. The map embed needs a network connection. Sibling pages are not included; their nav links will 404, which is expected.
