import contactPortrait from '@/assets/images/contact/message us.webp'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { ContactForm } from './ContactForm'

const PhoneIcon = (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.5 4h3l1.4 3.6-2 1.4a10 10 0 0 0 5.1 5.1l1.4-2L19 13.5v3a2 2 0 0 1-2.2 2A13.5 13.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Bespoke wrapper (not SectionShell): the handoff's vertical padding here
 * (clamp(70px,8vw,120px)) differs from SectionShell's fixed clamp(64px,7vw,110px)
 * — only the horizontal gutter happens to match. A bespoke wrapper gets the
 * exact value without fighting a Tailwind class-specificity conflict.
 *
 * No "Let's Talk" phone number exists anywhere in the approved copy, and the
 * prototype's own link is a placeholder `href="#"` — rather than inventing a
 * number or leaving a bare `#`, this points to the real form on the same
 * page (`#contact-form`), which is what the CTA is actually adjacent to.
 */
export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="box-border w-full bg-carely-ivory-alt px-[clamp(24px,4vw,60px)] py-[clamp(70px,8vw,120px)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-[clamp(48px,5vw,80px)] min-[1000px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <div className="min-w-0">
          <h2 id="contact-title" className="m-0 font-editorial text-[clamp(46px,5.6vw,78px)] leading-[1.05] font-normal text-carely-deep">
            <span className="block">write us</span>
            <span className="block">a message</span>
          </h2>

          <span aria-hidden="true" className="mt-[30px] block h-1 w-[46px] rounded-full bg-carely-apricot" />

          <a
            href="#contact-form"
            className="mt-[30px] inline-flex h-[60px] items-center gap-[13px] rounded-full bg-carely-apricot px-8 text-[19px] font-semibold whitespace-nowrap text-carely-deep no-underline transition-colors duration-200 hover:bg-carely-deep hover:text-carely-white focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep"
          >
            {PhoneIcon}
            Let&apos;s Talk
          </a>

          <div className="mt-9 aspect-square w-[min(390px,100%)] overflow-hidden rounded-full">
            <ResponsiveImage src={contactPortrait} alt="Senior couple and a care representative looking at a tablet" />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
