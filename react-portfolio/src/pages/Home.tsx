import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';
import DotLoopPortrait from '../components/DotLoopPortrait';
import { PORTRAIT, PORTRAIT_SETTINGS } from '../content/portrait';
import { Kicker, Tags, Video } from '../components/ui';
import LabSection from '../components/home/LabSection';
import { ABOUT_ROWS, EXPERIENCE, FACTS, LINKS, STEPS, WORK } from '../content/site';
import { useActiveSection, useTitle } from '../lib/hooks';
import { useHomeStory } from '../motion/useHomeStory';
import type { FieldOptions } from '../lib/particles';

const LAB_FIELD: FieldOptions = { count: 420, theme: 'dark', seed: 61, fade: 0.5 };

const DOTS = [
  ['hero', 'Hero'], ['how', 'How I work'], ['experience', 'Experience'], ['work', 'Work'],
  ['about', 'About'], ['lab', 'Playground'], ['contact', 'Contact'],
] as const;

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
  useTitle('Laura Benavente · Design Engineer');
  useHomeStory();

  return (
    <>
      <SectionDots />

      {/* HERO: tu retrato en puntos. El ratón lo dispersa, la quietud lo recompone */}
      <section id="hero" className="hero" data-motion="custom" aria-labelledby="hero-title">
        <DotLoopPortrait className="hero__portrait" src={PORTRAIT.src} poster={PORTRAIT.poster} label={PORTRAIT.label} settings={PORTRAIT_SETTINGS} scrollOut />
        <div className="container hero__inner">
          <Kicker>Senior Product Designer · B2B SaaS · AI</Kicker>
          <div className="hero__content">
            <h1 id="hero-title" className="h-hero">
              Hello! I’m Laura.<br />A Senior product<br />designer who engineers<span className="accent">.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560 }}>8+ years designing complex digital products across B2B SaaS, financial software and consumer technology.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href="#work" className="pill pill--dark pill--lg">See the work ↓</a>
              <a href={LINKS.cv} className="text-link">Download CV ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* FROM STRATEGY TO BUILD */}
      <section id="how" className="section" aria-labelledby="how-title">
        <div className="container stack gap-56">
          <div className="sec-head">
            <div className="sec-head__main">
              <Kicker>How I work</Kicker>
              <h2 id="how-title" className="h-xl">From strategy<br />to build.</h2>
            </div>
          </div>
          <ol className="steps" data-motion="custom">
            {STEPS.map((s) => (
              <li key={s.num} className="step">
                <span className="mono-s">{s.num}</span>
                <div className="media"><img src={s.img} alt={s.alt} loading="lazy" /></div>
                <h3 className="h-s">{s.name}</h3>
                <p className="mono-s muted" style={{ fontSize: 10, lineHeight: 1.6 }}>{s.caption}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section section--line" aria-labelledby="experience-title">
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
      <section id="work" className="section section--line" aria-labelledby="work-title">
        <div className="container stack gap-48">
          <div className="sec-head">
            <div className="sec-head__main">
              <Kicker>Work · 04 cases</Kicker>
              <h2 id="work-title" className="h-xl">Selected work</h2>
            </div>
            <p className="mono-s muted">Wolters Kluwer · Adsolut · frog / Telefónica</p>
          </div>

          <div className="tiles">
            {WORK.map((w) => (
              <Link key={w.num} to={w.to} className="tile" data-cursor="Explore">
                <div className="tile__media">
                  {w.video ? <Video src={w.video} poster={w.img} label={w.alt} /> : <img src={w.img} alt={w.alt} loading="lazy" />}
                  <span className="status tile__status">Shipped</span>
                </div>
                <div className="tile__body">
                  <div className="stack gap-16">
                    <h3 className="tile__title">{w.title}</h3>
                    <span className="kicker" style={{ color: 'var(--muted-d)' }}>{w.num} · {w.company}</span>
                    <p style={{ color: 'var(--body-d)', fontSize: 17 }}>{w.text}</p>
                    <div className="is-dark"><Tags items={w.tags} /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section--accent" aria-labelledby="about-title">
        <div className="container about">
          <div className="about__photo">
            <img src="/images/laurabenavente.jpeg" alt="Laura Benavente, de chaqueta de cuero y auriculares al cuello, delante de un muro vegetal." loading="lazy" />
          </div>
          <div className="stack gap-48" style={{ justifyContent: 'space-between' }}>
            <div className="stack gap-20">
              <Kicker>About me</Kicker>
              <h2 id="about-title" className="h-l balance">I’m endlessly curious about the world around me.</h2>
              <p className="lead">I like design, technology, nature, strange ideas and the little connections between them.</p>
              <p className="lead">I’m a Design Engineer and Senior Product Designer with 8+ years of experience designing complex digital products. I combine UX strategy, systems thinking, AI and code to create and build better product experiences.</p>
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
          <Kicker tone="accent">The lab</Kicker>
          <p className="statement__text">From systems thinking<br />to interaction,<br />from prototype<br />to code</p>
        </div>
      </section>

      {/* PLAYGROUND (the lab): sin cambios */}
      <LabSection deal />
    </>
  );
}
