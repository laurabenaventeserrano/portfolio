import { useEffect, useRef, useState, type FocusEvent, type PointerEvent } from 'react';
import { LINKS } from '../../content/site';
import { usePrefersReducedMotion } from '../../lib/hooks';
import '../../styles/quiet-hero.css';

/*
  HERO (Laura, 26 Nov 2026): sustituye al retrato en puntos.
  · Los textos son los de siempre, sin cambiar una palabra; solo cambia la forma: Libertinus grande y centrada.
  · Tres palabras son enlaces. Al pasar por encima (o al llegar con el teclado) flota una vista previa
    junto al cursor. El texto no se mueve: lo único que se mueve es la vista previa.
  · En pantallas táctiles no hay vista previa: las palabras son enlaces normales.
  · Movimiento reducido: la vista previa es la imagen fija y aparece sin seguir al cursor.
*/

type Preview = { id: string; src?: string; poster: string };
const PREVIEWS: Preview[] = [
  // Laura: la foto de About (la misma que ya se ve en la página)
  { id: 'laura', poster: '/images/laurabenavente.jpeg' },
  // product designer: el timelapse de Figma en cámara rápida (Laura, 26 Nov 2026)
  { id: 'designer', src: '/craft/figma-timelapse.mp4', poster: '/craft/figma-timelapse.jpg' },
  { id: 'engineers', src: '/craft/blueprint-camera-scroll.mp4', poster: '/craft/blueprint-camera-scroll.jpg' },
];

export default function QuietHero() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const vids = useRef<Record<string, HTMLVideoElement | null>>({});
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0, placed: false });

  // La vista previa sigue al cursor con un poco de retraso (suave, sin rebote)
  useEffect(() => {
    if (!active) { pos.current.placed = false; return; }
    let raf = 0;
    const tick = () => {
      const p = pos.current, t = target.current;
      if (!p.placed || reduced) { p.x = t.x; p.y = t.y; p.placed = true; }
      else { p.x += (t.x - p.x) * 0.16; p.y += (t.y - p.y) * 0.16; }
      if (box.current) box.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced]);

  // Solo se reproduce el vídeo de la palabra activa
  useEffect(() => {
    Object.entries(vids.current).forEach(([id, v]) => {
      if (!v) return;
      if (id === active && !reduced) { v.muted = true; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [active, reduced]);

  const enter = (id: string) => (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return;
    target.current = { x: e.clientX, y: e.clientY };
    setActive(id);
  };
  const move = (e: PointerEvent<HTMLAnchorElement>) => { target.current = { x: e.clientX, y: e.clientY }; };
  const focus = (id: string) => (e: FocusEvent<HTMLAnchorElement>) => {
    if (!e.currentTarget.matches(':focus-visible')) return;
    const r = e.currentTarget.getBoundingClientRect();
    target.current = { x: r.left + r.width / 2, y: r.top };
    setActive(id);
  };
  const leave = () => setActive(null);
  const word = (id: string, href: string, text: string) => (
    <a href={href} className="hero-q__link" onPointerEnter={enter(id)} onPointerMove={move} onPointerLeave={leave}
      onFocus={focus(id)} onBlur={leave}>{text}</a>
  );

  return (
    <section id="hero" className="hero-q" aria-labelledby="hero-title">
      <div className="hero-q__inner">
        <h1 id="hero-title" className="hero-q__title">
          Hello! I’m {word('laura', '#about', 'Laura')}. A {word('designer', '#work', 'product designer')} who {word('engineers', '#craft', 'engineers')}.
        </h1>
        <p className="hero-q__lead">8+ years designing complex digital products across B2B SaaS, financial software and consumer technology.</p>
        <p className="hero-q__links">
          {/* Botón ghost del sistema (pill--line: solo el contorno prisma) */}
          <a href="#work" className="pill pill--line pill--lg">See the work<span className="pill__arrow pill__arrow--down" aria-hidden="true">↓</span></a>
          <a href={LINKS.cv} className="pill pill--line pill--lg">Download CV<span className="pill__arrow pill__arrow--out" aria-hidden="true">↗</span></a>
        </p>
      </div>

      <div ref={box} className={`hero-q__preview${active ? ' is-on' : ''}`} aria-hidden="true">
        <div className="hero-q__frame">
          {PREVIEWS.map((p) => p.src
            ? <video key={p.id} ref={(el) => { vids.current[p.id] = el; }} className={p.id === active ? 'is-on' : ''}
                src={p.src} poster={p.poster} muted loop playsInline preload="none" tabIndex={-1} />
            : <img key={p.id} src={p.poster} alt="" className={p.id === active ? 'is-on' : ''} loading="lazy" />)}
        </div>
      </div>
    </section>
  );
}
