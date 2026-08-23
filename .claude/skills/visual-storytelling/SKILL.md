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

| Scroll feel (velocity, inertia) | A hand-written rAF loop easing `window.scrollTo`. See section 2 |

**Do not add GSAP, ScrollTrigger, Lenis, Motion or Framer.** Every effect described in this file is achievable without them, **but note what that sentence does and does not promise**: it means each effect can be hand-written, not that a library would produce the same result. Lenis exists to do one thing this file also specifies, scroll easing, and section 2 says how to write it in about forty lines. If a future request genuinely needs timeline scrubbing across many tweens, say so, explain the cost (a build step or a CDN dependency, and the loss of the no-dependency guarantee), and **ask before adding it.** Never add a library silently.

CSS scroll-driven animation (`animation-timeline: view()`) is allowed as *progressive enhancement only*, wrapped in `@supports`, with the IntersectionObserver path as the baseline. Browser support is not universal and content must never depend on it.

---

## 2. How the scroll itself feels

This is the first thing a reader notices and the last thing anyone documents. It is not composition, not pacing and not reveals: it is how the page moves under the hand.

**No CSS property controls it.** `scroll-behavior: smooth` only affects programmatic jumps, anchors and `scrollIntoView`. Nothing else in CSS touches scroll velocity or inertia. A page that glides and a page that lurches can have identical stylesheets.

The only mechanism is to **interpolate the scroll position yourself**: hold a target, move the real position a fraction of the way toward it on every frame.

There are two ways to build that, and only one is allowed here.

| | Transform scroller | Eased native scroll |
|---|---|---|
| How | Lock the body, translate a wrapper | `window.scrollTo` toward a lerped target |
| `position: sticky` | Breaks | Works |
| `position: fixed` | Breaks | Works |
| Real scrollbar | Gone | Kept |
| Keyboard, Find in page, anchors | Break | Work |

**Use the eased native scroll.** This site has a sticky pinned chapter, a fixed navigation, a fixed counter and a fixed glow. A transform scroller breaks all four at once.

The shape of it:

- One `wheel` listener, `{passive:false}`, `preventDefault`, accumulate into a target clamped to the document.
- One rAF loop moving the real position a fraction of the remaining distance, around `0.12`. Stop the loop when the distance falls under half a pixel.
- One passive `scroll` listener to resynchronise the target when the position changes by any other means. **Compare positions, do not use a flag**: the scroll event arrives after your own `scrollTo`, by which time a flag has already been cleared.
- Bail out on `e.ctrlKey`, which is browser zoom, and on `deltaMode !== 0`, which is line or page scrolling.
- **Mouse only.** Touch momentum is already good and fighting it makes things worse.
- Off entirely under `prefers-reduced-motion`.

**Two things must be switched off for this to work**, because both fight a JS-driven position:

- `scroll-snap-type` on the scroll container. The snap engine corrects the resting position while you are still interpolating.
- `scroll-behavior: smooth`. It animates anchor jumps on its own while your loop is animating the same thing.

**Never use `scroll-snap-stop: always`.** It forbids the scroller from passing a snap point in a single gesture, so the reader is caught at every chapter and cannot flick through the page. It is the single heaviest-feeling thing you can add to a page, and it is invisible in a screenshot.

Note the distinction from section 8.4, which says scroll-linked motion must not be eased. That rule is about the mapping from scroll position to parallax offset, which must stay a direct function so the movement feels attached to the hand. Easing the scroll position itself is a different layer, and the parallax inherits it for free.

---

## 3. What the references actually taught us

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

## 4. Two systems, one voice

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

## 5. The scale ladder

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

## 6. Rhythm

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

## 7. Image behaviour

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

## 8. Homepage story images behaviour

The three story images on the homepage are **one composition**, not three cards in a row. This section is derived from measuring the reference homepage directly, and it records behaviour, never its imagery, type or layout copied literally.

