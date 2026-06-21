import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, Sun, Snowflake } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Termoizolare cu Spumă Poliuretanică Moldova | Aplicare Profesională | IsoThermLux",
  description:
    "Termoizolare profesională cu spumă poliuretanică în toată Moldova. Economie 40-50% la energie. Garanție 25 ani scrisă. 14 ani experiență, echipe mobile, consultație gratuită.",
  keywords:
    "termoizolare Moldova, termoizolare Chișinău, izolare termică, spumă poliuretanică Moldova, termoizolare casă, economie energie Moldova",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare" },
  openGraph: {
    title: "Termoizolare cu Spumă Poliuretanică | Aplicare Profesională | IsoThermLux",
    description:
      "Termoizolare profesională cu spumă poliuretanică în toată Moldova. Economie 40-50% la energie. Garanție 25 ani scrisă.",
    url: "https://www.isothermlux.md/termoizolare",
    locale: "ro_MD",
    type: "website",
  },
}

const undeSeAplica = [
  "Acoperișuri și mansarde pe orice tip de construcție",
  "Pereți exteriori și interiori",
  "Demisol și subsol",
  "Hale industriale, ferme, comerciale",
  "Planșee, beciuri",
  "Hale industriale, terase, containere",
  "Structuri metalice sau prefabricate",
]

const galleryThumbs = [
  "/images/gallery/termo-09.webp",
  "/images/gallery/termo-10.webp",
  "/images/gallery/termo-11.webp",
  "/images/gallery/termo-12.webp",
  "/images/gallery/termo-13.webp",
  "/images/gallery/termo-14.webp",
  "/images/gallery/termo-15.webp",
  "/images/gallery/termo-16.webp",
  "/images/gallery/hidro-08.webp",
]

const tipuriSpuma = [
  { image: "/images/gallery/termo-18.webp", title: "Spumă cu celulă deschisă", desc: "Ideală pentru izolarea în zone unde nu este nevoie de impermeabilizare." },
  { image: "/images/gallery/termo-19.webp", title: "Spumă cu celulă închisă", desc: "Perfectă pentru exterior, structuri expuse și protecție la umiditate." },
  { image: "/images/gallery/termo-20.webp", title: "Poliuree", desc: "Soluție pentru hidroizolare și protecție suplementară." },
]

const deCeIsoThermLux = [
  "Experiență de peste 14 ani în izolații profesionale",
  "Echipamente de ultimă generație și materiale premium",
  "Intervenții rapide și consultanță gratuită",
  "Garanție scrisă până la 25 de ani",
  "Acoperire vastă, în toată Moldova",
  "Fără intermediari — lucrăm direct",
  "Plată în rate",
]

