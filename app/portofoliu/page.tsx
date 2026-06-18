"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects, getProjectsByCategory } from "@/lib/projects"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const filteredProjects = getProjectsByCategory(selectedCategory)
  const categories = ["Toate", "Termoizolare", "Hidroizolare"]

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-serif font-medium mb-4">Portofoliu</h1>
            <p className="text-xl text-foreground/80">
              500+ proiecte realizate de excellență. Iată o selecție din lucrările noastre recente.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold transition border-2 ${
                    selectedCategory === cat
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border hover:border-accent text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/portofoliu/${project.slug}`}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition group cursor-pointer h-full">
                    <div className="h-48 bg-accent/10 flex items-center justify-center overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded">
                        {project.category}
                      </span>
                      <h3 className="font-semibold text-lg mt-3 mb-2">{project.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4">{project.shortDesc}</p>
                      <div className="flex justify-between items-center text-sm text-foreground/60">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Proiectul Tău Următor</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Fiecare proiect este unic. Oferim consultații personalizate și soluții adaptate.
            </p>
            <a href="tel:++37378370243" className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
              Contactează-ne pentru Consultație
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
