import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, Fuel, Droplet, Milk, Factory, Thermometer, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Cisterne | Rezervoare Industriale | IsoThermLux Moldova",
  description: "Termoizolare profesională a cisternelor și rezervoarelor industriale cu spumă poliuretanică cu celule închise. Protecție termică maximă. Garanție 25 ani. Chișinău, Moldova.",
  keywords: "termoizolare cisterne Moldova, izolare rezervoare industriale, spuma poliuretanica cisterne, termoizolare rezervoare, izolare termica cisterne",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/cisterne" },
  openGraph: {
    title: "Termoizolare Cisterne și Rezervoare | IsoThermLux",
    description: "Izolație termică profesională pentru cisterne și rezervoare cu spumă poliuretanică cu celule închise. Garanție 25 ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/cisterne",
  },
}

export default function CisternePage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-20 bg-[#1a2535]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative py-20">
            <nav className="text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition">Acasă</Link>
              <span className="mx-2">/</span>
              <Link href="/termoizolare" className="hover:text-white transition">Termoizolare</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Cisterne</span>
            </nav>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">Spumă Poliuretanică cu Celule Închise</p>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6 max-w-3xl">
              Termoizolare Cisterne și Rezervoare Industriale
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Izolăm cisterne metalice, rezervoare de apă, combustibil sau produse alimentare cu spumă poliuretanică cu celule închise — soluția cu cel mai bun coeficient termic, impermeabilă și durabilă 25+ ani.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+37378370243" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
                Consultație Gratuită <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/calculator-oferta" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-white transition">
                Calculează Oferta
              </Link>
            </div>
          </div>
        </section>

        {/* De ce spuma cu celule inchise */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">De Ce Spumă cu Celule Închise pentru Cisterne?</h2>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Cisternele și rezervoarele sunt supuse la variații mari de temperatură și umiditate. Spuma poliuretanică cu <strong>celule închise</strong> este singura soluție care oferă simultan izolație termică perfectă, impermeabilitate completă și rezistență structurală.
                </p>
                <ul className="space-y-4">
                  {[
                    "Impermeabilă 100% — nu absoarbe apă sau umiditate",
                    "Coeficient termic λ = 0.022 W/m·K — cel mai bun pe piață",
                    "Aderă direct pe metal fără preparare specială",
                    "Rezistă la presiune și șocuri mecanice",
                    "Nu se degradează, nu se tasează în timp",
                    "Aplicare uniformă pe orice formă de cisternă"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-6 text-center">Specificații Tehnice</h3>
                <div className="space-y-4">
                  {[
                    { label: "Tip spumă", value: "Celule Închise (Closed Cell)" },
                    { label: "Conductivitate termică", value: "λ = 0.020–0.024 W/m·K" },
                    { label: "Densitate", value: "35–45 kg/m³" },
                    { label: "Absorbție apă", value: "< 2% din volum" },
                    { label: "Grosime recomandată", value: "50–100 mm" },
                    { label: "Garanție", value: "25 ani scrisă" },
                    { label: "Aplicare", value: "Direct pe metal, beton, GRP" },
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

        {/* Tipuri de cisterne */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4 text-center">Ce Tipuri de Cisterne Izolăm</h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">Avem experiență cu toate tipurile de rezervoare și cisterne industriale.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  Icon: Fuel,
                  title: "Cisterne de Combustibil",
                  desc: "Rezervoare de motorină, benzină sau gaz. Izolația termică previne variațiile de vâscozitate și pierderile prin evaporare în perioadele calde.",
                },
                {
                  Icon: Droplet,
                  title: "Rezervoare de Apă",
                  desc: "Cisterne de apă potabilă sau tehnologică. Prevenim înghețarea iarna și supraîncălzirea vara. Material alimentar certificat.",
                },
                {
                  Icon: Milk,
                  title: "Cisterne Alimentare",
                  desc: "Rezervoare pentru lapte, ulei, vin sau alte produse alimentare. Temperatura controlată menține calitatea produselor.",
                },
                {
                  Icon: Factory,
                  title: "Rezervoare Industriale",
                  desc: "Cisterne pentru produse chimice, aditivi sau fluide industriale. Rezistență chimică și termică optimă.",
                },
                {
                  Icon: Thermometer,
                  title: "Cisterne Subterane",
                  desc: "Rezervoare îngropate. Izolarea previne condensul și coroziunea pe exterior, extinde durata de viață.",
                },
                {
                  Icon: Truck,
                  title: "Cisterne Mobile",
                  desc: "Rezervoare montate pe remorci sau camioane. Izolație ușoară cu celule închise pentru transport eficient.",
                },
              ].map((type, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition">
                  <type.Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Cum Lucrăm</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Inspecție Gratuită", desc: "Evaluăm cisterna pe loc: dimensiuni, material, stare, necesități termice specifice." },
                { step: "2", title: "Ofertă Personalizată", desc: "Calculăm grosimea optimă, cantitatea de material și prețul exact. Fără surprize." },
                { step: "3", title: "Pregătire Suprafață", desc: "Curățăm metalul, eliminăm rugina și aplicăm primer dacă este necesar." },
                { step: "4", title: "Aplicare și Finisare", desc: "Spuma se aplică uniform cu echipament profesional. Finisare conform cerințelor clientului." },
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2C3E50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Ai Nevoie de Termoizolarea unei Cisterne?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Consultație gratuită. Deplasare la locul cisternei. Ofertă în 24 ore.
            </p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Sună Acum: +373 78 370 243 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
