import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { usePrefersReducedMotion } from '../lib/hooks';

export function Kicker({ children, tone }: { children: ReactNode; tone?: 'accent' | 'muted' }) {
  return <p className={`kicker${tone ? ` kicker--${tone}` : ''}`}>{children}</p>;
}

export function Figure({ src, alt, caption, className, cover }: { src: string; alt: string; caption?: string; className?: string; cover?: boolean }) {
  return (
    <figure className={`figure ${className ?? ''}`}>
      <div className={`media${cover ? ' media--cover' : ''}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/* Vídeo en bucle, silenciado. Arranca al entrar en pantalla y se para al salir.
   React no escribe `muted` como atributo y algunos navegadores bloquean entonces el autoplay:
   por eso se silencia y se lanza a mano. Con movimiento reducido no se reproduce solo y muestra controles. */
export function Video({ src, poster, label, caption }: { src: string; poster?: string; label: string; caption?: string }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    el.muted = true;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, src]);
  const video = (
    <div className="media">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        controls={reduced}
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
  if (!caption) return video;
  return (
    <figure className="figure">
      {video}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Tags">
      {items.map((t) => <li key={t} className="tag">{t}</li>)}
    </ul>
  );
}

export interface Stat { value: string; label: string; accent?: boolean }
export function Stats({ items }: { items: Stat[] }) {
  return (
    <dl className="stats">
      {items.map((s) => (
        <div key={s.label} className="stat">
          <dt className="stat__label">{s.label}</dt>
          <dd className={`stat__value${s.accent ? ' stat__value--accent' : ''}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* Sección de un caso: etiqueta mono a la izquierda, contenido a la derecha. Sin fondos ni números fantasma:
   en los casos manda el contenido. `tone="dark"` solo para la frase que lo merece (el problema o la decisión). */
export function CaseSection({ num, label, title, tone, children }: {
  num: string; label: string; title?: ReactNode; tone?: 'dark'; children?: ReactNode;
}) {
  const id = `sec-${num}`;
  return (
    <section className={`case-sec${tone === 'dark' ? ' section--dark is-dark' : ''}`} aria-labelledby={id}>
      <div className="container case-sec__grid">
        <p className="case-sec__label" id={title ? undefined : id}><span>{num}</span> {label}</p>
        <div className="case-sec__body">
          {title && <h2 id={id} className="h-m balance">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* Pasos numerados: cómo trabajé en este caso, contado con los pasos reales */
export function Steps({ items, label }: { items: [string, ReactNode][]; label: string }) {
  return (
    <ol className="steps-list" aria-label={label}>
      {items.map(([t, d], i) => (
        <li key={t}>
          <span className="steps-list__n">{String(i + 1).padStart(2, '0')}</span>
          <span className="steps-list__t">{t}</span>
          {d && <span className="steps-list__d">{d}</span>}
        </li>
      ))}
    </ol>
  );
}

/* Antes y después, una sola figura */
export function Pair({ before, after }: { before: { src: string; alt: string; caption: string }; after: { src: string; alt: string; caption: string } }) {
  return (
    <div className="figure-row">
      <Figure {...before} />
      <Figure {...after} />
    </div>
  );
}

export function Callout({ label, children, regular, variant }: { label: string; children: ReactNode; regular?: boolean; variant?: 'box' | 'accent' }) {
  return (
    <div className={`callout${variant ? ` callout--${variant}` : ''}`}>
      <p className="callout__label">{label}</p>
      <div className={`callout__text${regular ? ' callout__text--regular' : ''}`}>{children}</div>
    </div>
  );
}

export function Item({ n, title, children }: { n?: string; title?: ReactNode; children?: ReactNode }) {
  return (
    <div className="item">
      {n && <span className="item__n">{n}</span>}
      {title && <h3 className="item__title">{title}</h3>}
      {children && <div className="item__text">{children}</div>}
    </div>
  );
}

export function Flow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <ol className="flow" aria-label={label}>
      {steps.map((s, i) => (
        <li key={s} style={{ display: 'contents' }}>
          <span className="flow__step">{s}</span>
          {i < steps.length - 1 && <span className="flow__arrow" aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
  );
}

/* Nota de confidencialidad: discreta, al final del caso. Está para ser honesta, no para llamar la atención. */
export function CaseNote({ children }: { children: ReactNode }) {
  return (
    <aside className="case-note container" aria-label="About these screens">
      <p><span>Confidential · representative reconstruction.</span> {children}</p>
    </aside>
  );
}

export function NextCase({ to, label, title }: { to: string; label: string; title: string }) {
  return (
    <section className="section section--line">
      <div className="container">
        <Link to={to} className="next" data-cursor="Explore">
          <div className="stack gap-12">
            <span className="kicker">Next · {label}</span>
            <span className="h-l">{title}</span>
          </div>
          <span className="pill pill--dark pill--lg">Read case →</span>
        </Link>
      </div>
    </section>
  );
}
