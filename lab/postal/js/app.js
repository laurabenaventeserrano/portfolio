import { FILTERS, TEMPLATES, STAMPS, FONTS } from './design.js';
import { fileToCanvas, applyFilter, drawCover, applyGrain } from './image.js';
import { renderTo, renderOffscreen, drawStamp, EXPORT_W, SHARE_W } from './postcard.js';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const LS_KEY = 'postal.ids';

/* ------------------------------------------------------------------ estado */

const state = {
  photoRaw: null,
  photo: null,
  filter: FILTERS[1],
  template: TEMPLATES[0],
  font: FONTS[0],
  stamp: STAMPS[0],
  title: '',
  message: '',
  recipient: '',
  dateLabel: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '·'),
  saved: null
};

const filterCache = new Map();
function applyCurrentFilter() {
  if (!state.photoRaw) return;
  const key = state.filter.id;
  if (!filterCache.has(key)) filterCache.set(key, applyFilter(state.photoRaw, state.filter));
  state.photo = filterCache.get(key);
}

/* --------------------------------------------------------------- navegación */

const FLOW = ['home', 'filter', 'template', 'text', 'stamp', 'preview', 'share'];
let current = 'home';

function go(name) {
  current = name;
  $$('.screen').forEach(s => s.classList.toggle('is-active', s.dataset.screen === name));
  const i = FLOW.indexOf(name);
  $('#step').textContent = i > 0 && i < 6 ? `0${i} / 05` : '';
  $('#back').hidden = name === 'home';
  $('#toMine').hidden = name !== 'home';
  document.querySelector('.app').scrollTop = 0;
  window.scrollTo(0, 0);
  onEnter(name);
}

function goBack() {
  if (current === 'mine' || current === 'share') return go('home');
  const i = FLOW.indexOf(current);
  go(FLOW[Math.max(0, i - 1)]);
}

function onEnter(name) {
  if (name === 'filter') { buildFilterRail(); renderFilterStage(); }
  if (name === 'template') { buildSheets(); }
  if (name === 'text') { paintFontList(); }
  if (name === 'stamp') { buildStampGrid(); }
  if (name === 'preview') { renderPreview('#cvFront', '#cvBack', '#flip'); }
  if (name === 'share') { renderPreview('#cvFront2', '#cvBack2', '#flip2'); }
  if (name === 'mine') { loadMine(); }
}

/* ------------------------------------------------------------------- utils */

const toast = (msg) => {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-on');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('is-on'), 2200);
};

const busy = on => $('#loading').classList.toggle('is-on', on);

const stageWidth = (el, max = 340) => {
  const w = el.getBoundingClientRect().width || window.innerWidth - 40;
  return Math.min(Math.round(w), max);
};

/* ------------------------------------------------------------------ pantalla 02 */

function buildFilterRail() {
  const rail = $('#filterRail');
  if (rail.dataset.built === '1') { markFilter(); return; }
  rail.innerHTML = '';
  FILTERS.forEach(f => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.type = 'button';
    b.dataset.id = f.id;
    const c = document.createElement('canvas');
    c.className = 'chip__thumb';
    const dpr = Math.min(devicePixelRatio || 1, 2);
    c.width = 62 * dpr; c.height = 78 * dpr;
    const ctx = c.getContext('2d');
    const tmp = document.createElement('canvas');
    tmp.width = c.width; tmp.height = c.height;
    drawCover(tmp.getContext('2d'), state.photoRaw, 0, 0, tmp.width, tmp.height);
    ctx.drawImage(applyFilter(tmp, f), 0, 0);
    applyGrain(ctx, c.width, c.height, 0.5);
    const s = document.createElement('span');
    s.className = 'chip__label';
    s.textContent = f.name;
    b.append(c, s);
    b.addEventListener('click', () => {
      state.filter = f;
      applyCurrentFilter();
      markFilter();
      renderFilterStage();
    });
    rail.append(b);
  });
  rail.dataset.built = '1';
  markFilter();
}

