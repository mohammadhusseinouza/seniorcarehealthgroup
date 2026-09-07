import { Link } from 'react-router-dom'
import pilotTeam from '@/assets/images/pilot/cta.webp'
import { DecorativeRing } from '@/components/ui/DecorativeRing'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { PilotInfoBadge } from './PilotInfoBadge'

const ArrowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#FFFFFF" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * Bespoke wrapper (not SectionShell): the handoff pairs `padding-bottom:0`
 * with a trailing 70px spacer div, not the shared symmetric clamp padding,
 * so the floating info badge's -24px overlap has room before the next
 * section starts.
 *
 * This section carries no scroll-reveal or hover classes anywhere in the
 * approved prototype (no om-rv/om-rvs/om-svc/om-pt), and it is absent from
 * README's own observer-target list — implemented static to match the
 * approved design exactly, rather than inventing motion it doesn't have.
 */
export function RiskFreePilot() {
  return (
    <section
      aria-labelledby="pilot-title"
      className="relative box-border w-full overflow-hidden bg-carely-ivory px-[clamp(24px,4vw,60px)] pt-[clamp(70px,8vw,105px)] pb-0"
    >
      <DecorativeRing size={300} className="top-[-70px] left-[-90px] opacity-30" />
      <DecorativeRing size={360} className="right-[-110px] bottom-[60px] opacity-[0.28]" />
      <span aria-hidden="true" className="absolute top-[36%] left-[9%] h-[9px] w-[9px] rounded-full bg-carely-apricot opacity-80" />
      <span aria-hidden="true" className="absolute top-[44%] right-[12%] h-[7px] w-[7px] rounded-full bg-carely-apricot opacity-70" />

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center text-center">
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

        <p className="mt-[30px] max-w-[880px] text-pretty text-[19px] leading-[1.55] text-carely-black">
          Explore a 6-month pilot designed to demonstrate the value of integrated provider support, telemedicine
          access, and faster clinical response.
        </p>

        <Link
          to="/contact"
          className="mt-[34px] inline-flex h-[60px] items-center gap-[14px] rounded-[16px] bg-carely-apricot px-9 text-xl font-semibold whitespace-nowrap text-carely-white no-underline transition-colors duration-200 hover:bg-carely-deep focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep"
        >
          Enroll Now
          {ArrowIcon}
        </Link>

        <div className="relative mt-[34px] w-full max-w-[1180px]">
          <div className="w-full bg-transparent" style={{ height: 'clamp(320px,44vw,560px)' }}>
            <ResponsiveImage src={pilotTeam} alt="Group of four clinicians" objectFit="contain" />
          </div>

          <PilotInfoBadge />
        </div>
      </div>

      <div aria-hidden="true" className="h-[70px]" />
    </section>
  )
}
