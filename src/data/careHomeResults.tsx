import type { CareHomeResult } from '@/types'

/** Icon geometry verbatim from OurCareHome.dc.html — 24×24 grid, 1.8px white stroke. */
const ClinicalIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19V11M10 19V8M15 19v-5M4 19h16" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" />
    <path d="m13 9 4-4M14 5h3v3" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const OperationalIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.1" stroke="#FFFFFF" strokeWidth={1.8} />
    <path
      d="M12 3.2v2.1M12 18.7v2.1M4.8 4.8l1.5 1.5M17.7 17.7l1.5 1.5M3.2 12h2.1M18.7 12h2.1M4.8 19.2l1.5-1.5M17.7 6.3l1.5-1.5"
      stroke="#FFFFFF"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </svg>
)

const ComplianceIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6.4 3.2h7.2L18 7.6v13.2H6.4z" stroke="#FFFFFF" strokeWidth={1.8} strokeLinejoin="round" />
    <path d="M13.4 3.4v4.4H18M9 12.4h6M9 16h4.4" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
)

const CaseStudyIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.4" stroke="#FFFFFF" strokeWidth={1.8} />
    <path d="M12 3.6V12h8.4" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
)

/**
 * The four "Our Care Home" result blocks. First two render in the left column
 * (`row`), last two in the right column (`column`) — one array, a `layout`
 * flag, no hand-written copies (About Us README §11).
 */
export const careHomeResults: CareHomeResult[] = [
  {
    id: 'clinical',
    title: 'Clinical Results',
    body: 'Readmission reduction, faster treatment, better recovery.',
    icon: ClinicalIcon,
    layout: 'row',
  },
  {
    id: 'operational',
    title: 'Operational Results',
    body: 'Lower ambulance/ER costs, improved workflow.',
    icon: OperationalIcon,
    layout: 'row',
  },
  {
    id: 'compliance',
    title: 'Compliance & Reporting',
    body: 'CMS-aligned, monthly data reporting, QAPI reviews.',
    icon: ComplianceIcon,
    layout: 'column',
  },
  {
    id: 'case-study',
    title: 'Case Study Highlights',
    body: 'Real stories, real improvements in quality of life.',
    icon: CaseStudyIcon,
    layout: 'column',
  },
]
