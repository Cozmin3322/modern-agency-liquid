import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Calendar, User, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | IsoThermLux - Articole despre Termoizolare și Hidroizolare în Moldova',
  description: 'Citește articole utile și profesionale despre termoizolare, hidroizolare, economie de energie, sfaturi pentru casa ta. Ghiduri complete pentru izolație termică.',
  keywords: 'blog termoizolare, hidroizolare, articole termoizolare, sfaturi energetice, izolare termică, spumă poliuretanică, hidroizolare fundație, economie gaz',
  alternates: {
    canonical: 'https://www.isothermlux.md/blog',
    languages: {
      ro: 'https://www.isothermlux.md/blog',
    },
  },
  openGraph: {
    title: 'Blog IsoThermLux - Articole Termoizolare și Hidroizolare',
    description: 'Citește articole profesionale despre termoizolare, hidroizolare și eficiență energetică. Ghiduri complete, sfaturi și calcule pentru investiția ta.',
    type: 'website',
    locale: 'ro_MD',
    url: 'https://www.isothermlux.md/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const blogPosts = [
  {
    id: 'termoizolare-casa',
    title: 'Termoizolare cu Spumă Poliuretanică: Ghidul Complet',
    excerpt: 'Descoperă cum funcționează termoizolarea cu spumă poliuretanică și care sunt beneficiile pentru casa ta.',
    author: 'IsoThermLux Team',
    date: '15 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-casa-termoizolare-01.jpg',
    category: 'Termoizolare',
    slug: 'termoizolare-casa-ghid-complet',
  },
  {
    id: 'hidroizolare-fundatie',
    title: 'Hidroizolare Profesională: Protejează Fundația Casei',
    excerpt: 'Ce este hidroizolarea și de ce este esențială pentru protecția proprietății tale.',
    author: 'IsoThermLux Team',
    date: '12 ianuarie 2024',
    readTime: '4 min',
    image: '/images/hidroizolare-fundatie-02.jpg',
    category: 'Hidroizolare',
    slug: 'hidroizolare-fundatie-protectie',
  },
  {
    id: 'economii-energie-termoizolare',
    title: 'Cum să Economisești 70% la Factura de Gaz cu Termoizolare',
    excerpt: 'Calculează exact cât vei economisi și cum se recuperează investiția în termoizolare.',
    author: 'IsoThermLux Team',
    date: '10 ianuarie 2024',
    readTime: '6 min',
    image: '/images/beneficii-termoizolare.webp',
    category: 'Economie',
    slug: 'economii-45-50-procent-gaz-termoizolare',
  },
  {
    id: 'izolare-mansarda-moldova',
    title: 'Izolarea Mansardei: Soluția Pentru Spațiu Locuibil',
    excerpt: 'Transformă mansarda ta într-un spațiu confortabil cu izolație termică profesională.',
    author: 'IsoThermLux Team',
    date: '8 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-mansard-new.webp',
    category: 'Termoizolare',
    slug: 'izolare-mansarda-spatiu-locuibil',
  },
  {
    id: 'certificare-basf-calitate',
    title: 'Materiale Premium Certificate ISO 9001 - Garantia Calității',
    excerpt: 'Calitatea și durabilitatea sunt prioritățile noastre în fiecare proiect.',
    author: 'IsoThermLux Team',
    date: '5 ianuarie 2024',
    readTime: '4 min',
    image: '/images/premium-services-foam.png',
    category: 'Materiale',
    slug: 'materiale-basf-iso-9001-calitate',
  },
  {
    id: 'garanzie-25-ani-izolare',
    title: 'Garanție 25 Ani: Cum Protejezi Investiția Ta',
    excerpt: 'Află ce acoperă garanția noastră și de ce este cea mai lungă din industrie.',
    author: 'IsoThermLux Team',
    date: '2 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-rezultat-final-01.jpg',
    category: 'Garanție',
    slug: 'garantie-25-ani-protectie-investitie',
  },
  {
    id: 'spuma-celula-deschisa-vs-inchisa',
    title: 'Spumă cu Celulă Deschisă vs Celulă Închisă: Care e Potrivită pentru Tine?',
    excerpt: 'Diferențele reale dintre cele două tipuri de spumă poliuretanică și cum alegi varianta corectă pentru acoperiș, pereți sau fundație.',
    author: 'IsoThermLux Team',
    date: '28 ianuarie 2024',
    readTime: '6 min',
    image: '/images/project-aplicare-spuma-01.webp',
    category: 'Materiale',
    slug: 'celula-deschisa-vs-inchisa-diferente',
  },
  {
    id: 'pret-izolare-spuma-poliuretanica',
    title: 'Cât Costă Izolarea cu Spumă Poliuretanică în 2024? Prețuri pe Metru Pătrat',
    excerpt: 'O analiză transparentă a prețurilor pentru izolarea cu spumă, în funcție de grosime, tip de spumă și suprafața lucrării.',
    author: 'IsoThermLux Team',
    date: '25 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-finisaj-01.webp',
    category: 'Prețuri',
    slug: 'pret-izolare-spuma-poliuretanica-2024',
  },
  {
    id: 'izolare-hala-industriala',
    title: 'Izolarea Halelor Industriale și Spațiilor de Producție cu Spumă Poliuretanică',
    excerpt: 'De ce spuma poliuretanică este alegerea optimă pentru hale, depozite și clădiri industriale cu suprafețe mari.',
    author: 'IsoThermLux Team',
    date: '22 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-casa-termoizolare-01.jpg',
    category: 'Industrial',
    slug: 'izolare-hale-industriale-spuma-poliuretanica',
  },
  {
    id: 'spuma-vs-vata-minerala',
    title: 'Spumă Poliuretanică vs Vată Minerală: Comparație Completă',
    excerpt: 'Punem față în față cele două materiale izolatoare cele mai populare: performanță termică, durabilitate, preț și timp de aplicare.',
    author: 'IsoThermLux Team',
    date: '19 ianuarie 2024',
    readTime: '7 min',
    image: '/images/beneficii-termoizolare.webp',
    category: 'Materiale',
    slug: 'spuma-poliuretanica-vs-vata-minerala',
  },
  {
    id: 'izolare-fonica-spuma',
    title: 'Fonoizolare cu Spumă Poliuretanică: Cum Reduci Zgomotul din Casă',
    excerpt: 'Spuma poliuretanică nu izolează doar termic — explicăm cum contribuie și la reducerea zgomotului din exterior și dintre etaje.',
    author: 'IsoThermLux Team',
    date: '16 ianuarie 2024',
    readTime: '4 min',
    image: '/images/project-mansard-new.webp',
    category: 'Fonoizolare',
    slug: 'fonoizolare-spuma-poliuretanica-reducere-zgomot',
  },
  {
    id: 'izolare-iarna-spuma',
    title: 'Se Poate Aplica Spumă Poliuretanică Iarna? Ce Trebuie Să Știi',
    excerpt: 'Mulți clienți cred că izolarea se face doar primăvara sau vara. Explicăm condițiile reale în care aplicarea iarna este posibilă și sigură.',
    author: 'IsoThermLux Team',
    date: '13 ianuarie 2024',
    readTime: '4 min',
    image: '/images/project-rezultat-final-01.jpg',
    category: 'Sfaturi',
    slug: 'aplicare-spuma-poliuretanica-iarna',
  },
  {
    id: 'greseli-izolare-termica',
    title: '7 Greșeli Frecvente la Izolarea Termică a Casei (și Cum le Eviți)',
    excerpt: 'De la grosimea insuficientă la alegerea greșită a materialului — cele mai comune erori care reduc eficiența izolației termice.',
    author: 'IsoThermLux Team',
    date: '9 ianuarie 2024',
    readTime: '6 min',
    image: '/images/project-casa-termoizolare-01.jpg',
    category: 'Sfaturi',
    slug: 'greseli-frecvente-izolare-termica',
  },
  {
    id: 'izolare-fundatie-hidroizolatie',
    title: 'Hidroizolație Poliuree pentru Fundație: Soluția Modernă Contra Umidității',
    excerpt: 'Cum funcționează hidroizolația cu poliuree, de ce e mai eficientă decât metodele clasice și cât costă aplicarea pentru o fundație.',
    author: 'IsoThermLux Team',
    date: '6 ianuarie 2024',
    readTime: '5 min',
    image: '/images/hidroizolare-fundatie-02.jpg',
    category: 'Hidroizolare',
    slug: 'hidroizolatie-poliuree-fundatie-moderna',
  },
  {
    id: 'izolare-container-metalic',
    title: 'Izolarea Containerelor Metalice și Construcțiilor din Tablă cu Spumă Poliuretanică',
    excerpt: 'Containere de locuit, ateliere sau depozite metalice: cum le transformi în spații confortabile termic cu izolație din spumă.',
    author: 'IsoThermLux Team',
    date: '3 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-finisaj-01.webp',
    category: 'Industrial',
    slug: 'izolare-containere-metalice-spuma-poliuretanica',
  },
  {
    id: 'durata-viata-spuma-poliuretanica',
    title: 'Cât Timp Rezistă Spuma Poliuretanică? Durabilitate și Întreținere',
    excerpt: 'Adevărul despre durata de viață reală a spumei poliuretanice, factorii care o influențează și ce întreținere necesită în timp.',
    author: 'IsoThermLux Team',
    date: '30 decembrie 2023',
    readTime: '4 min',
    image: '/images/premium-services-foam.png',
    category: 'Materiale',
    slug: 'durata-viata-spuma-poliuretanica-intretinere',
  },
]

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog IsoThermLux',
  description: 'Articole și sfaturi despre termoizolare, hidroizolare și economie de energie',
  url: 'https://www.isothermlux.md/blog',
  publisher: {
    '@type': 'Organization',
    name: 'IsoThermLux',
    url: 'https://www.isothermlux.md',
  },
  blogPost: blogPosts.map(post => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
  })),
}

