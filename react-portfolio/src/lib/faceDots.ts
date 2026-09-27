/*
  Favicon: tu retrato de puntos, abstracto (nivel "suave").
  Parte del mismo póster que el retrato del hero, recortado a la cabeza y reducido a 48 × 48.
  - Media por bloques en una rejilla gruesa.
  - Contraste estirado y tonos medios aclarados: la cara queda clara; pelo, ojos y boca en negro.
  - Simetría: cada punto es la media con su reflejo, así la cabeza queda recta.
  - Cuatro tamaños de punto y la forma centrada en el cuadrado lila.
  Los PNG y el .ico de public/ se generaron con este mismo dibujo.
*/

export const FAV_INK = '#0e0e0c';
export const FAV_LILAC = '#e7bfff';

/** Recorte del póster que ocupa la cabeza, en proporciones del ancho y alto de la imagen. */
export const FACE_CROP = { x0: 0.14, x1: 0.86, y0: 0, y1: 0.72 };

export interface FaceDot { i: number; j: number; r: number }
export interface FaceMap { cells: FaceDot[]; cell: number; ox: number; oy: number }

const STEPS = [0.25, 0.5, 0.75, 1];
const CUTOFF = 0.3;

/** `data`: píxeles RGBA de la cara a 48 × 48. `s`: lado del icono en px. */
export function buildFaceMap(data: Uint8ClampedArray, s: number): FaceMap {
  const n = s >= 64 ? 13 : s >= 32 ? 10 : 7;
  const g: number[][] = [];
  for (let j = 0; j < n; j++) {
    g.push([]);
    for (let i = 0; i < n; i++) {
      let sum = 0, c = 0;
      const u0 = Math.floor((i / n) * 48), u1 = Math.floor(((i + 1) / n) * 48);
      const v0 = Math.floor((j / n) * 48), v1 = Math.floor(((j + 1) / n) * 48);
      for (let v = v0; v < v1; v++) for (let u = u0; u < u1; u++) { sum += 1 - data[(v * 48 + u) * 4] / 255; c++; }
      g[j].push(c ? sum / c : 0);
    }
  }
  let lo = 1, hi = 0;
  g.forEach((row) => row.forEach((v) => { lo = Math.min(lo, v); hi = Math.max(hi, v); }));
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) g[j][i] = Math.pow((g[j][i] - lo) / Math.max(0.01, hi - lo), 1.7);

  const cells: FaceDot[] = [];
  let minI = n, maxI = 0, minJ = n, maxJ = 0;
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const d = (g[j][i] + g[j][n - 1 - i]) / 2;
    if (d < CUTOFF) continue;
    const q = (d - CUTOFF) / (1 - CUTOFF);
    const r = STEPS.find((st) => q <= st - 0.5 / STEPS.length) ?? STEPS[STEPS.length - 1];
    cells.push({ i, j, r: Math.min(1, r * 1.05) });
    minI = Math.min(minI, i); maxI = Math.max(maxI, i); minJ = Math.min(minJ, j); maxJ = Math.max(maxJ, j);
  }
  const pad = s * 0.12;
  const cell = (s - pad * 2) / Math.max(maxI - minI + 1, maxJ - minJ + 1);
  return {
    cells, cell,
    ox: (s - (maxI - minI + 1) * cell) / 2 - minI * cell,
    oy: (s - (maxJ - minJ + 1) * cell) / 2 - minJ * cell,
  };
}

/** Dibuja el icono. `burst` de 0 a 1: cuánto se dispersan los puntos (0 = recompuesto). */
export function drawFaceIcon(x: CanvasRenderingContext2D, s: number, map: FaceMap, burst = 0) {
  x.clearRect(0, 0, s, s);
  x.fillStyle = FAV_LILAC;
  x.beginPath(); x.roundRect(0, 0, s, s, s * 0.22); x.fill();
  x.fillStyle = FAV_INK;
  map.cells.forEach(({ i, j, r }) => {
    const a = (i * 12.9898 + j * 78.233) % 6.283;
    const dx = Math.cos(a) * burst * map.cell * 2, dy = Math.sin(a) * burst * map.cell * 2;
    x.beginPath();
    x.arc(map.ox + (i + 0.5) * map.cell + dx, map.oy + (j + 0.5) * map.cell + dy, r * map.cell * 0.5, 0, Math.PI * 2);
    x.fill();
  });
}

/** Carga el póster y devuelve la cara a 48 × 48. */
export function loadFaceData(src: string): Promise<Uint8ClampedArray> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = c.height = 48;
      const x = c.getContext('2d', { willReadFrequently: true })!;
      const W = img.naturalWidth, H = img.naturalHeight;
      x.drawImage(img, W * FACE_CROP.x0, H * FACE_CROP.y0, W * (FACE_CROP.x1 - FACE_CROP.x0), H * (FACE_CROP.y1 - FACE_CROP.y0), 0, 0, 48, 48);
      resolve(x.getImageData(0, 0, 48, 48).data);
    };
    img.onerror = reject;
    img.src = src;
  });
}
