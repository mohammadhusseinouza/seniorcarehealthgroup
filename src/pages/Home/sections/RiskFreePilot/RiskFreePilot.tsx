import { Link } from 'react-router-dom'
import pilotTeam from '@/assets/images/pilot/cta.webp'
import { DecorativeRing } from '@/components/ui/DecorativeRing'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { ContactForm } from '../Contact/ContactForm'
import { MobilePilotContact } from './MobilePilotContact'
import { PilotInfoBadge } from './PilotInfoBadge'

const ArrowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#FFFFFF" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Radial fade so the cut-out clinician PNG dissolves into the cream page. */
const PILOT_MASK = 'radial-gradient(115% 105% at 50% 45%, #000 55%, rgba(0,0,0,0.55) 78%, transparent 100%)'

/**
 * Desktop merges "Risk-Free Pilot" and "write us a message" into one
 * two-column band (`id="contact"`): pilot pitch + masked team image on the
 * left, the contact form on the right. Below 640px, MobilePilotContact
 * renders the dedicated vertically-stacked mobile composition instead —
 * both share this outer `id="contact"` anchor so only one copy of the id
 * exists in the DOM tree that actually renders content for a given viewport.
 */
export function RiskFreePilot() {
  return (
    <section id="contact" aria-labelledby="pilot-title" className="w-full">
      <MobilePilotContact />

      <div className="relative hidden box-border w-full overflow-hidden bg-carely-ivory px-[clamp(24px,4vw,60px)] py-[clamp(70px,8vw,120px)] min-[640px]:block">
        <DecorativeRing size={300} className="top-[-70px] left-[-90px] opacity-30" />
        <DecorativeRing size={360} className="right-[-110px] bottom-[60px] opacity-[0.28]" />

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-[clamp(48px,5vw,80px)] min-[1000px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          {/* Pilot column */}
          <div className="flex min-w-0 flex-col">
            <p className="m-0 flex items-center gap-[11px] text-[17px] text-carely-deep">
              <span aria-hidden="true" className="h-[9px] w-[9px] shrink-0 rounded-full bg-carely-apricot" />
              Pilot Program
            </p>

            <h2
              id="pilot-title"
              className="mt-[26px] text-pretty text-[clamp(36px,4.6vw,68px)] leading-[1.1] font-semibold tracking-[-0.02em] text-carely-deep"
            >
              <span className="block">Start with a risk-free pilot</span>
              <span className="block font-editorial font-normal tracking-normal italic">for your facility</span>
            </h2>

            <div className="relative mt-[34px] flex w-full max-w-[1180px] flex-1 flex-col">
              <div
                className="w-full flex-1 bg-transparent"
                style={{
                  minHeight: 'clamp(320px,44vw,560px)',
                  WebkitMaskImage: PILOT_MASK,
                  maskImage: PILOT_MASK,
                }}
              >
                <ResponsiveImage src={pilotTeam} alt="Group of four clinicians" objectFit="contain" />
              </div>

              <PilotInfoBadge />
            </div>

            <Link
              to="/contact"
              className="mt-[54px] inline-flex h-[60px] items-center gap-[14px] self-start rounded-[16px] bg-carely-apricot px-9 text-xl font-semibold whitespace-nowrap text-carely-white no-underline transition-colors duration-200 hover:bg-carely-deep focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep"
            >
              Enroll Now
              {ArrowIcon}
            </Link>
          </div>

          {/* Contact form column */}
          <div className="flex min-w-0 flex-col">
            <h2
              id="contact-title"
              className="m-0 mb-[clamp(28px,3vw,40px)] font-editorial text-[clamp(40px,4.4vw,60px)] leading-[1.05] font-normal text-carely-deep"
            >
              write us a message
            </h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
