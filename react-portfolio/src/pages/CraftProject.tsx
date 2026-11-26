import { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import files from 'virtual:public-media';
import { CaseSection, Kicker } from '../components/ui';
import { Thumb, Viewer, type CraftPiece } from '../components/home/CraftSection';
import { CRAFT_PROJECTS, type CraftMedia, type CraftStep } from '../content/craft';
import { useTitle } from '../lib/hooks';
import NotFound from './NotFound';

/*
  Página de un proyecto de Craft (/craft/<slug>), con los datos de src/content/craft.ts.
  Un diario visual, no un caso: cabecera → las etapas del proceso, en orden → enlaces.

  Cada etapa: la firma de los casos (número · título ——— herramientas), su descripción, sus notas
  y sus piezas. Las piezas son lo principal:
  · Solo se pinta una pieza si su archivo existe en public/ (lista del plugin publicMedia, vite.config.ts)
    y carga. Una etapa sin piezas enseña solo su texto: nunca un reproductor vacío.
  · Ancho: el de `size` si lo tiene. Si no, la pieza `feature` va a todo el ancho en la etapa con más piezas
    (la que más pesa) y a 2/3 en las demás, alternando lado. El resto se reparte según cuántas van juntas.
  · En desarrollo (npm run dev), una pieza que falta deja su hueco con el nombre del archivo, para preparar los vídeos.
    En la web publicada no aparece: solo se pinta lo que existe.
  · Clic: visor a pantalla completa con controles (pausa, pantalla completa), ← → entre todas las piezas.
*/

type Size = NonNullable<CraftMedia['size']>;
const RUN: Size[] = ['wide', 'half', 'third'];
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);
// Solo en local: los huecos de las piezas que faltan
const SLOTS = import.meta.env.DEV;
const isUrl = (href?: string) => !!href && /^https?:\/\/\S+$/.test(href);

function layout(media: CraftMedia[], featureSize: Size): [CraftMedia, Size][] {
  const out: [CraftMedia, Size][] = [];
  let run: CraftMedia[] = [];
  const flush = () => {
    const size = RUN[Math.min(run.length, 3) - 1];
    run.forEach((m) => out.push([m, size]));
    run = [];
  };
  for (const m of media) {
    if (m.size) { if (run.length) flush(); out.push([m, m.size]); }
    else if (m.feature) { if (run.length) flush(); out.push([m, featureSize]); }
    else { run.push(m); if (run.length === 3) flush(); }
  }
  if (run.length) flush();
  return out;
}

const piece = (m: CraftMedia, step: CraftStep): CraftPiece => ({
  id: m.src, title: m.caption ?? step.title, alt: m.alt,
  video: isVideo(m.src) ? m.src : undefined,
  image: isVideo(m.src) ? m.poster : m.src,
});

