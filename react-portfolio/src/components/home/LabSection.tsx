import type { MouseEvent } from 'react';
import { Video } from '../ui';
import { LINKS } from '../../content/site';

/* Toda la tarjeta abre el prototipo (el cursor dice "Make a postcard", "Ask the cards"…).
   El enlace oculto sigue siendo el real, para teclado y lectores de pantalla. */
function openPass(e: MouseEvent<HTMLElement>) {
  if ((e.target as HTMLElement).closest('a')) return;
  e.currentTarget.querySelector<HTMLAnchorElement>('a.pass__link')?.click();
}

/* Los proyectos del lab. Para añadir uno, añade una entrada: la rejilla se ajusta sola
   (todas las tarjetas tienen el mismo tamaño, tres por fila). */
type Pass = { id: string; title: string; sub: string; stack?: string; video: string; poster: string; href?: string; cta?: string; cursor?: string; label: string };

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
];

export default function LabSection() {
  return (
    <section id="lab" className="section section--accent" aria-labelledby="lab-title">
      <div className="container lab">
        <div className="lab__head">
          <h2 id="lab-title" className="h-xl">Having fun with AI</h2>
          <p className="lead">Small experiments. Working prototypes.</p>
          <a href={LINKS.instagram} className="text-link">@havingfunwithai_ ↗</a>
        </div>
        <div className="lab-grid">
          {PASSES.map((p) => (
            <article key={p.id} className="pass" aria-labelledby={p.id} data-cursor={p.cursor ?? 'Play prototype'} onClick={p.href ? openPass : undefined}>
              <Video src={p.video} poster={p.poster} label={p.label} />
              <div className="pass__body">
                <h3 id={p.id} className="pass__title">{p.title}</h3>
                <span className="pass__sub">{p.sub}</span>
                {p.stack && (
                  <dl className="pass__rows">
                    <div className="pass__row"><dt>Stack</dt><dd>{p.stack}</dd></div>
                  </dl>
                )}
              </div>
              {p.href && <a href={p.href} className="pass__link sr-only">{p.cta}</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
