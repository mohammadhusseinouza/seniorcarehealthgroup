import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

/** Overlap percentages (62%/80% back, 68%/80% front @ left:32%/top:20%) are the composition — preserve exactly. */
export function WhoWeAreImages() {
  return (
    <div className="relative mx-auto w-full max-w-[660px]" style={{ minHeight: 'clamp(420px,38vw,640px)' }}>
      <div className="absolute top-0 left-0 h-[80%] w-[62%] overflow-hidden rounded-[26px]">
        <ResponsiveImage alt="Caregiver standing beside a seated senior woman" />
      </div>
      <div className="absolute top-[20%] left-[32%] z-[2] h-[80%] w-[68%] overflow-hidden rounded-[26px] shadow-[0_18px_44px_rgba(39,58,41,0.14)]">
        <ResponsiveImage alt="Caregiver seated with a senior woman, warm interior" />
      </div>
    </div>
  )
}
