import { useId, useRef, useState } from 'react'
import { NavLink as RouterNavLink, Link, useLocation } from 'react-router-dom'
import logoSchg from '@/assets/brand/logo-schg.png'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { contactInfo } from '@/data/contactInfo'
import { contactNavLink, primaryNavLinks } from '@/data/navigation'
import { useDialogFocusTrap } from '@/hooks/useDialogFocusTrap'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

const ArrowIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#273A29" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MailIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="#273A29" strokeWidth={1.7} />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke="#273A29" strokeWidth={1.7} strokeLinejoin="round" />
  </svg>
)

const PhoneIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.2 3.8h3l1.5 3.7-2 1.4a10.5 10.5 0 0 0 5.4 5.4l1.4-2 3.7 1.5v3a1.8 1.8 0 0 1-2 1.8C11.4 18.8 5.2 12.6 4.4 5.8a1.8 1.8 0 0 1 1.8-2Z"
      stroke="#273A29"
      strokeWidth={1.7}
      strokeLinejoin="round"
    />
  </svg>
)

const sheetLinkClasses = ({ isActive }: { isActive: boolean }) =>
  [
    'flex items-center justify-between border-b border-carely-lime/20 py-5 font-editorial text-[29px] font-normal no-underline',
    isActive ? 'text-carely-lime' : 'text-carely-ivory',
  ].join(' ')

/**
 * On every page but Contact, the header pill's right-hand CTA and the sheet's
 * bottom button both point at `/contact` — the normal "get in touch" action.
 * On `/contact` itself that's a dead self-link, so the pill CTA becomes a
 * direct `mailto:`/`tel:` action instead (README "Header") and the sheet's
 * Contact Us button becomes the active nav item rather than a repeated CTA.
 */
function getContactPillCta(isContactPage: boolean) {
  if (!isContactPage) {
    return { label: contactNavLink.label, href: contactNavLink.href, icon: null }
  }

  if (contactInfo.phone) {
    return { label: 'Call', href: `tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`, icon: PhoneIcon }
  }

  return { label: 'Email', href: `mailto:${contactInfo.email}`, icon: MailIcon }
}

/**
 * Direction 1b's compact floating pill header, mobile-only (<640px). Renders
 * globally via Navbar (README: "global mobile navigation ... required by
 * this design"), independent of the >=640px Navbar/DesktopNav/MobileNav
 * pill+dropdown, which is unchanged. The Home page's mobile Hero pulls itself
 * up underneath this header (margin-top:-70px) — this component makes no
 * assumption about page content.
 */
export function MobileFloatingNav() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
  const location = useLocation()
  const isContactPage = location.pathname === contactNavLink.href
  const pillCta = getContactPillCta(isContactPage)

  useLockBodyScroll(open)
  useDialogFocusTrap(open, panelRef, () => setOpen(false), triggerRef)

  return (
    <div className="sticky top-0 z-30 px-[14px] pt-3 min-[640px]:hidden">
      <nav
        aria-label="Primary"
        className="flex h-[58px] items-center justify-between rounded-[40px] bg-carely-deep/[0.82] py-0 pr-2 pl-4 backdrop-blur-[8px]"
      >
        <Link to="/" className="flex shrink-0 items-center no-underline">
          <img src={logoSchg} alt="Senior Care Health Group" className="h-7 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-2">
          {pillCta.href.startsWith('mailto:') || pillCta.href.startsWith('tel:') ? (
            <a
              href={pillCta.href}
              className="flex h-[46px] items-center gap-2 rounded-full bg-carely-apricot px-[18px] text-[15px] font-semibold whitespace-nowrap text-carely-deep no-underline transition-colors duration-200 active:bg-carely-lime focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
            >
              {pillCta.icon}
              {pillCta.label}
            </a>
          ) : (
            <Link
              to={pillCta.href}
              className="flex h-[46px] items-center rounded-full bg-carely-apricot px-[18px] text-[15px] font-semibold whitespace-nowrap text-carely-deep no-underline transition-colors duration-200 active:bg-carely-lime focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
            >
              {pillCta.label}
            </Link>
          )}

          <button
            ref={triggerRef}
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
            className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-carely-white/35 text-carely-white transition-colors duration-200 active:border-carely-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
          >
            {open ? <CloseIcon className="h-[18px] w-[18px]" /> : <MenuIcon className="h-[14px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="absolute top-0 right-0 left-0 z-40 flex h-screen flex-col bg-carely-deep px-[22px] pt-6 pb-7 box-border"
        >
          <div className="flex items-center justify-between">
            <img src={logoSchg} alt="Senior Care Health Group" className="h-[30px] w-auto object-contain" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[1.5px] border-carely-white/35 text-carely-white transition-colors duration-200 active:border-carely-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
            >
              <CloseIcon className="h-[18px] w-[18px]" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-[34px] flex flex-col">
            {primaryNavLinks.map((link) => (
              <RouterNavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setOpen(false)}
                className={sheetLinkClasses}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive ? <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-carely-lime" /> : null}
                  </>
                )}
              </RouterNavLink>
            ))}
          </nav>

          <Link
            to={contactNavLink.href}
            onClick={() => setOpen(false)}
            aria-current={isContactPage ? 'page' : undefined}
            className={[
              'mt-auto flex h-[60px] items-center justify-center gap-3 rounded-2xl text-lg font-semibold text-carely-deep no-underline',
              isContactPage ? 'bg-carely-lime' : 'bg-carely-apricot',
            ].join(' ')}
          >
            {contactNavLink.label}
            {isContactPage ? <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-carely-deep" /> : ArrowIcon}
          </Link>
          <p className="mt-[18px] text-center text-[15px] text-carely-ivory/[0.72]">info@seniorcarehealthgroup.com</p>
        </div>
      ) : null}
    </div>
  )
}
