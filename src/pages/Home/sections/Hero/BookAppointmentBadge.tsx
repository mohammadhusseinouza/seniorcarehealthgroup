export function BookAppointmentBadge() {
  return (
    <a
      href="#contact"
      aria-label="Book Appointment"
      className="relative flex h-[132px] w-[132px] shrink-0 items-center justify-center rounded-full text-carely-apricot transition-transform duration-300 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carely-apricot"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full border border-carely-apricot/40" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth={1.8}>
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
