import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, SplitText, MQ } from './gsap';

/*
  Scrollytelling común a todas las páginas (portada, stories, 404) y al pie de contacto.
  Se aplica por clases, así las páginas no tienen que marcar nada:

    Titulares (.h-xl, .h-l, .h-giant, .h-hero)   suben línea a línea desde una máscara      (noth.in)
    Textos, etiquetas, datos, filas de tabla      aparecen en escalera al entrar             (altshift)
    Imágenes y vídeos (.media)                     se destapan y se acercan con el scroll     (noth.in)
    Cifras (.stat__value, .tile__metric)           cuentan hasta su valor
    Números fantasma de capítulo                   se desplazan más lento que la página
    Flujos (.flow)                                 se dibujan paso a paso
    "Let's connect."                               sube palabra a palabra, atado al scroll

  Lo que tiene coreografía propia se marca con data-motion="custom" y aquí se salta
  (hero, pasos, Three ways, statement, lab).
  Con "reducir movimiento" no se ejecuta nada: todo está en su sitio desde el principio.
*/

const REVEAL = [
  '.kicker', '.lead', '.chip', '.tags', '.disclaimer', '.sec-head .mono-s',
  '.figure figcaption', '.callout', '.item', '.stat', '.fact', '.quote',
  '.table tbody tr', '.measure__row', '.measure__bar', '.contact__grid > *', '.contact__bottom',
  '.next .pill', '.story-hero__meta', '.pill--lg', '.text-link', '.chapter__body > p', '.h-s',
].join(', ');

const skip = (el: Element) => !!el.closest('[data-motion="custom"], .header, .dots');

function countUp(el: HTMLElement) {
  const text = el.textContent ?? '';
  const m = text.match(/\d+(?:[.,]\d+)?/);
  if (!m) {
    // Sin número (por ejemplo "L → S"): se destapa de izquierda a derecha
    return gsap.from(el, { clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'power3.inOut', paused: true });
  }
  const target = parseFloat(m[0].replace(',', '.'));
  const decimals = m[0].includes('.') || m[0].includes(',') ? m[0].split(/[.,]/)[1].length : 0;
  const [before, after] = [text.slice(0, m.index), text.slice((m.index ?? 0) + m[0].length)];
  const o = { v: 0 };
  return gsap.to(o, {
    v: target, duration: 1.4, ease: 'power2.out', paused: true,
    onUpdate: () => { el.textContent = before + o.v.toFixed(decimals) + after; },
    onComplete: () => { el.textContent = text; },
  });
}

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
      // 1. Titulares: línea a línea desde una máscara
      all('.h-xl, .h-l').forEach((el) => {
        SplitText.create(el, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, {
            yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.09,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }),
        });
      });

      // 2. Titular gigante del contacto: palabra a palabra, atado al scroll
      all('.h-giant').forEach((el) => {
        SplitText.create(el, {
          type: 'words', mask: 'words', autoSplit: true,
          onSplit: (self) => gsap.from(self.words, {
            yPercent: 120, rotate: 6, ease: 'none', stagger: 0.15,
            scrollTrigger: { trigger: el, start: 'top 95%', end: 'bottom 60%', scrub: 0.8 },
          }),
        });
      });

      // 3. Todo lo demás aparece en escalera, por grupos que entran juntos
      const reveal = all(REVEAL).filter((el) => !el.closest('.h-xl, .h-l, .h-giant'));
      gsap.set(reveal, { y: 36, autoAlpha: 0 });
      ScrollTrigger.batch(reveal, {
        start: 'top 90%',
        onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', stagger: 0.07, overwrite: true }),
      });

      // 4. Imágenes y vídeos: se destapan desde el centro y se acercan
      all('.media').forEach((media) => {
        if (media.closest('.pass, .hero')) return;
        const inner = media.querySelector('img, video');
        const st = { trigger: media, start: 'top 98%', end: 'top 40%', scrub: 0.6 };
        gsap.fromTo(media, { clipPath: 'inset(14% 8% 14% 8% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 16px)', ease: 'none', scrollTrigger: st });
        if (inner) gsap.fromTo(inner, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: st });
      });

      // 5. Cifras que cuentan
      all('.stat__value, .tile__metric').forEach((el) => {
        const anim = countUp(el);
        ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => anim.play() });
      });

      // 6. Capítulos: número fantasma lento, línea del número que se dibuja
      all('.chapter__ghost').forEach((el) => gsap.fromTo(el, { yPercent: 45 }, {
        yPercent: -25, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      }));
      all('.chapter__num i').forEach((el) => gsap.from(el, {
        scaleX: 0, transformOrigin: 'left center', duration: 1, ease: 'power3.inOut', scrollTrigger: { trigger: el, start: 'top 90%' },
      }));

      // 7. Flujos: cada paso aparece después del anterior, con su flecha
      all('.flow').forEach((flow) => gsap.from(flow.querySelectorAll('.flow__step, .flow__arrow'), {
        x: -24, autoAlpha: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12,
        scrollTrigger: { trigger: flow, start: 'top 85%' },
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

    return () => { ro.disconnect(); window.clearTimeout(t); mm.revert(); };
  }, [routeKey]);
}
