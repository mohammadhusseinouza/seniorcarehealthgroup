import type { ReactNode } from 'react'

export type SectionTone = 'primary' | 'alternate' | 'dark'

export interface NavLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: NavLink[]
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
}
