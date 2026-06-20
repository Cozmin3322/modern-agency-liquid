import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServiceHighlights } from "@/components/service-highlights"
import { PremiumServices } from "@/components/premium-services"
import { StatsBar } from "@/components/stats-bar"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { CoverageMoldova } from "@/components/coverage-moldova"
import { PricingOffers } from "@/components/pricing-offers"
import { BrandLogos } from "@/components/brand-logos"
import { Reviews } from "@/components/reviews"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight } from "lucide-react"

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IsoThermLux',
  url: 'https://www.isothermlux.md',
  description: 'Servicii profesionale de termoizolare și hidroizolare în Moldova',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.isothermlux.md/blog?search={search_term_string}' },
    query_input: 'required name=search_term_string'
  }
}

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Script id="website-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <Header />

      {/* 1. Hero */}
      <Hero />

      {/* 1b. Servicii rapide (3 carduri) */}
      <ServiceHighlights />

      {/* 2. Servicii concrete */}
      <PremiumServices />

      {/* 2b. Statistici */}
      <StatsBar />

      {/* 3. De ce noi — cifre + beneficii */}
      <Philosophy />

      {/* 4. Proiecte recente */}
      <Projects />

      {/* 4b. Acoperire + județe */}
      <CoverageMoldova />

      {/* 4c. Oferte / Prețuri */}
      <PricingOffers />

      {/* 4d. Branduri parteneri */}
      <BrandLogos />

      {/* 5. Recenzii clienți */}
      <Reviews />

      {/* 6. Calculator rapid */}
      <section className="py-12 md:py-20 md:py-28 border-b border-border section-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Estimare rapidă</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight mb-4">
                Cât costă<br />serviciul tău?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Calculatorul nostru îți oferă o estimare în 2 minute. Oferta exactă se stabilește gratuit, la fața locului.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/calculator-oferta"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-3">
                Deschide Calculatorul <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+37378370243"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-none font-medium hover:border-accent hover:text-accent transition-all duration-300">
                Sau sună direct: +373 78 370 243
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Formular contact */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* 8b. Locație / Hartă */}
      <LocationMap />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. CTA final */}
      <CallToAction />

      <Footer />
    </main>
  )
}
