import { Link } from 'react-router-dom'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

interface PageHeroProps {
  /** Plain first part of the heading. */
  titleMain: string
  /** Trailing phrase rendered in the Lora italic accent face. */
  titleAccent: string
  /** Label for the current page, shown after "Home /" in the breadcrumb. */
  breadcrumbCurrent: string
  /** Blurred, apricot-washed background photo. Optional — a placeholder renders until supplied. */
  image?: string
}

/**
 * Shared inner-page hero band (About Us / Services / Contact Us all use it at
 * identical dimensions — SHARED_COMPONENTS.md § PageHero). Apricot panel,
 * rounded, with a blurred + 72%-washed background photo and two decorative
 * botanical line drawings. The `h1` here is the page's only `h1`.
 */
export function PageHero({ titleMain, titleAccent, breadcrumbCurrent, image }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className="relative mx-auto mt-[clamp(20px,2.4vw,34px)] flex min-h-[clamp(250px,27vw,380px)] w-[calc(100%-32px)] max-w-[1480px] flex-col items-center justify-center overflow-hidden rounded-[clamp(20px,2.4vw,34px)] bg-carely-apricot px-[clamp(20px,4vw,60px)] py-[clamp(44px,5.5vw,72px)]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="absolute inset-[-6%] scale-[1.06] blur-[9px]">
          <ResponsiveImage src={image} alt="" loading="eager" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-carely-apricot opacity-[0.72]" />
      </div>

      {/* Bottom-left floral rosette (custom mark — path data verbatim from PageHero.dc.html). */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute bottom-[clamp(-70px,-4vw,-30px)] left-[clamp(-70px,-4vw,-30px)] h-auto w-[clamp(150px,17vw,230px)] opacity-[0.16]"
      >
        <g fill="none" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round">
          <path d="M100 100c-6-26 4-46 18-52s28 8 24 26-22 28-42 26Z" />
          <path d="M100 100c18-20 40-24 51-13s3 31-15 35-30-8-36-22Z" />
          <path d="M100 100c26 6 40 24 36 39s-24 20-35 7-6-32-1-46Z" />
          <path d="M100 100c-2 27-16 43-32 42s-24-19-15-34 30-16 47-8Z" />
          <path d="M100 100c-24-12-34-32-26-45s28-13 38 2 0 32-12 43Z" />
          <circle cx="100" cy="100" r="9" />
        </g>
      </svg>

      {/* Top-right leaf / frond. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 160 220"
        className="pointer-events-none absolute top-[clamp(-56px,-3.4vw,-24px)] right-[clamp(-46px,-2.6vw,-18px)] h-auto w-[clamp(100px,11vw,150px)] opacity-[0.18]"
      >
        <g fill="none" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round">
          <path d="M80 214C30 168 14 108 30 44c58 2 100 44 106 104-4 40-26 58-56 66Z" />
          <path d="M80 214C68 154 58 96 34 46" />
          <path d="M74 186c14-14 30-22 48-24M68 158c14-16 28-26 46-30M60 128c14-16 26-26 42-32M52 98c12-16 22-24 36-30M44 70c10-12 18-18 28-22" />
        </g>
      </svg>

      <h1
        id="page-hero-title"
        className="relative m-0 text-center text-[clamp(42px,6vw,78px)] leading-[1.1] font-bold tracking-[-0.02em] text-balance text-carely-white"
      >
        {titleMain} <em className="font-editorial font-normal tracking-normal italic">{titleAccent}</em>
      </h1>

      <p className="relative mt-[clamp(16px,1.8vw,24px)] flex items-center justify-center gap-3 text-[clamp(16px,1.7vw,23px)] font-normal text-carely-white">
        <Link
          to="/"
          className="text-carely-white no-underline transition-opacity duration-200 hover:opacity-75 focus-ring focus-visible:outline-offset-2 focus-visible:outline-carely-white"
        >
          Home
        </Link>
        <span aria-hidden="true" className="opacity-80">
          /
        </span>
        <span aria-current="page">{breadcrumbCurrent}</span>
      </p>
    </section>
  )
}
