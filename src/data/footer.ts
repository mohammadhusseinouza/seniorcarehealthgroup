import type { FooterSocialLink, NavLink } from '@/types'

export const footerQuickLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
]

/**
 * Canonical, official business contact details for Senior Care Health Group.
 * Every component that renders phone/fax/email/address must import from here
 * (directly, or via `contactInfo`) rather than hardcoding its own copy. The
 * street address has no confirmed official value yet — it is kept as the
 * original prototype placeholder (Navbar.dc.html / README) until a real one
 * is supplied.
 */
export const footerContact: {
  addressLines: readonly [string, string]
  email: string
  phone: string
  fax: string
} = {
  addressLines: ['123 Maplewood Drive,', 'Pinehill, CA 90210'],
  email: 'Referrals@seniorcarehomellc.com',
  phone: '734-542-5512',
  fax: '734-540-1130',
}

/**
 * Facebook/Instagram/LinkedIn have no real profile URL anywhere in the
 * project yet — `href` is left undefined rather than filled with an invented
 * or placeholder "#" link, so Footer.tsx renders them as inert buttons until
 * real URLs are supplied. Email is real and functional (mailto:), sourced
 * from `footerContact` rather than duplicated here.
 */
export const footerSocialLinks: FooterSocialLink[] = [
  { id: 'facebook', label: 'Facebook' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'email', label: 'Email', href: `mailto:${footerContact.email}` },
]
