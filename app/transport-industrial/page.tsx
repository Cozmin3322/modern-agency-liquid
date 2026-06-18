import { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"
import { breadcrumbSchema } from "@/lib/schema"

const breadcrumb = breadcrumbSchema([
  { name: 'IsoThermLux', url: 'https://www.isothermlux.md' },
  { name: 'Transport Industrial', url: 'https://www.isothermlux.md/transport-industrial' }
])

export const metadata: Metadata = {
  title: "Termoizolare Transport Industrial cu Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare vehicule și transport industrial cu spumă poliuretanică. Camioane frigorifice, remorci izoterme, vehicule speciale. Garanție 25 ani. Moldova.",
  keywords: "termoizolare transport industrial, izolare camion frigorific spuma poliuretanica, termoizolare remorca izoterma Moldova, izolatie termica vehicule industriale",
  alternates: { canonical: "https://www.isothermlux.md/transport-industrial" },
}

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-transport-industrial" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-[#2C3E50]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Termoizolare Transport Industrial</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium text-white mb-6">Termoizolare Transport Industrial cu Spumă Poliuretanică</h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">Vehiculele de transport industrial neizolate sau cu izolația degradată nu mențin temperatura marfii și consumă mai mult combustibil pentru climatizare. Spuma poliuretanică refăcută sau aplicată nou asigură eficiență termică maximă pe toată durata transportului.</p>
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
              <div key={"0"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Menținerea temperaturii marfii</h3><p className="text-sm text-foreground/70">Temperatura stabilă pe tot traseul. Marfa ajunge la destinație în condiții optime.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Aderare directă pe metal și fibră</h3><p className="text-sm text-foreground/70">Spuma se lipește pe orice suprafață interioară — fără punți termice, fără zone slabe.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Reizolare rapidă</h3><p className="text-sm text-foreground/70">Izolația degradată se refăinuiește complet. Vehiculul revine în parametri de fabrică sau superiori.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Economie la sistemul de refrigerare</h3><p className="text-sm text-foreground/70">Izolație mai bună = compresorul lucrează mai puțin = combustibil mai puțin.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Greutate redusă față de clasic</h3><p className="text-sm text-foreground/70">Spuma e mai ușoară decât panouri sandwich clasice. Capacitate de încărcare mai mare.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><Check className="w-5 h-5 text-accent mb-3" /><h3 className="font-semibold mb-2">Garanție 25 ani</h3><p className="text-sm text-foreground/70">Durabilitate superioară față de izolațiile originale ale vehiculelor.</p></div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Tipuri de Proiecte</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={"0"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Camion Frigorific</h3><p className="text-sm text-foreground/70">Reizolăm sau izolăm nou caroseria frigorifică. Temperaturi de la -25°C la +25°C.</p></div>
              <div key={"1"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Remorcă Izoterme</h3><p className="text-sm text-foreground/70">Remorci pentru transport alimente, medicamente, produse sensibile la temperatură.</p></div>
              <div key={"2"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Duba Izoterme</h3><p className="text-sm text-foreground/70">Dube de livrare pentru produse alimentare sau farmaceutice.</p></div>
              <div key={"3"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Cisternă de Transport</h3><p className="text-sm text-foreground/70">Izolăm cisternele de transport combustibil, lapte, produse alimentare lichide.</p></div>
              <div key={"4"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Vagon CF</h3><p className="text-sm text-foreground/70">Vagoane de cale ferată pentru transport produse cu temperatură controlată.</p></div>
              <div key={"5"} className="p-6 border border-border rounded-lg"><h3 className="font-semibold mb-2">Vehicule Speciale</h3><p className="text-sm text-foreground/70">Ambulanțe, laboratoare mobile, vehicule medicale — izolație pentru condiții specifice.</p></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-10">Întrebări Frecvente</h2>
            <div className="space-y-6">
              <div key={"0"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Puteți reizola un camion frigorific cu izolația degradată?</h3><p className="text-foreground/70">Da. Îndepărtăm izolația veche deteriorată, curățăm suprafețele și aplicăm spumă nouă. Vehiculul revine la parametri optimi sau chiar superiori.</p></div>
              <div key={"1"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Cât timp durează izolarea unui camion?</h3><p className="text-foreground/70">O dubă standard — 1 zi. Un camion sau remorcă mare — 2-3 zile, în funcție de dimensiuni și complexitate.</p></div>
              <div key={"2"} className="border-b border-border pb-6"><h3 className="font-semibold mb-2">Spuma rezistă la vibrațiile unui vehicul în mers?</h3><p className="text-foreground/70">Da. Spuma poliuretanică este flexibilă și rezistă excelent la vibrații și șocuri mecanice repetate.</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2C3E50] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif font-medium mb-4">Solicită Ofertă Transport</h2>
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
