import type { PartnerBenefit } from '@/types'

/** Fixed-length tuple: the 3x3 mosaic order in README 3.4 is exact and must not be reflowed. */
export const partnerBenefits: readonly [PartnerBenefit, PartnerBenefit, PartnerBenefit, PartnerBenefit] = [
  { id: 'operations', title: 'Integrated into your daily operations' },
  { id: 'treatment', title: 'Faster treatment, better outcomes' },
  { id: 'costs', title: 'Reduce costs and improve staff satisfaction' },
  { id: 'compliance', title: 'Compliance with CMS & EHR integration' },
]
