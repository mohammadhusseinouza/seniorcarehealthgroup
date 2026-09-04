import type { Service } from '@/types'

/** Exact icon geometry from the approved handoff (Navbar.dc.html). */
const TelemedicineIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="13" height="10" rx="2.2" stroke="#273A29" strokeWidth={1.5} />
    <path d="m16 9.6 5-3v8l-5-3z" stroke="#273A29" strokeWidth={1.5} strokeLinejoin="round" />
    <path d="M7 19h9" stroke="#273A29" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)

const OnSiteIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 10.5 12 4l8 6.5V20H4z" stroke="#273A29" strokeWidth={1.5} strokeLinejoin="round" />
    <path d="M10 20v-5h4v5" stroke="#273A29" strokeWidth={1.5} strokeLinejoin="round" />
  </svg>
)

/**
 * The prototype's actual SVG here is a two-person consultation icon, not the
 * "bar-chart/trend" glyph the README's summary table names — per Phase 4 §0
 * (Navbar.dc.html takes priority over README wording on conflict).
 */
const SpecialistIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8.6" r="3.1" stroke="#273A29" strokeWidth={1.5} />
    <path d="M3.5 19c0-3 2.5-4.8 5.5-4.8s5.5 1.8 5.5 4.8" stroke="#273A29" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M16 6.2a2.9 2.9 0 0 1 0 5.4m1.2 2.9c2 .6 3.3 2.2 3.3 4.5" stroke="#273A29" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)

export const services: Service[] = [
  {
    id: 'telemedicine',
    title: 'Telemedicine Services',
    description:
      'Our telemedicine services further enhance the level of care we provide by allowing PCAs and NPs to triage cases via video with immediate physician backup.',
    icon: TelemedicineIcon,
    imageSlot: 'svc-telemedicine',
    imageAlt: 'Senior on a video call with a doctor, laptop at home',
    imageSide: 'right',
  },
  {
    id: 'onsite',
    title: 'On-Site Care',
    description:
      'Daily rounding, early treatment, and on-site medication management ensure residents receive the right care, right away.',
    icon: OnSiteIcon,
    imageSlot: 'svc-onsite',
    imageAlt: 'Caregiver and senior talking by a window',
    imageSide: 'left',
  },
  {
    id: 'specialist',
    title: 'Specialist Access',
    description:
      'We provide direct access to specialists including psychiatry, ID, cardiology, and more—at the right time for better outcomes.',
    icon: SpecialistIcon,
    imageSlot: 'svc-specialist',
    imageAlt: 'Senior woman with a specialist, warm daylight',
    imageSide: 'right',
  },
]
