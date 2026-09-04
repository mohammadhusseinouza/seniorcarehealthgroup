export function WorkingHoursCard() {
  return (
    <div
      className="flex flex-1 flex-col rounded-[26px] bg-carely-apricot p-8 text-carely-white"
      style={{ flexBasis: 320, minWidth: 260 }}
    >
      <h2 className="text-xl font-semibold">Working Hours</h2>
      <p className="mt-3 max-w-[340px] text-sm text-carely-white/90">We&apos;re here when your family needs us most.</p>
      <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 pt-9 text-sm">
        <dt className="text-carely-white/85">Monday - Friday</dt>
        <dd className="text-right font-medium">8:00 AM - 8:00 PM</dd>
        <dt className="text-carely-white/85">Saturday - Sunday</dt>
        <dd className="text-right font-medium">Closed</dd>
      </dl>
    </div>
  )
}
