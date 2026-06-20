"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronDown, Phone, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  const close = () => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setGalleryOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (typeof window !== "undefined") window.location.href = "/"
  }

  const serviceLinks = [
    { label: "Toate Serviciile", href: "/servicii" },
    { label: "Termoizolare", href: "/termoizolare" },
    { label: "Fațade", href: "/fatade" },
    { label: "Hidroizolare", href: "/hidroizolare" },
    { label: "Fonoizolare", href: "/fonoizolare" },
    { label: "Portofoliu", href: "/portofoliu" },
  ]

  const galleryLinks = [
    { label: "Video", href: "/galerie/video" },
    { label: "Foto", href: "/galerie/foto" },
  ]

  const allMenuLinks = [
    { label: "Acasă", href: "/" },
    { label: "Beneficii", href: "/beneficii" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/intrebari-frecvente" },
    { label: "Blog", href: "/blog" },
    { label: "Calculator", href: "/calculator-oferta" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed z-50 w-full transition-all duration-300 bg-white",
          scrolled ? "py-3 shadow-md" : "py-4 shadow-sm"
        )}
      >

        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

          {/* Logo stânga */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <Image
              src="/images/logo-isotherm-lux.webp"
              alt="IsoThermLux"
              width={72} height={72}
              className="h-16 w-auto transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <div>
              <div className="font-serif text-xl font-semibold leading-tight tracking-tight text-foreground">IsoThermLux</div>
              <div className="font-mono text-[10px] text-accent uppercase tracking-[0.25em]">Izolare Profesională</div>
            </div>
          </Link>

          {/* Dreapta: telefon + hamburger */}
          <div className="flex items-center gap-4">
            {/* Buton telefon plin, cu umbra - mereu vizibil */}
            <a
              href="tel:+37378370243"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 bg-accent text-white shadow-[0_4px_14px_rgba(155,95,18,0.35)] hover:bg-accent/90 hover:shadow-[0_6px_18px_rgba(155,95,18,0.45)]"
            >
              <Phone className="w-4 h-4 flex-shrink-0 text-white" />
              +373 78 370 243
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex flex-col gap-[5px] p-2 transition-colors duration-300 text-foreground hover:text-accent"
              aria-label="Meniu"
            >
              <span className="w-7 h-[2px] bg-current" />
              <span className="w-5 h-[2px] bg-current" />
              <span className="w-7 h-[2px] bg-current" />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen menu overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-[#1A1D21] flex flex-col transition-all duration-400",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="h-0.5 w-full bg-accent flex-shrink-0" />

        {/* Top bar în meniu */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
          <Link href="/" onClick={close} className="flex items-center gap-3">
            <Image src="/images/logo-isotherm-lux-white.webp" alt="IsoThermLux" width={56} height={56} className="h-12 w-auto" />
            <div>
              <div className="font-serif text-base font-semibold text-white leading-tight">IsoThermLux</div>
              <div className="font-mono text-[9px] text-accent uppercase tracking-[0.2em]">Izolare Profesională</div>
            </div>
          </Link>
          <button onClick={close} className="p-2 text-white/40 hover:text-white transition-colors" aria-label="Închide">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-0">
            {allMenuLinks.map((item, i) => (
              <li key={item.label}>
                <Link href={item.href} onClick={close}
                  className="group flex items-center gap-4 py-4 border-b border-white/8 hover:border-accent/50 transition-colors">
                  <span className="font-mono text-[10px] text-accent/60 w-8">/ {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-2xl font-serif text-white uppercase group-hover:text-accent transition-colors">{item.label}</span>
                </Link>
              </li>
            ))}

            {/* Servicii */}
            <li>
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="group flex items-center justify-between py-4 border-b border-white/8 hover:border-accent/50 transition-colors w-full">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-accent/60 w-8">/ 07</span>
                  <span className="text-2xl font-serif text-white uppercase group-hover:text-accent transition-colors">Servicii</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-white/30 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="pl-12 py-2 border-b border-white/8">
                  {serviceLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={close}
                      className="flex items-center gap-2 py-2.5 text-white/50 hover:text-accent transition-colors">
                      <span className="w-1 h-1 bg-accent/50 flex-shrink-0" />
                      <span className="font-mono text-sm uppercase tracking-wider">{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* Galerie */}
            <li>
              <button onClick={() => setGalleryOpen(!galleryOpen)}
                className="group flex items-center justify-between py-4 border-b border-white/8 hover:border-accent/50 transition-colors w-full">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-accent/60 w-8">/ 08</span>
                  <span className="text-2xl font-serif text-white uppercase group-hover:text-accent transition-colors">Galerie</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-white/30 transition-transform", galleryOpen && "rotate-180")} />
              </button>
              {galleryOpen && (
                <div className="pl-12 py-2 border-b border-white/8">
                  {galleryLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={close}
                      className="flex items-center gap-2 py-2.5 text-white/50 hover:text-accent transition-colors">
                      <span className="w-1 h-1 bg-accent/50 flex-shrink-0" />
                      <span className="font-mono text-sm uppercase tracking-wider">{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 py-5 border-t border-white/10 flex-shrink-0">
          <a href="tel:+37378370243" onClick={close}
            className="flex items-center justify-center gap-2 bg-accent text-white py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-accent/90 transition-all w-full">
            <Phone className="w-4 h-4" /> +373 78 370 243
          </a>
        </div>
      </div>
    </>
  )
}
