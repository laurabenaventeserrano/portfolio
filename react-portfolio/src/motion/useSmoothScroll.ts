import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, reducedMotion } from './gsap';

/*
  Scroll suave (Lenis), el mismo que usan elespacio, guillaumezhu y altshift.
  Va sincronizado con el reloj de GSAP para que las secciones fijas no tiemblen.
  Con movimiento reducido no se activa: el scroll es el del sistema.
*/
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || reducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, anchors: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [enabled]);
}