> **Read this before implementing anything below.** Section 9 locks the final layout of the three homepage story images as currently built, and section 9 wins. This section describes the compositional principles the reference uses; the overlap, the negative margins and the per-piece vertical placement are **not currently implemented on this site**, and moving to them is a design decision for Laura, not something to introduce while building something else. What this section governs today is the per-piece scroll rate, the layering rules, the motion system and the responsive and interaction behaviour. Treat the layout subsection as a proposal on the table, not as an instruction.
>
> The two sections did contradict each other for a while, and the result was a homepage that read as three identical stacked screens while the skill claimed overlap was the norm. If you find yourself unable to satisfy both, satisfy section 9 and say so.

### What the reference actually does

Measured, not assumed:

| | Finding |
|---|---|
| Sticky / pinned pieces | **Zero.** Nothing pins. The composition is built in normal document flow |
| Vertical overlap | **13 of 20 consecutive pairs overlap** |
| Horizontal positions | 13 distinct x offsets. Not a two-column grid |
| Widths | 9% to 180% of the viewport. Four pieces bleed off the left edge, four off the right |
| Stacking | One flat layer: nearly everything on the same z index, above a background layer |
| Technique | Normal flow plus **negative margins** (one measured at -900px) to pull pieces up into each other, with per-piece transforms written during scroll |

The two conclusions that matter: **overlap is the norm, not the exception**, and **the effect needs no pinning**. Anyone reaching for sticky here has misread it.

### 1. Layout system

The three images do not share a width, an x position, or a vertical rhythm. Each is placed as an individual object.

- Give each story its own **width rung** from the ladder in section 5, and never repeat one twice in a row.
- Give each its own **horizontal anchor**: right, left-bleeding, right-inset. Alternating side is what makes the eye travel.
- At least one piece should **bleed past a viewport edge**. A composition entirely inside the margins reads as a grid.
- Vertical placement is set by **negative margin on the media**, not by absolute positioning. Absolute positioning removes the piece from flow and the page stops being able to size itself.

### 2. Scroll behaviour

Each piece moves at **its own rate**, derived from its position in the viewport. This is what separates a composition from three parallax images: the pieces move differently *from each other*, so their relationships change as the reader descends.

- Displacement stays **under 8%** of the piece height. Above that it reads as a gimmick.
- The rate is **assigned per piece**, not shared. A large bleeding piece moves least; a small inset piece moves most.
- Progress is derived from the block's position against the viewport centre, clamped to -1..1, so movement is symmetrical entering and leaving.
- Nothing pins. Nothing steals the scroll.

### 3. Layering and overlap

- One flat layer for the pieces, above the page ground. Do not build a z index staircase; it becomes unmaintainable and produces no visible benefit.
- Overlap is achieved by letting the media **overhang its own block**, which requires the block to not clip its overflow.
- **The overhang must never overlap another story's clickable area.** The media carries `pointer-events: none` so the anchor boxes stay adjacent in flow and each story keeps its full click target while the images visually intrude on each other. This is not optional.
- Where a light image overhangs into a dark neighbour, check the copy underneath still reads. Fix it with the scrim, not by moving the copy.

### 4. Motion system

Animate only **transform** and **opacity**, plus `clip-path` for reveals. Never top, left, width, height or margin during scroll: those trigger layout on every frame.

- Reveal: `clip-path` unmask for the pieces, so they are uncovered rather than faded.
- Continuous motion: `translate3d` on the Y axis only.
- Easing for discrete reveals: `cubic-bezier(.16,1,.3,1)`, around 1.1s.
- Scroll-linked motion is **not eased**. It is a direct function of scroll position. Smoothing it introduces lag and the movement stops feeling attached to the reader's hand.
- No scale on pieces that touch a viewport edge: scaling a full-width element shaves its edges for the duration of the reveal.

### 5. Responsive behaviour

The composition is a desktop behaviour. Below 768px it becomes a sequence.

- Drop the overhang, the bleed and the per-piece offsets. Each story returns to a single column.
- Keep the order, the scale relationships and the reveals.
- Drop the scroll-linked movement entirely: on a touch device it competes with the reader's own scrolling.
- Copy before its image, always.

### 6. Interaction

