import { Link } from 'react-router-dom'
import { IconCircle } from '@/components/ui/IconCircle'
import type { ServiceCardItem } from '@/types'

type Variant = 'primary' | 'secondary'

interface VariantSpec {
  padding: string
  iconSize: number
  glyphSize: number
  title: string
  description: string
  learn: string
}

/** The two variants differ only in padding, icon size, heading size and two margins. */
const VARIANTS: Record<Variant, VariantSpec> = {
  primary: {
    padding: 'p-[clamp(28px,2.8vw,40px)]',
    iconSize: 74,
    glyphSize: 34,
    title: 'mt-[clamp(26px,2.4vw,34px)] text-[clamp(21px,1.8vw,27px)]',
    description: 'mt-[14px] mb-[clamp(26px,2.6vw,36px)]',
    learn: 'mt-[22px]',
  },
  secondary: {
    padding: 'p-[clamp(24px,2.2vw,32px)]',
    iconSize: 66,
    glyphSize: 31,
    title: 'mt-[clamp(22px,2vw,30px)] text-[clamp(20px,1.6vw,24px)]',
    description: 'mt-[12px] mb-[clamp(22px,2.2vw,30px)]',
    learn: 'mt-[20px]',
  },
}

const ArrowUpRightIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface ServiceCardProps {
  service: ServiceCardItem
  variant: Variant
}

/**
 * One whole-card link. White at rest; on pointer hover (fine pointer only) or
 * keyboard focus it cross-fades to a photo-backed forest panel — all nine
 * properties over one 320ms ease, defined in service-cards.css. No transform.
 */
export function ServiceCard({ service, variant }: ServiceCardProps) {
  const spec = VARIANTS[variant]

  return (
    <Link
      to={service.href}
      aria-label={`Learn more about ${service.title}`}
      className={`svc-card relative flex min-w-0 flex-col overflow-hidden rounded-[24px] no-underline ${spec.padding}`}
    >
      {/* Hover image layer — decorative, behind the content. */}
      <span className="svc-card-img pointer-events-none absolute inset-0 block overflow-hidden rounded-[inherit]">
        <span className="absolute inset-0 bg-carely-map">
          <img src={service.hoverImage} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
        </span>
        <span className="absolute inset-0 bg-carely-deep opacity-[0.78]" />
      </span>

      <span className="relative z-[1] flex flex-1 flex-col">
        <IconCircle size={spec.iconSize} bg={null} className="svc-card-icon">
          <svg
            width={spec.glyphSize}
            height={spec.glyphSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {service.icon}
          </svg>
        </IconCircle>

        <h3 className={`svc-card-title ${spec.title} font-bold leading-[1.25]`}>{service.title}</h3>

        <p className={`svc-card-desc ${spec.description} text-pretty text-[17px] leading-[1.6]`}>{service.description}</p>

        <span aria-hidden="true" className="svc-card-divider mt-auto block h-px" />

        <span className={`svc-card-learn ${spec.learn} inline-flex items-center gap-2.5 text-[18px] font-bold`}>
          Learn More
          {ArrowUpRightIcon}
        </span>
      </span>
    </Link>
  )
}
