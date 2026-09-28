import { useLayoutEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger, MQ } from './gsap';

/*
  Tarjetas apiladas (referencia: elespacio.net).
  Cada hijo `.way` es sticky: se queda fijo y el siguiente sube por encima y lo tapa.
  Mientras lo tapa, el de abajo se encoge un poco y se oscurece, así se lee la profundidad.
  El contenido de cada tarjeta entra en escalera cuando la tarjeta llega.

  Si una tarjeta es más alta que la pantalla, se fija por abajo (top negativo)
  para que siempre se pueda leer entera antes de que llegue la siguiente.
*/
export function useStackedCards(ref: RefObject<HTMLElement | null>, enabled: boolean) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!enabled || !root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(':scope > .way'));
    if (!cards.length) return;

    const stackTop = () => parseFloat(getComputedStyle(root).getPropertyValue('--stack-top')) || 0;
    const setTops = () => {
      const top = stackTop();
      cards.forEach((c) => { c.style.top = `${Math.min(top, window.innerHeight - c.offsetHeight)}px`; });
    };
    setTops();
    ScrollTrigger.addEventListener('refreshInit', setTops);
    const ro = new ResizeObserver(setTops); // fuentes e imágenes que cargan tarde cambian el alto
    cards.forEach((c) => ro.observe(c));

    const mm = gsap.matchMedia();
    mm.add(MQ.desktop, () => {
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        // La tarjeta de abajo se aleja mientras la siguiente la cubre
        if (next) {
          gsap.to(card, {
            scale: 0.92, '--shade': 0.45, ease: 'none',
            scrollTrigger: { trigger: next, start: 'top bottom', end: () => `top ${stackTop()}px`, scrub: true, invalidateOnRefresh: true },
          });
        }
        // Entrada del contenido: el texto está quieto, solo el panel entra desde la derecha
        const panel = card.querySelector('.panel');
        const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 65%', toggleActions: 'play none none reverse' } });
        tl.from(panel, { x: 80, rotation: 2, autoAlpha: 0, duration: 1, ease: 'power3.out' });
      });
    });
    mm.add(MQ.mobile, () => {
      cards.forEach((card) => {
        gsap.from(card.querySelectorAll('.panel'), {
          autoAlpha: 0, duration: 0.6, ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 75%' },
        });
      });
    });

    return () => {
      mm.revert();
      ro.disconnect();
      ScrollTrigger.removeEventListener('refreshInit', setTops);
      cards.forEach((c) => { c.style.top = ''; });
    };
  }, [ref, enabled]);
}
