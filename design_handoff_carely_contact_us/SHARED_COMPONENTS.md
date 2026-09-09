# Shared Components — Carely site

These four components are used by more than one page. Build them **once** in the target project and pass props; do not fork per page. Full page-specific specs live in each page's `README.md`.

Global: body font `'DM Sans', sans-serif`, body margin 0. Inner pages set `body { background: #F3F6E9 }` and default link colors `a { color:#273A29 } a:hover { color:#E2A76F }`.

---

## SiteNavbar

Source: `SiteNavbar.dc.html`. Props: `current: 'Home' | 'About Us' | 'Services' | 'Programs' | 'Contact Us'`.

Outer band: full width, background `#F8FBEF`, padding `30px 0 8px`, flex centered.

Nav bar: `width: calc(100% - 64px)`, `max-width: 1080px`, background `#273A29`, `border-radius: 44px`, `height: 80px`, padding `8px 14px 8px 32px`, `display:flex; align-items:center; justify-content:space-between`.

- **Logo** (left, gap 9px): 24×24 leaf/flame SVG filled `#D2E761` with a `#273A29` 1.5px stem, then wordmark "Carely" — `#FFFFFF`, 25px, weight 500, `letter-spacing: -0.015em`. Links home.
- **Desktop links** (≥ 860px), row, gap 42px: Home · About Us · Services · Programs. Each 17px / weight 500 / `#FFFFFF`, `transition: color .2s ease`, hover `#D2E761`. The link matching `current` gets a trailing 6px `#D2E761` dot (gap 8px) and `aria-current="page"`.
- **Contact Us button**: height 52px, padding `0 30px`, `border-radius: 999px`, background `#FFFFFF`, text `#273A29` 17px weight 600. Hover bg `#D2E761`. Focus `2px solid #E2A76F` offset 2px.
- **Mobile trigger** (< 860px) replaces the whole link group: 44×44 circle, transparent, border `1.5px solid rgba(255,255,255,0.35)`, hover border `#D2E761`, focus `2px solid #D2E761` offset 2px. Icon: three 18×2px white bars (`rx: 1`) at y 0 / 6 / 12. `aria-label="Open menu"`, live `aria-expanded`.
- **Mobile drawer**: fixed full-screen scrim `rgba(10,10,10,0.35)`, `z-index: 10`, click-to-close. Panel `calc(100% - 64px)`, max-width 1080px, `margin-top: 120px`, background `#273A29`, `border-radius: 28px`, padding 12px, `height: fit-content`; clicks inside do not close. Items: full-width blocks, 17px weight 500 `#FFFFFF`, padding `14px 20px`, `border-radius: 14px`, hover `background: rgba(255,255,255,.08); color:#D2E761`. Last item (Contact Us) centered, background `#F8FBEF`, text `#0A0A0A` weight 700, `margin-top: 8px`, hover bg `#D2E761`.

Add (not in the prototype): `Escape` to close, focus trap while open, return focus to the trigger.

---

## PageHero

Source: `PageHero.dc.html`. Props: `titleMain`, `titleAccent`, `breadcrumbCurrent`, `slotId` (image id). **Every inner page uses this at identical dimensions — do not vary it per page.**

Section: `width: calc(100% - 32px)`, `max-width: 1480px`, `margin: clamp(20px,2.4vw,34px) auto 0`, background `#E2A76F`, `min-height: clamp(250px,27vw,380px)`, `border-radius: clamp(20px,2.4vw,34px)`, `overflow: hidden`, `position: relative`, centered column flex, padding `clamp(44px,5.5vw,72px) clamp(20px,4vw,60px)`.

Background stack, `position:absolute; inset:0; overflow:hidden; border-radius:inherit`:
1. Image wrapper `inset: -6%`, `filter: blur(9px)`, `transform: scale(1.06)` — the negative inset + scale hide the blur's soft edge. Image `object-fit: cover`.
2. Apricot wash: `inset:0`, `background:#E2A76F`, `opacity: .72`, `pointer-events:none`.

Two decorative white line-art SVGs, `fill:none; stroke:#FFFFFF; stroke-width:1.6; stroke-linecap:round`, `pointer-events:none`:
- Bottom-left floral rosette, `viewBox="0 0 200 200"`, `left: clamp(-70px,-4vw,-30px)`, `bottom: clamp(-70px,-4vw,-30px)`, `width: clamp(150px,17vw,230px)`, `opacity: .16`.
- Top-right leaf/frond, `viewBox="0 0 160 220"`, `right: clamp(-46px,-2.6vw,-18px)`, `top: clamp(-56px,-3.4vw,-24px)`, `width: clamp(100px,11vw,150px)`, `opacity: .18`.

