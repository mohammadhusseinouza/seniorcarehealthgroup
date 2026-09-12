import heroMain from '@/assets/images/hero/hero big.webp'
import heroSecondary from '@/assets/images/hero/hero small.webp'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { BookAppointmentBadge } from './BookAppointmentBadge'
import { HeroValueMarquee } from './HeroValueMarquee'
import { WorkingHoursAccordion } from './WorkingHoursAccordion'

const HERO_WASH = 'linear-gradient(180deg, rgba(39,58,41,0.55) 0%, rgba(39,58,41,0) 38%, rgba(39,58,41,0.25) 100%)'

/**
 * Direction 1b: full-bleed photo first, green editorial panel lifted over its
 * bottom edge. `-mt-[70px]` pulls this section up so the photo starts behind
 * MobileFloatingNav's sticky pill (README "Hero" — margin-top: -70px).
 */
export function MobileHero() {
  return (
    <section aria-labelledby="mobile-hero-title" className="-mt-[70px] min-[640px]:hidden">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage
            src={heroMain}
            alt="Caregiver holding hands with a seated senior woman"
            objectPosition="center 35%"
            className="hero-ken-mobile"
          />
        </div>
        <span aria-hidden="true" className="absolute inset-0" style={{ background: HERO_WASH }} />
      </div>

      <div className="relative mx-4 -mt-16 rounded-[30px] bg-carely-deep px-[22px] pt-6 pb-[26px]">
        <p className="m-0 mb-4 flex items-center gap-[10px] font-editorial text-base text-carely-apricot italic">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-carely-apricot" />
          Discover The Power Of Premium
        </p>

        <h1
          id="mobile-hero-title"
          className="m-0 text-pretty text-[32px] leading-[1.16] font-normal tracking-[-0.02em] text-carely-white"
        >
          Delivering holistic senior care that honors each{' '}
          <em className="font-editorial font-normal italic">individual&apos;s life journey</em>
        </h1>

        <p className="mt-[18px] text-base leading-[1.65] text-white/[0.88]">
          At our senior care community, we understand that aging is a deeply personal journey. That&apos;s why we
          focus on a holistic, resident-centered care that nurtures the mind, body, and spirit.
        </p>

        <div className="mt-[22px] flex items-center justify-between gap-4">
          <a
            href="#contact-form-mobile"
            className="flex h-[54px] items-center rounded-full bg-carely-apricot px-6 text-[16.5px] font-semibold text-carely-deep no-underline transition-colors duration-200 active:bg-carely-lime focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
          >
            Book Appointment
          </a>
          <BookAppointmentBadge size={104} arrowSize={22} href="#contact-form-mobile" />
        </div>
      </div>

      <WorkingHoursAccordion />

      <div className="mx-4 mt-[14px] mb-5 h-[180px] overflow-hidden rounded-[26px]">
        <ResponsiveImage
          src={heroSecondary}
          alt="Caregiver with a seated elderly man, home setting"
          objectPosition="center 30%"
        />
      </div>

      <HeroValueMarquee variant="bleed" />
    </section>
  )
}
