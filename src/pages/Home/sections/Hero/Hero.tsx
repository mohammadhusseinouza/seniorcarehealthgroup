import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { HeroEditorialCard } from './HeroEditorialCard'
import { HeroValueMarquee } from './HeroValueMarquee'
import { WorkingHoursCard } from './WorkingHoursCard'
import './hero.css'

/**
 * Hero intentionally does not use SectionShell: its padding (8px top / 60px
 * bottom, not the shared symmetric clamp) and 1560px max-width are unique to
 * this section and always sit on the ivory background, so a bespoke wrapper
 * is a closer match than fighting SectionShell's fixed padding utility.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="w-full box-border bg-carely-ivory px-[clamp(20px,3.2vw,48px)] pt-2 pb-[60px]"
    >
      <div className="mx-auto flex max-w-[1560px] flex-col gap-6">
        <div className="flex flex-wrap items-stretch gap-6">
          <div className="flex flex-1 flex-col gap-6" style={{ flexBasis: 620, minWidth: 300 }}>
            <HeroEditorialCard />

            <div className="flex flex-wrap gap-6">
              <div
                className="hero-rise hero-d2 relative flex-1 overflow-hidden rounded-[26px]"
                style={{ flexBasis: 260, minWidth: 240, minHeight: 300 }}
              >
                <div className="hero-float">
                  <ResponsiveImage alt="Caregiver with a seated elderly man, home setting" />
                </div>
              </div>

              <WorkingHoursCard />
            </div>
          </div>

          <div
            className="hero-right hero-d1 relative flex-1 overflow-hidden rounded-[32px]"
            style={{ flexBasis: 440, minWidth: 300, minHeight: 'clamp(360px,60vw,720px)' }}
          >
            <div className="hero-ken">
              <ResponsiveImage alt="Caregiver holding hands with a seated senior woman" />
            </div>
          </div>
        </div>

        <HeroValueMarquee />
      </div>
    </section>
  )
}
