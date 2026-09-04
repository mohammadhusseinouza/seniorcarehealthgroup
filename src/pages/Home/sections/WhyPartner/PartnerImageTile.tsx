import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { useReveal } from '@/hooks/useReveal'

interface PartnerImageTileProps {
  imageAlt: string
  pos: 'center' | 'image-left' | 'image-right'
  col: 0 | 1 | 2
}

export function PartnerImageTile({ imageAlt, pos, col }: PartnerImageTileProps) {
  const { ref, isRevealed } = useReveal<HTMLDivElement>()

  const colClass = col === 1 ? 'wp-col-1' : col === 2 ? 'wp-col-2' : ''

  return (
    <div
      ref={ref}
      data-pos={pos}
      className={['wp-reveal wp-tile', isRevealed && 'wp-in', colClass, 'relative min-h-[300px] overflow-hidden rounded-[22px]']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="wp-image-inner absolute inset-0">
        <ResponsiveImage alt={imageAlt} />
      </div>
      <span aria-hidden="true" className="wp-tint absolute inset-0 bg-carely-deep opacity-0" />
    </div>
  )
}
