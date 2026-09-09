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
  image: string
  imageSlot: string
  imageAlt: string
  imageSide: 'left' | 'right'
}

export interface PartnerBenefit {
  id: string
  title: string
  icon: ReactNode
}

export interface CareHomeResult {
  id: string
  title: string
  body: string
  icon: ReactNode
  /** `row` = icon beside text (left column); `column` = icon stacked above text (right column). */
  layout: 'row' | 'column'
}

export interface ServiceCardItem {
  id: string
  title: string
  description: string
  /** Destination for the whole-card link. */
  href: string
  /** Inner SVG elements only (24×24 grid); stroke props come from ServiceCard. */
  icon: ReactNode
  /** Decorative photo behind the forest wash on hover/focus. Per-card so distinct photos can drop in later. */
  hoverImage: string
}
