import Link from 'next/link'
import { Flame, Droplet, Volume2 } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      title: 'Termoizolații',
      description: 'Izolarea termică a pereților exteriori, indiferent de construcție, necesită o metodă de izolare fiabilă pentru economie de energie, respectiv reducerea cheltuielilor și sporirea confortului specific protecției mediului. Protejarea într-un mod corect a structurii pereților exteriori influențează în mod masiv mediul interior al clădirii.',
      icon: Flame,
      link: '/termoizolare',
      color: '#8B4513'
    },
    {
      title: 'Hidroizolații',
      description: 'Hidroizolația cu spumă poliuretanică celulă închisă este o metodă modernă pentru a asigura protecție împotriva umezelii, a infiltrațiilor apei și a acțiunilor climatice extreme. Această metodă este recomandată pentru protecția clădirilor, a construcțiilor din beton, lemn, metal sau materiale compozite, a clădirilor civile, industriale sau agricole.',
      icon: Droplet,
      link: '/hidroizolare',
      color: '#8B4513'
    },
    {
      title: 'Fonoizolații',
      description: 'Firma noastră vă pune la dispoziție aplicări de izolație cu spumă poliuretanică cu celulă deschisă, tehnologie creată special pentru reducerea zgomotului din interiorul casei. Știm cu toții că sunetele se propagă prin aer, prin structura casei, iar apoi prin pereți. Soluția de calitate o găsiți la noi!',
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
            return (
              <Link
                key={idx}
                href={service.link}
                className="group relative bg-background p-6 md:p-8 lg:p-10 transition-colors duration-300 hover:bg-[#1A1D21] flex flex-col"
              >
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
