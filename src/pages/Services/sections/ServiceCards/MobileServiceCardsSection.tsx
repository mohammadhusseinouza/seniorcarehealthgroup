import { useState, type UIEvent } from 'react'
import { Link } from 'react-router-dom'
import { IconCircle } from '@/components/ui/IconCircle'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { primaryServices, secondaryServices } from '@/data/servicesCatalog'

const ArrowUpRightIcon17 = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowUpRightIcon15 = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SwipeIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#6E756E" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * 290px card + 14px carousel gap. Keep in sync with the card's `w-[290px]`
 * and the carousel's `gap-[14px]` below — the scroll handler divides by this
 * to derive the active index (Services mobile README §9).
 */
const CARD_STEP = 304

/**
 * Mobile "Core Services" — a native scroll-snap carousel. There is no hover
 * on touch, so the card currently in view carries the inverted state
 * (service-cards.css `.msvc-active`) instead of `:hover`/`:focus-visible` —
 * the central interaction decision in the mobile Services handoff.
 */
function PrimaryCarousel() {
  const [activeCard, setActiveCard] = useState(0)

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const rawIndex = Math.round(event.currentTarget.scrollLeft / CARD_STEP)
    const nextIndex = Math.min(Math.max(rawIndex, 0), primaryServices.length - 1)
    setActiveCard((current) => (current === nextIndex ? current : nextIndex))
  }

  return (
    <>
      <div
        onScroll={handleScroll}
        className="flex gap-[14px] overflow-x-auto px-5 pt-5 pb-1.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {primaryServices.map((service, index) => (
          <Link
            key={service.id}
            to={service.href}
            aria-label={`Learn more about ${service.title}`}
            className={[
              'msvc-card relative box-border flex w-[290px] shrink-0 flex-col overflow-hidden rounded-[24px] p-[26px] no-underline',
              index === activeCard && 'msvc-active',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ scrollSnapAlign: 'start' }}
          >
            <span className="msvc-card-img pointer-events-none absolute inset-0 block overflow-hidden rounded-[inherit]">
              <span className="absolute inset-0 bg-carely-map">
                <img src={service.hoverImage} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
              </span>
              <span className="absolute inset-0 bg-carely-deep opacity-[0.78]" />
            </span>

            <span className="relative z-[1] flex flex-1 flex-col">
              <IconCircle size={74} bg={null} className="msvc-card-icon">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </IconCircle>

              <h3 className="msvc-card-title mt-[26px] text-pretty text-[22px] leading-[1.25] font-bold">{service.title}</h3>

              <p className="msvc-card-desc mt-3.5 mb-[26px] text-pretty text-base leading-[1.6]">{service.description}</p>

              <span aria-hidden="true" className="msvc-card-divider mt-auto block h-px" />

              <span className="msvc-card-learn mt-[22px] inline-flex items-center gap-2.5 text-[17px] font-bold">
                Learn More
                {ArrowUpRightIcon17}
              </span>
            </span>
          </Link>
        ))}

        <span aria-hidden="true" className="w-1.5 shrink-0" />
      </div>

      <div className="mt-3.5 flex items-center justify-between px-5">
        <p className="m-0 flex items-center gap-2 text-[13px] text-carely-muted">
          {SwipeIcon}
          Swipe through the three core services
        </p>

        <div aria-hidden="true" className="flex items-center gap-1.5">
          {primaryServices.map((service, index) => (
            <span
              key={service.id}
              className={['msvc-dot h-[7px] rounded-full', index === activeCard ? 'msvc-dot-active w-5' : 'w-[7px]'].join(' ')}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function SecondaryGrid() {
  return (
    <>
      <div className="mt-[38px] border-t border-carely-deep/[0.12] px-5 pt-[26px]">
        <h3 className="m-0 font-editorial text-[26px] leading-[1.15] font-normal text-carely-deep">Condition-specific care</h3>
        <p className="mt-2.5 text-[15.5px] leading-[1.55] text-carely-muted">Four focused programs delivered on-site.</p>
      </div>

      <div className="msvc-secondary-grid mt-5 grid grid-cols-2 gap-3 px-5">
        {secondaryServices.map((service) => (
          <Link
            key={service.id}
            to={service.href}
            aria-label={`Learn more about ${service.title}`}
            className="group box-border flex min-h-[206px] flex-col rounded-[22px] border border-carely-deep/[0.09] bg-carely-card p-[18px] no-underline transition-colors duration-200 active:border-carely-deep active:bg-carely-deep focus-visible:border-carely-deep focus-visible:bg-carely-deep focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-apricot"
          >
            <IconCircle
              size={56}
              bg={null}
              className="bg-carely-apricot transition-colors duration-200 group-active:bg-carely-ivory group-focus-visible:bg-carely-ivory"
            >
              <svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="stroke-carely-white transition-colors duration-200 group-active:stroke-carely-deep group-focus-visible:stroke-carely-deep"
              >
                {service.icon}
              </svg>
            </IconCircle>

            <h4 className="mt-4 text-pretty text-[17.5px] leading-[1.25] font-bold text-carely-deep transition-colors duration-200 group-active:text-carely-white group-focus-visible:text-carely-white">
              {service.title}
            </h4>

            <p className="mt-2 text-pretty text-[15px] leading-[1.5] text-carely-muted transition-colors duration-200 group-active:text-carely-white group-focus-visible:text-carely-white">
              {service.description}
            </p>

            <span
              aria-hidden="true"
              className="mt-auto block h-px bg-carely-deep/[0.12] transition-colors duration-200 group-active:bg-white/30 group-focus-visible:bg-white/30"
            />

            <span className="mt-[14px] inline-flex items-center gap-2 text-[15px] font-bold text-carely-deep transition-colors duration-200 group-active:text-carely-white group-focus-visible:text-carely-white">
              Learn More
              {ArrowUpRightIcon15}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}

/**
 * Mobile catalogue (README "Card catalogue"): three primary services as a
 * swipeable carousel with scroll-driven inversion, then the four secondary
 * services as a compact 2-up grid. Reuses `primaryServices`/`secondaryServices`
 * from `servicesCatalog.tsx` directly — no content or icon geometry is
 * duplicated. The `sr-only` `h2` matches desktop's, with its own id so the
 * two simultaneously-mounted branches never share one.
 */
export function MobileServiceCardsSection() {
  return (
    <section
      aria-labelledby="mobile-services-heading"
      className="mt-6 bg-carely-ivory-alt pt-8 pb-[52px] min-[640px]:hidden"
    >
      <h2 id="mobile-services-heading" className="sr-only">
        Our services
      </h2>

      <SectionEyebrow text="Core Services" variant="lora" className="px-5" />

      <PrimaryCarousel />
      <SecondaryGrid />
    </section>
  )
}