function markFilter() {
  $$('#filterRail .chip').forEach(c => c.classList.toggle('is-on', c.dataset.id === state.filter.id));
  const on = $('#filterRail .chip.is-on');
  on?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
}

function renderFilterStage() {
  const cv = $('#cvFilter');
  const stage = cv.parentElement;
  const w = stageWidth(stage, 360);
  const dpr = Math.min(devicePixelRatio || 1, 2.5);
  const h = Math.round(w * 1.22);
  cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
  cv.style.width = w + 'px'; cv.style.height = h + 'px';
  const ctx = cv.getContext('2d');
  const b = Math.round(w * 0.045 * dpr);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, cv.width, cv.height);
  const ph = cv.height - b * 2 - Math.round(w * 0.10 * dpr);
  ctx.save();
  ctx.beginPath(); ctx.rect(b, b, cv.width - b * 2, ph); ctx.clip();
  drawCover(ctx, state.photo, b, b, cv.width - b * 2, ph);
  ctx.restore();
  applyGrain(ctx, cv.width, cv.height, cv.width / EXPORT_W);
  cv.style.boxShadow = '0 12px 26px rgba(0,0,0,.2)';
}

/* ------------------------------------------------------------------ pantalla 03 */

function buildSheets() {
  const box = $('#sheets');
  box.innerHTML = '';
  const w = Math.min(window.innerWidth, 480) - 40;
  TEMPLATES.forEach(t => {
    const sheet = document.createElement('div');
    sheet.className = 'sheet';
    const cv = document.createElement('canvas');
    cv.className = 'card-shadow';
    renderTo(cv, 'front', { ...state, template: t }, Math.min(w, 340));
    const name = document.createElement('div');
    name.className = 'sheet__name';
    name.textContent = t.name;
    sheet.append(cv, name);
    box.append(sheet);
  });

  const dots = $('#sheetDots');
  dots.innerHTML = '';
  TEMPLATES.forEach((t, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.type = 'button';
    d.style.background = t.c1;
    d.setAttribute('aria-label', t.name);
    d.addEventListener('click', () => box.scrollTo({ left: box.clientWidth * i, behavior: 'smooth' }));
    dots.append(d);
  });

  const sync = () => {
    const i = Math.round(box.scrollLeft / box.clientWidth);
    const t = TEMPLATES[Math.max(0, Math.min(TEMPLATES.length - 1, i))];
    if (t) state.template = t;
    $$('#sheetDots .dot').forEach((d, k) => d.classList.toggle('is-on', k === i));
  };
  box.onscroll = () => { clearTimeout(box._t); box._t = setTimeout(sync, 60); };

  const idx = TEMPLATES.indexOf(state.template);
  requestAnimationFrame(() => { box.scrollLeft = box.clientWidth * idx; sync(); });
}

/* ------------------------------------------------------------------ pantalla 04 */

function paintFontList() {
  const list = $('#fontList');
  if (list.dataset.built !== '1') {
    FONTS.forEach(f => {
      const b = document.createElement('button');
      b.className = 'fontopt';
      b.type = 'button';
      b.dataset.id = f.id;
      b.innerHTML = `<span class="fontopt__sample"></span><span class="fontopt__tick">&#10003;</span>`;
      const s = b.querySelector('.fontopt__sample');
      s.style.fontFamily = `"${f.family}", cursive`;
      s.style.fontWeight = f.weight || 400;
      s.textContent = f.name;
      b.addEventListener('click', () => { state.font = f; paintFontList(); });
      list.append(b);
    });
    list.dataset.built = '1';
  }
  $$('#fontList .fontopt').forEach(b => b.classList.toggle('is-on', b.dataset.id === state.font.id));
  const ta = $('#message');
  ta.style.fontFamily = `"${state.font.family}", cursive`;
  ta.style.fontSize = Math.round(19 * state.font.k) + 'px';
  ta.style.lineHeight = state.font.lh;
}

