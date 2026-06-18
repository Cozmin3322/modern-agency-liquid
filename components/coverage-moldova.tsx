'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const STATS = [
  { number: 14, suffix: '', label: 'Ani experiență' },
  { number: 3971, suffix: '', label: 'Proiecte finalizate' },
  { number: 25, suffix: ' ani', label: 'Garanție scrisă' },
]

export function CoverageMoldova() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(STATS.map(() => 0))

  useEffect(() => {
    const target = statsRef.current
    if (!target) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setAnimated(STATS.map(s => s.number)); return }

    let frame = 0
    let done = false

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done) {
        done = true
        const start = performance.now()
        const duration = 1600
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setAnimated(STATS.map(s => Math.round(s.number * eased)))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        observer.disconnect()
      }
    }, { threshold: 0.35 })

    observer.observe(target)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [])

  return (
    <section className="w-full">

      {/* Stats — 3 cifre cheie */}
      <div ref={statsRef} className="py-16 md:py-20 bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-white mb-2">
                  {animated[i].toLocaleString('ro-RO')}{stat.suffix}
                </p>
                <p className="text-xs md:text-sm text-white/60 tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map + coverage */}
      <div className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Acoperire</p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">
                Acoperim toată<br />Moldova
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Echipele noastre intervin în Chișinău și în toată Moldova. Deplasare gratuită pentru evaluare, indiferent de localitate.
              </p>
              <Link
                href="/portofoliu"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200"
              >
                Vezi proiectele noastre <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Map */}
            <Link href="/portofoliu" className="relative h-72 md:h-96 block group">
              <Image
                src="/images/moldova-map.png"
                alt="Hartă acoperire IsoThermLux Moldova"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain group-hover:opacity-80 transition-opacity duration-300"
                quality={75}
              />
            </Link>

          </div>
        </div>
      </div>

    </section>
  )
}
