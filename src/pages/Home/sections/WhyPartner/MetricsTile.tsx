import { useReveal } from '@/hooks/useReveal'

/** Exported for reuse by MobileWhyPartner's condensed metrics cards (same glyphs, mobile sizing). */
export const DownArrowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5v13m-5-5 5 5 5-5" stroke="#FFFFFF" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ClockIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="7.6" stroke="#FFFFFF" strokeWidth={1.6} />
    <path d="M12 8.4V12l2.6 2" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
)

export const DollarIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 4.5v15M15.2 8.2c0-1.5-1.4-2.4-3.2-2.4s-3.2.9-3.2 2.4 1.4 2.2 3.2 2.7 3.4 1.1 3.4 2.8-1.6 2.6-3.4 2.6-3.4-1-3.4-2.6"
      stroke="#FFFFFF"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
  </svg>
)

export const PeopleIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10" cy="9" r="3.1" stroke="#FFFFFF" strokeWidth={1.6} />
    <path d="M4.6 19c0-2.9 2.4-4.7 5.4-4.7s5.4 1.8 5.4 4.7" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" />
    <path d="M16.4 6.6a2.7 2.7 0 0 1 0 5m1.1 2.8c1.8.6 2.9 2 2.9 4.1" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
)

interface MetricsTileProps {
  variant: 'dark' | 'light'
}

const VARIANT = {
  dark: {
    tile: 'bg-carely-deep',
    label: 'text-carely-lime',
    title: 'text-carely-white',
    divider: 'bg-white/[0.16]',
    deco: 'right-[-70px] top-5 h-[230px] w-[230px] border-carely-lime opacity-[0.16]',
    rows: [
      { icon: DownArrowIcon, iconClass: 'wp-metric-icon-down', label: 'Reduced readmissions' },
      { icon: ClockIcon, iconClass: 'wp-metric-icon-clock', label: 'Faster treatment times' },
    ],
  },
  light: {
    tile: 'bg-carely-apricot-soft',
    label: 'text-carely-apricot',
    title: 'text-carely-deep',
    divider: 'bg-carely-deep/[0.13]',
    deco: 'right-[14px] bottom-[14px] z-0 h-[150px] w-[150px] border-carely-apricot opacity-[0.35]',
    rows: [
      { icon: DollarIcon, iconClass: '', label: 'Cost savings per facility/month' },
      { icon: PeopleIcon, iconClass: '', label: 'Staff retention improvements' },
    ],
  },
} as const

/** Tile-level reveal also flags its own internal label/row/divider stagger — see why-partner.css. */
export function MetricsTile({ variant }: MetricsTileProps) {
  const { ref, isRevealed } = useReveal<HTMLDivElement>()
  const config = VARIANT[variant]
  const [row1, row2] = config.rows

  return (
    <div
      ref={ref}
      data-pos="center"
      className={[
        'wp-reveal wp-tile wp-col-1',
        isRevealed && 'wp-in',
        'relative flex min-h-[300px] flex-col overflow-hidden rounded-[22px] p-[34px]',
        config.tile,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span aria-hidden="true" className={`wp-deco pointer-events-none absolute rounded-full border ${config.deco}`} />

      <p data-pos="internal" className={`wp-reveal wp-m1 relative z-[1] m-0 text-[13.5px] font-medium tracking-[0.13em] uppercase ${config.label}`}>
        Success Metrics
      </p>

      <div data-pos="internal" className="wp-reveal wp-m2 relative z-[1] mt-[26px] flex items-center gap-[18px]">
        <span
          data-pos="icon"
          className={`wp-reveal wp-m2 wp-metric-icon ${row1.iconClass} flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-carely-apricot`}
        >
          {row1.icon}
        </span>
        <h3 className={`wp-metric-title m-0 text-pretty text-[clamp(21px,1.8vw,25px)] leading-[1.25] font-medium ${config.title}`}>
          {row1.label}
        </h3>
      </div>

      <span aria-hidden="true" className={`wp-divider wp-m3 relative z-[1] my-[26px] block h-px ${config.divider}`} />

      <div data-pos="internal" className="wp-reveal wp-m4 relative z-[1] flex items-center gap-[18px]">
        <span
          data-pos="icon"
          className={`wp-reveal wp-m4 wp-metric-icon ${row2.iconClass} flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-carely-apricot`}
        >
          {row2.icon}
        </span>
        <h3 className={`wp-metric-title m-0 text-pretty text-[clamp(21px,1.8vw,25px)] leading-[1.25] font-medium ${config.title}`}>
          {row2.label}
        </h3>
      </div>
    </div>
  )
}
