import type { CSSProperties } from 'react'

interface ResponsiveImageProps {
  src?: string
  alt: string
  objectFit?: CSSProperties['objectFit']
  objectPosition?: CSSProperties['objectPosition']
  className?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Production stand-in for the prototype's `<image-slot>`. Real photography
 * is pending (README 6) — until `src` is supplied this renders a labeled
 * placeholder instead of fetching a stand-in image.
 */
export function ResponsiveImage({
  src,
  alt,
  objectFit = 'cover',
  objectPosition = 'center',
  className = '',
  loading = 'lazy',
}: ResponsiveImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={[
          'flex h-full w-full items-center justify-center bg-carely-ivory-alt px-4 text-center text-sm text-carely-body/60',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        Image pending
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={['h-full w-full', className].filter(Boolean).join(' ')}
      style={{ objectFit, objectPosition }}
    />
  )
}
