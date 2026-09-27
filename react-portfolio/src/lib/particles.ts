/*
  Motor del campo de partículas. Canvas 2D a mano, sin librerías.
  Modos:
    foco      las partículas se recogen hacia un punto
    disperso  vagan siguiendo un campo de ruido tipo Perlin
    mezcla    cohesión de 0 (disperso) a 1 (foco)
*/

const TAU = Math.PI * 2;

export type FieldMode = 'foco' | 'disperso' | 'mezcla';
export type FieldTheme = 'light' | 'dark';

export interface FieldOptions {
  count: number;
  cx?: number;       // centro horizontal relativo (0 a 1)
  cy?: number;       // centro vertical relativo (0 a 1)
  scale?: number;    // escala del radio del cúmulo
  theme: FieldTheme;
  seed?: number;
  fade?: number;     // opacidad global (0 a 1)
}

export interface Pointer { x: number; y: number; s: number }

interface Particle {
  hx: number; hy: number; sx: number; sy: number;
  x: number; y: number; vx: number; vy: number;
  k: number; acc: boolean; big: boolean; al: number;
}

const THEMES = {
  dark: { ink: '#FFFFFF', accent: '#E7BFFF', accShare: 0.12 },
  light: { ink: '#0E0E0C', accent: '#0E0E0C', accShare: 0 },
} as const;