function Project({ slug }: { slug: string }) {
  const project = CRAFT_PROJECTS.find((p) => p.slug === slug)!;
  useTitle(project.title);
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  // Piezas que existen, por etapa, y la lista completa para el visor
  const ready = (m: CraftMedia) => files.has(m.src) && !failed.has(m.src);
  const steps = project.steps.map((step) => ({ step, media: step.media.filter((m) => SLOTS || ready(m)) }));
  // Vídeo del proceso completo (opcional): va primero, también en el visor
  const ov = project.overview && (SLOTS || ready(project.overview)) ? project.overview : undefined;
  const ovPiece = ov && piece(ov, { num: '', title: project.title, tools: '', description: '', media: [] });
  const all = [
    ...(ov && ready(ov) && ovPiece ? [ovPiece] : []),
    ...steps.flatMap(({ step, media }) => media.filter(ready).map((m) => piece(m, step))),
  ];
  // La etapa con más piezas lleva su pieza principal a todo el ancho
  const lead = steps.reduce((best, s) => (s.media.length > best.media.length ? s : best), steps[0]);
  const links = project.links.filter((l) => isUrl(l.href));

  const close = useCallback(() => setOpen((i) => {
    if (i !== null) { const id = all[i]?.id; requestAnimationFrame(() => triggers.current.get(id)?.focus({ preventScroll: true })); }
    return null;
  }), [all]);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + all.length) % all.length)), [all.length]);

  let side = 0;
  return (
    <article className="craft-project">
      <header className="case-hero" aria-labelledby="craft-project-title">
        <div className="container stack gap-24">
          <Kicker>{project.eyebrow}</Kicker>
          <h1 id="craft-project-title" className="case-hero__title balance">{project.title}</h1>
          {project.subtitle && <p className="case-hero__hook">{project.subtitle}</p>}
          {project.intro && <p className="lead craft-project__intro">{project.intro}</p>}
          {project.workflow && <p className="mono-s muted">{project.workflow}</p>}
        </div>
      </header>

      {ov && ovPiece && (
        <section className="case-sec" aria-label={`${project.title}: the whole process`}>
          <div className="container">
            <ul className="craft">
              <li className="craft__item craft__item--full">
                {ready(ov) ? (
                  <button ref={(el) => { triggers.current.set(ov.src, el); }} type="button" className="craft__open" data-cursor="Take a closer look"
                    onClick={() => setOpen(all.findIndex((a) => a.id === ov.src))}
                    aria-label={`${ov.alt} Open larger view.`}>
                    <span className="craft__media" style={{ aspectRatio: ov.ratio ?? '16 / 9' }}>
                      <Thumb item={ovPiece} onError={() => setFailed((f) => new Set(f).add(ov.src))} />
                    </span>
                  </button>
                ) : (
                  <span className="craft__slot mono-s" style={{ aspectRatio: ov.ratio ?? '16 / 9' }}>public{ov.src}</span>
                )}
              </li>
            </ul>
          </div>
        </section>
      )}

      {steps.map(({ step: s, media }) => {
        const isLead = media.length > 0 && lead === steps.find((x) => x.step === s);
        const offset = !isLead && media.length > 0 && side++ % 2 === 1;
        return (
          <CaseSection key={s.num} num={s.num} label={s.title} meta={s.tools}>
            <div className="stack gap-48">
              <div className="stack gap-16 craft-project__text">
                <p className="lead">{s.description}</p>
                {s.notes?.map((n) => <p key={n} className="body">{n}</p>)}
              </div>
              {media.length > 0 && (
                <ul className={`craft${offset ? ' craft--offset' : ''}`}>
                  {layout(media, isLead ? 'full' : 'wide').map(([m, size]) => {
                    const p = piece(m, s);
                    if (!ready(m)) return (
                      <li key={m.src} className={`craft__item craft__item--${size}`}>
                        <span className="craft__slot mono-s" style={{ aspectRatio: m.ratio ?? '16 / 9' }}>public{m.src}</span>
                      </li>
                    );
                    return (
                      <li key={m.src} className={`craft__item craft__item--${size}`}>
                        <button ref={(el) => { triggers.current.set(m.src, el); }} type="button" className="craft__open" data-cursor="Take a closer look"
                          onClick={() => setOpen(all.findIndex((a) => a.id === m.src))}
                          aria-label={`${m.alt || s.title} Open larger view.`}>
                          <span className="craft__media" style={{ aspectRatio: m.ratio ?? '16 / 9' }}>
                            <Thumb item={p} onError={() => setFailed((f) => new Set(f).add(m.src))} />
                          </span>
                          {m.caption && <span className="craft__cap mono-s" aria-hidden="true">{m.caption}</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </CaseSection>
        );
      })}

      {links.length > 0 && (
        <section className="case-sec" aria-label={project.title}>
          <div className="container">
            <ul className="craft-links">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-link" data-cursor={l.label}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {open !== null && all[open] && <Viewer items={all} index={open} onClose={close} onStep={step} />}
    </article>
  );
}

export default function CraftProject() {
  const { slug = '' } = useParams();
  if (!CRAFT_PROJECTS.some((p) => p.slug === slug)) return <NotFound />;
  return <Project key={slug} slug={slug} />;
}
