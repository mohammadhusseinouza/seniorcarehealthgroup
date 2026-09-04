import { Link } from 'react-router-dom'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { useReveal } from '@/hooks/useReveal'
import type { Service } from '@/types'

const ArrowIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13m-5-5 5 5-5 5" stroke="#273A29" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface ServiceRowProps {
  service: Service
  reversed?: boolean
  marginTopClassName: string
}

/**
 * One IntersectionObserver target per row (the <article> root) reveals both
 * its text and image columns together — see core-services.css for why this
 * needs no second observer.
 */
export function ServiceRow({ service, reversed = false, marginTopClassName }: ServiceRowProps) {
  const { ref, isRevealed } = useReveal<HTMLElement>()

  const textDir = reversed ? 'text-right' : 'text-left'
  const imageDir = reversed ? 'image-left' : 'image-right'

  return (
    <article
      ref={ref}
      className={[
        'svc-row',
        isRevealed && 'svc-in',
        marginTopClassName,
        // Below 680px every row is a plain column so DOM order (text, then
        // image) reads correctly; row-reverse only ever applies at >=680px,
        // where the two columns sit side by side.
        'flex flex-col gap-8 min-[680px]:flex-row min-[680px]:flex-wrap min-[680px]:items-center min-[680px]:gap-[clamp(32px,5vw,80px)]',
        reversed ? 'min-[680px]:flex-row-reverse' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div data-dir={textDir} className="svc-reveal max-w-[420px] min-[680px]:grow min-[680px]:basis-[340px]">
        <span
          data-dir="icon"
          className="svc-reveal svc-icon flex h-[70px] w-[70px] items-center justify-center rounded-full bg-carely-lime"
        >
          {service.icon}
        </span>

        <h3 data-dir="title" className="svc-reveal svc-title mt-5 font-editorial text-[clamp(27px,2.6vw,35px)] leading-[1.2] text-carely-deep">
          {service.title}
        </h3>

        <p data-dir="desc" className="svc-reveal mt-5 text-pretty text-[17px] leading-[1.6] text-carely-body">
          {service.description}
        </p>

        <Link
          to="/services"
          data-dir="cta"
          className="svc-reveal svc-cta mt-[30px] inline-flex h-[50px] items-center gap-[14px] rounded-full bg-carely-deep py-0 pr-2 pl-[26px] text-base font-semibold whitespace-nowrap text-carely-white no-underline transition-colors duration-200 hover:bg-carely-dark-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-carely-apricot"
        >
          Learn more
          <span className="svc-arrow flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-carely-lime">
            {ArrowIcon}
          </span>
        </Link>
      </div>

      <div
        data-dir={imageDir}
        className="svc-reveal relative min-w-[280px] overflow-hidden rounded-[30px] min-[680px]:grow min-[680px]:basis-[520px]"
        style={{ height: 'clamp(300px,32vw,440px)' }}
      >
        <div className="svc-image-inner absolute inset-0">
          <ResponsiveImage src={service.image} alt={service.imageAlt} />
        </div>
        <span aria-hidden="true" className="svc-tint absolute inset-0 bg-carely-deep opacity-0" />
      </div>
    </article>
  )
}