/* ------------------------------------------------------------------ pantalla 05 */

function buildStampGrid() {
  const grid = $('#stampGrid');
  if (grid.dataset.built === '1') { markStamps(); return; }
  grid.innerHTML = '';
  STAMPS.forEach(s => {
    const b = document.createElement('button');
    b.className = 'stampopt';
    b.type = 'button';
    b.dataset.id = s.id;
    const cv = document.createElement('canvas');
    const dpr = Math.min(devicePixelRatio || 1, 2.5);
    const w = 74, h = Math.round(w * 1.23) + 14;
    cv.width = (w + 14) * dpr; cv.height = h * dpr;
    cv.style.width = (w + 14) + 'px'; cv.style.height = h + 'px';
    const ctx = cv.getContext('2d');
    ctx.scale(dpr, dpr);
    const lab = document.createElement('span');
    lab.className = 'stampopt__label';
    lab.textContent = s.label;
    b.append(cv, lab);
    b.addEventListener('click', () => { state.stamp = s; markStamps(); });
    grid.append(b);
    ctx.clearRect(0, 0, cv.width, cv.height);
    drawStamp(ctx, (w + 14) / 2, h / 2, w, s);
  });
  grid.dataset.built = '1';
  markStamps();
}

function markStamps() {
  $$('#stampGrid .stampopt').forEach(b => b.classList.toggle('is-on', b.dataset.id === state.stamp.id));
}

/* ------------------------------------------------------------------ pantalla 06/07 */

function renderPreview(frontSel, backSel, flipSel) {
  const flip = $(flipSel);
  flip.classList.remove('is-flipped');
  const w = stageWidth(flip, 340);
  renderTo($(frontSel), 'front', state, w);
  renderTo($(backSel), 'back', state, w);
}

/* ---------------------------------------------------------------- guardar */

const toJpeg = c => c.toDataURL('image/jpeg', 0.86);
const toBlob = c => new Promise(r => c.toBlob(r, 'image/png'));

async function save() {
  busy(true);
  try {
    const front = renderOffscreen('front', state, SHARE_W);
    const back = renderOffscreen('back', state, SHARE_W);
    const id = Math.random().toString(36).slice(2, 12);
    const data = {
      id, url: '', created_at: Date.now(),
      front: toJpeg(front), back: toJpeg(back),
      title: state.title, message: state.message, recipient: state.recipient
    };
    const all = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    all.unshift(data);
    // Ocho caben en el cupo de localStorage; a partir de ahi se cae y hay que
    // soltar las viejas, no fallar delante de quien esta probando la demo.
    while (all.length > 8) all.pop();
    try { localStorage.setItem(LS_KEY, JSON.stringify(all)); }
    catch { localStorage.setItem(LS_KEY, JSON.stringify([data])); }
    state.saved = data;
    $('#shareUrl').textContent = 'Saved in this browser. Nothing left your device.';
    go('share');
  } catch (e) {
    toast(e.message || 'Error al guardar');
  } finally {
    busy(false);
  }
}

