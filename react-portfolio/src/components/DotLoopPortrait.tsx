import { useEffect, useRef } from 'react';
import { DotLoopRenderer, DOT_LOOP_DEFAULTS, type DotLoopOptions, type PointerState } from '../lib/dotLoop';
import { usePrefersReducedMotion } from '../lib/hooks';
import '../styles/portrait.css';

interface Props {
  /** Vídeo ya procesado: gris, fondo blanco, en bucle de ida y vuelta (.mp4; se busca también el .webm). */
  src: string;
  /** Primer fotograma: carga al instante y es la versión quieta para movimiento reducido. */
  poster: string;
  label: string;
  /** Los ajustes que copias del banco de ajustes. */
  settings?: Partial<DotLoopOptions>;
  className?: string;
  /** Alineación horizontal del retrato dentro de su caja: 0 izquierda, 0,5 centro, 1 derecha. */
  anchorX?: number;
}

/*
  Retrato en puntos de un vídeo en bucle. Sin cámara, sin permisos, sin dependencias.
  El cursor dispersa los puntos igual que el campo de partículas; con la quietud, la cara vuelve.
  Escucha el ratón en toda la sección que lo contiene (en la portada, todo el hero).
  Un solo requestAnimationFrame y ningún estado de React por fotograma.
*/
export default function DotLoopPortrait({ src, poster, label, settings, className, anchorX = 0.5 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rendererRef = useRef<DotLoopRenderer | null>(null);
  const reduced = usePrefersReducedMotion();
  const opts: DotLoopOptions = { ...DOT_LOOP_DEFAULTS, ...settings };
  const optsKey = JSON.stringify(opts);

  useEffect(() => {
    if (!rendererRef.current && canvasRef.current) rendererRef.current = new DotLoopRenderer(canvasRef.current, opts);
    else rendererRef.current?.setOptions(opts);
    if (rendererRef.current) rendererRef.current.anchorX = anchorX;
    if (videoRef.current) videoRef.current.playbackRate = opts.speed;
  }, [optsKey, anchorX]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const canvas = canvasRef.current, video = videoRef.current, renderer = rendererRef.current;
    if (!canvas || !video || !renderer) return;

    const img = new Image();
    img.src = poster;

    const ptr: PointerState = { x: 0, y: 0, s: 0 };
    let energy = 0, lastMove = 0, lx: number | null = null, ly = 0, lt = 0;
    const target: HTMLElement = canvas.closest('section') ?? canvas.parentElement ?? canvas;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top, now = performance.now();
      if (lx !== null) {
        const dtm = Math.max(8, now - lt), dist = Math.hypot(x - lx, y - ly), speed = dist / dtm;
        energy = Math.min(1, energy + Math.min(0.2, speed * 0.05));
        ptr.x = x; ptr.y = y; ptr.s = Math.min(1, speed * 0.5);
        if (dist > 0.5) lastMove = now;
      }
      lx = x; ly = y; lt = now;
    };
    const onLeave = () => { lx = null; };
    if (!reduced) { target.addEventListener('pointermove', onMove); target.addEventListener('pointerleave', onLeave); }

    // El vídeo solo corre cuando el retrato está en pantalla
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (reduced) return;
      if (visible) video.play().catch(() => {}); else video.pause();
    });
    io.observe(canvas);
    video.playbackRate = renderer.opts.speed;
    if (reduced) video.pause(); else video.play().catch(() => {});

    let raf = 0, last = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(100, now - last); last = now;
      if (!visible || document.hidden) return;
      if (now - lastMove > 600) energy = Math.max(0, energy - dt / (renderer.opts.recover * 1000));
      ptr.s = Math.max(0, ptr.s - dt / 250);
      if (!reduced && video.readyState >= 2) renderer.render(video, video.videoWidth, video.videoHeight, now / 1000, dt, energy, ptr, false);
      else if (img.complete && img.naturalWidth) renderer.render(img, img.naturalWidth, img.naturalHeight, now / 1000, dt, energy, ptr, reduced);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      video.pause();
      target.removeEventListener('pointermove', onMove);
      target.removeEventListener('pointerleave', onLeave);
    };
  }, [poster, reduced]);

  return (
    <div className={`portrait ${className ?? ''}`}>
      <canvas ref={canvasRef} className="portrait__canvas" role="img" aria-label={label} />
      {/* El vídeo no se enseña: solo alimenta al lienzo. */}
      <video ref={videoRef} className="portrait__video" poster={poster} muted loop playsInline preload="auto" aria-hidden="true">
        {/* WebM (VP9) primero por peso; MP4 (H.264) para Safari y el resto */}
        <source src={src.replace(/\.mp4$/, '.webm')} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
