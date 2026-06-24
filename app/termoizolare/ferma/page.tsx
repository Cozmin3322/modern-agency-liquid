import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ArrowRight, Check, Beef, PiggyBank, Bird, Sprout, Wheat, Milk } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Ferme Agricole și Grajduri | Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare profesională pentru ferme, grajduri, sere și depozite agricole cu spumă poliuretanică. Reducere costuri încălzire cu 40%. Garanție 25 de ani. Moldova.",
  keywords: "termoizolare ferma agricola Moldova, izolare grajduri, spuma poliuretanica ferma, termoizolare sera, izolare depozite agricole Moldova",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/ferma" },
  openGraph: {
    title: "Termoizolare Ferme Agricole | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru ferme și grajduri cu spumă poliuretanică. Reducere costuri cu 40%. Garanție 25 de ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/ferma",
  },
}

export default function FermaPage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <ServiceHero
          backgroundImage="/images/project-hala-industrial-new.webp"
          title="Termoizolare Ferme"
          titleAccent="Agricole și Grajduri"
          subtitle="Animalele sănătoase și costurile reduse încep cu o fermă bine izolată. Izolăm grajduri, hale avicole, sere și depozite agricole."
          ctaSecondaryHref="/contact"
          ctaSecondaryLabel="Cere Ofertă"
        />

        <nav className="text-sm text-foreground/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="hover:text-accent transition">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/termoizolare" className="hover:text-accent transition">Termoizolare</Link>
          <span className="mx-2">/</span>
          <span>Ferme Agricole</span>
        </nav>

        {/* Tipuri ferme */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ce Tipuri de Spații Agricole Izolăm</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { Icon: Beef, title: "Grajduri Bovine", desc: "Temperatură stabilă pentru vaci de lapte sau carne. Spuma reduce condensul și mucegaiul, îmbunătățind sănătatea animalelor și producția de lapte." },
                { Icon: PiggyBank, title: "Ferme de Porci", desc: "Purceii mici sunt sensibili la frig. Izolarea corectă a halelor reduce mortalitatea și consumul de energie la încălzire cu până la 40%." },
                { Icon: Bird, title: "Hale Avicole", desc: "Puii de carne și găinile ouătoare au nevoie de temperaturi constante. Izolăm rapid halele mari cu echipament profesional — 300 m²/zi." },
                { Icon: Sprout, title: "Sere și Solarii", desc: "Izolăm pereții și acoperișul serelor. Temperatura nocturnă menținută reduce costurile de încălzire și prelungește sezonul de producție." },
                { Icon: Wheat, title: "Depozite de Cereale", desc: "Temperatura și umiditatea controlate previn condensul și degradarea cerealelor. Spuma creează o barieră de vapori completă." },
                { Icon: Milk, title: "Spații de Maturare / Fermentare", desc: "Pivnițe de vin, camere de maturare brânzeturi sau fermentare. Temperatura stabilă este esențială — spuma cu celule închise o garantează." },
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

        {/* Beneficii agricole */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Beneficii Concrete pentru Fermieri</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "40% reducere costuri încălzire", desc: "Verificat la ferme din Moldova după izolare. Amortizare investiție în 2–3 sezoane." },
                { title: "Animale mai sănătoase", desc: "Fără curenți de aer, fără umezeală, fără variații bruște de temperatură — mortalitate redusă." },
                { title: "Fără condens pe tabla acoperișului", desc: "Condensul distruge tabla și creează umezeala în hală. Spuma oprește complet fenomenul." },
                { title: "Aplicare rapidă pe hale mari", desc: "Echipamentul nostru acoperă 200–300 m²/zi. O hală de 1000 m² se izolează în 3–5 zile." },
                { title: "Rezistă la amoniac și dezinfectanți", desc: "Spuma poliuretanică este inertă chimic — nu se degradează la dezinfecțiile periodice." },
                { title: "Garanție 25 de ani", desc: "Investiție de lungă durată. Nu trebuie reizolat la fiecare renovare." },
              ].map((b, idx) => (
                <div key={idx} className="p-6 bg-background border border-border rounded-none">
                  <Check className="w-5 h-5 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-foreground/70 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spuma recomandata */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ce Tip de Spumă Folosim la Ferme</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-8 bg-card border-2 border-accent rounded-none">
                <h3 className="text-xl font-semibold mb-3">Celule Închise</h3>
                <p className="text-foreground/70 text-sm mb-4">Recomandată pentru acoperișuri metalice, cisterne de apă, depozite. Impermeabilă, dură, λ = 0.022 W/m·K.</p>
                <span className="text-accent font-semibold text-sm flex items-center gap-1.5"><Check className="w-4 h-4" /> Acoperișuri, depozite, cisterne</span>
              </div>
              <div className="p-8 bg-card border-2 border-border rounded-none">
                <h3 className="text-xl font-semibold mb-3">Celule Deschise</h3>
                <p className="text-foreground/70 text-sm mb-4">Recomandată pentru pereții interiori ai grajdurilor unde respirabilitatea este importantă. Izolație fonică excelentă.</p>
                <span className="text-foreground/60 font-semibold text-sm flex items-center gap-1.5"><Check className="w-4 h-4" /> Pereți interiori grajduri, hale</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Izolăm Ferma Ta Rapid și Eficient</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Venim la fermă, evaluăm gratuit și-ți facem oferta completă. Lucrăm fără a opri activitatea.
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
