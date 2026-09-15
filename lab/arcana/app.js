// Arcana / one question, one card.
// Reading content lives in arcana-content.js; composition logic lives in
// reading-engine.js (window.ArcanaEngine). This file only handles the UI:
// drawing a card, animating the reveal, and rendering the engine's output.

const $ = s => document.querySelector(s);
const form = $('#question-form'), input = $('#question'), reading = $('#reading'), stage = $('#stage'), veil = $('#veil'), status = $('#status'), process = $('#process'), processSub = $('#process-sub');
let cards = [], locale = 'en', seed = 1;

const T = {
  en: {
    title: 'Arcana / One question', eyebrow: 'One question / one card', heading: 'What would<br><em>you like to know?</em>',
    label: 'Your question', placeholder: 'Ask a question...', draw: 'Draw a card', again: 'Draw again', result: 'Your question',
    idle: 'field idle', listening: 'field listening', revealed: 'field revealed', reading: 'Reading',
    steps: [['Reading the signal...', 'Looking beneath the surface...'], ['Following the connection...', 'Letting the pattern emerge...'], ['One card remains.', '']]
  },
  es: {
    title: 'Arcana / Una pregunta', eyebrow: 'Una pregunta / una carta', heading: '¿Qué te gustaría<br><em>saber?</em>',
    label: 'Tu pregunta', placeholder: 'Haz una pregunta...', draw: 'Sacar una carta', again: 'Sacar otra carta', result: 'Tu pregunta',
    idle: 'campo en reposo', listening: 'campo escuchando', revealed: 'campo revelado', reading: 'Lectura',
    steps: [['Leyendo la señal...', 'Mirando bajo la superficie...'], ['Siguiendo la conexión...', 'Dejando emerger el patrón...'], ['Una carta permanece.', '']]
  }
};

function hash(s) { let n = 2166136261; for (const c of s) n = Math.imul(n ^ c.charCodeAt(0), 16777619); return n >>> 0 }
function random(n) { return () => { n = Math.imul(1664525, n) + 1013904223 | 0; return (n >>> 0) / 4294967296 } }
function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

const MAJOR_NAMES_ES = ['El Loco', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Hierofante', 'Los Enamorados', 'El Carro', 'La Fuerza', 'El Ermitaño', 'La Rueda de la Fortuna', 'La Justicia', 'El Colgado', 'La Muerte', 'La Templanza', 'El Diablo', 'La Torre', 'La Estrella', 'La Luna', 'El Sol', 'El Juicio', 'El Mundo'];
const SUIT_ES = { Wands: 'Bastos', Cups: 'Copas', Swords: 'Espadas', Pentacles: 'Oros' };
const RANK_ES = { Page: 'Paje', Knight: 'Caballero', Queen: 'Reina', King: 'Rey' };

function cardTopLabel(card, loc) {
  if (card.group === 'major') return loc === 'es' ? 'Arcanos Mayores' : card.label;
  if (loc !== 'es') return card.label;
  const rank = RANK_ES[card.rank] || card.rank;
  return `${rank} de ${SUIT_ES[card.suit]}`;
}
function cardHeadingName(card, loc) {
  if (card.group === 'major') return loc === 'es' ? MAJOR_NAMES_ES[card.index] : card.name;
  return cardTopLabel(card, loc);
}
function cardNumeral(card, loc) {
  if (card.group === 'major') return card.numeral;
  return loc === 'es' ? (RANK_ES[card.rank] || card.rank) : card.rank;
}

function render(card, question, reversed) {
  const result = ArcanaEngine.compose({ card, question, reversed, locale });
  const headingName = cardHeadingName(card, locale);
  stage.innerHTML = `<div class="card"><div class="gold"><div class="inner"><div class="top">${cardTopLabel(card, locale)}</div><div class="art" style="background-image:url('${card.art || ''}')"></div><div class="name"><strong>${headingName}${reversed ? ' ↺' : ''}</strong><small>${cardNumeral(card, locale)}</small></div></div></div></div><div class="meaning"><div class="position">${T[locale].reading}</div><h2>${headingName}</h2><div class="keywords">${result.theme}</div><p>${result.reading}</p><span class="orientation">${result.orientationLabel}</span><p class="orientation-reason">${result.orientationReason}</p><p class="reflection">${result.reflection}</p></div>`;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const q = input.value.trim();
  if (!q) return;
  form.hidden = true;
  veil.hidden = false;
  status.textContent = T[locale].listening;
  seed = hash(q);
  drawField();
  for (const s of T[locale].steps) { process.textContent = s[0]; processSub.textContent = s[1]; await wait(360) }
  const r = random(seed), card = cards[Math.floor(r() * cards.length)], rev = r() < .3;
  $('#echo').textContent = `“${q}”`;
  render(card, q, rev);
  veil.hidden = true;
  reading.hidden = false;
  status.textContent = T[locale].revealed;
  reading.scrollIntoView({ behavior: 'smooth' });
});

$('#again').addEventListener('click', () => { reading.hidden = true; form.hidden = false; status.textContent = T[locale].idle; input.focus() });
$('#home-link').addEventListener('click', e => {
  e.preventDefault();
  reading.hidden = true;
  form.hidden = false;
  veil.hidden = true;
  input.value = '';
  $('#count').textContent = `0 / 180`;
  status.textContent = T[locale].idle;
});
input.addEventListener('input', () => $('#count').textContent = `${input.value.length} / 180`);
document.querySelectorAll('[data-locale]').forEach(b => b.addEventListener('click', () => setLocale(b.dataset.locale)));

function setLocale(l) {
  locale = l;
  const t = T[l];
  document.documentElement.lang = l;
  document.title = t.title;
  $('#eyebrow').textContent = t.eyebrow;
  $('#title').innerHTML = t.heading;
  $('#question-label').textContent = t.label;
  input.placeholder = t.placeholder;
  $('#draw span').textContent = t.draw;
  $('#again-label').textContent = t.again;
  $('#result-label').textContent = t.result;
  status.textContent = t.idle;
  process.textContent = t.steps[0][0];
  processSub.textContent = t.steps[0][1];
  document.querySelectorAll('[data-locale]').forEach(b => b.classList.toggle('is-active', b.dataset.locale === l));
}

function drawField() {
  const c = $('#field'), x = c.getContext('2d'), ratio = Math.min(devicePixelRatio || 1, 2);
  c.width = innerWidth * ratio; c.height = innerHeight * ratio;
  x.setTransform(ratio, 0, 0, ratio, 0, 0);
  x.clearRect(0, 0, innerWidth, innerHeight);
  const r = random(seed);
  for (let i = 0; i < 64; i++) {
    x.beginPath();
    x.arc(r() * innerWidth, r() * innerHeight, r() * 1.4 + .3, 0, Math.PI * 2);
    x.fillStyle = i % 4 ? 'rgba(53,80,140,.18)' : 'rgba(237,180,78,.3)';
    x.fill();
  }
}
addEventListener('resize', drawField);

cards = (window.ARCANA_DECK && window.ARCANA_DECK.cards) || [];
if (!cards.length) status.textContent = 'field unavailable';
drawField();
