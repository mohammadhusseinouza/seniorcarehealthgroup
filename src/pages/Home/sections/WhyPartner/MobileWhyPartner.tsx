import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { partnerBenefits } from '@/data/partnerBenefits'
import type { PartnerBenefit } from '@/types'
import { ClockIcon, DollarIcon, DownArrowIcon, PeopleIcon } from './MetricsTile'

function PartnershipSquares() {
  return (
    <span aria-hidden="true" className="grid shrink-0 grid-cols-2 gap-[3px]">
      <span className="block h-[9px] w-[9px] rounded-tl-[3px] rounded-br-[3px] bg-carely-lime" />
      <span className="block h-[9px] w-[9px] rounded-tr-[3px] rounded-bl-[3px] bg-carely-lime" />
      <span className="block h-[9px] w-[9px] rounded-tr-[3px] rounded-bl-[3px] bg-carely-lime" />
      <span className="block h-[9px] w-[9px] rounded-tl-[3px] rounded-br-[3px] bg-carely-lime" />
    </span>
  )
}

function MobileBenefitTile({ benefit }: { benefit: PartnerBenefit }) {
  return (
    <div className="relative min-h-[158px] overflow-hidden rounded-[18px] border border-carely-deep/[0.09] bg-carely-card p-[18px]">
      <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-carely-icon-soft [&>svg]:h-6 [&>svg]:w-6">
        {benefit.icon}
      </span>
      <h3 className="mt-4 text-pretty text-[16.5px] leading-[1.25] font-medium tracking-[-0.01em] text-carely-deep">
        {benefit.title}
      </h3>
      <span aria-hidden="true" className="absolute right-0 bottom-0 h-[22px] w-[22px] rounded-tl-[22px] bg-carely-lime" />
    </div>
  )
}

interface MetricsRow {
  icon: ReactNode
  label: string
}

function MobileMetricsCard({
  tone,
  rows,
}: {
  tone: 'dark' | 'light'
  rows: readonly [MetricsRow, MetricsRow]
}) {
  const isDark = tone === 'dark'
  const [row1, row2] = rows

  return (
    <div
      className={[
        'relative mt-3 overflow-hidden rounded-[20px] p-[22px]',
        isDark ? 'bg-carely-deep' : 'bg-carely-apricot-soft',
      ].join(' ')}
    >
      <span
        aria-hidden="true"
        className={
          isDark
            ? 'absolute top-3 right-[-60px] h-[170px] w-[170px] rounded-full border border-carely-lime opacity-[0.16]'
            : 'absolute right-2 bottom-2 h-[120px] w-[120px] rounded-full border border-carely-apricot opacity-[0.35]'
        }
      />

      <p
        className={[
          'relative m-0 text-[12.5px] font-medium tracking-[0.13em] uppercase',
          isDark ? 'text-carely-lime' : 'text-carely-apricot',
        ].join(' ')}
      >
        Success Metrics
      </p>

      <div className="relative mt-[18px] flex items-center gap-[14px]">
        <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-carely-apricot [&>svg]:h-[19px] [&>svg]:w-[19px]">
          {row1.icon}
        </span>
        <h3 className={['m-0 text-[19px] leading-[1.25] font-medium', isDark ? 'text-carely-white' : 'text-carely-deep'].join(' ')}>
          {row1.label}
        </h3>
      </div>

      <span aria-hidden="true" className={['relative my-[18px] block h-px', isDark ? 'bg-white/[0.16]' : 'bg-carely-deep/[0.13]'].join(' ')} />

      <div className="relative flex items-center gap-[14px]">
        <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-carely-apricot [&>svg]:h-[19px] [&>svg]:w-[19px]">
          {row2.icon}
        </span>
        <h3 className={['m-0 text-[19px] leading-[1.25] font-medium', isDark ? 'text-carely-white' : 'text-carely-deep'].join(' ')}>
          {row2.label}
        </h3>
      </div>
    </div>
  )
}

/**
 * README "Why partner with us" mobile: 2-up benefit tiles, then two condensed
 * metrics cards (the desktop photo strip is deliberately absent on mobile).
 */
export function MobileWhyPartner() {
  return (
    <section aria-labelledby="mobile-partner-title" className="bg-carely-ivory py-14 min-[640px]:hidden">
      <header className="px-5">
        <p className="m-0 flex items-center gap-[11px] text-[15px] font-medium text-carely-deep">
          <PartnershipSquares />
          Partnership
        </p>
        <h2 id="mobile-partner-title" className="mt-3 font-editorial text-[33px] leading-[1.14] font-normal text-carely-deep">
          Why Partner with Us?
        </h2>
      </header>

      <div className="mt-6 grid grid-cols-2 gap-3 px-5">
        {partnerBenefits.map((benefit) => (
          <MobileBenefitTile key={benefit.id} benefit={benefit} />
        ))}
      </div>

      <div className="px-5">
        <MobileMetricsCard
          tone="dark"
          rows={[
            { icon: DownArrowIcon, label: 'Reduced readmissions' },
            { icon: ClockIcon, label: 'Faster treatment times' },
          ]}
        />
        <MobileMetricsCard
          tone="light"
          rows={[
            { icon: DollarIcon, label: 'Cost savings per facility/month' },
            { icon: PeopleIcon, label: 'Staff retention improvements' },
          ]}
        />
      </div>

      <div className="px-5 pt-[22px]">
        <Link
          to="/contact"
          className="flex h-14 items-center justify-center rounded-full bg-carely-deep text-[17px] font-semibold text-carely-white no-underline transition-colors duration-200 active:bg-carely-lime active:text-carely-deep"
        >
          Book Consultation
        </Link>
      </div>
    </section>
  )
}
