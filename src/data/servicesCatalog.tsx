import serviceHover from '@/assets/images/services/service-hover.png'
import type { ServiceCardItem } from '@/types'

/**
 * Card glyph geometry copied verbatim from ServiceCards.dc.html — inner SVG
 * elements only; `ServiceCard` supplies the 24×24 viewBox, `fill:none`,
 * `stroke-width:1.7` and round caps/joins.
 */
const TelemedicineIcon = (
  <>
    <rect x="2.8" y="4.2" width="18.4" height="12.6" rx="2.2" />
    <path d="M8.4 20.4h7.2" />
    <circle cx="12" cy="9.2" r="1.9" />
    <path d="M8.9 14.2c.5-1.7 1.6-2.5 3.1-2.5s2.6.8 3.1 2.5" />
  </>
)

const OnSiteIcon = (
  <>
    <path d="M4 10.6 12 4l8 6.6V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
    <path d="M12 11.4v5M9.5 13.9h5" />
  </>
)

const SpecialistIcon = (
  <>
    <circle cx="9.2" cy="8.6" r="3" />
    <path d="M3.6 18.4c0-3 2.5-4.8 5.6-4.8s5.6 1.8 5.6 4.8" />
    <path d="M16.2 6.8a2.6 2.6 0 0 1 0 5M17.6 13.8c1.9.5 3 1.9 3 4.4" />
  </>
)

const MedicationIcon = (
  <>
    <rect x="3.2" y="8.4" width="17.6" height="7.2" rx="3.6" transform="rotate(-45 12 12)" />
    <path d="M9.6 9.6 14.4 14.4" />
  </>
)

const LungsIcon = (
  <>
    <path d="M12 3.6v7.4" />
    <path d="M12 11c-1.2-2.6-2.6-4-4.3-4-1.6 0-2.5 1.2-2.7 3.4-.2 2.4.2 5 1.2 7.2.5 1.1 1.5 1.6 2.6 1.3 1.4-.4 2.2-1.6 2.4-3.4z" />
    <path d="M12 11c1.2-2.6 2.6-4 4.3-4 1.6 0 2.5 1.2 2.7 3.4.2 2.4-.2 5-1.2 7.2-.5 1.1-1.5 1.6-2.6 1.3-1.4-.4-2.2-1.6-2.4-3.4z" />
  </>
)

const ShieldPlusIcon = (
  <>
    <path d="M12 3.4 19.4 6v6.2c0 4-3 6.9-7.4 8.4-4.4-1.5-7.4-4.4-7.4-8.4V6z" />
    <path d="M12 8.6v4.8M9.6 11h4.8" />
  </>
)

const PathogenIcon = (
  <>
    <circle cx="12" cy="12" r="5.2" />
    <path d="M12 6.8V3.6M12 17.2v3.2M6.8 12H3.6M17.2 12h3.2M8.3 8.3 6 6M15.7 15.7 18 18M15.7 8.3 18 6M8.3 15.7 6 18" />
  </>
)

/**
 * No service-detail routes exist in the project yet. Every card points at the
 * production Contact route as a coherent temporary destination ("learn more" →
 * talk to us) — flagged for replacement with real `/services/<slug>` routes.
 */
const TEMP_SERVICE_HREF = '/contact'

export const primaryServices: ServiceCardItem[] = [
  {
    id: 'telemedicine',
    title: 'Telemedicine Services',
    description:
      'Our telemedicine services further enhance the level of care we provide by allowing PCAs and NPs to triage cases via video with immediate physician backup.',
    href: TEMP_SERVICE_HREF,
    icon: TelemedicineIcon,
    hoverImage: serviceHover,
  },
  {
    id: 'on-site-care',
    title: 'On-Site Care',
    description:
      'Daily rounding, early treatment, and on-site medication management ensure residents receive the right care, right away.',
    href: TEMP_SERVICE_HREF,
    icon: OnSiteIcon,
    hoverImage: serviceHover,
  },
  {
    id: 'specialist-access',
    title: 'Specialist Access',
    description:
      'We provide direct access to specialists including psychiatry, ID, cardiology, and more—at the right time for better outcomes.',
    href: TEMP_SERVICE_HREF,
    icon: SpecialistIcon,
    hoverImage: serviceHover,
  },
]

export const secondaryServices: ServiceCardItem[] = [
  {
    id: 'medication-management',
    title: 'Medication Management',
    description: 'Optimization, reconciliation, monitoring.',
    href: TEMP_SERVICE_HREF,
    icon: MedicationIcon,
    hoverImage: serviceHover,
  },
  {
    id: 'chf-copd',
    title: 'CHF/COPD',
    description: 'On-site treatment to prevent exacerbation.',
    href: TEMP_SERVICE_HREF,
    icon: LungsIcon,
    hoverImage: serviceHover,
  },
  {
    id: 'sepsis',
    title: 'Sepsis',
    description: 'Early recognition and IV antibiotic protocols.',
    href: TEMP_SERVICE_HREF,
    icon: ShieldPlusIcon,
    hoverImage: serviceHover,
  },
  {
    id: 'uti-pneumonia',
    title: 'UTI/Pneumonia',
    description: 'Culture-guided therapy, resistance prevention.',
    href: TEMP_SERVICE_HREF,
    icon: PathogenIcon,
    hoverImage: serviceHover,
  },
]
