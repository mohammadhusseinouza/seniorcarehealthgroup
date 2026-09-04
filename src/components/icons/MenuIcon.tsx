interface IconProps {
  className?: string
}

/** Exact three-bar mark from the approved handoff (Navbar.dc.html). */
export function MenuIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 18 14" aria-hidden="true" className={className} fill="none">
      <rect width="18" height="2" rx="1" fill="currentColor" />
      <rect y="6" width="18" height="2" rx="1" fill="currentColor" />
      <rect y="12" width="18" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}
