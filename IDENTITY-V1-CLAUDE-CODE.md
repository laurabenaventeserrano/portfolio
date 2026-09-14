# Laura Benavente — Visual Identity V1 · Implementation spec

**Status: DEFINITIVE. This file overrides any earlier identity guidance in this repo.**
Approved 2026-09-08. Instruction to the agent: apply this spec and overwrite whatever
conflicts with it. Do not preserve old values "just in case", do not add compatibility
aliases for deprecated tokens, and do not invent anything that is not written here.

Visual reference: `laura-benavente-identity/Visual Identity Board V1 (LOCKED).dc.html`

---

## 0 · The idea

Light through glass. Black ink on blanco roto, one magenta accent, and the prism
spectrum used only as a hairline. Editorial, restrained, print-influenced.

---

## 1 · Tokens — copy verbatim

Write these into the project's global stylesheet. These are the only colours the
interface may use.

```css
:root{
  /* grounds — two, plus one inset per ground. No third ground. */
  --lb-ground:        #0A0A0C;  /* dark ground. never #000 */
  --lb-raised:        #141416;  /* raised card on dark */
  --lb-cream:         #FDFBF6;  /* paper ground, "blanco roto" */
  --lb-paper-inset:   #F2EFEA;  /* inset panel on paper */

  /* ink on dark */
  --lb-ink:           #F2EFEA;  /* 17.8:1 — display + strong */
  --lb-ink-2:         #BDB9B3;  /* 9.1:1  — body */
  --lb-mid:           #8C8A87;  /* 4.4:1  — metadata, 14px and below only */
  --lb-line:          rgba(242,239,234,.14);
  --lb-line-strong:   rgba(242,239,234,.28);

  /* ink on paper */
  --lb-cream-ink:     #111111;  /* display + strong */
  --lb-cream-body:    #3A3835;  /* body */
  --lb-cream-meta:    #6B6863;  /* metadata */
  --lb-line-on-paper: rgba(20,20,22,.16);

  /* accent — one colour, two contexts */
  --lb-accent:        #F2607F;  /* on dark  — 6.3:1 */
  --lb-accent-deep:   #C22A50;  /* on paper — 5.6:1 */

  /* prism — seven dispersion stops */
  --lb-p1:#1E2A78; --lb-p2:#2F5FD0; --lb-p3:#2FA7C4; --lb-p4:#63BE6E;
  --lb-p5:#E3C64B; --lb-p6:#E8834B; --lb-p7:#E2436B;
  --lb-prism:linear-gradient(90deg,
    var(--lb-p1) 0%,  var(--lb-p2) 18%, var(--lb-p3) 36%, var(--lb-p4) 53%,
    var(--lb-p5) 70%, var(--lb-p6) 85%, var(--lb-p7) 100%);
  --lb-prism-sm:linear-gradient(90deg,
    var(--lb-p2), var(--lb-p4), var(--lb-p5), var(--lb-p7));

  --lb-radius: 2px;  /* the maximum. there is no larger radius. */
}
```

**Deprecated — delete on sight, no alias:** `#B23A20` and any orange; any accent other
than the two above; any ground other than the four above; any `border-radius` value
above 2px.

---

## 2 · Type

Load from Google Fonts: **Libertinus Serif** (400 + italic), **Roboto** (300/400/500),
**Roboto Mono** (400/500).

```css
--lb-font-display: 'Libertinus Serif', Georgia, serif;
--lb-font-body:    'Roboto', Helvetica, Arial, sans-serif;
--lb-font-mono:    'Roboto Mono', ui-monospace, monospace;
```

Three roles, no fourth family, no substitutions:

| Role | Family | Used for |
|---|---|---|
| Thinks | Libertinus Serif | display, headlines, numerals, pull quotes |
| Explains | Roboto | body copy, UI text, captions |
| Labels | Roboto Mono | tags, dates, kickers, hex values, meta |

Mono is always uppercase with `letter-spacing` between `.1em` and `.24em`.
Never use Inter, Playfair Display, Poppins, Montserrat, Arial or system-ui as display.

Scale (adjust proportionally for other canvas widths, keep the ratios):

```
display-xl  Libertinus 96px / .82
display-l   Libertinus 56px / 1.02  letter-spacing -.015em
display-m   Libertinus 30px / 1
display-s   Libertinus 19px / 1.18
numeral     Libertinus 34px / 1     (section numbers)
body        Roboto 14px / 1.7
body-s      Roboto 12–13px / 1.6
label       Mono 10px, .16em, uppercase
kicker      Mono 9–11px, .2em, uppercase
```

---

## 3 · The prism line — the one ornament

The seven stops appear **only** as a hairline: rules, dividers, underlines, progress.

```css
.lb-prism-rule{ height:2px; background:var(--lb-prism); border-radius:1px; }
.lb-prism-rule--thin{ height:1px; }
.lb-prism-rule--short{ background:var(--lb-prism-sm); }  /* widths under ~120px */
.lb-prism-rule--fade{
  background:linear-gradient(90deg,transparent,
    var(--lb-p3),var(--lb-p4),var(--lb-p5),var(--lb-p7),transparent);
}
```

Hard limits:
- Maximum height **2px**. Never taller. Square ends.
- **Never** a background, fill, wash, card surface, or anything behind text. The one
  enclosed use is the 1px border of primary and secondary buttons (§4) — still a
  hairline, never a fill.
