import { NavLink as RouterNavLink } from 'react-router-dom'
import { contactNavLink, primaryNavLinks } from '@/data/navigation'

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  [
    'whitespace-nowrap text-[17px] font-medium no-underline transition-colors duration-200',
    isActive ? 'text-carely-lime' : 'text-carely-white hover:text-carely-lime',
  ].join(' ')

/** Flat row (no nested list) matching the handoff's single 42px-gap flex group. */
export function DesktopNav() {
  return (
    <div className="hidden items-center gap-[42px] min-[860px]:flex">
      {primaryNavLinks.map((link) => (
        <RouterNavLink key={link.href} to={link.href} end={link.href === '/'} className={linkClasses}>
          {link.label}
        </RouterNavLink>
      ))}

      <RouterNavLink
        to={contactNavLink.href}
        className="flex h-[52px] items-center whitespace-nowrap rounded-full bg-carely-white px-[30px] text-[17px] font-semibold text-carely-deep no-underline transition-colors duration-200 hover:bg-carely-lime focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-apricot"
      >
        {contactNavLink.label}
      </RouterNavLink>
    </div>
  )
}