export default function TermoizolarePage() {
  return (
    <>
      <script id="termoizolare-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Servicii de Termoizolare", description: "Servicii profesionale de termoizolare cu izolație termică de calitate. Economie 40-50% la energie. Garanție 25 ani. Aplicare în 1-2 zile.", provider: { "@type": "LocalBusiness", name: "IsoThermLux", url: "https://www.isothermlux.md" }, areaServed: "MD", availableLanguage: "ro" }) }} />
      <script id="breadcrumb-termoizolare" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: "https://www.isothermlux.md" }, { "@type": "ListItem", position: 2, name: "Termoizolare", item: "https://www.isothermlux.md/termoizolare" }] }) }} />
      <Header />
      <main className="bg-background">

        {/* Hero — bandă imagine + titlu sub ea */}
        <section className="relative pt-24">
          <div className="relative h-56 md:h-80 w-full">
            <Image src="/images/gallery/termo-03.webp" alt="Aplicare termoizolare cu spumă poliuretanică" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Snowflake className="w-10 h-10 md:w-12 md:h-12 text-accent" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-tight mb-2">
              Termoizolare cu Spumă Poliuretanică
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium mb-6">
              Aplicare Profesională în Toată Moldova
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pierderile de căldura prin acoperișuri, pereți și planșee pot ajunge la 50% din totalul pierderilor de energie ale unei locuințe. O termoizolare profesională, aplicată corect, le reduce drastic. Iar cea mai performantă soluție rămâne spuma poliuretanică aplicată prin pulverizare, cu rezultate dovedite pe termen lung.
            </p>
          </div>
        </section>

        {/* Ce este termoizolatia */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-64 md:h-96 mb-10 overflow-hidden">
              <Image src="/images/gallery/termo-01.webp" alt="Tehnician aplicând spumă poliuretanică pe acoperiș" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Ce este termoizolația cu spumă poliuretanică?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Este un sistem de izolare termică bazat pe aplicarea directă a spumei poliuretanice (celulă deschisă sau închisă), folosind un strat continuu și etanș. Necesită personal calificat, echipamente specifice și o aplicare corectă a stratului de material.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Spuma se aplică în formă lichidă și se transformă în câteva secunde, adoptând forma suprafeței pe care o izolează. Eficiența energetică nu mai este opțională — este o necesitate. Izolația corectă a clădirii contribuie direct la reducerea costurilor de încălzire și la protecția împotriva umidității și a condensului.
            </p>
          </div>
        </section>

        {/* Avantaje */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-accent">Avantajele termoizolației cu spumă poliuretanică</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-foreground/80 mb-4">
                  Spuma poliuretanică are cea mai bună conductivitate termică dintre toate izolațiile convenționale (λ = 0.022–0.030 W/m·K), de două ori mai eficientă decât vata minerală sau polistirenul, la grosime egală.
                </p>
                <ul className="space-y-3">
                  {[
                    "Una mai bună conductivitate termică decât izolațiile tradiționale",
                    "Aderență perfectă la orice suprafață — fără rosturi sau pierderi",
                    "Se adaptează la suprafețe neregulate, indiferent de forma sau dificultate",
                    "Reduce consumul de energie cu până la 40%",
                    "Reduce durabilă — rezistă peste 50 ani",
                    "Reduce punțile termice și asigură etanșarea perfectă",
                  ].map((text) => (
                    <li key={text} className="flex gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/70 text-sm mt-6">
                  Termoizolația cu spumă poliuretanică este mai eficientă decât poliistirenul sau vata minerală.
                </p>
                <a href="tel:+37360811115" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 mt-6 font-semibold hover:bg-accent/90 transition-colors">
                  Află mai multe
                </a>
              </div>
              <div className="relative h-80 md:h-96">
                <Image src="/images/gallery/termo-05.webp" alt="Tehnician cu echipament de protecție aplicând spumă poliuretanică" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Sun className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Snowflake className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA bandă */}
        <section className="relative py-16 md:py-20 bg-[#1A1D21] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gallery/termo-07.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-6">
              IsoThermLux oferă servicii de termoizolare în toată Moldova, cu echipe mobile și echipamente profesionale.
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* Unde se aplica + galerie */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Unde se poate aplica termoizolația cu spumă poliuretanică?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-foreground/80 mb-4">
                  IsoThermLux aplică termoizolația eficient în întreaga țară, pe toate tipurile de suprafețe:
                </p>
                <ul className="space-y-2 mb-6">
                  {undeSeAplica.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground/80">
                      <span className="text-accent">•</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/70 mb-2">Vrei să vezi cum arată o termoizolație reușită?</p>
                <Link href="/portofoliu" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                  Vezi portofoliul nostru de lucrări recente <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {galleryThumbs.map((src) => (
                  <div key={src} className="relative aspect-square">
                    <Image src={src} alt="Lucrare de termoizolare IsoThermLux" fill sizes="200px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ce tip de spuma folosim */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-center text-accent">Ce tip de spumă folosim?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tipuriSpuma.map(({ image, title, desc }) => (
                <div key={title}>
                  <div className="relative h-48 mb-4">
                    <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" />
                  </div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA bandă 2 */}
        <section className="relative py-16 md:py-20 bg-[#1A1D21] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gallery/termo-21.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-6">
              Vrei să afli cât te costă o termoizolare cu spumă la casa sau hala ta?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* Cat economisesti */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-64 md:h-96 mb-10 overflow-hidden">
              <Image src="/images/hero-family-thermostat.png" alt="Pierderi de căldură vs. casă izolată" fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
              <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 font-semibold text-accent text-sm md:text-base">
                ~ 40% pierderi de căldură
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Cât economisești cu o termoizolare eficientă?</h2>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-3xl">
              Un acoperiș termoizolat corect poate reduce cu până la 40% pierderile de căldură. În locuri de vară, spuma poliuretanică păstrează temperatura interioară constantă la prețuri. Pe termen lung, investiția este amortizată prin economiile la factura de energie.
            </p>
            <p className="text-foreground/70 text-sm mb-4">Vrei să afli toate opțiunile de plată, inclusiv cea în rate?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Plata în rate toată țara
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
                <Image src="/images/gallery/termo-22.webp" alt="Tehnician IsoThermLux aplicând spumă poliuretanică" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-10 max-w-3xl">
              Dacă vrei o casă mai călduroasă iarna și mai răcoroasă vara, fără costuri urcate la întreținere, termoizolarea cu spumă poliuretanică este alegerea ideală. Începe chiar azi călătoria către un confort mai mare, eficiență și economie. Energie salvată. Bani economisiți. Confort garantat.
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