- Never blurred, glowed, shadowed, animated, or rotated.
- Under ~120px width use the 4-stop short range so the spectrum still reads.
- The only exception to the 2px rule is the p1–p7 swatch strip inside documentation.

---

## 4 · Components

### Wordmark — typographic, no symbol
Primary lockup: a 2px prism rule (~172px), then `Laura Benavente` in Libertinus 30px,
then the role line in Mono 9px at `.24em` uppercase in meta colour.
Small: 1.5px short-range prism rule + Libertinus 14px.
Reduced: `LB` in Libertinus, `.02em` tracking. There is no icon mark.

### Tag
Mono 10px, uppercase, `.1em`, padding `5px 9px`, radius 2px, 1px border.
- `neutral` — hairline border, body ink
- `accent` — accent border + accent text
- `solid` — accent fill, ground-coloured text

### Button — three levels + disabled, radius 2px, Roboto 12px/500

The prism hairline is the **border** of primary and secondary alike. What separates them
is the interior: primary is a light chip one step above the surface, secondary repeats the
surface so only the contour shows. Tertiary has no border at all.

- `primary` — 1px prism border, interior `--lb-cream` on paper / `--lb-ink` on dark,
  text in the opposite ink. Padding `11px 20px`.
  **Hover inverts:** border to 1.5px, interior to `--lb-cream-ink` on paper /
  `--lb-ground` on dark, text flips to the light value. The spectrum never changes.
- `secondary` — 1px prism border, interior repeats the surface ground
  (`--lb-paper-inset` on paper, `--lb-ground` on dark). Padding `10px 19px`.
- `tertiary` (link) — no border, no fill, no accent: ink text on its ground —
  black on white, white on black. Hover adds a 1px short-range prism underline.
- `disabled` — 1px neutral hairline border (no prism), inset-panel interior,
  meta-colour text. The absence of spectrum IS the state.

Built as a 1px gradient-padded wrapper, never with `border-image` and never with a
gradient background behind the label:

```css
.btn{
  padding:1px;                      /* = the hairline weight */
  border-radius:2px;
  background:var(--lb-prism);       /* the BORDER, not the fill */
}
.btn > span{
  display:block; border-radius:1px;
  font:500 12px/1 var(--lb-font-body);
}

.btn--primary > span{
  padding:11px 20px;
  background:var(--lb-cream); color:var(--lb-cream-ink);
}
.btn--primary:hover{ padding:1.5px; }
.btn--primary:hover > span{
  padding:10.5px 19.5px;
  background:var(--lb-cream-ink); color:var(--lb-cream);
}

.btn--secondary > span{
  padding:10px 19px;
  background:var(--lb-paper-inset); color:var(--lb-cream-ink);
}

.btn--tertiary{ padding:0; background:none; color:var(--lb-cream-ink); }
.btn--tertiary:hover{ border-bottom:1px solid transparent;
  background:var(--lb-prism-sm) bottom/100% 1px no-repeat; }
```

On dark grounds the interiors invert: primary `--lb-ink` → hover `--lb-ground`;
secondary interior `--lb-ground`; tertiary text `--lb-ink`.
Under ~120px wide use `--lb-prism-sm` so the four stops still read.
Outer padding never reaches 2px — it is a hairline, not a frame.

Never a pill. Never a circular icon button.

### Icon
24px box, **1.25px** stroke, butt caps, miter joins, no fills, no rounded corners,
one weight across the whole set. Sizes 32 / 24 / 20 / 16 — never below 16.
Accent stroke is reserved for one point of emphasis per surface.
The 30 approved SVGs live in `laura-benavente-identity/icons/` — use those files.
Do not generate new icons in another style; match these specs exactly.

### Card
Hairline border, 16px padding, mono kicker, Libertinus 19px headline, and a single
accent or prism hairline as its only ornament.

### Section header (layout signature)
Mono uppercase kicker on the left, a 1px prism rule filling the middle, a mono meta
value on the right.

### Numbered block (the layout unit of the system)
Libertinus 34px numeral → 26px solid ink rule → mono uppercase label → 12px Roboto
description.

---

## 5 · Layout

- Square by default, radius 2px maximum.
- Generous margins: 56px sides, 40px between sections at 1080–1440px width.
- Separate sections with a 1px hairline, not with whitespace alone.
- One idea per surface.
- Section numbers set in Libertinus.
- Hairline borders are 1px; never 2px or heavier.

---

## 6 · Prohibited — do not ship any of these

- The prism gradient as a background, fill, wash, card, button, or behind text
- Glows, blurs, drop shadows, soft gradients, blob shapes, mesh gradients
- Any colour outside §1
- Pill shapes, circular buttons, radii above 2px
- Accent colour on buttons — the accent is for links in body copy and single points of
  emphasis, never a button fill or a button label
- Illustrations, stock photography, emoji, decorative icons
- A third ground colour, a second accent, a fourth type family
- Icons at a stroke weight other than 1.25px, or with rounded caps/joins
- Text below 4.5:1 contrast (3:1 permitted at display scale only)

---

## 7 · Accessibility

All pairings in §1 are pre-verified. `--lb-mid` (#8C8A87, 4.4:1) is metadata only at
14px and below — never body copy. Accent text is legible on its paired ground and only
on that ground: `--lb-accent` on dark, `--lb-accent-deep` on paper. Never accent text on
accent fill.
