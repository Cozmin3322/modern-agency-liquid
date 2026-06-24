import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"

const mansardaBreadcrumb = breadcrumbSchema([
  { name: 'IsoThermLux', url: 'https://www.isothermlux.md' },
  { name: 'Termoizolare', url: 'https://www.isothermlux.md/termoizolare' },
  { name: 'Mansardă', url: 'https://www.isothermlux.md/termoizolare/mansarda' }
])

export const metadata: Metadata = {
  title: "Termoizolare Mansardă | Spațiu Locuibil Cald | IsoThermLux Moldova",
  description: "Termoizolare profesională a mansardelor. Izolație termică pentru spații locuite. Economie 40-50% la gaz. Consultație gratuită.",
  keywords: "termoizolare mansardă, izolare mansarda, spațiu locuibil, izolație termică acoperis",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/mansarda" },
}

export default function MansardaPage() {
  return (
    <>
      <Script
        id="mansarda-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mansardaBreadcrumb),
        }}
      />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Mansardă</p>
              <h1 className="text-6xl font-serif font-medium text-white mb-6">
                Termoizolare Mansardă Profesională
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Transformă mansarda în spațiu cald și confortabil. Izolație termică de înaltă calitate cu economia confirmată de 40-50%.
              </p>
              <div className="flex gap-4">
                <a href="tel:+37360811115" className="bg-accent text-white px-8 py-3 rounded-none font-semibold hover:bg-accent/90 transition">
                  Consultație Gratuită
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Beneficii Termoizolare Mansardă</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Spațiu Locuibil Cald", desc: "Mansarda devine spațiu confortabil și locuibil în toate anotimpurile." },
                { title: "Economie 40-50% la Gaz", desc: "Reducere semnificativă la costurile de încălzire. ROI în 2-3 ani." },
                { title: "Confort Termic", desc: "Temperatura constantă și agradabilă. Fără punți termice." },
                { title: "Protecție Acustică", desc: "Izolație fonică excelentă. Spațiu liniștit și confortabil." },
                { title: "Durabilitate", desc: "Materiale premium cu garanție de 25 de ani. Durabilitate dovedită." },
                { title: "Aplicare Rapidă", desc: "Lucru finalizat în 2-3 zile. Disconfort minim pentru familie." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-border rounded-none">
                  <Check className="w-6 h-6 text-accent mb-4" />
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Cum Lucrăm</h2>
            <div className="max-w-3xl">
              {[
                { step: "1", title: "Evaluare", desc: "Analiză completă a mansardei. Identificare probleme termice. Recomandări." },
                { step: "2", title: "Plan de Lucru", desc: "Strategie de izolare personalizată. Estimare preț exactă." },
                { step: "3", title: "Preparare", desc: "Protejarea mobilierului și obiectelor. Pregătire suprafețe." },
                { step: "4", title: "Izolare", desc: "Aplicare profesională a izolației. Controlul calității constant." },
                { step: "5", title: "Finalizare", desc: "Finisaj profesional. Curățenie completă." },
                { step: "6", title: "Garanție", desc: "Garanție scrisă de 25 de ani. Suport permanent." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Proiecte Mansardă</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Mansardă Chișinău 2024", location: "Chișinău", size: "45m²" },
                { title: "Mansardă Orhei 2024", location: "Orhei", size: "38m²" },
                { title: "Mansardă Familială", location: "Bălți", size: "52m²" }
              ].map((proj, idx) => (
                <div key={idx} className="p-8 bg-background border border-border rounded-none">
                  <h3 className="font-semibold mb-3">{proj.title}</h3>
                  <p className="text-sm text-foreground/70">Locație: {proj.location}</p>
                  <p className="text-sm text-foreground/70">Suprafață: {proj.size}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/portofoliu?tip=termoizolare&categorie=mansarda" className="inline-flex items-center gap-2 text-accent hover:underline">
                Vezi toate proiectele <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Întrebări Frecvente</h2>
            <div className="space-y-6">
              {[
                { q: "Cât costă termoizolarea mansardei?", a: "Costul depinde de suprafață și complexitate. După evaluare pe loc, oferim estimare exactă. În medie 200-400 EUR/m²." },
                { q: "Cât timp durează?", a: "Mansarda standard se izolează în 2-3 zile. Timpul exact depinde de suprafață și accesibilitate." },
                { q: "Pot folosi mansarda imediat după lucrare?", a: "Da. După finalizare (24h), mansarda este gata de utilizare." }
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-foreground/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Termoizolează Mansarda Acum</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Consultație gratuită. Estimare pe loc. Răspuns în 30 minute.
            </p>
            <a href="tel:+37360811115" className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
              Sună Acum <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
