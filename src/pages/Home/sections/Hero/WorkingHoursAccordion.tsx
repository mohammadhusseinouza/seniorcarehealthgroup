import { useState } from 'react'
import { ChevronIcon } from '@/components/icons/ChevronIcon'

/** Mobile-only collapsible working hours card (README "Working hours (collapsible)"). */
export function WorkingHoursAccordion() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-4 mt-[14px] overflow-hidden rounded-[26px] bg-carely-apricot">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex min-h-[64px] w-full items-center justify-between gap-3 bg-transparent px-5 text-left"
      >
        <span>
          <span className="block text-[19px] font-semibold tracking-[-0.01em] text-carely-white">Working Hours</span>
          <span className="mt-0.5 block text-[14.5px] text-white/[0.92]">Open today · 8:00 AM - 8:00 PM</span>
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.22]">
          <ChevronIcon open={open} size={16} />
        </span>
      </button>

      {open ? (
        <div className="px-5 pb-5">
          <p className="m-0 text-[15.5px] leading-[1.6] text-white/[0.92]">
            We believe that aging should be embraced with dignity, joy, and the right level.
          </p>
          <dl className="mt-4 grid grid-cols-[auto_auto] items-baseline gap-x-[18px] gap-y-3 border-t border-white/[0.28] pt-4">
            <dt className="text-[15.5px] text-carely-white">Monday - Friday</dt>
            <dd className="m-0 text-right text-[15.5px] font-medium text-carely-white">8:00 AM - 8:00 PM</dd>
            <dt className="text-[15.5px] text-carely-white">Saturday - Sunday</dt>
            <dd className="m-0 text-right text-[15.5px] font-medium text-carely-white">Closed</dd>
          </dl>
        </div>
      ) : null}
    </div>
  )
}
