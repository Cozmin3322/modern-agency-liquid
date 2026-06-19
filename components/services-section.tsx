import Link from 'next/link'
import { Flame, Droplet, Volume2 } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      title: 'Termoizolatii',
      description: 'Izolarea termică a pereților exteriori, indiferent de construcție, necesită o metodă de izolare fiabilă pentru economie de energie, respectiv reducerea cheltuielilor și sporirea confortului specific protecției mediului. Protectarea într-un mod corect a structurii pereților exteriori influențează în mod masiv mediul interior al clădirii.',
      icon: Flame,
      link: '/termoizolare',
      color: '#8B4513'
    },
    {
      title: 'Hidroizolatii',
      description: 'Hidroizolația cu poliuree este o metodă modernă pentru a asigura protecția imperativă umezelii, a infiltrațiilor apei și a acțiunilor climatice externe. Aceasta metoda este recomandată pentru protecția clădirilor, a construcțiilor din beton, lemn, metal sau materiale composite, a clădirilor civile, industriale sau agricole.',
      icon: Droplet,
      link: '/hidroizolare',
      color: '#8B4513'
    },
    {
      title: 'Fonoizolatii',
      description: 'Firma noastră vă pune la dispoziție aplicări de izoliție cu spumă poliuretanică cu celula deschisă, tehnologie creată special pentru reducerea zgomotului, rezistit în interiorului casei. Stim cu toți ca sunetele se propaga prin aer, prin structura casei, iar apoi apui pertii. Soluțiunea de calitate o gasiti la noi!',
      icon: Volume2,
      link: '/fonoizolare',
      color: '#8B4513'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {services.map((service, idx) => {
            const Icon = service.icon
            const num = String(idx + 1).padStart(2, '0')
            return (
              <Link
                key={idx}
                href={service.link}
                className="group relative bg-background p-6 md:p-8 lg:p-10 transition-colors duration-300 hover:bg-[#1A1D21] flex flex-col"
              >
                {/* Number + top accent line */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm text-accent font-bold">/ {num}</span>
                  <span className="h-px w-12 bg-border group-hover:bg-accent transition-colors" />
                </div>

                <Icon
                  className="w-12 h-12 flex-shrink-0 mb-6 text-accent"
                  strokeWidth={1.5}
                />

                <h3 className="font-serif text-2xl uppercase mb-4 text-foreground group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-foreground/70 group-hover:text-white/70 leading-relaxed mb-8 text-sm transition-colors flex-1">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                  Detalii
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
