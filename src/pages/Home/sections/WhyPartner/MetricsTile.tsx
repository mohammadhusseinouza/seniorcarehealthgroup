import { IconCircle } from '@/components/ui/IconCircle'

interface MetricsRow {
  label: string
}

interface MetricsTileProps {
  variant: 'dark' | 'light'
  rows: [MetricsRow, MetricsRow]
}

const VARIANT_CLASSES: Record<MetricsTileProps['variant'], string> = {
  dark: 'bg-carely-deep text-carely-white',
  light: 'bg-carely-apricot-soft text-carely-deep',
}

export function MetricsTile({ variant, rows }: MetricsTileProps) {
  const [first, second] = rows

  return (
    <div className={`flex min-h-[300px] flex-col overflow-hidden rounded-[22px] p-8 ${VARIANT_CLASSES[variant]}`}>
      <span
        className={`text-xs font-medium uppercase tracking-[0.13em] ${
          variant === 'dark' ? 'text-carely-lime' : 'text-carely-apricot'
        }`}
      >
        Success Metrics
      </span>

      <div className="mt-6 flex items-center gap-4">
        <IconCircle size={46} tone="apricot" />
        <h3 className="text-lg font-medium">{first.label}</h3>
      </div>

      <div className={`my-6 h-px ${variant === 'dark' ? 'bg-carely-white/15' : 'bg-carely-deep/15'}`} />

      <div className="flex items-center gap-4">
        <IconCircle size={46} tone="apricot" />
        <h3 className="text-lg font-medium">{second.label}</h3>
      </div>
    </div>
  )
}
