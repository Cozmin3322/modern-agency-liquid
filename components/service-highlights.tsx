import { Thermometer, Droplets, VolumeX } from 'lucide-react'

const items = [
  {
    icon: Thermometer,
    title: 'Termoizolații',
    description:
      'Izolarea termică a pereților exteriori, indiferent de construcție, înseamnă economie de energie, respectiv reducerea cheltuielilor și sporirea contribuției specifice protecției mediului. Protecția într-un mod corect a structurii pereților exteriori influențează în mod masiv mediul interior al clădirii.',
  },
  {
    icon: Droplets,
    title: 'Hidroizolații',
    description:
      'Hidroizolația cu spumă poliuretanică celulă închisă este o metodă modernă pentru a asigura protecție împotriva umezelii, a infiltrațiilor apei și a acțiunilor climatice extreme. Această metodă este recomandată pentru protecția clădirilor, a construcțiilor din beton, lemn, metal sau materiale compozite, a clădirilor civile, industriale sau agricole.',
  },
  {
    icon: VolumeX,
    title: 'Fonoizolații',
    description:
      'Firma noastră vă pune la dispoziție aplicații de izolație cu izolant cu spumă poliuretanică cu celulă deschisă, tehnologie creată special pentru oamenii ce locuiesc cu zgomotul în interiorul casei. Știm cu toții că sunetele se propagă prin aer și prin structura caselor, iar mai apoi prin pereți. Soluția de calitate o găsiți la noi!',
  },
]

export function ServiceHighlights() {
  return (
    <section className="bg-[#F4EFE7] pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white rounded-sm shadow-md border-t-4 border-accent p-8">
              <Icon className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
