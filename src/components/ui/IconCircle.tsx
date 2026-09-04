import type { ReactNode } from 'react'

type IconCircleTone = 'lime' | 'apricot' | 'soft' | 'dark'

const TONE_CLASSES: Record<IconCircleTone, string> = {
  lime: 'bg-carely-lime text-carely-deep',
  apricot: 'bg-carely-apricot text-carely-white',
  soft: 'bg-carely-icon-soft text-carely-deep',
  dark: 'bg-carely-deep text-carely-white',
}

interface IconCircleProps {
  size?: number
  tone?: IconCircleTone
  className?: string
  children?: ReactNode
}

/** Fixed sizes used across the design: 30 / 34 / 40 / 46 / 50 / 52 / 62 / 70. */
export function IconCircle({ size = 50, tone = 'lime', className = '', children }: IconCircleProps) {
  return (
    <span
      aria-hidden="true"
      className={['flex shrink-0 items-center justify-center rounded-full', TONE_CLASSES[tone], className]
        .filter(Boolean)
        .join(' ')}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  )
}
