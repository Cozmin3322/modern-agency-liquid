import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/', '/blog', '/blog/*', '/termoizolare',
          '/hidroizolare', '/calculator-oferta',
          '/intrebari-frecvente', '/portofoliu'
        ],
        disallow: ['/admin', '/api', '/private'],
      },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'AhrefsBot', crawlDelay: 10 },
      { userAgent: 'SemrushBot', crawlDelay: 10 },
    ],
    sitemap: 'https://isothermlux.md/sitemap.xml',
    host: 'https://isothermlux.md',
  }
}
