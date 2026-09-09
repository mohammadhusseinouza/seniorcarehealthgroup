import { IconCircle } from '@/components/ui/IconCircle'
import { openingHours } from '@/data/contactInfo'

const ClockIcon = (
  <svg width="27" height="27" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.4" stroke="#FFFFFF" strokeWidth={1.8} />
    <path d="M12 7.6V12l3.2 1.9" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
)

/** Dark forest card under the Reach Out intro — clock + heading, then a
 *  definition list of day ranges. `<dl>`/`<dt>`/`<dd>` semantics are load-bearing;
 *  the space-between is styling only (README § 3). */
export function OpeningHoursCard() {
  return (
    <div className="mt-[clamp(34px,3.6vw,52px)] box-border max-w-[560px] rounded-[22px] bg-carely-deep p-[clamp(26px,2.6vw,36px)]">
      <div className="flex items-center gap-[18px]">
        <IconCircle size={56}>{ClockIcon}</IconCircle>
        <h3 className="m-0 text-[clamp(21px,1.8vw,26px)] font-bold text-carely-white">Opening hours</h3>
      </div>

      <dl className="mt-[clamp(24px,2.4vw,34px)] grid gap-4">
        {openingHours.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-5">
            <dt className="m-0 text-[17px] text-carely-ivory">{row.label}</dt>
            <dd className="m-0 text-right text-[17px] text-carely-ivory">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
