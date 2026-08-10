# Claude Code — Prompt Playbook

Portfolio de Laura Benavente · sistema Living Frequency

Los prompts están en inglés porque el repo y el `CLAUDE.md` están en inglés — Claude Code responderá en el idioma en que le escribas, así que puedes traducirlos si prefieres. Están ordenados: **no saltes fases**. Cada uno lleva qué esperar y cómo saber si salió bien.

---

## Setup

```
laura-portfolio/
  index.html          ← renombra laura-benavente-portfolio.html
  CLAUDE.md
```

Abre esa carpeta en Claude Code. Lee `CLAUDE.md` automáticamente en cada sesión.

**Higiene de sesión.** Una sesión por tarea. Cuando termines una fase, empieza sesión nueva — el contexto largo hace que Claude olvide reglas del principio. Y verifica siempre en el navegador antes de aceptar: `open index.html` en Mac.

---

## Fase 0 · Orientación

**Prompt 0.1 — comprobar que entiende el sistema**

```
Read CLAUDE.md and index.html. Then answer, without changing any code:

1. What are the five substrate states and what does each mean?
2. Why does scene 02 use `grid` and not something more visually interesting?
3. What is the pulse, and what is the only thing a scene may change about it?
4. Name three things that would break this system if I asked for them.

If anything in index.html contradicts CLAUDE.md, tell me which and stop.
```

*Esperado:* respuestas correctas y, posiblemente, contradicciones reales encontradas. **Si falla esta, no sigas** — arregla el `CLAUDE.md` antes.

**Prompt 0.2 — separar en archivos**

```
Split index.html into index.html, styles.css and substrate.js. Keep behaviour
identical — no visual changes, no refactoring beyond the split. Verify the page
still renders and the pulse still runs before telling me it's done.
```

---

## Fase 1 · Contenido (la fase que decide la entrevista)

Esto es lo más importante del documento. El envoltorio ya está; lo que te contrata es esto.

**Prompt 1.1 — extraer la Story 03**

```
I need to write Story 03: designing human control for an autonomous AI agent.
This is the case study that decides whether I get an AI Product Designer interview,
so I need it to show judgement, not screens.

Interview me. Ask one question at a time, wait for my answer, and follow up when
an answer is vague. Do not write the case study yet. Do not offer to fill gaps
with plausible detail — if I don't know something, we mark it as a real gap.

Cover: what the agent actually did · where autonomy broke trust · how I decided
what needed human approval · how uncertainty was shown in the interface · what
happened when the agent was wrong · undo and recovery · when it escalated to a
human · what I got wrong first · what I would do differently.

Start with question one.
```

*Esperado:* 15–25 preguntas a lo largo de un rato. Contesta en español si te sale más fácil. **No dejes que escriba el caso hasta el final.**

**Prompt 1.2 — redactar**

```
Now draft Story 03 following the spine in CLAUDE.md: the system and its
relationships → the real tension → the strategic reframing → design principles →
reconstructed interaction model → decisions and trade-offs → outcome.

Rules: no client name, no real UI, no real data, no invented metrics. Where I
gave you a number, use it exactly; where I didn't, don't invent one. Hypothetical
framing where needed ("Let's say..."). Under 700 words. Every paragraph must
survive the question "so what?".
```

**Prompt 1.3 — auditar antes de aceptar**

```
Audit that draft as a hostile reader — a VP of Product who has read forty
portfolios this month. For each paragraph tell me: is this a decision or a
description? Could any competent designer have written this sentence about any
project? Flag every sentence that is filler. Be blunt.
```

**Prompt 1.4 — meterlo en el sitio**

```
Replace the Story 03 placeholder in index.html with the final text. Remove the
`.holder` block for that story only. Keep the band structure, the metadata rail
and the RECONSTRUCTED label. Do not restyle anything.
```

**Prompt 1.5 — repetir para 01 y 02**

```
Same process for Story 01 (continuity across a fragmented ecosystem). Interview
me first, one question at a time. Don't write until I say so.
```

---

## Fase 2 · El sustrato

**Prompt 2.1 — calibrar los estados**

```
The five substrate states need calibration. Add a temporary dev panel (query
string ?dev=1 only) that lets me switch state, set pulse amplitude 0–1, and
change node count live. No visual changes to the states yet — I want to look
before deciding.
```

**Prompt 2.2 — el estado que más importa**

```
Scene 02 `grid` must be the coldest, most rigid frame on the site — an accounting
ledger that cannot express a relationship. Right now it isn't rigid enough.
Make it more mechanical: perfect orthogonal alignment, no drift, edges absent,
pulse expressed only as luminance and never as movement.

Show me two options and explain what each one is saying.
```

**Prompt 2.3 — la transición ceremonial**

