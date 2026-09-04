import { useReveal } from '@/hooks/useReveal'
import type { PartnerBenefit } from '@/types'

interface BenefitTileProps {
  benefit: PartnerBenefit
  pos: 'left' | 'right'
  col: 0 | 2
}

/** One IntersectionObserver target per tile (README 5.3 — tiles reveal independently, not row-level). */
export function BenefitTile({ benefit, pos, col }: BenefitTileProps) {
  const { ref, isRevealed } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-pos={pos}
      className={[
        'wp-reveal wp-tile',
        isRevealed && 'wp-in',
        col === 2 ? 'wp-col-2' : '',
        'relative min-h-[300px] overflow-hidden rounded-[22px] border border-carely-deep/[0.09] bg-carely-card p-[34px]',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="wp-icon flex h-[62px] w-[62px] items-center justify-center rounded-full bg-carely-icon-soft">
        {benefit.icon}
      </span>

      <h3 className="wp-title mt-[30px] max-w-[280px] text-pretty text-[clamp(24px,2.1vw,29px)] font-medium leading-[1.22] tracking-[-0.01em] text-carely-deep">
        {benefit.title}
      </h3>

      <span aria-hidden="true" className="wp-corner absolute right-5 bottom-5 h-[30px] w-[30px] rounded-tl-[30px] bg-carely-lime" />
    </div>
  )
}
