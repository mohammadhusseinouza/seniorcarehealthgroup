import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { LogoMark } from '@/components/icons/LogoMark'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  return (
    <div className="flex w-full justify-center bg-carely-ivory pt-[30px] pb-2">
      {/* z-[60] keeps the pill (and its menu trigger) clickable above the mobile scrim (z-50). */}
      <nav
        aria-label="Primary"
        className="relative z-[60] flex h-20 w-[calc(100%-64px)] max-w-[1080px] items-center justify-between rounded-[44px] bg-carely-deep py-2 pr-3.5 pl-8"
      >
        <Link to="/" className="flex items-center gap-[9px] text-carely-white no-underline">
          <LogoMark className="h-6 w-6" />
          <span className="text-[25px] font-medium tracking-[-0.015em]">Carely</span>
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
    </div>
  )
}
