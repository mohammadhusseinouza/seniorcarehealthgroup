import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoSchg from '@/assets/brand/logo-schg.png'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  return (
    <>
      {/*
       * Only the green pill is sticky — no full-width band. It flows 30px below the
       * page top at rest (mt-[30px], over the ivory body background) and floats at
       * top:16px while scrolling, with the homepage sections visible around it.
       * Its containing block is #root (the whole document), so it stays stuck for the
       * entire page scroll without any JS. mb-2 keeps the approved gap before the Hero.
       * z-[60] keeps the pill (and its menu trigger) clickable above the mobile scrim (z-50).
       */}
      <nav
        aria-label="Primary"
        className="sticky top-4 z-[60] mx-auto mt-[30px] mb-2 flex h-20 w-[calc(100%-64px)] max-w-[1080px] items-center justify-between rounded-[44px] bg-carely-deep py-2 pr-3.5 pl-8"
      >
        <Link to="/" className="flex shrink-0 items-center no-underline">
          {/* Official lockup, used unmodified. object-contain + w-auto preserves its 3:1 ratio;
           * the 80px pill height and link layout are unchanged. */}
          <img
            src={logoSchg}
            alt="Senior Care Health Group"
            className="h-[38px] w-auto object-contain min-[860px]:h-11"
          />
        </Link>

        <DesktopNav />

        <button
          ref={triggerRef}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-carely-white/35 text-carely-white transition-colors duration-200 hover:border-carely-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carely-lime min-[860px]:hidden"
        >
          {menuOpen ? <CloseIcon className="h-[18px] w-[18px]" /> : <MenuIcon className="h-[14px] w-[18px]" />}
        </button>
      </nav>

      <MobileNav id={menuId} open={menuOpen} onClose={() => setMenuOpen(false)} triggerRef={triggerRef} />
    </>
  )
}
