import { BookAppointmentBadge } from './BookAppointmentBadge'

export function HeroEditorialCard() {
  return (
    <div className="hero-left flex flex-col rounded-[32px] bg-carely-deep p-[clamp(28px,3vw,52px)]">
      <p className="hero-rise mb-[22px] flex items-center gap-[10px] font-editorial text-[17px] text-carely-apricot italic">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-carely-apricot" />
        Discover The Power Of Premium
      </p>

      <h1
        id="hero-title"
        className="hero-rise hero-d1 text-pretty text-[clamp(30px,3.3vw,56px)] leading-[1.14] tracking-[-0.02em] text-carely-white"
      >
        Delivering holistic senior care that honors each{' '}
        <em className="font-editorial font-normal italic">individual&apos;s life journey</em>
      </h1>

      <div className="hero-rise hero-d2 mt-[clamp(40px,5vw,86px)] flex flex-wrap items-end justify-between gap-8">
        <p className="max-w-[560px] text-pretty text-lg leading-[1.7] text-white/[0.88]">
          At our senior care community, we understand that aging is a deeply personal journey. That&apos;s why we
          focus on a holistic, resident-centered care that nurtures the mind, body, and spirit.
        </p>
        <BookAppointmentBadge />
      </div>

      <span
        aria-hidden="true"
        className="hero-pulse mt-[26px] block h-[7px] w-[7px] rounded-full bg-carely-apricot opacity-[0.85]"
      />
    </div>
  )
}
