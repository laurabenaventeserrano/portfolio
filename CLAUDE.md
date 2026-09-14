# Laura Benavente — Portfolio

Narrative portfolio site. Goal: win interviews for **Senior Product Designer / AI Product Designer** roles at international tech companies, preferably B2B SaaS, fully remote.

Audience: Head of Design, Design Director, VP of Product, hiring manager. **A recruiter must understand the profile in under ten seconds.** When in doubt, editorial clarity beats immersion.

---

## Visual direction — REVISED

Dark editorial. Revised from the original warm-paper direction at Laura's explicit request, to bring the homepage closer to noth.in's scale and confidence. Copy, type families and content rules stay locked regardless of visual direction — see below.

**Locked, no matter what the visual direction does:**

- All copy, exactly as written. Never rewritten, never invented.
- Type families: **Libertinus Serif** (display), **Roboto** (body), **Roboto Mono** (technical/structure). Never swapped.
- Semantics before aesthetics, no fake numbers, the red accent at most twice per case study, content survives without JS, first person voice.

**What changed:**

- Near-black (`--dark`) is now the default ground site-wide, not a punctuation section.
- ~~Display type pushes toward the 150px ceiling.~~ Superseded 11 Sep 2026: Identity V1 sets display-xl at 96px. The scale contrast now comes from the gap between the steps (96 / 56 / 30 / 19), not from the ceiling.
- ~~Blue and red read as brighter accents.~~ Superseded 11 Sep 2026: Identity V1 has **one** accent in two contexts. Blue is gone.
- Numbered image placeholders may carry a more dramatic surface treatment once real content is supplied.

**Still avoided:** decorative glossy/inflatable objects unrelated to real work content, literally copying noth.in's own imagery or copy, oversized full-bleed marquee type that breaks the grid, cursor tricks, horizontal page scroll, video backgrounds, 3D objects, particle fields, node meshes, rounded cards, icon chips, checkmark lists, pastel illustration.

**Scope note:** this revision applies to `index.html` first. The three case studies stay on the original warm-paper system until Laura decides whether they convert too — see Open, below.

## Tokens

**Superseded 11 Sep 2026.** `IDENTITY-V1-CLAUDE-CODE.md` is now the identity authority and overrides anything about colour, type, scale, radius or ornament written above or below. `tokens.css` is its implementation, loaded by all four pages, and the `visual-system` skill documents how the site uses it.

The short version: two grounds (`#0A0A0C` dark, `#FDFBF6` paper) with one inset each, one accent in two contexts (`#F2607F` on dark, `#C22A50` on paper), the seven prism stops used only as a hairline of 2px or less, and a 2px maximum radius. Type is unchanged in families and changed in scale: display tops out at 96px, not 150px.

The copy, structure and content rules below are **not** superseded. They still win.

## Approved exceptions to the identity spec

**The rainbow footer glow stays. It is not up for review.**

`#glow` in `index.html`, `.glow` in `styles.css`, `medirGlow()` in `main.js`. Nine blurred bars in a seven-stop gradient, fixed to the viewport floor, growing with the last stretch of scroll and reaching full height exactly at the end of the page.

It breaks `IDENTITY-V1-CLAUDE-CODE.md` §6 (glows, blurs, soft gradients) and §1 (its colours are outside the palette). That is known and deliberate. Laura reviewed it, approved it, and it is the part of the site she likes most.

Do not delete it, redesign it, replace it, reinterpret it, or repeat the effect anywhere else. It lives only in the closing section. **It has already been deleted once by an agent reading the spec and not the history. Do not let that happen again.** If it ever looks like it should go, ask her first.

---

## Rules

- **Semantics before aesthetics.** Every element represents a real idea, relationship, force or transformation. If it can only be justified aesthetically, delete it.
- **Never render a number that is not a real value.** No invented metrics, no fake dashboard figures. This is the only irreversible mistake available here.
- **Real work, shown openly.** Employers, products and original screens may be named and shown. Laura decides per case what is publishable; the default is no longer to anonymise. (Revised 19 Aug 2026, replacing the earlier NDA rule.)
- **The red accent appears twice per case study, maximum.** It marks where the experience breaks. Used more, it means nothing.
- **Content survives without JS.** Reveals only apply under `html.js`. Always ship a fail-safe timer.
- **First person.** Laura's cases say "I decided", not only "we did". Credit the team, but name her decisions.

## Structure

Homepage chapters 00–09, plus three case studies and a lab:

| # | Scene |
|---|---|
| 01 | Prologue — I design connections |
| 02 | Origin — before I designed systems (accounting, 2008–2010) |
| 03 | Transformation — I became a designer |
| 04 | What I solve — complexity |
| 05 | How I think — strategic design |
| 06 | Selected stories |
| 07 | Having fun with AI |
| 08 | Future direction |
| 09 | Closing |

**Rhythm:** peaks at 01, 03, 09. Rests at 02, 04, 08. Rest scenes must be genuinely quiet.

## Copy

- North star: **From complexity to clarity.** Appears once, at scene 09.
- Thesis: **I design connections.**
- Prologue opens: *I have always been interested in what connects things.*
- Arc: Accounting → Product design → Strategic design → AI-native experiences

## Case studies

| | Status |
|---|---|
| **Story 01** — The Wolters Kluwer Story | **Rebuilt 19 Aug 2026** on the dark system. `story1-case-study.html`. Covers the whole Wolters Kluwer ecosystem, named openly, with numbered image placeholders |
| **Story 02** — AI as the product functionality | To write. Laura has real work here. Interview her before drafting |
| **Story 03** — Movistar / frog | To write. Material exists |

**Story 01's spine, reuse it:** context → the challenge as a single memorable statement → my role → the approach → what I chose not to build → the first step → outcome → what I took from it.

The strongest sections are "The challenge" (one sentence, full screen, on black) and "What I chose not to build" (judgement, not output). Every case needs both.

## Do not

Generic cyberpunk · neon and glow · gaming HUDs · rounded SaaS cards and drop shadows · icon triads · green checkmark lists · random particles · literal beach, kite or sports imagery · decorative glitch · copying reference sites (including Studio Dialect).

## Open

1. ~~Whether the rust accent stays warm or goes colder~~ Resolved 24 Aug 2026: it went colder, to #C22A50. Closed for good 11 Sep 2026: Identity V1 pairs #C22A50 (paper) with #F2607F (dark) and deprecates every orange, no alias.
2. Whether Story 02 and Story 03 also convert to the dark system, now that Story 01 has
3. Story bands in-page vs separate pages
4. Stack — static HTML, Webflow, or Next.js