- Each story is **one link wrapping the whole block**. Not a button, not a card with a separate call to action.
- The whole block is the target, including the area under the overhanging image of its neighbour.
- Hover is restrained: a small shift in the copy or a slight lift of the piece. Never a zoom, a border or a shadow.
- On touch there is no hover state, and nothing may depend on one.
- Focus must be visible and follow document order. The composition reorders things visually; it must not reorder them for a keyboard.

### 7. Performance

- One scroll listener, passive, throttled through `requestAnimationFrame`. Not one per piece.
- Read all geometry first, then write all styles. Interleaving reads and writes forces synchronous layout on every frame.
- Skip pieces outside the viewport before doing any work.
- Set `will-change: transform` only on the pieces that actually move, and never on more than a handful.
- Declare `width` and `height` on every image so nothing shifts as it loads.
- Under `prefers-reduced-motion`, the composition holds its layout and all movement stops.

---

## 9. Homepage image entrance behaviour

How the three homepage story images arrive. This section governs **entrance only**. It has no authority over where they end up.

### Immutable final layout

The final position, size, aspect, margins, spacing and grid of the three images are **locked**. They were arrived at deliberately and are not open to reinterpretation while implementing an entrance.

Locked values, as measured at 1440px:

| | Media box | Image on screen | Right margin |
|---|---|---|---|
| Story 1 | absolute, left 518.4px, padding-right 60px | 862 x 418 | 60px |
| Story 2 | absolute, full bleed | 1440 x 900, cover | 0 |
| Story 3 | absolute, left 518.4px, padding-right 60px | 862 x 574 | 60px |

Never change `width`, `height`, `inset`, `padding`, `margin`, `object-fit` or `object-position` in order to build an entrance. If an effect appears to require it, the effect is wrong.

### Animated entrance only

Only two properties may carry the entrance:

- `clip-path` on the media wrapper
- `transform` on the image inside it

Both are compositor properties and neither participates in layout, which is exactly why they are the only ones permitted here. `opacity` is available but, per the reference, largely unused.

### What the reference actually does

Measured on pieces that had not yet been reached by the scroll:

- The wrapper is **clipped to nothing from one edge or corner** and opens to full. Values observed included bottom-and-right, bottom-and-left, and bottom alone.
- **The direction differs per piece.** They do not all wipe the same way.
- **Opacity stays at 1 throughout.** Nothing fades. Pieces are uncovered, not faded in.
- The image inside carries a **small counter-translation**, measured between 27 and 43px, moving as the mask opens. This is what gives the arrival depth: the frame opens one way while the content drifts the other.
- Nothing travels in from off-screen. There is no slide.

### Scroll-driven placement

- The uncover is triggered once, when the piece is properly inside the viewport, not as it peeks over the edge. **Put a number on this.** For a piece that is a full viewport tall, an observer at `rootMargin: '0px 0px -22% 0px'` fires when barely a fifth of it has appeared, so the wipe finishes below the fold and the reader never sees it happen. Around **-45%** is the point where the piece is genuinely on screen. Full-height pieces need their own observer: one shared threshold cannot serve both a paragraph and a 100svh image.
- The counter-translation is continuous and tied to scroll position, so the piece keeps settling after it has appeared.
- Order follows document order. No piece jumps its turn.

### Final state

When the entrance has finished, every image must resolve to:

```
clip-path: inset(0 0 0 0)
transform: none
opacity: 1
```

with no structural property touched. A screenshot taken after the animations have completed must be **identical** to one taken before the entrance existed. Verify this by comparing captures, not by inspection.

### Responsive and reduced motion

- Below 768px the entrance simplifies to the reveal already used elsewhere. No directional wipes competing with a thumb.
- Under `prefers-reduced-motion`, images are present at their final state from the start.

---

## 10. Pinned sections

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

## 11. Captions

Every image carries one. Small, precise, understated.

```
CCH iFirm · Product ecosystem dashboard
Client context · Cross-product workflow
Tax · Return preparation
```

Roboto Mono, ~10px, letterspaced, uppercase, muted, hairline rule above. Use the existing `figcaption` rule.

No cards, no pills, no boxes, no oversized captions. A caption states what the thing is and where it comes from. It never argues, apologises or explains the page.

