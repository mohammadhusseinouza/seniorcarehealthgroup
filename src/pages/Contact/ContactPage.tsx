import contactHeroBg from '@/assets/images/hero/hero big.webp'
import { Footer } from '@/components/layout/Footer/Footer'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { PageHero } from '@/components/layout/PageHero/PageHero'
import { ContactLocation } from './sections/ContactLocation/ContactLocation'
import { ReachOut } from './sections/ReachOut/ReachOut'

/**
 * Contact Us — apricot page hero → "Reach out" (invitation, hours card, form)
 * → "Contact us" (map + details). No CTA band: the form is the call to action.
 * The two sections carry asymmetric padding so they read as one block.
 */
export function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero titleMain="Contact" titleAccent="us" breadcrumbCurrent="Contact Us" image={contactHeroBg} mobileVariant="contact" />
        <ReachOut />
        <ContactLocation />
      </main>
      <Footer />
    </>
  )
}
