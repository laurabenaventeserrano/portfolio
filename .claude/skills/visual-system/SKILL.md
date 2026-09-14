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

**Los tokens si son compartidos; las reglas no.** Las cuatro paginas cargan `tokens.css`, que es la fuente de verdad de color, tipografia, escala y trazado. Por encima de eso, `styles.css` sirve solo a `index.html` y cada caso lleva su propio bloque `<style>`. Un cambio de token se hace una vez; un cambio de componente hay que hacerlo en cada fichero que lo usa. Eso es deliberado (cada pagina se abre sola) y es la fuente de deriva mas comun: cuando toques un componente compartido, haz grep en las otras paginas antes de terminar.

| File | Tokens | Reglas |
|---|---|---|
| `index.html` | `tokens.css` | `styles.css` |
| `story1-case-study.html` | `tokens.css` | inline `<style>` |
| `story2-case-study.html` | `tokens.css` | inline `<style>` |
| `story3-case-study.html` | `tokens.css` | inline `<style>` |

`story1-case-study.html` is the reference implementation of the dark case-study system. Copy from it, not from Story 2 or 3.

---

## 2. Tokens

Rewritten 11 Sep 2026 to **Visual Identity V1** (`IDENTITY-V1-CLAUDE-CODE.md`), which overrides every earlier identity note in this repo.

All four pages load `tokens.css`, which is the single source of truth. There is no second naming layer and no alias for a deprecated token: one value, one name.

```css
/* suelos: dos, mas un encaje por suelo. No hay un tercero. */
--lb-ground        #0A0A0C   suelo oscuro, nunca #000
--lb-raised        #141416   pieza elevada sobre oscuro
--lb-cream         #FDFBF6   suelo papel, "blanco roto"
--lb-paper-inset   #F2EFEA   encaje sobre papel

/* tinta sobre oscuro */
--lb-ink           #F2EFEA   17.2:1  display y enfasis
--lb-ink-2         #BDB9B3   10.1:1  texto corrido
--lb-mid           #8C8A87    5.8:1  metadatos, 14px o menos, nunca cuerpo
--lb-line          rgba(242,239,234,.14)
--lb-line-strong   rgba(242,239,234,.28)

/* tinta sobre papel */
--lb-cream-ink     #111111
--lb-cream-body    #3A3835
--lb-cream-meta    #6B6863
--lb-line-on-paper rgba(20,20,22,.16)

/* acento: un color, dos contextos. Nunca un segundo acento. */
--lb-accent        #F2607F   sobre oscuro   6.4:1
--lb-accent-deep   #C22A50   sobre papel    5.4:1

/* prisma: siete paradas, y --lb-prism-sm de cuatro para anchos < ~120px */
--lb-p1..--lb-p7   #1E2A78 #2F5FD0 #2FA7C4 #63BE6E #E3C64B #E8834B #E2436B

--lb-radius        2px       el maximo. No hay radio mayor.
--lb-hairline      1px       todo filete. Nunca 2px ni mas.
--lb-margin        56px      40px bajo 900, 24px bajo 480
--lb-maxw          1400px    1280px en html.case-study
```

**Nunca introduzcas un color fuera de esta lista.** Un hex suelto en una seccion es como muere un sistema.

### Retirados, sin alias

`#B23A20` y cualquier naranja · `#0E0E11` · `#17171B` · `#1E1E24` · `#F6F4EF` · `#FFFFFF` como tinta · `#C9C9CE` · `#8C8C93` · la familia de grises frios `#33333A / #686872 / #7A7A84 / #9E9EA6` · `--blue` y `--blue-l`: V1 tiene **un** acento, no dos · cualquier radio por encima de 2px · `--line-2`, que era una tercera linea y ahora colapsa en `--lb-line`.

