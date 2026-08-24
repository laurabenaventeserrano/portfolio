import { useEffect } from 'react'

/**
 * Direct port of the static site's main.js, scoped to the Home page root.
 * Kept as one effect — not split into one hook per behaviour — because the
 * original deliberately shares a single scroll listener across parallax,
 * portrait mask and eased scroll ("the skill pide un solo listener de scroll
 * para toda la pagina, no uno por pieza"). Splitting it would reintroduce the
 * per-piece listeners the original explicitly avoided.
 */
export function useHomeMotion(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const docEl = document.documentElement
    const sel = '.rv, .shot'
    const aboutSel = '.about li .ln'
    const hero = root.querySelector<HTMLElement>('#hero')

    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups: Array<() => void> = []

    function revealAll() {
      root!.querySelectorAll(sel + ', ' + aboutSel).forEach((el) => el.classList.add('in'))
    }

    if (RM || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    docEl.classList.add('js')

    // Typewriter intro
    const twL = Array.from(root.querySelectorAll<HTMLElement>('.tw-l'))
    const twLive = root.querySelector<HTMLElement>('.tw-live')
    const twStat = root.querySelector<HTMLElement>('.tw-static')
    if (twL.length && twLive && twStat) {
      function reserva() {
        docEl.classList.remove('tw')
        const h = twStat!.getBoundingClientRect().height
        docEl.classList.add('tw')
        twLive!.style.minHeight = h + 'px'
      }
      reserva()
      let rt: number
      const onResize = () => {
        window.clearTimeout(rt)
        rt = window.setTimeout(reserva, 180)
      }
      window.addEventListener('resize', onResize)
      cleanups.push(() => window.removeEventListener('resize', onResize))

      const lineas = ['Hello, I’m Laura Benavente', 'A Senior product Designer', 'based in Madrid']
      const cursor = document.createElement('span')
      cursor.className = 'tw-cursor'
      let iL = 0
      let iC = 0

      function escribe() {
        const t = lineas[iL]
        if (!t || !twL[iL]) return
        iC++
        twL[iL].textContent = t.slice(0, iC)
        twL[iL].appendChild(cursor)
        if (iC < t.length) {
          window.setTimeout(escribe, 68)
          return
        }
        iL++
        iC = 0
        if (iL < lineas.length && twL[iL]) window.setTimeout(escribe, 520)
      }

      twL[0].appendChild(cursor)
      window.setTimeout(escribe, 600)
    }

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        function enciendeHero() {
          if (!hero || hero.classList.contains('lit')) return
          const r = hero.getBoundingClientRect()
          if (r.top < window.innerHeight * 0.75 && r.bottom > 0) {
            hero.classList.add('lit')
            window.removeEventListener('scroll', enciendeHero)
          }
        }
        window.addEventListener('scroll', enciendeHero, { passive: true })
        cleanups.push(() => window.removeEventListener('scroll', enciendeHero))
        enciendeHero()
        start()
      })
      cleanups.push(() => cancelAnimationFrame(raf2))
    })
    cleanups.push(() => cancelAnimationFrame(raf1))

    function start() {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add('in')
              io.unobserve(x.target)
            }
          })
        },
        { rootMargin: '0px 0px -22% 0px' },
      )

      let watched = Array.from(root!.querySelectorAll(sel))

      const tarde = Array.from(root!.querySelectorAll('.story-hero__media.rv'))
      let io2: IntersectionObserver | null = null
      if (tarde.length) {
        io2 = new IntersectionObserver(
          (entries) => {
            entries.forEach((x) => {
              if (x.isIntersecting) {
                x.target.classList.add('in')
                io2!.unobserve(x.target)
              }
            })
          },
          { rootMargin: '0px 0px -45% 0px' },
        )
        tarde.forEach((el) => {
          io2!.observe(el)
          const i = watched.indexOf(el)
          if (i > -1) watched.splice(i, 1)
        })
      }

      watched.forEach((el) => io.observe(el))

      const failSafe = window.setTimeout(() => {
        const limit = window.innerHeight
        watched.concat(tarde).forEach((el) => {
          if (!el.classList.contains('in') && el.getBoundingClientRect().top < limit) {
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      }, 4000)
      cleanups.push(() => window.clearTimeout(failSafe))
      cleanups.push(() => {
        io.disconnect()
        io2?.disconnect()
      })

      // section counter
      const counterN = document.getElementById('counter-n')
      if (counterN) {
        const chapters = ['hero', 'story-1', 'story-2', 'story-3', 'lab', 'connect']
        const chapterEls = chapters.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
        const cio = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (en.isIntersecting) {
                const idx = chapterEls.indexOf(en.target as HTMLElement)
                if (idx > -1) counterN.textContent = String(idx + 1).padStart(2, '0')
              }
            })
          },
          { rootMargin: '-45% 0px -45% 0px' },
        )
        chapterEls.forEach((el) => cio.observe(el))
        cleanups.push(() => cio.disconnect())
      }

      // footer glow
      const glow = document.getElementById('glow')
      if (glow) {
        const minReveal = 0.045
        let gpend = false
        function medirGlow() {
          const h = glow!.offsetHeight || 1
          const queda = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
          const t = Math.max(0, Math.min(1, (h - queda) / h))
          glow!.style.transform = 'scaleY(' + (minReveal + (1 - minReveal) * t) + ')'
          gpend = false
        }
        function pedirGlow() {
          if (!gpend) {
            requestAnimationFrame(medirGlow)
            gpend = true
          }
        }
        window.addEventListener('scroll', pedirGlow, { passive: true })
        window.addEventListener('resize', pedirGlow, { passive: true })
        medirGlow()
        cleanups.push(() => {
          window.removeEventListener('scroll', pedirGlow)
          window.removeEventListener('resize', pedirGlow)
        })
      }

      // about: sticky-scrubbed line reveal
      const track = document.getElementById('about-track')
      const aboutLines = Array.from(root!.querySelectorAll<HTMLElement>(aboutSel))
      if (track && aboutLines.length && window.matchMedia('(min-width:761px)').matches) {
        const umbrales = [0.06, 0.22, 0.38, 0.54, 0.7]
        let pend = false
        function paso() {
          const r = track!.getBoundingClientRect()
          const recorrido = r.height - window.innerHeight
          const p = recorrido > 0 ? Math.min(1, Math.max(0, -r.top / recorrido)) : 1
          aboutLines.forEach((l, i) => {
            if (p >= (umbrales[i] !== undefined ? umbrales[i] : 1)) l.classList.add('in')
          })
          pend = false
        }
        const onScroll = () => {
          if (!pend) {
            requestAnimationFrame(paso)
            pend = true
          }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        paso()
        cleanups.push(() => window.removeEventListener('scroll', onScroll))
      } else {
        aboutLines.forEach((l) => l.classList.add('in'))
      }

      // hero cursor-follow spot
      const heroW = hero
      const spot = document.getElementById('spot')
      if (heroW && spot && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
        const R = 95
        let tx = 0,
          ty = 0,
          cx = 0,
          cy = 0,
          on = false,
          raf: number | null = null
        function draw() {
          cx += (tx - cx) * 0.15
          cy += (ty - cy) * 0.15
          spot!.style.clipPath = 'circle(' + (on ? R : 0) + 'px at ' + cx.toFixed(1) + 'px ' + cy.toFixed(1) + 'px)'
          if (on || Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
            raf = requestAnimationFrame(draw)
          } else {
            raf = null
          }
        }
        function kick() {
          if (!raf) raf = requestAnimationFrame(draw)
        }
        const onMove = (e: PointerEvent) => {
          if (e.pointerType !== 'mouse') return
          const r = heroW!.getBoundingClientRect()
          tx = e.clientX - r.left
          ty = e.clientY - r.top
          if (!on) {
            cx = tx
            cy = ty
            on = true
          }
          kick()
        }
        const onLeave = () => {
          on = false
          kick()
        }
        heroW.addEventListener('pointermove', onMove)
        heroW.addEventListener('pointerleave', onLeave)
        cleanups.push(() => {
          heroW.removeEventListener('pointermove', onMove)
          heroW.removeEventListener('pointerleave', onLeave)
          if (raf) cancelAnimationFrame(raf)
        })
      }

      // hand-written eased scroll (mouse only)
      if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
        let destino = window.scrollY
        let actual = window.scrollY
        let animando = false
        function tope() {
          return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
        }
        function bucle() {
          const d = destino - actual
          if (Math.abs(d) < 0.5) {
            actual = destino
            window.scrollTo(0, actual)
            animando = false
            return
          }
          actual += d * 0.12
          window.scrollTo(0, actual)
          requestAnimationFrame(bucle)
        }
        const onWheel = (e: WheelEvent) => {
          if (e.ctrlKey) return
          if (e.deltaMode !== 0) return
          e.preventDefault()
          destino = Math.max(0, Math.min(tope(), destino + e.deltaY))
          if (!animando) {
            animando = true
            actual = window.scrollY
            requestAnimationFrame(bucle)
          }
        }
        const onScroll = () => {
          if (Math.abs(window.scrollY - actual) > 2) {
            destino = window.scrollY
            actual = window.scrollY
          }
        }
        window.addEventListener('wheel', onWheel, { passive: false })
        window.addEventListener('scroll', onScroll, { passive: true })
        cleanups.push(() => {
          window.removeEventListener('wheel', onWheel)
          window.removeEventListener('scroll', onScroll)
        })
      }

      // scroll-linked parallax + portrait mask, desktop only
      if (window.matchMedia('(min-width:761px)').matches) {
        const fills = Array.from(root!.querySelectorAll<HTMLElement>('.story-hero__media img'))
        let ticking = false
        const retrato = root!.querySelector<HTMLElement>('.portrait__color')

        function updateParallax() {
          const vh = window.innerHeight
          const lecturas: Array<number | null> = []

          if (retrato) {
            const rb = retrato.getBoundingClientRect()
            if (rb.bottom > 0 && rb.top < vh) {
              const centro = rb.top + rb.height / 2
              const pr = 1 - Math.max(0, Math.min(1, (centro - vh * 0.5) / (vh * 0.62)))
              retrato.style.setProperty('--r', (30 + pr * 50).toFixed(1) + '%')
            }
          }

          fills.forEach((f) => {
            const bloque = f.closest('.story-hero') as HTMLElement | null
            if (!bloque) {
              lecturas.push(null)
              return
            }
            const r = bloque.getBoundingClientRect()
            if (r.bottom < 0 || r.top > vh) {
              lecturas.push(null)
              return
            }
            const rate = parseFloat(bloque.getAttribute('data-rate') || '') || 0.04
            const offset = (r.top + r.height / 2 - vh / 2) / vh
            lecturas.push(Math.max(-1, Math.min(1, offset)) * (r.height * rate))
          })
          fills.forEach((f, i) => {
            if (lecturas[i] === null) return
            f.style.setProperty('--py', lecturas[i]!.toFixed(1) + 'px')
          })
          ticking = false
        }
        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(updateParallax)
            ticking = true
          }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        updateParallax()
        cleanups.push(() => window.removeEventListener('scroll', onScroll))
      }
    }

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [containerRef])
}
