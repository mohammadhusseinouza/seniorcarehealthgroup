import { IconCircle } from '@/components/ui/IconCircle'
import type { PartnerBenefit } from '@/types'

interface BenefitTileProps {
  benefit: PartnerBenefit
}

export function BenefitTile({ benefit }: BenefitTileProps) {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-carely-deep/[0.09] bg-carely-card p-8">
      <IconCircle size={62} tone="soft" />
      <h3 className="mt-7 max-w-[280px] text-2xl font-medium leading-snug text-carely-deep">{benefit.title}</h3>
      <span aria-hidden="true" className="absolute right-5 bottom-5 h-[30px] w-[30px] rounded-tl-[30px] bg-carely-lime" />
    </div>
  )
}
