export function BookAppointmentBadge() {
  return (
    <a
      href="#contact"
      aria-label="Book Appointment"
      className="hero-badge relative flex h-[132px] w-[132px] shrink-0 items-center justify-center rounded-full no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carely-apricot"
    >
      <svg
        viewBox="0 0 132 132"
        width={132}
        height={132}
        aria-hidden="true"
        className="hero-badge-ring absolute inset-0"
      >
        <defs>
          <path id="carely-badge-arc" d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
        </defs>
        <text fontFamily="'DM Sans', sans-serif" fontSize={12.5} letterSpacing={1.6} fill="#E2A76F">
          <textPath href="#carely-badge-arc" startOffset="4%">
            Book Appointment ✳ Book Appointment ✳
          </textPath>
        </text>
      </svg>

      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="hero-badge-arrow">
        <path d="M7 17 17 7M9 7h8v8" stroke="#E2A76F" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
