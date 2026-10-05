import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/hooks';

/*
  Cursor de Laura (el del canvas):
  · En reposo: un punto negro relleno y un anillo de prisma de 1px alrededor (como sarahkadlecek.com).
    El punto sigue al ratón casi pegado (0,55 por fotograma) y el anillo, con un pelín de retraso (0,35).
    Sobre las secciones negras el punto se vuelve blanco.
  · Sobre cualquier cosa que se pueda abrir, la bolita se abre en una tag lila con un texto
    que cambia con el contenido ("Untangle it", "Say hi", "Go check!"…), nunca repite el botón.
  · Sobre texto, la bolita se convierte en una barra de texto lila: gigante, a la medida de la letra,
    en H1 y H2; un 20 % más grande que la normal en el resto.
  · Solo con ratón. En pantallas táctiles no aparece.
*/
const FINE = '(hover: hover) and (pointer: fine)';
const TEXT = 'h1,h2,h3,h4,p,li,dd,dt,figcaption,blockquote';
const CLICK = 'a[href],button,[role="button"],[data-cursor],.pass';

function labelFor(el: HTMLElement): string {
  const href = el.getAttribute('href') || '';
  const id = el.getAttribute('aria-labelledby') || '';
  if (el.classList.contains('switch__opt')) return el.textContent === 'Short' ? 'Quick look' : 'The full story';
  if (el.classList.contains('sound')) return el.getAttribute('aria-pressed') === 'true' ? 'Silence' : 'Press play';
  if (el.classList.contains('menu__toggle')) return el.getAttribute('aria-expanded') === 'true' ? 'Close it' : 'Open it';
  if (id === 'pass-1' || href.includes('/lab/postal')) return 'Make a postcard';
  if (id === 'pass-2' || href.includes('/lab/arcana')) return 'Ask the cards';
  if (href.includes('cch-ifirm')) return 'Untangle it';
  if (href.includes('ai-customer')) return 'Meet the AI';
  if (href.includes('client-data')) return 'Watch it migrate';
  if (href.includes('telefonica')) return 'Follow the flow';
  if (href.startsWith('mailto:')) return 'Say hi';
  if (href.includes('.pdf')) return 'Go check!';
  if (href.includes('instagram')) return 'Peek inside';
  if (href.includes('linkedin')) return 'Let’s connect';
  if (href.includes('github')) return 'Snoop around';
  if (href === '#lab' || href.endsWith('#lab')) return 'Let’s play';
  if (href === '#about' || href.endsWith('#about')) return 'Meet Laura';
  if (href === '#contact' || href.endsWith('#contact')) return 'Say hi';
  if (href === '#hero' || href === '/' || el.classList.contains('logo')) return 'Back to the start';
  if (href.startsWith('#')) return 'Take me there';
  if (el.dataset.cursor && el.dataset.cursor !== 'Explore') return el.dataset.cursor;
  return 'Take me there';
}

type Caret = { h: number; w: number; bar: number } | null;

