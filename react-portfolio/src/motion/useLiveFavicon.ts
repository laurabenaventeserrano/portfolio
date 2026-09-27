import { useEffect } from 'react';
import { buildFaceMap, drawFaceIcon, loadFaceData } from '../lib/faceDots';
import { reducedMotion } from './gsap';

/*
  Favicon vivo: cada pocos segundos los puntos de la cara se dispersan y vuelven, como en el hero.
  Solo se redibuja durante la dispersión (unos 1,4 s), a 12 fotogramas por segundo, y nunca con la
  pestaña oculta. Chrome y Firefox lo muestran animado; Safari se queda con el PNG fijo del <head>.
*/
const PERIOD = 6000, BURST = 1400, FPS = 12, SIZE = 32;

export function useLiveFavicon(poster = '/images/laura-dots-poster.jpg') {
  useEffect(() => {
    if (reducedMotion()) return;
    let timer = 0, raf = 0, alive = true;
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"][sizes="32x32"]');
    if (!link) return;
    const original = link.href;

    loadFaceData(poster).then((data) => {
      if (!alive) return;
      const c = document.createElement('canvas');
      c.width = c.height = SIZE;
      const x = c.getContext('2d')!;
      const map = buildFaceMap(data, SIZE);

      const burst = () => {
        if (document.hidden) return;
        const t0 = performance.now();
        let last = 0;
        const step = (now: number) => {
          const p = (now - t0) / BURST;
          if (p >= 1) { link.href = original; return; }
          if (now - last >= 1000 / FPS) {
            last = now;
            drawFaceIcon(x, SIZE, map, Math.sin(p * Math.PI));
            link.href = c.toDataURL('image/png');
          }
          raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      };
      timer = window.setInterval(burst, PERIOD);
    }).catch(() => {});

    return () => { alive = false; window.clearInterval(timer); cancelAnimationFrame(raf); link.href = original; };
  }, [poster]);
}
