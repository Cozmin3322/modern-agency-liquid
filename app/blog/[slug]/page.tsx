import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'

interface BlogArticle {
  title: string
  author: string
  date: string
  readTime: string
  image: string
  content: string
  excerpt: string
  keywords: string
}

const articles: Record<string, BlogArticle> = {
  'termoizolare-casa-ghid-complet': {
    title: 'Termoizolare cu Spumă Poliuretanică: Ghidul Complet',
    author: 'IsoThermLux Team',
    date: '15 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-casa-termoizolare-01.jpg',
    excerpt: 'Descoperă cum funcționează termoizolarea cu spumă poliuretanică, beneficiile complete și cum economisești 40-50% la energie.',
    keywords: 'termoizolare, spumă poliuretanică, izolare termică, ghid complet, economia de energie, izolație casă',
    content: `
      <h2>Ce este Termoizolarea?</h2>
      <p>Termoizolarea este un proces de aplicare a unui material izolator pentru a reduce transferul de căldură între interior și exterior. Cea mai eficientă și modernă metodă este folosirea spumei poliuretanice.</p>

      <h2>Beneficiile Termoizolării</h2>
      <ul>
        <li><strong>Economie de energie:</strong> Reducere de 40-50% la costurile de încălzire</li>
        <li><strong>Confort termic:</strong> Temperatură constantă în toată casa</li>
        <li><strong>Fără punți termice:</strong> Spuma se adaptează la orice formă</li>
        <li><strong>Durabilitate:</strong> Garanție 25 ani cu materiale premium certificate ISO 9001</li>
      </ul>

      <h2>Cum Funcționează Spuma Poliuretanică?</h2>
      <p>Spuma poliuretanică se aplică prin pulverizare. Ea se extinde și umple toate micile goluri, creând o barieră termică completă fără fisuri. Procesul durează 1-2 zile și nu necesită dezlipire a pereților vechi.</p>

      <h2>Costuri și ROI</h2>
      <p>Investiția în termoizolare se recuperează în 2-3 ani prin economiile la facturile de gaz. După aceea, beneficiezi de energie ieftină pentru următorii 25 de ani.</p>

      <h2>De Ce Alege IsoThermLux?</h2>
      <p>Noi folosim spumă poliuretanică certificată ISO 9001. Echipa noastră are 12 ani de experiență cu 500+ proiecte finalizate. Oferim garanție scrisă 25 ani pe toată lucrarea.</p>
    `,
  },
  'hidroizolare-fundatie-protectie': {
    title: 'Hidroizolare Profesională: Protejează Fundația Casei',
    author: 'IsoThermLux Team',
    date: '12 ianuarie 2024',
    readTime: '4 min',
    image: '/images/hidroizolare-fundatie-02.jpg',
    excerpt: 'Ce este hidroizolarea și de ce este esențială pentru protecția proprietății tale. Metode, costuri și beneficii.',
    keywords: 'hidroizolare, fundație, protecție umiditate, infiltrații apă, hidroizolare subsol, profesională',
    content: `
      <h2>De Unde Vin Pierderile de Căldură?</h2>
      <p>Hidroizolarea este procesul de protejare a structurilor contra infiltrării apei. Este una dintre cele mai importante investiții pe care o poți face pentru a proteja casa ta pe termen lung.</p>

      <h2>Semnele că Ai Nevoie de Hidroizolare</h2>
      <ul>
        <li>Pereți uzi în subsol sau la bază</li>
        <li>Mirosuri de mucegai</li>
        <li>Eflorescență (pete albe pe perete)</li>
        <li>Ape subterane care cresc în primăvară</li>
      </ul>

      <h2>Metode de Hidroizolare</h2>
      <p><strong>Interior:</strong> Aplicare pe pereții interiori (mai economic, mai rapid)</p>
      <p><strong>Exterior:</strong> Excavare și protecție pe exterior (mai durabil, mai scump)</p>
      <p><strong>Combinat:</strong> Exterior + interior pentru protecție maximă</p>

      <h2>Costuri și Beneficii</h2>
      <p>Hidroizolarea protejează investiția ta într-o casă. Un subsol uscat poate fi transformat în spațiu locuibil suplimentar, crescând valoarea proprietății.</p>

      <h2>Contactează-ne pentru Evaluare</h2>
      <p>Oferim consultații gratuite pe loc. Vom evalua situația și recomanda cea mai bună soluție pentru casa ta.</p>
    `,
  },
  'economii-45-50-procent-gaz-termoizolare': {
    title: 'Cum să Economisești 40-50% la Factura de Gaz cu Termoizolare',
    author: 'IsoThermLux Team',
    date: '10 ianuarie 2024',
    readTime: '6 min',
    image: '/images/beneficii-termoizolare.webp',
    excerpt: 'Calculează exact cât vei economisi și cum se recuperează investiția în termoizolare în 2-3 ani.',
    keywords: 'economie gaz, termoizolare, ROI, eficiență energetică, calculator, costuri termoizolare, recuperare investiție',
    content: `
      <h2>De Unde Vin Pierderile de Căldură?</h2>
      <ul>
        <li>Acoperis și mansardă: 25-30%</li>
        <li>Pereți: 20-25%</li>
        <li>Ferestre și usi: 15-20%</li>
        <li>Subsol și fundație: 10-15%</li>
      </ul>

      <h2>Calculul Economiilor</h2>
      <p>Dacă plătești 5000 RON anual pentru gaz, cu termoizolare poți economisi 2000-2500 RON. Investiția se recuperează în 2-3 ani.</p>

      <h2>Calculator ROI</h2>
      <p>Folosește calculatorul nostru pe website pentru a estima exact economiile tale în funcție de suprafață și locație.</p>

      <h2>Exemplu Practic</h2>
      <p><strong>Casa:</strong> 150 m² locuibili</p>
      <p><strong>Factură gaz actual:</strong> 5000 RON/an</p>
      <p><strong>După termoizolare:</strong> 2750 RON/an (45% economie)</p>
      <p><strong>Investiție termoizolare:</strong> 45000 RON (300 RON/m²)</p>
      <p><strong>Recuperată în:</strong> 2 ani</p>

      <h2>Beneficii pe Termen Lung</h2>
      <p>După recuperarea investiției, economisești 2250 RON anual pentru 24 de ani - total 54000 RON cu garanție completă.</p>
    `,
  },
  'izolare-mansarda-spatiu-locuibil': {
    title: 'Izolarea Mansardei: Soluția Pentru Spațiu Locuibil',
    author: 'IsoThermLux Team',
    date: '8 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-mansard-new.webp',
    excerpt: 'Transformă mansarda ta într-un spațiu confortabil și locuibil cu izolație termică profesională.',
    keywords: 'izolare mansardă, spațiu locuibil, termoizolare mansardă, confort termic, spumă poliuretanică',
    content: `
      <h2>Transformă Mansarda în Cameră</h2>
      <p>Mansarda nedezoltată este o risipă de spațiu valoros. Termoizolarea profesională transformă mansarda într-o cameră confortabilă și caldă.</p>

      <h2>Avantajele Mansardei Izolate</h2>
      <ul>
        <li>Camere suplimentare pentru familie</li>
        <li>Birou sau spațiu de lucru</li>
        <li>Recămaturi pentru oaspeți</li>
        <li>Incrementare valoare proprietății cu 15-20%</li>
      </ul>

      <h2>Tehnologia de Izolare</h2>
      <p>Spuma poliuretanică este ideală pentru mansarde deoarece se adaptează la orice formă și unghi al acoperișului, creând etanșeitate completă.</p>

      <h2>Proces de Lucru</h2>
      <ol>
        <li>Evaluare și măsurare suprafeței</li>
        <li>Preparare spațiului</li>
        <li>Aplicare spumă poliuretanică în straturi</li>
        <li>Finisare și verificare calitate</li>
      </ol>

      <h2>Rezultate</h2>
      <p>După izolare, mansarda va fi confortabilă în orice anotimp. Temperatura va fi 5-10°C mai mare iarna și mai rece vara comparativ cu înainte.</p>
    `,
  },
  'materiale-basf-iso-9001-calitate': {
    title: 'Materiale Premium Certificate ISO 9001 - Garantia Calității',
    author: 'IsoThermLux Team',
    date: '5 ianuarie 2024',
    readTime: '4 min',
    image: '/images/premium-services-foam.png',
    excerpt: 'Spumă poliuretanică certificată ISO 9001 garantează calitate și durabilitate. De ce alegem doar materiale premium.',
    keywords: 'ISO 9001, materiale premium, spumă poliuretanică, calitate, durabilitate, garanție 25 ani',
    content: `
      <h2>Angajament Față de Calitate</h2>
      <p>IsoThermLux nu acceptă compromisuri atunci când vine vorba de calitate. De aceea folosim exclusiv spumă poliuretanică certificată ISO 9001 pentru fiecare proiect.</p>

      <h2>Care Este Certificarea ISO 9001?</h2>
      <p>ISO 9001 este certificarea internațională care garantează calitatea materialelor și proceselor de management. Aceasta asigură că produsele respectă standardele globale de calitate și durabilitate.</p>

      <h2>De Ce Materiale Premium Certificate?</h2>
      <ul>
        <li><strong>Calitate Premium:</strong> Materiale testate și certificate</li>
        <li><strong>Durabilitate Dovedită:</strong> 25+ ani de viață utilă</li>
        <li><strong>ISO 9001 Certificat:</strong> Procese de producție standardizate</li>
        <li><strong>Performanță Superioară:</strong> Coeficient termic optim</li>
        <li><strong>Sustenabilitate:</strong> Materiale eco-responsabile</li>
      </ul>

      <h2>Certificare ISO 9001</h2>
      <p>Certificarea ISO 9001 înseamnă că producția urmează standarde de calitate internaționale riguroase. Fiecare lot de material este testat și verificat.</p>

      <h2>Garanția Noastră</h2>
      <p>Grație materialelor premium certificate ISO 9001, IsoThermLux oferă garanție de 25 de ani pentru toate lucrările. Aceasta este cea mai lungă garanție din industrie.</p>
    `,
  },
  'garantie-25-ani-protectie-investitie': {
    title: 'Garanție 25 Ani: Cum Protejezi Investiția Ta',
    author: 'IsoThermLux Team',
    date: '2 ianuarie 2024',
    readTime: '5 min',
    image: '/images/project-rezultat-final-01.jpg',
    excerpt: 'Garanție scrisă 25 ani pe material și manopera. Protecție completă pentru investiția ta în termoizolare.',
    keywords: 'garanție 25 ani, protecție investiție, durabilitate, asigurare calitate, termoizolare garantat',
    content: `
      <h2>Protecție Completă a Investiției</h2>
      <p>IsoThermLux oferă garanție scrisă de 25 de ani pentru toate lucrarile de termoizolare și hidroizolare. Aceasta este una dintre cele mai lungi garanții disponibile pe piață.</p>

      <h2>Ce Acoperă Garanția?</h2>
      <ul>
        <li><strong>Material:</strong> Spuma poliuretanică și alte materiale utilizate</li>
        <li><strong>Manopera:</strong> Munca executată de echipa noastră</li>
        <li><strong>Performanță Termică:</strong> Proprietăți izolatoare garantate</li>
        <li><strong>Defecte de Fabricație:</strong> Orice problemă din vina noastră</li>
      </ul>

      <h2>Ce NU Acoperă Garanția?</h2>
      <ul>
        <li>Deteriorări cauzate de catastrofe naturale</li>
        <li>Modificări neautorizate ale lucrărilor</li>
        <li>Daunele cauzate de terți</li>
        <li>Uzura naturală după 25 de ani</li>
      </ul>

      <h2>Cum Funcționează?</h2>
      <p>După finalizarea lucrărilor, primești un certificat de garanție. În caz de problemă, contactează IsoThermLux și trimitem specialiștii pentru evaluare și reparații.</p>

      <h2>De Ce 25 de Ani?</h2>
      <p>Durata de 25 de ani corespunde vieții utile reale a spumei poliuretanice premium certificate ISO 9001. După teste și cercetări, aceasta este perioada în care performanța rămâne optimă.</p>

      <h2>Alătură-te Miilor de Clienți Mulțumiți</h2>
      <p>Contactează-ne astazi pentru a afla mai mult despre garanția noastră și cum poți proteja investiția ta pe termen lung.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]

  const descriptionMap: Record<string, string> = {
    'termoizolare-casa-ghid-complet': 'Ghid complet despre termoizolare cu spumă poliuretanică. Beneficii, costuri și proces. Descoperă cum economisești 40-50% la încălzire cu IsoThermLux.',
    'hidroizolare-fundatie-protectie': 'Hidroizolarea fundației este esențială. Cum protejezi casa de infiltrații. Metode și costuri pentru hidroizolare profesională în Moldova.',
    'economii-45-50-procent-gaz-termoizolare': 'Calculează exact cât vei economisi la factura de gaz cu termoizolare. Recuperare investiție în 2-3 ani. Calculator ROI gratuit IsoThermLux.',
    'izolare-mansarda-spatiu-locuibil': 'Transformă mansarda ta într-un spațiu confortabil cu izolație termică profesională. Spumă poliuretanică, garanție 25 ani, economie energie.',
    'materiale-basf-iso-9001-calitate': 'Spumă poliuretanică certificată ISO 9001 garantează calitate și durabilitate. De ce alegem doar materiale premium pentru fiecare proiect.',
    'garantie-25-ani-protectie-investitie': 'Garanție scrisă 25 ani pe material și manopera. Protecție completă pentru investiția ta în termoizolare și hidroizolare profesională.',
  }

  if (!article) {
    return {
      title: 'Articol negăsit | IsoThermLux',
      description: 'Articolul căutat nu există pe blogul IsoThermLux.',
      robots: { index: false, follow: true },
    }
  }

  const url = `https://www.isothermlux.md/blog/${slug}`

  return {
    title: `${article.title} | IsoThermLux`,
    description: descriptionMap[slug] || article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: descriptionMap[slug] || article.excerpt,
      type: 'article',
      locale: 'ro_MD',
      url,
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: descriptionMap[slug] || article.excerpt,
      images: [article.image],
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
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Articol nu găsit</h1>
          <Link href="/blog" className="text-accent hover:text-accent/80">
            Înapoi la blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const url = `https://www.isothermlux.md/blog/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://www.isothermlux.md${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://www.isothermlux.md',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IsoThermLux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.isothermlux.md/images/logo-isotherm-lux.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: 'https://www.isothermlux.md',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.isothermlux.md/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="min-h-screen">
        <article className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">Acasă</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground/80" aria-current="page">{article.title}</li>
              </ol>
            </nav>

            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la blog
            </Link>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-serif font-medium mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">{article.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-foreground/60 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <span className="text-sm">{`⏱ ${article.readTime} citire`}</span>
            </div>

            {/* Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={1200}
                height={630}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="mb-12 text-foreground/80 prose-content">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* CTA */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-serif font-medium mb-3">Vrei o Ofertă Personalizată?</h3>
              <p className="text-foreground/70 mb-6">
                Contactează echipa IsoThermLux pentru o consultație gratuită și estimare a costurilor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:++37378370243"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Sună Acum
                </a>
                <Link
                  href="/calculator-oferta"
                  className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
                >
                  Calculator
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

