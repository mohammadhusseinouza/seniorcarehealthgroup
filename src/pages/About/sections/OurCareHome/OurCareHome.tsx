import { Fragment } from 'react'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { careHomeResults } from '@/data/careHomeResults'
import type { CareHomeResult } from '@/types'
import { MobileOurCareHome } from './MobileOurCareHome'
import { ResultBlock } from './ResultBlock'

/** Exported for reuse by MobileOurCareHome's stat panel (same glyph, verbatim). */
export const StatPeopleIcon = (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
    <circle cx="9.4" cy="8.4" r="3.1" stroke="#E2A76F" strokeWidth={1.7} />
    <path d="M3.6 18c0-3.2 2.6-5 5.8-5s5.8 1.8 5.8 5" stroke="#E2A76F" strokeWidth={1.7} strokeLinecap="round" />
    <path
      d="M16.2 6.6a2.7 2.7 0 0 1 0 5.2M17.6 13.6c1.9.5 3 1.9 3 4.4"
      stroke="#E2A76F"
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </svg>
)

const leftResults = careHomeResults.filter((result) => result.layout === 'row')
const rightResults = careHomeResults.filter((result) => result.layout === 'column')

/** Renders a column's result blocks with a hairline rule between each pair. */
function ResultColumn({ results, dividerClassName }: { results: CareHomeResult[]; dividerClassName: string }) {
  return (
    <>
      {results.map((result, index) => (
        <Fragment key={result.id}>
          {index > 0 && <span aria-hidden="true" className={dividerClassName} />}
          <ResultBlock title={result.title} body={result.body} icon={result.icon} layout={result.layout} />
        </Fragment>
      ))}
    </>
  )
}

/**
 * "Our Care Home" — three DOM children (left text · stat image · right text) on
 * one grid that restages three times (About Us README §8):
 *   ≥1180px  three columns 0.83 / 1 / 0.83, right column a normal block
 *   760–1179 two columns; right column spans full width below as a 2-up grid,
 *            its internal divider hidden (replaced by the grid gap)
 *   <760px   single column, everything stacked, divider back
 * No scroll reveal or hover on this section — it is a static results layout.
 */
export function OurCareHome() {
  return (
    <>
      <MobileOurCareHome />

      <section
        aria-labelledby="care-home-title"
        className="hidden box-border w-full bg-carely-ivory py-[clamp(70px,8vw,130px)] min-[640px]:block"
      >
      <div className="mx-auto grid w-[calc(100%-80px)] max-w-[1440px] grid-cols-1 items-center gap-[clamp(40px,4vw,72px)] min-[760px]:grid-cols-2 min-[1180px]:grid-cols-[minmax(0,0.83fr)_minmax(0,1fr)_minmax(0,0.83fr)]">
        {/* Left column */}
        <div className="min-w-0">
          <p className="m-0 flex items-center gap-[11px] font-editorial text-[clamp(18px,1.6vw,22px)] font-normal text-carely-deep italic">
            <span aria-hidden="true" className="block h-[9px] w-[9px] shrink-0 rounded-full bg-carely-apricot" />
            Our Care Home
          </p>

          <h2
            id="care-home-title"
            className="mt-[18px] text-pretty text-[clamp(34px,3.3vw,56px)] leading-[1.1] font-bold tracking-[-0.025em] text-carely-deep"
          >
            Your trusted partner in home{' '}
            <em className="block font-editorial font-normal leading-[1.15] tracking-normal italic">
              health and wellness
            </em>
          </h2>

          <div className="mt-[clamp(32px,3.2vw,46px)] flex flex-col">
            <ResultColumn
              results={leftResults}
              dividerClassName="my-[clamp(26px,2.6vw,36px)] block h-px bg-carely-deep/12"
            />
          </div>
        </div>

        {/* Stat image card */}
        <div className="relative min-w-0 overflow-hidden rounded-[28px] aspect-[4/5] min-[760px]:aspect-[3/4]">
          <ResponsiveImage src={undefined} alt="Caregiver leaning toward a smiling elderly resident in a warm room" />
          <div className="pointer-events-none absolute inset-x-[5%] bottom-[5%] box-border rounded-[20px] bg-carely-deep p-[clamp(20px,2vw,28px)]">
            <div className="flex items-center gap-4">
              {StatPeopleIcon}
              <span className="text-[clamp(36px,3.6vw,54px)] leading-none font-bold tracking-[-0.02em] text-carely-white">
                200 +
              </span>
            </div>
            <p className="mt-3.5 text-pretty text-[clamp(15px,1.35vw,19px)] leading-[1.5] text-carely-white">
              Residents supported with measurable health improvements.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="block min-w-0 min-[760px]:col-span-2 min-[760px]:grid min-[760px]:grid-cols-2 min-[760px]:items-start min-[760px]:gap-[clamp(32px,4vw,56px)] min-[1180px]:col-span-1 min-[1180px]:block">
          <ResultColumn
            results={rightResults}
            dividerClassName="my-[clamp(26px,2.6vw,36px)] block h-px bg-carely-deep/12 min-[760px]:hidden min-[1180px]:block"
          />
        </div>
      </div>
      </section>
    </>
  )
}