Copy the path data verbatim from `PageHero.dc.html` — these are custom marks, not library icons.

- **`h1`** (`position:relative`, centered): DM Sans weight 700, `clamp(42px,6vw,78px)`, `line-height: 1.1`, `letter-spacing: -0.02em`, `text-wrap: balance`, `#FFFFFF`. Renders `{titleMain} <em>{titleAccent}</em>`; the `<em>` is Lora italic weight 400 with `letter-spacing: 0`.
- **Breadcrumb** `p`: `margin-top: clamp(16px,1.8vw,24px)`, centered flex row, gap 12px, `#FFFFFF`, `clamp(16px,1.7vw,23px)` weight 400. "Home" link (hover `opacity: .75`, `.2s ease`) · `/` at `opacity: .8` (`aria-hidden`) · current page label with `aria-current="page"`.

Per-page values:

| Page | titleMain | titleAccent | breadcrumbCurrent | slot id |
|---|---|---|---|---|
| About Us | `About` | `us` | `About Us` | `about-hero-bg` |
| Services | `Our` | `services` | `Services` | `services-hero-bg-2` |
| Contact Us | `Contact` | `us` | `Contact Us` | `contact-hero-bg` |

Hero background asset (all three pages): a caregiver with an elderly person in a warm care setting, `object-fit: cover`. It is heavily blurred and 72%-washed, so a single shared photo is fine; each page may use its own.

---

## CtaSection

Source: `CtaSection.dc.html`. No props. Used on **About Us** and **Services** (not Contact Us).

Section: background `#F3F6E9`, `position: relative`, `overflow: hidden`, padding `clamp(72px,8vw,130px) clamp(24px,5vw,72px)`.

Decorative, all `pointer-events: none`:
- Botanical line drawing, `viewBox="0 0 240 240"`, `stroke:#273A29` 1.4, `left: clamp(-70px,-4vw,-24px)`, `top: clamp(-56px,-3vw,-20px)`, `width: clamp(150px,17vw,250px)`, `opacity: .13`. Copy the paths from the source.
- Four-point sparkle, `viewBox="0 0 40 40"`, filled `#E2A76F` at `opacity: .85`, `left: clamp(26px,5vw,96px)`, `top: 52%`, `width: clamp(20px,2vw,30px)`.
- 10px `#E2A76F` dot at `left: 30%; top: 44%`.

Content: `max-width: 1000px; margin: 0 auto; text-align: center; position: relative`.
- Eyebrow: centered flex row, gap 11px — 9px `#E2A76F` dot + "Join Us Today" in Lora italic `clamp(18px,1.6vw,22px)` `#273A29`.
- `h2`: `margin-top: clamp(18px,2vw,28px)`, DM Sans weight 700, `clamp(34px,4.2vw,64px)`, `line-height: 1.12`, `letter-spacing: -0.025em`, `text-wrap: balance`, `#273A29`. Text: "Schedule a personalized tour or" then, as a **block-level** `<em>` (Lora italic 400, `letter-spacing: 0`, `line-height: 1.2`), "care consultation".
- Button, centered, `margin-top: clamp(34px,3.6vw,56px)`: `min-height: 56px`, padding `0 34px`, `border-radius: 14px`, background `#E2A76F`, text `#FFFFFF` 19px weight 600, gap 12px, trailing 19px arrow-up-right icon (`currentColor`, stroke 2). Hover `background:#D2E761; color:#273A29` (`.25s ease`); focus `2px solid #273A29` offset 3px. Links to the home page `#contact` anchor.

---

## SiteFooter

Source: `SiteFooter.dc.html`. No props. Used on every page.

Background `#273A29`, `position:relative`, `overflow:hidden`, padding `clamp(64px,7vw,100px) clamp(24px,4.5vw,72px) 34px`. Decorative (`pointer-events:none`): 400×400 `1px solid #D2E761` circle at `right:-120px; top:-140px` `opacity:.16`; 420×420 at `left:-150px; bottom:-180px` `opacity:.14`; 8px `#E2A76F` dot at `left:52%; top:42px` `opacity:.9`.

Inner `max-width: 1440px; margin: 0 auto`. Column grid `gap: clamp(40px,4.5vw,70px)`; tracks `minmax(0,1.15fr) minmax(0,1fr) minmax(0,0.7fr) minmax(0,1fr)` at ≥1180px, two equal columns at ≥720px, one below.

