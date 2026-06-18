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
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="bg-white border-t-4 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                style={{ borderTopColor: service.color }}
              >
                <div className="flex items-start mb-6">
                  <Icon 
                    className="w-12 h-12 flex-shrink-0" 
                    style={{ color: service.color }}
                    strokeWidth={1.5}
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-sans" style={{ color: '#1A1A1A' }}>
                  {service.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: service.color }}
                >
                  Detalii
                  <span>→</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
