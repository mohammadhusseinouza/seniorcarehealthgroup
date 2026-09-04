import { PillButton } from '@/components/ui/PillButton'
import { SectionShell } from '@/components/ui/SectionShell'
import { PilotInfoBadge } from './PilotInfoBadge'

export function RiskFreePilot() {
  return (
    <SectionShell tone="primary" maxWidth={1180} ariaLabelledBy="pilot-title" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-[880px] flex-col items-center text-center">
        <p className="flex items-center gap-2.5 text-[17px] text-carely-deep">
          <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-carely-apricot" />
          Pilot Program
        </p>
        <h2 id="pilot-title" className="mt-5 text-4xl font-semibold tracking-[-0.02em] text-carely-deep sm:text-5xl">
          Start with a risk-free pilot <span className="font-editorial font-normal not-italic sm:italic">for your facility</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-carely-black">
          Explore a 6-month pilot designed to demonstrate the value of integrated provider support, telemedicine
          access, and faster clinical response.
        </p>
        <PillButton variant="apricot" className="mt-8">
          Enroll Now
        </PillButton>
      </div>

      <div className="relative mt-14 w-full rounded-[24px] bg-transparent" style={{ height: 'clamp(320px,44vw,560px)' }}>
        <PilotInfoBadge />
      </div>
    </SectionShell>
  )
}
