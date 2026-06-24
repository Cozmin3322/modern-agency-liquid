import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ArrowRight, Check, Truck, Container, Snowflake, Ambulance, Tent } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Camioane și Vehicule de Transport | IsoThermLux Moldova",
  description: "Termoizolare profesională a camioanelor, remorcilor și vehiculelor de transport cu spumă poliuretanică cu celule închise. Ideal pentru transport alimente și produse termosensibile. Moldova.",
  keywords: "termoizolare camioane Moldova, izolare caroserie camion, spuma poliuretanica camion, termoizolare remorca frigorifica, izolare vehicule transport",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/camioane" },
  openGraph: {
    title: "Termoizolare Camioane și Vehicule | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru camioane și remorci frigorifice cu spumă poliuretanică. Garanție 25 de ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/camioane",
  },
}

export default function CamioanePage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <ServiceHero
          backgroundImage="/images/project-detaliu-izolare-01.jpg"
          title="Termoizolare Camioane"
          titleAccent="și Vehicule de Transport"
          subtitle="Izolăm caroseria camionului sau remorcii tale cu spumă poliuretanică cu celule închise — ușoară, impermeabilă și durabilă."
          ctaSecondaryHref="/contact"
          ctaSecondaryLabel="Cere Ofertă"
        />

        <nav className="text-sm text-foreground/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="hover:text-accent transition">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/termoizolare" className="hover:text-accent transition">Termoizolare</Link>
          <span className="mx-2">/</span>
          <span>Camioane</span>
        </nav>

        {/* Beneficii cheie */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">De Ce Spumă Poliuretanică pentru Camioane?</h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Caroseria metalică a unui camion fără izolație devine un cuptor vara și un frigider iarna. Spuma poliuretanică cu <strong>celule închise</strong> rezolvă ambele probleme permanent — cu o greutate minimă adăugată vehiculului.
                </p>
                <ul className="space-y-4">
                  {[
                    "Greutate minimă — 1–3 kg/m² față de 8–15 kg/m² la alternativele clasice",
                    "Impermeabilă la apă și vapori — fără condens și mucegai",
                    "Aderă perfect pe metal, aluminiu, fibră de sticlă",
                    "Nu vibrează, nu face zgomot în mers",
                    "Menține temperatura mărfii cu până la 8 ore mai mult",
                    "Poate fi acoperită cu orice finisaj interior",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-none border border-border">
                <h3 className="text-xl font-semibold mb-6 text-center">Specificații Tehnice</h3>
                <div className="space-y-4">
                  {[
                    { label: "Tip spumă", value: "Celule Închise (Closed Cell)" },
                    { label: "Conductivitate termică", value: "λ = 0.020–0.024 W/m·K" },
                    { label: "Densitate", value: "35–45 kg/m³" },
                    { label: "Absorbție apă", value: "< 2% din volum" },
                    { label: "Grosime recomandată", value: "30–80 mm" },
                    { label: "Durată aplicare", value: "1–2 zile / camion" },
                    { label: "Garanție", value: "25 de ani scrisă" },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-foreground/60 text-sm">{spec.label}</span>
                      <span className="font-medium text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipuri vehicule */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4 text-center">Ce Vehicule Termoizolăm</h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
              Lucrăm cu orice tip de vehicul de transport, de la dube mici la semiremorci frigorifice.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  Icon: Truck,
                  title: "Dube și Furgonete",
                  desc: "Izolăm pereții, plafonul și podeaua dubelor. Ideal pentru livrare produse alimentare, farmaceutice sau flori.",
                },
                {
                  Icon: Container,
                  title: "Camioane cu Izotermă",
                  desc: "Refacere sau realizare izolație pentru caroseriile izoterme. Temperaturi controlate +5°C până la +25°C.",
                },
                {
                  Icon: Truck,
                  title: "Semiremorci",
                  desc: "Izolație completă pentru semiremorci de mare tonaj. Suprafețe mari tratate rapid cu echipament profesional.",
                },
                {
                  Icon: Snowflake,
                  title: "Remorci Frigorifice",
                  desc: "Repararea sau înlocuirea izolației la remorcile frigorifice. Reducem consumul agregatului frigorific.",
                },
                {
                  Icon: Ambulance,
                  title: "Vehicule Speciale",
                  desc: "Ambulanțe, laboratoare mobile, unități de comandă. Izolație termică și fonică personalizată.",
                },
                {
                  Icon: Tent,
                  title: "Autorulote și Caravane",
                  desc: "Termoizolare completă pentru caravane și autorulote. Confort pe tot parcursul anului, oriunde te-ai afla.",
                },
              ].map((type, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-none hover:border-accent transition">
                  <type.Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparatie */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Spumă vs. Alte Soluții de Izolație</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-none overflow-hidden border border-border">
                <thead>
                  <tr className="bg-accent/10">
                    <th className="p-4 text-left font-semibold">Criteriu</th>
                    <th className="p-4 text-center font-semibold text-accent">Spumă Poliuretanică</th>
                    <th className="p-4 text-center font-semibold text-foreground/60">Vată Minerală</th>
                    <th className="p-4 text-center font-semibold text-foreground/60">Panouri Polistiren</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Conductivitate termică", "0.022 W/m·K", "0.035 W/m·K", "0.033 W/m·K"],
                    ["Absorbție apă", "< 2%", "Ridicată", "Medie"],
                    ["Greutate", "1–3 kg/m²", "8–15 kg/m²", "5–10 kg/m²"],
                    ["Punți termice", "Zero", "Posibile", "Posibile"],
                    ["Durată aplicare", "1–2 zile", "3–5 zile", "3–5 zile"],
                    ["Durabilitate", "25+ ani", "10–15 de ani", "15–20 de ani"],
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-border">
                      <td className="p-4 font-medium text-sm">{row[0]}</td>
                      <td className="p-4 text-center text-sm text-accent font-medium">{row[1]}</td>
                      <td className="p-4 text-center text-sm text-foreground/60">{row[2]}</td>
                      <td className="p-4 text-center text-sm text-foreground/60">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Termoizolăm Camionul Tău Rapid</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Deplasare la locul tău. Lucrare în 1–2 zile. Reintri pe drum rapid.
            </p>
            <a href="tel:+37360811115" className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
              Sună Acum: +373 60 811 115 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