export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListSchema),
        }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Blog Header */}
        <section className="pt-32 pb-16 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Blog IsoThermLux</p>
              <h1 className="text-5xl lg:text-6xl font-serif font-medium mb-6">Articole și Sfaturi</h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Citește articole utile despre termoizolare, hidroizolare și cum să economisești energie pentru casa ta.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="group border border-border rounded-none overflow-hidden hover:border-accent transition-colors bg-background">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-serif font-semibold leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-foreground/70 text-sm leading-relaxed">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-foreground/60 pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⏱ {post.readTime}</span>
                      </div>
                    </div>

                    {/* Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all mt-4"
                    >
                      Citește Articolul <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 md:py-28 bg-background border-t border-border">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6">Rămâi Informat</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Înscrie-te la newsletter pentru sfaturi săptămânale despre termoizolare și economie de energie.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="flex-1 px-4 py-3 rounded-none bg-card border border-border focus:border-accent outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white font-semibold rounded-none hover:bg-accent/90 transition-colors"
              >
                Înscrie-te
              </button>
            </form>
            <p className="text-xs text-foreground/50 mt-4">
              Nu trimitem spam. Te poți dezabona oricând.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Vrei o Ofertă Personalizată?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Contactează-ne pentru o consultație gratuită și o ofertă personalizată.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-none font-semibold hover:bg-accent/90 transition-colors"
              >
                Cere Ofertă <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+37360811115"
                className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-none font-semibold hover:bg-accent/10 transition-colors"
              >
                Sună Acum
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