export default function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);
  const pointRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [text, setText] = useState('Take me there');
  const [arrow, setArrow] = useState('↗');
  const [caret, setCaret] = useState<Caret>(null);
  const [vis, setVis] = useState(false);
  const [enabled, setEnabled] = useState(() => typeof window !== 'undefined' && window.matchMedia(FINE).matches);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia(FINE);
    const on = () => setEnabled(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    const el = ref.current, rest = restRef.current, ring = ringRef.current, point = pointRef.current;
    if (!enabled || !el || !rest || !ring || !point) return;
    document.documentElement.classList.add('has-cursor-label');
    let tx = -200, ty = -200, x = tx, y = ty, raf = 0, cur: string | null = null, ck = '';
    let dx = tx, dy = ty, rx = tx, ry = ty, dark = false;

    const move = (e: PointerEvent) => {
      if (x < -100) { x = dx = rx = e.clientX; y = dy = ry = e.clientY; }
      tx = e.clientX; ty = e.clientY;
      setVis(true);
      // Se mira todo lo que hay bajo el ratón, no solo la capa de arriba: así un retrato, una máscara
      // o una capa decorativa encima no tapan la card ni el texto
      const stack = document.elementsFromPoint(e.clientX, e.clientY);
      let hit: HTMLElement | null = null, textEl: HTMLElement | null = null;
      const onDark = !!stack[0]?.closest('.is-dark');
      if (onDark !== dark) { dark = onDark; rest.classList.toggle('is-inv', dark); }
      for (const n of stack) {
        if (!hit) hit = n.closest<HTMLElement>(CLICK);
        if (!textEl) textEl = n.closest<HTMLElement>(TEXT);
        if (hit) break;
      }
      // Hay textos que no reciben el ratón (pointer-events: none, para dejar paso al retrato):
      // se buscan por posición
      if (!hit && !textEl) {
        let best = Infinity;
        document.querySelectorAll<HTMLElement>(TEXT).forEach((n) => {
          const r = n.getBoundingClientRect();
          if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom && r.width * r.height < best) {
            best = r.width * r.height; textEl = n;
          }
        });
      }
      const next = hit ? labelFor(hit) : null;
      if (next !== cur) {
        cur = next; setLabel(next);
        if (next && hit) { setText(next); setArrow((hit.getAttribute('href') || '').startsWith('#') ? '↓' : '↗'); }
      }
      let c: Caret = null;
      if (!hit) {
        const t = textEl;
        if (t && t.textContent?.trim()) {
          const fs = parseFloat(getComputedStyle(t).fontSize) || 16;
          const giant = /^H[12]$/.test(t.tagName);
          c = giant
            ? { h: Math.round(fs * 0.92), w: Math.round(fs * 0.3), bar: fs > 120 ? 3 : 2 }
            : { h: +(Math.min(fs * 1.25, 21) * 1.2).toFixed(1), w: 8.4, bar: 1.5 };
        }
      }
      const key = c ? `${c.h}` : '';
      if (key !== ck) { ck = key; setCaret(c); }
    };
    const leave = () => { cur = null; ck = ''; setLabel(null); setCaret(null); setVis(false); };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const k = reduced ? 1 : 0.45;
      x += (tx - x) * k; y += (ty - y) * k;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      // Reposo: el punto como la referencia; el anillo, con menos retraso que en ella (0,16), para que se use bien
      const kd = reduced ? 1 : 0.55, kr = reduced ? 1 : 0.35;
      dx += (tx - dx) * kd; dy += (ty - dy) * kd;
      rx += (tx - rx) * kr; ry += (ty - ry) * kr;
      point.style.transform = `translate3d(${dx - 3.5}px, ${dy - 3.5}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.documentElement.classList.remove('has-cursor-label');
    };
  }, [enabled, reduced]);

  if (!enabled) return null;
  const width = label ? Math.round(text.length * 8.4 + 60) : 16;
  return (<>
    <div ref={restRef} className={`lb-rest${vis && !label && !caret ? ' is-on' : ''}`} aria-hidden="true">
      <span ref={ringRef} className="lb-rest__ring" />
      <span ref={pointRef} className="lb-rest__dot" />
    </div>
    <div ref={ref} className="lb-cursor" aria-hidden="true">
      <span className={`lb-cursor__dot${vis && !caret && label ? ' is-vis' : ''}${label ? ' is-on' : ''}`} style={{ width }}>
        <span className="lb-cursor__t">{text}</span><span className="lb-cursor__t lb-cursor__arrow">{arrow}</span>
      </span>
      <span className={`lb-cursor__caret${vis && caret ? ' is-on' : ''}`}>
        {caret && (<>
          <span style={{ width: caret.w, height: caret.bar }} />
          <span style={{ width: caret.bar, height: caret.h }} />
          <span style={{ width: caret.w, height: caret.bar }} />
        </>)}
      </span>
    </div>
  </>);
}
