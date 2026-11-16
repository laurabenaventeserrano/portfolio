import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Kicker } from '../ui';
import { CRAFT, type CraftItem } from '../../content/craft';
import { usePrefersReducedMotion } from '../../lib/hooks';
import { lockScroll } from '../../motion/useSmoothScroll';

/*
  CRAFT: rejilla editorial de vídeos e imágenes, casi sin texto. Los datos viven en src/content/craft.ts.
  · Vídeos: en bucle, sin sonido, solo mientras están en pantalla. Con movimiento reducido no arrancan solos:
    se ve el póster y el vídeo se reproduce en el visor, con controles.
  · Clic en una pieza: visor a pantalla completa (Esc o fuera para cerrar, ← → para pasar).
    No es un <dialog> nativo: la capa superior del navegador taparía el cursor propio del sitio.
  · Sin animación de entrada; solo un hover discreto en la imagen.
*/

function Thumb({ item }: { item: CraftItem }) {
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
  }, [reduced, item.video]);

  if (!item.video) return <img src={item.image} alt="" loading="lazy" decoding="async" />;
  return <video ref={ref} src={item.video} poster={item.image} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />;
}

function Viewer({ index, onClose, onStep }: { index: number; onClose: () => void; onStep: (d: number) => void }) {
  const item = CRAFT[index];
  const reduced = usePrefersReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const many = CRAFT.length > 1;

  // Al abrir: el resto de la página queda inerte (foco atrapado aquí) y el scroll, quieto
  useEffect(() => {
    const root = document.getElementById('root');
    root?.setAttribute('inert', '');
    lockScroll(true);
    closeRef.current?.focus();
    return () => {
      root?.removeAttribute('inert');
      lockScroll(false);
    };
  }, []);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (many && e.key === 'ArrowRight') onStep(1);
      else if (many && e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onClose, onStep, many]);

  return createPortal(
    <div className="craft-viewer is-dark" role="dialog" aria-modal="true" aria-labelledby="craft-viewer-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="craft-viewer__bar">
        <p id="craft-viewer-title" className="craft-viewer__title">
          {item.title}{item.meta && <span className="mono-s"> · {item.meta}</span>}
        </p>
        {many && <span className="mono-s craft-viewer__count">{String(index + 1).padStart(2, '0')} / {String(CRAFT.length).padStart(2, '0')}</span>}
        <button ref={closeRef} type="button" className="pill pill--line pill--sm" data-cursor="Close" onClick={onClose}>Close ✕</button>
      </div>
      <figure className="craft-viewer__stage" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        {item.video
          ? <video key={item.id} src={item.video} poster={item.image} muted loop playsInline controls autoPlay={!reduced} aria-label={item.alt} />
          : <img key={item.id} src={item.image} alt={item.alt} />}
      </figure>
      {many && (
        <div className="craft-viewer__nav">
          <button type="button" className="pill pill--line pill--sm" data-cursor="Previous" onClick={() => onStep(-1)} aria-label="Previous piece">←</button>
          <button type="button" className="pill pill--line pill--sm" data-cursor="Next" onClick={() => onStep(1)} aria-label="Next piece">→</button>
        </div>
      )}
    </div>,
    document.body,
  );
}

export default function CraftSection() {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  // Al cerrar, el foco vuelve a la pieza que se abrió (Safari no enfoca los botones al hacer clic)
  const close = useCallback(() => setOpen((i) => {
    if (i !== null) requestAnimationFrame(() => triggers.current[i]?.focus({ preventScroll: true }));
    return null;
  }), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + CRAFT.length) % CRAFT.length)), []);

  if (!CRAFT.length) return null;

  return (
    <section id="craft" className="section" aria-labelledby="craft-title">
      <div className="container stack gap-48">
        <div className="sec-head">
          <div className="sec-head__main">
            <Kicker>Up close</Kicker>
            <h2 id="craft-title" className="h-xl">Craft</h2>
          </div>
          <p className="mono-s muted">UI · Design systems · Interaction · Design engineering</p>
        </div>

        <ul className="craft">
          {CRAFT.map((item, i) => {
            const inner = (
              <>
                {/* Sin pie: solo la pieza. El título va en el aria-label y en el visor */}
                <span className="craft__media" style={{ aspectRatio: item.ratio ?? '16 / 9' }}><Thumb item={item} /></span>
              </>
            );
            return (
              <li key={item.id} className={`craft__item craft__item--${item.size ?? 'half'}`}>
                {/* Con enlace (p. ej. el archivo de Figma): la pieza abre el enlace en otra pestaña. Sin enlace: el visor. */}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="craft__open" data-cursor={item.cursor ?? 'Open it'}
                    aria-label={`${item.title}. ${item.alt} ${item.cursor ?? 'Open link'} (opens in a new tab).`}>
                    {inner}
                  </a>
                ) : (
                  <button ref={(el) => { triggers.current[i] = el; }} type="button" className="craft__open" data-cursor="Take a closer look" onClick={() => setOpen(i)}
                    aria-label={`${item.title}. ${item.alt} Open larger view.`}>
                    {inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {open !== null && <Viewer index={open} onClose={close} onStep={step} />}
    </section>
  );
}
