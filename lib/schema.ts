export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'IsoThermLux',
  image: 'https://www.isothermlux.md/images/logo-isotherm-lux.png',
  description: 'Servicii profesionale de termoizolare și hidroizolare în Moldova. 12 ani experiență. Garanție 25 ani.',
  url: 'https://www.isothermlux.md',
  telephone: '+37360811115',
  email: 'infopoliuretan@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chișinău, Moldova',
    addressCountry: 'MD'
  },
  areaServed: 'MD',
  priceRange: '€€',
  sameAs: [
    'https://www.facebook.com/isothermlux',
    'https://www.instagram.com/isothermlux'
  ]
}

export const serviceSchema = (type: 'Termoizolare' | 'Hidroizolare', description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Servicii de ${type}`,
  description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'IsoThermLux',
    url: 'https://www.isothermlux.md'
  },
  areaServed: 'MD',
  availableLanguage: 'ro'
})

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a
    }
  }))
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url
  }))
})

