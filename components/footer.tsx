import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
     <footer className="py-16 md:py-24 border-t border-border bg-foreground text-white [&_*]:!text-white [&_a]:!text-white [&_a:hover]:!text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/images/logo-isotherm-lux.png" alt="IsoThermLux" width={200} height={96} className="h-16 w-auto" />
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
                <Link href="/termoizolare" className="hover:text-secondary-foreground transition-colors">
                  Termoizolare
                </Link>
              </li>
              <li>
                <Link href="/fatade" className="hover:text-foreground transition-colors">
                  Fațade
                </Link>
              </li>
              <li>
                <Link href="/hidroizolare" className="hover:text-foreground transition-colors">
                  Hidroizolare
                </Link>
              </li>
              <li>
                <Link href="/calculator-oferta" className="hover:text-foreground transition-colors">
                  Calculator Ofertă
                </Link>
              </li>
              <li>
                <Link href="/portofoliu" className="hover:text-foreground transition-colors">
                  Portofoliu
                </Link>
              </li>
            </ul>
          </div>

          {/* Informatii */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-secondary-foreground">Informatii</h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link href="/beneficii" className="hover:text-secondary-foreground transition-colors">
                  Beneficii
                </Link>
              </li>
              <li>
                <Link href="/ce-este-spuma-poliuretanica" className="hover:text-foreground transition-colors">
                  Ghid Spuma Poliuretanică
                </Link>
              </li>
              <li>
                <Link href="/spuma-cu-celula-inchisa" className="hover:text-foreground transition-colors">
                  Celulă Închisă
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="hover:text-foreground transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/recenzii" className="hover:text-foreground transition-colors">
                  Recenzii
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-secondary-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a href="tel:+37378370243" className="hover:text-secondary-foreground transition-colors">
                  +37378370243
                </a>
              </li>
              <li>
                <a href="mailto:infopoliuretan@gmail.com" className="hover:text-foreground transition-colors">
                  infopoliuretan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-white">
          <p>© 2025 IsoThermLux. Toți drepturii rezervați.</p>
          <div className="flex gap-6">
            <Link href="/politica-de-confidentialitate" className="hover:text-secondary-foreground transition-colors text-white">
              Confidențialitate
            </Link>
            <Link href="/termenii-si-conditiile" className="hover:text-foreground transition-colors text-white">
              Termeni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
