import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Check, VolumeX } from "lucide-react"

const fonoizolareServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fonoizolare',
  description: 'Servicii profesionale de fonoizolare cu spumă poliuretanică cu celulă deschisă. Reducere zgomot până la 70%. Confort acustic garantat.',
  provider: { '@type': 'LocalBusiness', name: 'IsoThermLux' },
  areaServed: 'Moldova',
}

export const metadata: Metadata = {
  title: "Fonoizolare cu Spumă Poliuretanică Moldova | Aplicare Profesională | IsoThermLux",
  description: "Fonoizolare profesională cu spumă poliuretanică cu celulă deschisă. Reducere zgomot până la 70%. Garanție 25 de ani scrisă. Consultație gratuită Chișinău.",
  keywords: "fonoizolare Moldova, fonoizolare Chișinău, izolare fonică, reducere zgomot, confort acustic, spumă poliuretanică fonoizolare",
  alternates: { canonical: "https://www.isothermlux.md/fonoizolare" },
}

const undeSeAplica = [
  "Pereți despărțitori interiori",
  "Tavane între etaje",
  "Apartamente și case de locuit",
  "Birouri și săli de conferință",
  "Studiouri de înregistrare și săli de repetiție",
  "Restaurante, baruri, spații comerciale",
  "Cluburi și săli de evenimente",
]

const galleryThumbs = [
  "/images/gallery/fono-01.webp",
  "/images/gallery/fono-02.webp",
  "/images/gallery/fono-03.webp",
  "/images/gallery/fono-04.webp",
  "/images/gallery/fono-05.webp",
  "/images/gallery/fono-06.webp",
  "/images/gallery/termo-23.webp",
  "/images/gallery/termo-24.webp",
  "/images/gallery/termo-25.webp",
]

const deCeIsoThermLux = [
  "Experiență de peste 14 de ani în izolații profesionale",
  "Echipamente de ultimă generație și materiale premium",
  "Intervenții rapide și consultanță gratuită",
  "Garanție scrisă până la 25 de ani",
  "Acoperire vastă, în toată Moldova",
  "Fără intermediari — lucrăm direct",
  "Plată în rate",
]

export default function FonoizolarePage() {
  return (
    <>
      <Script id="fonoizolare-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fonoizolareServiceSchema) }} />
      <Header />
      <main className="bg-background">

        {/* Hero — bandă imagine + titlu sub ea */}
        <section className="relative pt-24">
          <div className="relative h-56 md:h-80 w-full">
            <Image src="/images/gallery/fono-06.webp" alt="Aplicare fonoizolare cu spumă poliuretanică" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <VolumeX className="w-10 h-10 md:w-12 md:h-12 text-accent" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-tight mb-2">
              Fonoizolare cu Spumă Poliuretanică
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium mb-6">
              Aplicare Profesională în Toată Moldova
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Zgomotul de la vecini, stradă sau echipamente afectează confortul zilnic. Spuma poliuretanică cu celulă deschisă absoarbe sunetul direct la sursă, reducând zgomotul perceput cu până la 70%, fără a ocupa spațiu util semnificativ.
            </p>
          </div>
        </section>

        {/* Ce este fonoizolatia */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-64 md:h-96 mb-10 overflow-hidden">
              <Image src="/images/gallery/fono-01.webp" alt="Spațiu fonoizolat cu spumă poliuretanică" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Ce este fonoizolația cu spumă poliuretanică?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Firma noastră vă pune la dispoziție aplicații de izolație cu spumă poliuretanică cu celulă deschisă, tehnologie creată special pentru oamenii ce locuiesc cu zgomotul în interiorul casei. Structura poroasă a materialului absoarbe undele sonore în loc să le reflecte.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Știm cu toții că sunetele se propagă prin aer și prin structura caselor, mai apoi prin pereți. Soluția de calitate o găsiți la noi: aplicare directă, fără rosturi, pe pereți, tavane sau planșee, cu rezultate vizibile din prima zi.
            </p>
          </div>
        </section>

        {/* Avantaje */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-accent">Avantajele fonoizolației cu spumă poliuretanică</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <ul className="space-y-3">
                  {[
                    "Reducere zgomot perceput cu până la 70%",
                    "Aderență perfectă pe pereți, tavane și planșee",
                    "Structură poroasă — absoarbe sunetul în loc să-l reflecte",
                    "Aplicare rapidă — 1-2 zile lucrătoare",
                    "Beneficiu dublu — izolație termică suplimentară",
                    "Garanție scrisă 25 de ani",
                  ].map((text) => (
                    <li key={text} className="flex gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+37360811115" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 mt-6 font-semibold hover:bg-accent/90 transition-colors">
                  Află mai multe
                </a>
              </div>
              <div className="relative h-80 md:h-96">
                <Image src="/images/gallery/fono-02.webp" alt="Tehnician aplicând fonoizolare" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA bandă */}
        <section className="relative py-16 md:py-20 bg-[#1A1D21] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gallery/fono-03.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-6">
              IsoThermLux oferă servicii de fonoizolare în toată Moldova, cu echipe mobile și echipamente profesionale.
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* Unde se aplica + galerie */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Unde se poate aplica fonoizolația cu spumă poliuretanică?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-foreground/80 mb-4">
                  IsoThermLux aplică fonoizolația eficient în întreaga țară, pe toate tipurile de spații:
                </p>
                <ul className="space-y-2 mb-6">
                  {undeSeAplica.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground/80">
                      <span className="text-accent">•</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/70 mb-2">Vrei să vezi cum arată o fonoizolație reușită?</p>
                <Link href="/portofoliu" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                  Vezi portofoliul nostru de lucrări recente <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {galleryThumbs.map((src) => (
                  <div key={src} className="relative aspect-square">
                    <Image src={src} alt="Lucrare de fonoizolare IsoThermLux" fill sizes="200px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA bandă 2 */}
        <section className="relative py-16 md:py-20 bg-[#1A1D21] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gallery/fono-04.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-6">
              Vrei să afli cât te costă o fonoizolare la apartamentul sau birourile tale?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* De ce IsoThermLux */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-accent">De ce să alegi IsoThermLux?</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <ul className="space-y-3">
                {deCeIsoThermLux.map((text) => (
                  <li key={text} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="relative h-64 md:h-80">
                <Image src="/images/gallery/fono-05.webp" alt="Tehnician IsoThermLux aplicând fonoizolare" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-10 max-w-3xl">
              Dacă vrei un spațiu liniștit, ferit de zgomotul vecinilor sau al străzii, fonoizolarea cu spumă poliuretanică este alegerea ideală. Începe chiar azi călătoria către un confort acustic real. Liniște garantată, fără compromisuri.
            </p>
            <p className="text-accent font-medium mt-6">Completează formularul de mai sus sau contactează-ne direct!</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 mt-4 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* Formular contact */}
        <div id="contact-form">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
