import type { FooterSocialLink, NavLink } from '@/types'

export const footerQuickLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
]

/**
 * Facebook/Instagram/LinkedIn have no real profile URL anywhere in the
 * project yet — `href` is left undefined rather than filled with an invented
 * or placeholder "#" link, so Footer.tsx renders them as inert buttons until
 * real URLs are supplied. Email is real and functional (mailto:).
 */
export const footerSocialLinks: FooterSocialLink[] = [
  { id: 'facebook', label: 'Facebook' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'email', label: 'Email', href: 'mailto:info@seniorcarehealthgroup.com' },
]

/**
 * Prototype placeholder business details (Navbar.dc.html / README) — no
 * other approved address, email, or phone number exists anywhere in the
 * project. Kept faithfully, but these are not verified real contact details.
 */
export const footerContact: { addressLines: readonly [string, string]; email: string } = {
  addressLines: ['123 Maplewood Drive,', 'Pinehill, CA 90210'],
  email: 'info@seniorcarehealthgroup.com',
}
