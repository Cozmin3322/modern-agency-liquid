import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, Droplet, ClipboardCheck, Microscope, UserCheck, Construction, Wind, Thermometer, Building2, Home } from "lucide-react"
import { serviceSchema, breadcrumbSchema } from "@/lib/schema"
import { ServiceHero } from "@/components/service-hero"

const hidroizolareServiceSchema = serviceSchema(
  'Hidroizolare',
  'Servicii profesionale de hidroizolare pentru protecție contra infiltrațiilor de apă. Impermeabilizare acoperis, fundație, subsol. Garanție 25 ani.'
)

export const metadata: Metadata = {
  title: "Hidroizolare Profesională Moldova | Protecție 25 Ani | IsoThermLux",
  description: "Hidroizolare profesională cu spumă poliuretanică în Moldova. Protecție completă fundații, subsoluri, acoperișuri. Garanție 25 ani scrisă. Consultație gratuită Chișinău.",
  keywords: "hidroizolare Moldova, hidroizolare Chișinău, impermeabilizare fundație, hidroizolare acoperiș, protecție umiditate Moldova, hidroizolare subsol, spumă poliuretanică hidroizolare",
  alternates: { canonical: "https://www.isothermlux.md/hidroizolare" },
  openGraph: {
    title: "Hidroizolare Profesională | Protecție 25 Ani | IsoThermLux",
    description: "Hidroizolare cu spumă poliuretanică. Garanție 25 ani scrisă. Protecție fundații, subsoluri, acoperișuri. Chișinău, Moldova.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/hidroizolare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidroizolare Profesională | Protecție 25 Ani | IsoThermLux",
    description: "Hidroizolare cu spumă poliuretanică. Garanție 25 ani scrisă. Protecție fundații, subsoluri, acoperișuri. Chișinău, Moldova.",
  }
}

