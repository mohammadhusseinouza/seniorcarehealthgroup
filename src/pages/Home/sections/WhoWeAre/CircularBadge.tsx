/** Purely decorative flourish (no href/role) — matches the prototype's plain aria-hidden span. */
export function CircularBadge() {
  return (
    <span
      aria-hidden="true"
      data-pos="badge"
      className="who-reveal who-badge who-d2 relative flex h-[136px] w-[136px] shrink-0 items-center justify-center"
    >
      <svg viewBox="0 0 136 136" width={136} height={136} aria-hidden="true" className="who-badge-ring absolute inset-0">
        <defs>
          <path id="who-badge-arc" d="M68,68 m-53,0 a53,53 0 1,1 106,0 a53,53 0 1,1 -106,0" />
        </defs>
        <text fontFamily="'DM Sans', sans-serif" fontSize={12.5} letterSpacing={1.4} fill="#E2A76F">
          <textPath href="#who-badge-arc" startOffset="2%">
            Who We Are • Who We Are • Who We Are •
          </textPath>
        </text>
      </svg>

      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="who-badge-arrow">
        <path d="M7 17 17 7M9 7h8v8" stroke="#E2A76F" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
