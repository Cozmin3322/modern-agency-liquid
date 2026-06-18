import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-white/10 bg-[#2C3E50] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/images/logo-isotherm-lux.webp" alt="IsoThermLux" width={64} height={64} className="h-16 w-auto" />
            </Link>
            <p className="text-white leading-relaxed max-w-sm">
              Servicii profesionale de termoizolare și hidroizolare. 12 ani de experiență, 500+ proiecte finalizate. Garanție 25 ani pe toate lucrările.
            </p>
          </div>

          {/* Servicii */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white">Servicii</h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link href="/termoizolare" className="text-white/85 hover:text-white transition-colors">
                  Termoizolare
                </Link>
              </li>
              <li>
                <Link href="/fatade" className="text-white/85 hover:text-white transition-colors">
                  Fațade
                </Link>
              </li>
              <li>
                <Link href="/hidroizolare" className="text-white/85 hover:text-white transition-colors">
                  Hidroizolare
                </Link>
              </li>
              <li>
                <Link href="/calculator-oferta" className="text-white/85 hover:text-white transition-colors">
                  Calculator Ofertă
                </Link>
              </li>
              <li>
                <Link href="/portofoliu" className="text-white/85 hover:text-white transition-colors">
                  Portofoliu
                </Link>
              </li>
            </ul>
          </div>

          {/* Informatii */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white">Informatii</h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link href="/beneficii" className="text-white/85 hover:text-white transition-colors">
                  Beneficii
                </Link>
              </li>
              <li>
                <Link href="/ce-este-spuma-poliuretanica" className="text-white/85 hover:text-white transition-colors">
                  Ghid Spuma Poliuretanică
                </Link>
              </li>
              <li>
                <Link href="/spuma-cu-celula-inchisa" className="text-white/85 hover:text-white transition-colors">
                  Celulă Închisă
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-white/85 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/recenzii" className="text-white/85 hover:text-white transition-colors">
                  Recenzii
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a href="tel:+37378370243" aria-label="Sună IsoThermLux la +373 78 370 243" className="text-white/85 hover:text-white transition-colors">
                  +373 78 370 243
                </a>
              </li>
              <li>
                <a href="mailto:infopoliuretan@gmail.com" className="text-white/85 hover:text-white transition-colors">
                  infopoliuretan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-white/80">
          <p>© 2026 IsoThermLux. Toate drepturile rezervate.</p>
          <div className="flex gap-6">
            <Link href="/politica-de-confidentialitate" className="text-white/85 hover:text-white transition-colors">
              Confidențialitate
            </Link>
            <Link href="/termenii-si-conditiile" className="text-white/85 hover:text-white transition-colors">
              Termeni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
