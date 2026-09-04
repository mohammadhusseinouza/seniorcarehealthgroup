interface LogoMarkProps {
  className?: string
}

/** Exact mark from the approved handoff (Navbar.dc.html) — lime leaf, forest stem. */
export function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M12 2C12 2 6 6 6 13C6 17.4183 8.68629 21 12 21C15.3137 21 18 17.4183 18 13C18 6 12 2 12 2Z"
        fill="#D2E761"
      />
      <path d="M12 21V11" stroke="#273A29" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
