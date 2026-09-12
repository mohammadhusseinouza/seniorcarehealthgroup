import type { FormEvent } from 'react'
import { TextField } from '@/components/ui/TextField'

/**
 * No form backend or submission service exists anywhere in the project (the
 * homepage form is inert too). This prevents the native reload and does
 * nothing else — no fake success state. Wire to a real handler when one lands.
 */
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

/** Byte-identical to the pre-existing desktop button — do not add mobile-only states here. */
const submitClasses =
  'mt-[clamp(8px,1vw,16px)] min-h-[66px] w-full rounded-[14px] bg-carely-apricot text-[19px] font-bold text-carely-white transition-colors duration-[250ms] hover:bg-carely-lime hover:text-carely-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep motion-reduce:transition-none'

interface ContactFormProps {
  variant?: 'desktop' | 'mobile'
}

/**
 * Mobile presentation (README "Contact form"): First/Last always paired in
 * their own 2-column row (desktop only pairs them at >=640px, as part of a
 * uniform grid that also pairs Email/Phone there); Email, Phone and Message
 * stay full-width below. Same field names/types/required rules/autocomplete
 * and the same inert submit handler as desktop — presentation only.
 */
function MobileContactForm() {
  return (
    <div className="box-border min-w-0 rounded-[26px] bg-carely-form-grey p-[22px]">
      <form aria-label="Contact form" onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
        <div className="grid grid-cols-2 gap-3">
          <TextField name="firstName" placeholder="First Name" autoComplete="given-name" required dense />
          <TextField name="lastName" placeholder="Last Name" autoComplete="family-name" required dense />
        </div>
        <TextField name="email" type="email" placeholder="Email" autoComplete="email" required />
        <TextField name="phone" type="tel" placeholder="Phone" autoComplete="tel" />
        <TextField name="message" placeholder="Message" multiline />

        <button type="submit" className={`${submitClasses} active:bg-carely-lime active:text-carely-deep`}>
          Submit Message
        </button>
      </form>
    </div>
  )
}

/**
 * Contact Us form on its grey panel. Two-up grid ≥640px (First/Last, Email/Phone),
 * single column below; Message and Submit always span the full width.
 *
 * Required fields: First Name, Last Name, Email — "name and email at minimum"
 * per the Contact Us handoff (README §11). Phone and Message are optional; no
 * project requirement marks them mandatory.
 */
export function ContactForm({ variant = 'desktop' }: ContactFormProps) {
  if (variant === 'mobile') return <MobileContactForm />

  return (
    <div className="box-border min-w-0 rounded-[26px] bg-carely-form-grey p-[clamp(26px,3vw,52px)]">
      <form
        aria-label="Contact form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-[clamp(18px,1.8vw,26px)] min-[640px]:grid-cols-2"
      >
        <TextField name="firstName" placeholder="First Name" autoComplete="given-name" required />
        <TextField name="lastName" placeholder="Last Name" autoComplete="family-name" required />
        <TextField name="email" type="email" placeholder="Email" autoComplete="email" required />
        <TextField name="phone" type="tel" placeholder="Phone" autoComplete="tel" />
        <TextField name="message" placeholder="Message" multiline className="min-[640px]:col-span-2" />

        <button type="submit" className={`${submitClasses} min-[640px]:col-span-2`}>
          Submit Message
        </button>
      </form>
    </div>
  )
}
