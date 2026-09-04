import type { ReactNode } from 'react'

export type SectionTone = 'primary' | 'alternate' | 'dark'

export interface NavLink {
  label: string
  href: string
}

export interface FooterSocialLink {
  id: string
  label: string
  /** Real, functional URL. Omitted when the platform profile hasn't been provided yet. */
  href?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: ReactNode
  imageSlot: string
  imageAlt: string
  imageSide: 'left' | 'right'
}

export interface PartnerBenefit {
  id: string
  title: string
  icon: ReactNode
}
