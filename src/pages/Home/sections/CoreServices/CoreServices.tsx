import { SectionShell } from '@/components/ui/SectionShell'
import { services } from '@/data/services'
import { AdditionalClinicalServices } from './AdditionalClinicalServices'
import './core-services.css'
import { ServiceRow } from './ServiceRow'

export function CoreServices() {
  return (
    <SectionShell tone="alternate" maxWidth={1340} ariaLabelledBy="services-title">
      <header className="flex flex-col items-center text-center">
        <span className="inline-flex h-[34px] items-center rounded-full bg-carely-icon-soft px-[18px] text-[15px] font-semibold text-carely-deep">
          Our Core Services
        </span>

        <h2 id="services-title" className="mt-[22px] font-editorial text-[clamp(34px,4.4vw,62px)] leading-[1.12] font-normal text-carely-deep">
          <span className="block">Comprehensive care,</span>
          <span className="block text-carely-apricot italic">wherever you need it.</span>
        </h2>

        <p className="mt-[26px] max-w-[880px] text-pretty text-lg leading-[1.7] text-carely-body">
          Our telemedicine services further enhance the level of care we provide by allowing PCAs and NPs to triage
          cases via video with immediate physician backup. This service prevents unnecessary ER visits for
          conditions like UTIs, falls, or respiratory distress, particularly during night or weekend hours. The
          real-time integration of our services with your EHR system ensures that documentation and orders are
          managed seamlessly.
        </p>
      </header>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceRow
            key={service.id}
            service={service}
            reversed={index === 1}
            marginTopClassName={index === 0 ? 'mt-[clamp(56px,7vw,88px)]' : 'mt-[clamp(64px,8vw,110px)]'}
          />
        ))}
      </div>

      <AdditionalClinicalServices />
    </SectionShell>
  )
}
