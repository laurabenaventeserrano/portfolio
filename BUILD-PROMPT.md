# BUILD PROMPT — paste this into Claude Code

Open the `portfolio/` folder in Claude Code and paste the prompt below as your first message.

It assumes the folder already contains: `index.html`, `story1-case-study.html`, `story2-case-study.html`, `story3-case-study.html`, `CLAUDE.md`, `PROMPTS.md`, and `images/`.

---

## The prompt

```
Read CLAUDE.md and index.html before you write anything.

You are building the production version of my portfolio. index.html is already
close — treat it as the source of truth for content and layout, not as a draft to
reinterpret. My copy is approved. Do not rewrite it.

## What I want changed

The reference for INTERACTION is noth.in. I want its mechanics, not its look:

1. FULL-VIEWPORT OPENING. On load the page shows only the headline —
   "Senior Product Designer focused on complex B2B SaaS systems and AI-native
   experiences." — filling the screen. Nothing else. A small scroll cue at the
   bottom left. The three lines rise into place from behind a mask, staggered.

2. PROGRESSIVE REVEAL. Every block afterwards enters as it is reached, never all
   at once. Text rises from a mask; images grow open with clip-path rather than
   fading. Stagger related elements 80–120ms apart. Nothing bounces, nothing
   overshoots, nothing loops.

3. SECTION COUNTERS. A small persistent index — 01 through 06 — that marks where
   the visitor is. Monospace, muted, never louder than the content.

4. HORIZONTAL RAIL for "Having fun with AI", scroll-snapped, four slots.

5. SCROLL-LINKED SUBTLETY. Images may drift slightly slower than the page as they
   pass. Keep it under 8% displacement — if it reads as an effect, it is too much.

Do NOT copy noth.in's visual language: no video backgrounds, no 3D objects, no
inflatable/balloon imagery, no oversized marquee text, no cursor tricks, no
horizontal page scroll. My direction is warm editorial and it is already decided
in CLAUDE.md.

## Content and structure — do not change these

Order: hero → second statement → My background → About me → Story 1 → Story 2 →
Story 3 → Having fun with AI → Let's connect.

All copy stays exactly as it is in index.html, including "create experiences
people LOVE". Headings are left aligned to a 40px page margin.

Each Story block links to its own case study page. Those three pages already
exist and are approved — match their design system exactly, do not restyle them.

## Images

The images/ folder is populated. Place them in the existing slots by aspect ratio:

Story 1 — story1-01-client-context.svg (5/6, tall slot),
           story1-02-one-workspace.svg (3/4, portrait slot)
Story 2 — story2-01-review-flow.svg (5/6, tall slot),
           story2-02-three-routes.svg and story2-03-expected-vs-actual.svg
           (4/3, the two stacked slots)
Story 3 — story3-01-wireflow.png (wide slot)

Remaining images belong inside the case study pages, not on the homepage.
story3-04-test.gif should be converted to MP4 with a poster frame and lazy loaded.
story3-02-screens.png must be resized to 1600px wide before use.

Every image needs a real alt attribute describing what it shows.

## Build requirements

- Split into index.html, styles.css, main.js. No framework, no build step.
- Self-host the three fonts as woff2, latin subset. No CDN in production.
- Content must be fully readable with JavaScript disabled. Reveals apply only
  under html.js, and there is a fail-safe timer that reveals everything anyway.
- prefers-reduced-motion resolves every section to its final state instantly, and
  the hero stops being full-viewport. It must look finished, not broken.
- Keyboard reachable throughout. Visible focus. No scroll trapping.
- Test at 390px, 768px, 1440px. On mobile the reveals stay but the parallax goes.
- Target: usable on a mid-range Android. Report the page weight when you finish.

## Rules you must not break

These are in CLAUDE.md. If I ask for something that breaks one, tell me which and
propose an alternative instead of doing it.

- Semantics before aesthetics. Every element represents a real idea. Anything
  justifiable only aesthetically gets deleted.
- Never render a number that is not a real value.
- No rounded cards, drop shadows, glow, icon triads, or checkmark lists.
- Rust (#B23A20) appears at most twice per page. It marks where something breaks.
- Type never breaks the grid.

## How to work

Do this in four passes and stop for my review after each one:

PASS 1 — Split the files, self-host the fonts, place the images. No motion work
         yet. Show me a working page.
PASS 2 — The hero: full viewport, masked line reveal, scroll cue.
PASS 3 — All other reveals, the section counter, the horizontal rail.
PASS 4 — Accessibility, reduced motion, performance, JS-disabled check.

Start with PASS 1. Do not go further until I say so.
```

---

## Follow-up prompts

**When a pass looks wrong**

```
Before you fix it: which rule in CLAUDE.md is this breaking, and what is the
smallest change that fixes it? Do not restyle anything I did not ask about.
```

**When motion feels excessive**

```
Cut the motion by half. Halve the displacement, halve the stagger, remove the
parallax entirely. I would rather it feel calm than impressive.
```

**Before you accept the build**

```
Disable JavaScript, screenshot the whole page, and tell me what is unreadable.
Then run the same check with prefers-reduced-motion forced on. Both must look
finished, not broken.
```

**The honest critique**

```
Critique this against CLAUDE.md as a hostile reviewer — a Design Director who has
seen forty portfolios this month. Where did we drift into decoration? What reads
as templated? What would they notice in the first ten seconds that we have
stopped seeing?
```

---

## What to do after the build

The site is the container. What decides the interview is inside it. In order:

1. **Story 2 needs its images finished.** It is the AI-native proof and the case
   that positions you for AI Product Designer roles.
2. **The CV link.** It is a nav item pointing at nothing. Add the PDF.
3. **Your LinkedIn headline says "Senior Interaction Designer".** Your CV says
   Senior Product Designer. Recruiters filter on LinkedIn. Fix that today — it
   costs you more interviews than anything on this site.
4. **"Having fun with AI" has four empty slots.** Either build one experiment
   properly or cut the section to two. Four empty frames read as unfinished.
