'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { number: 14, label: 'ANI EXPERIENTA' },
  { number: 3971, label: 'CLIENTI MULTUMITI' },
  { number: 4368, label: 'CLADIRI IZOLATE' },
]

export function CoverageMoldova() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [animatedStats, setAnimatedStats] = useState(() => STATS.map(() => 0))

  useEffect(() => {
    const target = statsRef.current
    if (!target) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setAnimatedStats(STATS.map((stat) => stat.number))
      return
    }

    let animationFrame = 0
    let hasAnimated = false

    const animateStats = () => {
      const duration = 1800
      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setAnimatedStats(STATS.map((stat) => Math.round(stat.number * eased)))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick)
        }
      }

      animationFrame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="w-full bg-background">
      {/* Statistics Bar */}
      <div className="w-full py-12 md:py-16" style={{ backgroundColor: '#2C3E50' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-3 gap-8 md:gap-16">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {animatedStats[idx].toLocaleString('en-US')}
                </div>
                <div className="text-xs md:text-sm text-white/90 tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Section */}
      <div className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12" style={{ backgroundColor: '#9B5F12' }} />
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/80">Acoperire</span>
              <div className="h-1 w-12" style={{ backgroundColor: '#9B5F12' }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Acoperire în toată <span className="text-[#7A4A0D]">Moldova</span>.
            </h2>
          </div>

          {/* Map centered */}
          <div className="flex justify-center mb-20">
            <Link href="/portofoliu" className="relative w-full h-96 max-w-lg hover:opacity-80 transition-opacity">
              <Image
                src="/images/moldova-map.png"
                alt="Hartă Moldova - Acoperire teritorială"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain cursor-pointer"
                quality={75}
              />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Termoizolare */}
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/project-casa-termoizolare-01.jpg"
                  alt="Termoizolare"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={75}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Termoizolare</h3>
                <a
                  href="/calculator"
                  className="inline-block px-8 py-3 rounded-lg font-bold text-white transition"
                  style={{ backgroundColor: '#9B5F12' }}
                >
                  SOLICITA OFERTA
                </a>
              </div>
            </div>

            {/* Hidroizolare */}
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/hidroizolare-fundatie-02.jpg"
                  alt="Hidroizolare"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={75}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Hidroizolare</h3>
                <a
                  href="/calculator"
                  className="inline-block px-8 py-3 rounded-lg font-bold text-white transition"
                  style={{ backgroundColor: '#9B5F12' }}
                >
                  SOLICITA OFERTA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
