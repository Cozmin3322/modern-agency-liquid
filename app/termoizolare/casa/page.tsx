import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Casă Completă | Acoperis Pereti Fundație | IsoThermLux",
  description: "Termoizolare completă a casei. Izolare acoperis, pereti exteriori și fundație. Economie 40-50% la gaz. Garanție 25 ani.",
  keywords: "termoizolare casă, izolare completă, termoizolare acoperis pereti, renovare casă",
  canonical: "https://isothermlux.md/termoizolare/casa",
}

export default function CasaPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Casa</p>
              <h1 className="text-6xl font-serif font-medium text-white mb-6">
                Termoizolare Casă Completă
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Izolează acoperisul, pereții și fundația. Confort maxim în orice sezon. Economie 40-50% la gaz.
              </p>
              <a href="tel:++37378370243" className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
                Consultație Gratuită
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Componente Izolare</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Acoperis", desc: "Izolație termică profesională a acoperișului. Protecție la vânt și ploaie." },
                { title: "Pereti Exteriori", desc: "Izolație pereți pentru confort maxim. Eliminare punți termice." },
                { title: "Fundație", desc: "Izolație termică a fundației. Spațiu în subsol confortabil și uscat." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg">
                  <Check className="w-6 h-6 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">De Ce Termoizolare Completa?</h2>
            <div className="max-w-3xl">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Confort Maxim</h3>
                    <p className="text-foreground/70">Temperatura constantă în toată casa. Fără zone reci sau calde.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">Economie 40-50%</h3>
                    <p className="text-foreground/70">Reducere semnificativă la costuri de gaz și electricitate.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">Protecție Lungă</h3>
                    <p className="text-foreground/70">Garanție 25 ani. Investiție pe termen lung.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Termoizolează Casa Completa</h2>
            <p className="text-lg mb-8 opacity-90">Consultație gratuită fără angajamente.</p>
            <a href="tel:++37378370243" className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Contactează-ne <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
