import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Thermometer, Droplets, Building2, Volume2, Layers, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicii Termoizolare și Hidroizolare Moldova | IsoThermLux",
  description: "Toate serviciile IsoThermLux: termoizolare, hidroizolare, fațade, fonoizolare, spumă poliuretanică. Ofertă gratuită și consultație profesională.",
  alternates: {
    canonical: "https://www.isothermlux.md/servicii"
  }
}

const services = [
  {
    title: "Termoizolare",
    description: "Izolație termică profesională cu spumă poliuretanică. Economie 40-50% la costuri de încălzire. Garanție 25 ani.",
    Icon: Thermometer,
    href: "/termoizolare",
    benefits: ["Economie 40-50%", "Garanție 25 ani", "Aplicare 1-2 zile", "Fără punți termice"]
  },
  {
    title: "Hidroizolare",
    description: "Protecție completă împotriva infiltrațiilor de apă pentru acoperișuri, fundații și subsoluri. Durabilitate 25 ani.",
    Icon: Droplets,
    href: "/hidroizolare",
    benefits: ["Impermeabilizare completă", "Rezistență temperaturi extreme", "Durabilitate 25 ani", "Aplicare profesională"]
  },
  {
    title: "Fațade",
    description: "Renovare și izolare termică a fațadelor cu spumă poliuretanică de calitate premium. Aspect modern și durabil.",
    Icon: Building2,
    href: "/fatade",
    benefits: ["Aspect modern", "Izolație termică", "Durabilitate extremă", "Design personalizat"]
  },
  {
    title: "Fonoizolare",
    description: "Izolare fonică profesională pentru apartamente, birouri și studiouri. Reducere zgomot până la 70%.",
    Icon: Volume2,
    href: "/fonoizolare",
    benefits: ["Reducere zgomot 70%", "Celulă deschisă", "Confort acustic", "Spumă poliuretanică"]
  },
  {
    title: "Spumă Poliuretanică",
    description: "Spumă poliuretanică certificată ISO 9001 de cea mai înaltă calitate. Producători mondiali de top.",
    Icon: Layers,
    href: "/ce-este-spuma-poliuretanica",
    benefits: ["Certificare ISO 9001", "Calitate mondială", "Durabilitate maximă", "Performance garantată"]
  },
  {
    title: "Consultație Gratuită",
    description: "Evaluare profesională gratuită a proprietății tale. Ofertă personalizată și fără obligații de plată.",
    Icon: MessageCircle,
    href: "/contact",
    benefits: ["Evaluare gratuită", "Ofertă fără obligații", "Consultant expert", "Răspuns în 30 min"]
  }
]

export default function ServiciiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Ce oferim</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
                Serviciile<br />Noastre
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soluții complete de izolare termică și hidroizolare pentru orice tip de proprietate. Calitate premium și garanție 25 ani.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {services.map((service, idx) => {
                const { Icon } = service
                return (
                  <Link key={idx} href={service.href}>
                    <div className="bg-background p-10 h-full group flex flex-col hover:bg-[#1A1D21] transition-colors duration-300">
                      {/* Number + Icon */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                          <Icon className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-sm text-accent font-bold">/ 0{idx + 1}</span>
                      </div>

                      {/* Title + description */}
                      <h2 className="text-xl font-serif uppercase mb-3 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground group-hover:text-white/70 text-sm leading-relaxed mb-8 flex-1 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-2 mb-8">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                            <span className="text-xs text-muted-foreground group-hover:text-white/60 tracking-wide transition-colors duration-300">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent group-hover:gap-3 transition-all duration-300">
                        Află mai mult
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-background/50 mb-6">Pas următor</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-background mb-6 leading-tight">
              Gata să transformi<br />proprietatea ta?
            </h2>
            <p className="text-lg text-background/70 mb-10">
              Contactează-ne astăzi pentru o evaluare gratuită și ofertă personalizată.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-3"
            >
              Solicită Consultație Gratuită
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
