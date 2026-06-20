'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const RAIOANE = [
  'Chișinău', 'Bălți', 'Orhei', 'Soroca', 'Ungheni', 'Cahul', 'Hîncești', 'Strășeni',
  'Anenii Noi', 'Ialoveni', 'Căușeni', 'Edineț', 'Florești', 'Drochia', 'Comrat',
]

export function CoverageMoldova() {
  const [raion, setRaion] = useState('')

  return (
    <section className="w-full">

      {/* Map + coverage */}
      <div className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-2">
            Acoperire în toată <span className="text-accent">Moldova</span>.
          </h2>
          <p className="text-center text-muted-foreground mb-10">Alege raionul căutat</p>

          <div className="max-w-xs mx-auto mb-14">
            <select
              value={raion}
              onChange={(e) => setRaion(e.target.value)}
              className="w-full border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:border-accent"
            >
              <option value="">Selectează raionul</option>
              {RAIOANE.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-sm text-accent font-bold">/ 05</span>
                <span className="h-px flex-1 max-w-[60px] bg-border" />
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Acoperire</p>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">
                Acoperim toată<br />Moldova
              </h3>
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
