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
  { name: 'Planșee și Tavane', url: 'https://www.isothermlux.md/termoizolare/planseuri-si-tavane' }
])

export const metadata: Metadata = {
  title: "Termoizolare Planșee și Tavane cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare planșee, tavane și podele cu spumă poliuretanică. Elimini pierderile de căldură prin planșeu. Garanție 25 ani. Moldova.",
  keywords: "termoizolare planseu, izolare tavan spuma poliuretanica, termoizolare pardoseala, izolatie termica planseu Moldova",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/planseuri-si-tavane" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-planseuri-si-tavane" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Planșee și Tavane</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Planșee și Tavane cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Planșeul dintre etaje sau dintre ultima cameră și pod pierde 15-20% din căldura casei. Spuma poliuretanică aplicată pe tavan sau sub planșeu creează o barieră termică perfectă.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aplicare rapidă pe loc</h3><p className="text-sm text-foreground/70">Spuma se aplică direct pe tavanul existent. Fără demolări, fără praf excesiv.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Acoperire 100% a suprafeței</h3><p className="text-sm text-foreground/70">Niciun rost, nicio zonă neizolată. Strat complet și uniform.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Reducere zgomot între etaje</h3><p className="text-sm text-foreground/70">Spuma cu celulă deschisă izolează fonic excelent. Confort sporit.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Greutate redusă</h3><p className="text-sm text-foreground/70">Spuma e ușoară. Nu solicită structura planșeului.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Compatibil cu instalații</h3><p className="text-sm text-foreground/70">Spuma înconjoară țevile și cablurile. Nu blochează accesul la instalații.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Soluție permanentă fără întreținere.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Tavan Sub Pod</h3><p className="text-sm text-foreground/70">Izolăm tavanul ultimei camere de sub pod. Cel mai eficient punct de izolare.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Planșeu Între Etaje</h3><p className="text-sm text-foreground/70">Reducere zgomot și pierderi termice între niveluri.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pod Neamenajat</h3><p className="text-sm text-foreground/70">Izolăm podeaua podului. Mai ieftin decât izolarea acoperișului.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Pivniță și Subsol</h3><p className="text-sm text-foreground/70">Izolăm tavanul subsolului — podea mai caldă la parter.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Tavan Industrial</h3><p className="text-sm text-foreground/70">Hale și depozite cu tavan înalt. Economiești enorm la încălzire.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Tavan Între Apartamente</h3><p className="text-sm text-foreground/70">Soluție pentru blocuri — reducere zgomot de la vecini de sus.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Planșeul sau acoperișul — ce e mai eficient de izolat?</h3><p className="text-foreground/70">Depinde dacă podul e amenajat. Pod nefolosit — izolezi planșeul (mai ieftin). Mansardă locuibilă — izolezi acoperișul.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Pot izola tavanul fără a ridica podeaua de sus?</h3><p className="text-foreground/70">Da. Aplicăm spuma pe tavan din camera de dedesubt sau din podul de deasupra.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Cât gros trebuie să fie stratul de spumă?</h3><p className="text-foreground/70">Minim 5cm celulă închisă sau 10cm celulă deschisă pentru eficiență termică optimă.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Planșeul Acum</h2>
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
