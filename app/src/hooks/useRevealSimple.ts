import { useEffect } from 'react'

/**
 * Reveal-on-scroll used by Story 2 and Story 3 in the original static pages:
 * a single IntersectionObserver over every `.rv`, plus an unconditional
 * fail-safe that reveals whatever is left after 3.5s regardless of position.
 * Deliberately simpler than useReveal (Home / Story 1) — ported as authored,
 * not "fixed" to match the richer contract described in visual-storytelling.
 */
export function useRevealSimple(containerRef: React.RefObject<HTMLElement | null>) {
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
      { rootMargin: '0px 0px -10% 0px' },
    )

    const watched = Array.from(root.querySelectorAll('.rv'))
    watched.forEach((el) => io.observe(el))

    const failSafe = window.setTimeout(() => {
      root.querySelectorAll('.rv:not(.in)').forEach((el) => el.classList.add('in'))
    }, 3500)

    return () => {
      io.disconnect()
      window.clearTimeout(failSafe)
    }
  }, [containerRef])
}