```
The 02→03 transition is the site's central transformation: rigidity → flow.
Make it scroll-scrubbed so I control it, using the same node count in both
states — only positions and edges change. Ceremonial timing (1800ms equivalent
across the scrub). Pulse rises toward the release and drops sharply as the mesh
settles. Under prefers-reduced-motion it resolves instantly to the mesh.
```

**Prompt 2.4 — Observer**

```
Observer mode currently just calms the field. Make it more legible: when the
visitor is still for 4s, nodes should converge toward a shared phase so the
whole field visibly synchronises. It should feel like the system noticing.
Keep it subtle — no colour change, no UI announcement beyond the existing HUD.
```

---

## Fase 3 · Escenas

**Prompt 3.1 — auditoría de ritmo**

```
Audit every scene against the rhythm map in CLAUDE.md. For each one report:
declared rhythm, actual vertical padding, actual pulse amplitude, number of
signal colours present, number of non-default materials. Flag every violation
as a table. Don't fix anything yet.
```

**Prompt 3.2 — arreglar sólo lo señalado**

```
Fix only the violations you flagged. Nothing else. List each change and the rule
it enforces.
```

**Prompt 3.3 — móvil**

```
Review the site at 390px. Per CLAUDE.md, mobile reduces intensity and holds
structure: generative fields go lower-density, immersive-forward becomes
balanced, type scale compresses but hierarchy relationships do not, vertical
rhythm halves, the 8px base holds. Report what's broken before changing it.
```

---

## Fase 4 · Calidad

**Prompt 4.1 — accesibilidad**

```
Full accessibility pass. Check: contrast of every text token against its actual
composited background (over the scrim, not the base colour) · keyboard path
through the whole page including the rail · focus visibility on dark ground ·
that no meaning is carried by colour alone · that prefers-reduced-motion
resolves every scene to its end state with nothing appearing stuck or missing.

Report failures with measured values. Fix after I confirm.
```

**Prompt 4.2 — rendimiento**

```
Performance pass. Target: usable on a mid-range Android. Measure and report
before changing anything — canvas frame cost, node count impact, font loading
strategy, layout shift. The preloader must never block first meaningful content.
```

**Prompt 4.3 — sin JavaScript**

```
Disable JavaScript and screenshot the page. Every word must be readable and
every scene legible — that's a hard rule in CLAUDE.md, not a nice-to-have.
Report anything that fails.
```

---

## Fase 5 · Publicar

**Prompt 5.1**

```
Prepare for deployment: self-host the three fonts as woff2 (subset to latin),
add meta tags and Open Graph, add a favicon, check all links resolve. No CDN
dependencies in production. Tell me the final page weight.
```

**Prompt 5.2**

```
Set this up as a git repo with a sensible .gitignore and a README that explains
the substrate architecture for future me. Then walk me through deploying to
Netlify or Vercel step by step.
```

---

## Prompts reutilizables

**Crítica honesta** — úsalo cuando algo te guste demasiado

```
Critique what we just built against CLAUDE.md. Be specific and be hostile.
Where did we drift toward decoration? Where does something exist only because
it looks good? What would a Design Director notice in the first ten seconds
that we've stopped seeing?
```

**Test de genericidad**

```
Remove all type from this scene mentally. Does the remaining image read as this
specific system, or as generic dark futurism that could belong to any AI startup?
Answer honestly.
```

**Antes de aceptar cualquier cambio visual**

```
Before I accept this: name the idea, relationship, force or transformation each
new element represents. Anything you can only justify aesthetically, remove.
```

**Cuando pidas algo que rompe el sistema**

```
If what I just asked for contradicts CLAUDE.md, tell me which rule it breaks and
propose an alternative that doesn't. Don't just do it because I asked.
```

---

## Prompts que NO deberías usar

Estos son los que degradan el sistema. Los pongo porque van a apetecerte.

- *"Hazlo más impresionante"* — sin criterio, produce decoración. Di qué idea falta.
- *"Añade más animaciones"* — cada animación tiene que nombrar su transformación antes de existir.
- *"Ponlo tipo Studio Dialect"* — te lleva al registro de estudio, no al de product designer.
- *"Inventa métricas para el caso"* — números falsos destruyen la credibilidad. Es lo único irreversible aquí.
- *"Genera el texto del caso"* sin entrevista previa — sale genérico y se nota a un párrafo.
- *"Rellena los huecos"* — un hueco marcado es honesto; uno rellenado con plausibilidad es mentira.

---

## Orden recomendado

1. **0.1 → 0.2** — quince minutos
2. **1.1 → 1.4** para Story 03 — es la sesión más larga y la más valiosa
3. **4.3** — comprobar que sigue funcionando sin JS
4. **1.5** para Stories 01 y 02
5. **2.x** sustrato
6. **3.x** escenas
7. **4.x** calidad
8. **5.x** publicar

Si sólo tienes una tarde: haz 1.1 a 1.4. El resto puede esperar. El envoltorio ya está terminado.
