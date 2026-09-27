import '../../styles/motion.css';
import { useRef } from 'react';
import { Kicker } from '../ui';
import { LINKS } from '../../content/site';
import { useDealDeck } from '../../motion/useDealDeck';
import { useFanLayout } from '../../motion/useFanLayout';

/* Reverso de un pase del lab: negro, con el número grande y la firma del proyecto. */
function DealBack({ n }: { n: string }) {
  return (
      <div className="deal__back" aria-hidden="true">
        <span className="mono-s">Having fun with AI</span>
        <span className="deal__num">{n}</span>
        <span className="mono-s">Lab pass · @havingfunwithai_</span>
      </div>
  );
}

/*
  The lab · Having fun with AI.
  Los pases se colocan en abanico, sea cual sea su número (useFanLayout).
  Con `deal`, la sección se queda fija y todas las cartas se reparten y se dan la vuelta a la vez
  (referencia: toolkit de guillaumezhu.com).
*/
export default function LabSection({ deal = false }: { deal?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const fanRef = useRef<HTMLDivElement>(null);
  useFanLayout(fanRef);
  useDealDeck(ref, deal);

  return (
    <section id="lab" ref={ref} className={`section section--accent${deal ? ' lab--deal' : ''}`} aria-labelledby="lab-title">
      <div className="container lab">
        <div className="lab__head">
          <div className="stack gap-16">
            <Kicker>The lab · @havingfunwithai_</Kicker>
            <h2 id="lab-title" className="h-xl">Having fun with AI</h2>
          </div>
          <a href={LINKS.instagram} className="pill pill--line">@havingfunwithai_ ↗</a>
        </div>
        <div className="passes" ref={fanRef}>
          {/* Para añadir un pase nuevo, copia un bloque .deal entero. El abanico se recoloca solo. */}
          <div className="deal">
            <div className="deal__flip">
              <DealBack n="01" />
              <article className="pass" aria-labelledby="pass-1">
                <div className="pass__head mono-s"><span>Laura · Lab pass · 01</span><span className="pass__dot" aria-hidden="true" /></div>
                <div className="media"><img src="/images/lab-postal.jpg" alt="Postcard maker" loading="lazy" /></div>
                <div className="stack gap-12" style={{ gap: 4 }}>
                  <h3 id="pass-1" className="h-s">Postcard maker</h3>
                  <span className="mono-s muted">AI prototype</span>
                </div>
                <dl className="pass__rows">
                  <div className="pass__row"><dt className="mono-s">Stack</dt><dd style={{ fontWeight: 700 }}>Vanilla JS · zero deps</dd></div>
                  <div className="pass__row"><dt className="mono-s">What it does</dt><dd>Take or upload a photo, filter it, pick a template, write the message in a handwritten face, add a stamp, and flip the card over. I wrote the brief, including the five template palettes and the type, and built it with Claude Code.</dd></div>
                  <div className="pass__row"><dt className="mono-s">Privacy</dt><dd>Runs entirely in your browser. No photo ever leaves your device.</dd></div>
                </dl>
                <a href={LINKS.postcard} className="pill pill--dark">Play AI prototype ↗</a>
              </article>
            </div>
          </div>
          <div className="deal">
            <div className="deal__flip">
              <DealBack n="02" />
              <article className="pass" aria-labelledby="pass-2">
                <div className="pass__head mono-s"><span>Laura · Lab pass · 02</span><span className="pass__dot" aria-hidden="true" /></div>
                <div className="media"><img src="/images/lab-arcana.jpg" alt="Arcana" loading="lazy" /></div>
                <div className="stack gap-12" style={{ gap: 4 }}>
                  <h3 id="pass-2" className="h-s">Arcana</h3>
                  <span className="mono-s muted">Project 02 · Having fun with AI</span>
                </div>
                <dl className="pass__rows">
                  <div className="pass__row"><dt className="mono-s">Format</dt><dd style={{ fontWeight: 700 }}>One question · one card</dd></div>
                  <div className="pass__row"><dt className="mono-s">It asks</dt><dd style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' }}>What would you like to know?</dd></div>
                  <div className="pass__row"><dt className="mono-s">Series</dt><dd>Small experiments · serious questions</dd></div>
                </dl>
                <a href={LINKS.arcana} className="pill pill--dark">Draw a card ↗</a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
