import { Link } from 'react-router-dom'
import { services } from '@/data/services'
import { AdditionalClinicalServices } from './AdditionalClinicalServices'

const ArrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#273A29" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SwipeIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#6E756E" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * Native horizontal scroll-snap carousel, no JS. 290px cards in a ~390px
 * viewport leave a deliberate ~54px peek (README "Core services").
 */
export function MobileCoreServices() {
  return (
    <section aria-labelledby="mobile-services-title" className="bg-carely-ivory-alt pt-[52px] pb-[56px] min-[640px]:hidden">
      <header className="px-5">
        <span className="inline-flex h-8 items-center rounded-full bg-carely-icon-soft px-4 text-sm font-semibold whitespace-nowrap text-carely-deep">
          Our Core Services
        </span>

        <h2
          id="mobile-services-title"
          className="mt-4 font-editorial text-[32px] leading-[1.14] font-normal text-carely-deep"
        >
          <span className="block">Comprehensive care,</span>
          <span className="block text-carely-apricot italic">wherever you need it.</span>
        </h2>
      </header>

      <div
        className="mt-0.5 flex gap-[14px] overflow-x-auto px-5 pt-[26px] pb-1.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map((service) => (
          <article
            key={service.id}
            className="w-[290px] shrink-0 overflow-hidden rounded-[22px] border border-carely-deep/[0.09] bg-carely-card"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative h-[186px] overflow-hidden">
              <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>

            <div className="relative -mt-7 px-5 pb-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-carely-lime shadow-[0_6px_18px_rgba(39,58,41,0.16)] [&>svg]:h-[26px] [&>svg]:w-[26px]">
                {service.icon}
              </span>

              <h3 className="mt-4 font-editorial text-[25px] leading-[1.2] font-normal text-carely-deep">
                {service.title}
              </h3>

              <p className="mt-3 text-pretty text-base leading-[1.55] text-carely-body">{service.description}</p>

              <Link
                to="/services"
                className="mt-5 inline-flex h-12 items-center gap-3 rounded-full bg-carely-deep py-0 pr-2 pl-[22px] text-[15px] font-semibold whitespace-nowrap text-carely-white no-underline transition-colors duration-200 active:bg-carely-dark-hover focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-apricot"
              >
                Learn more
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-carely-lime">
                  {ArrowIcon}
                </span>
              </Link>
            </div>
          </article>
        ))}

        <span aria-hidden="true" className="w-1.5 shrink-0" />
      </div>

      <p className="mt-3 flex items-center gap-2 px-5 text-[13px] text-carely-muted">
        {SwipeIcon}
        Swipe for all three services
      </p>

      <AdditionalClinicalServices variant="mobile" />
    </section>
  )
}
