import { useEffect } from 'react'

/**
 * Adds html.js once on mount, mirroring the static site's progressive-enhancement
 * flag. html:not(.js) is what makes every page readable with JS disabled; since a
 * React app always has JS by the time this runs, the flag is set unconditionally.
 */
export function useJsFlag() {
  useEffect(() => {
    document.documentElement.classList.add('js')
  }, [])
}
