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
  { name: 'Containere', url: 'https://www.isothermlux.md/termoizolare/containere-metalice' }
])

export const metadata: Metadata = {
  title: "Termoizolare Containere Metalice cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare containere metalice cu spumă poliuretanică. Elimini condensul, frigul și zgomotul. Soluție rapidă și durabilă. Garanție 25 ani. Moldova.",
  keywords: "termoizolare container metalic, izolare container spuma poliuretanica, container termoizolat Moldova, izolatie termica container",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/containere-metalice" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-containere-metalice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Containere</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Containere Metalice cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Containerele metalice sunt camere de frig vara și de îngheț iarna, pline de condens. Spuma poliuretanică transformă un container simplu într-un spațiu confortabil și uscat.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Eliminare completă a condensului</h3><p className="text-sm text-foreground/70">Celula închisă acoperă complet metalul. Zero condens, zero rugină.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Izolație termică maximă</h3><p className="text-sm text-foreground/70">De la container neizolat la spațiu confortabil în câteva ore.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Reducere zgomot ploaie</h3><p className="text-sm text-foreground/70">Spuma amortizează complet zgomotul ploii pe tablă.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aderare perfectă pe metal</h3><p className="text-sm text-foreground/70">Spuma se lipește chimic de oțel. Nu se desprinde, nu alunecă.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aplicare rapidă</h3><p className="text-sm text-foreground/70">Un container standard se izolează în câteva ore.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Investiție pe termen lung pentru orice utilizare.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Container Birou</h3><p className="text-sm text-foreground/70">Spațiu de lucru confortabil tot anul. Izolat termic și fonic.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Container Locuință</h3><p className="text-sm text-foreground/70">Transformi containerul în casă mini. Confort complet.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Container Depozit</h3><p className="text-sm text-foreground/70">Păstrezi mărfurile la temperaturi controlate.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Container Frigorific</h3><p className="text-sm text-foreground/70">Izolație de înaltă densitate pentru temperaturi negative.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Container Atelier</h3><p className="text-sm text-foreground/70">Spațiu de lucru cald iarna, răcoros vara.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Container Server Room</h3><p className="text-sm text-foreground/70">Controlul temperaturii pentru echipamente IT sensibile.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Ce grosime de spumă pentru un container?</h3><p className="text-foreground/70">Minim 5cm pentru climatul moldovenesc. 8-10cm pentru depozite frigorifice.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Se poate izola containerul din exterior?</h3><p className="text-foreground/70">Da, dar mai frecvent izolăm din interior — mai eficient termic și protejează și structura de condens.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Cât costă izolarea unui container 20ft?</h3><p className="text-foreground/70">Depinde de grosimea dorită. Contactează-ne pentru o ofertă personalizată după evaluare.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Containerul Acum</h2>
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
