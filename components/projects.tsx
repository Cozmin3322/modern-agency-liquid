"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects"

const projects = getFeaturedProjects(4)

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-white border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs md:text-sm text-accent font-bold">/ 03</span>
              <span className="h-px flex-1 max-w-[60px] bg-border" />
              <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase">Lucrările Noastre</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium tracking-tight">Proiecte Recente Finalizate</h2>
          </div>
          <Link
            href="/portofoliu"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Vezi toate lucrările
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={`/portofoliu/${project.slug}`}>
                <div ref={(el) => { imageRefs.current[index] = el }} className="relative overflow-hidden aspect-[4/3] mb-6 rounded-none">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
                    loading="lazy"
                    className={`object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-accent origin-top"
                    style={{
                      transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                      transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {project.category}{project.location ? ` · ${project.location}` : ''}
                    </p>
                  </div>
                  {project.year && <span className="text-muted-foreground text-xs md:text-sm">{project.year}</span>}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
