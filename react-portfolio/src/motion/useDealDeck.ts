import { useLayoutEffect, type RefObject } from 'react';
import { gsap, MQ } from './gsap';

/*
  Reparto de cartas (referencia: el toolkit de guillaumezhu.com).
  Todas las cartas se mueven a la vez, así la sección puede crecer sin que el reparto se alargue.
  Escritorio: la sección se queda fija mientras haces scroll.
    1. El mazo, boca abajo en el centro, sube mientras llegas a la sección.
    2. Todas las cartas se abren a la vez hasta su sitio en el abanico, aún boca abajo.
    3. Todas se dan la vuelta a la vez. Un respiro y la sección se suelta.
  Móvil: sin sección fija. Cada carta se da la vuelta al entrar en pantalla.
  Todo va atado al scroll: si subes, las cartas vuelven al mazo.

  El sitio final de cada carta lo pone useFanLayout (--fx, --fr, --fy en .deal).
  Aquí solo se mueve .deal__flip, que va dentro, así las dos cosas no se pisan.
*/
const stackTilt = (i: number) => (i % 2 ? 1 : -1) * (1.5 + ((i * 7) % 3)); // mazo un poco descuadrado
const stackNudge = (i: number) => (i % 2 ? 1 : -1) * (3 + ((i * 5) % 4));
const cssPx = (el: Element, name: string) => parseFloat(getComputedStyle(el).getPropertyValue(name)) || 0;

export function useDealDeck(ref: RefObject<HTMLElement | null>, enabled: boolean) {
  useLayoutEffect(() => {
    const section = ref.current;
    if (!enabled || !section) return;
    const passes = section.querySelector<HTMLElement>('.passes');
    const decks = Array.from(section.querySelectorAll<HTMLElement>('.deal'));
    const flips = decks.map((d) => d.querySelector<HTMLElement>('.deal__flip')!).filter(Boolean);
    const intro = section.querySelectorAll('.lab__head > *');
    if (!passes || !flips.length) return;

    const mm = gsap.matchMedia();
    mm.add(MQ.desktop, () => {
      // La sección se fija con el título arriba del todo, justo bajo la cabecera del sitio.
      // Si no cabe entera, lo que queda por debajo del borde es el pie de las cartas, que aparece al soltar.
      const headerH = () => cssPx(section, '--header-h'); // alto de la cabecera fija del sitio (0 en la página de pruebas)
      const pinStart = () => {
        const pad = parseFloat(getComputedStyle(section).paddingTop) || 0;
        const fits = section.offsetHeight <= window.innerHeight - headerH();
        return fits ? `top top+=${headerH()}` : `top+=${Math.max(0, pad - 16)} top+=${headerH()}`;
      };
      // Cada carta vuelve al centro del abanico, boca abajo, deshaciendo su sitio final
      const setDeck = () => decks.forEach((deck, i) => gsap.set(flips[i], {
        x: -cssPx(deck, '--fx') + stackNudge(i),
        y: -cssPx(deck, '--fy'),
        rotation: -cssPx(deck, '--fr') + stackTilt(i),
        rotationY: 180,
      }));
      setDeck();

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: section,
          start: pinStart,
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          // Si cambia el ancho de la ventana antes de repartir, el mazo se vuelve a montar
          onRefresh: (self) => { if (self.progress === 0) { setDeck(); tl.invalidate(); } },
        },
      });
      tl.to(flips, { x: 0, y: 0, rotation: 0, duration: 1 }, 0.2)   // se abren todas a la vez
        .to(flips, { rotationY: 0, duration: 1 }, 1.3)             // y se dan la vuelta todas a la vez
        .to({}, { duration: 0.4 });                                 // respiro antes de soltar la sección

      // Antes de fijarse, el mazo sube hasta su sitio mientras llegas
      gsap.fromTo(passes, { y: 220 }, {
        y: 0, ease: 'none',
        scrollTrigger: { trigger: section, start: 'top 85%', end: pinStart, scrub: 0.6, invalidateOnRefresh: true },
      });
    });

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(intro, { y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 70%' } });
    });

    mm.add(MQ.mobile, () => {
      flips.forEach((flip) => {
        gsap.fromTo(flip,
          { rotationY: 180, y: 60 },
          { rotationY: 0, y: 0, ease: 'power2.inOut', scrollTrigger: { trigger: flip, start: 'top 85%', end: 'top 35%', scrub: 0.6 } });
      });
    });

    return () => mm.revert();
  }, [ref, enabled]);
}
