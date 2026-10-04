# Laura Benavente — Portfolio

Portfolio 3.0 (rebuilt 2 Oct 2026). Goal: win interviews for **Design Engineer / Senior Product Designer / AI Product Designer** roles at international tech companies, preferably B2B SaaS, fully remote.

Audience: Head of Design, Design Director, VP of Product, hiring manager. **A recruiter must understand the profile in under ten seconds.** The site is skimmed: every heading must make sense on its own.

## Positioning

**DESIGN ENGINEER** · Product Design · AI · Systems · Code
**I design the product and the system behind it.** Key statement. Keep it prominent; never replace it with something generic.

Two realities, both visible at once:

1. A Senior Product Designer with 8+ years of shipped product work (Wolters Kluwer, frog / Telefónica).
2. A practice that has evolved into Design Engineering: AI-assisted design and build, prototyping, systems.

Never minimise the product design career, never present Laura as a frontend engineer, never invent experience. AI has two dimensions and both must show: AI in her own workflow, and AI integrated into product experiences. Not a productivity shortcut.

---

## What is live

**The live site is the React app in `react-portfolio/`** (React 19, Vite, TypeScript, GSAP + Lenis). Netlify builds it with `tools/publicar-react.sh` into `_site/`, adding `lab/` (Postcard maker, Arcana) and the CV PDF.

The static HTML at the repo root (`index.html`, `story1-3-case-study.html`, `styles.css`, `tokens.css`, `main.js`) is the **previous version**. It is not published by Netlify. Do not edit it thinking it is the live site. `IDENTITY-V1-CLAUDE-CODE.md`, the `visual-system` / `visual-storytelling` skills, Libertinus/Roboto and the red/pink accents describe that previous version, not the React site.

## Information architecture

Nav: **Work · Playground · About · CV · Contact.** Home, Playground and About are sections of the home page; the cases are their own routes.

| Route | File | Content |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Hero → ticker → How I work (From strategy to build, five cards) → Experience → Selected work → About → Lab statement → Playground → Contact |
| `/work/cch-ifirm-cloud-migration` | `Case1.tsx` | CCH iFirm Cloud Migration · Wolters Kluwer |
| `/work/ai-customer-communications` | `Case2.tsx` | AI-Powered Customer Communications · Wolters Kluwer / CCH iFirm |
| `/work/ai-client-data-migration` | `Case3.tsx` | AI-Powered Client Data Migration · Adsolut Accounting |
| `/work/ifirm-ai-contextual-assistant` | `Case4.tsx` | AI Contextual Assistant for CCH iFirm · Wolters Kluwer · **Concept** (Proposal 3 of Case 01, told as its own story) |
| `/work/telefonica-multi-device` | `Case5.tsx` | Multi-device Product Design for Telefónica · frog / Telefónica |

Old URLs (`/story1-case-study` etc., with or without `.html`) redirect to the new cases, in `main.tsx` (`LEGACY_ROUTES`) and `public/_redirects`. Shared content (experience, work tiles, about rows, links) lives in `src/content/site.ts`.

- **Not now:** a Notes section (planned later), a standalone Design Systems section (design systems stay transversal, shown through tags and case content).
- **Home hero and "From strategy to build":** Laura restored both to their earlier form on 2 Oct 2026, after Portfolio 3.0 had replaced the hero and removed the section. Don't change them again without asking.
- **Playground:** leave the current content as it is. Laura adds projects herself. A graphic archive may be built as a hidden component, shown only once there are 3–4 strong pieces. No placeholder artwork.

## Case studies

Every case is an individual proof point, with no grouping into categories. Tags sit under the title. Status (Shipped) is always visible.

Structure, built from `CaseHero` + `CaseSection` (`src/components/`): title → company / role / status / tags → one-line hook → context → the problem (on black) → the decision → the system / experience → how I work (the real steps of that case) → shipped / outcome → my contribution → confidential footnote → next case.