---

## 12. Text

Copy is a visual unit, not a wall.

- Short statements over paragraphs. Reading width 56–60 characters.
- Occasional large conceptual statements at display scale, given a full screen and space around them.
- Small mono labels to mark what a block is.
- The reader should follow the story while still moving.

Copy rules in `CLAUDE.md` win over anything here. **Never rewrite Laura's words to fit a layout.** Change the layout.

Never write sentences that describe the page to its reader. No "as shown here", no "this case study will", no explaining the constraints the page was written under. That is backstage talk, and it breaks the spell.

**No em dashes.** Laura has ruled them out. Use a colon, a full stop, or restructure.

---

## 13. Transitions

Between moments: whitespace, scale change, typography, image movement, shifts in visual density. **Not** hard boundaries, borders, containers or repeated backgrounds.

Between chapters, the ground may change (dark to tinted to the rare light moment). That change *is* the transition; it needs no rule above it.

Between stories: the end of a chapter, not a "next project" card. Large title, editorial framing, whitespace, subtle movement. The next piece should already feel part of the same world.

Chapter snapping, where used: `scroll-snap-type: y proximity` on the scroll container, `scroll-snap-align: start` on the chapters only. **Never `mandatory`**, because it fights sticky sections. Set `scroll-margin-top: 0` on snap targets, because the global `[id]{scroll-margin-top:92px}` will otherwise land every chapter 92px low.

---

## 14. Navigation

Identical across every page: the disclosure menu, `mix-blend-mode: difference`, masked link reveals with staggered delays, closing on selection and on Escape.

The navigation never dominates. It is a transparent constant that works over any ground.

When adding a nav item, add its stagger delay. A link with no delay appears instantly while the others cascade, and it looks broken.

---

## 15. Responsive

Mobile keeps the story and loses the choreography.

**Reduce:** pinned sections, parallax, simultaneous movement, full-height chapters where content is taller than the screen.

**Preserve:** hierarchy, pacing, the relationships between image sizes, narrative order, editorial feel.

Never simply stack the desktop layout. Specific rules learned the hard way on this site:

- **Copy before its image.** With the image first, it reads as belonging to the previous story.
- **Panoramic crops fail on narrow screens.** Anything wider than about 2:1 becomes an illegible strip. Re-crop to 16:9 on mobile.
- **Check the fixed nav does not collide** with content near the top of a block.
- A block taller than the viewport must not be forced to `100svh`; it will clip.

---

## 16. Reduced motion

Under `prefers-reduced-motion: reduce`: no parallax, no scrubbing, no transforms, no snapping, no smooth scroll. All content visible, in the same order, immediately.

The story must be fully understandable with every animation removed. If removing motion removes meaning, the meaning was never in the page.

---

## 17. The reveal contract

Learned from real failures on this site. Any reveal system must satisfy all four:

1. **Content survives without JS.** Start states apply only under `html.js`; `html:not(.js)` shows everything.
2. **The start state must paint before the transition.** Set up, then wait **two** `requestAnimationFrame`s before revealing. One frame is not enough and the animation is silently skipped.
3. **The fail-safe reveals only what the reader has reached.** A timer that reveals the whole document pre-empts every reveal below the fold. On a long page that is every animation except the first screen.
4. **Three drivers, because each can fail.** IntersectionObserver is primary. A passive scroll listener is the second path. A scoped `setTimeout` is the last resort, because rAF, IntersectionObserver *and* scroll events are all suspended while a document is hidden, and `setTimeout` is not. A link opened in a background tab must not arrive blank.

---

## 18. Anti-patterns

Rounded SaaS cards · drop shadows · icon triads · checkmark lists · pill labels · repeated rectangles · borders as separators · glossy or inflatable objects unrelated to the work · particle fields · node meshes · decorative glitch · cursor tricks · horizontal page scroll · video backgrounds · 3D · pastel illustration · neon and glow · gaming HUDs · generic UX process diagrams · fake metrics · carousels used by default · animating everything · copying the reference sites' imagery, copy, type or compositions.

---

## 19. The bar

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
