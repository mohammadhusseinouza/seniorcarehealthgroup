import { Link } from 'react-router-dom'

const ArrowUpRightIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface AdditionalClinicalServicesProps {
  variant?: 'desktop' | 'mobile'
}

/**
 * Latest handoff replaces the former definition list of extra clinical
 * programs with a single CTA to the Services page (the full catalogue now
 * lives there). Mobile variant is a full-width, justify-between bar
 * (README "Additional Clinical Services") reusing the same destination/copy.
 */
export function AdditionalClinicalServices({ variant = 'desktop' }: AdditionalClinicalServicesProps) {
  if (variant === 'mobile') {
    return (
      <div className="mt-[30px] border-t border-carely-deep/[0.12] px-5 pt-[26px]">
        <Link
          to="/services"
          className="flex min-h-[56px] w-full items-center justify-between gap-3 rounded-full bg-carely-apricot py-0 pr-5 pl-[26px] text-[17px] font-semibold whitespace-nowrap text-carely-deep no-underline transition-colors duration-200 active:bg-carely-lime focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep"
        >
          Additional Clinical Services
          {ArrowUpRightIcon}
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-[clamp(64px,8vw,110px)] flex border-t border-carely-deep/[0.12] pt-[clamp(36px,4vw,56px)]">
      <Link
        to="/services"
        className="inline-flex min-h-[56px] items-center gap-[14px] rounded-full bg-carely-apricot px-8 text-[18px] font-semibold whitespace-nowrap text-carely-deep no-underline transition-colors duration-[250ms] hover:bg-carely-lime focus-ring focus-visible:outline-offset-[3px] focus-visible:outline-carely-deep"
      >
        Additional Clinical Services
        {ArrowUpRightIcon}
      </Link>
    </div>
  )
}
