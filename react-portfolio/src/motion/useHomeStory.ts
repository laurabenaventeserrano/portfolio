import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, MQ } from './gsap';

/*
  Coreografía propia de la portada. Cada sección tiene un solo gesto protagonista.

  Hero        Los textos están quietos. Al bajar, los puntos del retrato
              se dispersan (eso lo hace DotLoopPortrait con scrollOut).
  Cinta       Se acelera con el scroll y cambia de sentido si subes. La banda lila ondula como
              gelatina, salta con el scroll y rebota hasta calmarse.            (altshift + guillaumezhu)
  Pasos       Las tarjetas se van colocando en la fila una detrás de otra al hacer scroll.
  Experience  Las líneas prisma se dibujan de izquierda a derecha al llegar.
  Work, Craft Las tarjetas suben 28 px y aparecen, escalonadas (motion.css).
  About       La foto se destapa de abajo arriba y se desplaza más lenta que la página.
  Statement   El fondo pasa de blanco a negro. La frase está quieta.

  Feedback: los textos no se mueven. Solo se mueven elementos (tarjetas, fondos, imágenes).

  El lab ya no tiene movimiento propio: sus vídeos se reproducen al entrar en pantalla.
*/
export function useHomeStory() {
  useLayoutEffect(() => {
    const $ = <T extends Element = HTMLElement>(sel: string) => document.querySelector<T>(sel);
    const $$ = <T extends Element = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));
    const mm = gsap.matchMedia();

    mm.add(MQ.any, () => {
      const cleanups: (() => void)[] = [];
      /* ---------- Hero ---------- */
      const hero = $('#hero');
      const title = $('#hero-title');
      if (hero && title) {
        // Los textos del hero no tienen animación.
      }

      /* ---------- Cinta ---------- */
      const ticker = $('.ticker');
      const track = $('.ticker__track');
      if (ticker && track) {
        ticker.classList.add('ticker--js');
        const loop = gsap.to(track, { xPercent: -50, duration: 48, ease: 'none', repeat: -1 });
        loop.totalTime(loop.duration() * 50); // margen para poder ir hacia atrás sin tope
        // La velocidad del scroll empuja la cinta; poco a poco vuelve a su ritmo, en el último sentido
        let dir = 1, target = 1, speed = 1;
        ScrollTrigger.create({
          trigger: document.body, start: 0, end: 'max',
          onUpdate: (self) => {
            dir = self.direction;
            target = dir * (1 + Math.min(6, Math.abs(self.getVelocity()) / 350));
          },
        });
        // Gelatina (guillaumezhu.com): la banda lila entera ondula como una cinta de gelatina.
        // La ola recorre la banda; el texto va encima, recto y quieto en vertical, para que se lea.
        // En reposo la ola es suave; al hacer scroll crece de golpe y rebota como un muelle hasta calmarse.
        const PAD = 22;              // margen por arriba y por abajo para que la ola quepa, px
        const WAVE = 520;            // largo de la ola, px
        const REST = 4, MAX = 16;    // alto de la ola en reposo y como mucho, px
        const NS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('class', 'ticker__ribbon'); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('preserveAspectRatio', 'none');
        const path = document.createElementNS(NS, 'path');
        svg.appendChild(path); ticker.prepend(svg);

        let W = 0, H = 0;
        const measure = () => {
          W = ticker.clientWidth; H = ticker.clientHeight;
          svg.setAttribute('viewBox', `0 0 ${W} ${H + PAD * 2}`);
        };
        measure();
        window.addEventListener('resize', measure);
        let amp = REST, ampV = 0, t = 0, kick = 0;
        const wave = (x: number) => Math.sin((x / WAVE) * Math.PI * 2 + t * 2.2) * amp;

        const ease = () => {
          speed += (target - speed) * 0.1;
          target += (dir - target) * 0.04;
          loop.timeScale(speed);

          // Muelle poco amortiguado: la ola sube con la velocidad del scroll y rebota al bajar
          const want = Math.min(MAX, REST + (Math.abs(speed) - 1) * 3.4) + kick;
          ampV = (ampV + (want - amp) * 0.09) * 0.84;
          amp += ampV;
          kick *= 0.9;
          t += gsap.ticker.deltaRatio() / 60;

          // La banda: borde de arriba y de abajo siguen la misma ola
          let top = '', bottom = '';
          const step = 24;
          for (let x = 0; x <= W + step; x += step) {
            const y = wave(x);
            top += `${x === 0 ? 'M' : 'L'}${x},${(PAD + y).toFixed(1)} `;
            bottom = `L${x},${(PAD + H + y).toFixed(1)} ` + bottom;
          }
          path.setAttribute('d', `${top}${bottom}Z`);

        };
        // Un toque al pasar el ratón por la cinta: salta
        const poke = () => { kick = 7; };
        ticker.addEventListener('pointerenter', poke);
        gsap.ticker.add(ease);
        cleanups.push(() => {
          gsap.ticker.remove(ease); ticker.removeEventListener('pointerenter', poke);
          window.removeEventListener('resize', measure); svg.remove(); ticker.classList.remove('ticker--js');
        });
      }

      /* ---------- Entradas de elementos (joonas.wtf): tarjetas, piezas de Craft y líneas de Experience ----------
         Se marcan aquí, con JS, para que sin JS todo se vea. Cada elemento entra una sola vez.
         Los que llegan a la vez entran escalonados (90 ms). Las tarjetas que React pinta después
         (por ejemplo al filtrar Selected work) no llevan marca y se ven directamente. */
      const root = document.documentElement;
      root.classList.add('motion-ok');
      const revealed = $$('.tiles .tile, .craft-grid__item, .experience .job');
      revealed.forEach((el) => {
        // Lo que ya está en pantalla al cargar no se esconde
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
        el.dataset.reveal = 'wait';
      });
      const io = new IntersectionObserver((entries) => {
        entries.filter((e) => e.isIntersecting).forEach((e, i) => {
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${i * 90}ms`;
          el.dataset.reveal = 'in';
          io.unobserve(el);
          // Quita el retraso al acabar, para que el hover responda al instante
          window.setTimeout(() => { el.style.transitionDelay = ''; }, 1200 + i * 90);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
      revealed.forEach((el) => { if (el.dataset.reveal === 'wait') io.observe(el); });
      cleanups.push(() => {
        io.disconnect(); root.classList.remove('motion-ok');
        revealed.forEach((el) => { el.removeAttribute('data-reveal'); el.style.transitionDelay = ''; });
      });

      /* ---------- About: foto ---------- */
      const photo = $('.about__photo');
      if (photo) {
        const img = photo.querySelector('img');
        gsap.fromTo(photo, { clipPath: 'inset(100% 0% 0% 0% round 2px)' }, {
          clipPath: 'inset(0% 0% 0% 0% round 2px)', ease: 'none',
          scrollTrigger: { trigger: photo, start: 'top 95%', end: 'top 35%', scrub: 0.6 },
        });
        if (img) gsap.fromTo(img, { yPercent: -8, scale: 1.2 }, {
          yPercent: 8, scale: 1.05, ease: 'none',
          scrollTrigger: { trigger: photo, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }

      /* ---------- Statement ---------- */
      const statement = $('.statement');
      const text = $('.statement__text');
      if (statement && text) {
        // El fondo pasa de blanco a negro. El texto no se anima: es negro mientras el fondo es claro y cambia
        // a blanco de golpe en el punto en que el fondo cruza el gris medio (#777). Así nunca baja de 4,5:1
        // (auditoría de accesibilidad, 26 Nov 2026). Antes el texto era blanco desde el principio: invisible al entrar.
        const FLIP = (255 - 0x77) / (255 - 0x0e);
        text.classList.add('is-ink');
        gsap.fromTo(statement, { backgroundColor: '#ffffff' }, {
          backgroundColor: '#0e0e0c', ease: 'none',
          scrollTrigger: { trigger: statement, start: 'top 90%', end: 'top 30%', scrub: true },
          onUpdate(this: gsap.core.Tween) { text.classList.toggle('is-ink', this.progress() < FLIP); },
        });
        cleanups.push(() => text.classList.remove('is-ink'));
        gsap.from(statement.querySelector('.statement__field'), {
          autoAlpha: 0, ease: 'none',
          scrollTrigger: { trigger: statement, start: 'top 50%', end: 'top 10%', scrub: true },
        });
      }
      return () => cleanups.forEach((f) => f());
    });

    /* ---------- Pasos: las tarjetas se van colocando en su sitio al hacer scroll ----------
       Cada una llega desde abajo, un poco girada, y se asienta en la fila después de la anterior.
       Va atado al scroll: si subes, se retiran en orden inverso. */
    mm.add('(min-width: 701px) and (prefers-reduced-motion: no-preference)', () => {
      const list = $('#how .steps');
      const steps = $$('#how .step');
      if (!list || !steps.length) return;
      gsap.from(steps, {
        y: 140, rotation: (i: number) => (i % 2 ? 7 : -7), autoAlpha: 0,
        ease: 'power3.out', stagger: 0.35,
        scrollTrigger: { trigger: list, start: 'top 95%', end: 'bottom 60%', scrub: 0.8 },
      });
    });

    /* ---------- Pasos en móvil: cada tarjeta se coloca al llegar a ella ---------- */
    mm.add('(max-width: 700px) and (prefers-reduced-motion: no-preference)', () => {
      $$('#how .step').forEach((step, i) => gsap.from(step, {
        y: 100, rotation: i % 2 ? 6 : -6, autoAlpha: 0, ease: 'power3.out',
        scrollTrigger: { trigger: step, start: 'top 98%', end: 'top 65%', scrub: 0.8 },
      }));
    });

    return () => mm.revert();
  }, []);
}

