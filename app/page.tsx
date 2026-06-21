import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServiceHighlights } from "@/components/service-highlights"
import { StatsBar } from "@/components/stats-bar"
import { AboutDark } from "@/components/about-dark"
import { CoverageMoldova } from "@/components/coverage-moldova"
import { PricingOffers } from "@/components/pricing-offers"
import { Reviews } from "@/components/reviews"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import Script from "next/script"

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
      <RevealOnScroll><ServiceHighlights /></RevealOnScroll>

      {/* 2b. Statistici */}
      <RevealOnScroll><StatsBar /></RevealOnScroll>

      {/* 3. Despre noi */}
      <RevealOnScroll><AboutDark /></RevealOnScroll>

      {/* 4b. Acoperire + județe */}
      <RevealOnScroll><CoverageMoldova /></RevealOnScroll>

      {/* 4c. Oferte / Prețuri */}
      <RevealOnScroll><PricingOffers /></RevealOnScroll>

      {/* 5. Recenzii clienți */}
      <RevealOnScroll><Reviews /></RevealOnScroll>

      {/* 8. Formular contact */}
      <RevealOnScroll>
        <div id="contact-form">
          <ContactForm />
        </div>
      </RevealOnScroll>

      {/* 8b. Locație / Hartă */}
      <RevealOnScroll><LocationMap /></RevealOnScroll>

      <Footer />
    </main>
  )
}
