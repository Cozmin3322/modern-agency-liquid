import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Check } from "lucide-react"

export const metadata = {
  title: 'Spumă Poliuretanică cu Celulă Închisă | IsoThermLux Moldova',
  description: 'Spuma poliuretanică cu celulă închisă — soluția premium pentru izolații rezistente la apă și umiditate. Densitate mare, impermeabilă. Ofertă gratuită.',
  alternates: { canonical: 'https://www.isothermlux.md/spuma-cu-celula-inchisa' }
}

export default function ClosedCellFoamPage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Link href="/" className="hover:text-accent transition">Acasă</Link>
            <span>/</span>
            <span className="text-foreground">Spumă cu Celulă Închisă</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">Izolație Premium</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-foreground">
            Spumă cu Celulă Închisă — Soluția Premium
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Impermeabilă, densitate mare, rezistență maximă la apă și umiditate. Soluția ideală pentru fundații, subsoluri și aplicații în contact direct cu apa.
          </p>
          <a
            href="tel:+373783702433"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition"
          >
            Sună Pentru Ofertă Gratuită →
          </a>
        </div>
      </section>

      {/* What is Closed-Cell Foam */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Ce este spuma cu celulă închisă?</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Spuma poliuretanică cu celulă închisă este un material izolant în care celulele sunt complet închise, fără comunicare între ele. Aceasta o face impermeabilă la apă și umezeală, oferind protecție superioară împotriva infiltrațiilor. Cu o densitate de 30-45 kg/m³, spuma cu celulă închisă este mai dură și mai rezistentă decât varianta cu celulă deschisă, ceea ce o face ideală pentru aplicații unde rezistența mecanică și impermeabilitatea sunt critice.
              </p>
              <div className="bg-card p-6 border border-accent/30 border-l-4 border-l-accent">
                <p className="text-foreground/90">
                  <strong>Avantaj principal:</strong> Spuma cu celulă închisă oferă barieră completă contra umidității și apei — alegerea preferată pentru fundații, subsoluri și aplicații în contact direct cu apa.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/hero-spray-foam.webp"
                alt="Aplicare spumă poliuretanică cu celulă închisă"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#1A1D21]/90 px-4 py-2">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">Celulă Închisă — Densitate 30-45 kg/m³</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-foreground">Proprietăți Tehnice</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-foreground">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Proprietate</th>
                  <th className="text-left py-4 px-4 font-semibold">Valoare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4">Densitate</td>
                  <td className="py-4 px-4">30-45 kg/m³</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4">Conductivitate Termică (λ)</td>
                  <td className="py-4 px-4">0.022-0.025 W/mK</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4">Permeabilitate la Apă</td>
                  <td className="py-4 px-4">Impermeabilă</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4">Interval de Temperatură</td>
                  <td className="py-4 px-4">-50°C la +100°C</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4">Compresibilitate</td>
                  <td className="py-4 px-4">Rigidă, rezistență mecanică mare</td>
                </tr>
                <tr className="hover:bg-background/50 transition">
                  <td className="py-4 px-4">Aderență</td>
                  <td className="py-4 px-4">Excelentă pe beton, lemn, metal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where Recommended */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-foreground">Unde se recomandă?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Fundații și Subsoluri", desc: "Protecție maximă contra umidității și infiltrațiilor de apă freatică." },
                { title: "Acoperișuri Plate", desc: "Izolație cu barieră hidrofugă integrată, protejează structura de scurgeri." },
                { title: "Pereți Exteriori", desc: "Rezistență la intemperii, impermeabilitate, protecție pe termen lung." },
                { title: "Containere și Structuri Metalice", desc: "Protecție contra condensului și umidității în medii agresive." },
                { title: "Căi de Acces Exterioare", desc: "Datorită rigidității sale, suportă trafic pedestrian și trafic ușor." },
                { title: "Compartimentări Hidrofuge", desc: "Piscine, bazine, saune — protecție completă contra apei." }
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-5 border border-border hover:border-accent transition-colors">
                  <h3 className="text-base font-semibold text-accent mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/80">{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Images stack */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/hidroizolare-fundatie-02.webp" alt="Hidroizolare fundație celulă închisă" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/project-hala-industrial-02.webp" alt="Termoizolare hală industrială" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden col-span-2">
                <Image src="/images/project-aplicare-spuma-01.webp" alt="Aplicare spumă poliuretanică celulă închisă" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Closed-Cell vs Open-Cell */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-foreground">Celulă Închisă vs Celulă Deschisă</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-foreground text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left py-4 px-4 font-semibold">Caracteristică</th>
                  <th className="text-left py-4 px-4 font-semibold">Celulă Închisă</th>
                  <th className="text-left py-4 px-4 font-semibold">Celulă Deschisă</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4 font-medium">Permeabilitate</td>
                  <td className="py-4 px-4"><Check className="inline w-4 h-4 text-accent mr-1" /> Impermeabilă</td>
                  <td className="py-4 px-4">Permeabilă la apă</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4 font-medium">Densitate</td>
                  <td className="py-4 px-4"><Check className="inline w-4 h-4 text-accent mr-1" /> 30-45 kg/m³</td>
                  <td className="py-4 px-4">10-20 kg/m³</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4 font-medium">Rezistență Mecanică</td>
                  <td className="py-4 px-4"><Check className="inline w-4 h-4 text-accent mr-1" /> Foarte ridicată</td>
                  <td className="py-4 px-4">Moderată</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4 font-medium">Eficiență Energetică</td>
                  <td className="py-4 px-4"><Check className="inline w-4 h-4 text-accent mr-1" /> Excelentă (λ 0.022)</td>
                  <td className="py-4 px-4">Bună (λ 0.025)</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4 font-medium">Aplicații Umide</td>
                  <td className="py-4 px-4"><Check className="inline w-4 h-4 text-accent mr-1" /> Ideală</td>
                  <td className="py-4 px-4">Nerecomandat</td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition">
                  <td className="py-4 px-4 font-medium">Cost</td>
                  <td className="py-4 px-4">Premium</td>
                  <td className="py-4 px-4"><Check className="inline w-4 h-4 text-accent mr-1" /> Accesibil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-foreground">Proiecte Finalizate cu Celulă Închisă</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              { img: '/images/project-fundatie.webp', title: 'Izolație Fundație' },
              { img: '/images/project-subsol-uscat.png', title: 'Subsol Uscat' },
              { img: '/images/hidroizolare-fundatie-02.webp', title: 'Hidroizolare Fundație' },
              { img: '/images/project-hala-industrial-02.webp', title: 'Hală Industrială' },
              { img: '/images/project-hala-industrial-new.webp', title: 'Hală Nouă' },
              { img: '/images/project-aplicare-spuma-01.webp', title: 'Aplicare Spumă' },
              { img: '/images/project-casa-termoizolare-01.webp', title: 'Casă Termoizolare' },
              { img: '/images/hero-spray-foam.webp', title: 'Aplicare Profesională' },
            ].map((project, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden group">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1A1D21]/0 group-hover:bg-[#1A1D21]/50 transition-all flex items-end p-3">
                  <span className="font-mono text-[10px] text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Material Educativ</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Vrei să afli mai multe?</h2>
          <p className="text-foreground/70 mb-8">
            Citește ghidul nostru complet despre spuma poliuretanică și diferitele tipuri disponibile.
          </p>
          <Link href="/ce-este-spuma-poliuretanica" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-none font-semibold hover:bg-accent/90 transition">
            Ghid Complet Spumă Poliuretanică →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Dorești o izolație de top cu celulă închisă?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Echipa noastră profesionistă este gata să-ți ofere o soluție personalizată. Sună acum pentru o evaluare gratuită pe amplasament.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+373783702433"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition"
            >
              Sună Acum +37378370243
            </a>
            <a
              href="mailto:infopoliuretan@gmail.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-none font-semibold hover:bg-accent/10 transition"
            >
              Trimite Email →
            </a>
          </div>
          <p className="text-sm text-foreground/60 mt-6">
            Răspundem rapid • Ofertă gratuită • Fără obligații
          </p>
        </div>
      </section>

      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Spumă Poliuretanică cu Celulă Închisă — Soluția Premium",
            "description": "Ghid complet despre spuma poliuretanică cu celulă închisă: proprietăți, aplicații și avantaje.",
            "image": "https://www.isothermlux.md/images/project-fundatie.jpg",
            "author": {
              "@type": "Organization",
              "name": "IsoThermLux",
              "url": "https://www.isothermlux.md"
            },
            "datePublished": "2026-06-17T00:00:00Z",
            "articleBody": "Spuma poliuretanică cu celulă închisă este soluția premium pentru izolații rezistente la apă și umiditate."
          })
        }}
      />
    </>
  )
}
