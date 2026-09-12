import { useId } from 'react'

interface BookAppointmentBadgeProps {
  size?: number
  arrowSize?: number
  href?: string
}

/** useId keeps the arc path's id unique — desktop and mobile can both render this badge at once. */
export function BookAppointmentBadge({ size = 132, arrowSize = 26, href = '#contact-form' }: BookAppointmentBadgeProps) {
  const arcId = `carely-badge-arc-${useId()}`

  return (
    <a
      href={href}
      aria-label="Book Appointment"
      className="hero-badge relative flex shrink-0 items-center justify-center overflow-hidden rounded-full no-underline focus-ring focus-visible:outline-offset-4 focus-visible:outline-carely-apricot"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 132 132"
        width={size}
        height={size}
        aria-hidden="true"
        className="hero-badge-ring absolute inset-0"
      >
        <defs>
          <path id={arcId} d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
        </defs>
        <text fontFamily="'DM Sans', sans-serif" fontSize={12.5} letterSpacing={1.6} fill="#E2A76F">
          <textPath href={`#${arcId}`} startOffset="4%">
            Book Appointment ✳ Book Appointment ✳
          </textPath>
        </text>
      </svg>

      <svg
        width={arrowSize}
        height={arrowSize}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="hero-badge-arrow"
      >
        <path d="M7 17 17 7M9 7h8v8" stroke="#E2A76F" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
