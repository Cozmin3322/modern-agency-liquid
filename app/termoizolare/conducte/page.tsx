import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ArrowRight, Check, Thermometer, Factory, Droplet, Snowflake, Wrench, Cylinder } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Conducte și Instalații | Spumă Poliuretanică | IsoThermLux Moldova",
  description: "Termoizolare profesională a conductelor industriale, termice și sanitare cu spumă poliuretanică cu celule închise. Elimini pierderile de căldură și condensul. Moldova.",
  keywords: "termoizolare conducte Moldova, izolare tevi industriale, spuma poliuretanica conducte, termoizolare instalatii termice, izolare tevi agent termic",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/conducte" },
  openGraph: {
    title: "Termoizolare Conducte și Instalații | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru conducte și instalații cu spumă poliuretanică. Elimini pierderile de căldură.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/conducte",
  },
}

export default function ConduCtePage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <ServiceHero
          backgroundImage="/images/project-protectie-margini-01.jpg"
          title="Termoizolare Conducte"
          titleAccent="și Instalații Tehnice"
          subtitle="Conductele neizolate pierd până la 30% din energia transportată. Izolăm conducte industriale, termice și sanitare cu spumă poliuretanică."
          ctaSecondaryHref="/contact"
          ctaSecondaryLabel="Cere Ofertă"
        />

        <nav className="text-sm text-foreground/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="hover:text-accent transition">Acasă</Link>
          <span className="mx-2">/</span>
          <Link href="/termoizolare" className="hover:text-accent transition">Termoizolare</Link>
          <span className="mx-2">/</span>
          <span>Conducte și Instalații</span>
        </nav>

        {/* Tipuri conducte */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ce Conducte și Instalații Izolăm</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { Icon: Thermometer, title: "Conducte Agent Termic", desc: "Termoizolare pentru conductele de apă caldă sau abur. Reducem pierderile termice cu 60–80% și prevenim condensul pe conductele reci." },
                { Icon: Factory, title: "Conducte Industriale", desc: "Conducte de proces cu fluide calde sau reci. Spuma se aplică direct pe metal, inox sau oțel galvanizat — pe orice diametru." },
                { Icon: Droplet, title: "Conducte Sanitare", desc: "Izolăm conductele de apă rece împotriva înghețului și conductele de apă caldă pentru a reduce pierderile de temperatură." },
                { Icon: Snowflake, title: "Conducte Frigorifice", desc: "Conducte de agent frigorific sau răcire. Celule închise împiedică vaporizarea umidității pe suprafața rece a conductei." },
                { Icon: Wrench, title: "Vane, Flanșe, Fitinguri", desc: "Spuma se modelează perfect pe geometria complexă a vanelor și fitingurilor — punct frecvent de pierderi termice neglijat." },
                { Icon: Cylinder, title: "Rezervoare și Boilere", desc: "Izolăm boilere, rezervoare tampon și acumulatoare. Menţinem temperatura fluidului mai mult timp cu consum redus de energie." },
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

        {/* Avantaje spuma vs clasic */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">De Ce Spumă Poliuretanică la Conducte?</h2>
                <p className="text-foreground/70 mb-8">
                  Față de cochiliile clasice din vată minerală sau polistiren, spuma poliuretanică se aplică direct pe conductă și creează o manta fără cusături sau rosturi — eliminând toate punctele de pierderi termice.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fără rosturi sau îmbinări — manta continuă pe toată lungimea",
                    "Acoperă coturi, ramificații și fitinguri fără adaptoare",
                    "Nu absoarbe apă — fără degradarea izolației la umiditate",
                    "Aderă permanent — nu alunecă sau cade în timp",
                    "Poate fi acoperită cu tablă sau cauciuc pentru protecție exterioară",
                    "Aplicare rapidă chiar și pe conducte în funcțiune (temp. joasă)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-background p-6 rounded-none border border-border">
                  <h3 className="font-semibold mb-2">Conductivitate Termică</h3>
                  <div className="text-3xl font-bold text-accent">λ = 0.022 W/m·K</div>
                  <p className="text-foreground/60 text-sm mt-1">Cel mai bun coeficient disponibil comercial</p>
                </div>
                <div className="bg-background p-6 rounded-none border border-border">
                  <h3 className="font-semibold mb-2">Temperaturi de Lucru</h3>
                  <div className="text-3xl font-bold text-foreground">-50°C → +120°C</div>
                  <p className="text-foreground/60 text-sm mt-1">Stabilitate termică pe plajă largă</p>
                </div>
                <div className="bg-background p-6 rounded-none border border-border">
                  <h3 className="font-semibold mb-2">Durată de Viață</h3>
                  <div className="text-3xl font-bold text-foreground">25+ ani</div>
                  <p className="text-foreground/60 text-sm mt-1">Fără degradare, fără reizolare</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Izolăm Conductele Tale Rapid</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Evaluare gratuită. Ofertă pe metru liniar. Lucrare fără oprirea instalației în majoritatea cazurilor.
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
