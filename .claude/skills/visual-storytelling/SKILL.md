---
name: visual-storytelling
description: The scroll, composition, image behaviour, pacing and transition system for Laura Benavente's portfolio. Use whenever building, editing or reviewing any page, section, image sequence, reveal, sticky moment or transition on the site, including when the request is only about layout, copy placement, or a single component, and even when motion is not mentioned. Also use when judging whether a proposed section is on-system or off-system.
---

# Visual storytelling

The site is one continuous authored composition that reveals itself over time. It is not a set of sections that happen to animate.

Every decision in this skill answers one question: **does this help the story arrive at the right moment?** If a technique cannot answer that, it does not go in.

Pair this with `SKILL.md` (colour, type, tokens) and `CLAUDE.md` (copy rules, structure). This file governs behaviour, rhythm and composition only.

---

## 1. The stack constraint, first

The portfolio is static HTML, CSS and one hand-written `main.js`. **No package.json, no node_modules, no build step, no external script except its own.** That is a deliberate constraint in `CLAUDE.md`, not an accident.

So everything here is built from:

| Need | Tool |
|---|---|
| Element reveals | `IntersectionObserver` + a CSS class |
| Progressive / scrubbed reveals | `position: sticky` over a tall track, read scroll progress |
| Pinned moments | `position: sticky` inside a track taller than the viewport |
| Masked line reveals | `overflow: hidden` + `translateY(104%)` on an inner span |
| Shape reveals | `clip-path: inset()` / `circle()` |
| Chapter snapping | `scroll-snap-type: y proximity` |
| Nav over any ground | `mix-blend-mode: difference` |

**Do not add GSAP, ScrollTrigger, Lenis, Motion or Framer.** Every effect described in this file is achievable without them. If a future request genuinely needs timeline scrubbing across many tweens, say so, explain the cost (a build step or a CDN dependency, and the loss of the no-dependency guarantee), and **ask before adding it.** Never add a library silently.

CSS scroll-driven animation (`animation-timeline: view()`) is allowed as *progressive enhancement only*, wrapped in `@supports`, with the IntersectionObserver path as the baseline. Browser support is not universal and content must never depend on it.

---

## 2. What the references actually taught us

Measured directly, not eyeballed. The two reference pages behave **differently from each other**, and that difference is the most important finding.

| | Home | Project page |
|---|---|---|
| Page length | ~13 screens | ~11 screens |
| Distinct image widths | **19** (9% to 180% of viewport) | **3** (48%, 49%, 98%) |
| Gaps between visuals | Wildly irregular, many negative (overlap) | Regular: 0.02 screens (paired) or side by side |
| First visual appears at | 0.04 screens | **0.74 screens** |
| Sticky used for | Two elements only | Small metadata labels, not image sequences |

Read that table again. It contains the whole system:

- **The home is where scale misbehaves.** Nineteen different widths, images wider than the viewport, overlapping compositions. It is a manifesto, and it is allowed to be loud.
- **The project page is disciplined.** Essentially half-width and full-width, on a steady rhythm. The work is the subject, so the composition gets out of its way.
- **Sticky is not used for cinema.** On the project page it pins small metadata beside scrolling content. Pinning is rare and earned.
- **The story page waits three quarters of a screen before showing anything.** The introduction breathes first.

**We take the behaviour, not the look.** No copying of their type, colour, imagery, copy, or specific compositions. Laura's system is dark editorial with Libertinus Serif, Roboto and Roboto Mono, and it stays that way.

---

## 3. Two systems, one voice

Home and story pages share navigation, type families, spacing logic, motion language, caption style and transition philosophy. They differ in **density and discipline**.

### Home: the world

Behaves as a continuous visual manifesto, not hero-plus-grid.

**Progression:** a statement that establishes point of view, then visual space → the work emerging from the story → pauses between pieces → close.

- Do not explain everything at the top. Establish identity and create curiosity.
- The point-of-view statement is part of the composition, not an "About me" block.
- Work does not begin with a heading that says the work is beginning. It emerges.
- Projects are **editorial moments**, not cards. No repeated rectangle of image + title + description + button.
- Different projects may occupy different amounts of visual space. Equal treatment is a grid, and a grid is not a story.
- Titles behave as editorial labels sitting in the composition.

### Story pages: the deep dive

The reader has chosen to go deeper. Reward that with evidence, and let the work be the loudest thing on the page.

**Arc:** context → tension → problem → investigation → insight → decision → design → evidence → outcome.

