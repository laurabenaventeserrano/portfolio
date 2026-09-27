import { useLayoutEffect, type RefObject } from 'react';
import { gsap, MQ } from './gsap';
import { fanPos } from './useFanLayout';

/*
  Reparto de cartas, como el toolkit de guillaumezhu.com.
  Escritorio: la sección se queda fija con el título arriba. Con cada tramo de scroll
  entra una carta nueva desde abajo, girada, y las que ya estaban se abren para hacerle sitio.
  La primera aparece sola en el centro; al final queda el abanico completo.
  Cuantas más cartas, más dura la sección fija (un tramo por carta), así puede crecer.
  Móvil: sin sección fija. Cada carta entra girada al llegar a ella, una detrás de otra.
  Todo va atado al scroll: si subes, las cartas se recogen en orden inverso.

  El sitio final de cada carta lo pone useFanLayout (en .deal). Aquí solo se mueve .deal__card,
  que va dentro, con desplazamientos relativos a ese sitio final.
*/
const STEP_VH = 0.55; // scroll por carta, en altos de pantalla

export function useDealDeck(ref: RefObject<HTMLElement | null>, enabled: boolean) {
  useLayoutEffect(() => {
    const section = ref.current;
    if (!enabled || !section) return;
    const fan = section.querySelector<HTMLElement>('.passes');
    const decks = Array.from(section.querySelectorAll<HTMLElement>('.deal'));
    const cards = decks.map((d) => d.querySelector<HTMLElement>('.deal__card')!).filter(Boolean);
    const intro = section.querySelectorAll('.lab__head > *');
    if (!fan || !cards.length) return;
    const n = cards.length;

    const mm = gsap.matchMedia();

    mm.add(MQ.any, () => {
      gsap.from(intro, { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 70%' } });
    });

    mm.add(MQ.desktop, () => {
      const headerH = () => parseFloat(getComputedStyle(section).getPropertyValue('--header-h')) || 0;
      // Se fija con el título arriba; si no cabe entera, el pie de las cartas aparece al soltarse
      const pinStart = () => {
        const pad = parseFloat(getComputedStyle(section).paddingTop) || 0;
        const fits = section.offsetHeight <= window.innerHeight - headerH();
        return fits ? `top top+=${headerH()}` : `top+=${Math.max(0, pad - 16)} top+=${headerH()}`;
      };
      const W = () => fan.clientWidth;
      const cw = () => decks[0].offsetWidth * (parseFloat(fan.dataset.scale ?? '1') || 1);
      // Desplazamiento de la carta j, respecto a su sitio final, cuando hay m cartas en la mesa
      const rel = (m: number, j: number) => {
        const a = fanPos(m, j, W(), cw()), z = fanPos(n, j, W(), cw());
        return { x: a.x - z.x, y: a.y - z.y, rotation: a.r - z.r };
      };
      // Igual, pero recalculado si cambia el ancho de la ventana
      const relF = (m: number, j: number) => ({ x: () => rel(m, j).x, y: () => rel(m, j).y, rotation: () => rel(m, j).rotation });
      // Antes de entrar, cada carta espera fuera, por debajo, girada
      const offstage = (j: number) => {
        const t = rel(j + 1, j);
        return { x: t.x + 60, y: window.innerHeight * 0.9, rotation: t.rotation + 16 };
      };
      const setStage = () => cards.forEach((c, j) => gsap.set(c, offstage(j)));
      setStage();

      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: section,
          start: pinStart,
          end: () => `+=${(n * STEP_VH + 0.3) * window.innerHeight}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onRefresh: (self) => { if (self.progress === 0) setStage(); },
        },
      });
      for (let k = 0; k < n; k++) {
        tl.to(cards[k], { ...relF(k + 1, k), ease: 'power3.out' }, k);                  // entra la carta k
        for (let j = 0; j < k; j++) tl.to(cards[j], { ...relF(k + 1, j), ease: 'power2.inOut' }, k); // las demás se abren
      }
      tl.to({}, { duration: 0.4 }); // respiro con el abanico completo antes de soltar la sección
    });

    mm.add(MQ.mobile, () => {
      cards.forEach((c, j) => gsap.from(c, {
        y: 120, rotation: j % 2 ? 8 : -8, autoAlpha: 0, ease: 'power3.out',
        scrollTrigger: { trigger: c, start: 'top 95%', end: 'top 55%', scrub: 0.6 },
      }));
    });

    return () => mm.revert();
  }, [ref, enabled]);
}
