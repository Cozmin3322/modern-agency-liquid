import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Home, Building2, Warehouse, Container, Truck, Wrench, Wheat, Thermometer, Droplets, Wind, FileText, Calculator, HardHat, Zap } from "lucide-react"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Termoizolare Profesională Moldova | Economie 40-50% la Energie | IsoThermLux",
  description:
    "Termoizolare profesională cu spumă poliuretanică în Moldova. Economie 40-50% la energie. Garanție 25 ani scrisă. 12 ani experiență. Consultație gratuită Chișinău.",
  keywords:
    "termoizolare Moldova, termoizolare Chișinău, izolare termică, spumă poliuretanică Moldova, termoizolare casă, economie energie Moldova",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare" },
  openGraph: {
    title: "Termoizolare Profesională | Economie 40-50% la Energie | IsoThermLux",
    description:
      "Termoizolare profesională cu spumă poliuretanică. Economie 40-50% la energie. Garanție 25 ani scrisă. 12 ani experiență.",
    url: "https://www.isothermlux.md/termoizolare",
    locale: "ro_MD",
    type: "website",
  },
}

const tipuriTermoizolare = [
  { href: "/termoizolare/mansarda", Icon: Home, title: "Mansardă", desc: "Izolare termică profesională a mansardelor. Spațiu locuibil cald iarna, răcoros vara." },
  { href: "/termoizolare/casa", Icon: Home, title: "Casă Completă", desc: "Izolare acoperiș, pereți exteriori și fundație. Confort maxim, economie 40-50%." },
  { href: "/termoizolare/hala-industriala", Icon: Warehouse, title: "Hale Industriale", desc: "Izolație termică pentru hale, depozite și clădiri comerciale. Aplicare 300 m²/zi." },
  { href: "/termoizolare/acoperis", Icon: Building2, title: "Acoperiș și Terasă", desc: "Terase plate, șarpante, table ondulate. Eliminăm condensul și pierderile prin acoperiș." },
  { href: "/termoizolare/cisterne", Icon: Container, title: "Cisterne și Rezervoare", desc: "Cisterne de combustibil, apă, alimente. Spumă cu celule închise — impermeabilă." },
  { href: "/termoizolare/containere", Icon: Container, title: "Containere", desc: "Containere frigorifice, de depozitare sau locuibile. Soluție completă în 1 zi." },
  { href: "/termoizolare/camioane", Icon: Truck, title: "Camioane și Vehicule", desc: "Caroserii izoterme, dube, remorci frigorifice. Greutate minimă, eficiență maximă." },
  { href: "/termoizolare/fundatie", Icon: Building2, title: "Fundație și Subsol", desc: "Socluri, pereți subterani, plăci de beton. Elimini umezeala și puntea termică." },
  { href: "/termoizolare/garaj", Icon: Wrench, title: "Garaj și Atelier", desc: "Garaje metalice sau zidărie, ateliere auto. Confortabil tot parcursul anului." },
  { href: "/termoizolare/ferma", Icon: Wheat, title: "Ferme Agricole", desc: "Grajduri, hale avicole, sere, depozite agricole. Animale sănătoase, costuri reduse." },
  { href: "/termoizolare/conducte", Icon: Thermometer, title: "Conducte și Instalații", desc: "Conducte termice, sanitare, industriale. Fără rosturi, fără punți termice." },
]

const conditiiAplicare = [
  { Icon: Thermometer, title: "Temperatura", desc: "Temperatura minimă +5°C pentru aplicare și întărire corectă a materialului." },
  { Icon: Droplets, title: "Umiditate", desc: "Suprafața trebuie să fie uscată și curată. NU se aplică pe suprafețe înghețate sau umede." },
  { Icon: Wind, title: "Ventilație", desc: "Spațiile închise trebuie aerisite corespunzător pentru a elimina vaporii de aplicare." },
  { Icon: Wrench, title: "Preparare Suprafață", desc: "Îndepărtați praf, vopsea desprinsă și alte impurități. Spuma aderă direct pe beton și lemn curat." },
]

