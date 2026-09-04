const VALUES = [
  'Family-Like Bonds, Not Just Staff and Residents',
  'Comfort That Never Compromises on Dignity',
  'Every Detail Designed with Seniors in Mind',
]

/** Static for now — the seamless duplicated-track marquee animation lands with the Hero visual pass. */
export function HeroValueMarquee() {
  return (
    <div className="overflow-hidden rounded-[26px] bg-carely-marquee px-6 py-5 sm:px-9">
      <ul className="flex flex-wrap gap-8 sm:flex-nowrap">
        {VALUES.map((value) => (
          <li key={value} className="flex items-center gap-4 text-carely-black">
            <span aria-hidden="true" className="h-[50px] w-[50px] shrink-0 rounded-full bg-carely-apricot" />
            <span className="text-base font-medium">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
