'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const OFFERS = [
  {
    image: '/images/gallery/termo-26.webp',
    title: 'Celulă Deschisă',
    rows: [
      ['10 cm grosime', '300 lei/mp + TVA'],
      ['15 cm grosime', '300 lei/mp + TVA'],
      ['20 cm grosime', '300 lei/mp + TVA'],
      ['25 cm grosime', '300 lei/mp + TVA'],
    ],
  },
  {
    image: '/images/gallery/termo-27.webp',
    title: 'Celulă Închisă',
    rows: [
      ['5 cm grosime', '300 lei/mp + TVA'],
      ['7 cm grosime', '300 lei/mp + TVA'],
      ['10 cm grosime', '300 lei/mp + TVA'],
      ['15 cm grosime', '300 lei/mp + TVA'],
    ],
  },
  {
    image: '/images/gallery/hidro-05.webp',
    title: 'Hidroizolație Poliuree',
    rows: [
      ['Aplicare', '300 lei/mp + TVA'],
    ],
  },
]

function OfferCard({ offer, index }: { offer: typeof OFFERS[number]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`border border-border transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="relative h-40">
        <Image src={offer.image} alt={offer.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-3">{offer.title}</h3>
        <ul className="space-y-1.5 mb-6">
          {offer.rows.map(([label, price]) => (
            <li key={label} className="text-sm text-muted-foreground flex justify-between gap-2">
              <span>{label}</span>
              <span className="font-medium text-foreground">{price}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact-form"
          className="block text-center bg-[#BD2626] text-white py-3 text-sm font-semibold uppercase tracking-wide hover:bg-[#a31f1f] transition-colors"
        >
          Solicită Oferta
        </a>
      </div>
    </div>
  )
}

export function PricingOffers() {
  return (
    <section id="tarife" className="py-16 md:py-24 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-12">Solicită Ofertă</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer, index) => (
            <OfferCard key={offer.title} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
