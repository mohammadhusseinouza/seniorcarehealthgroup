import { Link } from 'react-router-dom'
import { partnerBenefits } from '@/data/partnerBenefits'
import { useReveal } from '@/hooks/useReveal'
import { BenefitTile } from './BenefitTile'
import { MetricsTile } from './MetricsTile'
import { PartnerImageTile } from './PartnerImageTile'
import './why-partner.css'

function PartnershipSquares() {
  return (
    <span aria-hidden="true" className="grid shrink-0 grid-cols-2 gap-[3px]">
      <span className="block h-[9px] w-[9px] rounded-tl-[3px] rounded-br-[3px] bg-carely-lime" />
      <span className="block h-[9px] w-[9px] rounded-tr-[3px] rounded-bl-[3px] bg-carely-lime" />
      <span className="block h-[9px] w-[9px] rounded-tr-[3px] rounded-bl-[3px] bg-carely-lime" />
      <span className="block h-[9px] w-[9px] rounded-tl-[3px] rounded-br-[3px] bg-carely-lime" />
    </span>
  )
}

/**
 * Bespoke wrapper (not SectionShell): the handoff puts zero horizontal
 * padding on the section itself and instead sizes the inner wrapper as
 * `calc(100% - 64px)` — the same gutter model as the Navbar, different from
 * every other section's shared symmetric clamp padding.
 */
export function WhyPartner() {
  const { ref: headerRef, isRevealed: headerRevealed } = useReveal<HTMLElement>()

  return (
    <section aria-labelledby="partner-title" className="w-full box-border bg-carely-ivory py-[clamp(70px,8vw,130px)]">
      <div className="mx-auto w-[calc(100%-64px)] max-w-[1340px]">
        <header
          ref={headerRef}
          className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-6 ${headerRevealed ? 'wp-in' : ''} mb-[clamp(32px,4vw,52px)]`}
        >
          <div>
            <p data-pos="header" className="wp-reveal m-0 flex items-center gap-[11px] text-base font-medium text-carely-deep">
              <PartnershipSquares />
              Partnership
            </p>
            <h2
              id="partner-title"
              data-pos="header"
              className="wp-reveal wp-h1 mt-[14px] font-editorial text-[clamp(34px,4.2vw,58px)] leading-[1.14] font-normal text-carely-deep"
            >
              Why Partner with Us?
            </h2>
          </div>

          <Link
            to="/contact"
            data-pos="header-cta"
            className="wp-reveal wp-h2 inline-flex h-[52px] shrink-0 items-center rounded-full bg-carely-deep px-[31px] text-base font-semibold whitespace-nowrap text-carely-white no-underline transition-colors duration-200 hover:bg-carely-lime hover:text-carely-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-carely-apricot"
          >
            Book Consultation
          </Link>
        </header>

        {/* Exact tile order (README 3.4 / do-not-change constraint) — never reorder. */}
        <div className="wp-mosaic grid grid-cols-1 gap-4 min-[680px]:grid-cols-2 min-[1024px]:grid-cols-3">
          <BenefitTile benefit={partnerBenefits[0]} pos="left" col={0} />
          <PartnerImageTile imageAlt="Clinician with a tablet, warm care setting" pos="center" col={1} />
          <BenefitTile benefit={partnerBenefits[1]} pos="right" col={2} />

          <PartnerImageTile imageAlt="Caregiver in green scrubs with a senior woman" pos="image-left" col={0} />
          <MetricsTile variant="dark" />
          <PartnerImageTile imageAlt="Provider in green scrubs talking with a senior man" pos="image-right" col={2} />

          <BenefitTile benefit={partnerBenefits[2]} pos="left" col={0} />
          <MetricsTile variant="light" />
          <BenefitTile benefit={partnerBenefits[3]} pos="right" col={2} />
        </div>
      </div>
    </section>
  )
}
