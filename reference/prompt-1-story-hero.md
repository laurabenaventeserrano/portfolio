# Story hero — spec for Claude Code

Reference render: `story-hero-reference.png` (2880×1620, = 1440×810 @2x). Build to match it.

Design tokens come from the Prism identity: ground `#0C0A0B`, paper `#F2EFEA`, spectrum
`#313CAA #587FDD #92C5E0 #D9E3AB #F7CF77 #E98C5E #DC4969 #A63488`.
Type: **Libertinus Serif** (story titles), **Roboto** (body), **Roboto Mono** (eyebrow + chips).

---

## 1. Structure — image and text are SEPARATE LAYERS

This matters: the mockup image must be animatable on its own, with the text untouched.

```html
<section class="story-hero">
  <div class="story-hero__media">      <!-- layer 1: image only, animates -->
    <img src="/stories/story-2/hero.png" alt="…">
  </div>
  <div class="story-hero__scrim"></div> <!-- layer 2: legibility gradient, static -->
  <div class="story-hero__glow"></div>  <!-- layer 3: accent glow, static -->
  <div class="story-hero__copy">…</div> <!-- layer 4: all text, static -->
</section>
```

- `.story-hero` — `position: relative; overflow: hidden; background:#0C0A0B; aspect-ratio:16/9; min-height:640px;` full-bleed, no radius, no border.
- `.story-hero__media` — absolute, `inset:0`, `pointer-events:none`. The `<img>` inside is
  `width:100%; height:100%; object-fit:cover; object-position:right center;`.
  **Never put text inside this element.** All transforms/animation target this layer only.
- `.story-hero__scrim` — absolute, `left:0; top:0; width:43%; height:100%;`
  `background: linear-gradient(90deg, rgba(12,10,11,0.92) 0%, rgba(12,10,11,0.72) 60%, rgba(12,10,11,0) 100%);`
- `.story-hero__glow` — absolute, `left:-10%; top:18%; width:57%; height:62%;`
  `background: radial-gradient(closest-side, rgba(88,127,221,0.20), transparent 72%); filter: blur(10px);`
- `.story-hero__copy` — absolute, `left:6.1%` (88px @1440), `top:21%` (170px @1440),
  `width:660px; max-width:46%;` flex column, `gap:26px`.

## 2. Copy block — order and exact styles

1. **Prism band** — `width:200px; height:20px; border-radius:999px;`
   `background: linear-gradient(90deg, rgba(12,10,11,0) 0%, #313CAA 12%, #587FDD 26%, #92C5E0 38%, #D9E3AB 50%, #F7CF77 62%, #E98C5E 72%, #DC4969 85%, #A63488 95%, rgba(12,10,11,0) 100%);`
   Never outline it, never crop the fades.
2. **Eyebrow** — Roboto Mono 12px, uppercase, `letter-spacing:0.2em`, `rgba(242,239,234,0.55)`.
   Text: the story number, e.g. `Story 2`.
3. **Title** — Libertinus Serif, `clamp(44px, 5.3vw, 76px)`, `line-height:0.94`,
   `letter-spacing:-0.015em`, `#F2EFEA`, Title Case (not uppercase), broken over two lines.
   e.g. `AI Document` / `Management`.
4. **Standfirst** — Roboto Regular 17px, `line-height:1.6`, `rgba(242,239,234,0.7)`,
   `max-width:420px`, `text-wrap:pretty`. One or two sentences.
5. **Chips** — flex row, `gap:8px`, `flex-wrap:wrap`. Each: `1px solid rgba(242,239,234,0.22)`,
   padding `7px 12px`, square corners, Roboto Mono 10px uppercase `letter-spacing:0.1em`,
   `rgba(242,239,234,0.6)`. 3–5 chips; they must fit on ONE row at 1440 — if a story needs more,
   shorten the labels, never let one chip orphan onto a second line.

No name, no site URL, no logo lockup, no CTA, no scroll indicator in this section.

## 3. Per-story content

Same component, four props: `number`, `title` (two lines), `standfirst`, `tags[]`, `image`.
Story 2 is the reference instance:

| Prop | Value |
|---|---|
| number | Story 2 |
| title | AI Document / Management |
| standfirst | Bringing AI-assisted drafting inside the product, so professionals never start a client document from an empty page. |
| tags | Product design · B2B SaaS · AI-native · Human review · MVP definition |
| image | laptop mockup, product UI on screen, dark ground, subject on the right |

Every story image must be shot/composed the same way: **dark background, device on the
right two-thirds, empty dark space on the left third.** That empty space is the text column.

## 4. Responsive

- ≥1200px: as the reference.
- 768–1199px: `object-position: 70% center`, scrim widens to 70%, title clamps down, copy `max-width:60%`.
- <768px: stack — media becomes a 16:9 block on top, copy below on flat `#0C0A0B`
  (no scrim, no glow), gutters 24px, title 40px, chips may wrap to two balanced rows.

## 5. Rules

- Only the tokens above. Never pure white, never pure black, no new colours.
- The spectrum is ONE gradient, not eight brand colours.
- Semantic: `<section>`, `<h1>` for the title, `<p>` for the standfirst, `<ul>/<li>` for chips,
  real `alt` text describing the product screen.
- Plain HTML + CSS (or one React component). No CSS framework, no animation library.
- Serve the image via `srcset` at 1x/2x; it is the heaviest asset — lazy-load below-fold stories.
