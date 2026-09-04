const FIELDS = [
  { id: 'name', label: 'Your name', type: 'text' },
  { id: 'facility', label: 'Facility name', type: 'text' },
  { id: 'role', label: 'Role title', type: 'text' },
  { id: 'phone', label: 'Phone number', type: 'tel' },
] as const

const fieldClasses =
  'h-[76px] w-full rounded-[15px] border border-carely-input-border bg-carely-white px-5 text-[17px] text-carely-black focus:border-carely-lime focus:ring-4 focus:ring-carely-lime/40 focus:outline-none'

export function ContactForm() {
  return (
    <form
      aria-label="Contact form"
      className="relative overflow-hidden rounded-[28px] border border-carely-lime/90 bg-carely-form p-8 shadow-[0_12px_34px_rgba(39,58,41,0.06)] sm:p-12"
    >
      <p className="text-xl font-semibold text-carely-deep sm:text-2xl">
        Fill out this simple form and we&apos;ll get back to you.
      </p>

      <div className="mt-9 grid grid-cols-1 gap-5 min-[760px]:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="sr-only">
              {field.label}
            </label>
            <input id={field.id} name={field.id} type={field.type} required placeholder={field.label} className={fieldClasses} />
          </div>
        ))}

        <div className="min-[760px]:col-span-2">
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <input id="email" name="email" type="email" required placeholder="Your email" className={fieldClasses} />
        </div>

        <div className="min-[760px]:col-span-2">
          <label htmlFor="message" className="sr-only">
            Your message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message (optional)"
            className="w-full resize-y rounded-[15px] border border-carely-input-border bg-carely-white p-5 text-[17px] text-carely-black focus:border-carely-lime focus:ring-4 focus:ring-carely-lime/40 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex h-[58px] items-center justify-center rounded-[15px] bg-carely-deep px-8 text-lg font-semibold text-carely-white transition-colors duration-200 hover:bg-carely-lime hover:text-carely-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carely-apricot"
      >
        Submit
      </button>
    </form>
  )
}
