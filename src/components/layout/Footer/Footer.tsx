import type { FormEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import logoSchg from '@/assets/brand/logo-schg.png'
import { DecorativeRing } from '@/components/ui/DecorativeRing'
import { footerContact, footerQuickLinks, footerSocialLinks } from '@/data/footer'
import { MobileFooter } from './MobileFooter'

export const FacebookIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.8c0-.9.3-1.5 1.6-1.5H16.6V4.6a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2h-2.5v3h2.5V21z" />
  </svg>
)

export const InstagramIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth={1.7} />
    <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth={1.7} />
    <circle cx="16.6" cy="7.4" r="1.1" fill="currentColor" />
  </svg>
)

export const LinkedInIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5.5 9h2.8v10H5.5zm1.4-4.4a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4M10.4 9h2.7v1.4c.5-.9 1.6-1.6 3-1.6 2.3 0 3.4 1.4 3.4 4V19h-2.8v-5.6c0-1.3-.5-2-1.6-2-1.2 0-1.9.8-1.9 2V19h-2.8z" />
  </svg>
)

export const EmailIcon = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth={1.7} />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
  </svg>
)

export const SOCIAL_ICONS: Record<string, ReactNode> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

export const MapPinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-[3px] shrink-0">
    <path
      d="M12 21s6-5.3 6-9.6A6 6 0 0 0 6 11.4C6 15.7 12 21 12 21Z"
      stroke="#E2A76F"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
    <circle cx="12" cy="11" r="2.2" stroke="#E2A76F" strokeWidth={1.6} />
  </svg>
)

const EnvelopeIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="#E2A76F" strokeWidth={1.6} />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke="#E2A76F" strokeWidth={1.6} strokeLinejoin="round" />
  </svg>
)

/** Exported for reuse by MobileFooter — same geometry as the other footer icons. */
export const FooterPhoneIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
    <path
      d="M6.2 3.8h3l1.5 3.7-2 1.4a10.5 10.5 0 0 0 5.4 5.4l1.4-2 3.7 1.5v3a1.8 1.8 0 0 1-2 1.8C11.4 18.8 5.2 12.6 4.4 5.8a1.8 1.8 0 0 1 1.8-2Z"
      stroke="#E2A76F"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
  </svg>
)

export const SendIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 4 3.5 10.6l6.4 2.4L12.4 20 20 4Z" stroke="#273A29" strokeWidth={1.6} strokeLinejoin="round" />
  </svg>
)

const socialLinkClasses =
  'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-carely-ivory transition-colors duration-200 hover:bg-carely-apricot hover:text-carely-deep focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime'

