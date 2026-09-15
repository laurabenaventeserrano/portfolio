/* Dibujo de la postal. Todo está expresado en fracciones del ancho de la
   tarjeta, así que la misma función sirve para el preview de 320px y para el
   PNG de 1800px. Relación 3:2 siempre. */

import { drawCover, applyGrain, applyFilter } from './image.js';

export const RATIO = 3 / 2;
export const EXPORT_W = 1800;
export const SHARE_W = 1200;

const rad = d => d * Math.PI / 180;

function setLetterSpacing(ctx, em, size) {
  if ('letterSpacing' in ctx) ctx.letterSpacing = `${em * size}px`;
}
const clearSpacing = ctx => { if ('letterSpacing' in ctx) ctx.letterSpacing = '0px'; };

/* ------------------------------------------------------------------ rayas */

function drawStripes(ctx, x, y, w, h, mat, W) {
  const u = W / 1000;
  ctx.save();
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  ctx.fillStyle = mat.bands[1] ? mat.bands[1][0] : '#fff';
  ctx.fillRect(x, y, w, h);
  const vertical = mat.dir === 'v';
  const len = vertical ? w : h;
  let p = 0, i = 0;
  while (p < len) {
    const [color, bw] = mat.bands[i % mat.bands.length];
    const s = bw * u;
    ctx.fillStyle = color;
    if (vertical) ctx.fillRect(x + p, y, Math.min(s, len - p), h);
    else ctx.fillRect(x, y + p, w, Math.min(s, len - p));
    p += s; i++;
  }
  ctx.restore();
}

/* ----------------------------------------------------------------- título */

function drawCaption(ctx, W, H, t, title) {
  if (!title || !title.trim()) return;
  const cap = t.cap;
  const size = cap.size * W;
  const text = title.trim();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  const kicker = cap.style === 'greetings' ? cap.kicker : null;
  const kSize = size * 0.30;

  ctx.font = `${cap.weight || 400} ${size}px "${cap.font}", cursive`;
  setLetterSpacing(ctx, cap.track || 0, size);
  const tw = ctx.measureText(text).width;
  clearSpacing(ctx);

  let kw = 0;
  if (kicker) {
    ctx.font = `700 ${kSize}px Archivo, sans-serif`;
    setLetterSpacing(ctx, 0.2, kSize);
    kw = ctx.measureText(kicker).width;
    clearSpacing(ctx);
  }

  const padX = W * 0.032, padY = W * 0.020;
  const plateW = Math.max(tw, kw) + padX * 2;
  const plateH = size * 0.95 + (kicker ? kSize * 1.7 : 0) + padY * 2;
  const cx = W / 2;
  const plateY = H - W * 0.075 - plateH;

  if (cap.plate) {
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,.18)';
    ctx.shadowBlur = W * 0.012;
    ctx.shadowOffsetY = W * 0.004;
    ctx.fillStyle = cap.plate;
    ctx.fillRect(cx - plateW / 2, plateY, plateW, plateH);
    ctx.restore();
  }

  let baseY = plateY + plateH - padY - size * 0.14;

  if (kicker) {
    ctx.fillStyle = cap.color;
    ctx.font = `700 ${kSize}px Archivo, sans-serif`;
    setLetterSpacing(ctx, 0.2, kSize);
    ctx.fillText(kicker, cx + kSize * 0.1, plateY + padY + kSize);
    clearSpacing(ctx);
  }

  ctx.save();
  if (cap.style === 'shadow') {
    ctx.shadowColor = 'rgba(0,0,0,.35)';
    ctx.shadowBlur = W * 0.006;
    ctx.shadowOffsetY = W * 0.003;
  }
  ctx.fillStyle = cap.color;
  ctx.font = `${cap.weight || 400} ${size}px "${cap.font}", cursive`;
  setLetterSpacing(ctx, cap.track || 0, size);
  ctx.fillText(text, cx + (cap.track ? cap.track * size / 2 : 0), baseY);
  clearSpacing(ctx);
  ctx.restore();
}

/* ------------------------------------------------------------------ sello */

