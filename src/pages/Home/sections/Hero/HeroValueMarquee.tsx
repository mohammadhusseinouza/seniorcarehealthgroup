import type { ReactNode } from 'react'

interface MarqueeValue {
  id: string
  label: string
  icon: ReactNode
}

const BondsIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="2.6" stroke="#FFFFFF" strokeWidth={1.5} />
    <circle cx="15" cy="15" r="2.6" stroke="#FFFFFF" strokeWidth={1.5} />
  </svg>
)

const ComfortIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4 20 8.5 12 13 4 8.5 12 4Z" stroke="#FFFFFF" strokeWidth={1.5} strokeLinejoin="round" />
    <path d="M4 14 12 18.5 20 14" stroke="#FFFFFF" strokeWidth={1.5} strokeLinejoin="round" />
  </svg>
)

const DetailIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="9.4" r="3.6" stroke="#FFFFFF" strokeWidth={1.5} />
    <circle cx="9" cy="14.6" r="3.6" stroke="#FFFFFF" strokeWidth={1.5} />
    <circle cx="15" cy="14.6" r="3.6" stroke="#FFFFFF" strokeWidth={1.5} />
  </svg>
)

const VALUES: MarqueeValue[] = [
  { id: 'bonds', label: 'Family-Like Bonds, Not Just Staff and Residents', icon: BondsIcon },
  { id: 'comfort', label: 'Comfort That Never Compromises on Dignity', icon: ComfortIcon },
  { id: 'detail', label: 'Every Detail Designed with Seniors in Mind', icon: DetailIcon },
]

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="m-0 flex flex-none list-none items-center gap-10 py-0 pr-10 pl-0">
      {VALUES.map((value) => (
        <li key={value.id} className="flex w-[clamp(320px,30vw,470px)] flex-none items-center gap-[18px]">
          <span
            aria-hidden="true"
            className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-carely-apricot"
          >
            {value.icon}
          </span>
          <span className="text-pretty text-lg leading-[1.4] font-medium text-carely-black">{value.label}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Seamless loop: two identical groups back to back, track animates from
 * translateX(-50%) to translateX(0) — content moves left -> right with no
 * jump. Only the duplicate group is aria-hidden.
 */
export function HeroValueMarquee() {
  return (
    <div
      className="overflow-hidden rounded-card bg-carely-marquee"
      style={{ padding: '22px clamp(20px,2.4vw,36px)' }}
    >
      <div className="hero-marquee-track flex w-max items-center">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  )
}
