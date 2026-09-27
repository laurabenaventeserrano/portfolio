/*
  Capa de movimiento del portfolio.
  GSAP + ScrollTrigger para todo lo que depende del scroll, registrados una sola vez aquí.
  Regla de la casa: con "reducir movimiento" activado en el sistema no se anima nada;
  el contenido aparece en su sitio y la página se lee igual.
*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Breakpoints de movimiento: en escritorio hay secciones fijas; en móvil, solo apariciones. */
export const MQ = {
  desktop: '(min-width: 761px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 760px) and (prefers-reduced-motion: no-preference)',
  any: '(prefers-reduced-motion: no-preference)',
} as const;
