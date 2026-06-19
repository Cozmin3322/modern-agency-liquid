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
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
    { label: "Calculator", href: "/calculator" },
  ]

  return (
    <>
      <header className={cn(
        "fixed z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm py-3"
          : "bg-white/20 backdrop-blur-md border-b border-white/10 py-4"
      )}>

        <nav className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-3 items-center">

          {/* LEFT — Suna */}
          <div className="flex items-center">
            <a href="tel:+37378370243"
              className={cn(
                "flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border",
                scrolled
                  ? "border-accent/60 text-accent hover:bg-accent hover:text-white"
                  : "border-white/50 text-white hover:bg-white/10"
              )}>
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+373 78 370 243</span>
              <span className="sm:hidden">Sună</span>
            </a>
          </div>

          {/* CENTER — Logo */}
          <div className="flex justify-center">
            <Link href="/" onClick={handleLogoClick} className="group flex flex-col items-center">
              <Image
                src="/images/logo-isotherm-lux.webp"
                alt="IsoThermLux"
                width={72} height={72}
                className={cn(
                  "w-auto transition-all duration-200 group-hover:scale-105",
                  scrolled ? "h-14 drop-shadow-sm" : "h-16 drop-shadow-lg"
                )}
                priority
              />
              <div className={cn(
                "font-mono text-[9px] uppercase tracking-[0.25em] mt-0.5 transition-colors",
                scrolled ? "text-accent" : "text-white/80"
              )}>Izolare Profesională</div>
            </Link>
          </div>

          {/* RIGHT — Hamburger */}
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "flex flex-col gap-1.5 p-2 transition-colors group",
                scrolled ? "text-foreground/70 hover:text-accent" : "text-white hover:text-accent drop-shadow"
              )}
              aria-label="Meniu"
            >
              <span className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:w-7" />
              <span className="w-7 h-0.5 bg-current" />
              <span className="w-5 h-0.5 bg-current transition-all duration-300 group-hover:w-7" />
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen menu */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-[#1A1D21] flex flex-col transition-all duration-300",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="h-0.5 w-full bg-accent flex-shrink-0" />

        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
          <Link href="/" onClick={close} className="flex flex-col items-start">
            <Image src="/images/logo-isotherm-lux-white.webp" alt="IsoThermLux" width={48} height={48} className="h-10 w-auto" />
            <span className="font-mono text-[9px] text-accent uppercase tracking-[0.2em] mt-0.5">Izolare Profesională</span>
          </Link>
          <button onClick={close} className="p-2 text-white/40 hover:text-white transition-colors" aria-label="Închide">
            <X className="w-6 h-6" />
          </button>
        </div>

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

            <li>
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="group flex items-center justify-between py-4 border-b border-white/8 w-full hover:border-accent/50 transition-colors">
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

            <li>
              <button onClick={() => setGalleryOpen(!galleryOpen)}
                className="group flex items-center justify-between py-4 border-b border-white/8 w-full hover:border-accent/50 transition-colors">
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

        <div className="px-6 py-5 border-t border-white/10 flex-shrink-0">
          <a href="tel:+37378370243" onClick={close}
            className="flex items-center justify-center gap-2 w-full bg-accent text-white py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-accent/90 transition-all">
            <Phone className="w-4 h-4" /> +373 78 370 243
          </a>
        </div>
      </div>
    </>
  )
}
