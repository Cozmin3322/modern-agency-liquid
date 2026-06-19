"use client"

import { useEffect, useRef, useState } from "react"
import { Thermometer, Droplet } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const expertiseAreas = [
  {
    title: "Termoizolare",
    description: "Izolație termică profesională cu spumă poliuretanică. Reducere costuri încălzire cu 40-50%. Fără punți termice. Aplicare rapidă în 1-2 zile. Garanție 25 ani.",
    icon: Thermometer,
  },
  {
    title: "Hidroizolare",
    description: "Protecție împotriva umidității pentru acoperișuri, fundații și subsoluri. Impermeabilizare completă. Rezistență la temperaturi extreme. Durabilitate 20+ ani.",
    icon: Droplet,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Serviciile Noastre</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-balance">
            <HighlightedText>Soluții</HighlightedText> complete
            <br />
            de izolare
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oferim servicii profesionale de termoizolare și hidroizolare pentru proprietăți rezidențiale și comerciale din toată Moldova.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
