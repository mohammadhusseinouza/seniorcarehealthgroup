import { SectionShell } from '@/components/ui/SectionShell'
import { services } from '@/data/services'
import { AdditionalClinicalServices } from './AdditionalClinicalServices'
import './core-services.css'
import { MobileCoreServices } from './MobileCoreServices'
import { ServiceRow } from './ServiceRow'

export function CoreServices() {
  return (
    <>
      <MobileCoreServices />

      <SectionShell className="hidden min-[640px]:block" tone="alternate" maxWidth={1340} ariaLabelledBy="services-title">
        <header className="flex flex-col items-center text-center">
          <span className="inline-flex h-[34px] items-center rounded-full bg-carely-icon-soft px-[18px] text-[15px] font-semibold text-carely-deep">
            Our Core Services
          </span>

          <h2 id="services-title" className="mt-[22px] font-editorial text-[clamp(34px,4.4vw,62px)] leading-[1.12] font-normal text-carely-deep">
            <span className="block">Comprehensive care,</span>
            <span className="block text-carely-apricot italic">wherever you need it.</span>
          </h2>
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
    </>
  )
}
