"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, X } from "lucide-react"
import { projects } from "@/lib/projects"

const CATEGORIES = ["Toate", "Termoizolare", "Hidroizolare"]

const LOCATIONS = [
  "Toate locațiile",
  "Chișinău",
  "Bălți",
  "Orhei",
  "Cahul",
  "Ungheni",
  "Soroca",
  "Strășeni",
  "Ialoveni",
  "Hîncești",
  "Edineț",
  "Drochia",
  "Florești",
  "Rezina",
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [selectedLocation, setSelectedLocation] = useState("Toate locațiile")

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = selectedCategory === "Toate" || p.category === selectedCategory
      const locMatch = selectedLocation === "Toate locațiile" || p.location.includes(selectedLocation)
      return catMatch && locMatch
    })
  }, [selectedCategory, selectedLocation])

  const hasFilters = selectedCategory !== "Toate" || selectedLocation !== "Toate locațiile"

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="pt-32 pb-12 border-b border-border bg-[#1A1D21]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent">/ PORTOFOLIU</span>
              <span className="h-px w-12 bg-border" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4">Lucrările Noastre</h1>
            <p className="text-white/70 text-lg">
              <span className="text-accent font-semibold">3971</span> proiecte finalizate în toată Moldova.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-0 z-40 bg-background border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-3 items-center">
              {/* Category filters */}
              <div className="flex gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-sm font-mono uppercase tracking-wide border-2 transition ${
                      selectedCategory === cat
                        ? "border-accent bg-accent text-white"
                        : "border-border hover:border-accent text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border hidden md:block" />

              {/* Location filter */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="text-sm border border-border bg-background px-3 py-2 font-mono text-foreground focus:outline-none focus:border-accent cursor-pointer"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Clear filters */}
              {hasFilters && (
                <button
                  onClick={() => { setSelectedCategory("Toate"); setSelectedLocation("Toate locațiile") }}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition font-mono uppercase"
                >
                  <X className="w-3 h-3" /> Resetează
                </button>
              )}

              {/* Count */}
              <span className="ml-auto font-mono text-xs text-muted-foreground">
                {filtered.length} proiecte
              </span>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-muted-foreground font-mono text-sm">Nu există proiecte pentru filtrele selectate.</p>
                <button
                  onClick={() => { setSelectedCategory("Toate"); setSelectedLocation("Toate locațiile") }}
                  className="mt-4 text-accent underline text-sm"
                >
                  Resetează filtrele
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                {filtered.map((project) => (
                  <Link key={project.id} href={`/portofoliu/${project.slug}`}>
                    <div className="group bg-background overflow-hidden hover:bg-card transition-colors duration-300 h-full flex flex-col">
                      <div className="h-52 overflow-hidden relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="font-mono text-[10px] uppercase tracking-widest bg-accent text-white px-2 py-1">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-serif text-lg uppercase mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-foreground/60 text-sm mb-4 flex-1">{project.shortDesc}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                            <span>{project.location}</span>
                          </div>
                          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1A1D21] text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-serif text-white mb-4">Proiectul Tău Următor</h2>
            <p className="text-white/70 mb-8">Fiecare proiect este unic. Consultație gratuită la fața locului.</p>
            <a href="tel:+37378370243" className="inline-block bg-accent text-white px-10 py-4 font-semibold hover:bg-accent/90 transition uppercase tracking-wide font-mono text-sm">
              Sună Acum
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
