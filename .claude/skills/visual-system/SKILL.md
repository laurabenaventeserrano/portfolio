---
name: visual-system
description: The graphic system for Laura Benavente's portfolio: tokens, colour, type scale, spacing, grids and the named components the pages are built from. Use whenever writing or editing CSS or markup on any page, adding a section, adding an image, choosing a size, a colour, a border or a typeface, or judging whether something already built is on-system. Also use when converting a page between the dark and light grounds, or when asked what a token, class or component is for.
---

# Visual system

The portfolio has one graphic system, applied across four pages. This file is the authority on **what things look like**. Its sibling `visual-storytelling` governs **how they behave**: scroll, pacing, reveals, composition. `CLAUDE.md` governs copy and content, and wins over both.

Everything documented here exists in the code today. If a rule here disagrees with what a page does, the page is the bug, not this file, unless the entry says otherwise.

---

## 1. The stack

Static HTML, CSS and one hand-written `main.js`. No package.json, no build step, no external dependency. Fonts are self-hosted woff2 in `fonts/`.

**There is no shared stylesheet across the case studies.** `styles.css` serves `index.html` only. Each case study carries its own inline `<style>` block. A change to a component therefore has to be made in each file that uses it. This is deliberate: it keeps every page independently openable, and it is the single most common source of drift. When you edit a shared component, grep the other pages before you finish.

| File | Style source |
|---|---|
| `index.html` | `styles.css` |
| `story1-case-study.html` | inline `<style>` |
| `story2-case-study.html` | inline `<style>` |
| `story3-case-study.html` | inline `<style>` |

`story1-case-study.html` is the reference implementation of the dark case-study system. Copy from it, not from Story 2 or 3.

---

## 2. Tokens

Identical in all three case studies. `index.html` carries the same colour tokens plus the Prism identity below.

```css
--dark    #0E0E11   the ground, everywhere
--dark-2  #17171B   tinted section, and the pivot ground
--dark-3  #1E1E24   a panel that must read as raised against --dark-2
--paper   #F6F4EF   the rare light section
--paper-2 #EEEBE3   a panel inside a light section

--ink     #FFFFFF   primary text on dark
--ink-2   #C9C9CE   body text on dark
--mid     #8C8C93   metadata, captions, chapter numbers

--line    rgba(255,255,255,.14)   a real division
--line-2  rgba(255,255,255,.07)   a separation inside one group

--blue    #1F4396   structure, light contexts
--blue-l  #7FA3E8   structure, on dark (the default)
--rust    #B23A20   the break point, light contexts
--rust-l  #E0714F   the break point, on dark (the default)

--serif   Libertinus Serif, Georgia, serif
--sans    Roboto, Arial, sans-serif
--mono    Roboto Mono, monospace
--m       clamp(20px,5.2vw,96px)    page margin (case studies)
```

`index.html` differs in two places, on purpose: `--m:40px` fixed (24px under 480px), `--maxw:1400px`, and it adds `--gut` so full-bleed elements align to the same channel as `.w` content.

**Never introduce a colour outside this list.** A one-off hex in a section is how a system dies. If a new value is genuinely needed, add it as a token and say so.

### The two accents

Two accents, and only two. They are not decoration, they carry meaning:

- **Blue** marks structure. `.principle i`, diagram strokes, the proposed path.
- **Rust** marks where the experience breaks, or the single turn of the argument. **At most twice per case study**, per `CLAUDE.md`.

Rust is easy to overspend without noticing, because two components carry it silently: `.pull` has a 2px rust left border, and `.pivot .stmt i` sets its italic clause in rust. Every pull quote you add spends part of the budget. Count rendered rust marks, not deliberate decisions. Story 1 currently shows five, which is over.

Everything else is white, two greys and two hairlines. If a page feels flat, the fix is scale and space, never another colour.

---

## 3. Type

Three families, never swapped:

- **Libertinus Serif** — display, statements, numbers that matter, the `.n` chapter number, `.pull`, `.principle`, learnings, the `.fv` value column.
- **Roboto** — body, standfirsts, nav.
- **Roboto Mono** — labels, captions, metadata, tags. Always uppercase, always letterspaced, always 9.5px–12px, always `--mid` unless it is a live value.

The mono is the system's tell. It says *this is a label, not a sentence*. Never set a sentence in mono, and never set a label in serif.

### Scale (case studies)

