import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "IsoThermLux Bălți | Termoizolare Hidroizolare | Servicii Locale",
  description: "IsoThermLux Bălți - Servicii profesionale de termoizolare și hidroizolare. Echipă certificată.",
  keywords: "termoizolare Bălți, hidroizolare Bălți, izolare nord, servicii locale",
  alternates: { canonical: "https://www.isothermlux.md/locatii/balti" },
}

export default function BaltiPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-serif font-medium text-white mb-6">
                IsoThermLux Bălți
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Servicii profesionale de termoizolare și hidroizolare în Bălți. Echipă certificată și experimentată.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Informații de Contact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-background border border-border rounded-none">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Telefon</h3>
                <a href="tel:+37360811115" className="text-accent hover:underline">+373 60 811 115</a>
              </div>
              <div className="p-8 bg-background border border-border rounded-none">
                <MapPin className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Locație</h3>
                <p className="text-foreground/70">Bălți, Moldova</p>
              </div>
              <div className="p-8 bg-background border border-border rounded-none">
                <Clock className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Program</h3>
                <p className="text-foreground/70">Lun-Dom: 08:00-18:00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Proiecte Recent în Bălți</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Casa Familială", desc: "Termoizolare completă", date: "2024" },
                { title: "Hidroizolare Acoperiș", desc: "Impermeabilizare profesională", date: "2024" },
                { title: "Vila Rezidențială", desc: "Izolare termică și umiditate", date: "2023" }
              ].map((proj, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-none">
                  <h3 className="font-semibold mb-2">{proj.title}</h3>
                  <p className="text-foreground/70 text-sm mb-2">{proj.desc}</p>
                  <p className="text-accent text-sm">{proj.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Vrei Consultație în Bălți?</h2>
            <p className="text-lg mb-8 opacity-90">Echipa locală IsoThermLux. Evaluare pe loc în 24 ore.</p>
            <a href="tel:+37360811115" className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
              Sună Acum
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
