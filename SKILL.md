---
name: laura-portfolio-style
description: The visual design system for Laura Benavente's product design portfolio — white ground, Libertinus Serif / Roboto / Roboto Mono, monochrome interface with colour only inside images. Use this skill whenever building, editing, reviewing or extending any page of Laura's portfolio, any case study page, any diagram or image for it, or anything that has to sit alongside it — including when the request is only about copy, layout, animation, or a single component, and even when the portfolio is not named explicitly. Also use it when asked to check whether something is on-system or off-system.
---

# Laura Benavente — portfolio design system

The visual system for a product design portfolio whose job is to win interviews for Senior Product Designer and AI Product Designer roles at international B2B SaaS companies.

**Audience:** Head of Design, Design Director, VP of Product, hiring manager. A recruiter must understand the profile in under ten seconds. When any decision is ambiguous, editorial clarity beats visual ambition.

## The one-line summary

White ground, near-black type, no accent colours in the interface. Enormous typographic scale contrast. The work carries the colour; the system stays out of the way.

---

## 1. Colour

Seven values. There are no accent colours in the interface.

```css
--white:  #FFFFFF;              /* default ground for the whole site */
--off:    #F4F4F2;              /* alternate section, very subtle */
--ink:    #0A0A0A;              /* headlines and primary text */
--ink-2:  #2E2E2E;              /* body text */
--mid:    #8C8C8C;              /* metadata, tags, captions */
--img:    #E4E4E2;              /* empty image slot */
--line:   rgba(10,10,10,.12);   /* rules and separators */
--line-2: rgba(10,10,10,.06);   /* light internal separators */
```

**Contrast, measured:** `--ink` on white is 19.6:1. `--ink-2` is 12.6:1. `--mid` is 3.5:1 — so `--mid` may only be used at 14px and below, and never for reading text. Metadata, tags and captions only.

**Where colour is allowed:** inside images and diagrams only. Two semantic values exist there and nowhere else:

- `#1F4396` blue — **structure**: relationships, dependencies, what connects to what
- `#B23A20` rust — **tension**: the single point where an experience breaks

Rust appears at most **twice per page**. If it is everywhere it means nothing.

**Never:** gradients as background, glow, bloom, neon, coloured shadows, grain or noise overlays on white, coloured UI accents, dark mode as a default.

## 2. Typography

Three voices with strict jobs. Serif states theses, sans carries content, mono carries structure.

| Role | Family | Size | Line height | Use |
|---|---|---|---|---|
| D1 hero | Libertinus Serif 400 | clamp(40px, 7vw, 110px) | .92, ls −.024em | The one big statement per page |
| D2 statement | Libertinus Serif 400 | clamp(30px, 4.2vw, 58px) | 1.16 | Section-opening sentences |
| D3 section | Libertinus Serif 400 | clamp(26px, 3.2vw, 42px) | 1.2 | Section titles |
| D4 list | Libertinus Serif 400 | 27px | 1.34 | Statement lists |
| B1 body | Roboto 400 | 17px | 1.62 | Reading copy, measure 60–68ch |
| B2 small | Roboto 400 | 14px | 1.55 | Secondary copy, captions |
| M1 technical | Roboto Mono 400 | 11px, +1.4px tracking, uppercase | 1.4 | Numbers, labels, tags, metadata |

**Rules:**
- Sentence case everywhere. Uppercase exists only in mono, only for labels of four words or fewer.
- Serif never below 26px, never for body copy.
- Mono never for body copy or headlines.
- Type never breaks the grid, on any page, ever.
- Type does not animate. It appears, or it is already there.

Fonts: Libertinus Serif and Roboto Mono via Fontsource / Google Fonts, self-hosted as woff2 in production, latin subset.

## 3. Layout

- Page margin **40px** fixed. Below 480px viewport, 20px.
- Max content width **1400px**.
- Base spacing unit **8px**. Every vertical value is a multiple.
- Section padding: hero `100svh` · statement `82svh` · peak 130–170px · normal 70–150px.
- Body measure 60–68 characters. Never full-width body text.
- Headings left aligned. No centred layouts.