**Never label those beats.** No section headed "Insight". The reader should feel the sequence without being told its name.

**Opening:** project identifier, title, concise positioning, one short conceptual statement. Not a giant "Case Study" banner. The introduction should make the reader want the rest, without summarising it.

Hold the first image back. Let the introduction own the first screen.

---

## 4. The scale ladder

Image size communicates importance. Standardising everything to one container throws away the strongest tool available.

| Rung | Width | Use for |
|---|---|---|
| Detail | 20–30% | A single control, a fragment, a moment of craft |
| Inset | 40–50% | Paired comparisons, a screen beside its explanation |
| Editorial | 60–75% | The normal case. A screen that deserves attention |
| Wide | 88–100% | A chapter's main evidence |
| Bleed | 100%+ | The one or two moments per page that dominate |

**Home:** use the full ladder, including bleed and overlap. Vary it aggressively.

**Story pages:** favour Inset, Editorial and Wide. Reach for Detail and Bleed deliberately, a few times per page, at the moments that matter. Discipline is the point.

Never place three consecutive images at the same rung. If two are the same, the third changes.

---

## 5. Rhythm

Treat scroll position as a timeline. Not "a section enters the viewport" but "the next part of the story is being revealed".

**Measure pacing in screens, not pixels.**

- A page that matters runs 8–14 screens. Shorter feels thin; longer needs a reason.
- After a major statement, leave **0.3–0.6 screens** of empty ground before the next thing.
- A full-bleed visual moment should own **0.9–1.1 screens**.
- Images that belong to one sequence sit **almost touching** (under 0.05 screens apart). Proximity is what says "these are one idea".
- Images that belong to different ideas need **at least 0.4 screens** between them.

Alternate density. Statement → space → image → caption → short text → visual → pause. The reader should never be able to predict where the next thing lands.

**If the page can be described as "a section every N pixels", it has failed.**

---

## 6. Image behaviour

Images are objects entering the story. They arrive; they are not simply present.

**Four reveal patterns. Use different ones on the same page.**

1. **Settle.** Opacity plus a short upward translate (16–20px). The default. Quiet.
2. **Unmask.** A `clip-path: inset()` opening from one edge. For a screen that should feel uncovered rather than faded in.
3. **Drift.** Reveal plus a slow parallax offset while in view, under 8%. For depth on large pieces. Never on small ones.
4. **Sequence.** Several pieces revealing in order with a 0.08–0.14s stagger. For steps in a flow.

**Never apply one pattern to every image on a page.** Uniform motion reads as a template.

**The screenshot itself is never distorted.** Animate position, crop, scale, opacity and the composition around it. The interface stays truthful. This is a product design portfolio; a warped UI destroys the credibility the page exists to build.

### Multiple images

Decide from the narrative, not from habit.

- **Sequential.** One, then another, generous vertical space. For steps that happened in order.
- **Pinned horizontal.** The section pins and pieces move across as the reader scrolls. For a set that is genuinely one continuous artefact.
- **Editorial gallery.** Several across, at different scales. For variations on one idea.
- **Overlapping.** Pieces entering at different offsets, breaking alignment. Home only, and rarely.

**A carousel is almost never the answer.** It hides content behind interaction and asks the reader to work. If the images matter, show them.

---

## 7. Pinned sections

A pinned section must earn its place. Valid reasons:

- A workflow unfolding step by step
- Fragmented things becoming one system
- Interface states progressing
- Legacy and new held side by side for comparison
- An architecture becoming visible layer by layer

**Not valid:** because it looks impressive, because the technique exists, because the section felt flat.

Implementation: a track taller than the viewport, `position: sticky` on the inner element, progress derived from scroll position against the track. Thresholds as an explicit array so the pacing is readable in the code.

Budget: **at most one pinned moment per page.** Two is already a tic.

Pinning steals control of the scroll. If the reader cannot tell why, it reads as a bug.

---

## 8. Captions

Every image carries one. Small, precise, understated.

```
CCH iFirm · Product ecosystem dashboard
Client context · Cross-product workflow
Tax · Return preparation
```

Roboto Mono, ~10px, letterspaced, uppercase, muted, hairline rule above. Use the existing `figcaption` rule.

No cards, no pills, no boxes, no oversized captions. A caption states what the thing is and where it comes from. It never argues, apologises or explains the page.

---

## 9. Text

Copy is a visual unit, not a wall.

