interface PilotInfoBadgeProps {
  /** 'overlay' = desktop, absolutely positioned over the pilot image's bottom edge. 'stacked' = mobile, normal flow pulled up with a negative margin. */
  variant?: 'overlay' | 'stacked'
}

export function PilotInfoBadge({ variant = 'overlay' }: PilotInfoBadgeProps) {
  const wrapperClassName =
    variant === 'stacked'
      ? 'relative mx-5 -mt-[26px] flex items-center gap-[14px] rounded-[26px] bg-carely-white py-[14px] pr-[18px] pl-[14px] shadow-[0_10px_30px_rgba(39,58,41,0.12)]'
      : 'absolute bottom-[-24px] left-0 flex w-[min(720px,100%)] items-center gap-4 rounded-full bg-carely-white py-3.5 pr-[26px] pl-3.5 shadow-[0_10px_30px_rgba(39,58,41,0.12)]'

  return (
    <div className={wrapperClassName}>
      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-carely-icon-soft">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3.6 19 6v6.2c0 4-3 6.8-7 8.2-4-1.4-7-4.2-7-8.2V6z"
            stroke="#273A29"
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <path d="m8.8 12 2.4 2.4 4-4.6" stroke="#273A29" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p
        className={[
          'm-0 text-pretty text-left leading-[1.45] font-medium text-carely-deep',
          variant === 'stacked' ? 'text-[15.5px]' : 'text-[17px]',
        ].join(' ')}
      >
        A guided 6-month pilot with measurable outcomes and low-risk onboarding.
      </p>
    </div>
  )
}
