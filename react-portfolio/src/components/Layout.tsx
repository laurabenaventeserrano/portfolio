import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LINKS, ROUTES } from '../content/site';
import { useScrollProgress } from '../lib/hooks';
import JellyLogo from './JellyLogo';
import CursorLabel from './CursorLabel';
import AskLaura from './AskLaura';
import ShortView from './ShortView';
import { organ } from '../lib/organ';
import { scrollToEl, scrollToTop, useSmoothScroll } from '../motion/useSmoothScroll';
import { useScrollStory } from '../motion/useScrollStory';

function Logo() {
  return (
    <Link to={ROUTES.home} className="logo" aria-label="Laura Benavente, home">
      <JellyLogo />
    </Link>
  );
}

/* Menú del portfolio del prisma (Identity V1), sobre blanco.
   Cerrado: la marca a la izquierda y la hamburguesa a la derecha, alineados al margen del contenido.
   Abierto: una hoja blanca a pantalla completa con el índice numerado en Libertinus,
   la meta de cada destino en mono y una línea de prisma que se dibuja al pasar por encima. */
const MENU = [
  { label: 'Home', meta: 'Start', hash: '#hero' },
  { label: 'Selected work', meta: '05 cases', hash: '#work' },
  { label: 'Experience', meta: 'Wolters Kluwer · frog', hash: '#experience' },
  { label: 'About', meta: 'Laura', hash: '#about' },
  { label: 'Having fun with AI', meta: 'The lab', hash: '#lab' },
];

interface HeaderProps { short: boolean; onShort: (v: boolean) => void; sound: boolean; onSound: () => void }

function Header({ short, onShort, sound, onSound }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  return (
    <header className={`header menu${open ? ' is-open' : ''}`}>
      <div className="header__inner">
        <Logo />
        <div className="header__tools">
          {/* Versión: completa o resumen de una pantalla */}
          <div className="switch" role="group" aria-label="Version">
            <button type="button" className="switch__opt" aria-pressed={!short} onClick={() => onShort(false)}>Full</button>
            <button type="button" className="switch__opt" aria-pressed={short} onClick={() => onShort(true)}>Short</button>
          </div>
          {/* Sonido: órgano ambiente, apagado por defecto */}
          <button type="button" className="sound" aria-pressed={sound} onClick={onSound} aria-label={sound ? 'Turn sound off' : 'Turn sound on'}>
            <span className="sound__bars" aria-hidden="true"><i /><i /><i /><i /></span>
            <span className="sound__txt">{sound ? 'Sound on' : 'Sound off'}</span>
          </button>
          <button type="button" className="menu__toggle" aria-expanded={open} aria-controls="menu-panel" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {/* Hamburguesa: dos líneas que se cruzan en una X al abrir */}
            <span className="menu__bars" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
      <div id="menu-panel" className="menu__panel" hidden={!open}>
        <div className="menu__head" aria-hidden="true"><span>Index</span><span className="menu__rule" /><span>{MENU.length + 1} destinations</span></div>
        <ol className="menu__links">
          {MENU.map((m) => (
            <li key={m.hash}>
              <Link to={{ pathname: ROUTES.home, hash: m.hash }} data-meta={m.meta} onClick={() => setOpen(false)}><span>{m.label}</span></Link>
            </li>
          ))}
          <li><a href={LINKS.cv} data-meta="PDF ↗" onClick={() => setOpen(false)}><span>CV</span></a></li>
        </ol>
        <ul className="menu__foot">
          <li><a href={LINKS.email}>Contact me</a></li>
          <li><a href={LINKS.linkedin}>LinkedIn</a></li>
          <li><a href={LINKS.instagram}>Instagram</a></li>
          <li><a href={LINKS.github}>GitHub</a></li>
        </ul>
      </div>
    </header>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section--dark is-dark" aria-labelledby="contact-title">
      <div className="container stack gap-48">
        <h2 id="contact-title" className="h-giant">Let’s<br /><span className="accent">connect.</span></h2>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href={LINKS.email} className="pill pill--accent pill--lg">Contact me →</a>
          <a href={LINKS.cv} className="pill pill--line pill--lg">Download CV ↗</a>
        </div>
        <footer>
          <div className="contact__grid">
            <div className="stack gap-12"><span className="mono-s muted">Email</span><a href={LINKS.email}>{LINKS.emailText}</a></div>
            <div className="stack gap-12"><span className="mono-s muted">LinkedIn</span><a href={LINKS.linkedin}>laura-benavente-serrano ↗</a></div>
            <div className="stack gap-12"><span className="mono-s muted">Instagram</span><a href={LINKS.instagram}>@havingfunwithai_ ↗</a></div>
            <div className="stack gap-12"><span className="mono-s muted">GitHub</span><a href={LINKS.github}>laurabenaventeserrano ↗</a></div>
          </div>
          <div className="contact__bottom">
            <Logo />
            <span className="mono-s muted">Laura Benavente · Design Engineer</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

function ReadingProgress() {
  const p = useScrollProgress();
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}

/* Al cambiar de página vuelve arriba, salvo que la URL lleve ancla. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { requestAnimationFrame(() => scrollToEl(el)); return; }
    }
    scrollToTop();
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const isCase = pathname.startsWith('/work');
  useSmoothScroll();          // scroll suave en todo el sitio
  useScrollStory(pathname);   // apariciones y movimiento al hacer scroll, página a página
  // Favicon provisional: un rectángulo negro fijo. El favicon vivo de puntos (useLiveFavicon) queda apagado.
  // Por defecto: versión completa y sonido apagado, en cada visita (no se guarda la elección)
  const [short, setShortState] = useState(false);
  const setShort = (v: boolean) => { setShortState(v); scrollToTop(); };
  const [sound, setSound] = useState(false);
  const toggleSound = () => {
    if (organ.playing) { organ.stop(); setSound(false); }
    else organ.start().then(() => setSound(true)).catch(() => setSound(false));
  };
  useEffect(() => () => organ.stop(), []);
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Header short={short} onShort={setShort} sound={sound} onSound={toggleSound} />
      {isCase && <ReadingProgress />}
      <CursorLabel />
      <main id="main" className={short ? 'is-short' : undefined}>
        {short ? <ShortView /> : <Outlet />}
      </main>
      {!short && <Contact />}
      <AskLaura />
    </>
  );
}
