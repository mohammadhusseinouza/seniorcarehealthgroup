import { PillButton } from '@/components/ui/PillButton'
import { SectionShell } from '@/components/ui/SectionShell'
import { partnerBenefits } from '@/data/partnerBenefits'
import { BenefitTile } from './BenefitTile'
import { MetricsTile } from './MetricsTile'
import { PartnerImageTile } from './PartnerImageTile'

export function WhyPartner() {
  return (
    <SectionShell tone="primary" maxWidth={1340} ariaLabelledBy="partner-title">
      <header className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="text-base font-medium text-carely-deep">Partnership</p>
          <h2 id="partner-title" className="mt-3 font-editorial text-4xl text-carely-deep sm:text-5xl">
            Why Partner with Us?
          </h2>
        </div>
        <PillButton variant="forest">Book Consultation</PillButton>
      </header>

      {/* Exact tile order (README 3.4) is approved and must not be reflowed. */}
      <div className="mt-12 grid grid-cols-1 gap-4 min-[680px]:grid-cols-2 min-[1024px]:grid-cols-3">
        <BenefitTile benefit={partnerBenefits[0]} />
        <PartnerImageTile imageAlt="Clinician with tablet, warm care setting" />
        <BenefitTile benefit={partnerBenefits[1]} />
        <PartnerImageTile imageAlt="Caregiver in green scrubs with senior woman" />
        <MetricsTile
          variant="dark"
          rows={[{ label: 'Reduced readmissions' }, { label: 'Faster treatment times' }]}
        />
        <PartnerImageTile imageAlt="Provider with senior man" />
        <BenefitTile benefit={partnerBenefits[2]} />
        <MetricsTile
          variant="light"
          rows={[{ label: 'Cost savings per facility/month' }, { label: 'Staff retention improvements' }]}
        />
        <BenefitTile benefit={partnerBenefits[3]} />
      </div>
    </SectionShell>
  )
}
