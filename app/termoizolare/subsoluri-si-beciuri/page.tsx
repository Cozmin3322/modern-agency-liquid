import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"

const breadcrumb = breadcrumbSchema([
  { name: 'IsoThermLux', url: 'https://www.isothermlux.md' },
  { name: 'Termoizolare', url: 'https://www.isothermlux.md/termoizolare' },
  { name: 'Subsoluri și Beciuri', url: 'https://www.isothermlux.md/termoizolare/subsoluri-si-beciuri' }
])

export const metadata: Metadata = {
  title: "Termoizolare Subsoluri și Beciuri cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare subsoluri și beciuri cu spumă poliuretanică. Elimini umezeala, frigul și mucegaiul definitiv. Garanție 25 ani. Moldova.",
  keywords: "termoizolare subsol, izolare beci spuma poliuretanica, termoizolare subsol Moldova, stop umezeala subsol Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/subsoluri-si-beciuri" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-subsoluri-si-beciuri" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Subsoluri și Beciuri</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Subsoluri și Beciuri cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Subsolul umed și rece îți degradează casa de jos în sus. Mucegaiul, umezeala și frigul care urcă prin planșeu — toate rezolvate simultan cu spumă poliuretanică cu celulă închisă.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+37378370243" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">Consultație Gratuită</a>
                <Link href="/termoizolare" className="border border-white/40 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition">Toate Serviciile</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tip Spuma */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-medium mb-3">Alegem Tipul Potrivit de Spumă</h2>
            <p className="text-foreground/70 mb-10 max-w-2xl">Folosim exclusiv spumă poliuretanică de înaltă calitate în două variante, fiecare optimizată pentru condiții specifice.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 border-2 border-accent/40 rounded-lg bg-accent/5">
                <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Celulă Închisă</div>
                <p className="text-foreground/80 mb-4">Densitate mare, impermeabil la apă. Ideal acolo unde există contact cu umiditate sau necesitate de rezistență mecanică ridicată.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Impermeabil 100% la apă</li>
                  <li>✓ Valoare R superioară (6.5/inch)</li>
                  <li>✓ Rezistență mecanică ridicată</li>
                  <li>✓ Ideal fundații, exterioare, cisterne</li>
                </ul>
              </div>
              <div className="p-8 border border-border rounded-lg">
                <div className="inline-block bg-foreground/10 text-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Celulă Deschisă</div>
                <p className="text-foreground/80 mb-4">Ușoară și flexibilă, permeabilă la vapori. Excelentă pentru izolație fonică și spații interioare.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Fonoizolare excelentă</li>
                  <li>✓ Foarte ușoară</li>
                  <li>✓ Permeabilă la vapori</li>
                  <li>✓ Ideal mansarde, pereți interiori, poduri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">De Ce Spumă Poliuretanică?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Stop umezeală definitiv</h3><p className="text-sm text-foreground/70">Celula închisă este impermeabilă. Pereții subsolului rămân uscați permanent.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Parter mai cald cu 3-5°C</h3><p className="text-sm text-foreground/70">Izolând tavanul subsolului, parterul devine semnificativ mai cald.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Elimini mucegaiul</h3><p className="text-sm text-foreground/70">Fără umiditate = fără mucegai. Aer curat în toată casa.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Protejezi structura casei</h3><p className="text-sm text-foreground/70">Umezeala degradează fundația și pereții. Spuma protejează structura.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Beciul mai uscat pentru depozitare</h3><p className="text-sm text-foreground/70">Conservi alimentele și obiectele în condiții optime.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Soluție permanentă fără tratamente repetate anti-mucegai.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Subsol Locuit</h3><p className="text-sm text-foreground/70">Transformi subsolul umed în spațiu locuibil, uscat și cald.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Beci Tradițional</h3><p className="text-sm text-foreground/70">Izolezi beciul pentru conservarea optimă a alimentelor.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Subsol Tehnic</h3><p className="text-sm text-foreground/70">Protejezi instalațiile și echipamentele din subsolul tehnic.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Garaj Subteran</h3><p className="text-sm text-foreground/70">Spațiu uscat și mai cald pentru mașini și unelte.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Cramă</h3><p className="text-sm text-foreground/70">Temperatura constantă ideală pentru vinuri și produse fermentate.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Subsol Bloc</h3><p className="text-sm text-foreground/70">Izolăm subsolurile blocurilor de locuit. Apartamentele de la parter nu mai sunt reci.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Din interior sau exterior pentru subsol?</h3><p className="text-foreground/70">De obicei din interior — mai accesibil și eficient. Exteriorul e ales când se fac lucrări de fundație oricum.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Cât timp scapăm de mucegai?</h3><p className="text-foreground/70">Mucegaiul dispare în câteva săptămâni după ce umezeala e eliminată. Nu mai revine cât timp izolația e intactă.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Pot locui în casă în timp ce izolați subsolul?</h3><p className="text-foreground/70">Da. Lucrăm în subsol fără a perturba spațiile locuite de deasupra.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Scapă de Umezeală Acum</h2>
            <p className="text-white/80 mb-8">Evaluare gratuită pe loc. Ofertă în 24h. Garanție 25 ani.</p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Sună Acum <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
