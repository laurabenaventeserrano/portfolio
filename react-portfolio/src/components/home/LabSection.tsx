import '../../styles/motion.css';
import { useRef, type MouseEvent } from 'react';
import { Kicker } from '../ui';
import { LINKS } from '../../content/site';
import { useDealDeck } from '../../motion/useDealDeck';
import { useFanLayout } from '../../motion/useFanLayout';

/* Toda la tarjeta abre el prototipo (el cursor dice "Play prototype").
   El botón sigue siendo el enlace real, para teclado y lectores de pantalla. */
function openPass(e: MouseEvent<HTMLElement>) {
  if ((e.target as HTMLElement).closest('a')) return;
  e.currentTarget.querySelector<HTMLAnchorElement>('a.pill')?.click();
}

/*
  The lab · Having fun with AI.
  Los pases se colocan en abanico, como el toolkit de guillaumezhu.com, sea cual sea su número (useFanLayout).
  Con `deal`, la sección se queda fija y las cartas entran una a una al hacer scroll (useDealDeck).
  Para añadir un pase nuevo, copia un bloque .deal entero: el abanico y el reparto se ajustan solos.
*/
export default function LabSection({ deal = false }: { deal?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const fanRef = useRef<HTMLDivElement>(null);
  useFanLayout(fanRef);
  useDealDeck(ref, deal);

  return (
    <section id="lab" ref={ref} className={`section section--accent${deal ? ' lab--deal' : ''}`} data-motion="custom" aria-labelledby="lab-title">
      <div className="container lab">
        <div className="lab__head">
          <Kicker>The lab · @havingfunwithai_</Kicker>
          <h2 id="lab-title" className="h-xl">Having fun with AI</h2>
          <a href={LINKS.instagram} className="pill pill--line">@havingfunwithai_ ↗</a>
        </div>
        <div className="passes" ref={fanRef}>
          {/* Para añadir un pase nuevo, copia un bloque .deal entero. El abanico se recoloca solo. */}
          <div className="deal">
            <div className="deal__card">
              <article className="pass" aria-labelledby="pass-1" data-cursor="Play prototype" onClick={openPass}>
                <div className="pass__head mono-s"><span>Laura · Lab pass · 01</span><span className="pass__dot" aria-hidden="true" /></div>
                <div className="media"><img src="/images/lab-postal.jpg" alt="Postcard maker" loading="lazy" /></div>
                <div className="stack gap-12" style={{ gap: 4 }}>
                  <h3 id="pass-1" className="h-s">Postcard maker</h3>
                  <span className="mono-s muted">AI prototype</span>
                </div>
                <dl className="pass__rows">
                  <div className="pass__row"><dt className="mono-s">Stack</dt><dd style={{ fontWeight: 700 }}>Vanilla JS · zero deps</dd></div>
                </dl>
                <a href={LINKS.postcard} className="pill sr-only">Play AI prototype ↗</a>
              </article>
            </div>
          </div>
          <div className="deal">
            <div className="deal__card">
              <article className="pass" aria-labelledby="pass-2" data-cursor="Play prototype" onClick={openPass}>
                <div className="pass__head mono-s"><span>Laura · Lab pass · 02</span><span className="pass__dot" aria-hidden="true" /></div>
                <div className="media"><img src="/images/lab-arcana.jpg" alt="Arcana" loading="lazy" /></div>
                <div className="stack gap-12" style={{ gap: 4 }}>
                  <h3 id="pass-2" className="h-s">Arcana</h3>
                  <span className="mono-s muted">Project 02 · Having fun with AI</span>
                </div>
                <dl className="pass__rows">
                  <div className="pass__row"><dt className="mono-s">Format</dt><dd style={{ fontWeight: 700 }}>One question · one card</dd></div>
                </dl>
                <a href={LINKS.arcana} className="pill sr-only">Draw a card ↗</a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