```css
h1        clamp(46px,9.6vw,150px)  line-height .92   letter-spacing -.022em
h2        clamp(34px,6vw,84px)     line-height .98   letter-spacing -.016em
h3        clamp(21px,2.4vw,30px)   line-height 1.18
.stmt     clamp(34px,7.4vw,116px)  the pivot statement, max-width 17ch
.principle clamp(26px,4vw,58px)    max-width 20ch
.pull     clamp(24px,3.4vw,44px)   max-width 22ch
.lead     clamp(19px,2vw,23px)     max-width 46ch
body      17px / 1.6               p max-width 60ch
.k        10.5px mono, 1.4px tracking, uppercase
figcaption 10px mono, 1.1px tracking, uppercase
```

Display never drops below 32px. Body copy never exceeds 60ch. Sentence case throughout, including headings.

Line breaks in display type are authored, not left to the browser: each line is its own `<span class="ln"><i>…</i></span>`, which is also what the masked reveal animates. Adding a line means adding a span.

---

## 4. Grids and rhythm

```css
.w      max-width 1280px, padding 0 var(--m)      (index.html: 1400px)
.head   clamp(80px,9vw,150px) 1fr    chapter number column, then content
.two    1fr 1fr
.two-a  5fr 7fr
.two-b  7fr 5fr
.three  repeat(3,1fr)
```

All of them collapse to one column at 900px.

**A `.two` grid with a single child is a bug.** It renders as a half-empty block with a large hole on one side. This has happened four times on this site. If a removal leaves one child, either split the remaining content across both columns or drop the grid wrapper.

Section padding comes in three densities, assigned deliberately so the page never settles into a metronome:

```css
.sec         clamp(60px,7vw,104px)     the normal chapter
.sec--open   clamp(100px,13vw,190px)   a chapter that needs air around it
.sec--tight  clamp(38px,4.4vw,62px)    a short chapter, usually a list
.pivot       clamp(90px,14vw,220px)    the full stop
```

Grounds alternate: `.sec` on `--dark`, `.sec.tint` on `--dark-2`, `.pivot` on `--dark-2`, and at most one `.light` section per page. **The change of ground is the transition.** Never draw a rule between two sections that already change ground.

---

## 5. Components

Each of these exists and has a job. Prefer composing them over inventing something new.

| Class | What it is | Rule |
|---|---|---|
| `.head` | Chapter opener: number, `.k` eyebrow, `h2`, `.rule`, optional `.lead` | Every chapter has exactly one |
| `.k` | Mono eyebrow above a heading or a column | Never duplicates the heading's words |
| `.n` | Serif chapter number, `--mid` at 55% opacity | Sequential, no gaps. Renumber after a removal |
| `.rule` | 1px hairline under a chapter title | Belongs to `.head`, not used as a divider elsewhere |
| `.lead` | Standfirst under a chapter title, 46ch | One per chapter, maximum |
| `.stats` | Result chips: serif figure over a mono label, hairline separators | **Only real values.** No boxes, no radius, no colour. See §7 |
| `.pull` | Serif pull quote with a rust left border | Counts against the rust budget |
| `.principle` | Large serif statement, italic clause in blue | For a design principle, not for a fact |
| `.stmt` / `.after` | The pivot statement and its follow-up | One or two per page. This is the page stopping to say one thing |
| `.fact` / `.facts` | Mono key, serif value | For scope: role, markets, products |
| `.step` / `.sn` | Numbered sequence, hairline separated | For steps that really happened in order. Defined in all three case studies, currently used only in Story 2 and 3 |
| `.levels` / `.level` | Three columns, mono heading, short body | For three parallel things, not a ranking |
| `.qs` / `.q` | Numbered questions | Sequence where each supposes the previous |
| `.lrn` | The closing learnings: mono number, serif line, hairline between | Four lines. Story 1 only, so far |
| `.chain` | Four-cell grid, 1px gaps showing the ground through | Research chain: found, meant, decided, designed |
| `ul.p` | Indexed list, mono number, 16px body | Staggered reveal built in |
| `.tags` | Mono chips with a hairline border | Markets, domains. Not for skills or tools |
| `figure` / `figcaption` | Any piece of evidence | See §6 |

Story 1 also carries `.hand`/`.hstep`, `.regions`, `.tag-d` (a Before / Proposed label above an image) and `.two`-based comparisons. `.three` is defined everywhere and currently used nowhere: it is available, not dead, but do not assume it has been visually checked.

---

## 6. Images

```css
.figimg{display:block;width:100%;height:auto}
```

