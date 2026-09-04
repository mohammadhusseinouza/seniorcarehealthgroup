import { SectionShell } from '@/components/ui/SectionShell'
import { CircularBadge } from './CircularBadge'
import { ExperienceStat } from './ExperienceStat'
import { WhoWeAreImages } from './WhoWeAreImages'

const BENEFITS = ['24/7 Telemedicine Access', 'Daily On-Site Provider Support']

export function WhoWeAre() {
  return (
    <SectionShell tone="alternate" maxWidth={1440} ariaLabelledBy="who-title">
      <div className="grid grid-cols-1 items-center gap-12 min-[1100px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <WhoWeAreImages />

        <div className="max-w-[700px]">
          <p className="flex items-center gap-2.5 text-[17px] text-carely-apricot">
            <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-carely-apricot" />
            Who we are
          </p>

          <h2 id="who-title" className="mt-7 max-w-[680px] text-3xl font-semibold tracking-[-0.02em] text-carely-deep sm:text-4xl">
            Integrated healthcare support with <em className="font-editorial not-italic sm:italic">compassion</em> and{' '}
            <em className="font-editorial not-italic sm:italic">care always</em>
          </h2>

          <div className="mt-9 flex flex-wrap items-start gap-9">
            <CircularBadge label="Who We Are" />
            <div className="max-w-[650px] flex-1" style={{ flexBasis: 380, minWidth: 280 }}>
              <p className="text-lg leading-relaxed text-carely-body">
                Our team blends telemedicine and on-site care so every resident gets consistent, attentive support.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-carely-body">
                We work alongside facility staff, not around them, to make partnership simple.
              </p>
            </div>
          </div>

          <div className="my-8 h-px bg-carely-lime/75" />

          <ul className="flex flex-wrap gap-5">
            {BENEFITS.map((item) => (
              <li key={item} className="flex flex-1 items-center gap-3" style={{ flexBasis: 280 }}>
                <span
                  aria-hidden="true"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-carely-apricot text-carely-white"
                >
                  ✓
                </span>
                <span className="text-[17px] font-semibold text-carely-deep">{item}</span>
              </li>
            ))}
          </ul>

          <ExperienceStat />
        </div>
      </div>
    </SectionShell>
  )
}
