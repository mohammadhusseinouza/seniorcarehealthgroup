import { Link } from 'react-router-dom'
import pilotTeam from '@/assets/images/pilot/cta.webp'
import { DecorativeRing } from '@/components/ui/DecorativeRing'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { ContactForm } from '../Contact/ContactForm'
import { PilotInfoBadge } from './PilotInfoBadge'

const ArrowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#FFFFFF" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/** Radial fade so the cut-out clinician PNG dissolves into the cream page — same mask as desktop. */
const PILOT_MASK = 'radial-gradient(115% 105% at 50% 45%, #000 55%, rgba(0,0,0,0.55) 78%, transparent 100%)'

/**
 * Mobile "Risk-free pilot" + "write us a message" — one vertically stacked
 * flow (README sections 6 & 7), still sharing `id="contact"` with the
 * desktop composition via the outer wrapper in RiskFreePilot.tsx.
 */
export function MobilePilotContact() {
  return (
    <div className="relative overflow-hidden bg-carely-ivory pt-3 pb-14 min-[640px]:hidden">
      <DecorativeRing size={240} className="top-[-40px] left-[-90px] opacity-30" />

      <div className="relative px-5">
        <p className="m-0 flex items-center gap-[11px] text-base text-carely-deep">
          <span aria-hidden="true" className="h-[9px] w-[9px] shrink-0 rounded-full bg-carely-apricot" />
          Pilot Program
        </p>

        <h2 className="mt-[18px] text-pretty text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-carely-deep">
          <span className="block">Start with a risk-free pilot</span>
          <span className="block font-editorial font-normal tracking-normal italic">for your facility</span>
        </h2>
      </div>

      <div className="relative mt-[22px]">
        <div className="h-[250px]" style={{ WebkitMaskImage: PILOT_MASK, maskImage: PILOT_MASK }}>
          <ResponsiveImage src={pilotTeam} alt="Group of four clinicians" objectFit="contain" />
        </div>
        <PilotInfoBadge variant="stacked" />
      </div>

      <div className="px-5 pt-6">
        <Link
          to="/contact"
          className="flex h-[58px] items-center justify-center gap-3 rounded-2xl bg-carely-apricot text-lg font-semibold text-carely-white no-underline transition-colors duration-200 active:bg-carely-deep"
        >
          Enroll Now
          {ArrowIcon}
        </Link>
      </div>

      <div className="px-5 pt-12">
        <h2 className="m-0 mb-5 font-editorial text-[38px] leading-[1.05] font-normal text-carely-deep">
          write us a message
        </h2>
        <ContactForm variant="mobile" />
      </div>
    </div>
  )
}
