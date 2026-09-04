import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { useReveal } from '@/hooks/useReveal'

/** Overlap percentages (62%/80% back, 68%/80% front @ left:32%/top:20%) are the composition — preserve exactly. */
export function WhoWeAreImages() {
  const { ref, isRevealed } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`relative mx-auto w-full max-w-[660px] ${isRevealed ? 'who-in' : ''}`}
      style={{ minHeight: 'clamp(420px,38vw,640px)' }}
    >
      <div data-pos="back" className="who-reveal who-image absolute top-0 left-0 h-[80%] w-[62%] overflow-hidden rounded-[26px]">
        <div className="who-image-inner h-full w-full">
          <ResponsiveImage alt="Caregiver standing beside a seated senior woman" />
        </div>
      </div>

      <div
        data-pos="front"
        className="who-reveal who-image absolute top-[20%] left-[32%] z-[2] h-[80%] w-[68%] overflow-hidden rounded-[26px] shadow-[0_18px_44px_rgba(39,58,41,0.14)]"
      >
        <div className="who-image-inner h-full w-full">
          <ResponsiveImage alt="Caregiver seated with a senior woman, warm interior" />
        </div>
      </div>
    </div>
  )
}
