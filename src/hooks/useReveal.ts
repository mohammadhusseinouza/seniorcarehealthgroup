import { useEffect, useRef, useState } from 'react'

/**
 * One shared IntersectionObserver for every reveal target, matching the
 * handoff's scroll-trigger rule (README 5.3): threshold 0, a negative
 * bottom rootMargin does the "later trigger" work instead of a ratio gate
 * (a ratio gate can permanently strand tall/fast-scrolled elements).
 * Reveal is one-time: unobserve immediately, never replay on scroll up.
 */
let sharedObserver: IntersectionObserver | null = null
const revealCallbacks = new Map<Element, () => void>()

function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver

  const rootMargin = window.innerWidth < 760 ? '0px 0px -22% 0px' : '0px 0px -30% 0px'

  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue

        revealCallbacks.get(entry.target)?.()
        revealCallbacks.delete(entry.target)
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0, rootMargin },
  )

  return sharedObserver
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true)
      return
    }

    const observer = getSharedObserver()
    revealCallbacks.set(node, () => setIsRevealed(true))
    observer.observe(node)

    return () => {
      revealCallbacks.delete(node)
      observer.unobserve(node)
    }
  }, [])

  return { ref, isRevealed }
}
