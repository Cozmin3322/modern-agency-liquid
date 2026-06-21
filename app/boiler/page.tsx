import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { ArrowRight, Check, Thermometer, ShieldCheck, Zap, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Boiler și Rezervoare Termice | IsoThermLux Moldova",
  description: "Termoizolare profesională a boilerelor și rezervoarelor termice cu spumă poliuretanică. Reduci pierderile de căldură cu 60%. Economie reală la factura de gaz. Garanție 25 ani. Moldova.",
  keywords: "termoizolare boiler Moldova, izolare boiler, spuma poliuretanica boiler, izolare rezervor termic, termoizolare acumulator caldura Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/boiler" },
  openGraph: {
    title: "Termoizolare Boiler | IsoThermLux Moldova",
    description: "Izolarea unui boiler este esențială pentru a reduce pierderile de căldură. Spumă poliuretanică — garanție 25 ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/boiler",
  },
}

const specs = [
  { label: "Tip spumă", value: "Celule Închise (Closed Cell)" },
  { label: "Conductivitate termică", value: "λ = 0.020–0.024 W/m·K" },
  { label: "Densitate", value: "35–45 kg/m³" },
  { label: "Absorbție apă", value: "< 2% din volum" },
  { label: "Temperaturi de lucru", value: "până la +120°C" },
  { label: "Durată aplicare", value: "câteva ore / boiler" },
  { label: "Garanție", value: "25 ani scrisă" },
]

const benefits = [
  {
    Icon: Thermometer,
    title: "Reduci Pierderile cu 60%",
    description: "Un boiler neizolatermit pierde constant căldura prin perete. Spuma formează o manta termică continuă, fără rosturi sau goluri.",
  },
  {
    Icon: Zap,
    title: "Factura de Gaz Scade Vizibil",
    description: "Apa caldă se răcește mai lent — arderile sunt mai rare. Clienții noștri raportează economii de 15–30% la prima factură după izolare.",
  },
  {
    Icon: ShieldCheck,
    title: "Protecție Împotriva Condensului",
    description: "Pe rezervoarele de apă rece, spuma cu celule închise elimină condensul care ruginește metalul și udă pereții din jur.",
  },
  {
    Icon: Clock,
    title: "Aplicare Rapidă — Câteva Ore",
    description: "Un boiler standard se izolează în 2–4 ore fără a-l demonta sau a opri instalația. Poți folosi apa caldă în aceeași zi.",
  },
]

const types = [
  { title: "Boilere de Apă Caldă Menajeră", desc: "Boilere verticale sau orizontale, electrice sau pe gaz, de la 80 la 500 litri. Izolăm pe exterior fără demontare." },
  { title: "Acumulatoare Tampon", desc: "Rezervoare tampon pentru centrale termice sau pompe de căldură. Menținem temperatura acumulată mai mult timp, reducând ciclurile de pornire." },
  { title: "Rezervoare de Apă Rece", desc: "Rezervoare de alimentare sau hidrofor. Eliminăm condensul și protejăm metalul de coroziune." },
  { title: "Boilere Industriale", desc: "Rezervoare mari de 500–5000 litri pentru hoteluri, blocuri sau industrie. Echipament profesional pentru suprafețe mari." },
  { title: "Schimbătoare de Căldură", desc: "Izolăm schimbătoarele de căldură și echipamentele termice industriale. Fiecare formă neregulată este acoperită perfect." },
  { title: "Conducte de Legătură", desc: "Izolăm și conductele dintre boiler și instalație. Pierderile pe conducte neizolate pot depăși pierderile boilerului însuși." },
]

export default function BoilerPage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <ServiceHero
          backgroundImage="/images/project-detaliu-izolare-01.jpg"
          title="Termoizolare Boiler"
          titleAccent="Reduci Pierderile cu 60%"
          subtitle="Izolarea unui boiler este esențială pentru a reduce pierderile de căldură și a economisi la factură. Aplicăm spumă poliuretanică cu celule închise direct pe boiler."
          ctaSecondaryHref="/contact"
          ctaSecondaryLabel="Cere Ofertă"
        />

        <nav className="text-sm text-foreground/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="hover:text-accent transition">Acasă</Link>
          <span className="mx-2">/</span>
          <span>Termoizolare Boiler</span>
        </nav>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">De Ce Să Izolezi Boilerul?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map(({ Icon, title, description }, idx) => (
                <div key={idx} className="p-8 border border-border rounded-none hover:border-accent transition">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-foreground/70">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-8">Ce Tipuri de Boilere Izolăm</h2>
                <div className="space-y-4">
                  {types.map((type, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-card border border-border rounded-none hover:border-accent transition">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{type.title}</h3>
                        <p className="text-foreground/70 text-sm">{type.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card p-8 rounded-none border border-border sticky top-8">
                <h3 className="text-xl font-semibold mb-6">Specificații Tehnice</h3>
                <div className="space-y-4">
                  {specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-foreground/60 text-sm">{spec.label}</span>
                      <span className="font-medium text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-accent/10 rounded-none border border-accent/30">
                  <p className="text-sm text-foreground/80 font-medium mb-1">De ce celule închise?</p>
                  <p className="text-sm text-foreground/60">
                    Boilerele funcționează la temperaturi ridicate și în medii cu umiditate. Celulele închise sunt impermeabile și stabile termic până la 120°C — singura alegere corectă.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Cum Lucrăm</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Evaluare Gratuită", desc: "Venim la tine și evaluăm boilerul: dimensiuni, tip, temperatură de lucru, necesități." },
                { step: "2", title: "Ofertă Exactă", desc: "Calculăm cantitatea de material și prețul final. Nicio surpriză la factură." },
                { step: "3", title: "Pregătire", desc: "Curățăm suprafața boilerului. Nu este nevoie de demontare sau oprirea instalației." },
                { step: "4", title: "Aplicare", desc: "Spuma se aplică uniform pe toată suprafața. Finisaj neted sau brut, după preferință." },
              ].map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {s.step}
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Izolează Boilerul și Economisești din Prima Lună</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Deplasare gratuită. Aplicare în câteva ore. Garanție 25 ani.
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
