import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, MQ } from './gsap';

/*
  Scroll común a todas las páginas (portada, stories, 404) y al pie de contacto.
  Feedback: la animación de los textos distrae. Los textos NO se mueven: solo aparecen
  con un fundido corto al entrar. Las imágenes y vídeos se destapan con el scroll.

  Lo que tiene coreografía propia se marca con data-motion="custom" y aquí se salta
  (hero, pasos, Three ways, statement, lab).
  Con "reducir movimiento" no se ejecuta nada: todo está en su sitio desde el principio.
*/

const REVEAL = [
  '.h-xl', '.h-l', '.h-giant', '.kicker', '.lead', '.chip', '.tags', '.disclaimer', '.sec-head .mono-s',
  '.figure figcaption', '.callout', '.item', '.stat', '.fact', '.quote',
  '.table tbody tr', '.measure__row', '.measure__bar', '.contact__grid > *', '.contact__bottom',
  '.next .pill', '.story-hero__meta', '.pill--lg', '.text-link', '.chapter__body > p', '.h-s',
  '.flow', '.table thead',
].join(', ');

const skip = (el: Element) => !!el.closest('[data-motion="custom"], .header, .dots');

export function useScrollStory(routeKey: string) {
  useLayoutEffect(() => {
    const roots = Array.from(document.querySelectorAll<HTMLElement>('main, #contact'));
    const all = <T extends Element = HTMLElement>(sel: string) =>
      roots.flatMap((r) => Array.from(r.querySelectorAll<T>(sel))).filter((el) => !skip(el));

    // Tablas: cada celda recuerda su columna, para que en móvil se lean como fichas (ver global.css)
    all<HTMLTableElement>('.table').forEach((table) => {
      const heads = Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent ?? '');
      table.querySelectorAll('tbody tr').forEach((tr) => tr.querySelectorAll('td, th').forEach((td, i) => {
        if (heads[i]) td.setAttribute('data-label', heads[i]);
      }));
    });

    const mm = gsap.matchMedia();
    mm.add(MQ.any, () => {
      // 1. Textos: sin movimiento. Solo aparecen (fundido corto), en grupos que entran juntos
      const reveal = all(REVEAL);
      gsap.set(reveal, { autoAlpha: 0 });
      ScrollTrigger.batch(reveal, {
        start: 'top 92%',
        onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, duration: 0.6, ease: 'none', overwrite: true }),
      });

      // 2. Imágenes y vídeos: se destapan desde el centro y se acercan
      all('.media').forEach((media) => {
        if (media.closest('.pass, .hero')) return;
        const inner = media.querySelector('img, video');
        const st = { trigger: media, start: 'top 98%', end: 'top 40%', scrub: 0.6 };
        gsap.fromTo(media, { clipPath: 'inset(14% 8% 14% 8% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 16px)', ease: 'none', scrollTrigger: st });
        if (inner) gsap.fromTo(inner, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: st });
      });
    });

    // Las imágenes que cargan tarde cambian la altura de la página: se recalculan los puntos de disparo
    let t = 0;
    const main = document.querySelector('main');
    const ro = new ResizeObserver(() => { window.clearTimeout(t); t = window.setTimeout(() => ScrollTrigger.refresh(), 200); });
    if (main) ro.observe(main);
    // Las secciones fijas se crean en distintos componentes: se ordenan por su posición en la página
    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    return () => { ro.disconnect(); window.clearTimeout(t); mm.revert(); };
  }, [routeKey]);
}
