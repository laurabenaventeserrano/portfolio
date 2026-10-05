import { useEffect, useState } from 'react';
import seo from '../content/seo.json';

export function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setReduced(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/** Devuelve el id de la sección que ocupa la franja central de la ventana. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids.join(',')]);
  return active;
}

/** Progreso de lectura de 0 a 1. */
export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return p;
}

export function useTitle(title: string) {
  useEffect(() => { document.title = title; }, [title]);
}

/* Título, descripción y canónica de la página actual, desde src/content/seo.json:
   los mismos que el HTML estático de cada página (scripts/seo-pages.mjs), también al navegar dentro de la app. */
function setMeta(selector: string, attr: string, value: string) {
  document.querySelectorAll(selector).forEach((el) => el.setAttribute(attr, value));
}
export function useSeo(pathname: string) {
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    const page = (seo.pages as Record<string, { title: string; description: string }>)[path];
    if (!page) return;
    const url = seo.site + path;
    document.title = page.title;
    setMeta('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]', 'content', page.description);
    setMeta('meta[property="og:title"], meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [pathname]);
}

/* Páginas que no existen: que no se indexen */
export function useNoIndex() {
  useEffect(() => {
    const m = document.createElement('meta');
    m.name = 'robots'; m.content = 'noindex';
    document.head.appendChild(m);
    return () => m.remove();
  }, []);
}
