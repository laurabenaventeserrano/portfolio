import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import LabSection from '../components/home/LabSection';
import { useSmoothScroll } from '../motion/useSmoothScroll';
import '../styles/global.css';

/*
  Página de pruebas del movimiento (solo en desarrollo).
  La sección es la real de la portada, con el movimiento encendido: <LabSection />.
*/
function Lab() {
  useSmoothScroll();
  return (
    <main style={{ ['--header-h' as string]: '0px' }}>
      <section className="section">
        <div className="container stack gap-24" style={{ minHeight: '70svh', justifyContent: 'center' }}>
          <p className="kicker">( Motion lab · test the rhythm )</p>
          <h1 className="h-hero">Scroll slowly<span className="accent">.</span></h1>
          <p className="lead">The lab cards sit on the grid; their videos play when they come into view.</p>
          <p className="mono-s muted">↓</p>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-16" style={{ minHeight: '40svh', justifyContent: 'center' }}>
          <p className="kicker">( Selected work would sit here )</p>
        </div>
      </section>

      <LabSection />

      <section className="section section--dark is-dark">
        <div className="container stack gap-16" style={{ minHeight: '60svh', justifyContent: 'center' }}>
          <p className="kicker">( End of the test )</p>
          <p className="lead">Scroll back up to see it rewind.</p>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><MemoryRouter><Lab /></MemoryRouter></StrictMode>);
