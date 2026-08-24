import { useEffect } from 'react'

/**
 * Closes the disclosure nav when a link inside it is clicked, and on Escape
 * (returning focus to the summary bar). Identical across all four pages.
 */
export function useNavClose(navId = 'nav-d') {
  useEffect(() => {
    const navD = document.getElementById(navId) as HTMLDetailsElement | null
    if (!navD) return

    const links = navD.querySelectorAll('.nav-panel a')
    const onClick = () => navD.removeAttribute('open')
    links.forEach((a) => a.addEventListener('click', onClick))

    function onKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && navD!.hasAttribute('open')) {
        navD!.removeAttribute('open')
        navD!.querySelector<HTMLElement>('.nav-bar')?.focus()
      }
    }
    document.addEventListener('keydown', onKeydown)

    return () => {
      links.forEach((a) => a.removeEventListener('click', onClick))
      document.removeEventListener('keydown', onKeydown)
    }
  }, [navId])
}
