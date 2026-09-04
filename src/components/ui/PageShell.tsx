import type { ReactNode } from 'react'

interface PageShellProps {
  title: string
  children?: ReactNode
}

/**
 * Minimal structural shell for routes that have no approved design yet
 * (README: only the homepage has a detailed handoff). Real layouts land
 * in later phases.
 */
export function PageShell({ title, children }: PageShellProps) {
  return (
    <section aria-labelledby="page-title" className="w-full bg-carely-ivory px-[clamp(24px,4vw,60px)] py-[clamp(80px,10vw,140px)]">
      <div className="mx-auto w-full max-w-[1080px]">
        <h1 id="page-title" className="font-editorial text-4xl text-carely-deep sm:text-5xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  )
}