export function drawStamp(ctx, cx, cy, w, stamp, rotate = true) {
  const h = w * 1.23;
  const dpr = 2;
  const off = document.createElement('canvas');
  off.width = Math.round(w * dpr); off.height = Math.round(h * dpr);
  const c = off.getContext('2d');
  c.scale(dpr, dpr);

  c.fillStyle = stamp.frame;
  c.fillRect(0, 0, w, h);

  const pad = w * 0.075;
  const iw = w - pad * 2, ih = h - pad * 2;

  let grad;
  if (stamp.scene.type === 'radial') {
    grad = c.createRadialGradient(pad + iw / 2, pad + ih * 0.65, 0, pad + iw / 2, pad + ih * 0.65, ih * 0.75);
  } else if (stamp.scene.angle) {
    grad = c.createLinearGradient(pad, pad, pad + iw, pad + ih);
  } else {
    grad = c.createLinearGradient(0, pad, 0, pad + ih);
  }
  stamp.scene.stops.forEach(([o, col]) => grad.addColorStop(o, col));
  c.fillStyle = grad;
  c.fillRect(pad, pad, iw, ih);

  /* icono */
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.font = `${w * 0.42}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  c.fillText(stamp.icon, pad + iw / 2, pad + ih * 0.5);

  /* país + valor */
  c.fillStyle = stamp.textColor;
  c.textAlign = 'left'; c.textBaseline = 'top';
  const fs = w * 0.105;
  c.font = `${fs}px "Special Elite", monospace`;
  setLetterSpacing(c, 0.02, fs);
  c.fillText(stamp.country, pad + w * 0.045, pad + w * 0.04);
  clearSpacing(c);
  c.textAlign = 'right'; c.textBaseline = 'bottom';
  c.fillStyle = stamp.valueColor || stamp.textColor;
  c.font = `800 ${w * 0.155}px Archivo, sans-serif`;
  c.fillText(stamp.value, w - pad - w * 0.045, h - pad - w * 0.03);

  /* dentado: se perfora al final sobre el canvas del sello */
  const r = w * 0.045, step = r * 2.35;
  c.globalCompositeOperation = 'destination-out';
  c.fillStyle = '#000';
  const punch = (x, y) => { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); };
  for (let x = 0; x <= w + step; x += step) { punch(x, 0); punch(x, h); }
  for (let y = 0; y <= h + step; y += step) { punch(0, y); punch(w, y); }

  ctx.save();
  ctx.translate(cx, cy);
  if (rotate) ctx.rotate(rad(stamp.rotate));
  ctx.shadowColor = 'rgba(0,0,0,.22)';
  ctx.shadowBlur = w * 0.09;
  ctx.shadowOffsetY = w * 0.03;
  ctx.drawImage(off, -w / 2, -h / 2, w, h);
  ctx.restore();
}

/* -------------------------------------------------------------- matasellos */

function drawPostmark(ctx, cx, cy, r, color, country, date) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rad(-8));
  ctx.globalAlpha = 0.8;
  ctx.strokeStyle = color;
  ctx.lineWidth = r * 0.09;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
  ctx.lineWidth = r * 0.04;
  ctx.beginPath(); ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  let cs = r * 0.30;
  ctx.font = `${cs}px "Special Elite", monospace`;
  while (ctx.measureText(country).width > r * 1.45 && cs > r * 0.15) {
    cs *= 0.92;
    ctx.font = `${cs}px "Special Elite", monospace`;
  }
  ctx.fillText(country, 0, -r * 0.22);
  ctx.font = `${r * 0.26}px "Special Elite", monospace`;
  ctx.fillText(date, 0, r * 0.22);
  ctx.restore();
}

/* ------------------------------------------------------------------ texto */

function wrap(ctx, text, maxW) {
  const out = [];
  for (const para of String(text).split('\n')) {
    if (!para.trim()) { out.push(''); continue; }
    let line = '';
    for (const word of para.split(/\s+/)) {
      const test = line ? line + ' ' + word : word;
      if (ctx.measureText(test).width > maxW && line) { out.push(line); line = word; }
      else line = test;
    }
    out.push(line);
  }
  return out;
}

/* ------------------------------------------------------------------ caras */

export function drawFront(ctx, W, state) {
  const H = W / RATIO;
  const t = state.template;

  ctx.fillStyle = t.frame.color;
  ctx.fillRect(0, 0, W, H);

  const fw = t.frame.w * W;
  drawStripes(ctx, fw, fw, W - fw * 2, H - fw * 2, t.mat, W);

  const mw = t.mat.w * W;
  const px = fw + mw, py = fw + mw;
  const pw = W - (fw + mw) * 2, ph = H - (fw + mw) * 2;

  ctx.save();
  ctx.beginPath(); ctx.rect(px, py, pw, ph); ctx.clip();
  if (state.photo) {
    drawCover(ctx, state.photo, px, py, pw, ph);
  } else {
    const g = ctx.createLinearGradient(px, py, px + pw, py + ph);
    g.addColorStop(0, '#D89A4B'); g.addColorStop(1, '#8A6F45');
    ctx.fillStyle = g; ctx.fillRect(px, py, pw, ph);
  }
  ctx.restore();

  ctx.strokeStyle = 'rgba(43,38,32,.28)';
  ctx.lineWidth = Math.max(1, W * 0.0016);
  ctx.strokeRect(px, py, pw, ph);

  drawCaption(ctx, W, H, t, state.title);
  applyGrain(ctx, W, H, W / EXPORT_W);
}

export function drawBack(ctx, W, state) {
  const H = W / RATIO;
  const t = state.template, back = t.back;

  ctx.fillStyle = t.frame.color;
  ctx.fillRect(0, 0, W, H);
  const fw = t.frame.w * W;
  ctx.fillStyle = back.paper;
  ctx.fillRect(fw, fw, W - fw * 2, H - fw * 2);

  const pad = W * 0.058;
  const x0 = pad, y0 = pad, x1 = W - pad, y1 = H - pad;
  const divX = W * 0.505;

  /* línea divisoria */
  ctx.save();
  ctx.strokeStyle = back.accent;
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = W * 0.0028;
  if (back.rule === 'dotted') ctx.setLineDash([W * 0.008, W * 0.008]);
  ctx.beginPath(); ctx.moveTo(divX, y0); ctx.lineTo(divX, y1); ctx.stroke();
  ctx.restore();

  /* cabecera izquierda */
  ctx.fillStyle = back.label;
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  const kSize = W * 0.026;
  ctx.font = `${kSize}px "Special Elite", monospace`;
  setLetterSpacing(ctx, 0.12, kSize);
  ctx.fillText(back.kicker, x0, y0);
  clearSpacing(ctx);
  ctx.save();
  ctx.globalAlpha = 0.4;
  ctx.strokeStyle = back.accent;
  ctx.lineWidth = W * 0.0016;
  ctx.beginPath();
  ctx.moveTo(x0, y0 + kSize * 1.9); ctx.lineTo(divX - W * 0.04, y0 + kSize * 1.9);
  ctx.stroke();
  ctx.restore();

  /* mensaje */
  const msg = (state.message || '').trim();
  if (msg) {
    const f = state.font;
    const maxW = divX - W * 0.04 - x0;
    const topY = y0 + W * 0.085;
    const maxH = y1 - topY;
    let size = W * 0.050 * f.k, lines = [];
    for (let i = 0; i < 14; i++) {
      ctx.font = `${f.weight || 400} ${size}px "${f.family}", cursive`;
      lines = wrap(ctx, msg, maxW);
      if (lines.length * size * f.lh <= maxH) break;
      size *= 0.92;
    }
    ctx.fillStyle = '#2B2620';
    ctx.textBaseline = 'alphabetic';
    lines.forEach((ln, i) => ctx.fillText(ln, x0, topY + size * 0.85 + i * size * f.lh));
  }

  /* sello */
  const stampW = W * 0.145;
  const stampCx = x1 - stampW / 2, stampCy = y0 + stampW * 1.23 / 2;
  drawStamp(ctx, stampCx, stampCy, stampW, state.stamp);

  /* matasellos */
  const pr = W * 0.058;
  drawPostmark(
    ctx, stampCx - stampW * 0.82, stampCy + pr * 0.25, pr,
    back.accent, state.stamp.country, state.dateLabel
  );

  /* destinatario */
  const rx = divX + W * 0.045;
  let ry = y0 + W * 0.215;
  ctx.fillStyle = back.label;
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  const lSize = W * 0.023;
  ctx.font = `${lSize}px "Special Elite", monospace`;
  setLetterSpacing(ctx, 0.14, lSize);
  ctx.fillText('PARA', rx, ry);
  clearSpacing(ctx);

  ry += lSize * 3.6;
  const lineGap = W * 0.058;
  ctx.save();
  ctx.strokeStyle = back.accent;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth = W * 0.0016;
  for (let i = 0; i < 3; i++) {
    const y = ry + i * lineGap;
    ctx.beginPath(); ctx.moveTo(rx, y); ctx.lineTo(x1, y); ctx.stroke();
  }
  ctx.restore();

  const who = (state.recipient || '').trim();
  if (who) {
    const f = state.font;
    let size = W * 0.042 * f.k;
    ctx.font = `${f.weight || 400} ${size}px "${f.family}", cursive`;
    while (ctx.measureText(who).width > x1 - rx && size > W * 0.02) {
      size *= 0.93;
      ctx.font = `${f.weight || 400} ${size}px "${f.family}", cursive`;
    }
    ctx.fillStyle = '#2B2620';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(who, rx + W * 0.006, ry - W * 0.008);
  }

  applyGrain(ctx, W, H, W / EXPORT_W);
}

/* -------------------------------------------------------------- utilidades */

export function renderTo(canvas, face, state, cssW) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  const W = Math.round(cssW * dpr);
  canvas.width = W;
  canvas.height = Math.round(W / RATIO);
  canvas.style.width = cssW + 'px';
  canvas.style.height = (cssW / RATIO) + 'px';
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  (face === 'back' ? drawBack : drawFront)(ctx, W, state);
}

export function renderOffscreen(face, state, W) {
  const c = document.createElement('canvas');
  c.width = W; c.height = Math.round(W / RATIO);
  const ctx = c.getContext('2d');
  (face === 'back' ? drawBack : drawFront)(ctx, W, state);
  return c;
}

export { applyFilter };
