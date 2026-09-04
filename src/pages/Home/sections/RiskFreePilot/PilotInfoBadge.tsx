export function PilotInfoBadge() {
  return (
    <div className="absolute bottom-[-24px] left-1/2 flex w-[min(720px,calc(100%-32px))] -translate-x-1/2 items-center gap-4 rounded-full bg-carely-white py-3.5 pr-[26px] pl-3.5 shadow-[0_10px_30px_rgba(39,58,41,0.12)]">
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
      <p className="m-0 text-pretty text-left text-[17px] leading-[1.45] font-medium text-carely-deep">
        A guided 6-month pilot with measurable outcomes and low-risk onboarding.
      </p>
    </div>
  )
}
