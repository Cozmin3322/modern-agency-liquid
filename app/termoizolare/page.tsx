import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { serviceSchema, breadcrumbSchema } from "@/lib/schema"
import { ServiceHero } from "@/components/service-hero"

const termoizolareServiceSchema = serviceSchema(
  'Termoizolare',
  'Servicii profesionale de termoizolare cu izolație termică de calitate. Economie 40-50% la energie. Garanție 25 ani. Aplicare în 1-2 zile.'
)

export const metadata: Metadata = {
  title: "Termoizolare Profesională Moldova | Economie 40-50% la Energie | IsoThermLux",
  description: "Termoizolare profesională cu spumă poliuretanică în Moldova. Economie 40-50% la energie. Garanție 25 ani scrisă. 12 ani experiență. Consultație gratuită Chișinău.",
  keywords: "termoizolare Moldova, termoizolare Chișinău, izolare termică, spumă poliuretanică Moldova, termoizolare casă, economie energie Moldova",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare" },
  openGraph: {
            title: "Termoizolare Profesională | Economie 40-50% la Energie | IsoThermLux",
            description: "Termoizolare profesională cu spumă poliuretanică. Economie 40-50% la energie. Garanție 25 ani scrisă. 12 ani experiență.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare",
  },
}

export default function TermoizolarePage() {
  return (
    <>
      <Script
        id="termoizolare-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termoizolareServiceSchema),
        }}
      />
      <Script
        id="termoizolare-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Termoizolare Profesională",
            "provider": {
              "@type": "LocalBusiness",
              "name": "IsoThermLux",
      "telephone": "+37378370243",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chișinău",
                "addressCountry": "MD"
              }
            },
            "areaServed": "Moldova",
            "description": "Servicii profesionale de termoizolare cu spumă poliuretanică. Garanție 25 ani.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          }),
        }}
      />
      <Script
        id="breadcrumb-termoizolare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Acasă', url: 'https://www.isothermlux.md' },
            { name: 'Termoizolare', url: 'https://www.isothermlux.md/termoizolare' }
          ])),
        }}
      />
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
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

        {/* Benefits Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Beneficiile Termoizolării</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid gap-6">
                {[
                  {
                    title: "40-50% Economie la Energie",
                    description: "Reducere confirmată a costurilor de gaz și electricitate. Investiția se recuperează în 2-3 ani."
                  },
                  {
                    title: "Garanție 25 Ani",
                    description: "Garanție scrisă material și manopera. Protecție completă a investiției dumneavoastră."
                  },
                  {
                    title: "Materiale Premium",
                    description: "Izolație termică certificată ISO 9001. Fără compromiuri la calitate și durabilitate."
                  },
                  {
                    title: "Aplicare Rapidă",
                    description: "Montaj în 1-2 zile. Minimal disrupting pentru locuința sau biroul dumneavoastră."
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="p-6 border border-border rounded-lg bg-background">
                    <Check className="w-6 h-6 text-accent mb-3" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/beneficii-termoizolare.webp"
                  alt="Termoizolare profesională casă cu spumă poliuretanică Chișinău Moldova"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Termoizolare</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mansarda",
                  description: "Izolare termică profesională a mansardelor. Spațiu locuibil cald în iarna.",
                  link: "/termoizolare/mansarda"
                },
                {
                  title: "Casa Completa",
                  description: "Izolare acoperis, pereti exteriori și fundație. Confort maxim.",
                  link: "/termoizolare/casa"
                },
                {
                  title: "Hale Industriale",
                  description: "Izolație termică pentru hale, depozite și clădiri comerciale.",
                  link: "/termoizolare/hala-industriala"
                }
              ].map((service, idx) => (
                <Link key={idx} href={service.link} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition group">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent">
                    Detalii <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Zones Table Section */}
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
                    { zona: "Acoperiș interior", tip: "Celule deschise / închise", grosime: "10–15 cm" },
                    { zona: "Pereți interiori", tip: "Celule deschise", grosime: "5–8 cm" },
                    { zona: "Pereți exteriori", tip: "Celule închise", grosime: "5–10 cm" },
                    { zona: "Subsoluri și beciuri", tip: "Celule închise", grosime: "5–10 cm" },
                    { zona: "Tavane / planșee", tip: "Celule închise", grosime: "5–8 cm" },
                    { zona: "Spații comerciale / industriale", tip: "Celule închise", grosime: "4–10 cm" }
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-secondary"}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.zona}</td>
                      <td className="px-6 py-4 text-foreground/80">{row.tip}</td>
                      <td className="px-6 py-4 text-foreground/80">{row.grosime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Detalii Tehnice</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  {
                    label: "Conductivitate Termică",
                    value: "λ = 0.020–0.025 W/m·K"
                  },
                  {
                    label: "Aderență Directă Pe",
                    value: "Lemn, beton, cărămidă, tablă"
                  },
                  {
                    label: "Capacitate de Aplicare",
                    value: "Până la 300 m²/zi"
                  },
                  {
                    label: "Durată de Viață",
                    value: "Peste 25 ani fără întreținere"
                  }
                ].map((tech, idx) => (
                  <div key={idx} className="p-6 border-l-4 border-accent bg-card">
                    <p className="text-sm text-muted-foreground mb-2">{tech.label}</p>
                    <p className="text-xl font-semibold text-foreground">{tech.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-accent"></span>
                  De Ce Alegem Spuma Poliuretanică?
                </h3>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Conductivitate termică minimă - cel mai bun raport izolare/grosime</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Aderență perfect pe orice suprafață fără preparare specială</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Etanșare totală - fără punți termice sau infiltrații</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Durabilitate extremă - nu se degradează sau se tasează</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Garanție 25 ani - cea mai lungă pe piață</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Conditions Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Condiții de Aplicare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🌡️",
                  title: "Temperatura",
                  description: "Temperatura minimă +5°C pentru aplicare și întărire corectă a materialului."
                },
                {
                  icon: "💧",
                  title: "Umiditate",
                  description: "Suprafața trebuie să fie uscată și curată. NU se aplică pe suprafețe înghețate sau umede."
                },
                {
                  icon: "💨",
                  title: "Ventilație",
                  description: "Spațiile închise trebuie aerisite corespunzător pentru a elimina vaporii de aplicare."
                },
                {
                  icon: "🔧",
                  title: "Preparare Suprafață",
                  description: "Îndepărtați praf, vopsea desprinsă și alte impurități. Spuma aderă direct pe beton și lemn curat."
                }
              ].map((condition, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-accent transition bg-background">
                  <div className="text-4xl mb-4">{condition.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{condition.title}</h3>
                  <p className="text-foreground/70">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Advantages Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">De Ce IsoThermLux?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Garanție Scrisă 25 Ani",
                  description: "Contract legal pentru fiecare proiect. Protecția dumneavoastră este prioritate noastră.",
                  icon: "📋"
                },
                {
                  title: "Economie 40-50% la Energie",
                  description: "Factură de gaz mai mică. Investiția se recuperează în 2-3 ani cu economii reale.",
                  icon: "💰"
                },
                {
                  title: "Calculator Ofertă Online",
                  description: "Estimare preț exactă în 2 minute. Vezi calculul complet al economiilor anuale.",
                  icon: "🧮"
                },
                {
                  title: "Consultație Gratuită pe Loc",
                  description: "Echipă profesionistă analizează proprietatea și oferă recomandări personalizate.",
                  icon: "👷"
                }
              ].map((advantage, idx) => (
                <div key={idx} className="p-8 bg-card border-2 border-border rounded-lg hover:border-accent transition text-center">
                  <div className="text-5xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{advantage.title}</h3>
                  <p className="text-sm text-foreground/70">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Procesul Nostru</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultație Gratuită", desc: "Analiză completă pe loc și recomandări" },
                { step: "2", title: "Ofertă Personalizată", desc: "Estimare exactă și plan de lucru" },
                { step: "3", title: "Implementare Profesională", desc: "Echipă certificată și materiale premium" },
                { step: "4", title: "Garanție 25 Ani", desc: "Protecție completă a investiției" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#2C3E50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Gata pentru Termoizolare?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Consultație gratuită fără angajamente. Estimare preț pe loc. Răspuns în 30 minute.
            </p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Contactează-ne Acum
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
