'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'

interface HeroContent {
  heroTitle: string
  heroSubtitle: string
}

interface HeroClientProps {
  data: HeroContent
}

export function HeroClient({ data }: HeroClientProps) {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative w-full bg-[#F4EFE7] pt-36 md:pt-40 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT — Orange panel with copy */}
          <div className="bg-accent text-white p-8 md:p-12 rounded-sm">
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

          {/* RIGHT — Image */}
          <div className="relative h-72 md:h-[26rem] rounded-sm overflow-hidden">
            <Image
              src="/images/hero-family-thermostat.png"
              alt="Familie confortabilă acasă, izolată cu spumă poliuretanică"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
