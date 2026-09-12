import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
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
        <RiskFreePilot />
      </main>
      <Footer />
    </>
  )
}