const deIsoThermLux = [
  { Icon: FileText, title: "Garanție Scrisă 25 Ani", desc: "Contract legal pentru fiecare proiect. Protecția dumneavoastră este prioritate noastră." },
  { Icon: Zap, title: "Economie 40-50% la Energie", desc: "Factură de gaz mai mică. Investiția se recuperează în 2-3 ani cu economii reale." },
  { Icon: Calculator, title: "Calculator Ofertă Online", desc: "Estimare preț exactă în 2 minute. Vezi calculul complet al economiilor anuale." },
  { Icon: HardHat, title: "Consultație Gratuită pe Loc", desc: "Echipă profesionistă analizează proprietatea și oferă recomandări personalizate." },
]

export default function TermoizolarePage() {
  return (
    <>
      <script id="termoizolare-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Servicii de Termoizolare", description: "Servicii profesionale de termoizolare cu izolație termică de calitate. Economie 40-50% la energie. Garanție 25 ani. Aplicare în 1-2 zile.", provider: { "@type": "LocalBusiness", name: "IsoThermLux", url: "https://www.isothermlux.md" }, areaServed: "MD", availableLanguage: "ro" }) }} />
      <script id="termoizolare-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Termoizolare Profesională", provider: { "@type": "LocalBusiness", name: "IsoThermLux", telephone: "+37378370243", address: { "@type": "PostalAddress", addressLocality: "Chișinău", addressCountry: "MD" } }, areaServed: "Moldova", description: "Servicii profesionale de termoizolare cu spumă poliuretanică. Garanție 25 ani.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } }) }} />
      <script id="breadcrumb-termoizolare" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: "https://www.isothermlux.md" }, { "@type": "ListItem", position: 2, name: "Termoizolare", item: "https://www.isothermlux.md/termoizolare" }] }) }} />
      <Header />
      <main className="bg-background">
        <ServiceHero
          backgroundImage="/images/termoizolare-hero.webp"
          title="Termoizolare Profesională"
          titleAccent="în Moldova — Economie 40-50% la Energie"
          subtitle="Izolație termică profesională cu spumă poliuretanică în Chișinău, Moldova, cu economie confirmată de 40-50% la costuri de energie. Materiale premium ISO 9001, garanție 25 ani scrisă, echipă certificată cu 12 ani experiență."
          ctaHref="tel:+37378370243"
          ctaLabel="Consultație Gratuită"
          ctaSecondaryHref="/portofoliu?tip=termoizolare"
          ctaSecondaryLabel="Vezi Portofoliu"
        />

        {/* Beneficii */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Beneficiile Termoizolării</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid gap-6">
                {[
                  { title: "40-50% Economie la Energie", desc: "Reducere confirmată a costurilor de gaz și electricitate. Investiția se recuperează în 2-3 ani." },
                  { title: "Garanție 25 Ani", desc: "Garanție scrisă material și manopera. Protecție completă a investiției dumneavoastră." },
                  { title: "Materiale Premium", desc: "Izolație termică certificată ISO 9001. Fără compromiuri la calitate și durabilitate." },
                  { title: "Aplicare Rapidă", desc: "Montaj în 1-2 zile. Minimal disrupting pentru locuința sau biroul dumneavoastră." },
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg bg-background">
                    <Check className="w-6 h-6 text-accent mb-3" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/beneficii-termoizolare.webp" alt="Termoizolare profesională casă cu spumă poliuretanică Chișinău Moldova" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Tipuri */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4">Tipuri de Termoizolare</h2>
            <p className="text-foreground/60 mb-12 max-w-2xl">Izolăm orice tip de construcție sau obiect cu spumă poliuretanică — cu celule deschise sau închise, în funcție de necesități.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {tipuriTermoizolare.map(({ href, Icon, title, desc }) => (
                <Link key={href} href={href} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition group">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-4 group-hover:border-accent group-hover:text-accent transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition">{title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{desc}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm">Detalii <ArrowRight className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Zone Tehnice */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4">Zone Tehnice de Aplicare</h2>
            <p className="text-foreground/70 mb-12 max-w-3xl">Selectați tipul de izolație termoizolării în funcție de zona și condițiile specifice ale proprietății dumneavoastră.</p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-6 py-4 text-left font-semibold">Zonă</th>
                    <th className="px-6 py-4 text-left font-semibold">Tip Spumă Recomandat</th>
                    <th className="px-6 py-4 text-left font-semibold">Grosime Uzuală</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Acoperiș interior", "Celule deschise / închise", "10–15 cm"],
                    ["Pereți interiori", "Celule deschise", "5–8 cm"],
                    ["Pereți exteriori", "Celule închise", "5–10 cm"],
                    ["Subsoluri și beciuri", "Celule închise", "5–10 cm"],
                    ["Tavane / planșee", "Celule închise", "5–8 cm"],
                    ["Spații comerciale / industriale", "Celule închise", "4–10 cm"],
                  ].map(([zona, tip, grosime], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary"}>
                      <td className="px-6 py-4 font-medium text-foreground">{zona}</td>
                      <td className="px-6 py-4 text-foreground/80">{tip}</td>
                      <td className="px-6 py-4 text-foreground/80">{grosime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detalii Tehnice */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Detalii Tehnice</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  ["Conductivitate Termică", "λ = 0.020–0.025 W/m·K"],
                  ["Aderență Directă Pe", "Lemn, beton, cărămidă, tablă"],
                  ["Capacitate de Aplicare", "Până la 300 m²/zi"],
                  ["Durată de Viață", "Peste 25 ani fără întreținere"],
                ].map(([label, val], i) => (
                  <div key={i} className="p-6 border-l-4 border-accent bg-card">
                    <p className="text-sm text-muted-foreground mb-2">{label}</p>
                    <p className="text-xl font-semibold text-foreground">{val}</p>
                  </div>
                ))}
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3"><span className="w-2 h-8 bg-accent" />De Ce Alegem Spuma Poliuretanică?</h3>
                <ul className="space-y-4 text-foreground/80">
                  {["Conductivitate termică minimă - cel mai bun raport izolare/grosime", "Aderență perfect pe orice suprafață fără preparare specială", "Etanșare totală - fără punți termice sau infiltrații", "Durabilitate extremă - nu se degradează sau se tasează", "Garanție 25 ani - cea mai lungă pe piață"].map((text, i) => (
                    <li key={i} className="flex gap-3"><Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span>{text}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Condiții de Aplicare */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Condiții de Aplicare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {conditiiAplicare.map(({ Icon, title, desc }) => (
                <div key={title} className="p-8 border border-border rounded-lg hover:border-accent transition bg-background">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* De Ce IsoThermLux */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">De Ce IsoThermLux?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {deIsoThermLux.map(({ Icon, title, desc }) => (
                <div key={title} className="p-8 bg-card border-2 border-border rounded-lg hover:border-accent transition text-center">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
                  <p className="text-sm text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procesul Nostru */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Procesul Nostru</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[["1", "Consultație Gratuită", "Analiză completă pe loc și recomandări"], ["2", "Ofertă Personalizată", "Estimare exactă și plan de lucru"], ["3", "Implementare Profesională", "Echipă certificată și materiale premium"], ["4", "Garanție 25 Ani", "Protecție completă a investiției"]].map(([nr, title, desc]) => (
                <div key={nr} className="text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">{nr}</div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2C3E50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Gata pentru Termoizolare?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Consultație gratuită fără angajamente. Estimare preț pe loc. Răspuns în 30 minute.</p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Contactează-ne Acum<ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