async function download(face) {
  busy(true);
  try {
    const c = renderOffscreen(face, state, EXPORT_W);
    const blob = await toBlob(c);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `postal-${state.saved?.id || Date.now()}-${face === 'back' ? 'reverso' : 'frente'}.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  } finally {
    busy(false);
  }
}

async function shareIt() {
  const url = state.saved?.url;
  if (!url) return;
  const payload = {
    title: state.title?.trim() || 'Wish you were here',
    text: state.message?.trim()?.slice(0, 120) || 'Te he hecho una postal.',
    url
  };
  if (navigator.share) {
    try { await navigator.share(payload); return; } catch { /* cancelado */ }
  }
  copyLink();
}

async function copyLink() {
  const url = state.saved?.url;
  if (!url) return;
  try {
    await navigator.clipboard.writeText(url);
    toast('Link copiado');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = url; document.body.append(ta); ta.select();
    document.execCommand('copy'); ta.remove();
    toast('Link copiado');
  }
}

/* ------------------------------------------------------------ mis postales */

async function loadMine() {
  const body = $('#mineBody');
  const rows = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  if (!rows.length) {
    body.innerHTML = `<p class="empty">Todavía no has hecho ninguna.<br>Las que crees en este dispositivo aparecerán aquí.</p>`;
    return;
  }
  try {
    const grid = document.createElement('div');
    grid.className = 'grid';
    rows.forEach(r => {
      const a = document.createElement('a');
      a.className = 'tile';
      a.href = r.front;
      a.setAttribute('download', (r.title || 'postal') + '.jpg');
      a.innerHTML = `<img src="${r.front}" alt="${(r.title || 'Postal').replace(/"/g, '')}" loading="lazy">
        <span>${new Date(r.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}</span>`;
      grid.append(a);
    });
    body.innerHTML = '';
    body.append(grid);
  } catch {
    body.innerHTML = `<p class="empty">No se pudo cargar el historial.</p>`;
  }
}

/* ------------------------------------------------------------------ arranque */

async function loadPhoto(file) {
  if (!file) return;
  busy(true);
  try {
    state.photoRaw = await fileToCanvas(file);
    filterCache.clear();
    $('#filterRail').dataset.built = '0';
    applyCurrentFilter();
    go('filter');
  } catch (e) {
    toast('No se pudo leer esa imagen');
  } finally {
    busy(false);
  }
}

async function readyFonts() {
  const families = [
    '400 40px Yellowtail', '400 40px Sacramento', '400 40px Playball',
    '600 40px Caveat', '400 40px "Homemade Apple"', '400 40px "Special Elite"',
    '700 40px Archivo', '800 40px Archivo'
  ];
  try {
    await Promise.race([
      Promise.all(families.map(f => document.fonts.load(f))),
      new Promise(r => setTimeout(r, 3500))
    ]);
  } catch { /* seguimos con fallbacks */ }
}

function wire() {
  $('#back').addEventListener('click', goBack);
  $('#toMine').addEventListener('click', () => go('mine'));
  $('#toMine2').addEventListener('click', () => go('mine'));
  $('#shoot').addEventListener('click', () => $('#fileShoot').click());
  $('#pick').addEventListener('click', () => $('#filePick').click());
  $('#fileShoot').addEventListener('change', e => loadPhoto(e.target.files[0]));
  $('#filePick').addEventListener('change', e => loadPhoto(e.target.files[0]));
  $$('[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));

  $('#title').addEventListener('input', e => { state.title = e.target.value; });
  $('#recipient').addEventListener('input', e => { state.recipient = e.target.value; });
  $('#message').addEventListener('input', e => {
    state.message = e.target.value;
    $('#msgCount').textContent = e.target.value.length;
  });

  const flipToggle = sel => $(sel).classList.toggle('is-flipped');
  $('#turn').addEventListener('click', () => flipToggle('#flip'));
  $('#flip').addEventListener('click', () => flipToggle('#flip'));
  $('#flip2').addEventListener('click', () => flipToggle('#flip2'));

  $('#save').addEventListener('click', save);
  $('#dlFront').addEventListener('click', () => download('front'));
  $('#dlBack').addEventListener('click', () => download('back'));
  $('#share').addEventListener('click', shareIt);
  $('#copy').addEventListener('click', copyLink);
  $('#again').addEventListener('click', () => {
    state.saved = null;
    go(state.photoRaw ? 'filter' : 'home');
  });

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (state.photoRaw) onEnter(current); }, 200);
  });
}

(async function boot() {
  wire();
  await readyFonts();
  go(location.pathname === '/mis-postales' ? 'mine' : 'home');
})();
