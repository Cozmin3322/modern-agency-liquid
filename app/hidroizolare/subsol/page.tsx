import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Hidroizolare Subsol | Spațiu Uscat și Locuibil | IsoThermLux",
  description: "Hidroizolare profesională a subsolului. Protecție umiditate. Spațiu uscat și locuibil.",
  keywords: "hidroizolare subsol, protecție subsol, umiditate subsol, spațiu locuibil",
  alternates: { canonical: "https://www.isothermlux.md/hidroizolare/subsol" },
}

export default function SubsolPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Hidroizolare Subsol</p>
              <h1 className="text-6xl font-serif font-medium text-white mb-6">
                Subsol Uscat și Confortabil
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Hidroizolare completă a subsolului. Eliminare umidității. Spațiu util și locuibil.
              </p>
              <a href="tel:+37378370243" className="inline-block bg-accent text-white px-8 py-3 rounded-none font-semibold hover:bg-accent/90 transition">
                Consultație Gratuită
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Transformă Subsolul</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Eliminare Umiditate", desc: "Protecție pereți și podea. Subsol uscat și sănătos." },
                { title: "Spațiu Util", desc: "Subsol utilizabil pentru depozit, atelier, sau spațiu locabil." },
                { title: "Protecție Structurii", desc: "Prevenirea daunelor la pereți și fundație cauzate de apă." },
                { title: "Investiție în Valoare", desc: "Mărirea valorii proprietății. Spațiu extra locuibil." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-border rounded-none">
                  <Check className="w-6 h-6 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Hidroizolează Subsolul</h2>
            <p className="text-lg mb-8 opacity-90">Transformă subsolul în spațiu util și confortabil.</p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
              Contactează-ne <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
