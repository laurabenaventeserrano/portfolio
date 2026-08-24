import { useEffect } from 'react'

/**
 * Adds marker class(es) to <html> for the lifetime of the page, e.g.
 * "page-case-study page-story1". Every page-specific stylesheet is written as
 * `html.page-x { ... }` so that once React Router keeps every route's CSS
 * resident in the same document, one page's rules can never cascade onto
 * another's — a risk the original static multi-file site never had, since
 * only one page's <style> block was ever in the DOM at a time.
 */
export function usePageScope(classNames: string) {
  useEffect(() => {
    const docEl = document.documentElement
    const list = classNames.split(' ').filter(Boolean)
    docEl.classList.add(...list)
    return () => {
      docEl.classList.remove(...list)
    }
  }, [classNames])
}
