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
  { name: 'Pod', url: 'https://www.isothermlux.md/termoizolare/pod' }
])

export const metadata: Metadata = {
  title: "Termoizolare Pod cu Spumă Poliuretanică | IsoThermLux Moldova",
  description: "Termoizolare pod cu spumă poliuretanică. Scapi de frig, umezeală și căldura excesivă vara. Garanție 25 ani. Consultație gratuită Moldova.",
  keywords: "termoizolare pod, izolare pod spuma poliuretanica, pod termoizolat Moldova, izolatie termica pod Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/pod" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-pod" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#1A1D21]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Pod</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Pod cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Podul neizolat e frigul de iarnă care coboară în camerele de sub el și căldura sufocantă de vară. O singură aplicație de spumă poliuretanică rezolvă ambele probleme pe 25+ ani.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Camera de dedesubt mai caldă iarna</h3><p className="text-sm text-foreground/70">Izolând podeaua sau tavanul podului, camera de sub el e cu 4-6°C mai caldă.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Mai răcoros vara</h3><p className="text-sm text-foreground/70">Spuma reflectă și absoarbe căldura soarelui. Nu mai transpiți la ultimul etaj.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aplicare rapidă și curată</h3><p className="text-sm text-foreground/70">Podul se izolează în câteva ore. Fără praf, fără demolări.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Acoperire pe structuri neregulate</h3><p className="text-sm text-foreground/70">Căpriori, grinzi, colțuri — spuma acoperă perfect orice geometrie.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Izolație fonică inclusă</h3><p className="text-sm text-foreground/70">Ploaia pe acoperiș nu se mai aude. Liniște completă.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-none"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Nu mai reizolezi niciodată. Soluție definitivă.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div key={"0"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Pod Neamenajat</h3><p className="text-sm text-foreground/70">Izolăm podeaua podului. Camera de dedesubt devine imediat mai caldă.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Pod în Curs de Amenajare</h3><p className="text-sm text-foreground/70">Izolăm acoperișul podului pentru a-l transforma în cameră locuibilă.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Pod cu Acces Limitat</h3><p className="text-sm text-foreground/70">Spuma se aplică și în spații greu accesibile. Acoperire completă.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Pod Industrial</h3><p className="text-sm text-foreground/70">Depozite și hale cu pod înalt. Economii uriașe la climatizare.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Pod cu Instalații</h3><p className="text-sm text-foreground/70">Spuma înconjoară țevile și cablurile. Protecție termică și mecanică.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-none"><h3 className="font-semibold mb-2">Pod Mansardat</h3><p className="text-sm text-foreground/70">Transformarea podului în spațiu locuibil confortabil.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">E mai bine să izolezi podul sau acoperișul?</h3><p className="text-foreground/70">Podul neamenajat — izolezi podeaua podului (mai ieftin). Pod amenajat/mansardă — izolezi acoperișul pentru a folosi tot spațiul.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Trebuie să curăț podul înainte?</h3><p className="text-foreground/70">O curățare de bază e de ajutor, dar nu obligatorie. Echipa noastră face pregătirea necesară.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Spuma rezistă la variațiile mari de temperatură din pod?</h3><p className="text-foreground/70">Da. Spuma poliuretanică rezistă la temperaturi de la -40°C la +100°C. Podul e un mediu perfect pentru ea.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1A1D21] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Izolează Podul Acum</h2>
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
