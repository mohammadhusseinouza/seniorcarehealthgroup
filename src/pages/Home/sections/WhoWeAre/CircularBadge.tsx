interface CircularBadgeProps {
  label: string
}

export function CircularBadge({ label }: CircularBadgeProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex h-[136px] w-[136px] shrink-0 items-center justify-center rounded-full border border-carely-apricot/40 text-carely-apricot"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth={1.8}>
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
