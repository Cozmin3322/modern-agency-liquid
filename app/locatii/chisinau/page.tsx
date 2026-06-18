import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "IsoThermLux Chișinău | Termoizolare Hidroizolare | Locații",
  description: "IsoThermLux Chișinău - Servicii de termoizolare și hidroizolare. Echipă locală. Consultație gratuită.",
  keywords: "termoizolare Chișinău, hidroizolare Chișinău, izolare Capitală, servicii locale",
  canonical: "https://isothermlux.md/locatii/chisinau",
}

export default function ChisinauPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-serif font-medium text-white mb-6">
                IsoThermLux Chișinău
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Servicii profesionale de termoizolare și hidroizolare în Chișinău. Echipă locală certificată.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Informații de Contact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-background border border-border rounded-lg">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Telefon</h3>
                <a href="tel:++37378370243" className="text-accent hover:underline">+373 62 040 050</a>
              </div>
              <div className="p-8 bg-background border border-border rounded-lg">
                <MapPin className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Locație</h3>
                <p className="text-foreground/70">Chișinău, Moldova</p>
              </div>
              <div className="p-8 bg-background border border-border rounded-lg">
                <Clock className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Program</h3>
                <p className="text-foreground/70">Lun-Dom: 08:00-18:00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Proiecte Recent în Chișinău</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Apartament Termoizolat", desc: "Mansardă 45m² termoizolată", date: "2024" },
                { title: "Vila Hidroizolată", desc: "Fundație și acoperis", date: "2024" },
                { title: "Birou Comercial", desc: "Izolare termică completă", date: "2023" }
              ].map((proj, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">{proj.title}</h3>
                  <p className="text-foreground/70 text-sm mb-2">{proj.desc}</p>
                  <p className="text-accent text-sm">{proj.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Vrei Consultație în Chișinău?</h2>
            <p className="text-lg mb-8 opacity-90">Contactează echipa locală. Răspuns în 30 minute.</p>
            <a href="tel:++37378370243" className="inline-flex items-center gap-2 bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Sună Acum
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
