import { SectionShell } from '@/components/ui/SectionShell'
import { services } from '@/data/services'
import { AdditionalClinicalServices } from './AdditionalClinicalServices'
import { ServiceRow } from './ServiceRow'

export function CoreServices() {
  return (
    <SectionShell tone="alternate" maxWidth={1340} ariaLabelledBy="services-title">
      <div className="mx-auto max-w-[880px] text-center">
        <span className="inline-flex h-[34px] items-center rounded-full bg-carely-icon-soft px-4 text-sm font-semibold text-carely-deep">
          Our Core Services
        </span>
        <h2 id="services-title" className="mt-4 font-editorial text-4xl text-carely-deep sm:text-5xl">
          Comprehensive care, <span className="text-carely-apricot">wherever you need it.</span>
        </h2>
      </div>

      <div className="mt-14 flex flex-col gap-16">
        {services.map((service, index) => (
          <ServiceRow key={service.id} service={service} reversed={index % 2 === 1} />
        ))}
      </div>

      <AdditionalClinicalServices />
    </SectionShell>
  )
}
