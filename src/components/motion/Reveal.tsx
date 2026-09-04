import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

interface RevealProps {
  children: ReactNode
  direction?: RevealDirection
  className?: string
}

export function Reveal({ children, direction = 'up', className = '' }: RevealProps) {
  const { ref, isRevealed } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-reveal={direction}
      className={['reveal', isRevealed && 'is-revealed', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
