import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/hooks';

/*
  Cursor de Laura (el del canvas):
  · Una bolita lila que sigue al ratón por toda la página.
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
    const el = ref.current;
    if (!enabled || !el) return;
    document.documentElement.classList.add('has-cursor-label');
    let tx = -200, ty = -200, x = tx, y = ty, raf = 0, cur: string | null = null, ck = '';

    const move = (e: PointerEvent) => {
      if (x < -100) { x = e.clientX; y = e.clientY; }
      tx = e.clientX; ty = e.clientY;
      setVis(true);
      // Se mira todo lo que hay bajo el ratón, no solo la capa de arriba: así un retrato, una máscara
      // o una capa decorativa encima no tapan la card ni el texto
      const stack = document.elementsFromPoint(e.clientX, e.clientY);
      let hit: HTMLElement | null = null, textEl: HTMLElement | null = null;
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
  return (
    <div ref={ref} className="lb-cursor" aria-hidden="true">
      <span className={`lb-cursor__dot${vis && !caret ? ' is-vis' : ''}${label ? ' is-on' : ''}`} style={{ width }}>
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
  );
}
