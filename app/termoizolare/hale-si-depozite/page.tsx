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
  { name: 'Hale Industriale', url: 'https://www.isothermlux.md/termoizolare/hale-si-depozite' }
])

export const metadata: Metadata = {
  title: "Termoizolare Hale Industriale și Depozite | Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare profesională hale industriale și depozite cu spumă poliuretanică. Economii mari la energie. Aplicare rapidă pe suprafețe mari. Moldova.",
  keywords: "termoizolare hala industriala, izolare depozit spuma poliuretanica, termoizolare hala Moldova, izolatie termica depozit Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/hale-si-depozite" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-hale-si-depozite" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#1A1D21]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Hale Industriale</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Hale Industriale și Depozite</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Halele industriale și depozitele au suprafețe mari de pierdere termică. Spuma poliuretanică este cea mai rapidă și eficientă soluție — aplicare mecanizată, fără rosturi, pe orice tip de structură.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+37360811115" className="bg-accent text-white px-8 py-3 rounded-none font-semibold hover:bg-accent/90 transition">Consultație Gratuită</a>
                <Link href="/termoizolare" className="border border-white/40 text-white px-8 py-3 rounded-none hover:bg-white/10 transition">Toate Serviciile</Link>
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
              <div className="p-8 border-2 border-accent/40 rounded-none bg-accent/5">
                <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Celulă Închisă</div>
                <p className="text-foreground/80 mb-4">Densitate mare, impermeabil la apă. Ideală acolo unde există contact cu umiditate sau necesitate de rezistență mecanică ridicată.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Impermeabil 100% la apă</li>
                  <li>✓ Valoare R superioară (6.5/inch)</li>
                  <li>✓ Rezistență mecanică ridicată</li>
                  <li>✓ Ideală pentru fundații, exterioare, cisterne</li>
                </ul>
              </div>
              <div className="p-8 border border-border rounded-none">
                <div className="inline-block bg-foreground/10 text-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Celulă Deschisă</div>
                <p className="text-foreground/80 mb-4">Ușoară și flexibilă, permeabilă la vapori. Excelentă pentru izolație fonică și spații interioare.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Fonoizolare excelentă</li>
                  <li>✓ Foarte ușoară</li>
                  <li>✓ Permeabilă la vapori</li>
                  <li>✓ Ideală pentru mansarde, pereți interiori, poduri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">De Ce Spumă Poliuretanică?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div key={"0"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aplicare rapidă pe suprafețe mari</h3><p className="text-sm text-foreground/70">Echipament profesional pentru suprafețe de sute sau mii de m² în timp minim.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aderă direct pe metal și beton</h3><p className="text-sm text-foreground/70">Nu necesită pregătire complexă. Aplicăm pe structura existentă.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Economie uriașă la încălzire</h3><p className="text-sm text-foreground/70">Halele prost izolate pierd enorm. Recuperezi investiția în primul sezon.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Stop condens pe structura metalică</h3><p className="text-sm text-foreground/70">Celula închisă elimină condensul care ruginește structura metalică.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Rezistentă la condiții industriale</h3><p className="text-sm text-foreground/70">Vibrații, umiditate, variații de temperatură — spuma rezistă la toate.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 de ani</h3><p className="text-sm text-foreground/70">Soluție permanentă. Fără reizolare periodică.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div key={"0"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Hală cu Structură Metalică</h3><p className="text-sm text-foreground/70">Aplicăm direct pe panouri sandwich sau tablă. Elimini condensul complet.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Depozit Frigorific</h3><p className="text-sm text-foreground/70">Izolație cu celulă închisă de înaltă densitate. Menții temperatura dorită.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Atelier de Producție</h3><p className="text-sm text-foreground/70">Confort termic pentru angajați. Conformitate cu normele sanitare.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Garaj și Service Auto</h3><p className="text-sm text-foreground/70">Podea și pereți izolați. Spațiu de lucru confortabil iarna.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Seră și Spații Agricole</h3><p className="text-sm text-foreground/70">Controlul temperaturii pentru culturi. Economie la încălzire.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Depozit Alimentar</h3><p className="text-sm text-foreground/70">Izolație certificată pentru industria alimentară. Temperaturi stabile.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Pot izola hala fără a întrerupe activitatea?</h3><p className="text-foreground/70">Da, în majoritatea cazurilor. Lucrăm pe secțiuni sau în afara orelor de producție.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Cât durează izolarea unei hale de 1000m²?</h3><p className="text-foreground/70">Aproximativ 3-5 zile cu echipament profesional, în funcție de complexitate.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Ce tip de spumă pentru hale metalice?</h3><p className="text-foreground/70">Celula închisă — este impermeabilă și elimină condensul care degradează structura metalică.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1A1D21] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Solicită Ofertă pentru Hală</h2>
            <p className="text-white/80 mb-8">Evaluare gratuită pe loc. Ofertă în 24h. Garanție 25 de ani.</p>
            <a href="tel:+37360811115" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
              Sună Acum <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
