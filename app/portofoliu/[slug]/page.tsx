import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft } from 'lucide-react'
import { getProjectBySlug, projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Proiect - IsoThermLux',
    }
  }

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.keywords.join(', '),
    canonical: `https://isothermlux.md/portofoliu/${project.slug}`,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.title,
    description: project.metaDescription,
    image: project.image,
    datePublished: `${project.year}-01-01`,
    author: {
      '@type': 'Organization',
      name: 'IsoThermLux',
      url: 'https://isothermlux.md',
    },
    location: {
      '@type': 'Place',
      name: project.location,
    },
  }

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <Script
          id="project-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Back Button - Positioned with proper margin to avoid header overlap */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/portofoliu" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition group mb-8">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Înapoi la Portofoliu</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-foreground/70">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Categoria</p>
                  <p className="font-semibold text-accent">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Locație</p>
                  <p className="font-semibold">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Anul</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              </div>
            </div>
        </section>

        {/* Image */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Short Description */}
            <div className="mb-12 p-6 bg-card border border-border rounded-lg">
              <p className="text-xl text-foreground/80 leading-relaxed">{project.shortDesc}</p>
            </div>

            {/* Long Description */}
            <div 
              className="prose prose-invert max-w-none text-foreground/80 mb-12"
              dangerouslySetInnerHTML={{ __html: project.longDesc }}
            />

            {/* Keywords Section */}
            <div className="py-8 border-t border-b border-border mb-12">
              <h2 className="text-2xl font-serif font-medium mb-4">Cuvinte Cheie</h2>
              <div className="flex flex-wrap gap-3">
                {project.keywords.map((keyword) => (
                  <span key={keyword} className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Interesează-te de Serviciile Noastre</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Fiecare proiect este unic. Contact pentru o consultație personalizată și o ofertă detaliată.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:++37378370243" 
                className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Sună Acum
              </a>
              <a 
                href="/calculator-oferta" 
                className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition"
              >
                Calculator Ofertă
              </a>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-medium mb-8">Alte Proiecte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === project.category && p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/portofoliu/${relatedProject.slug}`}>
                    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition group cursor-pointer">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition">{relatedProject.title}</h3>
                        <p className="text-foreground/70 text-sm">{relatedProject.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
