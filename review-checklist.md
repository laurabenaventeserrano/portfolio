# Review checklist

Run this before calling any page finished. Each test has a pass condition, not an opinion.

## Contents

1. The six tests
2. Reject on sight
3. Things that erode quietly
4. Accessibility floor
5. Performance floor

---

## 1. The six tests

**Semantic test.** Point at every element on the page and name what idea, relationship, force or transformation it represents. Anything that can only be justified aesthetically gets deleted. *Pass condition: zero unnamed elements.*

**Restraint test.** Count the accent colours in the interface — not inside images, in the interface. *Pass condition: zero.* Then count rust instances inside diagrams on that page. *Pass condition: two or fewer.*

**Genericism test.** Mentally remove all type. Does the remaining image read as this specific system, or as generic dark-futurist AI-startup output? *Pass condition: it could not belong to another company.*

**Register test.** Could this page sit in front of a VP of Product at a B2B SaaS company and in front of a design studio without embarrassment in either room? *Pass condition: both. Not one.*

**JS-off test.** Disable JavaScript and reload. *Pass condition: every word readable, every section legible, nothing stuck mid-animation.*

**Contrast test.** Measure each text token against its actual composited background, not against the theoretical base colour. *Pass condition: body ≥ 4.5:1, display ≥24px ≥ 3:1, and `--mid` used only at ≤14px.*

---

## 2. Reject on sight

These require no discussion. If any appear, remove them.

- Rounded cards, drop shadows, soft-glow buttons, gradient-filled CTAs
- Icon triads, green checkmark lists, feature grids with pictograms
- Gradients used as page background; glow, bloom or neon of any kind
- Grain or noise overlay on a white ground — reads as dirt, not texture
- Random particle fields, node meshes, generic network graphics
- Literal beach, kite, wave or sports imagery
- Decorative glitch, RGB splits, scan lines
- Stretched, overlapped, masked or motion-distorted type
- Any number that is not a real value
- Testimonial carousels, centred hero-with-button layouts
- Copying a reference site's composition. References inform judgement about material and rhythm; they are never sources of layout.

---

## 3. Things that erode quietly

These are the failures that arrive gradually, usually late at night when something needs to look "more finished".

**Accent creep.** Rust starts marking one break point, then marks three things, then becomes a brand colour. Recount every review.

**"We" replacing "I".** Case study prose drifts back into team voice, and the reader loses track of what Laura decided. Search for "we " and check each one is factually a team action.

**Fake specificity.** Invented percentages, plausible-looking dashboard figures, made-up participant counts. The most damaging thing in the project and the least visible while you write it.

**Mid-grey on reading text.** `--mid` at 3.5:1 looks elegant on a large paragraph and fails contrast. Body copy is `--ink-2`.

**Motion accumulation.** Each addition seems small. Halve everything periodically; if it reads as an effect, it is too much.

---

## 4. Accessibility floor

- All narrative text lives in the DOM. Never baked into canvas or images.
- Every image has a real `alt` describing what it shows, not its filename.
- Keyboard reachable throughout, visible focus, no scroll trapping.
- `prefers-reduced-motion` resolves everything to its final state instantly and drops the full-viewport hero. It must look finished, not broken — ship it as a designed state, not a switch.
- Colour never carries meaning alone. In diagrams, blue and rust are always paired with a form difference or a label.
- Check the two diagram colours for deuteranopia and protanopia separation.

---

## 5. Performance floor

- Target: usable on a mid-range Android, not just a laptop.
- Self-host the three fonts as woff2, latin subset. No CDN in production.
- Convert any GIF to MP4 with a poster frame; lazy load below the fold.
- No source image wider than 1600px.
- Report total page weight when a build is called finished.
