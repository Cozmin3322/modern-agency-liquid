import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Volume2, Shield, Clock, TrendingUp, Home, Building, Music, Coffee } from "lucide-react"
import { serviceSchema } from "@/lib/schema"

const fonoizolareServiceSchema = serviceSchema(
  'Fonoizolare',
  'Servicii profesionale de fonoizolare cu spumă poliuretanică cu celulă deschisă. Reducere zgomot până la 70%. Confort acustic garantat.'
)

export const metadata: Metadata = {
  title: "Fonoizolare cu Spumă Poliuretanică Moldova | Reducere Zgomot 70% | IsoThermLux",
  description: "Fonoizolare profesională pentru apartamente, birouri și studiouri. Reducere zgomot 70%. Spumă poliuretanică cu celulă deschisă. Consultație gratuită Chișinău.",
  keywords: "fonoizolare Moldova, fonoizolare Chișinău, izolare fonică, reducere zgomot, confort acustic, spumă poliuretanică fonoizolare",
  alternates: { canonical: "https://www.isothermlux.md/fonoizolare" }
}

const benefits = [
  { Icon: Volume2, title: "Reducere Zgomot 70%", description: "Eliminare efectivă a zgomotului exterior și interior cu spumă cu celulă deschisă." },
  { Icon: Shield, title: "Garanție 25 Ani", description: "Garanție scrisă de 25 de ani pentru durabilitate și performanță acustică." },
  { Icon: Clock, title: "Aplicare 1-2 Zile", description: "Instalare profesională rapidă, fără disconfort prelungit pentru locatari." },
  { Icon: TrendingUp, title: "Valoare Imobiliară", description: "Crește valoarea proprietății prin adăugarea confortului acustic premium." },
]

const applications = [
  { Icon: Home, title: "Apartamente", items: ["Pereți despărțitori", "Tavane între etaje", "Uși și ferestre", "Guri de ventilație"] },
  { Icon: Building, title: "Birouri", items: ["Birouri private", "Săli de conferință", "Recepții", "Căi de acces"] },
  { Icon: Music, title: "Studiouri", items: ["Camere de înregistrare", "Studiouri muzicale", "Săli de dans", "Teatre"] },
  { Icon: Coffee, title: "Spații Comerciale", items: ["Restaurante", "Cafenele", "Centre fitness", "Spa-uri"] },
]

const steps = [
  { nr: "01", title: "Consultație", description: "Evaluare gratuită și analiză acustică a spațiului." },
  { nr: "02", title: "Ofertă", description: "Propunere personalizată și transparentă, fără surprize." },
  { nr: "03", title: "Instalare", description: "Aplicare profesională în 1-2 zile lucrătoare." },
  { nr: "04", title: "Garanție", description: "Suport post-instalare și garanție scrisă 25 ani." },
]

export default function FonoizolarePage() {
  return (
    <>
      <Script id="fonoizolare-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fonoizolareServiceSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-24 md:py-36 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Servicii IsoThermLux</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
                Fonoizolare<br />Profesională
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Izolare fonică cu spumă poliuretanică cu celulă deschisă. Reducere zgomot până la 70% pentru apartamente, birouri și studiouri.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-3">
                  Solicită Ofertă Gratuită <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/calculator-oferta" className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-full font-medium hover:border-accent hover:text-accent transition-all duration-300">
                  Calculează Costul
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">De ce fonoizolare</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Beneficii concrete, rezultate măsurabile</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {benefits.map(({ Icon, title, description }) => (
                <div key={title} className="bg-background p-8 group hover:bg-card transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-serif font-medium mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Unde aplicăm</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Aplicații fonoizolare</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map(({ Icon, title, items }) => (
                <div key={title}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    <h3 className="font-serif font-medium text-lg">{title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 border-t border-border bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Cum lucrăm</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Procesul nostru în 4 pași</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map(({ nr, title, description }) => (
                <div key={nr}>
                  <p className="text-5xl font-serif text-muted-foreground/20 mb-4">{nr}</p>
                  <h3 className="font-serif font-medium text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-background/50 mb-6">Pas următor</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-background mb-6 leading-tight">
              Gata pentru<br />confort acustic?
            </h2>
            <p className="text-lg text-background/70 mb-10">
              Contactează-ne pentru o evaluare gratuită. Răspuns în maxim 30 de minute.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-3">
              Solicită Consultație Gratuită <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
