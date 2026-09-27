import { useLayoutEffect, type RefObject } from 'react';

/*
  Abanico de pases del lab. Funciona igual con 2, 5 o 10 cartas.
  Todas cuelgan del centro del contenedor; cada una recibe su desplazamiento,
  su giro y su caída en arco como variables CSS (--fx, --fr, --fy).
    · Con pocas cartas caben separadas, sin tocarse (2 pases: -2° y +2°, como siempre).
    · Con más, se acercan y se solapan para no salirse del ancho; el arco se abre.
  En móvil (≤ 760 px) no hay abanico: las cartas van una debajo de otra.
*/
const GAP = 28;          // separación cuando caben sin solaparse, px
const MAX_STEP_DEG = 4;  // giro entre cartas vecinas
const MAX_SPREAD = 28;   // giro total máximo del abanico, grados
const ARC_R = 1100;      // radio del arco: cuanto menor, más se curva

export const MOBILE_MQ = '(max-width: 760px)';

export function useFanLayout(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const fan = ref.current;
    if (!fan) return;
    const mq = window.matchMedia(MOBILE_MQ);

    const layout = () => {
      const cards = Array.from(fan.querySelectorAll<HTMLElement>(':scope > .deal'));
      const n = cards.length;
      if (!n) return;
      if (mq.matches) {
        fan.classList.remove('passes--fan');
        fan.style.height = '';
        return;
      }
      fan.classList.add('passes--fan');
      const W = fan.clientWidth;
      const cw = cards[0].offsetWidth;
      const step = n > 1 ? Math.min(cw + GAP, (W - cw) / (n - 1)) : 0;
      const deg = n > 1 ? Math.min(MAX_STEP_DEG, MAX_SPREAD / (n - 1)) : 0;
      let tallest = 0, lowest = 0;
      cards.forEach((card, i) => {
        const k = i - (n - 1) / 2;
        const r = k * deg;
        const y = (1 - Math.cos((r * Math.PI) / 180)) * ARC_R;
        card.style.setProperty('--fx', `${k * step}px`);
        card.style.setProperty('--fr', `${r}deg`);
        card.style.setProperty('--fy', `${y}px`);
        tallest = Math.max(tallest, card.offsetHeight);
        lowest = Math.max(lowest, y);
      });
      fan.style.height = `${Math.ceil(tallest + lowest + 24)}px`;
    };

    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(fan);
    fan.querySelectorAll(':scope > .deal').forEach((c) => ro.observe(c));
    mq.addEventListener('change', layout);
    return () => { ro.disconnect(); mq.removeEventListener('change', layout); };
  }, [ref]);
}
