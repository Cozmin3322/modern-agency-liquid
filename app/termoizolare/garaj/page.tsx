import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, BrickWall, DoorOpen, SquareParking, Layers, Home, CarFront, Wrench, Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Garaj | Spumă Poliuretanică | IsoThermLux Moldova",
  description: "Termoizolare profesională a garajelor cu spumă poliuretanică. Garaj cald iarna, răcoros vara. Ideal pentru ateliere auto și spații de lucru. Garanție 25 ani. Moldova.",
  keywords: "termoizolare garaj Moldova, izolare garaj, spuma poliuretanica garaj, termoizolare atelier auto, izolare termica garaj Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/garaj" },
  openGraph: {
    title: "Termoizolare Garaj | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru garaje cu spumă poliuretanică. Garaj cald iarna, răcoros vara. Garanție 25 ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/garaj",
  },
}

export default function GarajPage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <section className="relative min-h-[70vh] flex items-center pt-20 bg-[#1a2535]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative py-20">
            <nav className="text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition">Acasă</Link>
              <span className="mx-2">/</span>
              <Link href="/termoizolare" className="hover:text-white transition">Termoizolare</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Garaj</span>
            </nav>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">Spumă Poliuretanică — Celule Deschise & Închise</p>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6 max-w-3xl">
              Termoizolare Garaj — Cald Iarna, Răcoros Vara
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Un garaj neizolatermit este inutilizabil iarna și sufocant vara. Izolăm pereții, acoperișul și ușile garajului cu spumă poliuretanică — în 1–2 zile ai un spațiu confortabil tot anul.
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

        {/* Zone garaj */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ce Izolăm la Garaj</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  Icon: Construction,
                  title: "Pereții Garajului",
                  desc: "Izolăm pereții de beton, cărămidă sau metal pe interior sau exterior. Spumă cu celule deschise pentru respirabilitate sau celule închise pentru eficiență maximă.",
                  foam: "Celule Deschise sau Închise",
                },
                {
                  Icon: Home,
                  title: "Acoperișul / Tavanul",
                  desc: "Acoperișul plat sau în pantă izolat cu spumă — eliminăm condensul pe tablă și pierderile de căldură prin plafon. Aplicare rapidă pe orice suprafață.",
                  foam: "Celule Închise",
                },
                {
                  Icon: DoorOpen,
                  title: "Ușa Garajului (Rabatabilă / Secțională)",
                  desc: "Injectăm spumă în panelurile goale ale ușii garajului sau aplicăm pe interior. Ușa devine un element izolant eficient.",
                  foam: "Celule Închise",
                },
                {
                  Icon: Layers,
                  title: "Podeaua (Placa de Beton)",
                  desc: "Izolăm sub sau peste placa de beton. Podea caldă la pas — esențial dacă lucrezi în garaj sau ai un atelier.",
                  foam: "Celule Închise",
                },
              ].map((z, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition">
                  <z.Icon className="w-8 h-8 text-accent mb-3" />
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{z.title}</h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded ml-4 flex-shrink-0">{z.foam}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipuri garaj */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ce Tipuri de Garaje Izolăm</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { Icon: Wrench, title: "Garaj Metalic", desc: "Tablă, panouri sandwich sau structură metalică. Spuma aderă perfect pe metal și elimină condensul și zgomotul ploii." },
                { Icon: BrickWall, title: "Garaj Zidărie", desc: "Beton sau cărămidă. Izolăm pe interior sau exterior — soluție rapidă fără modificări structurale." },
                { Icon: CarFront, title: "Atelier Auto", desc: "Garaj unde lucrezi la mașini. Temperatură confortabilă pe tot parcursul anului + izolație fonică." },
                { Icon: Home, title: "Garaj Integrat în Casă", desc: "Garaj sub casă sau alipit. Izolăm tavanul garajului care este podeaua camerei de deasupra — esențial pentru confort." },
                { Icon: SquareParking, title: "Parcare Acoperită", desc: "Spații de parcare acoperite sau semi-deschise. Protecție pentru mașini și confort pentru utilizatori." },
                { Icon: Wrench, title: "Garaj Hobby / Depozit", desc: "Spațiu pentru unelte, echipamente sau activități hobby. Izolat corespunzător devine utilizabil tot anul." },
              ].map((type, idx) => (
                <div key={idx} className="p-6 bg-background border border-border rounded-lg hover:border-accent transition">
                  <type.Icon className="w-7 h-7 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">{type.title}</h3>
                  <p className="text-foreground/70 text-sm">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2C3E50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Garajul Tău Merită să Fie Confortabil</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Lucrare în 1–2 zile. Fără murdărie, fără praf, fără șantier prelungit.
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
