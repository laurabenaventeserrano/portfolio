import { useEffect } from 'react'

/**
 * Story 1's "drift": large figures counter-move slightly as they cross the
 * viewport, capped at 7% of their own height. Skipped under reduced motion.
 */
export function useDrift(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const drifters = Array.from(root.querySelectorAll<HTMLElement>('.drift'))
    if (!drifters.length) return

    function moverDrift() {
      const vh = window.innerHeight
      for (const el of drifters) {
        const r = el.getBoundingClientRect()
        if (r.bottom < 0 || r.top > vh) continue
        let centro = (r.top + r.height / 2 - vh / 2) / vh
        centro = Math.max(-1, Math.min(1, centro))
        el.style.transform = `translate3d(0,${(centro * r.height * 0.07).toFixed(1)}px,0)`
      }
    }

    let pending = false
    function onScroll() {
      if (pending) return
      pending = true
      requestAnimationFrame(() => {
        pending = false
        moverDrift()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', moverDrift, { passive: true })
    const raf = requestAnimationFrame(() => requestAnimationFrame(moverDrift))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', moverDrift)
      cancelAnimationFrame(raf)
    }
  }, [containerRef])
}
