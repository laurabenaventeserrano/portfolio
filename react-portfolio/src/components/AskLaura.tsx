import '../styles/ask.css';
import { Fragment, useCallback, useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { LINKS, ROUTES } from '../content/site';

/*
  Ask Laura: un chat para preguntarle cosas a Laura, como si fuera ella (referencia: RacheLLM de rachelchen.tech).
  · Se abre con el botón de la cabecera, el botón flotante en móvil, o desde cualquier sitio con openAskLaura().
  · Las respuestas llegan en streaming desde /api/ask-laura (server/askLaura.ts). Solo sabe lo que hay en server/knowledge.ts.
  · La conversación se guarda en sessionStorage: sobrevive al cambiar de página, no a cerrar la pestaña.
*/

interface Turn { role: 'user' | 'assistant'; content: string }

/* En pausa hasta que Laura diga "continúa con LLM": falta la clave de la API. Ponlo a true para mostrarlo. */
export const ASK_LAURA_ENABLED = false;

const STORE = 'ask-laura';
const EVENT = 'ask-laura:open';

export const openAskLaura = () => window.dispatchEvent(new Event(EVENT));

const SUGGESTIONS: Record<string, string[]> = {
  [ROUTES.home]: ['What do you do as a Design Engineer?', 'Tell me about your AI product work', 'What kind of role are you looking for?', 'How do you work with engineering?'],
  [ROUTES.case1]: ['Why did you choose deep linking?', 'How did you validate it?', 'What was your role in the migration?'],
  [ROUTES.case2]: ['Where did AI enter the workflow?', 'How does the human review work?', 'What actually shipped?'],
  [ROUTES.case3]: ['How did you use AI to build it?', 'How do the confidence scores work?', 'What changed for the people migrating data?'],
  [ROUTES.case4]: ['What was “brain time”?', 'How did you design across mobile, TV and voice?', 'What was your role at frog?'],
};

/* ---------- Texto de la respuesta: párrafos, listas, **negrita** y enlaces. Sin HTML del modelo. ---------- */
const INLINE = /(\*\*[^*]+\*\*|[\w.+-]+@[\w-]+\.[\w.]+|(?:https?:\/\/)?(?:www\.)?(?:linkedin\.com|github\.com|laurabenavente\.com)[^\s,)]*)/g;

function inline(text: string): ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) return <a key={i} href={`mailto:${part}`}>{part}</a>;
    if (/(linkedin\.com|github\.com|laurabenavente\.com)/.test(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return <a key={i} href={href} target="_blank" rel="noreferrer">{part}</a>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Answer({ text }: { text: string }) {
  return (
    <>
      {text.trim().split(/\n{2,}/).map((block, i) => {
        const lines = block.split('\n');
        if (lines.every((l) => /^\s*([-*•]|\d+\.)\s/.test(l))) {
          return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\s*([-*•]|\d+\.)\s/, ''))}</li>)}</ul>;
        }
        return <p key={i}>{lines.map((l, j) => <Fragment key={j}>{j > 0 && <br />}{inline(l)}</Fragment>)}</p>;
      })}
    </>
  );
}

function load(): Turn[] {
  try { return JSON.parse(sessionStorage.getItem(STORE) ?? '[]') as Turn[]; } catch { return []; }
}

export default function AskLaura() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>(load);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => { try { sessionStorage.setItem(STORE, JSON.stringify(turns)); } catch { /* sin almacenamiento: no pasa nada */ } }, [turns]);

  const show = useCallback(() => { opener.current = document.activeElement; setOpen(true); }, []);
  const hide = useCallback(() => {
    setOpen(false);
    if (opener.current instanceof HTMLElement) opener.current.focus();
  }, []);

  useEffect(() => {
    window.addEventListener(EVENT, show);
    return () => window.removeEventListener(EVENT, show);
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') hide(); };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('ask-open');
    return () => { window.clearTimeout(t); document.removeEventListener('keydown', onKey); document.documentElement.classList.remove('ask-open'); };
  }, [open, hide]);

  // La lista baja sola mientras llega la respuesta
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    const history = turns;
    setTurns([...history, { role: 'user', content: q }, { role: 'assistant', content: '' }]);
    setDraft('');
    setBusy(true);
    const write = (text: string) => setTurns((all) => {
      const next = all.slice();
      next[next.length - 1] = { role: 'assistant', content: text };
      return next;
    });
    try {
      const res = await fetch('/api/ask-laura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, history, page: pathname }),
      });
      if (res.status === 429) { write("That's a lot of questions in a row. Give me a minute and ask again."); return; }
      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => null) as { error?: string } | null;
        write(err?.error ?? `I can't answer right now. Write to me at ${LINKS.emailText}.`);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        write(text);
      }
      if (!text.trim()) write(`I can't answer right now. Write to me at ${LINKS.emailText}.`);
    } catch {
      write(`I can't answer right now. Write to me at ${LINKS.emailText}.`);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  const submit = (e: FormEvent) => { e.preventDefault(); void ask(draft); };
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); void ask(draft); }
  };
  const suggestions = SUGGESTIONS[pathname] ?? SUGGESTIONS[ROUTES.home];
  if (!ASK_LAURA_ENABLED) return null;

  return (
    <>
      {!open && (
        <button type="button" className="ask-fab" onClick={show} aria-haspopup="dialog">
          <span className="ask-dot" aria-hidden="true" />Ask Laura
        </button>
      )}

      <aside id="ask-laura" className="ask" data-open={open} role="dialog" aria-modal="false" aria-labelledby="ask-title" hidden={!open}>
        <header className="ask__head">
          <div className="stack" style={{ gap: 4 }}>
            <h2 id="ask-title" className="ask__title"><span className="ask-dot" aria-hidden="true" />Ask Laura</h2>
            <p className="ask__sub">AI version of me · trained on my portfolio and CV · can make mistakes</p>
          </div>
          <div className="ask__actions">
            {turns.length > 0 && <button type="button" className="ask__icon" onClick={() => setTurns([])} disabled={busy}>Clear</button>}
            <button type="button" className="ask__icon" onClick={hide} aria-label="Close Ask Laura">✕</button>
          </div>
        </header>

        <div className="ask__list" ref={listRef} data-lenis-prevent aria-live="polite">
          {turns.length === 0 ? (
            <div className="ask__empty">
              <p className="ask__hello">Hi, I’m Laura. Well, an AI version of me. Ask me about my work, my process or what I’m looking for.</p>
              <ul className="ask__suggest" aria-label="Suggested questions">
                {suggestions.map((s) => <li key={s}><button type="button" onClick={() => void ask(s)}>{s}</button></li>)}
              </ul>
            </div>
          ) : (
            turns.map((t, i) => (
              <div key={i} className={`ask__msg ask__msg--${t.role}`}>
                {t.role === 'user' ? <p>{t.content}</p> : t.content ? <Answer text={t.content} /> : <p className="ask__typing" aria-label="Laura is typing"><i /><i /><i /></p>}
              </div>
            ))
          )}
        </div>

        <form className="ask__form" onSubmit={submit}>
          <label htmlFor="ask-input" className="sr-only">Ask Laura a question</label>
          <textarea
            id="ask-input" ref={inputRef} rows={1} maxLength={1000}
            value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={onKeyDown}
            placeholder="Ask about my work…" disabled={busy}
          />
          <button type="submit" className="pill pill--dark pill--sm" disabled={busy || !draft.trim()}>Ask →</button>
        </form>
      </aside>
    </>
  );
}
