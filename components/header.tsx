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
  const [blogOpen, setBlogOpen] = useState(false)

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
    setBlogOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (typeof window !== "undefined") window.location.href = "/"
  }

  const serviceLinks = [
    { label: "Termoizolații", href: "/termoizolare" },
    { label: "Fonoizolații", href: "/fonoizolare" },
    { label: "Hidroizolații", href: "/hidroizolare" },
    { label: "Termo / Fono / Hidro Izolații", href: "/servicii" },
    { label: "Tipuri de Spumă", href: "/ce-este-spuma-poliuretanica" },
  ]

  const galleryLinks = [
    { label: "Video", href: "/galerie/video" },
    { label: "Foto", href: "/galerie/foto" },
  ]

  const blogLinks = [
    { label: "Portofoliu", href: "/portofoliu" },
    { label: "Articole", href: "/blog" },
  ]

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 z-50 w-full bg-accent text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between">
          <a href="tel:+37378370243" className="hidden sm:inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone className="w-3 h-3" /> +373 78 370 243
          </a>
          <div className="flex items-center gap-3 ml-auto">
            <a href="https://www.facebook.com/isothermlux" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white/80 transition-colors">f</a>
            <a href="https://www.instagram.com/isothermlux" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white/80 transition-colors">ig</a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed z-40 w-full top-8 transition-all duration-300 bg-white",
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

      {/* Overlay backdrop */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-[90] bg-black/30 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Light dropdown menu panel */}
      <div className={cn(
        "fixed top-0 right-0 z-[100] h-full w-full sm:w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
          <span className="font-serif text-base font-semibold text-foreground">Meniu</span>
          <button onClick={close} className="p-2 text-foreground/50 hover:text-accent transition-colors" aria-label="Închide">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="divide-y divide-border">
            <li>
              <Link href="/" onClick={close} className="block py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Home
              </Link>
            </li>

            {/* Servicii */}
            <li>
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Servicii
                <ChevronDown className={cn("w-4 h-4 text-foreground/40 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="pl-4 pb-2">
                  {serviceLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={close}
                      className="block py-2 text-sm text-foreground/70 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link href="/tarife" onClick={close} className="block py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Tarife
              </Link>
            </li>

            {/* Galerie */}
            <li>
              <button onClick={() => setGalleryOpen(!galleryOpen)}
                className="flex items-center justify-between w-full py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Galerie
                <ChevronDown className={cn("w-4 h-4 text-foreground/40 transition-transform", galleryOpen && "rotate-180")} />
              </button>
              {galleryOpen && (
                <div className="pl-4 pb-2">
                  {galleryLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={close}
                      className="block py-2 text-sm text-foreground/70 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link href="/recenzii" onClick={close} className="block py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Recenzii
              </Link>
            </li>
            {/* Blog */}
            <li>
              <button onClick={() => setBlogOpen(!blogOpen)}
                className="flex items-center justify-between w-full py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Blog
                <ChevronDown className={cn("w-4 h-4 text-foreground/40 transition-transform", blogOpen && "rotate-180")} />
              </button>
              {blogOpen && (
                <div className="pl-4 pb-2">
                  {blogLinks.map((l) => (
                    <Link key={l.href} href={l.href} onClick={close}
                      className="block py-2 text-sm text-foreground/70 hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link href="/contact" onClick={close} className="block py-3.5 text-foreground font-medium hover:text-accent transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Caută..."
              className="w-full border border-border rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Bottom logo */}
        <div className="px-5 py-5 border-t border-border flex-shrink-0 flex items-center justify-center">
          <Image src="/images/logo-isotherm-lux.webp" alt="IsoThermLux" width={56} height={56} className="h-10 w-auto" />
        </div>
      </div>
    </>
  )
}
