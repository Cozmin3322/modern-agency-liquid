import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Servicii Termoizolare și Hidroizolare Moldova | IsoThermLux",
  description: "Toate serviciile IsoThermLux: termoizolare, hidroizolare, fonoizolare cu spumă poliuretanică. Ofertă gratuită și consultație profesională.",
  alternates: {
    canonical: "https://www.isothermlux.md/servicii"
  }
}

const services = [
  {
    href: "/termoizolare",
    image: "/images/gallery/termo-03.webp",
    title: "Termoizolatii",
    blocks: [
      { label: "Aplicare spuma celula deschisa", text: "Este o spuma cu densitate scazuta, in general de 8 kg/m3, cu o performanta termica asemanatoare cu cea a materialelor clasice. Spuma cu celula deschisa mai este si spuma flexibila." },
      { label: "Aplicare spuma celula inchisa", text: "Spuma cu celula inchisa este o spuma dura, rigida, cu densitate de 30-40 kg/m3. Datorita duritatii sale, aceasta spuma mai este denumita si spuma rigida." },
    ],
  },
  {
    href: "/hidroizolare",
    image: "/images/gallery/hidro-05.webp",
    title: "Hidroizolatii",
    blocks: [
      { label: "Aplicare spumă poliuretanică celulă închisă", text: "Spuma poliuretanică celulă închisă este o spumă rigidă, impermeabilă, care formează un strat continuu fără rosturi. La noi gasesti cele mai bune servicii de calitate." },
    ],
  },
  {
    href: "/fonoizolare",
    image: "/images/gallery/fono-07.webp",
    title: "Fonoizolatii",
    blocks: [
      { label: "Aplicare spuma celula deschisa", text: "Este o spuma cu densitate scazuta, in general de 8 kg/m3, cu o performanta termica asemanatoare cu cea a materialelor clasice. Spuma cu celula deschisa mai este si spuma flexibila." },
      { label: "Aplicare spuma celula inchisa", text: "Spuma cu celula inchisa este o spuma dura, rigida, cu densitate de 30-40 kg/m3. Datorita duritatii sale, aceasta spuma mai este denumita si spuma rigida." },
    ],
  },
]

export default function ServiciiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-card text-center border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl font-serif font-medium leading-tight">
              Servicii Profesionale Izolatii cu Spuma Poliuretanica in Moldova
            </h1>
          </div>
        </section>

        {/* Services rows */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {services.map((service) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-10 items-center">
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">{service.title}</h2>
                  <div className="space-y-5 mb-6">
                    {service.blocks.map((block) => (
                      <div key={block.label}>
                        <p className="font-semibold uppercase text-sm mb-1">{block.label}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center border border-accent text-accent px-8 py-3 text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
                  >
                    Mai multe...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keywords paragraph */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Izolație cu spumă poliuretanică • Izolație termică cu spumă • Izolație cu spumă poliuretanică cu celulă închisă •
              Izolație cu spumă poliuretanică cu celulă deschisă • Termoizolație poduri, mansarde, izolație terase •
              Izolație hale industriale • Hidroizolație cu spumă poliuretanică, izolație acoperișuri, terase, fundații, subsol •
              Izolație exterioară acoperiș și pereți • Fonoizolații cu spumă poliuretanică • Ignifugare lemn.
            </p>
          </div>
        </section>

        {/* Contact form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  )
}
