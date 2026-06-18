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
  { name: 'Pereți Exteriori', url: 'https://www.isothermlux.md/termoizolare/pereti-exteriori' }
])

export const metadata: Metadata = {
  title: "Termoizolare Pereți Exteriori cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare pereți exteriori cu spumă poliuretanică în Moldova. Elimini punțile termice, umezeala și mucegaiul. Garanție 25 ani. Consultație gratuită.",
  keywords: "termoizolare pereti exteriori, izolare termica pereti Moldova, spuma poliuretanica pereti, termoizolare casa exterior Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/pereti-exteriori" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-pereti-exteriori" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Pereți Exteriori</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Pereți Exteriori cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Pereții exteriori reprezintă până la 25% din pierderile de căldură. Spuma poliuretanică aplicată pe exterior sau în cavitățile peretelui creează un scut termic continuu.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Eliminare completă punți termice</h3><p className="text-sm text-foreground/70">Strat continuu fără rosturi. Nicio zonă rece pe pereți.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Stop mucegai și umiditate</h3><p className="text-sm text-foreground/70">Pereți uscați, sănătoși. Fără condensat interior.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Economie 25-35% la căldură</h3><p className="text-sm text-foreground/70">Reduci semnificativ consumul de energie pentru încălzire.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aderență pe orice suprafață</h3><p className="text-sm text-foreground/70">Beton, cărămidă, BCA, lemn — spuma aderă perfect pe orice.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aplicare fără demolări</h3><p className="text-sm text-foreground/70">Nu e nevoie să demolezi tencuiala. Aplicăm direct pe perete.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Materiale certificate EU. Fără degradare în timp.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pereți din Cărămidă</h3><p className="text-sm text-foreground/70">Soluție ideală pentru casele vechi. Elimini punțile termice complet.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pereți din BCA</h3><p className="text-sm text-foreground/70">Completezi izolația BCA-ului cu un strat suplimentar de spumă.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pereți din Beton</h3><p className="text-sm text-foreground/70">Aderare perfectă pe beton. Strat uniform și continuu.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pereți cu Cavitate</h3><p className="text-sm text-foreground/70">Injectare spumă în cavitatea peretelui dublu. Fără lucrări exterioare.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pereți din Lemn</h3><p className="text-sm text-foreground/70">Izolație perfectă pentru case din lemn. Etanșeizare completă.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pereți Industriali</h3><p className="text-sm text-foreground/70">Hale și depozite. Suprafețe mari izolate rapid și eficient.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Se aplică pe exterior sau interior?</h3><p className="text-foreground/70">Ambele opțiuni sunt posibile. Exteriorul e mai eficient termic. Interiorul e ales când nu se poate modifica fațada (bloc, centru istoric).</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Afectează aspectul casei?</h3><p className="text-foreground/70">Pe exterior, peste spumă se aplică tencuială decorativă sau alt finisaj. Aspectul final e ales de client.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Pot izola doar câțiva pereți?</h3><p className="text-foreground/70">Da, dar recomandăm izolarea tuturor pereților exteriori pentru eficiență maximă și a evita punțile termice parțiale.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Pereții Acum</h2>
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
