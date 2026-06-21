'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import { useParallax } from '@/hooks/use-parallax'

interface HeroContent {
  heroTitle: string
  heroSubtitle: string
}

interface HeroClientProps {
  data: HeroContent
}

export function HeroClient({ data }: HeroClientProps) {
  const { ref, offset } = useParallax(0.25)

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full min-h-[600px] md:min-h-[720px] pt-28 md:pt-32 pb-10 overflow-hidden"
    >
      {/* Background — hero image, full-bleed, with parallax on desktop */}
      <div
        className="absolute left-0 right-0 will-change-transform"
        style={{ top: '-10%', bottom: '-10%', transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/images/hero-family-thermostat.png"
          alt="Familie confortabilă acasă, izolată cu spumă poliuretanică"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Text panel — overlaid on top of the image */}
        <div className="max-w-xl bg-accent/20 text-white p-8 md:p-12 rounded-sm backdrop-blur-sm">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-white/80 mb-2">
            {data.heroTitle || 'Izolații cu Spumă'}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-6">
            {data.heroSubtitle || 'Servicii de Calitate Premium'}
          </h1>

          <div className="bg-white/10 border border-white/20 rounded-sm p-5 mb-6">
            <p className="text-lg md:text-xl font-bold uppercase leading-snug mb-1">
              Ne deplasăm oriunde în Moldova
            </p>
            <p className="text-lg md:text-xl font-bold uppercase leading-snug mb-3">
              Garanție până la 25 ani!
            </p>
            <p className="text-sm text-white/85">
              Longevitate între 50 și 80 de ani
            </p>
            <p className="text-sm text-white/85">
              Preț avantajos — de la 39 lei/mp pentru suprafețe mari
            </p>
          </div>

          <button
            onClick={scrollToContactForm}
            className="inline-flex items-center gap-2 bg-white text-accent px-7 py-3 font-semibold rounded-sm hover:bg-white/90 transition-colors"
          >
            <Phone className="w-4 h-4" /> Sună Acum
          </button>

          <p className="text-xs text-white/70 mt-4">
            Răspundem rapid · Ofertă gratuită · Fără obligații
          </p>
        </div>
      </div>
    </section>
  )
}
