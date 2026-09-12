import { mapEmbed } from '@/data/contactInfo'
import { useIsMobileViewport } from '@/hooks/useIsMobileViewport'

interface LocationMapProps {
  variant?: 'desktop' | 'mobile'
}

/**
 * Desaturated location map. The project has no map provider, so this keeps the
 * prototype's OpenStreetMap embed. `grayscale(0.85) contrast(0.95)` is part of
 * the design — it makes the map recede behind the apricot/green accents.
 *
 * Mobile (README "Map"): full-bleed, 240px, square corners, after the detail
 * rows. Desktop: 16:10 below 1040px so a full-width map doesn't get too tall;
 * 4:3 above.
 *
 * Both variants are mounted at once (CSS hides one), but `<iframe>`s fetch
 * their `src` regardless of `display:none` — so this only actually renders
 * the iframe for whichever variant matches the real current viewport
 * (`useIsMobileViewport`), keeping exactly one map load in the DOM.
 */
export function LocationMap({ variant = 'desktop' }: LocationMapProps) {
  const isMobileViewport = useIsMobileViewport()
  const shouldLoad = variant === 'mobile' ? isMobileViewport : !isMobileViewport

  const wrapperClassName =
    variant === 'mobile'
      ? 'h-[240px] w-full bg-carely-map min-[640px]:hidden'
      : 'hidden min-w-0 overflow-hidden rounded-[24px] bg-carely-map aspect-[16/10] min-[640px]:block min-[1040px]:aspect-[4/3]'

  return (
    <div className={wrapperClassName}>
      {shouldLoad ? (
        <iframe
          title={mapEmbed.title}
          src={mapEmbed.src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-full w-full border-0 [filter:grayscale(0.85)_contrast(0.95)]"
        />
      ) : null}
    </div>
  )
}
