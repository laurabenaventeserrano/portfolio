import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import DotLoopPortrait from '../DotLoopPortrait';
import { PORTRAIT, PORTRAIT_SETTINGS } from '../../content/portrait';
import { lockScroll } from '../../motion/useSmoothScroll';
import '../../styles/portrait-player.css';

/*
  El retrato en puntos para jugar (Laura, 26 Nov 2026): se abre a pantalla completa desde Having fun with AI.
  Es el retrato real, en vivo: el ratón (o el dedo) dispersa los puntos y, con la quietud, la cara vuelve.
  Esc, el botón o un clic fuera del retrato lo cierran. Mientras está abierto, el resto de la página queda inerte.
*/
export default function PortraitPlayer({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.getElementById('root');
    root?.setAttribute('inert', '');
    lockScroll(true);
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', key);
    return () => {
      root?.removeAttribute('inert');
      lockScroll(false);
      window.removeEventListener('keydown', key);
    };
  }, [onClose]);

  return createPortal(
    <div className="portrait-player" role="dialog" aria-modal="true" aria-labelledby="portrait-player-title">
      <div className="portrait-player__bar">
        <p id="portrait-player-title" className="portrait-player__title">Dot portrait <span className="mono-s">· Move over the face, then stop</span></p>
        <button ref={closeRef} type="button" className="pill pill--line pill--sm" data-cursor="Close" onClick={onClose}>Close ✕</button>
      </div>
      {/* El retrato escucha el ratón en toda esta sección */}
      <section className="portrait-player__stage" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <DotLoopPortrait {...PORTRAIT} settings={PORTRAIT_SETTINGS} className="portrait-player__portrait" />
      </section>
    </div>,
    document.body,
  );
}
