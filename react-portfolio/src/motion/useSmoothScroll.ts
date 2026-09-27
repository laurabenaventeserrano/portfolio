import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, reducedMotion } from './gsap';

/*
  Scroll suave (Lenis), el mismo que usan elespacio, guillaumezhu y altshift.
  Va sincronizado con el reloj de GSAP para que las secciones fijas no tiemblen.
  Con movimiento reducido no se activa: el scroll es el del sistema.
  Una sola instancia para todo el sitio; scrollToTop / scrollToEl la usan si existe.
*/
let lenis: Lenis | null = null;

const headerOffset = () =>
  -(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0);

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function scrollToEl(el: HTMLElement, immediate = true) {
  if (lenis) lenis.scrollTo(el, { offset: headerOffset(), immediate, force: true });
  else el.scrollIntoView();
}

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || reducedMotion()) return;
    lenis = new Lenis({ lerp: 0.1, anchors: { offset: headerOffset() } });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, [enabled]);
}
