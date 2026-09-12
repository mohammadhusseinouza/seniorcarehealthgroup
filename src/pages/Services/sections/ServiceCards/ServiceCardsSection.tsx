import { primaryServices, secondaryServices } from '@/data/servicesCatalog'
import { MobileServiceCardsSection } from './MobileServiceCardsSection'
import { ServiceCard } from './ServiceCard'
import './service-cards.css'

const GRID_GAP = 'gap-[clamp(22px,2.2vw,32px)]'

/**
 * The seven-card catalogue. Two grids inside one flex column, all three gaps
 * equal (`clamp(22px,2.2vw,32px)`) so the cards read as one field, not two
 * blocks. No visible heading — the page hero titles the page — so an sr-only
 * `h2` keeps the outline continuous above the card `h3`s.
 *
 * Primary grid: 1 col → 2 (≥700px) → 3 (≥1040px). The third card sits alone at
 * half width in the 2-col band — approved, do not stretch it.
 * Secondary grid: 1 col → 2 (≥700px) → 4 (≥1200px).
 */
export function ServiceCardsSection() {
  return (
    <>
      <MobileServiceCardsSection />

      <section
        aria-labelledby="services-heading"
        className="hidden box-border w-full bg-carely-ivory pt-[clamp(60px,7vw,110px)] pb-[clamp(70px,8vw,130px)] min-[640px]:block"
      >
        <h2 id="services-heading" className="sr-only">
          Our services
        </h2>

        <div className={`mx-auto flex w-[calc(100%-80px)] max-w-[1440px] flex-col ${GRID_GAP}`}>
          <div className={`grid grid-cols-1 min-[700px]:grid-cols-2 min-[1040px]:grid-cols-3 ${GRID_GAP}`}>
            {primaryServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="primary" />
            ))}
          </div>

          <div className={`grid grid-cols-1 min-[700px]:grid-cols-2 min-[1200px]:grid-cols-4 ${GRID_GAP}`}>
            {secondaryServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="secondary" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
