import { BookAppointmentBadge } from './BookAppointmentBadge'

export function HeroEditorialCard() {
  return (
    <div className="flex flex-col rounded-[32px] bg-carely-deep p-8 sm:p-12">
      <p className="flex items-center gap-2.5 font-editorial italic text-carely-apricot">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-carely-apricot" />
        Discover The Power Of Premium
      </p>
      <h1
        id="hero-title"
        className="mt-5 max-w-2xl text-4xl leading-[1.14] tracking-[-0.02em] text-carely-white sm:text-5xl"
      >
        Delivering holistic senior care that honors each{' '}
        <em className="font-editorial not-italic sm:italic">individual&apos;s life journey</em>
      </h1>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-8 sm:mt-16">
        <p className="max-w-[560px] text-lg leading-relaxed text-carely-white/90">
          Personalized, compassionate support that adapts to every stage of the senior care journey.
        </p>
        <BookAppointmentBadge />
      </div>
    </div>
  )
}
