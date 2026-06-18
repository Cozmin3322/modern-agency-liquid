import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicii Termoizolare și Hidroizolare Moldova | IsoThermLux",
  description: "Toate serviciile IsoThermLux: termoizolare, hidroizolare, fațade, fonoizolare, spumă poliuretanică. Ofertă gratuită și consultație profesională.",
  alternates: {
    canonical: "https://isothermlux.md/servicii"
  }
}

const services = [
  {
    title: "Termoizolare",
    description: "Izolație termică profesională cu spumă poliuretanică. Economie 40-50% la costuri de încălzire. Garanție 25 ani.",
    icon: "🏠",
    href: "/termoizolare",
    benefits: ["Economie 40-50%", "Garanție 25 ani", "Aplicare 1-2 zile", "Fără punți termice"]
  },
  {
    title: "Hidroizolare",
    description: "Protecție completă împotriva infiltrațiilor de apă pentru acoperișuri, fundații și subsoluri. Durabilitate 25 ani.",
    icon: "💧",
    href: "/hidroizolare",
    benefits: ["Impermeabilizare completă", "Rezistență temperaturi extreme", "Durabilitate 25 ani", "Aplicare profesională"]
  },
  {
    title: "Fațade",
    description: "Renovare și izolare termică a fațadelor cu spumă poliuretanică de calitate premium. Aspect modern și durabil.",
    icon: "🏢",
    href: "/fatade",
    benefits: ["Aspect modern", "Izolație termică", "Durabilitate extremă", "Design personalizat"]
  },
  {
    title: "Fonoizolare",
    description: "Izolare fonică profesională pentru apartamente, birouri și studiouri. Reducere zgomot până la 70%.",
    icon: "🔇",
    href: "/fonoizolare",
    benefits: ["Reducere zgomot 70%", "Celulă deschisă", "Confort acustic", "Spumă poliuretanică"]
  },
  {
    title: "Spumă Poliuretanică",
    description: "Spumă poliuretanică certificată ISO 9001 de cea mai înaltă calitate. Producători mondiali de top.",
    icon: "🧊",
    href: "/ce-este-spuma-poliuretanica",
    benefits: ["Certificare ISO 9001", "Calitate mondială", "Durabilitate maximă", "Performance garantată"]
  },
  {
    title: "Consultație Gratuită",
    description: "Evaluare profesională gratuită a proprietății tale. Ofertă personalizată și fără obligații de plată.",
    icon: "💬",
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
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Serviciile Noastre</h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Soluții complete de izolare termică și hidroizolare pentru orice tip de proprietate. Calitate premium și garanție 25 ani.</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Link key={idx} href={service.href}>
                  <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all h-full group cursor-pointer shadow-sm hover:shadow-lg">
                    <div className="p-8">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">{service.title}</h3>
                      <p className="text-foreground/70 mb-6">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span className="text-sm text-foreground/70">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition">
                        Citește mai mult <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-accent to-accent/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gata să transformi proprietatea ta?</h2>
            <p className="text-lg text-white/90 mb-8">Contactează-ne astazi pentru o evaluare gratuită și ofertă personalizată.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition">
              Solicită Consultație Gratuită <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
