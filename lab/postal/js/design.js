/* Sistema de diseño — valores tal cual del style tile. No inventar tonos aquí. */

export const UI = {
  bg: '#F3ECDF',
  ink: '#2B2620',
  cta: '#B5502F',
  accent: '#2B3A5C',
  surface: '#FBF6EC',
  line: '#DCCBA8',
  line2: '#E4D6B8',
  muted: '#8A6F45'
};

/* ---------------------------------------------------------------- filtros */
/* Cada filtro es una lista de operaciones de matriz de color (mismas que CSS)
   más un tinte opcional en multiply. Se aplican pixel a pixel para que el
   preview y el PNG exportado sean idénticos en cualquier navegador. */

export const FILTERS = [
  {
    id: 'none', name: 'Original', swatch: 'linear-gradient(160deg,#C9B79A,#8A7A61)',
    ops: []
  },
  {
    id: 'sepia', name: 'Sepia', swatch: 'linear-gradient(160deg,#D8B37E,#7A5C36)',
    ops: [['sepia', 0.6], ['saturate', 1.1], ['contrast', 1.05], ['brightness', 1.02]]
  },
  {
    id: 'kodak', name: 'Kodak 400', swatch: 'linear-gradient(160deg,#E39B6B,#B5502F)',
    ops: [['saturate', 1.35], ['contrast', 1.15], ['brightness', 1.05], ['hueRotate', -6]]
  },
  {
    id: 'faded', name: 'Desvaído', swatch: 'linear-gradient(160deg,#D9CDBB,#A99A80)',
    ops: [['saturate', 0.55], ['contrast', 0.88], ['brightness', 1.12]]
  },
  {
    id: 'contrast', name: 'Contraste', swatch: 'linear-gradient(160deg,#3A3A3A,#1A1A1A)',
    ops: [['grayscale', 0.85], ['contrast', 1.35], ['brightness', 0.95]]
  },
  {
    id: 'marino', name: 'Marino', swatch: 'linear-gradient(160deg,#5C7A96,#2B3A5C)',
    ops: [['saturate', 1.05], ['contrast', 1.08]],
    tint: { color: '#2B3A5C', alpha: 0.22 }
  }
];

/* ------------------------------------------------------------- plantillas */
/* mat  = passe-partout de rayas alrededor de la foto
   cap  = tratamiento del título del frente
   back = acentos del reverso                                              */

export const TEMPLATES = [
  {
    id: 'mostaza',
    name: 'Mostaza · Crema · Marino',
    c1: '#E3A63D', c2: '#FBF3DD', c3: '#2B3A5C',
    frame: { color: '#FFFFFF', w: 0.022 },
    mat: { dir: 'v', w: 0.052, bands: [['#E3A63D', 26], ['#FBF3DD', 20]] },
    cap: { style: 'script', font: 'Yellowtail', color: '#2B3A5C', plate: '#FBF3DD', size: 0.075 },
    back: { paper: '#FBF6EC', accent: '#2B3A5C', label: '#8A6F45', rule: 'solid', kicker: 'POSTCARD' }
  },
  {
    id: 'marinero',
    name: 'Azul marinero · Coral',
    c1: '#2B4A6B', c2: '#FFFFFF', c3: '#D6572E',
    frame: { color: '#FFFFFF', w: 0.022 },
    mat: { dir: 'v', w: 0.048, bands: [['#2B4A6B', 14], ['#FFFFFF', 14]] },
    cap: { style: 'block', font: 'Archivo', weight: 800, color: '#D6572E', plate: '#FFFFFF', size: 0.055, track: 0.02 },
    back: { paper: '#FBF6EC', accent: '#2B4A6B', label: '#D6572E', rule: 'solid', kicker: 'POSTCARD' }
  },
  {
    id: 'terracota',
    name: 'Terracota · Crema a rayas',
    c1: '#C1613A', c2: '#EFE3CC', c3: '#8A6F45',
    frame: { color: '#FFFFFF', w: 0.018 },
    mat: { dir: 'v', w: 0.058, bands: [['#C1613A', 15], ['#EFE3CC', 13], ['#8A6F45', 5], ['#EFE3CC', 13]] },
    cap: { style: 'script', font: 'Yellowtail', color: '#FFFFFF', plate: '#8A6F45', size: 0.078 },
    back: { paper: '#FBF6EC', accent: '#C1613A', label: '#8A6F45', rule: 'dotted', kicker: 'POSTCARD' }
  },
  {
    id: 'pastel',
    name: 'Pastel multicolor',
    c1: '#F2B6C4', c2: '#A7D3D8', c3: '#F5D98B',
    frame: { color: '#FFFFFF', w: 0.024 },
    mat: { dir: 'v', w: 0.05, bands: [['#F2B6C4', 20], ['#A7D3D8', 20], ['#F5D98B', 20]] },
    cap: { style: 'block', font: 'Archivo', weight: 800, color: '#FFFFFF', plate: '#F2B6C4', size: 0.058, track: 0.012 },
    back: { paper: '#FBF6EC', accent: '#F2B6C4', label: '#8A6F45', rule: 'solid', kicker: 'POSTCARD' }
  },
  {
    id: 'oliva',
    name: 'Verde oliva · Blanco',
    c1: '#5C6236', c2: '#FFFFFF', c3: '#7C8156',
    frame: { color: '#FFFFFF', w: 0.022 },
    mat: { dir: 'h', w: 0.05, bands: [['#7C8156', 10], ['#FFFFFF', 10]] },
    cap: { style: 'greetings', font: 'Yellowtail', color: '#5C6236', plate: '#FFFFFF', size: 0.072, kicker: 'GREETINGS FROM' },
    back: { paper: '#FBF6EC', accent: '#5C6236', label: '#7C8156', rule: 'solid', kicker: 'POSTCARD' }
  }
];