1. **Brand** — 26px logo mark + "Carely" 26px weight 500 `#FFFFFF` (`letter-spacing:-0.015em`), gap 9px. 44×3px `#E2A76F` rule (`border-radius:999px`, `margin: 24px 0 22px`). Paragraph `max-width:320px`, 18px `line-height:1.65` `#F8FBEF`: "Compassionate, professional, reliable senior care tailored to every need." Social row `margin-top:30px`, gap 14px: four 48px circles `background: rgba(248,251,239,0.1)`, 19px glyphs in `currentColor` at `#F8FBEF` — Facebook, Instagram, LinkedIn, Email (`mailto:`). Hover `background:#E2A76F; color:#273A29` (`.25s`); focus `2px solid #D2E761` offset 2px.
2. **Contact Information** — `h2` Lora 400 27px `#F8FBEF`; 36×2px `#E2A76F` rule (`margin: 14px 0 30px`). Map-pin icon (`#E2A76F` 1.6) + "123 Maplewood Drive," / "Pinehill, CA 90210" (`<br>`), 18px `line-height:1.6`. 1px `rgba(248,251,239,0.14)` divider, `margin: 26px 0`. "Email Address" Lora 20px `#D2E761`; then mail icon + `info@seniorcarehealthgroup.com` (17px, `mailto:`, hover `#D2E761`).
3. **Quick Links** — same `h2` + rule. Column list `gap: 20px`; each row a 7px `#E2A76F` dot (gap 13px) + 18px `#F8FBEF` link, hover `#E2A76F`. Items: Home, About Us, Services, Contact Us.
4. **Newsletter Subscription** — same `h2` + rule (`margin: 14px 0 26px`). Paragraph `max-width:320px`, 18px `line-height:1.6`, `margin-bottom:26px`: "Stay updated with care insights and services." Form `max-width:380px`, `height:64px`, border `1px solid rgba(210,231,97,0.32)`, `border-radius:12px`, padding 7px, flex row. Input transparent/borderless, 17px `#F8FBEF`, padding `0 14px`, placeholder "Enter Your Email", visually hidden label "Email address for newsletter". Submit 50×50, `border-radius:9px`, background `#E2A76F`, 20px paper-plane stroked `#273A29`, `aria-label="Subscribe"`, hover bg `#D2E761`, focus `2px solid #D2E761` offset 2px.

**Legal bar** — 1px `rgba(210,231,97,0.2)` rule, `margin: clamp(48px,5vw,80px) 0 28px`. Wrapping flex row (`justify-content: space-between; gap: 14px 32px`): "Copyright © 2026 Carely. All Rights Reserved." 16px `rgba(248,251,239,0.82)`; right side "Privacy Policy" · 6px `#E2A76F` dot · "Terms & Conditions" — 16px, hover `#E2A76F`, gap 16px.

---

## Shared design tokens

### Colors

```text
Primary (forest green)   #273A29   panels, dark cards, headings, hover fill
Accent (apricot)         #E2A76F   hero wash, icon circles, primary CTAs, dots
Accent 2 (lime)          #D2E761   logo leaf, hover fills, rules, focus rings
Accent 2 soft            #EAF3BE
Background cream         #F8FBEF   navbar band, alternating sections, footer ink
Background alt           #F3F6E9   inner-page body, CTA section
Surface white            #FFFFFF   cards, inputs
Surface form (grey)      #F3F4F2   Reach Out form panel
Surface map              #E8ECE0   map placeholder
Card border              #ECEFE4   ·  divider #E7EADF
Text primary             #273A29
Text secondary           #6E756E   inner-page body copy
Text tertiary            #333A34   Who We Are body copy
Placeholder              #8A918B
Text on dark             #FFFFFF / #F8FBEF
Divider on cream         rgba(39,58,41,0.12)
Divider on green         rgba(248,251,239,0.3) · rgba(255,255,255,0.16)
```

### Typography

Families: `'DM Sans', sans-serif` (400/500/600/700 + 400 italic) and `'Lora', serif`. Lora appears **only in italic** and only for accent phrases, eyebrows, and the "17+" numeral — load Lora italic 400; add regular 400 only if the project prefers a complete family.

