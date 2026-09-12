import { Link } from 'react-router-dom'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ArrowUpRightIcon } from './CtaSection'

interface MobileCtaSectionProps {
  variant: 'about' | 'services'
}

/**
 * Ground alternates by page (Services README §11): About's sequence ends
 * hero -> ivory-alt -> ivory-alt -> deep, so this CTA sits on `ivory-alt`;
 * Services ends hero -> ivory-alt -> ivory -> deep, so this CTA sits on
 * `ivory` there instead. Getting this wrong would flatten the alternation
 * on whichever page didn't request it.
 */
const GROUND_CLASS: Record<MobileCtaSectionProps['variant'], string> = {
  about: 'bg-carely-ivory-alt',
  services: 'bg-carely-ivory',
}

/**
 * Mobile "Join Us Today" band (README): left-aligned, full-width button,
 * replacing desktop's centered `max-width: 1000px` block below 640px.
 * Reuses the same botanical/sparkle path data as desktop, repositioned.
 */
export function MobileCtaSection({ variant }: MobileCtaSectionProps) {
  return (
    <section
      aria-labelledby="mobile-cta-title"
      className={`relative overflow-hidden ${GROUND_CLASS[variant]} px-5 py-14 min-[640px]:hidden`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 240 240"
        className="pointer-events-none absolute top-[-26px] left-[-30px] h-auto w-[180px] opacity-[0.13]"
      >
        <g fill="none" stroke="#273A29" strokeWidth={1.4} strokeLinecap="round">
          <path d="M14 8c44 28 86 74 108 132" />
          <path d="M30 26c34-2 60 10 72 32-26 8-52-4-72-32ZM48 54c34-4 60 8 74 30-26 8-53-2-74-30ZM66 84c33-6 59 6 73 28-26 8-52-1-73-28ZM84 116c32-8 58 4 72 26-26 8-51 0-72-26ZM100 150c31-9 56 2 70 24-25 8-49-1-70-24Z" />
          <path d="M24 20c-4 32 6 58 26 74-8-26 0-52 24-72M46 62c-8 30 0 56 18 72" />
        </g>
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="pointer-events-none absolute top-[52%] left-[26px] h-auto w-[22px]"
      >
        <path
          d="M20 2c1.6 10 6 14.4 16 16-10 1.6-14.4 6-16 16-1.6-10-6-14.4-16-16 10-1.6 14.4-6 16-16Z"
          fill="#E2A76F"
          opacity={0.85}
        />
      </svg>

      <div className="relative">
        <SectionEyebrow text="Join Us Today" variant="lora" />

        <h2
          id="mobile-cta-title"
          className="mt-[18px] text-pretty text-[33px] leading-[1.12] font-bold tracking-[-0.025em] text-carely-deep"
        >
          Schedule a personalized tour or{' '}
          <em className="block font-editorial font-normal tracking-normal italic leading-[1.2]">care consultation</em>
        </h2>

        <Link
          to="/contact"
          className="mt-7 flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-carely-apricot text-lg font-semibold text-carely-white no-underline transition-colors duration-200 active:bg-carely-lime active:text-carely-deep"
        >
          Book Appointment
          {ArrowUpRightIcon}
        </Link>
      </div>
    </section>
  )
}
