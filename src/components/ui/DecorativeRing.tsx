interface DecorativeRingProps {
  size: number
  color?: string
  opacity?: number
  className?: string
}

/** Absolute-positioned decorative circle outline; position via `className`. */
export function DecorativeRing({ size, color = '#D2E761', opacity = 0.3, className = '' }: DecorativeRingProps) {
  return (
    <span
      aria-hidden="true"
      className={['pointer-events-none absolute rounded-full border', className].filter(Boolean).join(' ')}
      style={{ width: size, height: size, borderColor: color, opacity }}
    />
  )
}
