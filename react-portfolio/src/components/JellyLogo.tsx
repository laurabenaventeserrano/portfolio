import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../lib/hooks';

/*
  Logo "Gelatina": "Laura Benavente" en Bricolage Grotesque estrecha, sin punto.
  Cada letra es un bloque de gelatina con su propio muelle vertical:
    · Ratón: las letras cercanas al cursor se estiran hacia arriba (y se estrechan, conservan el volumen).
    · Salir: vuelven a su sitio temblando.
    · Clic o toque: todo el nombre se aplasta y rebota.
    · Reposo: de vez en cuando pasa una onda de izquierda a derecha.
  El bucle solo trabaja mientras algo se mueve o el logo está en pantalla.
  Con movimiento reducido, el logo queda quieto.
*/
interface Props { text?: string; className?: string }

export default function JellyLogo({ text = 'Laura Benavente', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const host = (el.closest('a, button') as HTMLElement | null) ?? el;
    const letters = Array.from(el.querySelectorAll<HTMLElement>('.jelly__l'));
    const st = letters.map(() => ({ y: 1, v: 0 }));
    let px: number | null = null, py = 0, idle = 0, visible = true, raf = 0, last = performance.now(), rested = true;

    const move = (e: PointerEvent) => { px = e.clientX; py = e.clientY; };
    const leave = () => { px = null; st.forEach((s) => { s.v += 0.02; }); };
    const down = () => st.forEach((s, i) => { s.v -= 0.03 + i * 0.002; });
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    host.addEventListener('pointerdown', down);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(50, now - last); last = now;
      if (!visible || document.hidden) return;
      idle += dt;
      if (px === null && idle > 6000) { idle = 0; st.forEach((s, i) => window.setTimeout(() => { s.v += 0.016; }, i * 60)); }
      let moving = px !== null;
      if (rested && px === null && st.every((s) => Math.abs(s.v) < 0.0004)) return; // en reposo no se toca el DOM
      letters.forEach((l, i) => {
        let target = 1;
        if (px !== null) {
          const r = l.getBoundingClientRect();
          const dx = (px - (r.left + r.width / 2)) / (r.width * 1.4), dy = (py - (r.top + r.height / 2)) / (r.height * 1.2);
          target = 1 + 0.5 * Math.exp(-(dx * dx + dy * dy));
        }
        const s = st[i];
        s.v = (s.v + (target - s.y) * 0.004 * dt) * Math.pow(0.88, dt / 16.7);
        s.y += (s.v * dt) / 16.7 * 4;
        if (Math.abs(s.v) > 0.0004 || Math.abs(s.y - 1) > 0.001) moving = true;
        const y = Math.max(0.7, Math.min(1.8, s.y));
        l.style.transform = `scale(${(1 / Math.sqrt(y)).toFixed(3)}, ${y.toFixed(3)})`;
      });
      if (!moving && !rested) letters.forEach((l) => { l.style.transform = ''; });
      rested = !moving;
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf); io.disconnect();
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
      host.removeEventListener('pointerdown', down);
      letters.forEach((l) => { l.style.transform = ''; });
    };
  }, [reduced, text]);

  return (
    <span ref={ref} className={`jelly ${className ?? ''}`} aria-hidden="true">
      {[...text].map((ch, i) => (ch === ' '
        ? <span key={i} className="jelly__sp" />
        : <span key={i} className="jelly__l">{ch}</span>))}
    </span>
  );
}
