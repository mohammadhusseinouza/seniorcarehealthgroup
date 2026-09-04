import type { ButtonHTMLAttributes, ReactNode } from 'react'

type PillButtonVariant = 'forest' | 'apricot' | 'lime' | 'white'

const VARIANT_CLASSES: Record<PillButtonVariant, string> = {
  forest: 'bg-carely-deep text-carely-white hover:bg-carely-dark-hover',
  apricot: 'bg-carely-apricot text-carely-deep hover:bg-carely-deep hover:text-carely-white',
  lime: 'bg-carely-lime text-carely-deep hover:bg-carely-deep hover:text-carely-white',
  white: 'bg-carely-white text-carely-deep hover:bg-carely-lime',
}

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PillButtonVariant
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  trailingChip?: ReactNode
  children: ReactNode
}

export function PillButton({
  variant = 'forest',
  leadingIcon,
  trailingIcon,
  trailingChip,
  className = '',
  type = 'button',
  children,
  ...rest
}: PillButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex h-[52px] items-center justify-center gap-3 rounded-full px-7 text-base font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carely-apricot',
        VARIANT_CLASSES[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
      {trailingChip}
    </button>
  )
}
