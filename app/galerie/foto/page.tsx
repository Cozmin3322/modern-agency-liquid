export const metadata = {
  title: 'Galerie Foto IsoThermLux | Proiecte Termoizolare și Hidroizolare',
  description: 'Galerie de fotografii din proiectele noastre de termoizolare și hidroizolare. Calitate profesională, finisaj premium.',
  alternates: { canonical: 'https://www.isothermlux.md/galerie/foto' }
}

import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CallToAction } from '@/components/call-to-action'

export default function PhotoGallery() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="pt-40 pb-12 px-4 max-w-7xl mx-auto">
        <p className="text-sm text-muted-foreground">
          <a href="/" className="hover:text-accent transition-colors">Acasă</a>
          <span className="mx-2">/</span>
          <a href="/galerie/foto" className="hover:text-accent transition-colors">Galerie</a>
          <span className="mx-2">/</span>
          <span>Foto</span>
        </p>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Galerie Fotografie</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descoperă imaginile din proiectele noastre finalizate - demonstrația calității și profesionalismului IsoThermLux.
          </p>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { img: '/images/project-termoizolare-01.jpg', title: 'Izolare Profesională', desc: 'Termoizolare spumă poliuretanică' },
              { img: '/images/project-hidroizolare-01.jpg', title: 'Hidroizolare Completă', desc: 'Sistem hidroizolare impermeabil' },
              { img: '/images/project-aplicare-spuma-01.jpg', title: 'Aplicare Spumă', desc: 'Tehnică de pulverizare profesională' },
              { img: '/images/project-finisaj-01.jpg', title: 'Finisaj Premium', desc: 'Tencuire și vopsire finală' },
              { img: '/images/project-detaliu-izolare-01.jpg', title: 'Detalii Izolare', desc: 'Grosime și uniformitate perfectă' },
              { img: '/images/project-rezultat-final-01.jpg', title: 'Rezultat Final', desc: 'Proiect complet și profesional' },
              { img: '/images/project-preparare-suprafata-01.jpg', title: 'Pregătire Suprafață', desc: 'Prelucrare și curățare prealabilă' },
              { img: '/images/project-protectie-margini-01.jpg', title: 'Protecție Margini', desc: 'Mărginiri și protecții speciale' },
              { img: '/images/project-casa-termoizolare-01.jpg', title: 'Casă - Termoizolare', desc: 'Proiect rezidențial complet' },
              { img: '/images/project-casa-aplicare-01.jpg', title: 'Casă - Aplicare', desc: 'Pulverizare pe suprafață verticală' },
              { img: '/images/project-casa-detail-01.jpg', title: 'Casă - Detaliu', desc: 'Aspect final elegant' },
              { img: '/images/project-casa-finisaj-01.jpg', title: 'Casă - Finisaj', desc: 'Tencuiala și decorație' },
              { img: '/images/project-hala-industrial-01.jpg', title: 'Hală Industrială', desc: 'Proiect industrial mare' },
              { img: '/images/project-hala-aplicare-01.jpg', title: 'Hală - Aplicare', desc: 'Izolație pe structuri mari' },
              { img: '/images/project-hala-detail-01.jpg', title: 'Hală - Detaliu', desc: 'Aspect finisajului industrial' },
              { img: '/images/project-apartament-izolare-01.jpg', title: 'Apartament - Izolare', desc: 'Proiect rezidențial din bloc' },
              { img: '/images/project-terasa-izolare-01.jpg', title: 'Terasă - Izolare', desc: 'Izolație pentru spații deschise' },
              { img: '/images/project-terasa-aplicare-01.jpg', title: 'Terasă - Aplicare', desc: 'Pulverizare pe terasă' },
              { img: '/images/project-terasa-finisaj-01.jpg', title: 'Terasă - Finisaj', desc: 'Protecție la intemperii' },
              { img: '/images/project-fasada-protectie-01.jpg', title: 'Fațadă - Protecție', desc: 'Sistem complet de fațadă' },
            ].map((photo, idx) => (
              <div key={idx} className="bg-card rounded-lg overflow-hidden border border-border group cursor-pointer hover:border-accent transition-colors">
                <div className="relative aspect-square">
                  <Image
                    src={photo.img}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{photo.title}</h3>
                  <p className="text-sm text-foreground/60">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border pt-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Vrei un rezultat similar?</h2>
            <a href="/calculator" className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Solicită ofertă gratuită →
            </a>
          </div>
        </div>
      </section>
      <CallToAction />
      </main>
      <Footer />
    </>
  )
}

