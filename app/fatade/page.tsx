import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Termoizolare Fațade Moldova | Sisteme Complete | IsoThermLux',
  description: 'Termoizolare profesională a fațadelor cu spumă poliuretanică și sisteme ETICS. Execuție completă, garanție 25 ani. Ofertă gratuită în Moldova.',
  alternates: { canonical: 'https://www.isothermlux.md/fatade' }
}

export default function FacadesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition">Acasă</Link>
            <span>/</span>
            <Link href="/termoizolare" className="hover:text-foreground transition">Termoizolare</Link>
            <span>/</span>
            <span className="text-foreground">Fațade</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Soluții Profesionale</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Termoizolare Fațade
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-4">Sisteme Complete și Durabile</p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transformă fațada casei tale în scut termic eficient. Sisteme profesionale ETICS cu garanție 25 ani și execuție rapidă.
          </p>
          <a href="tel:+37378370243" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition text-lg">
            Sună pentru Ofertă Gratuită →
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Ce Include Termoizolarea Fațadei?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Izolație Termică",
                desc: "Spumă poliuretanică, vată minerală sau polistiren aplicată direct pe fațadă. Reduce pierderile de căldură cu până la 80%."
              },
              {
                title: "2. Tencuială Armată",
                desc: "Strat protector cu plasă din fibră de sticlă. Asigură aderență perfectă și protecție mecanică a sistemului."
              },
              {
                title: "3. Finisaj Exterior",
                desc: "Tencuială decorativă sau vopsea hidrofobă. Protecție completă și estetică modernă pentru fațada casei."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-accent">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Available */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Sisteme Disponibile</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Spumă Poliuretanică",
                pros: ["Performanță termică maximă", "Aderență perfectă", "Impermeabilă", "Garanție 25 ani"],
                cons: ["Cost mai ridicat"]
              },
              {
                name: "Vată Minerală",
                pros: ["Cost mediu", "Bună termic", "Flexibilă", "Permeabilă la vapori"],
                cons: ["Necesită mai multă grijă cu umiditatea"]
              },
              {
                name: "Polistiren",
                pros: ["Cost accesibil", "Ușor de aplicat", "Ușor de prelucrat"],
                cons: ["Performanță termică medie", "Durabilitate mai scurtă"]
              }
            ].map((system, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-semibold mb-6 text-accent">{system.name}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Avantaje:</p>
                    <ul className="space-y-2">
                      {system.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-accent font-bold">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground mb-2">Dezavantaje:</p>
                    <ul className="space-y-2">
                      {system.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-amber-600">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Procesul de Lucru</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Evaluare", desc: "Analiză detaliată a fațadei și a nevoilor termice" },
              { step: 2, title: "Pregătire", desc: "Curățare și reparație a suprafeței" },
              { step: 3, title: "Aplicare", desc: "Montaj sistem izolație și tencuială armată" },
              { step: 4, title: "Finisaj", desc: "Tencuială decorativă și protecție finală" }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-background p-6 rounded-lg border border-border text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/3 -right-3 text-accent text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Avantaje Termoizolării Fațadei</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Economie de Energie", desc: "Reducere de 70% la costurile de încălzire/răcire" },
              { title: "Confort Termic", desc: "Temperatură constantă în interiorul casei" },
              { title: "Protecție Exterioară", desc: "Protecție completă împotriva intemperiilor și infiltrațiilor" },
              { title: "Garanție Lungă", desc: "Garanție scrisă 25 ani pe material și manoperă" },
              { title: "Valoare Imobiliară", desc: "Creșterea valorii casei prin renovare energetică" },
              { title: "Durabilitate", desc: "Sistem rezistent 25-30+ ani fără întreținere specială" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-card p-8 rounded-lg border border-border hover:border-accent transition">
                <h3 className="text-xl font-semibold mb-3 text-accent">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Proiecte Realizate</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: '/images/project-casa-privat.jpg', title: 'Casă Privată — Fațadă Sud' },
              { img: '/images/project-casa-privat-new.jpg', title: 'Casă Privată — Fațadă Nord' },
              { img: '/images/project-mansard.jpg', title: 'Mansardă — Finisaj Decorativ' },
              { img: '/images/project-birou-comercial.jpg', title: 'Birou Commercial — ETICS' }
            ].map((project, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden bg-background border border-border group">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Link */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Material Educativ</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Vrei să înțelegi mai bine termoizolația?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Citește ghidul nostru complet despre spuma poliuretanică și sistemele de izolație.
          </p>
          <a href="/ce-este-spuma-poliuretanica" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
            Citește Ghidul Complet →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Gata să transformi fațada casei tale?
          </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contactează echipa IsoThermLux pentru o evaluare gratuită și ofertă personalizată.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+37378370243" className="inline-flex items-center justify-center gap-2 bg-background text-accent px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition">
              Sună: +37378370243
            </a>
            <a href="mailto:infopoliuretan@gmail.com" className="inline-flex items-center justify-center gap-2 bg-background/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-background/30 transition border border-background">
              Email: infopoliuretan@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Termoizolare Fațade — Sisteme Complete",
            "description": "Termoizolare profesională a fațadelor cu spumă poliuretanică și sisteme ETICS",
            "image": "https://www.isothermlux.md/images/project-casa-privat.jpg",
            "author": {
              "@type": "Organization",
              "name": "IsoThermLux",
              "url": "https://www.isothermlux.md"
            },
            "datePublished": "2024-06-17",
            "articleBody": "Termoizolarea fațadei este soluția optimă pentru case rezidențiale și cladiri comerciale..."
          })
        }}
      />
      </div>
      <Footer />
    </>
  )
}
