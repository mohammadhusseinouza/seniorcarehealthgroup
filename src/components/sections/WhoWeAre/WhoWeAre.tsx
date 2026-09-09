import { useReveal } from '@/hooks/useReveal'
import { CircularBadge } from './CircularBadge'
import { ExperienceStat } from './ExperienceStat'
import './who-we-are.css'
import { WhoWeAreImages } from './WhoWeAreImages'

const CheckIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 12.6 4 4 8-9" stroke="#FFFFFF" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BENEFITS = [
  { id: 'telemedicine', label: '24/7 Telemedicine Access', pos: 'left' as const, delay: 'who-d6' },
  { id: 'onsite', label: 'Daily On-Site Provider Support', pos: 'right' as const, delay: 'who-d7' },
]

/**
 * Shared section — identical design in the homepage flow and on the About Us
 * page (both handoffs specify the same composition, copy and reveal chain), so
 * it lives here rather than under one page's sections.
 *
 * Bespoke wrapper (not SectionShell): the handoff sizes the inner wrapper as
 * `calc(100% - 80px)` with zero horizontal padding on the section itself —
 * the same gutter-via-inner-width model already used for Navbar and Why
 * Partner, distinct from most sections' shared symmetric clamp padding.
 */
export function WhoWeAre() {
  const { ref, isRevealed } = useReveal<HTMLDivElement>()

  return (
    <section aria-labelledby="who-title" className="w-full box-border bg-carely-ivory-alt py-[clamp(70px,8vw,130px)]">
      <div className="mx-auto grid w-[calc(100%-80px)] max-w-[1440px] grid-cols-1 items-center gap-[clamp(48px,5vw,80px)] min-[1100px]:grid-cols-[0.9fr_1.1fr]">
        <WhoWeAreImages />

        <div ref={ref} className={`min-w-0 max-w-[700px] ${isRevealed ? 'who-in' : ''}`}>
          <p data-pos="up" className="who-reveal who-d0 m-0 flex items-center gap-[11px] text-[17px] text-carely-apricot">
            <span aria-hidden="true" className="h-[9px] w-[9px] shrink-0 rounded-full bg-carely-apricot" />
            Who we are
          </p>

          <h2
            id="who-title"
            data-pos="up22"
            className="who-reveal who-d1 mt-[30px] max-w-[680px] text-pretty text-[clamp(36px,3.4vw,60px)] leading-[1.12] font-semibold tracking-[-0.02em] text-carely-deep"
          >
            Integrated healthcare support with <em className="font-editorial font-normal italic">compassion</em> and{' '}
            <em className="font-editorial font-normal italic">care always</em>
          </h2>

          <div className="mt-[clamp(32px,3.4vw,44px)] flex flex-wrap items-start gap-9">
            <CircularBadge />

            <div className="max-w-[650px] flex-1" style={{ flexBasis: 380, minWidth: 280 }}>
              <p data-pos="up" className="who-reveal who-d3 m-0 text-pretty text-lg leading-[1.65] text-carely-body">
                We provide 24/7 telemedicine services, allowing medical concerns to be addressed before they require
                an emergency room visit. Our experienced providers offer daily rounds Monday through Friday,
                supported by rapid-response protocols for infections, CHF, COPD, and sepsis, with physician oversight
                available around the clock.
              </p>
              <p data-pos="up" className="who-reveal who-d4 mt-6 text-pretty text-lg leading-[1.65] text-carely-body">
                Our team is fully integrated into your daily operations, working on-site five days a week to identify
                issues early and begin treatment immediately. From IV antibiotics and diuretics to steroids and BiPAP
                support, care can be delivered promptly without disrupting the flow of your facility.
              </p>
            </div>
          </div>

          <span aria-hidden="true" className="who-divider who-d5 my-[34px] block h-px bg-carely-lime/75" />

          <ul className="m-0 flex list-none flex-wrap gap-x-12 gap-y-[18px] p-0">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit.id}
                data-pos={benefit.pos}
                className={`who-reveal who-benefit ${benefit.delay} flex flex-1 items-center gap-[14px]`}
                style={{ flexBasis: 280 }}
              >
                <span
                  data-pos="check"
                  className={`who-reveal who-benefit-icon ${benefit.delay} flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-carely-apricot`}
                >
                  {CheckIcon}
                </span>
                <span className="who-benefit-text text-[17px] font-semibold text-carely-deep">{benefit.label}</span>
              </li>
            ))}
          </ul>

          <ExperienceStat />
        </div>
      </div>
    </section>
  )
}
