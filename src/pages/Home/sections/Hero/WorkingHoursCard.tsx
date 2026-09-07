export function WorkingHoursCard() {
  return (
    <div
      className="hero-rise hero-d3 flex flex-1 flex-col rounded-card bg-carely-apricot p-8"
      style={{ flexBasis: 320, minWidth: 260 }}
    >
      <h2 className="mb-3 text-[22px] font-semibold tracking-[-0.01em] text-carely-white">Working Hours</h2>
      <p className="max-w-[340px] text-pretty text-base leading-[1.6] text-white/[0.92]">
        We believe that aging should be embraced with dignity, joy, and the right level.
      </p>
      <dl className="mt-auto grid grid-cols-2 items-baseline gap-x-6 gap-y-[14px] pt-9">
        <dt className="text-base text-carely-white">Monday - Friday</dt>
        <dd className="m-0 text-right text-base font-medium text-carely-white">8:00 AM - 8:00 PM</dd>
        <dt className="text-base text-carely-white">Saturday - Sunday</dt>
        <dd className="m-0 text-right text-base font-medium text-carely-white">Closed</dd>
      </dl>
    </div>
  )
}
