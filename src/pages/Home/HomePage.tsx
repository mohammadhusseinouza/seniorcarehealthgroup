import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { WhoWeAre } from '@/components/sections/WhoWeAre/WhoWeAre'
import { ContactSection } from './sections/Contact/ContactSection'
import { CoreServices } from './sections/CoreServices/CoreServices'
import { Hero } from './sections/Hero/Hero'
import { RiskFreePilot } from './sections/RiskFreePilot/RiskFreePilot'
import { WhyPartner } from './sections/WhyPartner/WhyPartner'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreServices />
        <WhyPartner />
        <WhoWeAre />
        <RiskFreePilot />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
