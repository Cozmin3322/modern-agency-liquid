import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ArrowRight, Check, Droplets } from "lucide-react"
import { serviceSchema, breadcrumbSchema } from "@/lib/schema"

const hidroizolareServiceSchema = serviceSchema(
  'Hidroizolare',
  'Servicii profesionale de hidroizolare pentru protecție contra infiltrațiilor de apă. Impermeabilizare acoperis, fundație, subsol. Garanție 25 ani.'
)

export const metadata: Metadata = {
  title: "Hidroizolare cu Spumă Poliuretanică Moldova | Aplicare Profesională | IsoThermLux",
  description: "Hidroizolare profesională cu spumă poliuretanică celulă închisă în Moldova. Protecție completă fundații, subsoluri, acoperișuri. Garanție 25 ani scrisă.",
  keywords: "hidroizolare Moldova, hidroizolare Chișinău, impermeabilizare fundație, hidroizolare acoperiș, protecție umiditate Moldova, hidroizolare subsol, spumă poliuretanică",
  alternates: { canonical: "https://www.isothermlux.md/hidroizolare" },
  openGraph: {
    title: "Hidroizolare cu Spumă Poliuretanică | Aplicare Profesională | IsoThermLux",
    description: "Hidroizolare cu spumă poliuretanică celulă închisă. Garanție 25 ani scrisă. Protecție fundații, subsoluri, acoperișuri.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/hidroizolare",
  },
}

const undeSeAplica = [
  "Fundații și socluri",
  "Subsoluri și beciuri",
  "Acoperișuri și terase",
  "Pereți exteriori expuși umidității",
  "Bazine și piscine",
  "Hale industriale și depozite",
  "Conducte și instalații tehnice",
]

const galleryThumbs = [
  "/images/gallery/hidro-04.webp",
  "/images/gallery/hidro-06.webp",
  "/images/gallery/hidro-07.webp",
  "/images/gallery/hidro-09.webp",
  "/images/gallery/hidro-10.webp",
  "/images/gallery/hidro-11.webp",
  "/images/gallery/hidro-12.webp",
  "/images/gallery/hidro-13.webp",
  "/images/gallery/hidro-14.webp",
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

export default function HidroizolarePage() {
  return (
    <>
      <Script id="hidroizolare-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hidroizolareServiceSchema) }} />
      <Script id="breadcrumb-hidroizolare" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Acasă', url: 'https://www.isothermlux.md' },
        { name: 'Hidroizolare', url: 'https://www.isothermlux.md/hidroizolare' }
      ])) }} />
      <Header />
      <main className="bg-background">

        {/* Hero — bandă imagine + titlu sub ea */}
        <section className="relative pt-24">
          <div className="relative h-56 md:h-80 w-full">
            <Image src="/images/gallery/hidro-05.webp" alt="Aplicare hidroizolare cu spumă poliuretanică" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Droplets className="w-10 h-10 md:w-12 md:h-12 text-accent" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold leading-tight mb-2">
              Hidroizolare cu Spumă Poliuretanică
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium mb-6">
              Aplicare Profesională în Toată Moldova
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Infiltrațiile de apă afectează fundațiile, subsolurile și acoperișurile, ducând la mucegai, igrasie și degradarea structurii. Hidroizolarea cu spumă poliuretanică creează o membrană elastică, fără rosturi, complet impermeabilă, cu durată de viață de peste 25 de ani.
            </p>
          </div>
        </section>

        {/* Ce este hidroizolatia */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-64 md:h-96 mb-10 overflow-hidden">
              <Image src="/images/gallery/hidro-01.webp" alt="Aplicare hidroizolare la fundație" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Ce este hidroizolația cu spumă poliuretanică?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Hidroizolația cu spumă poliuretanică celulă închisă este o metodă modernă de a asigura protecție împotriva umezelii, infiltrațiilor de apă și a acțiunilor climatice extreme. Materialul se aplică prin pulverizare și se întărește în câteva secunde, formând un strat continuu, rigid și complet etanș.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Este recomandată pentru protecția clădirilor din beton, lemn, metal sau materiale compozite — clădiri civile, industriale sau agricole. Aderă direct la suprafață, fără rosturi sau cusături, eliminând orice posibilitate de infiltrare.
            </p>
          </div>
        </section>

        {/* Avantaje */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-accent">Avantajele hidroizolației cu spumă poliuretanică</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <ul className="space-y-3">
                  {[
                    "Impermeabilitate totală — 100% protecție împotriva apei",
                    "Aderență perfectă pe orice suprafață, fără rosturi",
                    "Elasticitate ridicată — acoperă fisuri și mișcări structurale",
                    "Rezistență la radiații UV și temperaturi extreme",
                    "Durabilitate peste 25 ani fără întreținere",
                    "Aplicare rapidă — uscare în câteva secunde",
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
                <Image src="/images/gallery/hidro-02.webp" alt="Tehnician aplicând hidroizolare cu spumă poliuretanică" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA bandă */}
        <section className="relative py-16 md:py-20 bg-[#1A1D21] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gallery/hidro-03.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-6">
              IsoThermLux oferă servicii de hidroizolare în toată Moldova, cu echipe mobile și echipamente profesionale.
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* Unde se aplica + galerie */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 text-accent">Unde se poate aplica hidroizolația cu spumă poliuretanică?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-foreground/80 mb-4">
                  IsoThermLux aplică hidroizolația eficient în întreaga țară, pe toate tipurile de suprafețe:
                </p>
                <ul className="space-y-2 mb-6">
                  {undeSeAplica.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground/80">
                      <span className="text-accent">•</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/70 mb-2">Vrei să vezi cum arată o hidroizolație reușită?</p>
                <Link href="/portofoliu" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                  Vezi portofoliul nostru de lucrări recente <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {galleryThumbs.map((src) => (
                  <div key={src} className="relative aspect-square">
                    <Image src={src} alt="Lucrare de hidroizolare IsoThermLux" fill sizes="200px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tipuri de hidroizolare */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-10 text-center text-accent">Tipuri de hidroizolare</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { image: "/images/gallery/hidro-15.webp", title: "Fundație", desc: "Protecție profesională a fundației împotriva infiltrațiilor de apă din pământ." },
                { image: "/images/gallery/hidro-16.webp", title: "Acoperiș", desc: "Impermeabilizare completă a acoperișului. Protecție la ploaie și zăpadă." },
                { image: "/images/gallery/hidro-17.webp", title: "Subsol", desc: "Protecție subsol și pereți subterani. Spațiu uscat și locuibil." },
              ].map(({ image, title, desc }) => (
                <div key={title} className="p-8 bg-background border border-border">
                  <div className="relative h-32 w-full mb-4 overflow-hidden">
                    <Image src={image} alt={title} fill sizes="300px" className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA bandă 2 */}
        <section className="relative py-16 md:py-20 bg-[#1A1D21] text-white text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/gallery/hidro-18.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-serif font-medium mb-6">
              Vrei să afli cât te costă o hidroizolare cu spumă poliuretanică la casa sau hala ta?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-semibold hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </div>
        </section>

        {/* De ce IsoThermLux */}
        <section className="py-16 md:py-20 bg-background">
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
                <Image src="/images/gallery/hidro-09.webp" alt="Tehnician IsoThermLux aplicând hidroizolare" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-10 max-w-3xl">
              Dacă vrei o locuință protejată complet de infiltrații și umiditate, fără costuri urcate la reparații, hidroizolarea cu spumă poliuretanică este alegerea ideală. Începe chiar azi călătoria către un spațiu uscat, sigur și durabil. Protecție garantată, fără griji.
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
