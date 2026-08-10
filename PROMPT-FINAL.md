# PROMPT PARA CLAUDE CODE

Abre la carpeta `portfolio/` en Claude Code y pega esto como primer mensaje.

Antes de pegarlo, comprueba que la carpeta contiene: `index.html`, `story1-case-study.html`, `story2-case-study.html`, `story3-case-study.html`, `CLAUDE.md`, `images/` y `laura-portfolio-style/`.

---

```
Before anything else: read laura-portfolio-style/SKILL.md and follow it as the
design system for everything in this project. Also read its three reference files
in laura-portfolio-style/references/ — tokens.css, review-checklist.md and
content-and-voice.md. Then read CLAUDE.md and index.html.

## How I want you to work

DO NOT CREATE OR MODIFY ANY FILE UNTIL I HAVE REVIEWED AND APPROVED THE PLAN.

Work in this order, and stop after each step for my approval:

  STEP 0  Tell me what you understood. No code.
  STEP 1  Show me your plan: file structure, what changes, what stays. No code.
  STEP 2  Build the shared stylesheet and the homepage skeleton. Stop.
  STEP 3  Motion and reveals. Stop.
  STEP 4  The three case study pages, matched to the system. Stop.
  STEP 5  Accessibility, reduced motion, performance, JS-off check.

ASK ME whenever you are unsure. Do not guess, do not fill gaps with something
plausible, do not invent copy, numbers, dates, metrics or client names. If
information is missing, list what you need and wait. A question costs me thirty
seconds. A wrong assumption costs a rebuild.

If something I ask for contradicts the skill or CLAUDE.md, tell me which rule it
breaks and propose an alternative instead of doing it.

## What I want built

A single-page portfolio plus three case study pages. White ground, monochrome
interface, colour only inside images — as defined in the skill.

The opening fills the whole viewport and shows ONLY the headline. Nothing else,
plus a small scroll cue. As I scroll, each block reveals as it is reached: text
rises from a mask, images open with clip-path rather than fading, related items
stagger 80–120ms apart. Nothing bounces, nothing loops.

Page order, and it does not change:
hero → second statement → My background → About me → Story 1 → Story 2 →
Story 3 → Having fun with AI → Let's connect.

## COPY — use exactly this. Do not rewrite, do not "improve", do not fix the caps.

NAV
  Laura Benavente
  Contact me            (pill button, opens mailto:laurabenavente@me.com)
  LinkedIn              (https://www.linkedin.com/in/laura-benavente-serrano/)
  Instagram             (placeholder link for now — ask me before publishing)

HERO — full viewport, this sentence alone
  Senior Product Designer focused on complex B2B SaaS systems and AI-native
  experiences.

SECOND STATEMENT — its own screen
  I combine strategic thinking, emerging technology and narrative interaction to
  create experiences people LOVE

MY BACKGROUND
  Label:  My background
  Title:  From financial operations to product systems
  Body:   I bring together financial-domain knowledge, systems thinking and
          product strategy to turn complex business operations into clear,
          connected and scalable experiences.

ABOUT ME — five lines, revealed one at a time
  About me
  I design connections.
  Between people and systems.
  Between business and technology.
  Between complexity and clarity.
  Between human intention and artificial intelligence.

STORY 1  → links to story1-case-study.html
  Story 1
  Designing a cloud ecosystem for tax professionals
  Product Design · B2B SaaS · Complex workflows · Multi-market · Cloud migration
  Designing the digital layer of a transition from legacy on-premise products to
  a cloud ecosystem across multiple European markets.

STORY 2  → links to story2-case-study.html
  Story 2
  AI document management
  Product Design · B2B SaaS · AI-native · Human review · MVP definition
  Bringing AI-assisted drafting inside the product, so professionals never start
  a client document from an empty page.

STORY 3  → links to story3-case-study.html
  Story 3
  Movistar
  Interaction Design · Consumer · Self-service · Motion · Design system
  Designing a self-diagnosis experience for home connectivity, where the test
  could not be made faster and the wait had to be made understandable.

HAVING FUN WITH AI
  Having fun
  with AI
  Four slots, horizontal rail, scroll-snapped. The content does not exist yet —
  ask me how to handle empty slots before you build this section.

LET'S CONNECT
  Let's connect
  Contact me            (pill button, mailto:laurabenavente@me.com)

## IMAGES — everything is in images/. Place by aspect ratio.

HOMEPAGE
  Story 1   story1-01-client-context.svg     5/6   tall slot
            story1-02-one-workspace.svg      3/4   portrait slot
  Story 2   story2-01-review-flow.svg        5/6   tall slot
            story2-02-three-routes.svg       4/3   stacked, top
            story2-03-expected-vs-actual.svg 4/3   stacked, bottom
  Story 3   story3-01-wireflow.png           wide slot

INSIDE THE CASE PAGES ONLY
  story1-03-scope.svg          16/8
  story3-02-screens.png        needs resizing to 1600px wide first
  story3-03-results.png        portrait
  story3-04-test.gif           convert to MP4 with a poster frame, lazy load

Every image needs a real alt describing what it shows, and a mono caption stating
it is reconstructed. The exact caption wording is in content-and-voice.md.

## Non-negotiable

- Content fully readable with JavaScript disabled. Reveals only under html.js,
  plus a fail-safe timer.
- prefers-reduced-motion resolves everything instantly and drops the full-viewport
  hero. It must look finished, not broken.
- No accent colours in the interface. Blue and rust exist only inside the SVGs.
- Never render a number that is not a real value.
- The pill button is the only rounded corner in the system.
- Split into index.html, styles.css, main.js. No framework, no build step.
- Self-host the three fonts as woff2, latin subset.

## Start here

Do STEP 0 only: tell me what you understood, list every question you have, and
list anything you think is missing or contradictory. Write no code.
```

---

## Prompts de apoyo

**Si empieza a construir antes de tiempo**

```
Stop. You were asked to complete STEP 0 and wait. Revert anything you created and
show me the plan first.
```

**Si algo se desvía del sistema**

```
Check this against laura-portfolio-style/references/review-checklist.md and run
the six tests. Report which ones fail, with the specific element and the rule.
Fix nothing until I confirm.
```

**Antes de dar por bueno cualquier paso**

```
Disable JavaScript, screenshot the page, and tell me what is unreadable. Then do
the same with prefers-reduced-motion forced on. Both must look finished.
```

**Cuando el movimiento se pase**

```
Halve the motion. Half the displacement, half the stagger, no parallax. I would
rather it feel calm than impressive.
```

**La crítica honesta, para cuando lleves demasiado rato mirándolo**

```
Critique this against the skill as a hostile reviewer — a Design Director who has
seen forty portfolios this month. Where did we drift into decoration? What reads
as templated? What would they notice in the first ten seconds that we have
stopped seeing?
```

---

## Lo que sigue pendiente y te va a preguntar

Ten las respuestas a mano antes de empezar:

1. **Fondo blanco en todo, o Stories en negro** como en tu wireframe. Es la única decisión abierta del sistema.
2. **Having fun with AI** — cuatro huecos sin contenido. O construyes un experimento de verdad, o reduces la sección, o la quitas hasta tenerla.
3. **El enlace del CV** — no existe todavía. Hace falta el PDF.
4. **Instagram** — el enlace apunta a nada. Confirma la URL o quítalo de la nav.
5. **Movistar, Telefónica y frog van con nombre**; Wolters Kluwer también, pero sus productos van anonimizados como Tax Cloud y Practice Suite. Confirma que es correcto.
