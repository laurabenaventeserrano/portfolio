import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '../../lib/hooks';
import '../../styles/lab-wheel.css';

/*
  Having fun with AI: una ruleta. Las tarjetas van por fuera de un cilindro que gira sobre su eje vertical;
  la de delante se ve entera y las vecinas asoman a los lados, giradas y más tenues (Laura, 26 Nov 2026).
  · Cada pocos segundos gira una tarjeta, despacio, y aparece la siguiente. Se para con el ratón encima,
    al arrastrar y fuera de pantalla.
  · Sin botones: se arrastra (ratón o dedo), con el gesto horizontal del trackpad o con ← → con el foco.
  · No tiene fin. Si hay pocas tarjetas se repiten para cerrar el cilindro; las copias quedan ocultas
    a lectores de pantalla y teclado.
  · Un arrastre no abre la tarjeta: solo un clic sin movimiento la abre.
  · Movimiento reducido: no gira sola ni anima el giro; salta de tarjeta en tarjeta.
*/

const MIN_SLOTS = 16; // huecos en el cilindro (16 → 22,5° entre tarjetas): la curva llena todo el ancho
const HOLD = 4200;    // ms que se queda quieta cada tarjeta antes de girar sola

export default function LabWheel({ count, children, label }: {
  count: number; label: string;
  children: (i: number, wasDrag: () => boolean, copy: boolean, near: boolean) => ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const slots = count * Math.max(1, Math.ceil(MIN_SLOTS / count));
  const [pos, setPos] = useState(0);
  const [size, setSize] = useState({ w: 380, h: 520, gap: 32 });
  const posRef = useRef(pos);
  const anim = useRef(0);
  const wheelEnd = useRef(0);
  const hold = useRef(false);
  const last = useRef(0); // última vez que se movió (sola o a mano)
  const drag = useRef({ on: false, x: 0, start: 0, moved: 0, v: 0, t: 0, lastX: 0 });

  const set = (p: number) => { posRef.current = p; setPos(p); };
  const theta = 360 / slots;
  const step = size.w + size.gap; // px de arrastre por tarjeta
  const radius = step / (2 * Math.tan(Math.PI / slots));

  // Tamaño: el ancho de una columna de la rejilla original (3 en escritorio, 2 en tableta, casi entera en móvil)
  // y todas al mismo alto, el de la más alta, para que la fila quede limpia
  useLayoutEffect(() => {
    const el = stage.current;
    const box = el?.parentElement?.parentElement; // .container.lab
    if (!el || !box) return;
    const measure = () => {
      const cs = getComputedStyle(box);
      const cw = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const vw = window.innerWidth;
      const gap = Math.min(32, Math.max(20, vw * 0.022));
      const w = vw <= 760 ? cw * 0.86 : vw <= 1100 ? (cw - gap) / 2 : (cw - 2 * gap) / 3;
      const cards = el.querySelectorAll<HTMLElement>('.lab-wheel__card');
      cards.forEach((c) => { c.style.width = `${w}px`; c.style.height = 'auto'; });
      let h = 0;
      cards.forEach((c) => { h = Math.max(h, c.offsetHeight); });
      h = h || 520;
      cards.forEach((c) => { c.style.height = `${h}px`; }); // React no lo repinta si el tamaño no cambia
      setSize({ w, h, gap });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [count]);

  // Giro hasta una tarjeta: curva suave por tiempo (entra y sale despacio); con movimiento reducido, salto
  const settle = useCallback((target: number, ms = 700) => {
    cancelAnimationFrame(anim.current);
    const to = Math.round(target);
    last.current = performance.now();
    if (reduced) { set(to); return; }
    const from = posRef.current, t0 = performance.now();
    const dur = Math.max(260, ms * Math.min(1.4, Math.abs(to - from) || 0.4));
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / dur);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      set(from + (to - from) * e);
      if (k < 1) anim.current = requestAnimationFrame(tick);
      else last.current = performance.now();
    };
    anim.current = requestAnimationFrame(tick);
  }, [reduced]);
  useEffect(() => () => { cancelAnimationFrame(anim.current); clearTimeout(wheelEnd.current); }, []);

  // Gira sola: una tarjeta cada HOLD ms, solo en pantalla y sin nadie tocándola
  useEffect(() => {
    const el = stage.current;
    if (reduced || !el) return;
    let visible = false;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    last.current = performance.now();
    const id = window.setInterval(() => {
      const now = performance.now();
      if (!visible || hold.current || drag.current.on || document.hidden) { last.current = now; return; }
      if (now - last.current > HOLD) settle(Math.round(posRef.current) + 1, 1100);
    }, 200);
    return () => { clearInterval(id); io.disconnect(); };
  }, [reduced, settle]);

  // Gesto horizontal del trackpad (o Mayús + rueda); el scroll vertical sigue siendo de la página
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      e.preventDefault();
      cancelAnimationFrame(anim.current);
      last.current = performance.now();
      set(posRef.current + dx / step);
      clearTimeout(wheelEnd.current);
      wheelEnd.current = window.setTimeout(() => settle(posRef.current, 420), 120);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [step, settle]);

  const onDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    cancelAnimationFrame(anim.current);
    drag.current = { on: true, x: e.clientX, start: posRef.current, moved: 0, v: 0, t: performance.now(), lastX: e.clientX };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.on) return;
    const dx = e.clientX - d.x;
    d.moved = Math.max(d.moved, Math.abs(dx));
    if (d.moved > 6 && !stage.current?.hasPointerCapture(e.pointerId)) stage.current?.setPointerCapture(e.pointerId);
    const now = performance.now();
    d.v = (e.clientX - d.lastX) / Math.max(1, now - d.t);
    d.t = now; d.lastX = e.clientX;
    set(d.start - dx / step);
  };
  const onUp = () => {
    const d = drag.current;
    if (!d.on) return;
    d.on = false;
    // Un empujón rápido pasa a la siguiente aunque el arrastre sea corto
    const fling = reduced ? 0 : Math.max(-1.5, Math.min(1.5, (d.v * 220) / step));
    settle(posRef.current - fling, 520);
  };
  const go = (d: number) => settle(Math.round(posRef.current) + d, 600);

  return (
    <div className="lab-wheel">
      <div ref={stage} className="lab-wheel__stage" style={{ height: size.h + 64 }}
        role="group" aria-roledescription="carousel" aria-label={`${label}. Drag or use the arrow keys to move.`} tabIndex={0}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') hold.current = true; }}
        onPointerLeave={() => { hold.current = false; }}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        onKeyDown={(e) => { if (e.key === 'ArrowRight') { e.preventDefault(); go(1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); } }}>
        {Array.from({ length: slots }, (_, j) => {
          // Distancia más corta en el cilindro: la tarjeta que sale por un lado entra por el otro
          const rel = ((((j - pos) % slots) + slots + slots / 2) % slots) - slots / 2;
          const far = Math.abs(rel);
          // Delante, entera; las de los lados, cada vez más tenues hasta el borde de la ventana
          const fade = Math.max(0, Math.min(1, (2.9 - far) / 0.6)) * (1 - 0.22 * Math.min(2.5, far));
          const copy = j >= count;
          return (
            // Las originales siempre se leen y se alcanzan con Tab (al recibir el foco, la ruleta la trae delante);
            // solo las copias quedan fuera
            <div key={j} className="lab-wheel__card" aria-hidden={copy || undefined} inert={copy || undefined}
              onFocus={copy ? undefined : () => { if (Math.abs(rel) > 0.01) settle(posRef.current + rel, 500); }}
              style={{
                width: size.w,
                height: size.h,
                transform: `translateX(-50%) translateZ(${-radius}px) rotateY(${rel * theta}deg) translateZ(${radius}px)`,
                zIndex: 100 - Math.round(far * 10),
                opacity: fade,
                visibility: fade === 0 ? 'hidden' : undefined,
                pointerEvents: far > 0.5 ? 'none' : undefined,
              }}>
              {/* Solo se reproducen los vídeos de las tarjetas que se ven (la de delante y sus vecinas) */}
              {children(j % count, () => drag.current.moved > 6, copy, far < 1.6)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
