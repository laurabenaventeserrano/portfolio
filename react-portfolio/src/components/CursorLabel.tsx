import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/hooks';

/*
  Cursor con etiqueta (referencias: noth.in, rachelchen.tech).
  Al pasar por encima de algo marcado con data-cursor="…", el cursor se convierte en una etiqueta lila
  con ese texto: "Explore" en las stories, "Play prototype" en los experimentos del lab.
  · La etiqueta sigue al ratón con un poco de retraso y se estira en la dirección del movimiento, como gelatina.
  · Aparece con un pequeño rebote.
  · Solo con ratón (no en pantallas táctiles). Con movimiento reducido sigue al ratón sin estirarse.
  · Es decorativa: el enlace de debajo conserva su nombre y su foco para teclado y lectores de pantalla.
*/
const FINE = '(hover: hover) and (pointer: fine)';

export default function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [text, setText] = useState('Explore'); // se queda con el último texto mientras la etiqueta se encoge
  const [enabled, setEnabled] = useState(() => typeof window !== 'undefined' && window.matchMedia(FINE).matches);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia(FINE);
    const on = () => setEnabled(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    document.documentElement.classList.add('has-cursor-label');
    let tx = -200, ty = -200, x = tx, y = ty, vx = 0, vy = 0, raf = 0, current: string | null = null;

    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      const t = (e.target as Element | null)?.closest<HTMLElement>('[data-cursor]');
      const next = t?.dataset.cursor ?? null;
      if (next !== current) { current = next; setLabel(next); if (next) setText(next); }
    };
    const leave = () => { current = null; setLabel(null); };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const k = reduced ? 1 : 0.22;
      const nx = x + (tx - x) * k, ny = y + (ty - y) * k;
      vx = nx - x; vy = ny - y; x = nx; y = ny;
      if (reduced) { el.style.transform = `translate3d(${x}px, ${y}px, 0)`; return; }
      // Gelatina: se estira en la dirección en la que va y se estrecha de lado
      const speed = Math.min(1, Math.hypot(vx, vy) / 40);
      const angle = Math.atan2(vy, vx);
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}rad) scale(${1 + speed * 0.28}, ${1 - speed * 0.18}) rotate(${-angle}rad)`;
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.documentElement.classList.remove('has-cursor-label');
    };
  }, [enabled, reduced]);

  if (!enabled) return null;
  return (
    <div ref={ref} className="cursor-label" aria-hidden="true">
      <span className="cursor-label__pill" data-on={label ? 'true' : 'false'}>
        {text}<span className="cursor-label__arrow">{text === 'Play prototype' ? '↗' : '→'}</span>
      </span>
    </div>
  );
}
