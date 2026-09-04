import { PillButton } from '@/components/ui/PillButton'
import { SectionShell } from '@/components/ui/SectionShell'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  return (
    <SectionShell tone="alternate" maxWidth={1440} ariaLabelledBy="contact-title">
      <div className="grid grid-cols-1 items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <div>
          <h2 id="contact-title" className="font-editorial text-5xl leading-[1.05] text-carely-deep sm:text-6xl">
            write us
            <br />
            a message
          </h2>
          <span aria-hidden="true" className="mt-7 block h-1 w-[46px] rounded-full bg-carely-apricot" />
          <PillButton variant="apricot" className="mt-8">
            Let&apos;s Talk
          </PillButton>
        </div>

        <ContactForm />
      </div>
    </SectionShell>
  )
}
