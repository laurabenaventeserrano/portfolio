import type { DotLoopOptions } from '../lib/dotLoop';

/*
  Ajustes del retrato en puntos de la portada.
  Pega aquí lo que copies con "Copiar ajustes" en el banco de ajustes.
*/
export const PORTRAIT_SETTINGS: Partial<DotLoopOptions> = {
  spacing: 6,
  dotScale: 1,
  contrast: 1.35,
  threshold: 0.1,
  shape: 'circle',
  grid: 'square',
  drift: 7,
  radius: 120,
  force: 3.2,
  recover: 1.5,
  speed: 1,
  breath: 0,
};

export const PORTRAIT = {
  src: '/video/laura-dots.mp4',
  poster: '/images/laura-dots-poster.jpg',
  label: 'Laura Benavente, portrait drawn in black dots. Move your mouse over it to scatter the dots.',
};
