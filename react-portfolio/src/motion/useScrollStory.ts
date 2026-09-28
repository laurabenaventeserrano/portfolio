import { useLayoutEffect } from 'react';
import { ScrollTrigger } from './gsap';

/*
  Scroll común a todas las páginas (portada, stories, 404) y al pie de contacto.
  Feedback: la animación distrae. Textos, imágenes y vídeos no tienen ninguna animación de entrada:
  están quietos y visibles desde el principio. Aquí solo quedan las etiquetas de las tablas en móvil
  y el recálculo de los puntos de disparo de las secciones que sí tienen movimiento (portada).

  Lo que tiene coreografía propia se marca con data-motion="custom" y aquí se salta
  (hero, pasos, Three ways, statement, lab).
  Con "reducir movimiento" no se ejecuta nada: todo está en su sitio desde el principio.
*/


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

    // Las imágenes que cargan tarde cambian la altura de la página: se recalculan los puntos de disparo
    let t = 0;
    const main = document.querySelector('main');
    const ro = new ResizeObserver(() => { window.clearTimeout(t); t = window.setTimeout(() => ScrollTrigger.refresh(), 200); });
    if (main) ro.observe(main);
    // Las secciones fijas se crean en distintos componentes: se ordenan por su posición en la página
    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    return () => { ro.disconnect(); window.clearTimeout(t); };
  }, [routeKey]);
}
