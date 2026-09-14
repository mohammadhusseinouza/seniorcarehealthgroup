import type { ReactNode } from 'react'
import { IconCircle } from '@/components/ui/IconCircle'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { contactInfo } from '@/data/contactInfo'
import { LocationMap } from './LocationMap'
import { MobileContactLocation } from './MobileContactLocation'

/** Exported for reuse by MobileContactLocation (same glyph, verbatim). */
export const MapPinIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s6-5.3 6-9.6A6 6 0 0 0 6 11.4C6 15.7 12 21 12 21Z" stroke="#FFFFFF" strokeWidth={1.7} strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2.3" stroke="#FFFFFF" strokeWidth={1.7} />
  </svg>
)

export const MailIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="#FFFFFF" strokeWidth={1.7} />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke="#FFFFFF" strokeWidth={1.7} strokeLinejoin="round" />
  </svg>
)

export const PhoneIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.2 3.8h3l1.5 3.7-2 1.4a10.5 10.5 0 0 0 5.4 5.4l1.4-2 3.7 1.5v3a1.8 1.8 0 0 1-2 1.8C11.4 18.8 5.2 12.6 4.4 5.8a1.8 1.8 0 0 1 1.8-2Z"
      stroke="#FFFFFF"
      strokeWidth={1.7}
      strokeLinejoin="round"
    />
  </svg>
)

const detailLinkClasses =
  'text-carely-muted no-underline transition-colors duration-[250ms] hover:text-carely-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carely-apricot motion-reduce:transition-none'

interface ContactDetailItem {
  id: string
  title: string
  icon: ReactNode
  body: ReactNode
  /** Long unbroken string (email) — allow mid-string wrapping. */
  wrap?: boolean
}

const details: ContactDetailItem[] = [
  {
    id: 'address',
    title: 'Address',
    icon: MapPinIcon,
    body: (
      <>
        {contactInfo.addressLines[0]}
        <br />
        {contactInfo.addressLines[1]}
      </>
    ),
  },
  {
    id: 'email',
    title: 'Email',
    icon: MailIcon,
    wrap: true,
    body: (
      <a href={`mailto:${contactInfo.email}`} className={detailLinkClasses}>
        {contactInfo.email}
      </a>
    ),
  },
  {
    id: 'phone',
    title: 'Phone',
    icon: PhoneIcon,
    body: contactInfo.phone ? (
      <>
        <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className={detailLinkClasses}>
          {contactInfo.phone}
        </a>
        <br />
        <span className="text-carely-muted">Fax: {contactInfo.fax}</span>
      </>
    ) : (
      'Available on request'
    ),
  },
]

/**
 * "Contact us" — desaturated map + address/email/phone. Map is first in the DOM
 * so it stays on top when the columns stack below 1040px (README § 8). Short top
 * padding / full bottom padding mirrors ReachOut, tying the two together.
 */
export function ContactLocation() {
  return (
    <>
      <MobileContactLocation />

      <section
        aria-labelledby="location-title"
        className="hidden box-border w-full bg-carely-ivory pt-[clamp(24px,2.4vw,36px)] pb-[clamp(70px,8vw,130px)] min-[640px]:block"
      >
      <div className="mx-auto grid w-[calc(100%-80px)] max-w-[1440px] grid-cols-1 items-center gap-[clamp(44px,5vw,80px)] min-[1040px]:grid-cols-2">
        <LocationMap />

        <div className="min-w-0">
          <SectionEyebrow text="Contact us" />

          <h2
            id="location-title"
            className="mt-[18px] text-pretty text-[clamp(34px,3.4vw,56px)] leading-[1.12] font-bold tracking-[-0.025em] text-carely-deep"
          >
            We’re here to listen, <em className="font-editorial font-normal tracking-normal italic">help, and support</em>
          </h2>

          <div className="mt-[clamp(40px,4.4vw,66px)] grid grid-cols-1 gap-[clamp(28px,3vw,44px)] min-[720px]:grid-cols-3">
            {details.map((detail) => (
              <div key={detail.id} className="min-w-0">
                <IconCircle size={60}>{detail.icon}</IconCircle>
                <h3 className="mt-[22px] text-[clamp(20px,1.7vw,25px)] font-bold text-carely-deep">{detail.title}</h3>
                <p
                  className={[
                    'mt-[10px] text-[17px] leading-[1.6] text-carely-muted',
                    detail.wrap ? '[overflow-wrap:anywhere]' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {detail.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
