import '../../styles/motion.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { WAYS } from '../../content/site';
import { useStackedCards } from '../../motion/useStackedCards';

/*
  Three ways I approach product problems.
  Con `stacked`, cada bloque se queda fijo y el siguiente sube y lo tapa (referencia: elespacio.net).
  Sin `stacked`, se ve exactamente igual que antes: tres bloques uno debajo de otro.
*/
export default function WaysSection({ stacked = false }: { stacked?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  useStackedCards(ref, stacked);

  return (
    <section id="ways" ref={ref} className={stacked ? 'ways ways--stack' : 'ways'} aria-labelledby="ways-title">
      <h2 id="ways-title" className="sr-only">Three ways I approach product problems</h2>
      {WAYS.map((w, i) => {
        const dark = w.tone === 'dark';
        const cls = dark ? 'section--dark is-dark' : w.tone === 'accent' ? 'section--accent' : '';
        return (
          <article key={w.num} className={`way ${cls}`} aria-labelledby={`way-${w.num}`}>
            <span className="way__ghost" aria-hidden="true">{w.num}</span>
            <div className="container way__grid">
              <div className="stack gap-20">
                <p className="indicator" aria-hidden="true">
                  {['01', '02', '03'].map((n, j) => (
                    <span key={n} style={{ display: 'contents' }}>
                      <span className="indicator__n" data-on={i === j}>{n}</span>
                      {j < 2 && <span className="indicator__line" data-on={i === j} />}
                    </span>
                  ))}
                </p>
                <p className="kicker kicker--muted">{w.tags}</p>
                <h3 id={`way-${w.num}`} className="h-l">{w.title}</h3>
                <span className="chip" style={{ alignSelf: 'flex-start' }}>{w.company}</span>
                <p className="lead">{w.text}</p>
                <Link to={w.to} className="pill pill--line" style={{ alignSelf: 'flex-start' }}>{w.cta} →</Link>
              </div>
              <div className="panel">
                <div className="panel__bar"><span>{w.panel}</span><span aria-hidden="true">{w.num} / 03</span></div>
                <div className="panel__body">
                  <div className="media"><img src={w.img} alt={w.alt} loading="lazy" /></div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