export default function HidroizolarePage() {
  return (
    <>
      <Script
        id="hidroizolare-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hidroizolareServiceSchema),
        }}
      />
      <Script
        id="hidroizolare-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Hidroizolare Profesională",
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
            "description": "Servicii profesionale de hidroizolare cu spumă poliuretanică. Garanție 25 ani scrisă.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          }),
        }}
      />
      <Script
        id="breadcrumb-hidroizolare"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Acasă', url: 'https://www.isothermlux.md' },
            { name: 'Hidroizolare', url: 'https://www.isothermlux.md/hidroizolare' }
          ])),
        }}
      />
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <ServiceHero
          backgroundImage="/images/hidroizolare-hero.webp"
          title="Hidroizolare Profesională"
          titleAccent="în Moldova — Protecție 25 Ani"
          subtitle="Protecție completă împotriva infiltrațiilor de apă în Chișinău, Moldova. Impermeabilizare profesională pentru fundații, subsoluri și acoperișuri. Garanție 25 ani scrisă, echipă certificată cu 14 ani experiență."
          ctaHref="tel:+37378370243"
          ctaLabel="Consultație Gratuită"
          ctaSecondaryHref="/portofoliu?tip=hidroizolare"
          ctaSecondaryLabel="Vezi Portofoliu"
        />

        {/* Benefits Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">De Ce Hidroizolare?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Protecție Completă",
                  description: "Protecție completă împotriva infiltrațiilor de apă și umidității. Durabilitate garantată 25 ani."
                },
                {
                  title: "Garanție 25 Ani",
                  description: "Garanție scrisă material și manopera. Protecție completă a investiției."
                },
                {
                  title: "Materiale Premium",
                  description: "Materiale profesionale certificate. Rezistență la temperaturi extreme."
                },
                {
                  title: "Aplicare Rapidă",
                  description: "Montaj eficient fără disruption majoră. Soluții personalizate pentru fiecare proiect."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg">
                  <Check className="w-6 h-6 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Hidroizolare</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fundație",
                  description: "Protecție profesională a fundației împotriva infiltrațiilor de apă din pământ.",
                  link: "/hidroizolare/fundatie"
                },
                {
                  title: "Acoperis",
                  description: "Impermeabilizare completă a acoperișului. Protecție la ploaie și zăpadă.",
                  link: "/hidroizolare/acoperis"
                },
                {
                  title: "Subsol",
                  description: "Protecție subsol și pereti subterani. Spațiu uscat și locuibil.",
                  link: "/hidroizolare/subsol"
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

        {/* Când este necesară hidroizolarea? Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Când este necesară hidroizolarea?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Construirea unei noi locuințe sau renovarea uneia existente — pentru a preveni infiltrațiile de apă și a proteja structura.",
                  "Izolarea fundațiilor sau subsolurilor — pentru a preveni pătrunderea apei în zonele cele mai sensibile ale clădirii.",
                  "Renovarea sau repararea acoperișurilor — pentru a asigura impermeabilitatea și a proteja interiorul de infiltrații.",
                  "Înlocuirea sistemelor de drenaj vechi sau ineficiente.",
                  "Prevenirea condensului în construcțiile comerciale."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Beneficii Imediate</h3>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Protecție 100% împotriva infiltrațiilor
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Durată de viață a clădirii extinsă
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Prevenirea problemelor de umiditate și mucegai
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Valoarea proprietății crescută
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Garanție 25 ani scrisă
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ce include serviciul Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Ce include serviciul</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Aplicarea Mecanizată",
                  description: "Aplicarea mecanizată a spumei poliuretanice pe suprafețe verticale sau orizontale cu echipament profesional."
                },
                {
                  title: "Etanșare Completă",
                  description: "Etanșarea completă a rosturilor și eliminarea punților de apă pentru impermeabilitate totală."
                },
                {
                  title: "Pregătirea Suprafețelor",
                  description: "Curățarea și pregătirea suprafețelor pentru aderență optimă și performanță maximă."
                },
                {
                  title: "Protecția Spațiului",
                  description: "Pregătirea spațiului: acoperirea geamurilor și suprafețelor cu folie de protecție înainte de aplicare."
                }
              ].map((service, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-secondary p-8 rounded-lg border border-border">
              <p className="text-foreground/80">
                Utilizați <Link href="/calculator-oferta" className="text-accent font-semibold hover:underline">calculatorul ofertă</Link> pentru a estima costul exact al serviciilor de hidroizolare pentru proprietatea dumneavoastră. Consultați și <Link href="/portofoliu?tip=hidroizolare" className="text-accent font-semibold hover:underline">portofoliu proiecte</Link> de hidroizolare finalizate cu succes.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Zones Table Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4">Zone Tehnice de Aplicare</h2>
            <p className="text-foreground/70 mb-12 max-w-3xl">Selectați tipul de izolație hidroizolării în funcție de zona și condițiile specifice ale proprietății dumneavoastră.</p>
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="px-6 py-4 text-left font-semibold">Zonă</th>
                    <th className="px-6 py-4 text-left font-semibold">Tip spumă recomandat</th>
                    <th className="px-6 py-4 text-left font-semibold">Grosime uzuală</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { zona: "Fundații", tip: "Celule închise", grosime: "5–10 cm" },
                    { zona: "Subsoluri și beciuri", tip: "Celule închise", grosime: "5–10 cm" },
                    { zona: "Acoperișuri", tip: "Celule închise", grosime: "5–10 cm" },
                    { zona: "Pereți exteriori", tip: "Celule închise", grosime: "5–10 cm" },
                    { zona: "Bazele clădirii", tip: "Celule închise", grosime: "5–10 cm" }
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

        {/* Detalii Tehnice Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Detalii Tehnice</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  {
                    label: "Aderență Directă Pe",
                    value: "Lemn, beton, cărămidă, tablă"
                  },
                  {
                    label: "Impermeabilitate",
                    value: "Previne 100% infiltrarea apei în structuri"
                  },
                  {
                    label: "Capacitate Aplicare",
                    value: "Până la 300 m²/zi"
                  },
                  {
                    label: "Durabilitate",
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
                  De Ce Spuma Poliuretanică pentru Hidroizolare?
                </h3>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Impermeabilitate absolută - 100% protecție împotriva apei</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Aderență perfectă pe orice suprafață fără preparare specială</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Etanșare totală - fără punți de apă sau infiltrații</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Durabilitate extremă - nu se degradează sau se crăpează</span>
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

        {/* Condiții de Aplicare Section */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Condiții de Aplicare</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Thermometer,
                  title: "Temperatura",
                  description: "Temperatura minimă +5°C pentru aplicare și întărire corectă a materialului."
                },
                {
                  icon: Droplet,
                  title: "Umiditate",
                  description: "Suprafața trebuie să fie uscată, curată și stabilă. NU se aplică pe suprafețe înghețate sau umede."
                },
                {
                  icon: Wind,
                  title: "Ventilație",
                  description: "Spațiile închise trebuie aerisite corespunzător pentru a elimina vaporii de aplicare."
                },
                {
                  icon: Construction,
                  title: "Stabilitate Structurală",
                  description: "Substratul trebuie să fie stabil și consolidat înainte de aplicare."
                }
              ].map((condition, idx) => (
                <div key={idx} className="p-8 border border-border rounded-lg hover:border-accent transition bg-background">
                  <condition.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{condition.title}</h3>
                  <p className="text-foreground/70">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce oferim suplimentar Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Ce oferim suplimentar</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  title: "Asistență Profesională",
                  description: "Alegerea tipului și grosimii de izolație pentru fiecare zonă.",
                  icon: UserCheck
                },
                {
                  title: "Verificare Umiditate",
                  description: "Diagnosticul complet al umidității și stării structurale.",
                  icon: Microscope
                },
                {
                  title: "Aplicare Versatilă",
                  description: "Posibilitatea aplicării în construcții existente și noi.",
                  icon: Building2
                },
                {
                  title: "Garanție Scrisă",
                  description: "Contract legal pentru 25 ani — material și manoperă.",
                  icon: ClipboardCheck
                },
                {
                  title: "Consultație Gratuită",
                  description: "Evaluare la fața locului și recomandări personalizate.",
                  icon: Home
                }
              ].map((offering, idx) => (
                <div key={idx} className="p-6 bg-card border-2 border-border rounded-lg hover:border-accent transition text-center">
                  <offering.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="text-base font-semibold mb-2 text-foreground">{offering.title}</h3>
                  <p className="text-xs text-foreground/70">{offering.description}</p>
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
                { step: "1", title: "Evaluare pe Loc", desc: "Diagnoza completă și recomandări" },
                { step: "2", title: "Ofertă Detaliată", desc: "Planul de lucru și estimare" },
                { step: "3", title: "Executie Profesionala", desc: "Echipă certificată și materiale premium" },
                { step: "4", title: "Garanție 25 Ani", desc: "Protecție completă" }
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
            <h2 className="text-4xl font-serif font-medium mb-6">Protejează-ți Locuința</h2>
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
