import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position to the top on every route (pathname) change, so a
 * new page never opens at the previous page's scroll offset.
 *
 * Deliberately keyed on `pathname` alone, not `search`/`hash`/`key` — same-
 * page anchor clicks (e.g. MobileHero's `href="#contact-form-mobile"`) only
 * change the hash, not the pathname, so they never retrigger this and never
 * fight the browser's native in-page anchor scroll. As a second safety net
 * for a hypothetical future route that changes pathname *and* carries a
 * hash in one navigation, the effect itself checks `window.location.hash`
 * and backs off if one is present, deferring to anchor scrolling instead.
 *
 * Also disables the browser's native `history.scrollRestoration` once on
 * mount, so it can't fight this on Back/Forward — this component becomes
 * the single source of truth for scroll position across all navigation.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
