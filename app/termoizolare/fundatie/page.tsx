import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, Home, Warehouse, Sprout, Layers, Construction, Droplet } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Fundație și Subsol | Spumă Poliuretanică | IsoThermLux Moldova",
  description: "Termoizolare profesională a fundațiilor și subsolurilor cu spumă poliuretanică cu celule închise. Elimini umezeala, condensul și pierderile de căldură. Garanție 25 ani. Moldova.",
  keywords: "termoizolare fundatie Moldova, izolare subsol, spuma poliuretanica fundatie, termoizolare soclu casa, izolare termica subsol Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/fundatie" },
  openGraph: {
    title: "Termoizolare Fundație și Subsol | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru fundații și subsoluri cu spumă poliuretanică. Elimini umezeala și pierderile de căldură.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/fundatie",
  },
}

export default function FundatiePage() {
  return (
    <>
      <Header />
      <main className="bg-background">

        <section className="relative min-h-[70vh] flex items-center pt-20 bg-[#1a2535]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative py-20">
            <nav className="text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition">Acasă</Link>
              <span className="mx-2">/</span>
              <Link href="/termoizolare" className="hover:text-white transition">Termoizolare</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Fundație și Subsol</span>
            </nav>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">Spumă Poliuretanică cu Celule Închise</p>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6 max-w-3xl">
              Termoizolare Fundație și Subsol
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Fundația rece și subsolul umed sunt cauza principală a mucegaiului și a pardoselii reci. Le izolăm cu spumă poliuretanică cu celule închise — soluție permanentă, impermeabilă și eficientă.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+37378370243" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
                Consultație Gratuită <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/calculator-oferta" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-white transition">
                Calculează Oferta
              </Link>
            </div>
          </div>
        </section>

        {/* Zone aplicare */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">Zone pe Care le Izolăm</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { Icon: Home, title: "Soclul Casei", desc: "Izolăm soclul pe exterior sau interior. Elimini puntea termică la nivelul pardoselii și reduci umiditatea în pereți." },
                { Icon: Warehouse, title: "Pereții Subsolului", desc: "Izolăm pereții de beton ai subsolului pe interior. Spațiu uscat, cald și fără mucegai — utilizabil ca depozit sau atelier." },
                { Icon: Sprout, title: "Fundația Exterioară", desc: "Izolație pe exteriorul fundației înainte de umplutură. Protecție termică și hidro în același timp. Soluție definitivă." },
                { Icon: Layers, title: "Placa de Beton (Pardoseala)", desc: "Izolăm sub sau peste placa de beton. Pardoseală caldă la pas fără sistem de încălzire în pardoseală." },
                { Icon: Construction, title: "Grinzi și Tavane Subterane", desc: "Eliminăm punțile termice la grinzile de beton care ies din clădire. Punct critic de pierderi termice." },
                { Icon: Droplet, title: "Zone cu Umiditate", desc: "Acolo unde apa sau vaporii sunt problemă, spuma cu celule închise oprește complet infiltrațiile." },
              ].map((z, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition">
                  <z.Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{z.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-medium mb-12 text-center">De Ce Spumă cu Celule Închise la Fundație?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Rezistă la presiunea pământului", desc: "Densitate 35–45 kg/m³ — nu se comprimă sub presiunea umpluturii de pământ." },
                { title: "Impermeabilă la apă", desc: "Absoarbe mai puțin de 2% apă. Fundația rămâne uscată chiar și la nivel ridicat al pânzei freatice." },
                { title: "Aderă pe beton fără adeziv", desc: "Spuma se leagă chimic de beton. Nu alunecă, nu se dezlipește, nu lasă goluri." },
                { title: "Durată de viață identică cu clădirea", desc: "25+ ani fără degradare. Nu trebuie refăcută niciodată în condiții normale." },
                { title: "Elimini punțile termice critice", desc: "Zona soclu este cel mai frecvent punct de pierderi. Izolarea lui corectă schimbă radical comportamentul termic al casei." },
                { title: "Reduci facturile cu 15–25%", desc: "Chiar și izolarea parțială a fundației generează economii vizibile la prima factură de iarnă." },
              ].map((b, idx) => (
                <div key={idx} className="p-6 bg-background border border-border rounded-lg">
                  <Check className="w-5 h-5 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-foreground/70 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2C3E50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Scapă de Umezeala și Frigul de la Fundație</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Evaluare gratuită pe loc. Îți arătăm exact unde piezi căldura și cât costă să repari.
            </p>
            <a href="tel:+37378370243" className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Sună Acum: +373 78 370 243 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
