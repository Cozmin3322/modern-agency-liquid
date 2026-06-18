import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check, Building, House, Factory, Construction, Building2, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Termoizolare Acoperiș Terasă și Șarpantă | Spumă Poliuretanică | IsoThermLux",
  description: "Termoizolare profesională a acoperișurilor cu spumă poliuretanică. Terase plate, șarpante, table ondulate. Economie 40% la energie. Garanție 25 ani. Chișinău, Moldova.",
  keywords: "termoizolare acoperis Moldova, izolare terasa, spuma poliuretanica acoperis, termoizolare sarpanta, izolare table acoperis Chisinau",
  alternates: { canonical: "https://www.isothermlux.md/termoizolare/acoperis" },
  openGraph: {
    title: "Termoizolare Acoperiș | IsoThermLux Moldova",
    description: "Izolație termică profesională pentru acoperișuri cu spumă poliuretanică. Terase, șarpante, hale. Garanție 25 ani.",
    type: "website",
    locale: "ro_MD",
    url: "https://www.isothermlux.md/termoizolare/acoperis",
  },
}

export default function AcoperisPage() {
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
              <span className="text-white">Acoperiș</span>
            </nav>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">Spumă Poliuretanică — Terase & Șarpante</p>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6 max-w-3xl">
              Termoizolare Acoperiș Profesională
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Acoperișul reprezintă 30–40% din pierderile de căldură ale unei clădiri. Izolăm terase, șarpante și table ondulate cu spumă poliuretanică — cea mai eficientă soluție termică disponibilă.
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

        {/* Tipuri acoperisuri */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-4 text-center">Tipuri de Acoperișuri pe Care le Izolăm</h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">Fiecare acoperiș are particularitățile lui. Alegem tipul de spumă și metoda potrivită fiecărui caz.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: Building,
                  title: "Terasă Plată (Beton)",
                  desc: "Aplicăm spumă cu celule închise direct pe beton. Izolație termică + hidroizolare într-o singură operație. Fără rosturi sau punți termice.",
                  foam: "Celule Închise",
                },
                {
                  Icon: House,
                  title: "Șarpantă (Lemn)",
                  desc: "Izolăm între căpriori sau pe inradosul învelitorii. Spumă cu celule deschise pentru respirabilitate sau celule închise pentru izolație maximă.",
                  foam: "Celule Deschise sau Închise",
                },
                {
                  Icon: Factory,
                  title: "Table Ondulate (Hale)",
                  desc: "Spuma aderă perfect pe tabla ondulată metalică. Acoperim toate nervurile și colțurile — zero punți termice, zero condens.",
                  foam: "Celule Închise",
                },
                {
                  Icon: Construction,
                  title: "Acoperiș Tip Sandwich",
                  desc: "Completăm sau refacem izolația panourilor sandwich deteriorate. Recuperăm performanța termică inițială a clădirii.",
                  foam: "Celule Închise",
                },
                {
                  Icon: Building2,
                  title: "Mansardă",
                  desc: "Izolăm pereții înclimați și podeaua mansardei. Spațiu locuibil cald iarna și răcoros vara. Vezi și pagina dedicată mansardei.",
                  foam: "Celule Deschise sau Închise",
                },
                {
                  Icon: Layers,
                  title: "Acoperiș cu Panou Fibrociment",
                  desc: "Aplicare directă pe fibrociment, onduleu sau eternit. Soluție durabilă care prelungește viața învelitorii existente.",
                  foam: "Celule Închise",
                },
              ].map((type, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-accent transition">
                  <type.Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded mb-3 inline-block">{type.foam}</span>
                  <p className="text-foreground/70 text-sm leading-relaxed mt-2">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">Beneficiile Izolării Acoperișului</h2>
                <p className="text-foreground/70 mb-8">
                  Un acoperiș bine izolat este cea mai importantă investiție termică pe care o poți face. Recuperezi banii în 2–3 ani prin economii la energie.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "40–50% economie la gaz și electricitate", desc: "Verificat de clienții noștri prin facturi." },
                    { title: "Elimini condensul și mucegaiul", desc: "Spuma nu permite vapori să ajungă la structura rece." },
                    { title: "Confort vara și iarna", desc: "Acoperișul nu mai radiază cald vara sau frig iarna." },
                    { title: "Protejezi structura de lemn", desc: "Fără umezeală, lemnul nu putrezește." },
                    { title: "Garanție 25 ani scrisă", desc: "Cel mai lung termen de garanție din Moldova." },
                  ].map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-sm">{b.title}</span>
                        <p className="text-foreground/60 text-xs mt-1">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="bg-background p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4">Celule Închise — Pentru Terase și Table</h3>
                  <p className="text-foreground/70 text-sm mb-4">Impermeabilă, densitate mare, rezistă la presiune și UV. Ideală pentru aplicare exterioară sau sub învelitoare.</p>
                  <div className="text-2xl font-bold text-accent">λ = 0.020–0.024 W/m·K</div>
                </div>
                <div className="bg-background p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4">Celule Deschise — Pentru Șarpante</h3>
                  <p className="text-foreground/70 text-sm mb-4">Flexibilă, respirabilă, excelentă izolație fonică. Ideală pentru spații interioare și între căpriori.</p>
                  <div className="text-2xl font-bold text-foreground/60">λ = 0.035–0.040 W/m·K</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#2C3E50] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Izolăm Acoperișul Tău</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
              Inspecție gratuită. Calculăm pierderile actuale și economia reală după izolare.
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
