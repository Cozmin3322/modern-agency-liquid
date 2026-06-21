'use client'

import { useParallax } from '@/hooks/use-parallax'

interface ServiceHeroProps {
  backgroundImage: string
  title: string
  titleAccent?: string
  subtitle: string
  ctaHref?: string
  ctaLabel?: string
  ctaSecondaryHref?: string
  ctaSecondaryLabel?: string
}

/**
 * Hero reutilizabil pentru paginile de servicii.
 * Parallax 35% pe desktop, static pe mobil.
 */
export function ServiceHero({
  backgroundImage,
  title,
  titleAccent,
  subtitle,
  ctaHref = 'tel:+37360811115',
  ctaLabel = 'Consultație Gratuită',
  ctaSecondaryHref,
  ctaSecondaryLabel,
}: ServiceHeroProps) {
  const { ref, offset } = useParallax(0.35)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Fundal cu parallax */}
      <div
        className="absolute will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset}px)`,
          inset: 0,
          top: '-10%',
          bottom: '-10%',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Conținut */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
              {title}
              {titleAccent && (
                <span className="block text-accent">{titleAccent}</span>
              )}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-md">
              {subtitle}
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href={ctaHref}
                className="bg-accent text-white px-8 py-3 rounded-none font-semibold hover:bg-accent/90 transition"
              >
                {ctaLabel}
              </a>
              {ctaSecondaryHref && ctaSecondaryLabel && (
                <a
                  href={ctaSecondaryHref}
                  className="border-2 border-white text-white px-8 py-3 rounded-none font-semibold hover:bg-white/10 transition"
                >
                  {ctaSecondaryLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
