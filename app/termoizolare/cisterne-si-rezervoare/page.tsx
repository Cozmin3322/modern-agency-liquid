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
  { name: 'Cisterne și Rezervoare', url: 'https://www.isothermlux.md/termoizolare/cisterne-si-rezervoare' }
])

export const metadata: Metadata = {
  title: "Termoizolare Cisterne și Rezervoare cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare cisterne, rezervoare și turnuri de apă cu spumă poliuretanică. Menții temperatura lichidelor. Elimini condensul. Garanție 25 ani. Moldova.",
  keywords: "termoizolare cisterne, izolare rezervor spuma poliuretanica, termoizolare turn apa Moldova, izolatie termica cisterna",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/cisterne-si-rezervoare" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-cisterne-si-rezervoare" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#1A1D21]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Cisterne și Rezervoare</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Cisterne și Rezervoare cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Cisternele și rezervoarele neizolate pierd sau câștigă căldura din mediul exterior, degradând conținutul și consumând energie. Spuma poliuretanică menține temperatura dorită eficient și durabil.</p>
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
                <p className="text-foreground/80 mb-4">Densitate mare, impermeabil la apă. Ideal acolo unde există contact cu umiditate sau necesitate de rezistență mecanică ridicată.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Impermeabil 100% la apă</li>
                  <li>✓ Valoare R superioară (6.5/inch)</li>
                  <li>✓ Rezistență mecanică ridicată</li>
                  <li>✓ Ideal fundații, exterioare, cisterne</li>
                </ul>
              </div>
              <div className="p-8 border border-border rounded-none">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div key={"0"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Menținerea temperaturii lichidelor</h3><p className="text-sm text-foreground/70">Izolez termic perfect — conținutul rămâne la temperatura dorită indiferent de sezon.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Eliminare condens exterior</h3><p className="text-sm text-foreground/70">Celula închisă previne formarea condensului care corodează metalul.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aderare pe orice formă</h3><p className="text-sm text-foreground/70">Spuma urmează perfect orice curbură — cilindri, sfere, forme neregulate.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Protecție anti-coroziune</h3><p className="text-sm text-foreground/70">Stratul de spumă protejează metalul de umiditate și oxidare.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Rezistentă la intemperii</h3><p className="text-sm text-foreground/70">UV, ploaie, îngheț — cu finisaj adecvat rezistă la toate condițiile.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Soluție permanentă fără reizolare.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div key={"0"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Turn de Apă</h3><p className="text-sm text-foreground/70">Izolație completă — apa nu îngheață iarna, nu se supraîncălzește vara.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Rezervor de Combustibil</h3><p className="text-sm text-foreground/70">Menții vâscozitatea combustibilului. Funcționare optimă pe ger.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Cisternă Agricolă</h3><p className="text-sm text-foreground/70">Protejezi îngrășămintele și pesticidele de variațiile de temperatură.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Rezervor Industrial</h3><p className="text-sm text-foreground/70">Substanțe chimice la temperaturi stabile. Siguranță sporită.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Bazin Apă Potabilă</h3><p className="text-sm text-foreground/70">Materiale certificate alimentar. Apa rece vara, neînghețată iarna.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Cisternă Transportabilă</h3><p className="text-sm text-foreground/70">Izolăm cisternele mobile — transport produse sensibile la temperatură.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Spuma e sigură pentru rezervoare de apă potabilă?</h3><p className="text-foreground/70">Da, folosim materiale certificate pentru contact indirect cu apa potabilă, aplicate pe exterior.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Cum se aplică pe suprafețe curbe?</h3><p className="text-foreground/70">Spuma poliuretanică este lichidă la aplicare și urmează perfect orice formă înainte de a se întări.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Ce finisaj se aplică peste spumă?</h3><p className="text-foreground/70">Vopsea poliuretrică sau tencuială specială pentru protecție UV și mecanică pe termen lung.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1A1D21] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Solicită Ofertă pentru Cisternă</h2>
            <p className="text-white/80 mb-8">Evaluare gratuită pe loc. Ofertă în 24h. Garanție 25 ani.</p>
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
