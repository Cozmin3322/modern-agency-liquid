import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.isothermlux.md'
  const lastModified = new Date()

  const routes = [
    // Main pages
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/termoizolare`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hidroizolare`, lastModified, changeFrequency: 'weekly', priority: 0.9 },

    // Termoizolare subpages
    { url: `${baseUrl}/fatade`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/termoizolare/mansarda`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/termoizolare/casa`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/termoizolare/hala-industriala`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // Hidroizolare subpages
    { url: `${baseUrl}/hidroizolare/fundatie`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hidroizolare/acoperis`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hidroizolare/subsol`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // Local pages
    { url: `${baseUrl}/locatii/chisinau`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/locatii/balti`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Support pages
    { url: `${baseUrl}/despre-noi`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/recenzii`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/servicii`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/calculator-oferta`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/fonoizolare`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/beneficii`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ce-este-spuma-poliuretanica`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/spuma-cu-celula-inchisa`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/galerie/video`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/galerie/foto`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/intrebari-frecvente`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portofoliu`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Blog posts
    { url: `${baseUrl}/blog/termoizolare-casa-ghid-complet`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/hidroizolare-fundatie-protectie`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/economii-70-procent-gaz-termoizolare`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/izolare-mansarda-spatiu-locuibil`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/materiale-basf-iso-9001-calitate`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/garantie-25-ani-protectie-investitie`, lastModified, changeFrequency: 'monthly', priority: 0.6 }
  ]

  return routes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }))
}
