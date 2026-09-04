import type { ReactNode } from 'react'
import type { SectionTone } from '@/types'

const TONE_BACKGROUND: Record<SectionTone, string> = {
  primary: 'bg-carely-ivory',
  alternate: 'bg-carely-ivory-alt',
  dark: 'bg-carely-deep',
}

interface SectionShellProps {
  id?: string
  tone?: SectionTone
  maxWidth?: number
  ariaLabelledBy?: string
  className?: string
  containerClassName?: string
  children: ReactNode
}

/**
 * Full-bleed A/B/dark background band with a centered, section-specific
 * max-width container (README 2 & 11 — each section keeps its own content
 * width rather than sharing one global max-width).
 */
export function SectionShell({
  id,
  tone = 'primary',
  maxWidth = 1340,
  ariaLabelledBy,
  className = '',
  containerClassName = '',
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={[
        'box-border w-full px-[clamp(24px,4vw,60px)] py-[clamp(64px,7vw,110px)]',
        TONE_BACKGROUND[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={['mx-auto w-full', containerClassName].filter(Boolean).join(' ')} style={{ maxWidth }}>
        {children}
      </div>
    </section>
  )
}
