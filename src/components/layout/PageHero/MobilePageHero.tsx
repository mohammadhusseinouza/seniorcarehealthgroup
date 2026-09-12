import { Link } from 'react-router-dom'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

interface MobilePageHeroProps {
  titleMain: string
  titleAccent: string
  breadcrumbCurrent: string
  image?: string
}

/**
 * Direction 1b's short full-bleed masthead band (README "Page hero"),
 * replacing the desktop's centered inset apricot card below 640px. Pulled up
 * -70px so it starts behind MobileFloatingNav's sticky pill, matching the
 * pattern established by the Home page's MobileHero.
 */
export function MobilePageHero({ titleMain, titleAccent, breadcrumbCurrent, image }: MobilePageHeroProps) {
  return (
    <section aria-labelledby="mobile-page-hero-title" className="-mt-[70px] min-[640px]:hidden">
      <div className="relative h-[252px] overflow-hidden rounded-b-[30px]">
        <div className="absolute inset-[-6%] scale-[1.06] blur-[9px]">
          <ResponsiveImage src={image} alt="" loading="eager" />
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-carely-apricot opacity-[0.72]" />

        {/* Top-right leaf / frond — path data verbatim from PageHero.tsx, mobile size/position. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 160 220"
          className="pointer-events-none absolute top-[-34px] right-[-18px] h-auto w-[120px] opacity-[0.18]"
        >
          <g fill="none" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round">
            <path d="M80 214C30 168 14 108 30 44c58 2 100 44 106 104-4 40-26 58-56 66Z" />
            <path d="M80 214C68 154 58 96 34 46" />
            <path d="M74 186c14-14 30-22 48-24M68 158c14-16 28-26 46-30M60 128c14-16 26-26 42-32M52 98c12-16 22-24 36-30M44 70c10-12 18-18 28-22" />
          </g>
        </svg>

        {/* Bottom-left floral rosette — path data verbatim from PageHero.tsx, mobile size/position. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 200"
          className="pointer-events-none absolute bottom-[-40px] left-[-36px] h-auto w-[170px] opacity-[0.16]"
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

        <div className="absolute right-0 bottom-0 left-0 px-[22px] pb-[26px]">
          <p className="m-0 mb-3 flex items-center gap-[10px] text-[15.5px] text-carely-white">
            <Link to="/" className="text-carely-white no-underline">
              Home
            </Link>
            <span aria-hidden="true" className="opacity-80">
              /
            </span>
            <span aria-current="page" className="font-semibold">
              {breadcrumbCurrent}
            </span>
          </p>
          <h1 id="mobile-page-hero-title" className="m-0 text-[46px] leading-[1.05] font-bold tracking-[-0.02em] text-carely-white">
            {titleMain} <em className="font-editorial font-normal tracking-normal italic">{titleAccent}</em>
          </h1>
        </div>
      </div>
    </section>
  )
}
