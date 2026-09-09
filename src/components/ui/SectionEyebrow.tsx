interface SectionEyebrowProps {
  /** Eyebrow text (e.g. "Reach out"). */
  text: string
  /**
   * `lora` — Lora italic, forest green (inner-page sections).
   * `sans` — DM Sans, apricot (the Who We Are section).
   */
  variant?: 'lora' | 'sans'
  className?: string
}

/**
 * The dot + short-phrase eyebrow that opens most sections. A 9px apricot dot
 * followed by the label; the two type treatments in the handoffs are the
 * `lora` / `sans` variants.
 */
export function SectionEyebrow({ text, variant = 'lora', className = '' }: SectionEyebrowProps) {
  const typeClasses =
    variant === 'lora'
      ? 'font-editorial text-[clamp(18px,1.6vw,22px)] font-normal text-carely-deep italic'
      : 'text-[17px] text-carely-apricot'

  return (
    <p className={['m-0 flex items-center gap-[11px]', typeClasses, className].filter(Boolean).join(' ')}>
      <span aria-hidden="true" className="block h-[9px] w-[9px] shrink-0 rounded-full bg-carely-apricot" />
      {text}
    </p>
  )
}
