import servicesHeroBg from '@/assets/images/hero/hero big.webp'
import { CtaSection } from '@/components/layout/CtaSection/CtaSection'
import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { PageHero } from '@/components/layout/PageHero/PageHero'
import { ServiceCardsSection } from './sections/ServiceCards/ServiceCardsSection'

/**
 * Services — apricot page hero → the seven-card catalogue (3 primary + 4
 * secondary) → the shared "Join Us Today" CTA. Navbar, Footer, PageHero and
 * CtaSection are the production shared components.
 */
export function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero titleMain="Our" titleAccent="services" breadcrumbCurrent="Services" image={servicesHeroBg} mobileVariant="services" />
        <ServiceCardsSection />
        <CtaSection mobileVariant="services" />
      </main>
      <Footer />
    </>
  )
}
