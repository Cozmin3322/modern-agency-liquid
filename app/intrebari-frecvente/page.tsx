import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { faqSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Întrebări Frecvente | Termoizolare și Hidroizolare | IsoThermLux",
  description: "Răspunsuri la întrebările frecvente despre termoizolare, hidroizolare, garanție și costuri. Consultanță gratuită.",
  keywords: "intrebari frecvente, FAQ, termoizolare, hidroizolare, costuri, garanție",
  alternates: { canonical: "https://www.isothermlux.md/intrebari-frecvente" },
  openGraph: {
    title: "Întrebări Frecvente | IsoThermLux",
    description: "Răspunsuri la întrebările frecvente despre serviciile noastre",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/intrebari-frecvente",
  },
}

const faqs = [
  {
    q: "Cât durează aplicarea termoizolării?",
    a: "În funcție de suprafață, o lucrare standard se finalizează în 1-2 zile. Spuma se întărește în cateva ore și poate fi acoperită imediat după aplicare."
  },
  {
    q: "Ce diferență este între celula deschisă și celula închisă?",
    a: "Celula deschisă este mai economică și potrivită pentru interioare. Celula închisă este mai densă, rezistență la umiditate și recomandată pentru exterior."
  },
  {
    q: "Cât economisesc la facturi după termoizolare?",
    a: "În medie, clienții economisesc între 40-50% la costurile de încălzire. Investiția se recuperează de obicei în 2-3 ani."
  },
  {
    q: "Oferiți garanție pentru lucrări?",
    a: "Da, oferim garanție de 25 de ani pentru toate lucrarile de termoizolare. Garanția acoperă atât materialul cât și manopera."
  },
  {
    q: "Pot aplica termoizolarea pe orice suprafață?",
    a: "Termoizolarea se aplică pe majoritatea suprafețelor: beton, lemn, metal, cărămidă. Echipa noastră evaluează fiecare proiect."
  },
  {
    q: "Cum pot obține o ofertă personalizată?",
    a: "Contactați-ne la +373 78 370 243 sau completați formularul de contact. Un specialist vă va contacta cu o estimare în 30 de minute."
  }
]

const faqPageSchema = faqSchema(faqs)

export default function IntrebariFrecventePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="min-h-[400px] flex items-center pt-20 bg-[#1A1D21] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">Întrebări Frecvente</h1>
            <p className="text-lg md:text-xl opacity-90">Răspunsuri la întrebările dumneavoastră despre serviciile noastre</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-8">
                  <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{faq.q}</h3>
                  <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-card p-8 rounded-none border border-border text-center">
              <h3 className="text-2xl font-serif font-medium mb-4">Nu găsești răspunsul pe care îl cauți?</h3>
              <p className="text-foreground/70 mb-6">Contactează-ne direct și un specialist îți va oferi consultanța de care ai nevoie.</p>
              <a
                href="tel:+37378370243"
                className="inline-block bg-[#1A1D21] text-white px-8 py-3 rounded-none font-semibold hover:bg-[#1A1D21]/90 transition"
              >
                Sună Acum
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
