import { Link } from 'react-router-dom'

const ArrowUpRightIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * Shared "Join Us Today" CTA band (used on About Us and Services —
 * SHARED_COMPONENTS.md § CtaSection). Flat apricot button links to the
 * production Contact route (the prototype's `#contact` anchor maps to it).
 */
export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative box-border w-full overflow-hidden bg-carely-ivory-alt px-[clamp(24px,5vw,72px)] py-[clamp(72px,8vw,130px)]"
    >
      {/* Botanical line drawing (custom mark — paths verbatim from CtaSection.dc.html). */}
      <svg
        aria-hidden="true"
        viewBox="0 0 240 240"
        className="pointer-events-none absolute top-[clamp(-56px,-3vw,-20px)] left-[clamp(-70px,-4vw,-24px)] h-auto w-[clamp(150px,17vw,250px)] opacity-[0.13]"
      >
        <g fill="none" stroke="#273A29" strokeWidth={1.4} strokeLinecap="round">
          <path d="M14 8c44 28 86 74 108 132" />
          <path d="M30 26c34-2 60 10 72 32-26 8-52-4-72-32ZM48 54c34-4 60 8 74 30-26 8-53-2-74-30ZM66 84c33-6 59 6 73 28-26 8-52-1-73-28ZM84 116c32-8 58 4 72 26-26 8-51 0-72-26ZM100 150c31-9 56 2 70 24-25 8-49-1-70-24Z" />
          <path d="M24 20c-4 32 6 58 26 74-8-26 0-52 24-72M46 62c-8 30 0 56 18 72" />
        </g>
      </svg>

      {/* Four-point sparkle. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="pointer-events-none absolute top-[52%] left-[clamp(26px,5vw,96px)] h-auto w-[clamp(20px,2vw,30px)]"
      >
        <path
          d="M20 2c1.6 10 6 14.4 16 16-10 1.6-14.4 6-16 16-1.6-10-6-14.4-16-16 10-1.6 14.4-6 16-16Z"
          fill="#E2A76F"
          opacity={0.85}
        />
      </svg>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[44%] left-[30%] h-2.5 w-2.5 rounded-full bg-carely-apricot"
      />

      <div className="relative mx-auto max-w-[1000px] text-center">
        <p className="m-0 flex items-center justify-center gap-[11px] font-editorial text-[clamp(18px,1.6vw,22px)] font-normal text-carely-deep italic">
          <span aria-hidden="true" className="block h-[9px] w-[9px] shrink-0 rounded-full bg-carely-apricot" />
          Join Us Today
        </p>

        <h2
          id="cta-title"
          className="mt-[clamp(18px,2vw,28px)] text-[clamp(34px,4.2vw,64px)] leading-[1.12] font-bold tracking-[-0.025em] text-balance text-carely-deep"
        >
          Schedule a personalized tour or{' '}
          <em className="block font-editorial font-normal tracking-normal italic leading-[1.2]">care consultation</em>
        </h2>

        <div className="mt-[clamp(34px,3.6vw,56px)] flex justify-center">
          <Link
            to="/contact"
            className="inline-flex min-h-[56px] items-center gap-3 rounded-[14px] bg-carely-apricot px-[34px] text-[19px] font-semibold text-carely-white no-underline transition-colors duration-[250ms] hover:bg-carely-lime hover:text-carely-deep focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep"
          >
            Book Appointment
            {ArrowUpRightIcon}
          </Link>
        </div>
      </div>
    </section>
  )
}
