import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { ContactForm } from './ContactForm'
import { MobileReachOut } from './MobileReachOut'
import { OpeningHoursCard } from './OpeningHoursCard'

/**
 * "Reach out" — invitation + dark hours card on the left, the form panel on the
 * right. Columns top-align (`items-start`), not centered: the panel runs taller
 * than the left column and that is intended (README § 3). Full top padding /
 * short bottom padding pulls this into ContactLocation below it.
 */
export function ReachOut() {
  return (
    <>
      <MobileReachOut />

      <section
        aria-labelledby="reach-out-title"
        className="hidden box-border w-full bg-carely-ivory pt-[clamp(70px,8vw,130px)] pb-[clamp(24px,2.4vw,36px)] min-[640px]:block"
      >
      <div className="mx-auto grid w-[calc(100%-80px)] max-w-[1440px] grid-cols-1 items-start gap-[clamp(44px,5vw,90px)] min-[1040px]:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <SectionEyebrow text="Reach out" />

          <h2
            id="reach-out-title"
            className="mt-[18px] text-pretty text-[clamp(34px,3.4vw,56px)] leading-[1.12] font-bold tracking-[-0.025em] text-carely-deep"
          >
            Have questions? we’re just{' '}
            <em className="font-editorial font-normal tracking-normal italic">a message away</em>
          </h2>

          <p className="mt-[22px] max-w-[520px] text-pretty text-[18px] leading-[1.6] text-carely-muted">
            Fill out the form below and our team will get back to you shortly with the care and answers you need.
          </p>

          <OpeningHoursCard />
        </div>

        <ContactForm />
      </div>
      </section>
    </>
  )
}
