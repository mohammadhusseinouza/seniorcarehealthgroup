import { useEffect, useState } from 'react'

const QUERY = '(max-width: 639px)'

/**
 * Mirrors the site's `min-[640px]:` breakpoint. Most mobile/desktop branches
 * in this app mount both simultaneously and let CSS hide one — cheap for
 * plain markup, but a hidden `<iframe>` still fetches its `src` regardless of
 * `display:none`. LocationMap uses this to keep exactly one map iframe in
 * the DOM at a time. This is a pure client-side SPA (no SSR), so there's no
 * hydration mismatch to guard against.
 */
export function useIsMobileViewport(): boolean {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY)
    const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches)

    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return isMobile
}
