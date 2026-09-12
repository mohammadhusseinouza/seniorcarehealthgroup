import { IconCircle } from '@/components/ui/IconCircle'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { contactInfo, mapEmbed } from '@/data/contactInfo'
import { LocationMap } from './LocationMap'
import { MailIcon, MapPinIcon, PhoneIcon } from './ContactLocation'

/**
 * The prototype's Address row links to the OpenStreetMap deep link matching
 * the embed's own marker — derived from `mapEmbed.src` (rather than a second
 * hardcoded coordinate pair) so the two can never drift apart. Falls back to
 * the embed URL itself if the marker param is ever missing/malformed.
 */
function getMapDeepLink(embedSrc: string): string {
  try {
    const marker = new URL(embedSrc).searchParams.get('marker')
    if (!marker) return embedSrc
    const [lat, lon] = marker.split(',')
    if (!lat || !lon) return embedSrc
    return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}`
  } catch {
    return embedSrc
  }
}

const rowClasses =
  'flex items-center gap-4 rounded-[20px] border border-carely-deep/[0.09] bg-carely-card p-[18px] no-underline'
const rowPressClasses = 'transition-colors duration-200 active:bg-carely-icon-soft focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-apricot'

/**
 * Mobile "Contact us" (README): details lead, map follows — the reverse of
 * desktop's map-first two-column layout. Address and Email become whole-row
 * links (bigger targets); Phone stays static since `contactInfo.phone` is
 * `null`. Reuses `contactInfo`/`mapEmbed` and the exact icon geometry from
 * `ContactLocation.tsx` — no data or SVG paths are duplicated.
 */
export function MobileContactLocation() {
  const mapDeepLink = getMapDeepLink(mapEmbed.src)

  return (
    <section aria-labelledby="mobile-location-title" className="bg-carely-ivory-alt pt-11 pb-[52px] min-[640px]:hidden">
      <header className="px-5">
        <SectionEyebrow text="Contact us" variant="lora" />
        <h2
          id="mobile-location-title"
          className="mt-4 text-pretty text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-carely-deep"
        >
          We’re here to listen, <em className="font-editorial font-normal tracking-normal italic">help, and support</em>
        </h2>
      </header>

      <div className="mt-6 flex flex-col gap-2.5 px-4">
        <a href={mapDeepLink} target="_blank" rel="noreferrer" className={[rowClasses, rowPressClasses].join(' ')}>
          <IconCircle size={52} className="[&>svg]:h-[26px] [&>svg]:w-[26px]">
            {MapPinIcon}
          </IconCircle>
          <span className="min-w-0">
            <span className="block text-[19px] font-bold text-carely-deep">Address</span>
            <span className="mt-1 block text-[16.5px] leading-[1.5] text-carely-muted">
              {contactInfo.addressLines[0]}
              <br />
              {contactInfo.addressLines[1]}
            </span>
          </span>
        </a>

        <a href={`mailto:${contactInfo.email}`} className={[rowClasses, rowPressClasses].join(' ')}>
          <IconCircle size={52} className="[&>svg]:h-[26px] [&>svg]:w-[26px]">
            {MailIcon}
          </IconCircle>
          <span className="min-w-0">
            <span className="block text-[19px] font-bold text-carely-deep">Email</span>
            <span className="mt-1 block text-[16.5px] leading-[1.5] text-carely-muted [overflow-wrap:anywhere]">
              {contactInfo.email}
            </span>
          </span>
        </a>

        {contactInfo.phone ? (
          <a
            href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
            className={[rowClasses, rowPressClasses].join(' ')}
          >
            <IconCircle size={52} className="[&>svg]:h-[26px] [&>svg]:w-[26px]">
              {PhoneIcon}
            </IconCircle>
            <span className="min-w-0">
              <span className="block text-[19px] font-bold text-carely-deep">Phone</span>
              <span className="mt-1 block text-[16.5px] leading-[1.5] text-carely-muted">{contactInfo.phone}</span>
            </span>
          </a>
        ) : (
          <div className={rowClasses}>
            <IconCircle size={52} className="[&>svg]:h-[26px] [&>svg]:w-[26px]">
              {PhoneIcon}
            </IconCircle>
            <span className="min-w-0">
              <span className="block text-[19px] font-bold text-carely-deep">Phone</span>
              <span className="mt-1 block text-[16.5px] leading-[1.5] text-carely-muted">Available on request</span>
            </span>
          </div>
        )}
      </div>

      <div className="mt-[22px]">
        <LocationMap variant="mobile" />
      </div>
    </section>
  )
}
