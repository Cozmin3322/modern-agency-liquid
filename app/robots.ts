import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/', '/blog', '/blog/*', '/termoizolare', '/termoizolare/*',
          '/hidroizolare', '/hidroizolare/*',
          '/intrebari-frecvente', '/portofoliu', '/portofoliu/*',
          '/boiler', '/transport-industrial', '/fonoizolare',
          '/despre-noi', '/contact', '/recenzii', '/servicii',
          '/ce-este-spuma-poliuretanica', '/spuma-cu-celula-inchisa',
          '/galerie/foto', '/galerie/video', '/locatii/chisinau', '/locatii/balti'
        ],
        disallow: ['/admin', '/api', '/private'],
      },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'AhrefsBot', crawlDelay: 10 },
      { userAgent: 'SemrushBot', crawlDelay: 10 },
    ],
    sitemap: 'https://www.isothermlux.md/sitemap.xml',
    host: 'https://www.isothermlux.md',
  }
}
