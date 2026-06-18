import { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Despre IsoThermLux | Echipa Profesionistă | 12 Ani Experiență",
  description: "Despre IsoThermLux - Companie de termoizolare și hidroizolare cu 12 ani experiență. 500+ proiecte. Echipă certificată. Garanție 25 ani.",
  keywords: "despre noi, echipa IsoThermLux, experiență, certificări, misiune",
  canonical: "https://www.isothermlux.md/despre-noi",
  openGraph: {
    title: "Despre IsoThermLux | 12 Ani Experiență Termoizolare",
    description: "IsoThermLux - Experți în termoizolare și hidroizolare cu 500+ proiecte și garanție 25 ani.",
    type: "website",
    locale: "ro_RO",
    url: "https://www.isothermlux.md/despre-noi",
  },
}

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IsoThermLux',
    description: 'Experți în termoizolare și hidroizolare cu 12 ani de experiență',
    foundingDate: '2012',
    numberOfEmployees: '15',
    areaServed: 'MD',
  }

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <Header />
      <main className="bg-background">
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-serif font-medium mb-8">Despre <span className="text-accent">IsoThermLux</span></h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl">
              IsoThermLux este o companie cu 12 ani de experiență în domeniul termoizolării și hidroizolării în Moldova. Am finalizat peste 500 de proiecte de calitate, cu echipă certificată și materiale premium.
            </p>
          </div>
        </section>

        {/* Cine Suntem cu Imagine */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">Cine Suntem</h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  IsoThermLux este compania de referință în industria izolației termice și hidroizolării din Moldova. Misiunea noastră este să oferim soluții de calitate superioară care măresc confortul și eficiența energetică a caselor tale.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Folosim exclusiv spumă poliuretanică certificată ISO 9001 și tehnologie de ultimă generație. Fiecare proiect este executat cu atenție la detalii și profesionalism.
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">Garanție scrisă de 25 de ani</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">500+ clienți satisfăcuți</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">Certificări internaționale</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/about-spray-foam.jpg"
                  alt="Tehnician IsoThermLux aplicand spuma poliuretanica pe perete"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Valorile Noastre</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-card border border-border rounded-lg">
                <Award className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Calitate Premium</h3>
                <p className="text-foreground/70">Materiale certificate ISO 9001. Garanție 25 ani. Fără compromiuri pe calitate.</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-lg">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Profesionalism</h3>
                <p className="text-foreground/70">Echipă certificată cu 12+ ani experiență. Servicii complete și oneste.</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-lg">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Satisfacție Client</h3>
                <p className="text-foreground/70">100% dedicație. Consultații gratuite. Suport permanent post-lucru.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Echipa Noastră</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Ion Popescu</h3>
                <p className="text-foreground/70 mb-2">Director & Specialist Termoizolare</p>
                <p className="text-sm text-accent font-semibold">12 ani experiență</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Andrei Vasile</h3>
                <p className="text-foreground/70 mb-2">Specialist Hidroizolare</p>
                <p className="text-sm text-accent font-semibold">10 ani experiență</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Elena Munteanu</h3>
                <p className="text-foreground/70 mb-2">Manager Proiecte</p>
                <p className="text-sm text-accent font-semibold">8 ani experiență</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Gata să Lucrezi cu Noi?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Contactează echipa IsoThermLux pentru o consultație gratuită și ofertă personalizată.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:++37378370243"
                className="inline-flex items-center justify-center gap-2 bg-accent text-background px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Sună Acum
              </a>
              <a
                href="/calculator-oferta"
                className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Calculator Ofertă
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

