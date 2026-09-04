import { IconCircle } from '@/components/ui/IconCircle'

export function PilotInfoBadge() {
  return (
    <div className="absolute -bottom-6 left-1/2 flex w-[min(720px,calc(100%-32px))] -translate-x-1/2 items-center gap-4 rounded-full bg-carely-white p-3.5 shadow-[0_10px_30px_rgba(39,58,41,0.12)]">
      <IconCircle size={40} tone="soft" />
      <p className="text-[17px] font-medium text-carely-deep">
        A guided 6-month pilot with measurable outcomes and low-risk onboarding.
      </p>
    </div>
  )
}
