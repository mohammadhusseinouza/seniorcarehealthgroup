import { useRef, type RefObject } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { contactNavLink, primaryNavLinks } from '@/data/navigation'
import { useDialogFocusTrap } from '@/hooks/useDialogFocusTrap'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

interface MobileNavProps {
  id: string
  open: boolean
  onClose: () => void
  triggerRef: RefObject<HTMLButtonElement | null>
}

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-[14px] px-5 py-[14px] text-[17px] font-medium no-underline transition-colors duration-200',
    isActive ? 'text-carely-lime' : 'text-carely-white hover:bg-white/[0.08] hover:text-carely-lime',
  ].join(' ')

/**
 * Floating expanded panel (not a full-screen page), matching Navbar.dc.html:
 * fixed scrim, flex-centered `calc(100% - 64px)` panel offset 120px from the top.
 * Focus-trapped, closes on Escape / scrim click / link click (README 7 — not in
 * the prototype itself, added per the handoff's own instruction to add it).
 */
export function MobileNav({ id, open, onClose, triggerRef }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  useLockBodyScroll(open)
  useDialogFocusTrap(open, panelRef, onClose, triggerRef)

  if (!open) return null

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex justify-center bg-carely-black/35 min-[860px]:hidden">
      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        onClick={(event) => event.stopPropagation()}
        className="mt-[120px] h-fit w-[calc(100%-64px)] max-w-[1080px] rounded-[28px] bg-carely-deep p-3"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {primaryNavLinks.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              onClick={onClose}
              className={linkClasses}
            >
              {link.label}
            </RouterNavLink>
          ))}

          <RouterNavLink
            to={contactNavLink.href}
            onClick={onClose}
            className="mt-2 block rounded-[14px] bg-carely-ivory px-5 py-[14px] text-center text-[17px] font-bold text-carely-black no-underline transition-colors duration-200 hover:bg-carely-lime"
          >
            {contactNavLink.label}
          </RouterNavLink>
        </nav>
      </div>
    </div>
  )
}
