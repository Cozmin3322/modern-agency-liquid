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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-16">
            {[
              { img: '/images/project-termoizolare-01.jpg', title: 'Izolare Profesională' },
              { img: '/images/project-hidroizolare-01.jpg', title: 'Hidroizolare Completă' },
              { img: '/images/project-aplicare-spuma-01.jpg', title: 'Aplicare Spumă' },
              { img: '/images/project-finisaj-01.jpg', title: 'Finisaj Premium' },
              { img: '/images/project-detaliu-izolare-01.jpg', title: 'Detalii Izolare' },
              { img: '/images/project-rezultat-final-01.jpg', title: 'Rezultat Final' },
              { img: '/images/project-preparare-suprafata-01.jpg', title: 'Pregătire Suprafață' },
              { img: '/images/project-protectie-margini-01.jpg', title: 'Protecție Margini' },
              { img: '/images/project-casa-termoizolare-01.jpg', title: 'Casă Termoizolare' },
              { img: '/images/project-casa-aplicare-01.jpg', title: 'Casă Aplicare' },
              { img: '/images/project-casa-detail-01.jpg', title: 'Casă Detaliu' },
              { img: '/images/project-casa-finisaj-01.jpg', title: 'Casă Finisaj' },
              { img: '/images/project-hala-industrial-01.jpg', title: 'Hală Industrială' },
              { img: '/images/project-hala-aplicare-01.jpg', title: 'Hală Aplicare' },
              { img: '/images/project-hala-detail-01.jpg', title: 'Hală Detaliu' },
              { img: '/images/project-apartament-izolare-01.jpg', title: 'Apartament Izolare' },
              { img: '/images/project-terasa-izolare-01.jpg', title: 'Terasă Izolare' },
              { img: '/images/project-terasa-aplicare-01.jpg', title: 'Terasă Aplicare' },
              { img: '/images/project-terasa-finisaj-01.jpg', title: 'Terasă Finisaj' },
              { img: '/images/project-fasada-protectie-01.jpg', title: 'Fațadă Protecție' },
            ].map((photo, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image
                  src={photo.img}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border pt-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Vrei un rezultat similar?</h2>
            <a href="/calculator" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition">
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