El acento fue `--rust` (#B23A20 / #E0714F) hasta el 24 ago 2026, luego carmesi, y el 11 sep 2026 quedo fijado en la pareja de arriba. Los diagramas SVG de Story 2 llevaron naranja hasta ese dia.

### El acento

Uno, en dos contextos: `--lb-accent` sobre oscuro, `--lb-accent-deep` sobre papel. Nunca el de papel sobre oscuro ni al reves, y nunca texto de acento sobre relleno de acento.

Se gasta sin darte cuenta porque hay componentes que lo llevan callado: `.pull` tiene el filete izquierdo en acento y `.pivot .stmt i` pone su inciso en cursiva de acento. Cuenta marcas pintadas, no decisiones. Story 1 sigue mostrando cinco, que es mas de las dos por caso que pide `CLAUDE.md`.

### El prisma

Es el unico ornamento y **solo existe como filete**: reglas, divisiones, subrayados, progreso. Maximo 2px de alto, cantos rectos, radio 1px. Nunca fondo, relleno, lavado, superficie, boton ni nada detras de texto. Nunca difuminado, con resplandor, con sombra, girado ni con el degradado en movimiento.

El barrido de entrada vive en `.prism-rule::before`, no en la regla. No es capricho: `IntersectionObserver` mide la caja ya transformada, asi que con `scaleX(0)` sobre la propia regla el ancho es 0 y `isIntersecting` sale `false` para siempre. Si algun dia una regla no se dibuja, mira esto primero.

---

## 3. Type

Tres familias, tres papeles, nunca una cuarta:

- **Libertinus Serif** "piensa": display, titulares, cifras, `.n`, `.pull`, `.principle`.
- **Roboto** "explica": texto corrido, UI, pies.
- **Roboto Mono** "etiqueta": kickers, fechas, metadatos. Siempre en versalitas, con `letter-spacing` entre `.1em` y `.24em`.

Nunca una frase en mono, nunca una etiqueta en serif. La unica excepcion a las versalitas es un identificador literal como el handle `@havingfunwithai_`: ponerlo en mayusculas lo convertiria en otro dato.

### Escala

Un solo juego de peldanos para las cuatro paginas. El tope es el valor exacto del spec y se alcanza en el lienzo de escritorio; el suelo es el mismo peldano en un lienzo estrecho.

```css
--lb-display-xl  clamp(34px, 7vw,   96px)   / .82   los momentos manifiesto
--lb-display-l   clamp(26px, 4vw,   56px)   / 1.02  titulos de capitulo
--lb-display-m   clamp(22px, 2.2vw, 30px)   / 1     titulares de panel y ficha
--lb-display-s   19px                       / 1.18  titular de ficha (§4)
--lb-numeral     clamp(26px, 2.5vw, 34px)   / 1     cifras de bloque numerado
--lb-body        14px                       / 1.7
--lb-body-s      13px                       / 1.6
--lb-label       10px mono, .16em, versalitas
--lb-kicker      10px mono, .2em,  versalitas
```

No escribas un tamano suelto: si un sitio necesita otro peldano, usa el que le toca por papel. Los unicos literales admitidos son los que el propio spec fija en sus componentes (marca 14px, boton 12px, etiqueta 10px).

Los saltos de linea del display son de autor, no del navegador: cada linea es su propio `<span class="ln"><i>…</i></span>`, que ademas es lo que anima la mascara. Anadir una linea es anadir un span.

---

## 4. Grids and rhythm

```css
.w      max-width var(--lb-maxw), padding 0 var(--lb-margin)
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

Grounds alternate: `.sec` on `--lb-ground`, `.sec.tint` and `.pivot` on `--lb-raised`, and at most one `.light` section per page.

**Where the ground changes, that change is the transition**: never draw a rule between two sections that already change ground. **Where it does not change, §5 of the identity asks for a 1px hairline**, not whitespace alone. On the homepage that is `.second-sec`, `.fsb`, `.about` and `section.lab`, each with a `border-top` of `var(--lb-hairline) solid var(--lb-line)`.

---

## 5. Components

Each of these exists and has a job. Prefer composing them over inventing something new.

| Class | What it is | Rule |
|---|---|---|
| `.head` | Chapter opener: number, `.k` eyebrow, `h2`, `.rule`, optional `.lead` | Every chapter has exactly one |
| `.k` | Mono eyebrow. Fuera de `.head` es la cabecera de seccion del §4: etiqueta a la izquierda y un filete prisma de 1px llenando el resto. Dentro de `.head` va sin filete, porque la cabecera ya lleva el suyo bajo el titular | Never duplicates the heading's words |
| `.n` | Bloque numerado del §4: cifra Libertinus a `--lb-numeral` y filete macizo de 26px debajo, en un `::after` | Sequential, no gaps. Renumber after a removal. Ya no es un fantasma al 55%: es estructura, en tinta plena |
| `.rule` | 1px hairline under a chapter title | Belongs to `.head`, not used as a divider elsewhere |
| `.lead` | Standfirst under a chapter title, 46ch | One per chapter, maximum |
| `.stats` | Result chips: serif figure over a mono label, hairline separators | **Only real values.** No boxes, no radius, no colour. See §7 |
| `.pull` | Serif pull quote with a 1px accent left border | Counts against the accent budget |
| `.principle` | Large serif statement, italic clause in the accent | For a design principle, not for a fact |
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

- Los tokens ya no se copian: las cuatro paginas cargan `tokens.css`. Pon `html` y `body` en `background:var(--lb-ground)`.
- The paper grain `body::after` uses `mix-blend-mode: multiply`, which is invisible on dark. Delete it, do not tune it.
- `.dark` sections become `.light` sections. This is a role inversion, not a rename: the section that was the dark punctuation is now the light one.
- The skip link needs `color:var(--lb-ground)` against its light background.
- **Do not blanket-swap colours inside inline SVG.** Any diagram already drawn for a dark panel will invert to dark-on-dark. Go panel by panel and check each against `git show HEAD:<file>`.
- Un relleno `--lb-raised` dentro de una seccion `.tint` es invisible: el fondo de la seccion ya es `--lb-raised`. V1 no admite un tercer suelo oscuro, asi que la pieza se separa con un filete `--lb-line`, no con otro tono.

---

## 10. Verify by looking

Measuring is not seeing. Several regressions on this site were reported as correct because the numbers checked out while the page was visibly broken.

- Render the section and look at it before saying it works.
- Measure layout with `offsetWidth` / `offsetLeft`. **`getBoundingClientRect()` includes transforms**, so anything under `.drift` or a live `.rv` measures wrong.
- Headless Chrome clamps the viewport to a 500px minimum, so a true 390px mobile check cannot be done there.
- After any structural edit, check tag balance, that no `src` points at a missing file, and that chapter numbers are still sequential.

---

## Approved exceptions to the identity spec

**The rainbow footer glow stays. It is not up for review.**

`#glow` in `index.html`, `.glow` in `styles.css`, `medirGlow()` in `main.js`. Nine blurred bars in a seven-stop gradient, fixed to the viewport floor, growing with the last stretch of scroll and reaching full height exactly at the end of the page.

It breaks `IDENTITY-V1-CLAUDE-CODE.md` §6 (glows, blurs, soft gradients) and §1 (its colours are outside the palette). That is known and deliberate. Laura reviewed it, approved it, and it is the part of the site she likes most.

Do not delete it, redesign it, replace it, reinterpret it, or repeat the effect anywhere else. It lives only in the closing section. **It has already been deleted once by an agent reading the spec and not the history. Do not let that happen again.** If it ever looks like it should go, ask her first.

---

## 11. Do not

Radios por encima de 2px · pastillas · botones circulares · sombras · desenfoques · resplandores (con una unica excepcion aprobada: el resplandor del pie, arriba) · degradados suaves, mallas o manchas · el prisma como fondo, relleno, superficie o boton · un segundo acento · un tercer suelo · una cuarta familia · filetes de 2px o mas · iconos con un grosor distinto de 1.25px o con cantos redondeados · fichas redondeadas · chips de icono · listas con marca de verificacion · un titular en mono · una etiqueta en serif · una frase en versalitas · tipografia que rompe la rejilla · una cifra inventada · una imagen escalada por encima de 1.0x · una rejilla `.two` con un solo hijo · un color que no sea un token · texto por debajo de 4.5:1 (3:1 solo a tamano display).
