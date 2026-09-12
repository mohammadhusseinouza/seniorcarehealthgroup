interface ChevronIconProps {
  open: boolean
  color?: string
  size?: number
  className?: string
}

/** Shared disclosure chevron — working hours, footer accordion, form disclosure. */
export function ChevronIcon({ open, color = '#FFFFFF', size = 16, className = '' }: ChevronIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={['transition-transform duration-[220ms] ease-out', open ? 'rotate-180' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <path d="m6 9 6 6 6-6" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