- Short statements over paragraphs. Reading width 56–60 characters.
- Occasional large conceptual statements at display scale, given a full screen and space around them.
- Small mono labels to mark what a block is.
- The reader should follow the story while still moving.

Copy rules in `CLAUDE.md` win over anything here. **Never rewrite Laura's words to fit a layout.** Change the layout.

Never write sentences that describe the page to its reader. No "as shown here", no "this case study will", no explaining the constraints the page was written under. That is backstage talk, and it breaks the spell.

**No em dashes.** Laura has ruled them out. Use a colon, a full stop, or restructure.

---

## 10. Transitions

Between moments: whitespace, scale change, typography, image movement, shifts in visual density. **Not** hard boundaries, borders, containers or repeated backgrounds.

Between chapters, the ground may change (dark to tinted to the rare light moment). That change *is* the transition; it needs no rule above it.

Between stories: the end of a chapter, not a "next project" card. Large title, editorial framing, whitespace, subtle movement. The next piece should already feel part of the same world.

Chapter snapping, where used: `scroll-snap-type: y proximity` on the scroll container, `scroll-snap-align: start` on the chapters only. **Never `mandatory`**, because it fights sticky sections. Set `scroll-margin-top: 0` on snap targets, because the global `[id]{scroll-margin-top:92px}` will otherwise land every chapter 92px low.

---

## 11. Navigation

Identical across every page: the disclosure menu, `mix-blend-mode: difference`, masked link reveals with staggered delays, closing on selection and on Escape.

The navigation never dominates. It is a transparent constant that works over any ground.

When adding a nav item, add its stagger delay. A link with no delay appears instantly while the others cascade, and it looks broken.

---

## 12. Responsive

Mobile keeps the story and loses the choreography.

**Reduce:** pinned sections, parallax, simultaneous movement, full-height chapters where content is taller than the screen.

**Preserve:** hierarchy, pacing, the relationships between image sizes, narrative order, editorial feel.

Never simply stack the desktop layout. Specific rules learned the hard way on this site:

- **Copy before its image.** With the image first, it reads as belonging to the previous story.
- **Panoramic crops fail on narrow screens.** Anything wider than about 2:1 becomes an illegible strip. Re-crop to 16:9 on mobile.
- **Check the fixed nav does not collide** with content near the top of a block.
- A block taller than the viewport must not be forced to `100svh`; it will clip.

---

## 13. Reduced motion

Under `prefers-reduced-motion: reduce`: no parallax, no scrubbing, no transforms, no snapping, no smooth scroll. All content visible, in the same order, immediately.

The story must be fully understandable with every animation removed. If removing motion removes meaning, the meaning was never in the page.

---

## 14. The reveal contract

Learned from real failures on this site. Any reveal system must satisfy all four:

1. **Content survives without JS.** Start states apply only under `html.js`; `html:not(.js)` shows everything.
2. **The start state must paint before the transition.** Set up, then wait **two** `requestAnimationFrame`s before revealing. One frame is not enough and the animation is silently skipped.
3. **The fail-safe reveals only what the reader has reached.** A timer that reveals the whole document pre-empts every reveal below the fold. On a long page that is every animation except the first screen.
4. **Three drivers, because each can fail.** IntersectionObserver is primary. A passive scroll listener is the second path. A scoped `setTimeout` is the last resort, because rAF, IntersectionObserver *and* scroll events are all suspended while a document is hidden, and `setTimeout` is not. A link opened in a background tab must not arrive blank.

---

## 15. Anti-patterns

Rounded SaaS cards · drop shadows · icon triads · checkmark lists · pill labels · repeated rectangles · borders as separators · glossy or inflatable objects unrelated to the work · particle fields · node meshes · decorative glitch · cursor tricks · horizontal page scroll · video backgrounds · 3D · pastel illustration · neon and glow · gaming HUDs · generic UX process diagrams · fake metrics · carousels used by default · animating everything · copying the reference sites' imagery, copy, type or compositions.

---

## 16. The bar

Before shipping a page, ask:

1. Does it read as one composition, or as blocks that animate?
2. Could the reader predict where the next element lands? If yes, the rhythm is too regular.
3. Does every image earn its scale, and does the scale vary?
4. Is there a moment that surprises?
5. Does each pinned or scrubbed section have a reason a reader would recognise?
6. Does it still make sense with motion off and JS off?
7. Is the product still the hero?

The reader should think *this page is telling me something*, not *this page has nice animations*.

The storytelling exists to make the product work memorable and understandable. It is never the subject. The work is.
