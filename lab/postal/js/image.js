/* Pipeline de imagen: carga, filtros de color y grano.
   Los filtros se implementan como matrices de color (las mismas que usa CSS)
   y se aplican pixel a pixel sobre el canvas, no como preview CSS: así lo que
   se ve en pantalla es exactamente lo que se hornea en el PNG final. */

const LUM = [0.2126, 0.7152, 0.0722];

const identity = () => ({ m: [1, 0, 0, 0, 1, 0, 0, 0, 1], o: [0, 0, 0] });

function mix(a, b, t) { return a + (b - a) * t; }

function matGrayscale(amount) {
  const m = [];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      m.push(mix(r === c ? 1 : 0, LUM[c], amount));
  return { m, o: [0, 0, 0] };
}

function matSepia(a) {
  const S = [0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131];
  const m = [];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      m.push(mix(r === c ? 1 : 0, S[r * 3 + c], a));
  return { m, o: [0, 0, 0] };
}

function matSaturate(s) {
  const L = [0.213, 0.715, 0.072];
  const m = [];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      m.push(L[c] + (r === c ? 1 - L[c] : -L[c]) * s);
  return { m, o: [0, 0, 0] };
}

function matHueRotate(deg) {
  const a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  return {
    m: [
      0.213 + c * 0.787 - s * 0.213, 0.715 - c * 0.715 - s * 0.715, 0.072 - c * 0.072 + s * 0.928,
      0.213 - c * 0.213 + s * 0.143, 0.715 + c * 0.285 + s * 0.140, 0.072 - c * 0.072 - s * 0.283,
      0.213 - c * 0.213 - s * 0.787, 0.715 - c * 0.715 + s * 0.715, 0.072 + c * 0.928 + s * 0.072
    ],
    o: [0, 0, 0]
  };
}

const matBrightness = b => ({ m: [b, 0, 0, 0, b, 0, 0, 0, b], o: [0, 0, 0] });
const matContrast = c => ({ m: [c, 0, 0, 0, c, 0, 0, 0, c], o: [(1 - c) / 2, (1 - c) / 2, (1 - c) / 2] });

/* aplicar B después de A */
function compose(A, B) {
  const m = new Array(9).fill(0);
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      for (let k = 0; k < 3; k++)
        m[r * 3 + c] += B.m[r * 3 + k] * A.m[k * 3 + c];
  const o = [0, 1, 2].map(r =>
    B.m[r * 3] * A.o[0] + B.m[r * 3 + 1] * A.o[1] + B.m[r * 3 + 2] * A.o[2] + B.o[r]);
  return { m, o };
}

const BUILDERS = {
  grayscale: matGrayscale, sepia: matSepia, saturate: matSaturate,
  hueRotate: matHueRotate, brightness: matBrightness, contrast: matContrast
};

function buildMatrix(ops) {
  return (ops || []).reduce((acc, [name, arg]) => compose(acc, BUILDERS[name](arg)), identity());
}

const hexToRgb = h => [
  parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)
];

/** Devuelve un canvas nuevo con el filtro horneado. */
export function applyFilter(src, filter) {
  const out = document.createElement('canvas');
  out.width = src.width; out.height = src.height;
  const ctx = out.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(src, 0, 0);
  if (!filter || (!filter.ops?.length && !filter.tint)) return out;

  const { m, o } = buildMatrix(filter.ops);
  const img = ctx.getImageData(0, 0, out.width, out.height);
  const d = img.data;
  const o0 = o[0] * 255, o1 = o[1] * 255, o2 = o[2] * 255;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i + 1], b = d[i + 2];
    d[i]     = m[0] * r + m[1] * g + m[2] * b + o0;
    d[i + 1] = m[3] * r + m[4] * g + m[5] * b + o1;
    d[i + 2] = m[6] * r + m[7] * g + m[8] * b + o2;
  }

  /* Tinte frío del filtro Marino: capa de color en multiply a baja opacidad.
     hue-rotate por sí solo da resultados raros sobre pieles y cielos. */
  if (filter.tint) {
    const [tr, tg, tb] = hexToRgb(filter.tint.color), a = filter.tint.alpha, inv = 1 - a;
    for (let i = 0; i < d.length; i += 4) {
      d[i]     = d[i]     * inv + (d[i]     * tr / 255) * a;
      d[i + 1] = d[i + 1] * inv + (d[i + 1] * tg / 255) * a;
      d[i + 2] = d[i + 2] * inv + (d[i + 2] * tb / 255) * a;
    }
  }

  ctx.putImageData(img, 0, 0);
  return out;
}

/* -------------------------------------------------------------- el grano */

let grainTile = null;
const GRAIN_SIZE = 160;

function makeGrainTile() {
  const c = document.createElement('canvas');
  c.width = c.height = GRAIN_SIZE;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(GRAIN_SIZE, GRAIN_SIZE);
  const d = img.data;
  /* dos octavas, como el fractalNoise del style tile */
  const coarse = new Float32Array(GRAIN_SIZE * GRAIN_SIZE);
  const half = GRAIN_SIZE / 2;
  const low = new Float32Array(half * half);
  for (let i = 0; i < low.length; i++) low[i] = Math.random();
  for (let y = 0; y < GRAIN_SIZE; y++)
    for (let x = 0; x < GRAIN_SIZE; x++)
      coarse[y * GRAIN_SIZE + x] = low[((y >> 1) % half) * half + ((x >> 1) % half)];

  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const n = Math.random() * 0.65 + coarse[p] * 0.35;
    const v = 208 + (n - 0.5) * 130;            // media alta: granula sin ensuciar los blancos
    d[i] = d[i + 1] = d[i + 2] = v;
    d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

/** Grano de película sobre todo el canvas — multiply, ~0.22. Obligatorio. */
export function applyGrain(ctx, w, h, scale = 1) {
  if (!grainTile) grainTile = makeGrainTile();
  ctx.save();
  ctx.globalCompositeOperation = 'multiply';
  ctx.globalAlpha = 0.22;
  const pat = ctx.createPattern(grainTile, 'repeat');
  if (scale !== 1) pat.setTransform(new DOMMatrix().scale(scale));
  ctx.fillStyle = pat;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

/* ------------------------------------------------------------- carga foto */

const MAX_EDGE = 2200;

/** Lee un File y devuelve un canvas ya orientado y reducido. */
export async function fileToCanvas(file) {
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
  const c = document.createElement('canvas');
  c.width = Math.round(bitmap.width * scale);
  c.height = Math.round(bitmap.height * scale);
  const ctx = c.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bitmap, 0, 0, c.width, c.height);
  bitmap.close?.();
  return c;
}

/** Dibuja src cubriendo el rect destino, recortando el sobrante. */
export function drawCover(ctx, src, x, y, w, h) {
  const sr = src.width / src.height, dr = w / h;
  let sw = src.width, sh = src.height, sx = 0, sy = 0;
  if (sr > dr) { sw = src.height * dr; sx = (src.width - sw) / 2; }
  else { sh = src.width / dr; sy = (src.height - sh) / 2; }
  ctx.drawImage(src, sx, sy, sw, sh, x, y, w, h);
}
