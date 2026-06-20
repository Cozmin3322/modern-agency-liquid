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
      <ServiceHighlights />

      {/* 2b. Statistici */}
      <StatsBar />

      {/* 3. Despre noi */}
      <AboutDark />

      {/* 4b. Acoperire + județe */}
      <CoverageMoldova />

      {/* 4c. Oferte / Prețuri */}
      <PricingOffers />

      {/* 5. Recenzii clienți */}
      <Reviews />

      {/* 8. Formular contact */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* 8b. Locație / Hartă */}
      <LocationMap />

      <Footer />
    </main>
  )
}
