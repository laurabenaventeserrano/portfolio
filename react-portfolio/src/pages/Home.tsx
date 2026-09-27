import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';
import DotLoopPortrait from '../components/DotLoopPortrait';
import { PORTRAIT, PORTRAIT_SETTINGS } from '../content/portrait';
import { Kicker, Tags, Video } from '../components/ui';
import WaysSection from '../components/home/WaysSection';
import LabSection from '../components/home/LabSection';
import { FACTS, LINKS, STEPS, STORIES, TICKER } from '../content/site';
import { useActiveSection, useTitle } from '../lib/hooks';
import type { FieldOptions } from '../lib/particles';

const LAB_FIELD: FieldOptions = { count: 420, theme: 'dark', seed: 61, fade: 0.5 };

const DOTS = [
  ['hero', 'Hero'], ['how', 'How I work'], ['ways', 'Approach'], ['stories', 'Stories'],
  ['about', 'About'], ['lab', 'Lab'], ['contact', 'Contact'],
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
  useTitle('Laura Benavente · Senior Product Designer');
  const [s1, s2, s3] = STORIES;

  return (
    <>
      <SectionDots />

      {/* HERO: tu retrato en puntos. El ratón lo dispersa, la quietud lo recompone */}
      <section id="hero" className="hero" aria-labelledby="hero-title">
        <DotLoopPortrait className="hero__portrait" src={PORTRAIT.src} poster={PORTRAIT.poster} label={PORTRAIT.label} settings={PORTRAIT_SETTINGS} />
        <div className="container hero__inner">
          <Kicker>Senior Product Designer · B2B SaaS · AI</Kicker>
          <div className="hero__content">
            <h1 id="hero-title" className="h-hero">
              Hello! I’m Laura.<br />A product designer<br />who engineers<span className="accent">.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560 }}>8+ years designing complex digital products across B2B SaaS, financial software and consumer technology.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href="#stories" className="pill pill--dark pill--lg">See the stories ↓</a>
              <a href={LINKS.cv} className="text-link">Download CV ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* CINTA */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((w, i) => (
            <span key={i} className="ticker__item">{w}<span>✦</span></span>
          ))}
        </div>
      </div>

      {/* FROM STRATEGY TO BUILD */}
      <section id="how" className="section" aria-labelledby="how-title">
        <div className="container stack gap-56">
          <div className="sec-head__main">
            <Kicker>How I work</Kicker>
            <h2 id="how-title" className="h-xl">From strategy<br />to build.</h2>
          </div>
          <ol className="steps">
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

      {/* THREE WAYS I APPROACH PRODUCT PROBLEMS */}
      <WaysSection />

      {/* STORIES */}
      <section id="stories" className="section" aria-labelledby="stories-title">
        <div className="container stack gap-48">
          <div className="sec-head">
            <div className="sec-head__main">
              <Kicker>Stories</Kicker>
              <h2 id="stories-title" className="h-xl">Selected stories</h2>
            </div>
            <p className="mono-s muted">Wolters Kluwer · Movistar</p>
          </div>

          <Link to={s1.to} className="tile tile--wide">
            <div className="tile__media"><Video src={s1.video!} poster={s1.poster} label={s1.alt} /></div>
            <div className="tile__body">
              <div className="stack gap-16">
                <span className="kicker kicker--muted" style={{ color: 'var(--muted-d)' }}>{s1.label}</span>
                <h3 className="h-m">{s1.title}</h3>
                <p style={{ color: 'var(--body-d)', fontSize: 18 }}>{s1.text}</p>
                <div className="is-dark"><Tags items={s1.tags} /></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
                <div className="stack gap-12">
                  <span className="tile__metric">{s1.metric}</span>
                  <span className="mono-s" style={{ color: 'var(--muted-d)' }}>{s1.metricLabel}</span>
                </div>
                <span className="tile__cta">Read story →</span>
              </div>
            </div>
          </Link>

          <div className="tiles">
            {[s2, s3].map((s) => (
              <Link key={s.label} to={s.to} className="tile">
                <div className="tile__media">
                  {s.video ? <Video src={s.video} poster={s.poster} label={s.alt} /> : <img src={s.img} alt={s.alt} loading="lazy" />}
                </div>
                <div className="tile__body">
                  <div className="stack gap-12">
                    <span className="kicker" style={{ color: 'var(--muted-d)' }}>{s.label}</span>
                    <h3 className="h-m">{s.title}</h3>
                    <p style={{ color: 'var(--body-d)', fontSize: 16 }}>{s.text}</p>
                    <div className="is-dark"><Tags items={s.tags} /></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
                    <div className="stack gap-12">
                      <span className="tile__metric">{s.metric}</span>
                      <span className="mono-s" style={{ color: 'var(--muted-d)' }}>{s.metricLabel}</span>
                    </div>
                    <span className="tile__cta">Read story →</span>
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
            </div>
            <dl className="facts">
              {FACTS.map(([k, v]) => (
                <div key={k} className="fact"><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement section section--dark is-dark" aria-label="The lab">
        <ParticleCanvas className="statement__field" options={LAB_FIELD} mode="disperso" />
        <div className="container stack gap-24" style={{ position: 'relative' }}>
          <Kicker tone="accent">The lab</Kicker>
          <p className="statement__text">Small experiments.<br />Working prototypes.<br />Serious questions.</p>
        </div>
      </section>

      {/* LAB */}
      <LabSection />
    </>
  );
}
