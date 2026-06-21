'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { number: '14', label: 'Ani experiență' },
  { number: '3971', label: 'Clienți mulțumiți' },
  { number: '4200+', label: 'Clădiri izolate' },
]

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: value }
  return { target: parseInt(match[1], 10), suffix: match[2] }
}

function CountUpStat({ number, label }: { number: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(0)
  const { target, suffix } = parseStat(number)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 1500
        const startTime = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref}>
      <p className="text-4xl sm:text-5xl font-serif font-bold leading-none">
        {value}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm uppercase tracking-wide mt-2 text-white/90">{label}</p>
    </div>
  )
}

export function StatsBar() {
  return (
    <section className="bg-accent py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 text-left text-white">
          {STATS.map((stat) => (
            <CountUpStat key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
