export const metadata = {
  title: 'Galerie Video IsoThermLux | Proiecte Termoizolare și Hidroizolare',
  description: 'Vizionează videoclipuri ale proiectelor noastre de termoizolare și hidroizolare. Execuție profesională, finisaj de calitate.',
  alternates: { canonical: 'https://www.isothermlux.md/galerie/video' },
  openGraph: {
    title: 'Galerie Video IsoThermLux',
    description: 'Videoclipuri proiecte termoizolare și hidroizolare',
    url: 'https://www.isothermlux.md/galerie/video',
    type: 'website',
  }
}

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CallToAction } from '@/components/call-to-action'
import Script from 'next/script'

export default function VideoGallery() {
  const videos = [
    { title: 'Aplicare Spumă Poliuretanică - Mansardă', id: 'dc7hwYjJwlY', description: 'Videoclip profesional de aplicare spumă poliuretanică pe mansardă' },
    { title: 'Finisaj Fațadă - Casa Rezidențială', id: '0Vdy8Aopzx0', description: 'Finisaj de calitate pe fațada unei case rezidențiale' },
    { title: 'Hidroizolare Subsol - Construcție', id: 'dQw4w9WgXcQ', description: 'Proces de hidroizolare profesional a subsolului unei construcții' },
    { title: 'Termoizolare Hală Industrială', id: 'dQw4w9WgXcQ', description: 'Termoizolare profesională pe hală industrială' },
  ]

  const videoSchemas = videos.map(video => ({
    '@context': 'https://schema.org/',
    '@type': 'VideoObject',
    'name': video.title,
    'description': video.description,
    'thumbnailUrl': [
      `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${video.id}/sddefault.jpg`,
      `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
    ],
    'uploadDate': new Date().toISOString().split('T')[0],
    'duration': 'PT1M',
    'contentUrl': `https://www.youtube.com/embed/${video.id}`,
    'embedUrl': `https://www.youtube.com/embed/${video.id}`,
    'author': {
      '@type': 'Organization',
      'name': 'IsoThermLux'
    }
  }))

  return (
    <>
      {/* Video Schema Markup */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Galerie Video IsoThermLux',
            'description': 'Colecție de videoclipuri cu proiecte de termoizolare și hidroizolare',
            'url': 'https://www.isothermlux.md/galerie/video',
            'hasPart': videoSchemas
          })
        }}
      />
      <Header />
      <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="pt-40 pb-12 px-4 max-w-7xl mx-auto">
        <p className="text-sm text-muted-foreground">
          <a href="/" className="hover:text-accent transition-colors">Acasă</a>
          <span className="mx-2">/</span>
          <a href="/galerie/video" className="hover:text-accent transition-colors">Galerie</a>
          <span className="mx-2">/</span>
          <span>Video</span>
        </p>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Videoclipuri Proiecte</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Vizionează procesul de execuție și rezultatele finale ale proiectelor noastre de termoizolare și hidroizolare.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {videos.map((video, idx) => (
              <div key={idx} className="bg-card rounded-lg overflow-hidden border border-border group">
                <div className="relative aspect-video bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?mute=1&controls=0&modestbranding=1&fs=0&rel=0`}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border pt-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Dorești o ofertă gratuită?</h2>
            <a href="/calculator" className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition">
              Solicită ofertă acum →
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

