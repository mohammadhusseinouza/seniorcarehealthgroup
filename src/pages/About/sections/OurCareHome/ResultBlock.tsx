import type { CareHomeResult } from '@/types'

type ResultBlockProps = Pick<CareHomeResult, 'title' | 'body' | 'icon' | 'layout'>

/**
 * One "Our Care Home" result: a 66px apricot icon circle plus a heading and
 * one line of secondary copy. `row` sits the circle beside the text (left
 * column); `column` stacks the circle above it (right column).
 */
export function ResultBlock({ title, body, icon, layout }: ResultBlockProps) {
  const isRow = layout === 'row'

  return (
    <div className={isRow ? 'flex items-start gap-5' : 'flex flex-col gap-[18px]'}>
      <span
        aria-hidden="true"
        className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-carely-apricot"
      >
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="m-0 text-[clamp(20px,1.7vw,25px)] font-bold text-carely-deep">{title}</h3>
        <p className="mt-2 text-pretty text-[17px] leading-[1.55] text-carely-muted">{body}</p>
      </div>
    </div>
  )
}
