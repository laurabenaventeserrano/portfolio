import { useCallback, useState, type MouseEvent } from 'react';
import { Video } from '../ui';
import { LINKS } from '../../content/site';
import LabWheel from './LabWheel';
import PortraitPlayer from './PortraitPlayer';

/* Toda la tarjeta abre el prototipo (el cursor dice "Make a postcard", "Ask the cards"…).
   El enlace oculto sigue siendo el real, para teclado y lectores de pantalla. */
function openPass(e: MouseEvent<HTMLElement>) {
  if ((e.target as HTMLElement).closest('a')) return;
  e.currentTarget.querySelector<HTMLAnchorElement>('a.pass__link')?.click();
}

/* Los proyectos del lab. Para añadir uno, añade una entrada: la rejilla se ajusta sola
   (todas las tarjetas tienen el mismo tamaño; van en la rueda de LabWheel.tsx). */
type Pass = { id: string; title: string; sub: string; stack?: string; video: string; poster: string; href?: string; cta?: string; cursor?: string; label: string;
  /** Se juega aquí mismo: al hacer clic se abre a pantalla completa (PortraitPlayer) en vez de ir a un enlace */
  play?: boolean };

const PASSES: Pass[] = [
  {
    id: 'pass-0', title: 'Golosina', sub: 'Hand tracking experiment', stack: 'JavaScript · WebGL · MediaPipe',
    href: LINKS.golosina, cta: 'Stretch the gum ↗',
    cursor: 'Stretch the gum', video: '/video/lab-hand-tracking.mp4', poster: '/images/lab-hand-tracking.jpg',
    label: 'A hand tracked by the webcam pinches and stretches a glossy red 3D shape over the words “Having fun with AI”.',
  },
  {
    id: 'pass-1', title: 'Postcard maker', sub: 'AI prototype', stack: 'Vanilla JS · Canvas 2D · zero deps · built with Claude Code',
    video: '/video/lab-postal.mp4', poster: '/images/lab-postal.jpg', href: LINKS.postcard, cta: 'Play AI prototype ↗',
    label: 'The postcard maker running: choose a template, place a photo, filter it, write the message and flip the card over.',
  },
  {
    id: 'pass-2', title: 'Arcana', sub: 'One question · one card', stack: 'Vanilla JS · own reading engine · EN / ES',
    video: '/video/lab-arcana.mp4', poster: '/images/lab-arcana.jpg', href: LINKS.arcana, cta: 'Draw a card ↗',
    label: 'Arcana running: a spread of illustrated tarot cards, one drawn and turned over to answer the question.',
  },
  {
    // Textos nuevos (26 Nov 2026), pendientes de Laura. La página vive en lab/camera/.
    id: 'pass-3', title: 'Blueprint Camera', sub: 'Scrollytelling experiment', stack: 'HTML · SVG · JavaScript · built with Claude Code',
    href: LINKS.camera, cta: 'Build the camera ↗',
    cursor: 'Scroll to build', video: '/craft/blueprint-camera-scroll.mp4', poster: '/images/lab-blueprint-camera.jpg',
    label: 'Blueprint Camera_001 scrolled from top to bottom: the sixteen parts of an isometric camera travel into place, then blueprint sheets explain how a camera works.',
  },
  {
    // El retrato en puntos que estaba en el hero (26 Nov 2026): al hacer clic se abre en vivo para jugar.
    // `sub` y `label` son textos nuevos, pendientes de Laura. El vídeo es una grabación del retrato real.
    id: 'pass-4', title: 'Dot portrait', sub: 'Interactive portrait', stack: 'TypeScript · Canvas 2D',
    play: true, cta: 'Play with the portrait',
    cursor: 'Scatter the dots', video: '/craft/dot-portrait.mp4', poster: '/craft/dot-portrait.jpg',
    label: 'Laura’s portrait drawn in black dots on white. A cursor passes over it, the dots scatter, then drift back into her face.',
  },
];

export default function LabSection() {
  const [playing, setPlaying] = useState(false);
  const closePlayer = useCallback(() => setPlaying(false), []);
  return (
    <section id="lab" className="section section--accent" aria-labelledby="lab-title">
      <div className="container lab">
        <div className="lab__head">
          <h2 id="lab-title" className="h-xl">Having fun with AI</h2>
          <p className="lead">Small experiments. Working prototypes.</p>
          <a href={LINKS.instagram} className="text-link">@havingfunwithai_ ↗</a>
        </div>
        <LabWheel count={PASSES.length} label="Having fun with AI experiments">
          {(i, wasDrag, copy, near) => {
            const p = PASSES[i];
            return (
              <article className="pass" aria-labelledby={copy ? undefined : p.id} data-cursor={p.cursor ?? 'Play prototype'}
                onClick={p.play ? () => { if (!wasDrag()) setPlaying(true); } : p.href ? (e) => { if (!wasDrag()) openPass(e); } : undefined}>
                <Video src={p.video} poster={p.poster} label={p.label} active={near} />
                <div className="pass__body">
                  <h3 id={copy ? undefined : p.id} className="pass__title">{p.title}</h3>
                  <span className="pass__sub">{p.sub}</span>
                  {p.stack && (
                    <dl className="pass__rows">
                      <div className="pass__row"><dt>Stack</dt><dd>{p.stack}</dd></div>
                    </dl>
                  )}
                </div>
                {p.href && <a href={p.href} className="pass__link sr-only">{p.cta}</a>}
                {p.play && !copy && <button type="button" className="sr-only" onClick={() => setPlaying(true)}>{p.cta}</button>}
              </article>
            );
          }}
        </LabWheel>
      </div>
      {playing && <PortraitPlayer onClose={closePlayer} />}
    </section>
  );
}
