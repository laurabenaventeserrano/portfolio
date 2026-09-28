import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { LINKS, ROUTES } from '../content/site';
import { useScrollProgress } from '../lib/hooks';
import JellyLogo from './JellyLogo';
import CursorLabel from './CursorLabel';
import { useLiveFavicon } from '../motion/useLiveFavicon';
import { scrollToEl, scrollToTop, useSmoothScroll } from '../motion/useSmoothScroll';
import { useScrollStory } from '../motion/useScrollStory';

function Logo() {
  return (
    <Link to={ROUTES.home} className="logo" aria-label="Laura Benavente, home">
      <JellyLogo />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const links = (
    <>
      <NavLink to={ROUTES.story1} className="nav__link">Story 1</NavLink>
      <NavLink to={ROUTES.story2} className="nav__link">Story 2</NavLink>
      <NavLink to={ROUTES.story3} className="nav__link">Story 3</NavLink>
      <Link to={{ pathname: ROUTES.home, hash: '#lab' }} className="nav__link">Having fun with AI</Link>
      <a href={LINKS.cv} className="nav__link">CV</a>
    </>
  );

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <nav className="nav" aria-label="Main">
          {links}
          <a href={LINKS.email} className="pill pill--dark pill--sm">Contact me →</a>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {/* Hamburguesa: dos líneas que se cruzan en una X al abrir */}
          <span className="menu-btn__bars" aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu" data-open={open} aria-label="Main mobile">
        {links}
        <a href={LINKS.email}>Contact me →</a>
      </nav>
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
          <a href={LINKS.cv} className="pill pill--line pill--lg">CV ↗</a>
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
            <span className="mono-s muted">Laura Benavente · Senior Product Designer</span>
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
  const isStory = pathname.startsWith('/story');
  useSmoothScroll();          // scroll suave en todo el sitio
  useScrollStory(pathname);   // apariciones y movimiento al hacer scroll, página a página
  useLiveFavicon();           // el favicon de puntos se dispersa y vuelve de vez en cuando
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Header />
      {isStory && <ReadingProgress />}
      <CursorLabel />
      <main id="main">
        <Outlet />
      </main>
      <Contact />
    </>
  );
}