**Image slots — only four ratios exist:**

| Ratio | Use |
|---|---|
| 5/6 | Tall slot, primary story image |
| 3/4 | Portrait slot, secondary |
| 4/3 | Square-ish, stacked pairs |
| 16/8 | Wide slot, full-width |

## 4. Components

Square corners throughout. No shadows. No fills on controls. The one exception is the pill button, and it is deliberate.

- **Pill button** — black fill, white text, `border-radius: 999px`, 11.5px label. Inverted on dark. This is the only rounded corner in the system.
- **Story block** — no card, no border, no shadow. Serif number, then bold title line, then mono tag row, then small description, then the image slots. The section itself is the container.
- **Technical label** — mono, uppercase, `--mid`. Section numbers are two digits.
- **Figure caption** — mono, `--mid`, above a hairline rule. Every image has one.

**Forbidden:** rounded cards, drop shadows, glow buttons, gradient CTAs, icon triads, green checkmark lists, testimonial carousels, centred hero-with-button layouts.

## 5. Motion

| Use | Duration | Easing | Behaviour |
|---|---|---|---|
| Hero lines | 1100ms | cubic-bezier(.16,1,.3,1) | Rise from a mask, staggered 90ms |
| Text on enter | 1000ms | cubic-bezier(.16,1,.3,1) | Rise 26px and fade, staggered 80ms |
| Images | 1200ms | cubic-bezier(.16,1,.3,1) | `clip-path` opens from the bottom, not opacity |
| Hover and UI | 180ms | ease-out | No character, confirmation only |

Nothing bounces, nothing overshoots, nothing loops. Scroll-linked drift stays under 8% displacement.

**Non-negotiable:** content is fully readable with JavaScript disabled. Reveals apply only under `html.js`, and a fail-safe timer reveals everything after ~3.5s regardless. `prefers-reduced-motion` resolves every section to its final state instantly and drops the full-viewport hero. It must look finished, not broken.

## 6. Showing the work

Real employers, real products and original screens may be shown. Laura decides case by case what is publishable; there is no blanket anonymisation. (Revised 19 Aug 2026 — this section previously required NDA-style redaction.)

- Name the employer and the product plainly. No invented aliases.
- Original screens are allowed. Reconstructed diagrams are still fine where they explain a system better than a screenshot would.
- Captions say what the image is and where it comes from, not whether it is disguised.
- **Never render a number that is not a real value.** No invented metrics, no plausible-looking dashboard figures, no made-up participant counts. This rule is unchanged and is the only irreversible mistake available in this project.

## 7. Writing

- First person. Laura's cases say "I decided", not only "we did". Credit the team, name her decisions.
- Every case study needs two sections: **the challenge stated as one memorable sentence**, given its own full screen; and **what I chose not to build**, which is where judgement shows.
- Case study spine: context → the challenge → my role → the approach → what I chose not to build → the first step → outcome → what I took from it.
- Include the assumption that turned out wrong. A case with no admitted error is not credible to anyone senior.

---

## How to check work against this system

Run these before calling anything finished. Details in `references/review-checklist.md`.

1. **Semantic test** — can every element be named, and does the name explain why it is there? Anything justifiable only aesthetically gets deleted.
2. **Restraint test** — count the accent colours in the interface. The answer is zero.
3. **Genericism test** — remove the type. Does the remaining image read as this system, or as any AI startup?
4. **Register test** — could this sit in front of an enterprise hiring manager and a design studio without embarrassment in either room?
5. **JS-off test** — disable JavaScript. Everything must be readable.
6. **Contrast test** — every text token against its actual composited background.

## Reference files

- `references/tokens.css` — the complete token block, ready to paste
- `references/review-checklist.md` — the full audit, including what to reject and why
- `references/content-and-voice.md` — copy decisions, case study structure

## Open decision

Whether the Selected Work section keeps a dark ground as an exception, or the whole site is white. Until Laura decides, **default to white throughout** and flag the choice rather than resolving it silently.
