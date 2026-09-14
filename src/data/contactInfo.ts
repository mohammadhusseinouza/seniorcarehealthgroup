import { footerContact } from './footer'

/**
 * Canonical contact data for the Contact Us page. Address, email, phone, and
 * fax all come from the same source the Footer uses (`footerContact`), so the
 * business's official contact details are never duplicated across components.
 */
export const contactInfo = {
  addressLines: footerContact.addressLines,
  email: footerContact.email,
  phone: footerContact.phone as string | null,
  fax: footerContact.fax,
} as const

export interface OpeningHoursRow {
  label: string
  value: string
}

/** En dashes (–) are intentional — do not normalise to hyphens (README § 4). */
export const openingHours: OpeningHoursRow[] = [
  { label: 'Monday – Friday', value: '8:00 AM – 8:00 PM' },
  { label: 'Saturday – Sunday', value: 'Closed' },
]

/**
 * Prototype OpenStreetMap embed. The project has no map provider; this keeps
 * the prototype's provider, coordinates and bbox. The location itself is
 * placeholder-shaped ("Pinehill, CA" is not a real city) and needs
 * confirmation before launch.
 */
export const mapEmbed = {
  title: `Map showing the Senior Care Health Group location at ${footerContact.addressLines[0]} ${footerContact.addressLines[1]}`,
  src: 'https://www.openstreetmap.org/export/embed.html?bbox=-118.4405%2C34.0605%2C-118.3705%2C34.1105&layer=mapnik&marker=34.0901%2C-118.4065',
} as const
