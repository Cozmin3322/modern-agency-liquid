import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ArrowRight, Check, Snowflake, Package, Home, Wrench, Wheat, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Containere | Containere Frigorifice și Depozitare | IsoThermLux",
  description: "Termoizolare profesională a containerelor cu spumă poliuretanică. Containere frigorifice, de depozitare și locuibile. Izolație termică optimă. Chișinău, Moldova.",
  keywords: "termoizolare containere Moldova, izolare container frigorific, spuma poliuretanica container, termoizolare container locuit, izolare containere depozitare",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/containere" },
  openGraph: {
    title: "Termoizolare Containere | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru containere de toate tipurile cu spumă poliuretanică. Garanție 25 de ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/containere",
  },
}

export default function ContainerePage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <ServiceHero
          backgroundImage="/images/project-rezultat-final-01.webp"
          title="Termoizolare Containere"
          titleAccent="Profesională"
          subtitle="Transformăm containerele reci și incomode în spații termice eficiente. Spumă poliuretanică aplicată pe toată suprafața interioară sau exterioară."
          ctaSecondaryHref="/contact"
          ctaSecondaryLabel="Cere Ofertă"
        />

        <nav className="text-sm text-foreground/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="hover:text-accent transition">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/termoizolare" className="hover:text-accent transition">Termoizolare</Link>
          <span className="mx-2">/</span>
          <span>Containere</span>
        </nav>

        {/* Doua tipuri spuma */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4 text-center">Alegem Tipul de Spumă Potrivit</h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
              Folosim exclusiv spumă poliuretanică — în două variante, alese în funcție de scopul containerului.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background border-2 border-accent rounded-none">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded text-sm font-semibold mb-4">Recomandat pentru depozitare și frig</div>
                <h3 className="text-2xl font-semibold mb-4">Spumă cu Celule Închise</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Ideală pentru containere frigorifice sau de depozitare. Impermeabilă la apă și vapori, cu cea mai bună conductivitate termică. Menține temperatura controlată pe termen lung.
                </p>
                <ul className="space-y-3">
                  {[
                    "Impermeabilă 100% la apă și vapori",
                    "λ = 0.020–0.024 W/m·K",
                    "Densitate 35–45 kg/m³",
                    "Rezistentă mecanic la presiune",
                    "Ideală pentru frig și congelat"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-background border-2 border-border rounded-none">
                <div className="inline-block bg-foreground/10 text-foreground px-3 py-1 rounded text-sm font-semibold mb-4">Recomandat pentru spații locuibile</div>
                <h3 className="text-2xl font-semibold mb-4">Spumă cu Celule Deschise</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Ideală pentru containere transformate în birouri, ateliere sau locuințe. Mai flexibilă și mai ușoară, oferă izolație fonică excelentă și un confort termic ridicat la prețuri accesibile.
                </p>
                <ul className="space-y-3">
                  {[
                    "Izolație fonică superioară",
                    "λ = 0.035–0.040 W/m·K",
                    "Densitate 7–12 kg/m³",
                    "Flexibilă, nu fisurează",
                    "Ideală pentru spații locuite"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tipuri containere */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Ce Tipuri de Containere Izolăm</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: Snowflake,
                  title: "Containere Frigorifice",
                  desc: "Refacerea sau completarea izolației termice la containerele frigorifice uzate. Temperatură controlată 0°C până la -25°C.",
                },
                {
                  Icon: Package,
                  title: "Containere de Depozitare",
                  desc: "Containere standard 20ft sau 40ft transformate în depozite termoizolate pentru produse sensibile la temperatură.",
                },
                {
                  Icon: Home,
                  title: "Containere Locuibile",
                  desc: "Case container, cabine de șantier sau birouri modulare. Izolăm pereții, plafonul și podeaua pentru confort complet.",
                },
                {
                  Icon: Wrench,
                  title: "Ateliere Container",
                  desc: "Containere transformate în ateliere auto, mecanice sau de reparații. Confort termic pentru lucrul pe tot parcursul anului.",
                },
                {
                  Icon: Wheat,
                  title: "Containere Agricole",
                  desc: "Depozitare fructe, legume, cereale sau semințe. Temperatura și umiditatea controlate pentru păstrarea calității.",
                },
                {
                  Icon: Zap,
                  title: "Containere Tehnice",
                  desc: "Adăposturi pentru echipamente electronice, grupuri electrogene sau stații de pompare. Protecție termică pentru instalații.",
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

        {/* Avantaje */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Avantajele Izolației cu Spumă față de Alte Soluții</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Fără punți termice", desc: "Spuma acoperă uniform fiecare colț, îmbinare și puncte metalice ale containerului — eliminând complet pierderile de căldură." },
                { title: "Aplicare în 1 zi", desc: "Un container standard 20ft se izolează complet în câteva ore. Poți folosi spațiul a doua zi." },
                { title: "Greutate minimă", desc: "Adaugă 2–5 kg/m² față de zeci de kg cu panouri sandwich sau vată minerală. Ideal pentru transport." },
                { title: "Durabilitate 25+ ani", desc: "Nu se tasează, nu cade, nu absoarbe umezeala. Performanța termică rămâne constantă decenii." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-none">
                  <Check className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Termoizolăm Containerul Tău</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Spune-ne ce fel de container ai și îți oferim soluția potrivită. Consultație gratuită.
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
