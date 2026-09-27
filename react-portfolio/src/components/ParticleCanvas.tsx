import { useEffect, useRef } from 'react';
import { ParticleField, type FieldMode, type FieldOptions, type Pointer } from '../lib/particles';
import { usePrefersReducedMotion } from '../lib/hooks';

interface Props {
  options: FieldOptions;
  /** interactive: el ratón dispersa el campo y la quietud lo recoge. */
  mode: FieldMode | 'interactive';
  className?: string;
  label?: string;
}

/*
  Un único componente de campo de partículas para todo el sitio.
  En modo interactive escucha el pointermove del elemento padre:
    moverse suma energía (más rápido, más dispersión) y empuja las partículas cercanas;
    tras 600 ms de quietud la energía baja y el campo se recoge en unos 1,5 s.
*/
export default function ParticleCanvas({ options, mode, className, label }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const field = new ParticleField(canvas, options);
    const ptr: Pointer = { x: 0, y: 0, s: 0 };
    let energy = 0, lastMove = 0, lx: number | null = null, ly = 0, lt = 0;
    let visible = true, raf = 0, last = performance.now();

    const target = canvas.parentElement;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top, now = performance.now();
      if (lx !== null) {
        const dt = Math.max(8, now - lt), dist = Math.hypot(x - lx, y - ly), speed = dist / dt;
        energy = Math.min(1, energy + Math.min(0.2, speed * 0.06));
        ptr.x = x; ptr.y = y; ptr.s = Math.min(1, speed * 0.5);
        if (dist > 0.5) lastMove = now;
      }
      lx = x; ly = y; lt = now;
    };
    const onLeave = () => { lx = null; };
    if (mode === 'interactive' && target) {
      target.addEventListener('pointermove', onMove);
      target.addEventListener('pointerleave', onLeave);
    }

    // Solo anima cuando el lienzo está en pantalla
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);

    const loop = (now: number) => {
      const dt = now - last; last = now;
      if (visible) {
        if (now - lastMove > 600) energy = Math.max(0, energy - dt / 1500);
        ptr.s = Math.max(0, ptr.s - dt / 250);
        if (mode === 'interactive') field.step(now / 1000, dt, 'mezcla', 1 - energy, reduced, ptr);
        else field.step(now / 1000, dt, mode, mode === 'foco' ? 1 : 0, reduced);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      if (target) { target.removeEventListener('pointermove', onMove); target.removeEventListener('pointerleave', onLeave); }
    };
  }, [mode, reduced, options]);

  return <canvas ref={ref} className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} />;
}