/** No newsletter backend exists yet — this only prevents the page reload, no fake subscription claim. */
function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Footer() {
  return (
    <>
      <MobileFooter />

      <footer className="relative hidden w-full overflow-hidden bg-carely-deep px-[clamp(24px,4.5vw,72px)] pt-[clamp(64px,7vw,100px)] pb-[34px] min-[640px]:block">
      <DecorativeRing size={400} color="#D2E761" opacity={0.16} className="top-[-140px] right-[-120px]" />
      <DecorativeRing size={420} color="#D2E761" opacity={0.14} className="bottom-[-180px] left-[-150px]" />
      <span aria-hidden="true" className="absolute top-[42px] left-[52%] h-2 w-2 rounded-full bg-carely-apricot opacity-90" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-[clamp(40px,4.5vw,70px)] min-[680px]:grid-cols-2 min-[1000px]:grid-cols-[1.2fr_1fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div className="min-w-0">
            <Link to="/" className="inline-flex no-underline">
              {/* Official lockup, used unmodified — transparent PNG sits directly on the forest background. */}
              <img
                src={logoSchg}
                alt="Senior Care Health Group"
                className="h-auto w-[248px] max-w-full object-contain"
              />
            </Link>

            <span aria-hidden="true" className="mt-6 mb-[22px] block h-[3px] w-11 rounded-full bg-carely-apricot" />

            <p className="m-0 max-w-[320px] text-lg leading-[1.65] text-carely-ivory">
              Compassionate, professional, reliable senior care tailored to every need.
            </p>

            <ul className="m-0 mt-[30px] flex list-none gap-[14px] p-0">
              {footerSocialLinks.map((social) => {
                const icon = SOCIAL_ICONS[social.id]
                return (
                  <li key={social.id}>
                    {social.href ? (
                      <a href={social.href} aria-label={social.label} className={socialLinkClasses}>
                        {icon}
                      </a>
                    ) : (
                      <button type="button" aria-label={`${social.label} (link coming soon)`} className={socialLinkClasses}>
                        {icon}
                      </button>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="min-w-0">
            <h2 className="m-0 font-editorial text-[27px] font-normal text-carely-ivory">Contact Information</h2>
            <span aria-hidden="true" className="mt-[14px] mb-[30px] block h-0.5 w-9 rounded-full bg-carely-apricot" />

            <p className="m-0 flex gap-3 text-lg leading-[1.6] text-carely-ivory">
              {MapPinIcon}
              <span>
                {footerContact.addressLines[0]}
                <br />
                {footerContact.addressLines[1]}
              </span>
            </p>

            <span aria-hidden="true" className="my-[26px] block h-px bg-white/[0.14]" />

            <p className="m-0 mb-3 font-editorial text-xl text-carely-lime">Email Address</p>
            <p className="m-0 flex items-center gap-3 text-[17px] text-carely-ivory [overflow-wrap:anywhere]">
              {EnvelopeIcon}
              <a href={`mailto:${footerContact.email}`} className="text-carely-ivory no-underline transition-colors duration-200 hover:text-carely-lime">
                {footerContact.email}
              </a>
            </p>

            <p className="m-0 mt-[26px] mb-3 font-editorial text-xl text-carely-lime">Phone</p>
            <p className="m-0 flex items-center gap-3 text-[17px] text-carely-ivory">
              {FooterPhoneIcon}
              <a
                href={`tel:${footerContact.phone.replace(/[^+\d]/g, '')}`}
                className="text-carely-ivory no-underline transition-colors duration-200 hover:text-carely-lime"
              >
                {footerContact.phone}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h2 className="m-0 font-editorial text-[27px] font-normal text-carely-ivory">Quick Links</h2>
            <span aria-hidden="true" className="mt-[14px] mb-[30px] block h-0.5 w-9 rounded-full bg-carely-apricot" />

            <nav aria-label="Footer navigation">
              <ul className="m-0 flex list-none flex-col gap-5 p-0">
                {footerQuickLinks.map((link) => (
                  <li key={link.href} className="flex items-center gap-[13px]">
                    <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 rounded-full bg-carely-apricot" />
                    <Link
                      to={link.href}
                      className="text-lg text-carely-ivory no-underline transition-colors duration-200 hover:text-carely-apricot"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="min-w-0">
            <h2 className="m-0 font-editorial text-[27px] font-normal text-carely-ivory">Newsletter Subscription</h2>
            <span aria-hidden="true" className="mt-[14px] mb-[26px] block h-0.5 w-9 rounded-full bg-carely-apricot" />

            <p className="m-0 mb-[26px] max-w-[320px] text-lg leading-[1.6] text-carely-ivory">
              Stay updated with care insights and services.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex h-16 max-w-[380px] items-center rounded-xl border border-carely-lime/30 p-[7px]"
            >
              <label className="flex flex-1 items-stretch self-stretch">
                <span className="sr-only">Email address for newsletter</span>
                <input
                  type="email"
                  name="newsletter"
                  placeholder="Enter Your Email"
                  className="h-full w-full border-0 bg-transparent px-[14px] font-sans text-[17px] text-carely-ivory outline-none placeholder:text-carely-ivory/60"
                />
              </label>
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[9px] bg-carely-apricot transition-colors duration-200 hover:bg-carely-lime focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
              >
                {SendIcon}
              </button>
            </form>
          </div>
        </div>

        <span aria-hidden="true" className="mb-7 block h-px bg-carely-lime/20" style={{ marginTop: 'clamp(48px,5vw,80px)' }} />

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-[14px]">
          <p className="m-0 text-base text-carely-ivory/[0.82]">Copyright © 2026 Senior Care Health Group. All Rights Reserved.</p>
          <p className="m-0 flex items-center gap-4 text-base">
            <Link to="/privacy-policy" className="text-carely-ivory/[0.82] no-underline transition-colors duration-200 hover:text-carely-apricot">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-[6px] w-[6px] rounded-full bg-carely-apricot" />
            <Link
              to="/terms-and-conditions"
              className="text-carely-ivory/[0.82] no-underline transition-colors duration-200 hover:text-carely-apricot"
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
      </footer>
    </>
  )
}
