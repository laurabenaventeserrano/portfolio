import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DotLoopPortrait from '../components/DotLoopPortrait';
import { PORTRAIT, PORTRAIT_SETTINGS } from '../content/portrait';
import '../styles/global.css';

/* Página de prueba aislada (solo en desarrollo): el retrato con los ajustes de src/content/portrait.ts. */
function Lab() {
  return (
    <section className="container section stack gap-32" style={{ minHeight: '100vh' }}>
      <p className="kicker">( Portrait lab · dev only · move your mouse over the face, then stop )</p>
      <DotLoopPortrait {...PORTRAIT} settings={PORTRAIT_SETTINGS} className="lab-portrait" />
      <style>{'.lab-portrait{width:min(100%,520px);height:min(80vh,640px)}'}</style>
    </section>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><Lab /></StrictMode>);
