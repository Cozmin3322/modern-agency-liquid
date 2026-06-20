import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ArrowRight, Check, Truck, Package, Thermometer, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Transport Industrial | Vehicule și Flote | IsoThermLux Moldova",
  description: "Termoizolare profesională pentru transport industrial cu spumă poliuretanică. Camioane, remorci, cisterne mobile, containere de transport. Soluții pentru flote întregi. Moldova.",
  keywords: "termoizolare transport industrial Moldova, izolare vehicule industriale, spuma poliuretanica transport, termoizolare flota camioane, izolare remorci industriale",
  alternates: { canonical: "https://www.isothermlux.md/transport-industrial" },
  openGraph: {
    title: "Termoizolare Transport Industrial | IsoThermLux Moldova",
    description: "Soluții complete de termoizolare pentru transport industrial cu spumă poliuretanică. Flote, camioane, remorci, cisterne.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/transport-industrial",
  },
}

const services = [
  {
    Icon: Truck,
    title: "Camioane și Semiremorci",
    description: "Izolăm caroseriile izoterme, camioanele frigorifice și remorcile de orice tonaj. Spumă cu celule închise — greutate minimă, eficiență maximă.",
    link: "/termoizolare/camioane",
  },
  {
    Icon: Package,
    title: "Containere de Transport",
    description: "Containere 20ft și 40ft izolate pentru transport sau depozitare. Temperaturi controlate pe distanțe lungi.",
    link: "/termoizolare/containere",
  },
  {
    Icon: Thermometer,
    title: "Cisterne Mobile",
    description: "Cisterne pentru combustibil, produse alimentare sau chimice montate pe remorci. Izolație impermeabilă cu celule închise.",
    link: "/termoizolare/cisterne",
  },
  {
    Icon: ShieldCheck,
    title: "Vehicule Speciale",
    description: "Ambulanțe, vehicule tehnice, unități mobile de comandă și laboratoare. Izolație termică și fonică personalizată.",
    link: "/termoizolare/camioane",
  },
]

const fleet = [
  { title: "Evaluare întreagă flotă", desc: "Venim la depoul tău și evaluăm fiecare vehicul. Ofertă globală cu discount pentru volum." },
  { title: "Program de lucru flexibil", desc: "Lucrăm noaptea sau în weekend pentru a nu opri activitatea flotei." },
  { title: "Prioritizare vehicule urgente", desc: "Vehiculele cu probleme critice de izolație sunt tratate primele." },
  { title: "Documentație completă", desc: "Certificat de garanție per vehicul. Dosar tehnic complet pentru fiecare unitate tratată." },
]

export default function TransportIndustrialPage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <ServiceHero
          backgroundImage="/images/project-hala-industrial-01.jpg"
          title="Termoizolare Transport"
          titleAccent="Industrial"
          subtitle="Soluții complete de termoizolare pentru vehicule industriale, flote de transport și echipamente mobile cu spumă poliuretanică cu celule închise."
          ctaSecondaryHref="/contact"
          ctaSecondaryLabel="Cere Ofertă"
        />

        <nav className="text-sm text-foreground/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="hover:text-accent transition">Acasă</Link>
          <span className="mx-2">/</span>
          <span>Transport Industrial</span>
        </nav>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4">Ce Tipuri de Transport Izolăm</h2>
            <p className="text-foreground/60 mb-12 max-w-2xl">Acoperim toate tipurile de vehicule și echipamente utilizate în transport industrial.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map(({ Icon, title, description, link }, idx) => (
                <Link key={idx} href={link} className="p-8 bg-background border border-border rounded-none hover:border-accent transition group">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition">{title}</h3>
                  <p className="text-foreground/70 mb-4">{description}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm">
                    Detalii <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">De Ce Spumă cu Celule Închise pentru Transport?</h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Vehiculele de transport au cerințe specifice față de clădiri: greutatea adăugată afectează consumul și capacitatea de încărcare. Spuma cu celule închise oferă cel mai bun raport izolație/greutate disponibil.
                </p>
                <ul className="space-y-4">
                  {[
                    "1–3 kg/m² adăugați față de 8–15 kg/m² la alternativele clasice",
                    "Impermeabilă — nu absoarbe umezeala în timp",
                    "Aderă pe metal, aluminiu, fibră de sticlă fără adeziv",
                    "Amortizează vibrațiile și reduce zgomotul în cabină",
                    "Rezistentă la detergenți și produse de curățare industriale",
                    "Durată de viață egală cu vehiculul — nu necesită reizolare",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-none border border-border">
                <h3 className="text-xl font-semibold mb-6">Specificații Tehnice</h3>
                <div className="space-y-4">
                  {[
                    { label: "Tip spumă", value: "Celule Închise (Closed Cell)" },
                    { label: "Conductivitate termică", value: "λ = 0.020–0.024 W/m·K" },
                    { label: "Densitate", value: "35–45 kg/m³" },
                    { label: "Greutate adăugată", value: "1–3 kg/m²" },
                    { label: "Absorbție apă", value: "< 2% din volum" },
                    { label: "Temperaturi de lucru", value: "-50°C până la +120°C" },
                    { label: "Garanție", value: "25 ani scrisă" },
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

        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4 text-center">Servicii pentru Flote Întregi</h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
              Lucrăm cu companii de transport care au nevoie să izoleze mai multe vehicule. Prețuri speciale și program flexibil.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {fleet.map((item, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-none">
                  <Check className="w-5 h-5 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Termoizolăm Flota Ta</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Evaluare gratuită la depoul tău. Ofertă pentru fiecare vehicul. Program adaptat activității tale.
            </p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
              Sună Acum: +373 78 370 243 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
