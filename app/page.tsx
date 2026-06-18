import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PremiumServices } from "@/components/premium-services"
import { Projects } from "@/components/projects"
import Reviews from "@/components/reviews"
import { CoverageMoldova } from "@/components/coverage-moldova"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Script from "next/script"

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IsoThermLux',
  url: 'https://www.isothermlux.md',
  description: 'Servicii profesionale de termoizolare și hidroizolare în Moldova',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.isothermlux.md/blog?search={search_term_string}'
    },
    query_input: 'required name=search_term_string'
  }
}

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <Header />
      <Hero />
      <PremiumServices />
      
      {/* Calculator Promo Section */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Calcul Rapid</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">Cât Costă Serviciul?</h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Folosește calculatorul nostru rapid pentru a obține o estimare aproximativă. Oferta exactă se determină după evaluare gratuită pe loc.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center gap-2 bg-accent text-background px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Deschide Calculator Rapid →
          </Link>
        </div>
      </section>
      
      <Projects />
      <Reviews />
      <CoverageMoldova />
      <div id="contact-form">
        <ContactForm />
      </div>
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}

