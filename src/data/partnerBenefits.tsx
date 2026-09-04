import type { PartnerBenefit } from '@/types'

/** Exact icon geometry from the approved handoff (Navbar.dc.html). */
const IntegratedIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M10 4.5a1.8 1.8 0 1 1 3.6 0V6H17a1 1 0 0 1 1 1v3.2h1.4a1.8 1.8 0 1 1 0 3.6H18V17a1 1 0 0 1-1 1h-3.4v-1.5a1.8 1.8 0 1 0-3.6 0V18H6.5a1 1 0 0 1-1-1v-3.5H7a1.8 1.8 0 1 0 0-3.6H5.5V7a1 1 0 0 1 1-1H10z"
      stroke="#273A29"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
  </svg>
)

const FasterIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="13.5" r="6.8" stroke="#273A29" strokeWidth={1.4} />
    <path d="M12 13.5V10m-2-6.2h4M12 3.8v2.9m5.6-1 1.6 1.6" stroke="#273A29" strokeWidth={1.4} strokeLinecap="round" />
  </svg>
)

const CostsIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19V13m4.6 6v-9M14.2 19v-5.5M18.8 19V8" stroke="#273A29" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M5 9.4 10.6 5l3.6 2.6L19.4 4" stroke="#273A29" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ComplianceIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3.6 19 6v6.2c0 4-3 6.8-7 8.2-4-1.4-7-4.2-7-8.2V6z"
      stroke="#273A29"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
    <path d="m8.8 12 2.4 2.4 4-4.6" stroke="#273A29" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Fixed-length tuple: the 3x3 mosaic order in README 3.4 is exact and must not be reflowed. */
export const partnerBenefits: readonly [PartnerBenefit, PartnerBenefit, PartnerBenefit, PartnerBenefit] = [
  { id: 'operations', title: 'Integrated into your daily operations', icon: IntegratedIcon },
  { id: 'treatment', title: 'Faster treatment, better outcomes', icon: FasterIcon },
  { id: 'costs', title: 'Reduce costs and improve staff satisfaction', icon: CostsIcon },
  { id: 'compliance', title: 'Compliance with CMS & EHR integration', icon: ComplianceIcon },
]
