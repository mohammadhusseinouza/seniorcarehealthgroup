import { Link } from 'react-router-dom'
import { footerLinkGroups } from '@/data/footer'

export function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-carely-deep px-[clamp(24px,4.5vw,72px)] py-[clamp(64px,7vw,100px)] text-carely-ivory">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-editorial text-2xl">Carely</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-carely-ivory/90">
            Compassionate, professional, reliable senior care tailored to every need.
          </p>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.heading}>
            <h3 className="font-editorial text-lg">{group.heading}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-carely-ivory/90 hover:text-carely-apricot">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1440px] border-t border-carely-lime/20 pt-7 text-sm text-carely-ivory/80">
        <p>Copyright © 2026 Carely. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
