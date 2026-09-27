/*
  Retrato en puntos a partir de un vídeo en bucle.
  Cada punto de la rejilla toma su tamaño del brillo del fotograma actual
  y es una pequeña partícula con muelle: el cursor la aparta y, con la quietud, vuelve a su sitio.
  Misma lógica de interacción que el campo de partículas de la portada:
    moverse suma energía (más rápido, más dispersión) y empuja los puntos cercanos;
    tras 600 ms de quietud la energía baja y la cara se recompone.

  Los ajustes son los mismos que los del banco de ajustes ("Copiar ajustes" produce este objeto).
*/

const TAU = Math.PI * 2;
const INK = '#0E0E0C';

export interface DotLoopOptions {
  spacing: number;              // separación entre puntos, px CSS
  dotScale: number;             // diámetro máximo respecto a la separación
  contrast: number;             // exponente sobre la oscuridad
  threshold: number;            // por debajo, no se dibuja punto (0 a 1)
  shape: 'circle' | 'square';
  grid: 'square' | 'hex';       // recta o al tresbolillo
  drift: number;                // dispersión general con el ratón en movimiento
  radius: number;               // radio de empuje del cursor, px
  force: number;                // fuerza de empuje del cursor
  recover: number;              // segundos para recomponer la cara
  speed: number;                // velocidad del vídeo
  breath: number;               // vibración leve en reposo
}

export const DOT_LOOP_DEFAULTS: DotLoopOptions = {
  spacing: 6, dotScale: 1, contrast: 1.35, threshold: 0.1, shape: 'circle', grid: 'square',
  drift: 7, radius: 120, force: 3.2, recover: 1.5, speed: 1, breath: 0,
};

export interface PointerState { x: number; y: number; s: number } // coords del lienzo, fuerza 0 a 1

export class DotLoopRenderer {
  private ctx: CanvasRenderingContext2D;
  private sampler = document.createElement('canvas');
  private sctx = this.sampler.getContext('2d', { willReadFrequently: true })!;
  private key = '';
  private W = 0; private H = 0; private dpr = 1;
  private cols = 0; private rows = 0; private n = 0;
  private hx = new Float32Array(0); private hy = new Float32Array(0);
  private px = new Float32Array(0); private py = new Float32Array(0);
  private vx = new Float32Array(0); private vy = new Float32Array(0);
  private val = new Float32Array(0); private ph = new Float32Array(0);

  /** Dónde se coloca la imagen dentro del lienzo: 0 izquierda, 0,5 centro, 1 derecha. */
  anchorX = 0.5;

  constructor(private canvas: HTMLCanvasElement, public opts: DotLoopOptions = DOT_LOOP_DEFAULTS) {
    this.ctx = canvas.getContext('2d')!;
  }

  setOptions(o: Partial<DotLoopOptions>) { this.opts = { ...this.opts, ...o }; }

  private layout(srcW: number, srcH: number) {
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight;
    if (!W || !H) return false;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const { spacing: s, grid } = this.opts;
    const key = [W, H, dpr, s, grid, srcW, srcH, this.anchorX].join('|');
    if (key === this.key) return true;
    this.key = key; this.W = W; this.H = H; this.dpr = dpr;
    this.canvas.width = Math.round(W * dpr); this.canvas.height = Math.round(H * dpr);
    const k = Math.min(W / srcW, H / srcH);
    const fw = srcW * k, fh = srcH * k, fx = (W - fw) * this.anchorX, fy = (H - fh) / 2;
    const rowH = grid === 'hex' ? s * 0.866 : s;
    this.cols = Math.max(8, Math.floor(fw / s));
    this.rows = Math.max(8, Math.floor(fh / rowH));
    this.sampler.width = this.cols; this.sampler.height = this.rows;
    const n = this.n = this.cols * this.rows;
    this.hx = new Float32Array(n); this.hy = new Float32Array(n);
    this.px = new Float32Array(n); this.py = new Float32Array(n);
    this.vx = new Float32Array(n); this.vy = new Float32Array(n);
    this.val = new Float32Array(n); this.ph = new Float32Array(n);
    const ox = fx + (fw - (this.cols - 1) * s) / 2, oy = fy + (fh - (this.rows - 1) * rowH) / 2;
    for (let j = 0; j < this.rows; j++) for (let i = 0; i < this.cols; i++) {
      const q = j * this.cols + i, shift = grid === 'hex' && (j & 1) ? s / 2 : 0;
      this.hx[q] = this.px[q] = ox + i * s + shift;
      this.hy[q] = this.py[q] = oy + j * rowH;
      this.ph[q] = (Math.sin(q * 12.9898) * 43758.5453) % TAU; // fase pseudoaleatoria estable
    }
    return true;
  }

