import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { serviceSchema } from "@/lib/schema"

const fonoizolareServiceSchema = serviceSchema(
  'Fonoizolare',
  'Servicii profesionale de fonoizolare cu spumă poliuretanică cu celulă deschisă. Reducere zgomot până la 70%. Confort acustic garantat.'
)

export const metadata: Metadata = {
  title: "Fonoizolare cu Spumă Poliuretanică Moldova | Reducere Zgomot 70% | IsoThermLux",
  description: "Fonoizolare profesională pentru apartamente, birouri și studiouri. Reducere zgomot 70%. Spumă poliuretanică cu celulă deschisă. Consultație gratuită Chișinău.",
  keywords: "fonoizolare Moldova, fonoizolare Chișinău, izolare fonică, reducere zgomot, confort acustic, spumă poliuretanică fonoizolare",
  alternates: {
    canonical: "https://isothermlux.md/fonoizolare"
  }
}

export default function FonoizolarePage() {
  return (
    <>
      <Script
        id="fonoizolare-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fonoizolareServiceSchema),
        }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-background to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Fonoizolare Profesională</h1>
                <p className="text-xl text-foreground/70 mb-8">Izolare fonică profesională pentru confort acustic maxim. Reducere zgomot până la 70% cu spumă poliuretanică de calitate premium.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent text-background px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition">
                    Solicită Ofertă Gratuită <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/calculator-oferta" className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold hover:bg-accent/5 transition">
                    Calculează Costul
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg h-96 flex items-center justify-center text-accent/30">
                <div className="text-6xl">🔇</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">De Ce Să Alegi Fonoizolare?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Reducere Zgomot 70%", description: "Eliminare efectivă a zgomotului exterior și interior. Confort acustic superior." },
                { title: "Celulă Deschisă", description: "Spumă poliuretanică cu celulă deschisă pentru absorbția optimă a sunetelor." },
                { title: "Garanție 25 Ani", description: "Garanție scrisă de 25 de ani pentru durabilitate și performance." },
                { title: "Confort Locuință", description: "Apartament liniștit și confortabil, departe de zgomotul urban." },
                { title: "Valoare Imobiliar", description: "Crește valoarea proprietății tale prin adăugarea confortului acustic." },
                { title: "Aplicare Rapidă", description: "Instalare profesională în 1-2 zile, fără disconfort prolongat." }
              ].map((benefit, idx) => (
                <div key={idx} className="p-6 border border-border rounded-lg hover:border-accent transition">
                  <div className="flex gap-3 mb-4">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                  </div>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Aplicații Fonoizolare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Apartamente", items: ["Pereți despărțitori", "Tavane", "Uși și ferestre", "Guri de aer"] },
                { title: "Birouri", items: ["Birouri private", "Săli de conferință", "Receptii", "Căi de acces"] },
                { title: "Studiouri", items: ["Camere de înregistrare", "Studiouri muzicale", "Sali de dans", "Teatre"] },
                { title: "Spații Comerciale", items: ["Restaurante", "Cafenele", "Centre fitness", "Spauri"] }
              ].map((app, idx) => (
                <div key={idx} className="bg-card p-8 rounded-lg border border-border hover:border-accent transition">
                  <h3 className="text-2xl font-bold mb-6">{app.title}</h3>
                  <ul className="space-y-3">
                    {app.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span className="text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Procesul Nostru</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultație", description: "Evaluare gratuită a spațiului tău" },
                { step: "2", title: "Ofertă", description: "Propunere personalizată și transparentă" },
                { step: "3", title: "Instalare", description: "Aplicare profesională în 1-2 zile" },
                { step: "4", title: "Garanție", description: "Suport și garanție 25 ani" }
              ].map((process, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                  <p className="text-foreground/70 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-accent to-accent/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gata Pentru Confort Acustic?</h2>
            <p className="text-lg text-white/90 mb-8">Contactează-ne astazi pentru o evaluare gratuită și ofertă personalizată. Răspuns în maxim 30 de minute.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition">
              Solicită Consultație <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
