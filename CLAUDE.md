# Laura Benavente — Portfolio

Narrative portfolio site. Goal: win interviews for **Senior Product Designer / AI Product Designer** roles at international tech companies, preferably B2B SaaS, fully remote.

Audience: Head of Design, Design Director, VP of Product, hiring manager. **A recruiter must understand the profile in under ten seconds.** When in doubt, editorial clarity beats immersion.

---

## Visual direction — REVISED

Dark editorial. Revised from the original warm-paper direction at Laura's explicit request, to bring the homepage closer to noth.in's scale and confidence. Copy, type families and content rules stay locked regardless of visual direction — see below.

**Locked, no matter what the visual direction does:**

- All copy, exactly as written. Never rewritten, never invented.
- Type families: **Libertinus Serif** (display), **Roboto** (body), **Roboto Mono** (technical/structure). Never swapped.
- Semantics before aesthetics, no fake numbers, no real client names or original screens, redaction bars (structural, never blurred), rust at most twice per case study, content survives without JS, first person voice.

**What changed:**

- Near-black (`--dark`) is now the default ground site-wide, not a punctuation section.
- Display type pushes toward the 150px ceiling already specified below — more scale contrast, not a new scale.
- Blue and rust read as brighter, more present accents against the dark ground. Still exactly two accents; rust still reserved for the case-study break point.
- Numbered image placeholders may carry a more dramatic surface treatment once real content is supplied.

**Still avoided:** decorative glossy/inflatable objects unrelated to real work content, literally copying noth.in's own imagery or copy, oversized full-bleed marquee type that breaks the grid, cursor tricks, horizontal page scroll, video backgrounds, 3D objects, particle fields, node meshes, rounded cards, icon chips, checkmark lists, pastel illustration.

**Scope note:** this revision applies to `index.html` first. The three case studies stay on the original warm-paper system until Laura decides whether they convert too — see Open, below.

## Tokens

```
--dark     #0E0E11   default ground (was: punctuation only)
--dark-2   #17171B   tinted / elevated section
--paper    #F6F4EF   reserved — the rare light punctuation moment (inverted role from before)
--ink      #FFFFFF   primary text on dark
--ink-2    #C9C9CE   secondary body text on dark
--mid      #8C8C93   metadata, captions on dark
--line     rgba(255,255,255,.14)
--blue     #1F4396   structure (light contexts)   --blue-l #7FA3E8 (default, on dark)
--rust     #B23A20   the break point (light)      --rust-l #E0714F (default, on dark)
```

Type: **Libertinus Serif** display · **Roboto** body · **Roboto Mono** technical. Sentence case. Display never below 32px. Type never breaks the grid.

Reference implementation: `index.html` for the dark system. `story1-case-study.html` remains the reference for the (still warm-paper) case studies until they're revisited.

## Rules

- **Semantics before aesthetics.** Every element represents a real idea, relationship, force or transformation. If it can only be justified aesthetically, delete it.
- **Never render a number that is not a real value.** No invented metrics, no fake dashboard figures. This is the only irreversible mistake available here.
- **No real client names.** All client work anonymised and reconstructed at concept level. No original screens, no real data.
- **Redaction is structural** — solid bars, precise edges. Never a Gaussian blur.
- **Rust appears twice per case study, maximum.** It marks where the experience breaks. Used more, it means nothing.
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
| **Story 01** — Designing a cloud ecosystem for tax professionals | **Done.** `story1-case-study.html`. Wolters Kluwer, anonymised as "Tax Cloud" |
| **Story 02** — AI as the product functionality | To write. Laura has real work here. Interview her before drafting |
| **Story 03** — Movistar / frog | To write. Material exists |

**Story 01's spine, reuse it:** context → the challenge as a single memorable statement → my role → the approach → what I chose not to build → the first step → outcome → what I took from it.

The strongest sections are "The challenge" (one sentence, full screen, on black) and "What I chose not to build" (judgement, not output). Every case needs both.

## Do not

Generic cyberpunk · neon and glow · gaming HUDs · rounded SaaS cards and drop shadows · icon triads · green checkmark lists · random particles · literal beach, kite or sports imagery · decorative glitch · copying reference sites (including Studio Dialect).

## Open

1. Whether the rust accent stays warm or goes colder
2. How product-like the reconstructed wireframes can be under confidentiality
3. Story bands in-page vs separate pages
4. Stack — static HTML, Webflow, or Next.js
