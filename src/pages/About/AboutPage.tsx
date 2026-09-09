import aboutHeroBg from '@/assets/images/hero/hero big.webp'
import { CtaSection } from '@/components/layout/CtaSection/CtaSection'
import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { PageHero } from '@/components/layout/PageHero/PageHero'
import { WhoWeAre } from '@/components/sections/WhoWeAre/WhoWeAre'
import { OurCareHome } from './sections/OurCareHome/OurCareHome'

/**
 * About Us — apricot page hero → shared "Who we are" section (also on the
 * homepage) → the page-unique "Our Care Home" results grid → shared CTA band.
 * Navbar and Footer are the production shared components; branding stays
 * Senior Care Health Group.
 */
export function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero titleMain="About" titleAccent="us" breadcrumbCurrent="About Us" image={aboutHeroBg} />
        <WhoWeAre />
        <OurCareHome />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
