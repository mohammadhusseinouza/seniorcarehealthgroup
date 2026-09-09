import type { CSSProperties, ReactNode } from 'react'

interface IconCircleProps {
  /** Diameter in px (74 / 66 / 60 / 56 in the handoffs). */
  size: number
  /**
   * Circle fill. Defaults to the apricot accent; pass `null` to omit the inline
   * background entirely so a CSS class can drive it (e.g. a hover/focus state
   * that must override — inline styles can't be beaten by a stylesheet rule).
   */
  bg?: string | null
  children: ReactNode
  className?: string
}

/**
 * Fixed-size flex-centered circle holding a stroke icon. Always `aria-hidden`
 * — the surrounding heading/label carries the meaning.
 */
export function IconCircle({ size, bg = 'var(--color-carely-apricot)', children, className = '' }: IconCircleProps) {
  const style: CSSProperties = { width: size, height: size }
  if (bg !== null) style.background = bg

  return (
    <span
      aria-hidden="true"
      className={['flex shrink-0 items-center justify-center rounded-full', className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </span>
  )
}
