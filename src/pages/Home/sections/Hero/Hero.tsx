import { SectionShell } from '@/components/ui/SectionShell'
import { HeroEditorialCard } from './HeroEditorialCard'
import { HeroValueMarquee } from './HeroValueMarquee'
import { WorkingHoursCard } from './WorkingHoursCard'

export function Hero() {
  return (
    <SectionShell tone="primary" maxWidth={1560} ariaLabelledBy="hero-title" containerClassName="flex flex-col gap-6">
      <div className="flex flex-wrap items-stretch gap-6">
        <div className="flex flex-1 flex-col gap-6" style={{ flexBasis: 620, minWidth: 300 }}>
          <HeroEditorialCard />
          <div className="flex flex-wrap gap-6">
            <div
              className="flex-1 overflow-hidden rounded-[26px] bg-carely-ivory-alt"
              style={{ flexBasis: 260, minWidth: 240, minHeight: 300 }}
            />
            <WorkingHoursCard />
          </div>
        </div>

        <div
          className="flex-1 overflow-hidden rounded-[32px] bg-carely-ivory-alt"
          style={{ flexBasis: 440, minWidth: 300, minHeight: 720 }}
        />
      </div>

      <HeroValueMarquee />
    </SectionShell>
  )
}