```text
Page hero h1     DM Sans 700  clamp(42px,6vw,78px)   lh 1.10  ls -0.02em
Section h2       DM Sans 700  clamp(34px,3.3–4.2vw,56–64px)  lh 1.10–1.12  ls -0.025em
Who We Are h2    DM Sans 600  clamp(36px,3.4vw,60px) lh 1.12  ls -0.02em
Card / block h3  DM Sans 700  clamp(20px,1.7vw,25px)
Service card h3  DM Sans 700  clamp(21px,1.8vw,27px) lh 1.25   (primary)
                 DM Sans 700  clamp(20px,1.6vw,24px) lh 1.25   (secondary)
Footer h2        Lora   400   27px
Lede             DM Sans 400  18px  lh 1.6–1.65
Body             DM Sans 400  17px  lh 1.55–1.6
Eyebrow          Lora italic  clamp(18px,1.6vw,22px)   (inner pages)
                 DM Sans 400  17px                      (Who We Are)
Breadcrumb       DM Sans 400  clamp(16px,1.7vw,23px)
Stat numeral     Lora italic  clamp(52px,5vw,74px)  lh 1        (17+)
                 DM Sans 700  clamp(36px,3.6vw,54px) lh 1  ls -0.02em  (200 +)
Buttons          DM Sans 600–700  17–19px
Badge ring       DM Sans 400  12.5px  ls 1.4
```

`text-wrap: pretty` on long headings/paragraphs, `text-wrap: balance` on the hero `h1` and CTA `h2` — keep both.

### Layout

```text
Content width     calc(100% - 80px), max-width 1440px   (inner page sections)
                  calc(100% - 32px), max-width 1480px   (PageHero)
                  calc(100% - 64px), max-width 1080px   (navbar)
                  max-width 1000px                      (CTA copy block)
Section padding-y clamp(70px,8vw,130px) standard
                  clamp(72px,8vw,130px) CTA
                  clamp(60px,7vw,110px) top / clamp(70px,8vw,130px) bottom (ServiceCards)
Column gaps       clamp(40px,4vw,72px) OurCareHome · clamp(44px,5vw,90px) ReachOut
                  clamp(48px,5vw,80px) WhoWeAre · clamp(22px,2.2vw,32px) ServiceCards grid
Card padding      clamp(28px,2.8vw,40px) primary service card
                  clamp(24px,2.2vw,32px) secondary service card
                  clamp(26px,3vw,52px) form panel · clamp(26px,2.6vw,36px) hours card
Icon circles      74 / 66 / 60 / 56 / 30px, always 50% radius, background #E2A76F
```

### Radius

```text
44px  navbar        ·  clamp(20px,2.4vw,34px) PageHero
28px  OurCareHome image  ·  26px WhoWeAre images, ReachOut panel
24px  service cards, map  ·  22px hours card  ·  20px image stat card
14px  inputs, CTA + submit buttons  ·  12px newsletter  ·  9px newsletter submit
999px pills  ·  50% circles
```

### Shadows

```text
WhoWeAre front image   0 18px 44px rgba(39,58,41,0.14)
```

Everything else is flat — surfaces are separated by borders and background tint. Do not add shadows.

### Breakpoints

The prototype switches layout from JS width checks, not media queries. These are non-standard values — add them to Tailwind's `screens` or use arbitrary variants (`min-[1040px]:`). Rounding to Tailwind defaults will visibly change where things stack.

```text
1200  ServiceCards secondary grid → 4 columns
1180  OurCareHome → 3 columns  ·  footer → 4 columns
1100  WhoWeAre → 2 columns
1040  ServiceCards primary grid → 3 columns  ·  ReachOut → 2 columns  ·  ContactLocation → 2 columns
1099  (max) WhoWeAre reveal offsets go vertical
900   (max) generic reveal offsets go vertical
860   navbar → hamburger
760   OurCareHome → 2 columns, image ratio 3/4  ·  reveal rootMargin -22%
720   ContactLocation info → 3 columns  ·  footer → 2 columns
700   ServiceCards → 2 columns
640   ReachOut fields → 2 columns
```

### Reveal system (shared)

Sections that animate on scroll (`WhoWeAre` on About Us) use one contract, and it is **progressive enhancement: nothing is hidden until JS arms it**, so a JS failure leaves the page fully visible. Preserve that.

An `IntersectionObserver` (`threshold: 0`, `rootMargin: '0px 0px -30% 0px'`, `-22%` below 760px) adds an `in` class to each observed row, then unobserves it. A body-level `anim` class gates all the hiding rules. Base transition on revealed elements: `opacity .95s`, `translate 1.05s`, `scale 1.2s`, all `cubic-bezier(.22,1,.36,1)` (individual elements override duration/delay).

`@media (prefers-reduced-motion: reduce)` cancels every animation, transition, and transform across all pages: continuous loops stop, revealed elements render at `opacity: 1` with no offset, hover transforms are `none`. Reproduce this.
