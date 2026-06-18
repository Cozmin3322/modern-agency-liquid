import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Hidroizolare Acoperis | Impermeabilizare Ploaie | IsoThermLux",
  description: "Hidroizolare profesională a acoperișului. Impermeabilizare completă. Protecție la ploaie și ninsoare.",
  keywords: "hidroizolare acoperis, impermeabilizare, protecție ploaie, acoperis etanș",
  canonical: "https://isothermlux.md/hidroizolare/acoperis",
}

export default function AcoperisPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Hidroizolare Acoperis</p>
              <h1 className="text-6xl font-serif font-medium text-white mb-6">
                Impermeabilizare Acoperis
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Protecție completă a acoperișului la ploaie și infiltrații. Materiale premium cu garanție 25 ani.
              </p>
              <a href="tel:++37378370243" className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
                Consultație Gratuită
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Beneficii Hidroizolare Acoperis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Etanșeitate Completa", desc: "Protecție 100% la ploaie și infiltrații. Acoperis sigur." },
                { title: "Durabilitate 20+ Ani", desc: "Materiale rezistente la vânt și temperaturi extreme." },
                { title: "Protecție Structurii", desc: "Prevenirea daunelor cauzate de apă. Protecție pereți și interior." },
                { title: "Garanție 25 Ani", desc: "Garanție scrisă material și manopera. Investiție pe termen lung." }
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

        <section className="py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Impermeabilizează Acoperisul</h2>
            <p className="text-lg mb-8 opacity-90">Protecție de calitate. Consultație pe loc.</p>
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
