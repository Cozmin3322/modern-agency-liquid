"use client"

import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-[#1A1D21] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/65 text-sm tracking-[0.3em] uppercase mb-8">Gata să îți izolezi casa?</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] tracking-tight mb-8 text-balance text-white">
            Consultație
            <br />
            <HighlightedText>gratuită</HighlightedText> la domiciliu
          </h2>

          <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Fără angajamente. Estimare preț pe loc. Răspuns în 30 de minute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+37360811115"
              className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-sm tracking-wide hover:bg-accent/90 transition-colors duration-300 group"
            >
              Sună Acum
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 border border-white/35 px-8 py-4 text-sm tracking-wide text-white hover:bg-white/10 transition-colors duration-300"
            >
              Solicită Ofertă
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
