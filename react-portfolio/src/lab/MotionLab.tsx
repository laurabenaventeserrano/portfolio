import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import WaysSection from '../components/home/WaysSection';
import LabSection from '../components/home/LabSection';
import { useSmoothScroll } from '../motion/useSmoothScroll';
import '../styles/global.css';

/*
  Página de pruebas del movimiento (solo en desarrollo).
  Las dos secciones son las reales de la portada, con el movimiento encendido.
  Cuando lo apruebes, en Home.tsx basta con <WaysSection stacked /> y <LabSection deal />.
  Para probar el abanico con más pases, copia un bloque .deal en LabSection.tsx.
*/
function Lab() {
  useSmoothScroll();
  return (
    <main style={{ ['--header-h' as string]: '0px' }}>
      <section className="section">
        <div className="container stack gap-24" style={{ minHeight: '70svh', justifyContent: 'center' }}>
          <p className="kicker">( Motion lab · two pieces to test the rhythm )</p>
          <h1 className="h-hero">Scroll slowly<span className="accent">.</span></h1>
          <p className="lead">First, the three ways stack on top of each other. Then all the lab passes open into a fan together and flip over together. Scroll back up and everything rewinds.</p>
          <p className="mono-s muted">↓</p>
        </div>
      </section>

      <WaysSection stacked />

      <section className="section">
        <div className="container stack gap-16" style={{ minHeight: '40svh', justifyContent: 'center' }}>
          <p className="kicker">( Selected stories would sit here )</p>
        </div>
      </section>

      <LabSection deal />

      <section className="section section--dark is-dark">
        <div className="container stack gap-16" style={{ minHeight: '60svh', justifyContent: 'center' }}>
          <p className="kicker">( End of the test )</p>
          <p className="lead">Scroll back up to see both pieces rewind.</p>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><MemoryRouter><Lab /></MemoryRouter></StrictMode>);