/* ----------------------------------------------------------------- sellos */

export const STAMPS = [
  {
    id: 'faro', label: 'Faro costero', country: 'ITALIA', value: '10', icon: '🗼',
    frame: '#EFE3CC', textColor: '#2B2620', valueColor: '#EFE3CC', rotate: -4,
    scene: { type: 'linear', stops: [[0, '#A7D3D8'], [0.55, '#A7D3D8'], [0.55, '#2B4A6B'], [1, '#2B4A6B']] }
  },
  {
    id: 'avion', label: 'Correo aéreo', country: 'PAR AVION', value: '25', icon: '✈️',
    frame: '#FBF3DD', textColor: '#FBF3DD', rotate: 3,
    scene: { type: 'linear', angle: true, stops: [[0, '#D6572E'], [1, '#8A2F1B']] }
  },
  {
    id: 'palmeras', label: 'Palmeras', country: 'GRECIA', value: '50', icon: '🌴',
    frame: '#FFFFFF', textColor: '#2B2620', valueColor: '#F5D98B', rotate: -2,
    scene: { type: 'linear', stops: [[0, '#F5D98B'], [0.6, '#F5D98B'], [0.6, '#5C6236'], [1, '#5C6236']] }
  },
  {
    id: 'velero', label: 'Velero marino', country: 'HELLAS', value: '15', icon: '⛵',
    frame: '#DCE7EA', textColor: '#2B3A5C', valueColor: '#FFFFFF', rotate: 5,
    scene: { type: 'linear', stops: [[0, '#FFFFFF'], [0.45, '#FFFFFF'], [0.45, '#2B4A6B'], [1, '#2B4A6B']] }
  },
  {
    id: 'sol', label: 'Sol retro', country: 'BON VOYAGE', value: '05', icon: '☀',
    frame: '#F2D9B8', textColor: '#FFFFFF', rotate: -6,
    scene: { type: 'radial', stops: [[0, '#F5D98B'], [0.3, '#F5D98B'], [0.3, '#D6572E'], [1, '#D6572E']] }
  }
];

/* ------------------------------------------------------------ handscripts */
/* k = factor de tamaño para igualar la altura óptica entre familias */

export const FONTS = [
  { id: 'yellowtail', name: 'Yellowtail', family: 'Yellowtail', k: 1.00, lh: 1.45 },
  { id: 'sacramento', name: 'Sacramento', family: 'Sacramento', k: 1.18, lh: 1.30 },
  { id: 'playball', name: 'Playball', family: 'Playball', k: 1.00, lh: 1.45 },
  { id: 'caveat', name: 'Caveat', family: 'Caveat', k: 1.22, lh: 1.30, weight: 600 },
  { id: 'apple', name: 'Homemade Apple', family: 'Homemade Apple', k: 0.80, lh: 1.85 }
];

export const byId = (list, id) => list.find(x => x.id === id) || list[0];
