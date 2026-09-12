import { useState } from 'react'
import { ChevronIcon } from '@/components/icons/ChevronIcon'
import { IconCircle } from '@/components/ui/IconCircle'
import { openingHours } from '@/data/contactInfo'

const ClockIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.4" stroke="#FFFFFF" strokeWidth={1.8} />
    <path d="M12 7.6V12l3.2 1.9" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
)

/**
 * `openingHours` is two rows — a Monday-Friday range and a Saturday-Sunday
 * range, in that fixed order (`contactInfo.ts`). This derives which row
 * covers today from the visitor's local day-of-week rather than hardcoding
 * "Open today · 8:00 AM – 8:00 PM" (README "Critical — Open today Must Be
 * Derived"), so weekends correctly read the closed row instead.
 *
 * Modest by design: no timezone handling. `Date.getDay()` uses the visitor's
 * local clock, not the facility's — the codebase has no timezone
 * infrastructure to hook into, and adding one is out of scope here. The
 * only real edge case is a visitor in a very different timezone right at a
 * day boundary; documented rather than solved.
 */
function getTodaySummary(): string {
  const day = new Date().getDay() // 0 = Sunday .. 6 = Saturday
  const isWeekend = day === 0 || day === 6
  const row = isWeekend ? openingHours[1] : openingHours[0]
  if (!row) return ''
  return row.value === 'Closed' ? 'Closed today' : `Open today · ${row.value}`
}

/**
 * Mobile collapsible "Opening hours" (README): collapses the always-open
 * desktop `OpeningHoursCard` into a one-line summary that expands to the
 * same `<dl>`. Reuses `openingHours` directly — the rows are not duplicated.
 */
export function MobileOpeningHoursCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-[22px] bg-carely-deep">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex min-h-[72px] w-full items-center gap-4 bg-transparent px-5 text-left"
      >
        <IconCircle size={48}>{ClockIcon}</IconCircle>
        <span className="min-w-0 flex-1">
          <span className="block text-xl font-bold text-carely-white">Opening hours</span>
          <span className="mt-0.5 block text-[15px] text-carely-ivory">{getTodaySummary()}</span>
        </span>
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/10">
          <ChevronIcon open={open} color="#F8FBEF" />
        </span>
      </button>

      {open ? (
        <dl className="grid gap-4 border-t border-carely-lime/20 p-5">
          {openingHours.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-5">
              <dt className="m-0 text-[17px] text-carely-ivory">{row.label}</dt>
              <dd className="m-0 text-right text-[17px] text-carely-ivory">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  )
}
