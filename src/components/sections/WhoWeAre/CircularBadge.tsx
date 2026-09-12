import { useId } from 'react'

interface CircularBadgeProps {
  size?: number
  arrowSize?: number
  /**
   * Desktop's ring only starts spinning once the section's scroll-reveal
   * fires (`.who-in`, see who-we-are.css). Mobile drops that reveal chain
   * entirely, so it has no `.who-in` ancestor to gate on — pass this to spin
   * unconditionally instead (still `prefers-reduced-motion`-aware).
   */
  alwaysAnimate?: boolean
}

/**
 * Purely decorative flourish (no href/role) — matches the prototype's plain
 * aria-hidden span. `useId` keeps the arc path's id unique now that About's
 * mobile composition can mount this alongside the desktop instance.
 */
export function CircularBadge({ size = 136, arrowSize = 26, alwaysAnimate = false }: CircularBadgeProps) {
  const arcId = `who-badge-arc-${useId()}`
  const ringClassName = ['who-badge-ring absolute inset-0', alwaysAnimate && 'who-badge-ring-always']
    .filter(Boolean)
    .join(' ')

  return (
    <span
      aria-hidden="true"
      data-pos="badge"
      className="who-reveal who-badge who-d2 relative flex shrink-0 items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 136 136" width={size} height={size} aria-hidden="true" className={ringClassName}>
        <defs>
          <path id={arcId} d="M68,68 m-53,0 a53,53 0 1,1 106,0 a53,53 0 1,1 -106,0" />
        </defs>
        <text fontFamily="'DM Sans', sans-serif" fontSize={12.5} letterSpacing={1.4} fill="#E2A76F">
          <textPath href={`#${arcId}`} startOffset="2%">
            Who We Are • Who We Are • Who We Are •
          </textPath>
        </text>
      </svg>

      <svg width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="who-badge-arrow">
        <path d="M7 17 17 7M9 7h8v8" stroke="#E2A76F" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
