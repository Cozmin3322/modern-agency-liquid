"use client"

import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./highlighted-text"
import { useParallax } from "@/hooks/use-parallax"

const philosophyItems = [
  {
    title: "40-50% Economie Energie",
    description:
      "Reducere confirmată a costurilor de încălzire. Investiția se recuperează în 2-3 ani prin economiile la facturile de energie.",
  },
  {
    title: "Materiale Premium",
    description:
      "Spumă poliuretanică certificată ISO 9001. Durabilitate și performanță garantate. Fără compromiuri la calitate.",
  },
  {
    title: "Garanție 25 Ani",
    description: "Garanție scrisă pentru material și manoperă. Durabilitate dovedită. Serviciu de încredere pentru generații.",
  },
  {
    title: "14 Ani de Experiență",
    description: "IsoThermLux a fost înființată în 2010. 3971 proiecte finalizate. Echipă proprie și servicii complete de la început până la final.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  // Parallax subtil pe imaginea din stânga — "float" editorial
  const { ref: imgContainerRef, offset: imgOffset } = useParallax(0.12)

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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">De Ce Noi?</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-balance">
              Beneficiile
              <br />
              <HighlightedText>Termoizolării</HighlightedText>
            </h2>

            {/* Imagine cu parallax "float" — overflow hidden ca imaginea să nu iasă din container */}
            <div
              ref={imgContainerRef as React.RefObject<HTMLDivElement>}
              className="relative hidden lg:block overflow-hidden rounded-none"
              style={{ height: '24rem' }}
            >
              <img
                src="/images/economie-70-procent-gaz.jpg"
                alt="Tehnician IsoThermLux aplicând spumă poliuretanică - Beneficiile termoizolării"
                className="opacity-90 w-full h-full object-cover will-change-transform"
                style={{
                  transform: `translateY(${imgOffset}px)`,
                  // Puțin mai înaltă ca să nu apară spații goale la deplasare
                  height: 'calc(100% + 40px)',
                  marginTop: '-20px',
                }}
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Investiția în termoizolare se recuperează în 2-3 ani prin economiile la facturile de energie. Noi oferim garanție 25 ani și echipă profesionistă din Moldova.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
