import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"

const breadcrumb = breadcrumbSchema([
  { name: 'IsoThermLux', url: 'https://www.isothermlux.md' },
  { name: 'Boiler', url: 'https://www.isothermlux.md/boiler' }
])

export const metadata: Metadata = {
  title: "Termoizolare Boiler și Boilere cu Spumă Poliuretanică | IsoThermLux Moldova",
  description: "Termoizolare boilere și rezervoare de apă caldă cu spumă poliuretanică. Reduci pierderile termice cu 80%. Apa caldă mai mult timp. Garanție 25 ani. Moldova.",
  keywords: "termoizolare boiler, izolare boiler spuma poliuretanica, termoizolare rezervor apa calda Moldova, izolatie termica boiler Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/boiler" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-boiler" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Boiler</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Boiler cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Un boiler neizolat pierde căldura continuu — plătești să încălzești apa care se răcește singură. Spuma poliuretanică aplicată pe boiler reduce pierderile termice cu până la 80% și menține apa caldă de 3-4 ori mai mult.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+37378370243" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">Consultație Gratuită</a>
                <Link href="/servicii" className="border border-white/40 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition">Toate Serviciile</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tip Spuma */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-medium mb-3">Spumă Poliuretanică — Singura Soluție pe Care o Folosim</h2>
            <p className="text-foreground/70 mb-10 max-w-2xl">Nu vindem materiale generice. Lucrăm exclusiv cu spumă poliuretanică de înaltă calitate, în două variante adaptate fiecărei aplicații.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 border-2 border-accent/40 rounded-lg bg-accent/5">
                <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Celulă Închisă</div>
                <p className="text-foreground/80 mb-4">Densitate mare, impermeabil la apă. Valoare R superioară. Ideal pentru aplicații unde există contact cu umiditate sau necesitate de rezistență mecanică.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Impermeabil 100% la apă</li>
                  <li>✓ Valoare R 6.5 per inch</li>
                  <li>✓ Rezistență mecanică ridicată</li>
                </ul>
              </div>
              <div className="p-8 border border-border rounded-lg">
                <div className="inline-block bg-foreground/10 text-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Celulă Deschisă</div>
                <p className="text-foreground/80 mb-4">Ușoară și flexibilă. Excelentă pentru fonoizolare și spații interioare. Permeabilă la vapori — materialele respiră natural.</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>✓ Fonoizolare excelentă</li>
                  <li>✓ Foarte ușoară</li>
                  <li>✓ Permeabilă la vapori</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Beneficii</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Reducere pierderi termice cu 80%</h3><p className="text-sm text-foreground/70">Apa caldă se răcește de 3-4 ori mai lent. Boilerul pornește mult mai rar.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Economie 30-50% la energia electrică</h3><p className="text-sm text-foreground/70">Mai puține cicluri de încălzire = factură semnificativ mai mică.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aderare perfectă pe orice formă</h3><p className="text-sm text-foreground/70">Spuma urmează exact forma cilindrică a boilerului. Nicio zonă neizolată.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Elimini condensul exterior</h3><p className="text-sm text-foreground/70">Celula închisă previne formarea condensului care corodează mantaua boilerului.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aplicare rapidă — câteva ore</h3><p className="text-sm text-foreground/70">Izolăm boilerul fără a-l demonta sau opri alimentarea.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Soluție permanentă. Nicio înlocuire a izolației în toată durata de viață a boilerului.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Boiler Electric Vertical</h3><p className="text-sm text-foreground/70">Cel mai frecvent tip. Izolăm lateral și pe capace pentru eficiență maximă.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Boiler Electric Orizontal</h3><p className="text-sm text-foreground/70">Montat sub chiuvetă sau în dulap. Izolăm adaptat la spațiul disponibil.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Boiler cu Serpentină (Solar)</h3><p className="text-sm text-foreground/70">Izolăm rezervorul solar. Energia solară stocată mai eficient.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Boiler de Acumulare 200-500L</h3><p className="text-sm text-foreground/70">Rezervoare mari pentru case și vile. Economii uriașe la scară mare.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Boiler Industrial</h3><p className="text-sm text-foreground/70">Rezervoare de sute de litri pentru hoteluri, restaurante, fabrici.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Rezervor Tampon Centrală</h3><p className="text-sm text-foreground/70">Izolăm rezervorul tampon al centralei termice. Eficiență sporită a întregului sistem.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Pot izola boilerul existent fără să-l demontez?</h3><p className="text-foreground/70">Da. Aplicăm spuma direct pe carcasa boilerului montat. Nu este nevoie să-l deconectați sau să-l demontați.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Ce grosime de spumă se aplică pe boiler?</h3><p className="text-foreground/70">3-5cm de celulă închisă sunt suficienți pentru un boiler casnic. Suficient pentru a reduce pierderile cu 80%.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Se poate izola și capacul superior/inferior?</h3><p className="text-foreground/70">Da, izolăm toate suprafețele — lateral, sus și jos — pentru protecție termică completă 360°.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Boilerul Acum</h2>
            <p className="text-white/80 mb-8">Evaluare gratuită. Ofertă în 24h. Garanție 25 ani.</p>
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
