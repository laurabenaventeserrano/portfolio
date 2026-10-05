import { Link } from 'react-router-dom';
import { EXPERIENCE, LINKS, WORK } from '../content/site';

/*
  Versión corta: todo el portfolio en una sola pantalla.
  Izquierda: quién soy y cómo contactarme. Derecha: los casos con su resultado y la experiencia.
  Mismos colores, prisma y botones que la versión completa; sin scroll en escritorio.
  Un caso sin métrica (el Concept) muestra su estado en lugar de un número.
*/
export default function ShortView() {
  return (
    <section className="short" aria-label="Short version">
      <div className="short__inner">
        <div className="short__intro">
          <p className="kicker">Senior Product Designer · Design engineer · B2B SaaS · AI</p>
          <h1 className="short__title">Hello! I’m Laura.<br />A product designer who engineers.</h1>
          <p className="short__lead">8+ years designing complex digital products across B2B SaaS, financial software and consumer technology.</p>
          <div className="short__actions">
            <a href={LINKS.email} className="pill pill--dark">Contact me →</a>
            <a href={LINKS.cv} className="pill pill--line">Download CV ↗</a>
            <a href={LINKS.linkedin} className="text-link">LinkedIn ↗</a>
          </div>
        </div>

        <div className="short__side">
          <p className="short__label">Selected work · {String(WORK.length).padStart(2, '0')} cases</p>
          <ol className="short__work">
            {WORK.map((w) => (
              <li key={w.num}>
                <Link to={w.to} className="short__case">
                  <span className="short__num">{w.num}</span>
                  <span className="short__case-main">
                    <span className="short__case-title">{w.title}</span>
                    <span className="short__case-co">{w.company}</span>
                  </span>
                  <span className="short__metric">
                    {w.metric
                      ? <><span className="short__metric-v">{w.metric}</span><span className="short__metric-l">{w.metricLabel}</span></>
                      : <span className="short__metric-l">{w.status}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <p className="short__label">Experience</p>
          <ul className="short__jobs">
            {EXPERIENCE.map((j) => (
              <li key={j.company}>
                <span className="short__years">{j.years}</span>
                <span className="short__job">{j.company}</span>
                <span className="short__role">{j.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
