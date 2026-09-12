interface TextFieldProps {
  name: string
  /** Placeholder text, reused verbatim as the visually hidden label. */
  placeholder: string
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  required?: boolean
  /** Render a `<textarea>` (min-height 190px, vertical resize) instead of an `<input>`. */
  multiline?: boolean
  /**
   * Mobile Contact's paired First/Last fields use slightly tighter padding
   * and type so their shorter placeholders don't crowd the narrower columns
   * (README "Field styling"). Only affects the non-multiline input.
   */
  dense?: boolean
  /** Extra classes on the wrapping `<label>` — used for grid column spans. */
  className?: string
}

/**
 * Contact form field. Input and textarea share every visual property except
 * height/padding, so one component covers both via `multiline`. The rest
 * border is `transparent` (not absent) so the apricot focus border adds no
 * layout shift — ReachOut.dc.html § inputs.
 */
const BASE =
  'w-full box-border rounded-[14px] border border-transparent bg-carely-white font-sans text-carely-deep outline-none focus:border-carely-apricot placeholder:text-carely-placeholder placeholder:opacity-100'

export function TextField({
  name,
  placeholder,
  type = 'text',
  autoComplete,
  required = false,
  multiline = false,
  dense = false,
  className = '',
}: TextFieldProps) {
  return (
    <label className={['block min-w-0', className].filter(Boolean).join(' ')}>
      <span className="sr-only">{placeholder}</span>
      {multiline ? (
        <textarea
          name={name}
          rows={6}
          required={required}
          placeholder={placeholder}
          className={`${BASE} text-[17px] min-h-[190px] resize-y px-[22px] py-5 leading-[1.55]`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`${BASE} h-[66px] ${dense ? 'px-[18px] text-[16.5px]' : 'px-[22px] text-[17px]'}`}
        />
      )}
    </label>
  )
}
