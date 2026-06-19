import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

const serviceLinks = [
  { label: "Termoizolare", href: "/termoizolare" },
  { label: "Fațade", href: "/fatade" },
  { label: "Hidroizolare", href: "/hidroizolare" },
  { label: "Calculator Ofertă", href: "/calculator-oferta" },
  { label: "Portofoliu", href: "/portofoliu" },
]

const infoLinks = [
  { label: "Beneficii", href: "/beneficii" },
  { label: "Ghid Spumă Poliuretanică", href: "/ce-este-spuma-poliuretanica" },
  { label: "Celulă Închisă", href: "/spuma-cu-celula-inchisa" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Recenzii", href: "/recenzii" },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1D21] text-white">
      {/* Top safety stripe */}
      <div className="h-1 w-full bg-accent" />

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-flex items-center mb-6">
              <Image src="/images/logo-isotherm-lux-white.webp" alt="IsoThermLux" width={64} height={64} className="h-16 w-auto" />
            </Link>
            <p className="text-white/70 leading-relaxed max-w-sm mb-8">
              Servicii profesionale de termoizolare și hidroizolare cu spumă poliuretanică. 14 ani de experiență, 3971 proiecte finalizate, garanție 25 ani.
            </p>
            <div className="flex gap-8 border-t border-white/10 pt-6">
              <div>
                <div className="font-serif text-3xl text-accent leading-none">14</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-2">Ani experiență</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-accent leading-none">3971</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-2">Proiecte</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-accent leading-none">25</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-2">Ani garanție</div>
              </div>
            </div>
          </div>

          {/* Servicii */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs text-accent">/ 01</span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/50">Servicii</h3>
            </div>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1 text-sm text-white/80 hover:text-accent transition-colors">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatii */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs text-accent">/ 02</span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/50">Informații</h3>
            </div>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1 text-sm text-white/80 hover:text-accent transition-colors">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs text-accent">/ 03</span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/50">Contact</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="tel:+37378370243" aria-label="Sună IsoThermLux la +373 78 370 243" className="group flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <span className="flex items-center justify-center w-9 h-9 border border-white/15 group-hover:border-accent group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="text-sm">+373 78 370 243</span>
                </a>
              </li>
              <li>
                <a href="mailto:infopoliuretan@gmail.com" className="group flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <span className="flex items-center justify-center w-9 h-9 border border-white/15 group-hover:border-accent group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="text-sm break-all">infopoliuretan@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="flex items-center justify-center w-9 h-9 border border-white/15 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-sm">Chișinău, Moldova</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/50">© 2026 ISOTHERMLUX — TOATE DREPTURILE REZERVATE</p>
          <div className="flex gap-6">
            <Link href="/politica-de-confidentialitate" className="font-mono text-xs text-white/50 hover:text-accent transition-colors uppercase tracking-wide">
              Confidențialitate
            </Link>
            <Link href="/termenii-si-conditiile" className="font-mono text-xs text-white/50 hover:text-accent transition-colors uppercase tracking-wide">
              Termeni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