function lcg(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

function makeNoise(seed: number) {
  const rnd = lcg(seed);
  const p: number[] = [];
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  const perm = new Uint16Array(512);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const vals = new Float32Array(256);
  for (let i = 0; i < 256; i++) vals[i] = rnd() * 2 - 1;
  const fade = (v: number) => v * v * v * (v * (v * 6 - 15) + 10);
  const lat = (x: number, y: number, z: number) => vals[perm[perm[perm[x & 255] + (y & 255)] + (z & 255)]];
  const L = (a: number, b: number, v: number) => a + (b - a) * v;
  return (x: number, y: number, z: number) => {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const u = fade(x - xi), v = fade(y - yi), w = fade(z - zi);
    return L(
      L(L(lat(xi, yi, zi), lat(xi + 1, yi, zi), u), L(lat(xi, yi + 1, zi), lat(xi + 1, yi + 1, zi), u), v),
      L(L(lat(xi, yi, zi + 1), lat(xi + 1, yi, zi + 1), u), L(lat(xi, yi + 1, zi + 1), lat(xi + 1, yi + 1, zi + 1), u), v),
      w,
    );
  };
}

const NOISE = makeNoise(7);

export class ParticleField {
  private ctx: CanvasRenderingContext2D;
  private ps: Particle[] = [];
  private w = 0;
  private h = 0;
  private dpr = 1;
  private placed = false;
  private theme: (typeof THEMES)[FieldTheme];

  constructor(private canvas: HTMLCanvasElement, private o: FieldOptions) {
    this.ctx = canvas.getContext('2d')!;
    this.theme = THEMES[o.theme];
    const rnd = lcg(o.seed ?? 11);
    for (let i = 0; i < o.count; i++) {
      const a = rnd() * TAU;
      const r = Math.min(2.6, Math.sqrt(-2 * Math.log(1 - rnd() * 0.999))) * 0.38;
      this.ps.push({
        hx: Math.cos(a) * r, hy: Math.sin(a) * r, sx: rnd(), sy: rnd(), x: 0, y: 0, vx: 0, vy: 0,
        k: rnd(), acc: rnd() < this.theme.accShare, big: rnd() < 0.16, al: (0.35 + rnd() * 0.6) * (o.fade ?? 1),
      });
    }
  }

  private size() {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    if (!w || !h) return false;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (w !== this.w || h !== this.h || dpr !== this.dpr) {
      const kx = this.w ? w / this.w : 1, ky = this.h ? h / this.h : 1;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      if (this.placed) for (const p of this.ps) { p.x *= kx; p.y *= ky; }
      this.w = w; this.h = h; this.dpr = dpr;
    }
    if (!this.placed) { for (const p of this.ps) { p.x = p.sx * w; p.y = p.sy * h; } this.placed = true; }
    return true;
  }

  /** Un paso de simulación y dibujo. `still` = movimiento reducido. */
  step(t: number, dt: number, mode: FieldMode, cohesion: number, still: boolean, ptr?: Pointer) {
    if (!this.size()) return;
    const { w, h, o, ps } = this;
    // En pantallas estrechas el cúmulo se centra para no quedar cortado
    const narrow = w < 700;
    const cx = w * (narrow ? 0.5 : o.cx ?? 0.5);
    const cy = h * (narrow ? 0.3 : o.cy ?? 0.5);
    const R = Math.min(w, h) * 0.5 * (narrow ? 1 : o.scale ?? 1);
    const tt = still ? 0 : t;
    let rf = 0, jitter = 0, free = false;
    if (mode === 'foco') { rf = 0.28; jitter = 0.03; }
    else if (mode === 'mezcla') {
      if (cohesion <= 0.02) free = true;
      else { rf = 1.3 + (0.28 - 1.3) * cohesion; jitter = 0.35 * (1 - cohesion) + 0.03; }
    } else free = true;
    const rot = tt * 0.04, cr = Math.cos(rot), sr = Math.sin(rot);
    const sp = Math.max(0.35, Math.min(w, h) / 520);
    const fdt = Math.min(3, dt / 16.667);
    const push = !!ptr && ptr.s > 0.01 && !still;

    for (const p of ps) {
      if (free) {
        if (still) { p.x = p.sx * w; p.y = p.sy * h; continue; }
        const ang = NOISE(p.x * 0.0055, p.y * 0.0055, tt * 0.07 + p.k * 0.3) * TAU * 1.4;
        p.vx = p.vx * 0.94 + Math.cos(ang) * 0.07 * sp * fdt;
        p.vy = p.vy * 0.94 + Math.sin(ang) * 0.07 * sp * fdt;
      } else {
        const hx = p.hx * cr - p.hy * sr, hy = p.hx * sr + p.hy * cr;
        let jx = 0, jy = 0;
        if (jitter && !still) { jx = NOISE(p.k * 40, tt * 0.25, 1.3) * jitter; jy = NOISE(p.k * 40, tt * 0.25, 7.1) * jitter; }
        const tx = cx + (hx * rf + jx) * R, ty = cy + (hy * rf + jy) * R;
        if (still) { p.x = tx; p.y = ty; p.vx = p.vy = 0; continue; }
        p.vx = (p.vx + (tx - p.x) * 0.016 * fdt) * 0.87;
        p.vy = (p.vy + (ty - p.y) * 0.016 * fdt) * 0.87;
      }
      if (push && ptr) {
        const dx = p.x - ptr.x, dy = p.y - ptr.y, d2 = dx * dx + dy * dy;
        if (d2 < 19600 && d2 > 0.01) {
          const d = Math.sqrt(d2), fz = (1 - d / 140) * ptr.s * 2.4 * fdt;
          p.vx += (dx / d) * fz; p.vy += (dy / d) * fz;
        }
      }
      p.x += p.vx * fdt; p.y += p.vy * fdt;
      if (free) {
        if (p.x < -4) p.x = w + 4; else if (p.x > w + 4) p.x = -4;
        if (p.y < -4) p.y = h + 4; else if (p.y > h + 4) p.y = -4;
      }
    }

    const ctx = this.ctx;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = this.theme.ink;
    for (const p of ps) { if (p.acc) continue; const s = p.big ? 2.2 : 1.3; ctx.globalAlpha = p.al; ctx.fillRect(p.x, p.y, s, s); }
    ctx.fillStyle = this.theme.accent;
    for (const p of ps) { if (!p.acc) continue; ctx.globalAlpha = 0.95 * (o.fade ?? 1); ctx.fillRect(p.x, p.y, 2.2, 2.2); }
    ctx.globalAlpha = 1;
  }
}
