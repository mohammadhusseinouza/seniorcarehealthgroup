import { useState, type FormEvent } from 'react'
import { ChevronIcon } from '@/components/icons/ChevronIcon'

const FIELDS = [
  { id: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { id: 'facility', label: 'Facility name', type: 'text', autoComplete: 'organization' },
  { id: 'role', label: 'Role title', type: 'text', autoComplete: 'organization-title' },
  { id: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel' },
] as const

const fieldClasses =
  'h-[76px] w-full rounded-[15px] border border-carely-input-border bg-carely-white px-[22px] font-sans text-[17px] text-carely-black outline-none transition-[border-color,box-shadow] duration-200 focus:border-carely-lime focus:ring-[3px] focus:ring-carely-lime/40'

const LeafIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
    <path d="M12 21V9" stroke="#E2A76F" strokeWidth={1.6} strokeLinecap="round" />
    <path d="M12 12c0-3 2-5 5-5 0 3-2 5-5 5Zm0 3c0-2.6-1.8-4.4-4.4-4.4 0 2.6 1.8 4.4 4.4 4.4Z" fill="#D2E761" />
  </svg>
)

const SubmitLeafIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3C12 3 6 6.5 6 13C6 17.4 8.7 21 12 21C15.3 21 18 17.4 18 13C18 6.5 12 3 12 3Z" fill="#D2E761" />
  </svg>
)

/** No backend exists yet — this only prevents the native navigation/reload, no fake network call or success claim. */
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

/** name/email always shown; facility/role/phone are the same required fields as desktop, just deferred. */
const MOBILE_DISCLOSURE_FIELDS = FIELDS.filter((field) => field.id !== 'name')

const mobileFieldClasses =
  'box-border h-[60px] w-full rounded-[14px] border border-carely-input-border bg-carely-white px-[18px] font-sans text-[16.5px] text-carely-black outline-none transition-[border-color,box-shadow] duration-200 focus:border-carely-lime focus:ring-[3px] focus:ring-carely-lime/40'

/**
 * Mobile progressive disclosure (README "Contact form"): only name/email
 * show initially. Facility name, Role title and Phone number are the exact
 * same required fields as the desktop form, just deferred behind a toggle —
 * nothing is removed, and no field's `name`/validation contract changes.
 */
function MobileContactForm() {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <form
      id="contact-form-mobile"
      aria-label="Contact form"
      onSubmit={handleSubmit}
      className="relative scroll-mt-[90px] overflow-hidden rounded-[24px] border border-carely-lime/90 bg-carely-form p-[22px] shadow-[0_12px_34px_rgba(39,58,41,0.06)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-70px] bottom-[-80px] h-[220px] w-[220px] rounded-full border border-carely-lime opacity-50"
      />

      <p className="relative m-0 mb-5 flex items-start gap-3 text-pretty text-lg leading-[1.35] font-semibold text-carely-deep">
        {LeafIcon}
        Fill out this simple form and we&apos;ll get back to you.
      </p>

      <div className="relative flex flex-col gap-[14px]">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            id="m-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={mobileFieldClasses}
          />
        </label>

        <label className="block">
          <span className="sr-only">Your email</span>
          <input
            id="m-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email"
            className={mobileFieldClasses}
          />
        </label>

        {detailsOpen ? (
          <div className="flex flex-col gap-[14px]">
            {MOBILE_DISCLOSURE_FIELDS.map((field) => (
              <label key={field.id} className="block">
                <span className="sr-only">{field.label}</span>
                <input
                  id={`m-${field.id}`}
                  name={field.id}
                  type={field.type}
                  required
                  autoComplete={field.autoComplete}
                  placeholder={field.label}
                  className={mobileFieldClasses}
                />
              </label>
            ))}

            <label className="block">
              <span className="sr-only">Your message (optional)</span>
              <textarea
                id="m-message"
                name="message"
                rows={4}
                placeholder="Your message (optional)"
                className="box-border h-[130px] w-full resize-y rounded-[14px] border border-carely-input-border bg-carely-white p-4 font-sans text-[16.5px] leading-[1.55] text-carely-black outline-none transition-[border-color,box-shadow] duration-200 focus:border-carely-lime focus:ring-[3px] focus:ring-carely-lime/40"
              />
            </label>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setDetailsOpen((current) => !current)}
          aria-expanded={detailsOpen}
          className="flex h-[52px] w-full items-center justify-between rounded-[14px] border border-dashed border-carely-deep/[0.22] bg-transparent px-[18px] font-sans text-[15.5px] font-semibold text-carely-deep"
        >
          {detailsOpen ? 'Hide facility details' : 'Add facility details (optional)'}
          <ChevronIcon open={detailsOpen} color="#273A29" size={24} />
        </button>
      </div>

      <button
        type="submit"
        className="relative mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-[14px] bg-carely-deep text-lg font-semibold text-carely-white transition-colors duration-200 active:bg-carely-lime active:text-carely-deep"
      >
        Submit
        {SubmitLeafIcon}
      </button>
    </form>
  )
}

interface ContactFormProps {
  variant?: 'desktop' | 'mobile'
}

export function ContactForm({ variant = 'desktop' }: ContactFormProps) {
  if (variant === 'mobile') return <MobileContactForm />

  // scroll-mt-[108px] clears the sticky floating pill: top offset 16px + navbar height 80px
  // + ~12px breathing gap, so anchor jumps to #contact-form land just below the pill.
  return (
    <form
      id="contact-form"
      aria-label="Contact form"
      onSubmit={handleSubmit}
      className="relative grow scroll-mt-[108px] overflow-hidden rounded-[28px] border border-carely-lime/90 bg-carely-form p-[clamp(26px,3.4vw,50px)] shadow-[0_12px_34px_rgba(39,58,41,0.06)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-80px] bottom-[-90px] h-[260px] w-[260px] rounded-full border border-carely-lime opacity-50"
      />

      <p className="relative m-0 mb-9 flex items-center gap-[14px] text-pretty text-[clamp(20px,1.9vw,26px)] leading-[1.35] font-semibold text-carely-deep">
        {LeafIcon}
        Fill out this simple form and we&apos;ll get back to you.
      </p>

      <div className="relative grid grid-cols-1 gap-[22px] min-[760px]:grid-cols-2">
        {FIELDS.map((field) => (
          <label key={field.id} className="block">
            <span className="sr-only">{field.label}</span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required
              autoComplete={field.autoComplete}
              placeholder={field.label}
              className={fieldClasses}
            />
          </label>
        ))}

        <label className="block min-[760px]:col-span-2">
          <span className="sr-only">Your email</span>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email"
            className={fieldClasses}
          />
        </label>

        <label className="block min-[760px]:col-span-2">
          <span className="sr-only">Your message (optional)</span>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message (optional)"
            className="h-[190px] w-full resize-y rounded-[15px] border border-carely-input-border bg-carely-white p-[22px] font-sans text-[17px] leading-[1.55] text-carely-black outline-none transition-[border-color,box-shadow] duration-200 focus:border-carely-lime focus:ring-[3px] focus:ring-carely-lime/40"
          />
        </label>
      </div>

      <button
        type="submit"
        className="relative mt-7 inline-flex h-[58px] items-center gap-[13px] rounded-[15px] bg-carely-deep px-[34px] text-[19px] font-semibold text-carely-white transition-colors duration-200 hover:bg-carely-lime hover:text-carely-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-carely-apricot"
      >
        Submit
        {SubmitLeafIcon}
      </button>
    </form>
  )
}
