import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'telemedicine',
    title: 'Telemedicine Services',
    description:
      'Our telemedicine services further enhance the level of care we provide by allowing PCAs and NPs to triage cases via video with immediate physician backup.',
    imageSlot: 'svc-telemedicine',
    imageAlt: 'Senior on a video call with a doctor, laptop at home',
    imageSide: 'right',
  },
  {
    id: 'onsite',
    title: 'On-Site Care',
    description:
      'Daily rounding, early treatment, and on-site medication management ensure residents receive the right care, right away.',
    imageSlot: 'svc-onsite',
    imageAlt: 'Caregiver and senior talking by a window',
    imageSide: 'left',
  },
  {
    id: 'specialist',
    title: 'Specialist Access',
    description:
      'We provide direct access to specialists including psychiatry, ID, cardiology, and more—at the right time for better outcomes.',
    imageSlot: 'svc-specialist',
    imageAlt: 'Senior woman with a specialist, warm daylight',
    imageSide: 'right',
  },
]
