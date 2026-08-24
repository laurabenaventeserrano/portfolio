import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Each page in the original static site loaded fresh, so it always started at
 * the top. React Router preserves scroll position across route changes by
 * default, which would leave a visitor mid-page on the next route.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
