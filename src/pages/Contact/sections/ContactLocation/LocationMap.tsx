import { mapEmbed } from '@/data/contactInfo'

/**
 * Desaturated location map. The project has no map provider, so this keeps the
 * prototype's OpenStreetMap embed. `grayscale(0.85) contrast(0.95)` is part of
 * the design — it makes the map recede behind the apricot/green accents.
 * 16:10 below 1040px so a full-width map doesn't get too tall; 4:3 above.
 */
export function LocationMap() {
  return (
    <div className="min-w-0 overflow-hidden rounded-[24px] bg-carely-map aspect-[16/10] min-[1040px]:aspect-[4/3]">
      <iframe
        title={mapEmbed.title}
        src={mapEmbed.src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full w-full border-0 [filter:grayscale(0.85)_contrast(0.95)]"
      />
    </div>
  )
}
