import { IconCircle } from '@/components/ui/IconCircle'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import type { Service } from '@/types'

interface ServiceRowProps {
  service: Service
  reversed?: boolean
}

export function ServiceRow({ service, reversed = false }: ServiceRowProps) {
  return (
    <article className={`flex flex-wrap items-center gap-10 ${reversed ? 'flex-row-reverse' : ''}`}>
      <div className="max-w-[420px] flex-1" style={{ flexBasis: 340 }}>
        <IconCircle size={70} tone="lime" />
        <h3 className="mt-5 font-editorial text-3xl text-carely-deep">{service.title}</h3>
        <p className="mt-5 text-[17px] leading-relaxed text-carely-body">{service.description}</p>
      </div>

      <div
        className="relative flex-1 overflow-hidden rounded-[30px]"
        style={{ flexBasis: 520, minWidth: 280, height: 'clamp(300px,32vw,440px)' }}
      >
        <ResponsiveImage alt={service.imageAlt} />
      </div>
    </article>
  )
}
