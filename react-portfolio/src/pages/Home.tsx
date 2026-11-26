import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';
import DotLoopPortrait from '../components/DotLoopPortrait';
import { PORTRAIT, PORTRAIT_SETTINGS } from '../content/portrait';
import { Kicker, Tags, Video } from '../components/ui';
import LabSection from '../components/home/LabSection';
import CraftSection from '../components/home/CraftSection';
import { CRAFT } from '../content/craft';
import { ABOUT_ROWS, CATEGORIES, EXPERIENCE, FACTS, LINKS, WORK, type Category } from '../content/site';
import { useActiveSection } from '../lib/hooks';
import { useHomeStory } from '../motion/useHomeStory';
import type { FieldOptions } from '../lib/particles';

const LAB_FIELD: FieldOptions = { count: 420, theme: 'dark', seed: 61, fade: 0.5 };

const DOTS: [string, string][] = [
  ['hero', 'Hero'], ['experience', 'Experience'], ['work', 'Work'],
  ...(CRAFT.length ? [['craft', 'Craft'] as [string, string]] : []),
  ['about', 'About'], ['lab', 'Playground'], ['contact', 'Contact'],
];

/* Filtro de Selected work: las cuatro categorías, Craft incluida */
function WorkFilter({ value, onChange }: { value: Category | null; onChange: (c: Category | null) => void }) {
  return (
    <div className="switch work-filter" role="group" aria-label="Filter the work by category">
      <button type="button" className="switch__opt" aria-pressed={value === null} onClick={() => onChange(null)} data-cursor="Show all">All</button>
      {CATEGORIES.map((c) => (
        <button key={c} type="button" className="switch__opt" aria-pressed={value === c} onClick={() => onChange(c)} data-cursor="Filter">{c}</button>
      ))}
    </div>
  );
}

function SectionDots() {
  const active = useActiveSection(DOTS.map((d) => d[0]));
  return (
    <nav className="dots" aria-label="Sections">
      <ol>
        {DOTS.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} aria-label={label} aria-current={active === id}>
              <span className="dots__dot" />
            </a>
            {active === id && <span className="dots__label mono-s" aria-hidden="true">{label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Home() {
  useHomeStory();
  const [category, setCategory] = useState<Category | null>(null);
  // Un vídeo que no existe o no carga deja la imagen en su lugar
  const [noVideo, setNoVideo] = useState<Set<string>>(new Set());
  const work = category ? WORK.filter((w) => w.categories.includes(category)) : WORK;

  return (
    <>
      <SectionDots />

      {/* HERO: tu retrato en puntos. El ratón lo dispersa, la quietud lo recompone */}
      <section id="hero" className="hero" data-motion="custom" aria-labelledby="hero-title">
        <DotLoopPortrait className="hero__portrait" src={PORTRAIT.src} poster={PORTRAIT.poster} label={PORTRAIT.label} settings={PORTRAIT_SETTINGS} scrollOut />
        <div className="container hero__inner">
          <Kicker>Senior Product Designer · Design engineer · B2B SaaS · AI</Kicker>
          <div className="hero__content">
            <h1 id="hero-title" className="h-hero">
              Hello! I’m Laura.<br />A product designer<br />who engineers<span className="accent">.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560 }}>8+ years designing complex digital products across B2B SaaS, financial software and consumer technology.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href="#work" className="pill pill--dark pill--lg">See the work ↓</a>
              <a href={LINKS.cv} className="text-link">Download CV ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="container stack gap-48">
          <div className="sec-head">
            <div className="sec-head__main">
              <Kicker>Experience</Kicker>
              <h2 id="experience-title" className="h-l balance">8+ years designing complex digital products.</h2>
            </div>
            <p className="mono-s muted">B2B SaaS · Financial software · Consumer technology</p>
          </div>
          <ol className="experience">
            {EXPERIENCE.map((e) => (
              <li key={e.company} className="job">
                <span className="job__years mono-s">{e.years}</span>
                <div className="job__head">
                  <h3 className="h-m">{e.company}</h3>
                  <p className="job__role">{e.role}</p>
                </div>
                <div className="stack gap-16">
                  <p className="body">{e.text}</p>
                  <Tags items={e.tags} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SELECTED WORK: cuatro casos, cada uno con su estado */}
      <section id="work" className="section" aria-labelledby="work-title">
        <div className="container stack gap-48">
          <div className="sec-head">
            <div className="sec-head__main">
              <Kicker>Work · 05 cases</Kicker>
              <h2 id="work-title" className="h-xl">Selected work</h2>
            </div>
            <p className="mono-s muted">Wolters Kluwer · Adsolut · frog / Telefónica</p>
          </div>

          <WorkFilter value={category} onChange={setCategory} />
          <p className="sr-only" aria-live="polite">{category ? `${work.length} ${work.length === 1 ? 'case' : 'cases'} in ${category}` : ''}</p>

          <div className="tiles">
            {work.map((w) => (
              <Link key={w.to} to={w.to} className="tile" data-cursor={w.cursor ?? 'Explore'}>
                <div className="tile__media">
                  {w.video && !noVideo.has(w.to)
                    ? <Video src={w.video} poster={w.img} label={w.alt} onError={() => setNoVideo((f) => new Set(f).add(w.to))} />
                    : <img src={w.img} alt={w.alt} loading="lazy" />}
                  {w.status && <span className="status tile__status">{w.status}</span>}
                </div>
                <div className="tile__body">
                  <div className="stack gap-16">
                    <h3 className="tile__title">{w.title}</h3>
                    <span className="kicker" style={{ color: 'var(--muted-d)' }}>{w.eyebrow ?? `${w.num} · ${w.company}`}</span>
                    {w.headline && <p style={{ color: 'var(--body-d)', fontSize: 17 }}>{w.headline}</p>}
                    <p style={{ color: 'var(--body-d)', fontSize: 17 }}>{w.text}</p>
                    {w.tags.length > 0 && <div className="is-dark"><Tags items={w.tags} /></div>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT: galería de vídeos e imágenes (src/content/craft.ts) */}
      <CraftSection />

      {/* ABOUT */}
      <section id="about" className="section section--accent" aria-labelledby="about-title">
        <div className="container about">
          <div className="about__photo">
            <img src="/images/laurabenavente.jpeg" alt="Laura Benavente in a leather jacket with headphones around the neck, in front of a plant wall." loading="lazy" />
          </div>
          <div className="stack gap-48" style={{ justifyContent: 'space-between' }}>
            <div className="stack gap-20">
              <Kicker>About me</Kicker>
              <h2 id="about-title" className="h-l balance">I’m endlessly curious about the world around me.</h2>
              <p className="lead">I like design, technology, nature, strange ideas and the little connections between them.</p>
            </div>
            <div className="stack gap-32">
              <dl className="about__rows">
                {ABOUT_ROWS.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <dl className="facts">
                {FACTS.map(([k, v]) => (
                  <div key={k} className="fact"><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement section section--dark is-dark" data-motion="custom" aria-label="The lab">
        <ParticleCanvas className="statement__field" options={LAB_FIELD} mode="disperso" />
        <div className="container stack gap-24" style={{ position: 'relative' }}>
          <p className="statement__text">I think in systems, design experiences, work with AI and build with code</p>
        </div>
      </section>

      {/* PLAYGROUND (the lab): sin cambios */}
      <LabSection />
    </>
  );
}
