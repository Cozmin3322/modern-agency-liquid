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
  { name: 'Fațade', url: 'https://www.isothermlux.md/termoizolare/fatade-exterioare' }
])

export const metadata: Metadata = {
  title: "Termoizolare Fațade Exterioare cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare fațade exterioare cu spumă poliuretanică. Casa ta mai caldă, facturile mai mici. Finisaj decorativ inclus. Garanție 25 ani. Moldova.",
  keywords: "termoizolare fatade exterioare, izolare fatada spuma poliuretanica, termoizolare exterior casa Moldova, fatada termoizolata Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/fatade-exterioare" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-fatade-exterioare" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Fațade</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Fațade Exterioare cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Fațada casei e prima barieră contra frigului. Spuma poliuretanică aplicată pe exterior creează un strat termic continuu — fără a pierde spațiu interior și fără a crea punți termice.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Fără pierdere de spațiu interior</h3><p className="text-sm text-foreground/70">Izolând pe exterior, nu reduci suprafața interioară a camerelor.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Strat termic continuu</h3><p className="text-sm text-foreground/70">Niciun rost, nicio întrerupere. Izolație perfectă pe toată fațada.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Protecție suplimentară a structurii</h3><p className="text-sm text-foreground/70">Spuma protejează pereții de îngheț-dezgheț și variații termice.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aspect modern și îngrijit</h3><p className="text-sm text-foreground/70">Finisaj decorativ la alegere. Casa arată renovată și modernă.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Economie 35-45% la energie</h3><p className="text-sm text-foreground/70">Combinând fațada cu acoperișul, reduci dramatic costurile energetice.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Soluție durabilă care crește valoarea proprietății.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Casa Unifamilială</h3><p className="text-sm text-foreground/70">Izolație completă a fațadei. Transformi complet aspectul și eficiența casei.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Bloc de Apartamente</h3><p className="text-sm text-foreground/70">Izolăm blocuri întregi. Toți locatarii beneficiază de facturi mai mici.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Clădire Comercială</h3><p className="text-sm text-foreground/70">Imagine profesională și eficiență energetică pentru afacerea ta.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Casa Istorică</h3><p className="text-sm text-foreground/70">Soluții adaptate pentru clădiri cu restricții arhitecturale.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Vilă și Casă de Vacanță</h3><p className="text-sm text-foreground/70">Confort garantat indiferent de sezon.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Clădire Industrială</h3><p className="text-sm text-foreground/70">Fațade industriale izolate rapid cu echipament profesional.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Pot schimba culoarea fațadei odată cu izolarea?</h3><p className="text-foreground/70">Da! Peste spumă aplicăm tencuiala și vopseaua la alegerea ta. Profită de ocazie pentru un aspect nou.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Afectează izolarea ferestrele și ușile?</h3><p className="text-foreground/70">Ferestrele și ușile se integrează în sistemul de izolare. Tocurile se extind corespunzător.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Trebuie să golesc casa în timpul lucrărilor?</h3><p className="text-foreground/70">Nu. Lucrăm pe exterior. Activitatea normală din casă continuă neperturbată.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Fațada Acum</h2>
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
