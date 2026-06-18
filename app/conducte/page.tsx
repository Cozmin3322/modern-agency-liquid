import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"

const breadcrumb = breadcrumbSchema([
  { name: 'IsoThermLux', url: 'https://www.isothermlux.md' },
  { name: 'Conducte', url: 'https://www.isothermlux.md/conducte' }
])

export const metadata: Metadata = {
  title: "Izolare Conducte cu Spumă Poliuretanică | Protecție Termică | IsoThermLux",
  description: "Izolare conducte termice, sanitare și industriale cu spumă poliuretanică. Elimini pierderile de căldură și condensul pe țevi. Garanție 25 ani. Moldova.",
  keywords: "izolare conducte, termoizolare tevi spuma poliuretanica, izolatie termica conducte Moldova, izolare tevi termice Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/conducte" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-conducte" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Izolare Conducte</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Izolare Conducte cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Conductele neizolate pierd căldura pe tot traseul lor și acumulează condens care le degradează rapid. Spuma poliuretanică înfășoară perfect orice conductă — dreaptă, curbată sau cu fitinguri — creând o izolație continuă fără rosturi.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Acoperire perfectă pe orice traseu</h3><p className="text-sm text-foreground/70">Coturi, ramificații, fitinguri — spuma urmează orice formă fără rosturi.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Elimini condensul pe țevi</h3><p className="text-sm text-foreground/70">Conductele de apă rece nu mai transpiră. Pereți și tavane uscați.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Reducere pierderi termice ale agentului</h3><p className="text-sm text-foreground/70">Agentul termic ajunge la destinație la temperatura dorită.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Protecție anti-îngheț</h3><p className="text-sm text-foreground/70">Conductele exterioare sau din spații neîncălzite sunt protejate contra înghețului.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Reducere zgomot hidraulic</h3><p className="text-sm text-foreground/70">Spuma amortizează zgomotul apei în țevi. Casă mai liniștită.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Izolație permanentă. Nicio deteriorare în timp.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Conducte Termice</h3><p className="text-sm text-foreground/70">Izolăm rețelele de încălzire — mai puține pierderi, confort termic uniform.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Conducte Sanitare</h3><p className="text-sm text-foreground/70">Eliminăm condensul de pe conductele de apă rece. Pereți uscați.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Conducte Exterioare</h3><p className="text-sm text-foreground/70">Protecție contra înghețului pentru conductele din exterior sau spații neîncălzite.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Conducte Industriale</h3><p className="text-sm text-foreground/70">Rețele de abur, apă caldă sau răcire în fabrici și hale.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Conducte Subterane</h3><p className="text-sm text-foreground/70">Izolăm conductele înainte de îngropare pentru protecție maximă.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Conducte Climatizare</h3><p className="text-sm text-foreground/70">Izolăm conductele de aer condiționat și ventiloconvectoare.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Spuma înlocuiește cochiliile clasice din vată minerală?</h3><p className="text-foreground/70">Da, și o depășește. Spuma creează o izolație continuă fără rosturi sau îmbinări — mult mai eficientă decât cochiliile care lasă punți termice la fiecare îmbinare.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Se poate izola o conductă existentă fără demontare?</h3><p className="text-foreground/70">Da. Aplicăm spuma direct pe conducta existentă, indiferent de poziție — verticală, orizontală sau oblică.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Ce diametru minim de conductă puteți izola?</h3><p className="text-foreground/70">Izolăm conducte de orice diametru, de la 1/2 inch la conducte industriale de sute de mm.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Conductele Acum</h2>
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
