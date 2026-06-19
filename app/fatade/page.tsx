import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Layers, Thermometer, ShieldCheck, TrendingUp, Zap, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termoizolare Fațade Moldova | Sisteme Complete | IsoThermLux',
  description: 'Termoizolare profesională a fațadelor cu spumă poliuretanică și sisteme ETICS. Execuție completă, garanție 25 ani. Ofertă gratuită în Moldova.',
  alternates: { canonical: 'https://www.isothermlux.md/fatade' }
}

const included = [
  { Icon: Thermometer, title: "Izolație Termică", description: "Spumă poliuretanică aplicată direct pe fațadă. Reduce pierderile de căldură cu până la 80%." },
  { Icon: Layers, title: "Tencuială Armată", description: "Strat protector cu plasă din fibră de sticlă. Aderență perfectă și protecție mecanică." },
  { Icon: ShieldCheck, title: "Finisaj Exterior", description: "Tencuială decorativă sau vopsea hidrofobă. Protecție completă și estetică modernă." },
]

const benefits = [
  { Icon: Zap, title: "Economie 70% Energie", description: "Reducere drastică la costurile de încălzire și răcire." },
  { Icon: Thermometer, title: "Confort Termic", description: "Temperatură constantă și plăcută în interiorul casei." },
  { Icon: ShieldCheck, title: "Protecție Completă", description: "Fațada protejată împotriva intemperiilor și infiltrațiilor." },
  { Icon: Clock, title: "Garanție 25 Ani", description: "Garanție scrisă pe material și manoperă." },
  { Icon: TrendingUp, title: "Valoare Imobiliară", description: "Crește valoarea casei prin renovare energetică." },
  { Icon: Layers, title: "Durabilitate 25+ Ani", description: "Sistem rezistent fără întreținere specială." },
]

const systems = [
  {
    name: "Spumă Poliuretanică",
    badge: "Recomandat",
    pros: ["Performanță termică maximă", "Aderență perfectă", "Impermeabilă", "Garanție 25 ani"],
    cons: ["Investiție mai mare"],
  },
  {
    name: "Vată Minerală",
    badge: null,
    pros: ["Cost mediu", "Performanță bună", "Permeabilă la vapori"],
    cons: ["Necesită protecție suplimentară la umiditate"],
  },
  {
    name: "Polistiren",
    badge: null,
    pros: ["Cost accesibil", "Ușor de aplicat"],
    cons: ["Performanță termică medie", "Durabilitate mai scurtă"],
  },
]

const steps = [
  { nr: "01", title: "Evaluare", description: "Analiză detaliată a fațadei și a nevoilor termice." },
  { nr: "02", title: "Pregătire", description: "Curățare și reparație a suprafeței existente." },
  { nr: "03", title: "Aplicare", description: "Montaj sistem de izolație și tencuială armată." },
  { nr: "04", title: "Finisaj", description: "Tencuială decorativă și protecție finală." },
]

const projects = [
  { img: '/images/project-casa-privat.jpg', title: 'Casă Privată — Fațadă Sud' },
  { img: '/images/project-casa-privat-new.jpg', title: 'Casă Privată — Fațadă Nord' },
  { img: '/images/project-mansard.jpg', title: 'Mansardă — Finisaj Decorativ' },
  { img: '/images/project-birou-comercial.jpg', title: 'Birou Comercial — ETICS' },
]

export default function FacadesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-24 md:py-36 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Servicii IsoThermLux</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
                Termoizolare<br />Fațade
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Sisteme profesionale ETICS cu garanție 25 ani. Transformăm fațada casei tale în scut termic eficient cu execuție rapidă și durabilă.
              </p>
              <a href="tel:+37378370243" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-3">
                Ofertă Gratuită <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Ce include */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Sistem complet</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Ce include termoizolarea fațadei?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {included.map(({ Icon, title, description }) => (
                <div key={title} className="bg-background p-10 group hover:bg-card transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif font-medium text-lg mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sisteme */}
        <section className="py-20 md:py-28 border-t border-border section-warm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Comparație</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Sisteme disponibile</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {systems.map(({ name, badge, pros, cons }) => (
                <div key={name} className={`bg-background p-8 border ${badge ? 'border-accent' : 'border-border'} rounded-none`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif font-medium text-xl">{name}</h3>
                    {badge && <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{badge}</span>}
                  </div>
                  <div className="space-y-2 mb-6">
                    {pros.map(p => (
                      <div key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 space-y-2">
                    {cons.map(c => (
                      <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground/60">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Rezultate</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Avantajele termoizolării fațadei</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {benefits.map(({ Icon, title, description }) => (
                <div key={title} className="bg-background p-8 group hover:bg-card transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-5 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif font-medium mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20 md:py-28 border-t border-border section-warm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Cum lucrăm</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Procesul de lucru</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map(({ nr, title, description }) => (
                <div key={nr}>
                  <p className="text-5xl font-serif text-muted-foreground/20 mb-4">{nr}</p>
                  <h3 className="font-serif font-medium text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Portofoliu</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">Proiecte realizate</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map(({ img, title }) => (
                <div key={title} className="relative aspect-video overflow-hidden rounded-none bg-card group">
                  <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end p-6">
                    <p className="text-white font-serif font-medium">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-background/50 mb-6">Pas următor</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-background mb-6 leading-tight">
              Transformă fațada<br />casei tale
            </h2>
            <p className="text-lg text-background/70 mb-10">
              Contactează echipa IsoThermLux pentru o evaluare gratuită și ofertă personalizată.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+37378370243" className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300">
                +373 78 370 243
              </a>
              <a href="mailto:infopoliuretan@gmail.com" className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-8 py-4 rounded-full font-medium hover:border-background/60 transition-all duration-300">
                infopoliuretan@gmail.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
