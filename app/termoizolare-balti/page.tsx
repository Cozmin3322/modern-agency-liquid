import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, MapPin, Phone } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"

const breadcrumb = breadcrumbSchema([
  { name: 'IsoThermLux', url: 'https://www.isothermlux.md' },
  { name: 'Termoizolare Bălți', url: 'https://www.isothermlux.md/termoizolare-balti' }
])

export const metadata: Metadata = {
  title: "Termoizolare Bălți cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare profesională în Bălți cu spumă poliuretanică. Case, hale, blocuri de apartamente. Deplasare gratuită, garanție 25 de ani.",
  keywords: "termoizolare bălți, izolare bălți, spumă poliuretanică bălți, termoizolare municipiul Bălți, izolare termică bălți Moldova",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare-balti" },
}

const AREAS = ["Centru Bălți", "Pământeni", "Slobozia", "Dacia", "Bălți sectorul 1", "Bălți sectorul 2"]

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-termoizolare-balti" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">

        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-end pt-20 bg-[#1A1D21]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-mono text-sm text-accent uppercase tracking-widest">municipiul Bălți</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 max-w-3xl">
              Termoizolare Bălți
            </h1>
            <p className="text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
              Servicii profesionale de termoizolare cu spumă poliuretanică în Bălți și municipiul Bălți. <span className="text-accent font-semibold">387+ proiecte</span> finalizate. Garanție 25 de ani. Deplasare gratuită.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+37360811115" className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-accent/90 transition">
                <Phone className="w-4 h-4" />
                Sună Acum
              </a>
              <Link href="/portofoliu" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 hover:bg-white/10 transition uppercase tracking-wide text-sm font-mono">
                Vezi Proiecte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {[
                ["387+", "Proiecte în municipiul Bălți"],
                ["25 de ani", "Garanție scrisă"],
                ["30 min", "Timp răspuns"],
                ["Gratuit", "Deplasare + evaluare"],
              ].map(([val, label]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-white font-serif text-xl font-semibold">{val}</span>
                  <span className="text-white/80 text-xs font-mono uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif uppercase mb-12">Servicii în Bălți</h2>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                { t: "Termoizolare Acoperiș", d: "Izolăm acoperișuri înclinate și plate cu spumă poliuretanică. Stop pierderi de căldură, stop condens.", href: "/termoizolare/acoperis" },
                { t: "Termoizolare Pereți", d: "Pereți exteriori izolați complet. Elimini punțile termice, mucegaiul și facturile mari.", href: "/termoizolare/pereti-exteriori" },
                { t: "Termoizolare Mansardă", d: "Mansardă sau pod transformat în spațiu locuibil confortabil, cald iarna și răcoros vara.", href: "/termoizolare/mansarda" },
                { t: "Termoizolare Fundație", d: "Fundație protejată termic și hidro simultan cu celulă închisă. Soluție completă 2 în 1.", href: "/termoizolare/fundatie" },
                { t: "Termoizolare Hale", d: "Hale industriale și agricole izolate rapid. Economie uriașă la încălzire pentru suprafețe mari.", href: "/termoizolare/hale-si-depozite" },
                { t: "Hidroizolare", d: "Impermeabilizare acoperișuri, terase și fundații cu spumă poliuretanică celulă închisă.", href: "/hidroizolare" },
              ].map((s, i) => (
                <Link key={i} href={s.href} className="group bg-background p-8 hover:bg-[#1A1D21] transition-colors duration-300">
                  <span className="font-mono text-xs text-accent mb-4 block">/ 0{i+1}</span>
                  <h3 className="font-serif text-xl uppercase mb-3 group-hover:text-white transition-colors">{s.t}</h3>
                  <p className="text-sm text-foreground/70 group-hover:text-white/70 transition-colors mb-4">{s.d}</p>
                  <span className="font-mono text-xs text-accent uppercase tracking-wide">Detalii →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif uppercase mb-12">Zone Deservite în Bălți</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 p-3 border border-border">
                  <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-6 font-mono">
              * Intervenție și în localitățile din municipiul Bălți. Deplasare gratuită pentru evaluare.
            </p>
          </div>
        </section>

        {/* Why us local */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif uppercase mb-12">De Ce IsoThermLux în Bălți?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Cunoaștem condițiile locale", "Climatul din municipiul Bălți — temperaturi extreme iarna, umiditate sezonieră. Știm exact ce tip de spumă funcționează cel mai bine."],
                ["387+ proiecte realizate", "Experiență vastă în Bălți și municipiul Bălți. Clienții noștri pot fi contactați pentru referințe."],
                ["Deplasare gratuită la Bălți", "Evaluare pe loc fără costuri. Ofertă personalizată în 24h."],
                ["Garanție de 25 de ani în scris", "Nu verbală — pe hârtie, cu semnătură. Lucrarea e garantată pe durata de viață a locuinței."],
              ].map(([t, d], i) => (
                <div key={i} className="flex gap-4 p-6 border border-border">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t}</h3>
                    <p className="text-sm text-foreground/70">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1A1D21] text-center">
          <div className="max-w-3xl mx-auto px-4">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-4">Bălți · municipiul Bălți</span>
            <h2 className="text-4xl font-serif text-white mb-4">Cere Ofertă Gratuită în Bălți</h2>
            <p className="text-white/70 mb-8">Evaluare gratuită pe loc. Răspuns în 30 min. Garanție 25 de ani.</p>
            <a href="tel:+37360811115" className="inline-flex items-center gap-3 bg-accent text-white px-10 py-4 font-semibold hover:bg-accent/90 transition uppercase tracking-wide">
              <Phone className="w-4 h-4" />
              +373 60 811 115
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
