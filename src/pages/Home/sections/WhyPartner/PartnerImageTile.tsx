import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

interface PartnerImageTileProps {
  imageAlt: string
}

export function PartnerImageTile({ imageAlt }: PartnerImageTileProps) {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-[22px]">
      <ResponsiveImage alt={imageAlt} />
    </div>
  )
}
