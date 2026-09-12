import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { careHomeResults } from '@/data/careHomeResults'
import { ResultBlock } from './ResultBlock'
import { StatPeopleIcon } from './OurCareHome'

const SwipeIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#6E756E" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * Mobile "Our Care Home" (README): the stat/image card leads, then the four
 * desktop result blocks become one native swipeable set instead of the
 * three-column grid. Reuses `careHomeResults` and `ResultBlock` (its
 * `column` layout is exactly the icon-above-title-above-body treatment the
 * mobile cards need) — no content or icon geometry is duplicated.
 */
export function MobileOurCareHome() {
  return (
    <section aria-labelledby="mobile-care-home-title" className="bg-carely-ivory pt-[52px] pb-14 min-[640px]:hidden">
      <header className="px-5">
        <SectionEyebrow text="Our Care Home" variant="lora" />
        <h2
          id="mobile-care-home-title"
          className="mt-4 text-pretty text-[32px] leading-[1.1] font-bold tracking-[-0.025em] text-carely-deep"
        >
          Your trusted partner in home{' '}
          <em className="block font-editorial font-normal leading-[1.15] tracking-normal italic">
            health and wellness
          </em>
        </h2>
      </header>

      <div className="relative mx-5 mt-6 h-[300px] overflow-hidden rounded-[26px]">
        <ResponsiveImage src={undefined} alt="Caregiver leaning toward a smiling elderly resident in a warm room" />

        <div className="pointer-events-none absolute inset-x-[5%] bottom-[5%] box-border rounded-[20px] bg-carely-deep p-5">
          <div className="flex items-center gap-4">
            {StatPeopleIcon}
            <span className="text-[38px] leading-none font-bold tracking-[-0.02em] text-carely-white">200 +</span>
          </div>
          <p className="mt-3.5 text-pretty text-[15.5px] leading-[1.5] text-carely-white">
            Residents supported with measurable health improvements.
          </p>
        </div>
      </div>

      <div
        className="mt-[22px] flex gap-[14px] overflow-x-auto px-5 pt-0 pb-1.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {careHomeResults.map((result) => (
          <article
            key={result.id}
            className="box-border w-[262px] shrink-0 rounded-[22px] border border-carely-deep/[0.09] bg-carely-card p-[22px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <ResultBlock title={result.title} body={result.body} icon={result.icon} layout="column" />
          </article>
        ))}
        <span aria-hidden="true" className="w-1.5 shrink-0" />
      </div>

      <p className="mt-3 flex items-center gap-2 px-5 text-[13px] text-carely-muted">
        {SwipeIcon}
        Swipe through all four results
      </p>
    </section>
  )
}