Rules that are not negotiable:

- **A screenshot is never cropped, warped or scaled up.** `object-fit: contain`, never `cover`. This is a product design portfolio; a distorted UI destroys the credibility the page exists to build.
- **Never display an image above 1.0x its natural width.** Check `offsetWidth` against the file's real pixel width.
- If you set `aspect-ratio` on an `<img>` that also has `width` and `height` attributes, you must add `height:auto` too, or the HTML attributes win and the ratio is ignored.
- Every image carries a `figcaption`: mono, 10px, uppercase, hairline above. It states what the thing is. It never argues or explains the page.
- Full-bleed uses `.ph--bleed` / `.ph--wide`, which subtract the measured scrollbar width `--sbw`. `100vw` includes the scrollbar and pushes the page sideways.
- Elements that reach a viewport edge get the reveal translate but **not** the 1.045 scale, or their edges get shaved during the animation.
- Filenames with spaces must be URL-encoded (`%20`) in `src`.

**Never write an image's alt text from its filename or from where it sits on the page. Open the file and look at it.** Getting this wrong has produced crossed captions on this site more than once.

Keep the image inventory comment at the top of a case study in step with the file. It is the map of which numbered slots are live and which were retired.

---

## 7. Numbers

**Never render a number that is not a real value.** No invented metrics, no illustrative dashboard figures, no rounded-up percentages. This is the only irreversible mistake available here: one fabricated figure in front of a hiring manager ends the conversation.

The `.stats` chips are the highest-risk component on the site, because the format invites a number. If a real value does not exist, the chip does not exist. Counts of things that were actually built (products, markets, one design system) are real values. Business outcomes are only real if Laura supplied them.

Related, and cheap to get wrong: if a chip says six products, the prose must not name four. Check the chips against the body copy after any content edit.

---

## 8. Motion, at the level this file owns

Full behaviour is in `visual-storytelling`. What the graphic system fixes:

```css
easing   cubic-bezier(.16,1,.3,1)      everywhere, no exceptions
.rv      opacity 0, translateY(48px), .95s / 1.05s
figures  translateY(38px) scale(1.045) on the inner element, 1.3s
.ln > i  translateY(106%) inside an overflow-hidden box, 1.05s
stagger  .06s between list siblings (.08s in .lrn), .10s between title lines
```

The contract:

1. Start states apply only under `html.js`. `html:not(.js)` shows everything.
2. A new staggered component needs its own `html:not(.js)` reset, or it is invisible without JS.
3. `.head.rv` stays put and its parts move underneath, so the title lines carry the motion.
4. Under `prefers-reduced-motion: reduce`, everything is visible immediately, in the same order.

---

## 9. Converting a page between grounds

The three case studies were converted from a warm-paper system to this one. If it happens again:

- Replace `:root` wholesale with the token block in §2. Set `body{background:var(--dark)}`.
- The paper grain `body::after` uses `mix-blend-mode: multiply`, which is invisible on dark. Delete it, do not tune it.
- `.dark` sections become `.light` sections. This is a role inversion, not a rename: the section that was the dark punctuation is now the light one.
- The skip link needs `color:#0E0E11` against its light background.
- **Do not blanket-swap colours inside inline SVG.** Any diagram already drawn for a dark panel will invert to dark-on-dark. Go panel by panel and check each against `git show HEAD:<file>`.
- A `#17171B` fill inside a `.tint` section is invisible: the section background is already `#17171B`. Use `--dark-3`.

---

## 10. Verify by looking

Measuring is not seeing. Several regressions on this site were reported as correct because the numbers checked out while the page was visibly broken.

- Render the section and look at it before saying it works.
- Measure layout with `offsetWidth` / `offsetLeft`. **`getBoundingClientRect()` includes transforms**, so anything under `.drift` or a live `.rv` measures wrong.
- Headless Chrome clamps the viewport to a 500px minimum, so a true 390px mobile check cannot be done there.
- After any structural edit, check tag balance, that no `src` points at a missing file, and that chapter numbers are still sequential.

---

## 11. Do not

Rounded cards · drop shadows · icon chips · checkmark lists · pill labels · a third accent colour · gradients as decoration (the Prism spectrum on `index.html` is the identity, and it is the exception) · borders used as containers · glow · neon · a heading in mono · a label in serif · a sentence in uppercase · type that breaks the grid · an invented number · an image scaled above 1.0x · a `.two` grid with one child · a colour that is not a token.
