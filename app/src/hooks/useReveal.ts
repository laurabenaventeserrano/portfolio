import { useEffect } from 'react'

interface UseRevealOptions {
  /** rootMargin for the primary IntersectionObserver over `.rv` elements. */
  rootMargin?: string
  /** Optional selector for pieces that should reveal later (e.g. full-viewport media). */
  lateSelector?: string
  lateRootMargin?: string
  /** Delay before the fail-safe reveals whatever the reader has actually reached. */
  failSafeMs?: number
  /**
   * Story 1 also sweeps on every scroll event (a second reveal driver, independent
   * of IntersectionObserver) and fires the same sweep before the first paint.
   * Home relies on IO plus a single delayed fail-safe only.
   */
  continuousSweep?: boolean
  sweepThreshold?: number
}

/**
 * Reveal-on-scroll shared by Home and Story 1: IntersectionObserver as the
 * primary driver, a delayed fail-safe that only reveals what's within the
 * viewport (never the whole document, which would pre-empt reveals further
 * down), and — for Story 1 — a continuous scroll-driven sweep as a second path.
 */
export function useReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  {
    rootMargin = '0px 0px -10% 0px',
    lateSelector,
    lateRootMargin = '0px 0px -45% 0px',
    failSafeMs = 4000,
    continuousSweep = false,
    sweepThreshold = 0.78,
  }: UseRevealOptions = {},
) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin },
    )

    let watched = Array.from(root.querySelectorAll('.rv, .shot'))
    let late: Element[] = []
    let io2: IntersectionObserver | null = null

    if (lateSelector) {
      late = Array.from(root.querySelectorAll(lateSelector))
      if (late.length) {
        io2 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in')
                io2!.unobserve(entry.target)
              }
            })
          },
          { rootMargin: lateRootMargin },
        )
        late.forEach((el) => io2!.observe(el))
        watched = watched.filter((el) => !late.includes(el))
      }
    }

    watched.forEach((el) => io.observe(el))

    function sweep() {
      const limit = window.innerHeight * sweepThreshold
      for (let i = watched.length - 1; i >= 0; i--) {
        const el = watched[i]
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('in')
          io.unobserve(el)
          watched.splice(i, 1)
        }
      }
    }

    let pending = false
    function onScroll() {
      if (pending) return
      pending = true
      requestAnimationFrame(() => {
        pending = false
        if (continuousSweep) sweep()
      })
    }

    if (continuousSweep) {
      window.addEventListener('scroll', onScroll, { passive: true })
      const raf1 = requestAnimationFrame(() => {
        requestAnimationFrame(sweep)
      })
      var cleanupRaf = () => cancelAnimationFrame(raf1)
    }

    const failSafe = window.setTimeout(() => {
      const limit = window.innerHeight
      watched.concat(late).forEach((el) => {
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < limit) {
          el.classList.add('in')
          io.unobserve(el)
          io2?.unobserve(el)
        }
      })
    }, failSafeMs)

    return () => {
      io.disconnect()
      io2?.disconnect()
      window.clearTimeout(failSafe)
      if (continuousSweep) {
        window.removeEventListener('scroll', onScroll)
        cleanupRaf?.()
      }
    }
  }, [containerRef, rootMargin, lateSelector, lateRootMargin, failSafeMs, continuousSweep, sweepThreshold])
}
