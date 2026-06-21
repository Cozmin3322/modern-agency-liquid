import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CoverageMoldova() {
  return (
    <section className="w-full">

      {/* Map + coverage */}
      <div className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-2">
            Acoperire în toată <span className="text-accent">Moldova</span>.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-10">

            {/* Text */}
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Acoperire</p>
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
