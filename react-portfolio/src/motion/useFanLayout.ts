import { useLayoutEffect, type RefObject } from 'react';

/*
  Abanico de pases del lab, como el toolkit de guillaumezhu.com. Funciona igual con 2, 5 o 10 cartas.
  · Todas las cartas miden lo mismo (la más alta manda) y cuelgan del centro, alineadas por arriba.
  · Cada una recibe su sitio como variables CSS (--fx, --fr, --fy): desplazamiento, giro y caída en arco.
  · Se solapan como una mano de cartas; al pasar el ratón, la carta sube y se pone delante.
  En móvil (≤ 760 px) no hay abanico: las cartas van una debajo de otra.
*/
const OVERLAP_STEP = 0.78;  // separación entre cartas vecinas, en anchos de carta
const MAX_STEP_DEG = 5;     // giro entre cartas vecinas
const MAX_SPREAD = 32;      // giro total máximo del abanico, grados
const ARC_R = 1400;         // radio del arco: cuanto menor, más se curva

export const MOBILE_MQ = '(max-width: 760px)';

export interface FanPos { x: number; y: number; r: number }

/** Sitio de la carta `j` cuando en el abanico hay `m` cartas. */
export function fanPos(m: number, j: number, width: number, cardW: number): FanPos {
  if (m <= 1) return { x: 0, y: 0, r: 0 };
  const step = Math.min(cardW * OVERLAP_STEP, (width - cardW) / (m - 1));
  const deg = Math.min(MAX_STEP_DEG, MAX_SPREAD / (m - 1));
  const k = j - (m - 1) / 2;
  const r = k * deg;
  return { x: k * step, y: (1 - Math.cos((r * Math.PI) / 180)) * ARC_R, r };
}

/** Escala de las cartas para que título y abanico quepan juntos en pantalla mientras la sección está fija. */
function fitScale(fan: HTMLElement, cardH: number) {
  const section = fan.closest<HTMLElement>('.lab--deal');
  if (!section) return 1;
  const cs = getComputedStyle(section);
  const header = parseFloat(cs.getPropertyValue('--header-h')) || 0;
  const head = section.querySelector<HTMLElement>('.lab__head')?.offsetHeight ?? 0;
  const gap = parseFloat(getComputedStyle(fan.parentElement!).rowGap) || 0;
  const available = window.innerHeight - header - (parseFloat(cs.paddingTop) || 0) - head - gap - 56;
  return Math.max(0.6, Math.min(1, available / cardH));
}

export function useFanLayout(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const fan = ref.current;
    if (!fan) return;
    const mq = window.matchMedia(MOBILE_MQ);

    const layout = () => {
      const cards = Array.from(fan.querySelectorAll<HTMLElement>(':scope > .deal'));
      const passes = cards.map((c) => c.querySelector<HTMLElement>('.pass')).filter(Boolean) as HTMLElement[];
      const n = cards.length;
      if (!n) return;

      // Todas del mismo alto: se mide cada una sin el alto forzado y se aplica el mayor
      fan.style.removeProperty('--card-h');
      const cardH = Math.max(...passes.map((p) => p.offsetHeight));

      if (mq.matches) {
        fan.classList.remove('passes--fan');
        fan.style.height = '';
        return;
      }
      fan.style.setProperty('--card-h', `${cardH}px`);
      fan.classList.add('passes--fan');
      const W = fan.clientWidth;
      // Si la sección se queda fija (reparto), las cartas se reducen lo justo para que el abanico quepa en pantalla
      const s = fitScale(fan, cardH);
      fan.dataset.scale = String(s);
      fan.style.setProperty('--fan-scale', String(s));
      const cw = cards[0].offsetWidth * s, lift = cardH * (1 - s); // la carta encoge hacia abajo: se sube lo que encoge
      let lowest = 0;
      cards.forEach((card, j) => {
        const p = fanPos(n, j, W, cw);
        card.style.setProperty('--fx', `${p.x}px`);
        card.style.setProperty('--fy', `${p.y - lift}px`);
        card.style.setProperty('--fr', `${p.r}deg`);
        lowest = Math.max(lowest, p.y);
      });
      fan.style.height = `${Math.ceil(cardH * s + lowest + 36)}px`;
    };

    layout();
    const ro = new ResizeObserver(() => requestAnimationFrame(layout));
    ro.observe(fan);
    mq.addEventListener('change', layout);
    window.addEventListener('resize', layout); // el alto de la ventana cambia la escala
    return () => { ro.disconnect(); mq.removeEventListener('change', layout); window.removeEventListener('resize', layout); };
  }, [ref]);
}
