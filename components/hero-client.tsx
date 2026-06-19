'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowDown, Zap, Gift, ShieldCheck } from 'lucide-react'
import { useParallax } from '@/hooks/use-parallax'

interface HeroContent {
  heroTitle: string
  heroSubtitle: string
}

interface HeroClientProps {
  data: HeroContent
}

export function HeroClient({ data }: HeroClientProps) {
  const heroRef = useRef<HTMLElement>(null)
  const { ref: parallaxRef, offset } = useParallax(0.35)

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Mobile Background - static, fără parallax */}
      <section 
        ref={heroRef} 
        className="md:hidden relative w-full min-h-screen flex items-center justify-center overflow-y-auto bg-black"
      >
        <Image
          src="/images/hero-mobile-containers.webp"
          alt="Izolare profesională Moldova"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent" />
            <p className="text-sm tracking-[0.3em] uppercase text-center text-accent font-semibold">
              {'Izolare Profesională'}
            </p>
            <span className="h-px w-8 bg-accent" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-balance text-center text-white mb-6 tracking-tight leading-[1.1]" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>
            {data.heroTitle}
            <br />
            <span className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>{data.heroSubtitle}</span>
          </h1>

          <div className="space-y-8">
            <p className="text-base md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium" style={{textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}>
              {'Cu spumă poliuretanică de calitate superioară. Garanție 25 ani. Economisește până la 40-50% la încălzire.'}
            </p>

            <button 
              onClick={scrollToContactForm}
              className="group relative px-8 py-3 border border-white/60 text-white font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-3">
              {'Cere Ofertă Gratuită'}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-white">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white/80" />
                <span className="text-xs sm:text-sm text-white/80">Răspundem rapid</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-white/80" />
                <span className="text-xs sm:text-sm text-white/80">Ofertă gratuită</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white/80" />
                <span className="text-xs sm:text-sm text-white/80">Fără obligații</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent/50" />
        </div>
      </section>

      {/* Desktop Background - Parallax real */}
      <section 
        ref={(el) => {
          // @ts-ignore
          heroRef.current = el
          // @ts-ignore
          parallaxRef.current = el
        }}
        className="hidden md:flex relative w-full min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Imaginea de fundal cu parallax */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url('/images/hero-izolator-professional.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offset}px)`,
            // Puțin mai mare decât 100% ca să nu apară margini albe la scroll
            top: '-10%',
            bottom: '-10%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent" />
            <p className="text-sm tracking-[0.3em] uppercase text-center text-accent font-semibold">
              {'Izolare Profesională'}
            </p>
            <span className="h-px w-8 bg-accent" />
          </div>

          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-balance text-center text-white mb-6 tracking-tight leading-[1.1]" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>
            {data.heroTitle}
            <br />
            <span className="text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>{data.heroSubtitle}</span>
          </p>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium" style={{textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}>
              {'Cu spumă poliuretanică de calitate superioară. Garanție 25 ani. Economisește până la 40-50% la încălzire.'}
            </p>

            <button 
              onClick={scrollToContactForm}
              className="group relative px-8 py-3 border border-white/60 text-white font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-3">
              {'Cere Ofertă Gratuită'}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-white">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white/80" />
                <span className="text-xs sm:text-sm text-white/80">Răspundem rapid</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-white/80" />
                <span className="text-xs sm:text-sm text-white/80">Ofertă gratuită</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white/80" />
                <span className="text-xs sm:text-sm text-white/80">Fără obligații</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ArrowDown className="w-6 h-6 text-accent/50" />
        </div>
      </section>
    </>
  )
}
