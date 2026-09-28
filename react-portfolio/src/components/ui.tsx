import type { ReactNode } from 'react';
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

/* Vídeo en bucle, silenciado. Con movimiento reducido no se reproduce solo y muestra controles. */
export function Video({ src, poster, label, caption }: { src: string; poster?: string; label: string; caption?: string }) {
  const reduced = usePrefersReducedMotion();
  const video = (
    <div className="media">
      <video
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={!reduced}
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

/* Capítulo numerado de una story */
export function Chapter({ id, num, kicker, title, tone, children, intro }: {
  id?: string; num: string; kicker: string; title: ReactNode; tone?: 'soft' | 'dark'; intro?: ReactNode; children?: ReactNode;
}) {
  // tone "soft": los bloques que antes eran gris claro ahora van en lila
  const cls = tone === 'dark' ? 'section section--dark is-dark' : tone === 'soft' ? 'section section--accent chapter--accent' : 'section section--line';
  return (
    <section id={id} className={`chapter ${cls}`} aria-labelledby={`${id ?? num}-title`}>
      <span className="chapter__ghost" aria-hidden="true">{num}</span>
      <div className="container">
        <header className="chapter__head">
          <p className="chapter__num"><span>{num}</span><i aria-hidden="true" /><span className="kicker">{kicker}</span></p>
          <h2 id={`${id ?? num}-title`} className="h-l balance">{title}</h2>
          {intro}
        </header>
        {children && <div className="chapter__body">{children}</div>}
      </div>
    </section>
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

export function MeasurePlan({ rows }: { rows: [string, string][] }) {
  return (
    <div className="measure">
      <div className="measure__bar"><span>measurement plan</span><span>no analytics available · plan, not result</span></div>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k} className="measure__row"><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
    </div>
  );
}

export function NextStory({ to, label, title }: { to: string; label: string; title: string }) {
  return (
    <section className="section section--line">
      <div className="container">
        <Link to={to} className="next" data-cursor="Explore">
          <div className="stack gap-12">
            <span className="kicker">Next · {label}</span>
            <span className="h-l">{title}</span>
          </div>
          <span className="pill pill--dark pill--lg">Read {label.toLowerCase()} →</span>
        </Link>
      </div>
    </section>
  );
}
