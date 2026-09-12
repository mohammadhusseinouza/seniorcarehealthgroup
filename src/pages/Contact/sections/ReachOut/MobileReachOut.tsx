import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ContactForm } from './ContactForm'
import { MobileOpeningHoursCard } from './MobileOpeningHoursCard'

/**
 * Mobile "Reach out" (README): intro, then the form, then Opening Hours —
 * the form is the reason for the visit, so it comes before the hours
 * reference card rather than after it as on desktop.
 */
export function MobileReachOut() {
  return (
    <section aria-labelledby="mobile-reach-out-title" className="mt-6 bg-carely-ivory pt-[30px] pb-11 min-[640px]:hidden">
      <div className="px-5">
        <SectionEyebrow text="Reach out" variant="lora" />

        <h2
          id="mobile-reach-out-title"
          className="mt-4 text-pretty text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-carely-deep"
        >
          Have questions? we’re just <em className="font-editorial font-normal tracking-normal italic">a message away</em>
        </h2>

        <p className="mt-4 text-pretty text-[16.5px] leading-[1.6] text-carely-muted">
          Fill out the form below and our team will get back to you shortly with the care and answers you need.
        </p>
      </div>

      <div className="mt-[22px] px-4">
        <ContactForm variant="mobile" />
      </div>

      <MobileOpeningHoursCard />
    </section>
  )
}
