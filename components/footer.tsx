import Link from "next/link"

const serviceLinks = [
  { label: "Termoizolare", href: "/termoizolare" },
  { label: "Hidroizolare", href: "/hidroizolare" },
  { label: "Portofoliu", href: "/portofoliu" },
]

const infoLinks = [
  { label: "Ghid Spumă Poliuretanică", href: "/ce-este-spuma-poliuretanica" },
  { label: "Celulă Închisă", href: "/spuma-cu-celula-inchisa" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Recenzii", href: "/recenzii" },
  { label: "Termeni și Condiții", href: "/termenii-si-conditiile" },
  { label: "Politica de Confidențialitate", href: "/politica-de-confidentialitate" },
]

export function Footer() {
  return (
    <footer className="bg-white text-foreground border-t border-border">
      {/* Top safety stripe */}
      <div className="h-1 w-full bg-accent" />

      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14">
        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Keyword line */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Izolație cu spumă poliuretanică · Izolație termică cu spumă · Izolație cu spumă poliuretanică cu celulă închisă · Izolație cu spumă poliuretanică cu celula deschisă · Termoizolație poduri, mansarde · Hidroizolație cu spumă poliuretanică · Izolație exterioara acoperis și pereți · Fonoizolații cu spumă poliuretanică
          </p>

          {/* Informatii */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">Informații</h3>
            <div className="h-px w-8 bg-accent mb-4" />
            <ul className="space-y-2.5">
              {[...serviceLinks, ...infoLinks].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">Contact</h3>
            <div className="h-px w-8 bg-accent mb-4" />
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href="tel:+37360811115" aria-label="Sună IsoThermLux la +373 60 811 115" className="text-sm text-foreground/80 hover:text-accent transition-colors">
                  +373 60 811 115
                </a>
              </li>
              <li>
                <a href="mailto:infopoliuretan@gmail.com" className="text-sm text-foreground/80 hover:text-accent transition-colors break-all">
                  infopoliuretan@gmail.com
                </a>
              </li>
              <li className="text-sm text-foreground/80">Chișinău, Moldova</li>
            </ul>

            {/* Social icons row */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/isothermlux" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-sm bg-[#1877F2] text-white text-sm font-semibold">f</a>
              <a href="https://www.instagram.com/isothermlux" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-sm bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white text-xs font-semibold">ig</a>
              <a href="tel:+37360811115" aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-sm bg-[#25D366] text-white text-xs font-semibold">wa</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 ISOTHERMLUX — TOATE DREPTURILE REZERVATE ·{" "}
            <a href="https://adsmoldova.md" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Website creat de Adsmoldova.md
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