  /**
   * @param energy 0 a 1, dispersión global (movimiento reciente del cursor)
   * @param ptr    cursor en coordenadas del lienzo, o null
   * @param still  movimiento reducido: sin física, puntos en su sitio
   */
  render(source: CanvasImageSource, srcW: number, srcH: number, t: number, dt: number, energy: number, ptr: PointerState | null, still: boolean) {
    if (!srcW || !srcH || !this.layout(srcW, srcH)) return;
    const o = this.opts, { cols, rows, n, W, H } = this;
    const s = o.spacing;

    // 1. Brillo del fotograma, reducido a cols x rows
    this.sctx.drawImage(source, 0, 0, cols, rows);
    const d = this.sctx.getImageData(0, 0, cols, rows).data;
    const blend = still ? 1 : 1 - Math.exp(-dt / 40); // suaviza el parpadeo del vídeo
    const maxR = s * 0.5 * o.dotScale;

    // 2. Física
    const fdt = Math.min(3, dt / 16.667);
    const drift = energy * s * o.drift, breath = o.breath * s * 0.08;
    const k = 0.02 * (1.5 / Math.max(0.2, o.recover));
    const R = o.radius, R2 = R * R;
    const push = !still && !!ptr && ptr.s > 0.01;
    const square = o.shape === 'square';

    const ctx = this.ctx;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = INK;
    ctx.beginPath();
    for (let q = 0; q < n; q++) {
      const l = (0.299 * d[q * 4] + 0.587 * d[q * 4 + 1] + 0.114 * d[q * 4 + 2]) / 255;
      const v = Math.pow(Math.max(0, 1 - l), o.contrast);
      this.val[q] += (v - this.val[q]) * blend;

      if (still) { this.px[q] = this.hx[q]; this.py[q] = this.hy[q]; }
      else {
        const ph = this.ph[q];
        const tx = this.hx[q] + Math.sin(t * 0.9 + ph) * (drift + breath) + Math.cos(t * 0.37 + ph * 2.1) * drift * 0.6;
        const ty = this.hy[q] + Math.cos(t * 0.8 + ph * 1.7) * (drift + breath) + Math.sin(t * 0.29 + ph) * drift * 0.6;
        let ax = (tx - this.px[q]) * k, ay = (ty - this.py[q]) * k;
        if (push && ptr) {
          const dx = this.px[q] - ptr.x, dy = this.py[q] - ptr.y, dd = dx * dx + dy * dy;
          if (dd < R2 && dd > 0.01) { const di = Math.sqrt(dd), f = (1 - di / R) * ptr.s * o.force; ax += (dx / di) * f; ay += (dy / di) * f; }
        }
        this.vx[q] = (this.vx[q] + ax * fdt) * 0.86;
        this.vy[q] = (this.vy[q] + ay * fdt) * 0.86;
        this.px[q] += this.vx[q] * fdt; this.py[q] += this.vy[q] * fdt;
      }

      const vq = this.val[q];
      if (vq < o.threshold) continue;
      const r = maxR * vq, x = this.px[q], y = this.py[q];
      if (square) ctx.rect(x - r, y - r, r * 2, r * 2);
      else { ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, TAU); }
    }
    ctx.fill();
  }
}
