import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import logoSchg from '@/assets/brand/logo-schg.png'
import { ChevronIcon } from '@/components/icons/ChevronIcon'
import { DecorativeRing } from '@/components/ui/DecorativeRing'
import { footerContact, footerQuickLinks, footerSocialLinks } from '@/data/footer'
import { MapPinIcon, SendIcon, SOCIAL_ICONS } from './Footer'

/** Same envelope geometry as the desktop EnvelopeIcon, deep-stroke for the apricot circle. */
const DeepEnvelopeIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="#273A29" strokeWidth={1.6} />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke="#273A29" strokeWidth={1.6} strokeLinejoin="round" />
  </svg>
)

const socialButtonClasses =
  'flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/10 text-carely-ivory transition-colors duration-200 active:bg-carely-apricot active:text-carely-deep focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime'

type FooterGroup = 'links' | 'contact' | 'news'

function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

/**
 * Mobile footer (README "Footer (collapsible groups)"): brand block, email
 * card, social row, then the three desktop columns collapsed into a
 * single-open accordion (Quick Links open by default). Reuses Footer.tsx's
 * icon geometry and the same data modules as desktop.
 */
export function MobileFooter() {
  const [openGroup, setOpenGroup] = useState<FooterGroup | null>('links')

  const toggleGroup = (group: FooterGroup) => setOpenGroup((current) => (current === group ? null : group))

  return (
    <footer className="relative overflow-hidden bg-carely-deep px-5 pt-11 pb-[26px] min-[640px]:hidden">
      <DecorativeRing size={300} className="top-[-120px] right-[-110px] opacity-[0.16]" />
      <DecorativeRing size={320} className="bottom-[-160px] left-[-130px] opacity-[0.14]" />

      <div className="relative">
        <Link to="/" className="inline-flex no-underline">
          <img src={logoSchg} alt="Senior Care Health Group" className="h-auto w-[210px] max-w-full object-contain" />
        </Link>

        <span aria-hidden="true" className="mt-5 mb-[18px] block h-[3px] w-11 rounded-full bg-carely-apricot" />

        <p className="m-0 max-w-[320px] text-[16.5px] leading-[1.6] text-carely-ivory">
          Compassionate, professional, reliable senior care tailored to every need.
        </p>

        <a
          href={`mailto:${footerContact.email}`}
          className="mt-6 flex items-center gap-[14px] rounded-2xl bg-white/[0.08] px-[18px] py-4 no-underline"
        >
          <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-carely-apricot">
            {DeepEnvelopeIcon}
          </span>
          <span>
            <span className="block font-editorial text-[15px] text-carely-lime">Email Address</span>
            <span className="mt-0.5 block text-[15px] break-normal text-carely-ivory [overflow-wrap:anywhere]">
              {footerContact.email}
            </span>
          </span>
        </a>

        <ul className="m-0 mt-[22px] flex list-none gap-3 p-0">
          {footerSocialLinks.map((social) => {
            const icon = SOCIAL_ICONS[social.id]
            return (
              <li key={social.id}>
                {social.href ? (
                  <a href={social.href} aria-label={social.label} className={socialButtonClasses}>
                    {icon}
                  </a>
                ) : (
                  <button type="button" aria-label={`${social.label} (link coming soon)`} className={socialButtonClasses}>
                    {icon}
                  </button>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-[30px] border-t border-carely-lime/20">
          {/* Quick Links */}
          <div className="border-b border-carely-lime/20">
            <button
              type="button"
              onClick={() => toggleGroup('links')}
              aria-expanded={openGroup === 'links'}
              className="flex min-h-[60px] w-full items-center justify-between gap-3 bg-transparent text-left font-editorial text-xl font-normal text-carely-ivory"
            >
              Quick Links
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/10">
                <ChevronIcon open={openGroup === 'links'} color="#F8FBEF" />
              </span>
            </button>
            {openGroup === 'links' ? (
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0 pt-0.5 pb-[22px]">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="flex min-h-[46px] items-center gap-[13px] text-[16.5px] text-carely-ivory no-underline"
                    >
                      <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 rounded-full bg-carely-apricot" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Contact Information */}
          <div className="border-b border-carely-lime/20">
            <button
              type="button"
              onClick={() => toggleGroup('contact')}
              aria-expanded={openGroup === 'contact'}
              className="flex min-h-[60px] w-full items-center justify-between gap-3 bg-transparent text-left font-editorial text-xl font-normal text-carely-ivory"
            >
              Contact Information
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/10">
                <ChevronIcon open={openGroup === 'contact'} color="#F8FBEF" />
              </span>
            </button>
            {openGroup === 'contact' ? (
              <div className="pt-0.5 pb-[22px]">
                <p className="m-0 flex gap-3 text-[16.5px] leading-[1.6] text-carely-ivory">
                  {MapPinIcon}
                  <span>
                    {footerContact.addressLines[0]}
                    <br />
                    {footerContact.addressLines[1]}
                  </span>
                </p>
              </div>
            ) : null}
          </div>

          {/* Newsletter Subscription */}
          <div className="border-b border-carely-lime/20">
            <button
              type="button"
              onClick={() => toggleGroup('news')}
              aria-expanded={openGroup === 'news'}
              className="flex min-h-[60px] w-full items-center justify-between gap-3 bg-transparent text-left font-editorial text-xl font-normal text-carely-ivory"
            >
              Newsletter Subscription
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/10">
                <ChevronIcon open={openGroup === 'news'} color="#F8FBEF" />
              </span>
            </button>
            {openGroup === 'news' ? (
              <div className="pt-0.5 pb-[22px]">
                <p className="m-0 mb-4 text-[16.5px] leading-[1.6] text-carely-ivory">
                  Stay updated with care insights and services.
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex h-[60px] items-center rounded-xl border border-carely-lime/30 p-1.5"
                >
                  <label className="flex flex-1 items-stretch self-stretch">
                    <span className="sr-only">Email address for newsletter</span>
                    <input
                      type="email"
                      name="newsletter"
                      placeholder="Enter Your Email"
                      className="h-full w-full border-0 bg-transparent px-3.5 font-sans text-[16.5px] text-carely-ivory outline-none placeholder:text-carely-ivory/60"
                    />
                  </label>
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[9px] bg-carely-apricot transition-colors duration-200 active:bg-carely-lime focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-lime"
                  >
                    {SendIcon}
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <p className="m-0 flex items-center gap-3.5 text-[15px]">
            <Link to="/privacy-policy" className="text-carely-ivory/[0.82] no-underline">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-carely-apricot" />
            <Link to="/terms-and-conditions" className="text-carely-ivory/[0.82] no-underline">
              Terms &amp; Conditions
            </Link>
          </p>
          <p className="m-0 text-[14.5px] text-carely-ivory/[0.82]">
            Copyright © 2026 Senior Care Health Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
