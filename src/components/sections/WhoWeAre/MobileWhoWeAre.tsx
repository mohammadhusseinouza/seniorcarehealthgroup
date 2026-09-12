import { useState } from 'react'
import whoBack from '@/assets/images/who-we-are/who we ar 1.webp'
import whoFront from '@/assets/images/who-we-are/who we ar 2.webp'
import { ChevronIcon } from '@/components/icons/ChevronIcon'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { BENEFITS, CheckIcon } from './WhoWeAre'
import { CircularBadge } from './CircularBadge'

/**
 * Mobile "Who we are" (README): the overlapping photo pair leads full-bleed,
 * then text with the badge+stat merged into one row and the second paragraph
 * behind a "Read more" disclosure. Desktop's scroll-reveal chain is
 * intentionally dropped here — README: "sections are short enough that
 * staggered entrances read as lag."
 */
export function MobileWhoWeAre() {
  const [open, setOpen] = useState(false)

  return (
    <section aria-labelledby="mobile-who-title" className="mt-6 bg-carely-ivory-alt pt-7 pb-[52px] min-[640px]:hidden">
      <div className="relative mb-[18px] h-[300px]">
        <div className="absolute top-0 left-0 h-[80%] w-[62%] overflow-hidden rounded-r-[24px]">
          <ResponsiveImage src={whoBack} alt="Caregiver standing beside a seated senior woman" />
        </div>
        <div className="absolute top-[20%] left-[32%] z-[2] h-[80%] w-[66%] overflow-hidden rounded-l-[24px] shadow-[0_18px_44px_rgba(39,58,41,0.14)]">
          <ResponsiveImage src={whoFront} alt="Caregiver seated with a senior woman, warm interior" />
        </div>
      </div>

      <div className="px-5">
        <SectionEyebrow text="Who we are" variant="sans" />

        <h2
          id="mobile-who-title"
          className="mt-4 text-pretty text-[32px] leading-[1.14] font-semibold tracking-[-0.02em] text-carely-deep"
        >
          Integrated healthcare support with <em className="font-editorial font-normal italic">compassion</em> and{' '}
          <em className="font-editorial font-normal italic">care always</em>
        </h2>

        <div className="mt-[22px] flex items-center gap-5">
          <CircularBadge size={112} arrowSize={24} alwaysAnimate />
          <p className="m-0 flex items-baseline gap-[14px]">
            <span className="font-editorial text-[52px] leading-none text-carely-deep italic">17+</span>
            <span className="text-[17px] leading-[1.35] font-medium text-carely-deep">
              Years of
              <br />
              experience
            </span>
          </p>
        </div>

        <p className="mt-[22px] text-pretty text-[16.5px] leading-[1.65] text-carely-body">
          We provide 24/7 telemedicine services, allowing medical concerns to be addressed before they require an
          emergency room visit. Our experienced providers offer daily rounds Monday through Friday, supported by
          rapid-response protocols for infections, CHF, COPD, and sepsis, with physician oversight available around
          the clock.
        </p>

        {open ? (
          <p className="mt-[18px] text-pretty text-[16.5px] leading-[1.65] text-carely-body">
            Our team is fully integrated into your daily operations, working on-site five days a week to identify
            issues early and begin treatment immediately. From IV antibiotics and diuretics to steroids and BiPAP
            support, care can be delivered promptly without disrupting the flow of your facility.
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="mt-[14px] inline-flex min-h-12 items-center gap-[10px] bg-transparent text-base font-semibold text-carely-deep underline decoration-solid underline-offset-4"
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronIcon open={open} color="#273A29" size={22} />
        </button>

        <span aria-hidden="true" className="my-[26px] block h-px bg-carely-lime/75" />

        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {BENEFITS.map((benefit) => (
            <li key={benefit.id} className="flex items-center gap-[14px]">
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-carely-apricot">
                {CheckIcon}
              </span>
              <span className="text-[16.5px] font-semibold text-carely-deep">{benefit.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