- **About two primary visuals per case.** Everything else stays in the repo, unrendered. Never delete source images or videos without asking.
- **Videos** only when they show something a still can't: interaction, prototype behaviour, a flow.
- **Confidential note:** the Wolters Kluwer cases and Telefónica carry it (`CaseNote`). Laura wants it **discreet**: a small grey footnote at the end of the case, never a box or a badge near the title. Only Movistar/Telefónica screens are cleared as safe to show; `s1-onpremise.jpg` is a real CCH Central screenshot and stays unpublished.
- Make the cases different lengths. Don't force them all into the same template.

## Ask Laura (AI chat)

A chat that answers as Laura, in first person (reference: RacheLLM on rachelchen.tech). Button "Ask Laura" in the header, floating button on mobile, side panel on every page.

- UI: `src/components/AskLaura.tsx` + `src/styles/ask.css`. Suggested questions per page live there.
- Server: `server/askLaura.ts`, served by the Netlify function `netlify/functions/ask-laura.mts` at `/api/ask-laura`, and in development by a Vite middleware (`vite.config.ts`). Model `claude-opus-5-5`, effort low, prompt caching, server-side refusal fallback, 12 requests/min per IP.
- **Knowledge: `server/knowledge.ts` is the only thing it knows.** Facts from Laura's CV, deck and site only. Never add anything she hasn't said; the chat will repeat it as true. Update it whenever a case or the CV changes.
- The API key lives only in Netlify (`ANTHROPIC_API_KEY`, Functions scope) and in `react-portfolio/.env.local` for local dev (gitignored). Never in code, never in the browser.

## Rules

- **Never render a number that is not a real value.** No invented metrics, outcomes, clients or projects. This is the only irreversible mistake available here. Real figures in use: L → S, 4/5, ~10 sec, 6 / 5 / 1 (Case 01); 3/3, shipped in Canada (Case 02); ~80% accuracy, a day → minutes (Case 03); −12% calls, 2019 (Case 04).
- **Copy:** use Laura's words (the live site, her deck, her CV). When copy has to be shaped, keep it short and direct, and tell her what was written new. Direct titles, no poetic headlines, no negative constructions about her positioning, no generic UX language.
- **First person.** "I decided", not only "we did". Credit the team, name her decisions.
- **Text does not animate.** Texts, images and videos have no entrance animation (Laura's feedback). Movement is only on elements: portrait, ticker, About photo, lab fan.
- **Reduced motion and no-JS** must still show all content.
- **When uncertain, ask.** Especially before deleting assets, changing the IA, rewriting existing copy substantially, or moving a project.

## Visual direction

HOME = personality · CASE STUDY = clarity · PLAYGROUND = fun · ABOUT = credibility.

Current system (`src/styles/global.css`): black and white with a lilac accent `#E7BFFF` (no lilac text, only fills), Bricolage Grotesque for display and body, Geist Mono for labels. Keep the strongest personality pieces (dot portrait, jelly logo, gelatin ticker, lab fan, particle statement). Cases stay calm: typography, spacing, tags, short statements, selective imagery; nothing competes with the content.

**Avoid:** oversized decorative imagery, repeated full-screen screenshots, long paragraphs, effects that compete with a case, explanatory filler, huge galleries, generic minimalist-portfolio look, cyberpunk / neon / HUDs, icon triads, checkmark lists, copying reference sites.

**The rainbow footer glow** (`#glow`, `medirGlow()`) lives only in the old static site. Laura approved it and likes it. The React site doesn't have it. Never delete it from the static files, and ask her before porting it or dropping it for good.

## Working with Laura

- Never commit without asking first.
- Answer in English even when she writes in Spanish.

## Open

1. Visual refinement pass on Portfolio 3.0 (next).
2. Notes section, later.
3. Graphic archive in Playground, once there are 3–4 pieces.
4. A dedicated Design Systems case, later.
