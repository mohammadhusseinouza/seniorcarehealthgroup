const CheckIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 12.6 4 4 8-9" stroke="#273A29" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface ClinicalService {
  id: string
  title: string
  description: string
}

const CLINICAL_SERVICES: ClinicalService[] = [
  { id: 'medication', title: 'Medication Management', description: 'Optimization, reconciliation, monitoring' },
  { id: 'chf-copd', title: 'CHF/COPD', description: 'On-site treatment to prevent exacerbation' },
  { id: 'sepsis', title: 'Sepsis', description: 'Early recognition and IV antibiotic protocols' },
  { id: 'uti-pneumonia', title: 'UTI/Pneumonia', description: 'Culture-guided therapy, resistance prevention' },
]

export function AdditionalClinicalServices() {
  return (
    <div className="mt-[clamp(64px,8vw,110px)] border-t border-carely-deep/[0.12] pt-[clamp(36px,4vw,56px)]">
      <h3 className="m-0 font-editorial text-[clamp(25px,2.3vw,32px)] text-carely-deep">Additional Clinical Services</h3>

      <dl className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-[60px] gap-y-7">
        {CLINICAL_SERVICES.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-carely-lime"
            >
              {CheckIcon}
            </span>
            <div>
              <dt className="text-lg font-semibold text-carely-deep">{item.title}</dt>
              <dd className="mt-1.5 text-base leading-[1.55] text-carely-body">{item.description}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}
