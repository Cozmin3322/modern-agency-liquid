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
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [desktopGalleryOpen, setDesktopGalleryOpen] = useState(false)
  const [desktopBlogOpen, setDesktopBlogOpen] = useState(false)

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-6 flex items-center justify-between">
          <a href="tel:+37378370243" className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone className="w-3 h-3" /> +373 78 370 243
          </a>
        </div>
      </div>

      <header
        className={cn(
          "fixed z-40 w-full top-6 transition-all duration-300 bg-white",
          scrolled ? "py-1.5 shadow-md" : "py-2 shadow-sm"
        )}
      >

        <nav className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group flex-shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0"
          >
            <Image
              src="/images/logo-isotherm-lux.webp"
              alt="IsoThermLux"
              width={96} height={96}
              className="h-14 w-auto transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <div className="hidden lg:block">
              <div className="font-serif text-base font-semibold leading-tight tracking-tight text-foreground">IsoThermLux</div>
              <div className="font-mono text-[9px] text-accent uppercase tracking-[0.2em]">Izolare Profesională</div>
            </div>
          </Link>

          {/* Meniu desktop */}
          <ul className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-foreground/80 flex-1 justify-center">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors">
                Servicii
                <ChevronDown className={cn("w-3 h-3 transition-transform", desktopServicesOpen && "rotate-180")} />
              </button>
              {desktopServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white shadow-lg border border-border py-2">
                    {serviceLinks.map((l) => (
                      <Link key={l.href} href={l.href}
                        className="block px-4 py-2 text-xs normal-case tracking-normal text-foreground/80 hover:text-accent hover:bg-card transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/tarife" className="hover:text-accent transition-colors">Tarife</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDesktopGalleryOpen(true)}
              onMouseLeave={() => setDesktopGalleryOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors">
                Galerie
                <ChevronDown className={cn("w-3 h-3 transition-transform", desktopGalleryOpen && "rotate-180")} />
              </button>
              {desktopGalleryOpen && (
                <div className="absolute top-full left-0 pt-2 w-40">
                  <div className="bg-white shadow-lg border border-border py-2">
                    {galleryLinks.map((l) => (
                      <Link key={l.href} href={l.href}
                        className="block px-4 py-2 text-xs normal-case tracking-normal text-foreground/80 hover:text-accent hover:bg-card transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/recenzii" className="hover:text-accent transition-colors">Recenzii</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDesktopBlogOpen(true)}
              onMouseLeave={() => setDesktopBlogOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors">
                Blog
                <ChevronDown className={cn("w-3 h-3 transition-transform", desktopBlogOpen && "rotate-180")} />
              </button>
              {desktopBlogOpen && (
                <div className="absolute top-full left-0 pt-2 w-40">
                  <div className="bg-white shadow-lg border border-border py-2">
                    {blogLinks.map((l) => (
                      <Link key={l.href} href={l.href}
                        className="block px-4 py-2 text-xs normal-case tracking-normal text-foreground/80 hover:text-accent hover:bg-card transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </li>
          </ul>

          {/* Dreapta: telefon + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
            {/* Buton telefon plin, cu umbra - mereu vizibil */}
            <a
              href="tel:+37378370243"
              className="hidden sm:flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 bg-accent text-white shadow-[0_4px_14px_rgba(155,95,18,0.35)] hover:bg-accent/90 hover:shadow-[0_6px_18px_rgba(155,95,18,0.45)]"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0 text-white" />
              +373 78 370 243
            </a>

            {/* Hamburger (vizibil doar pe mobil/tabletă) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex lg:hidden flex-col gap-[5px] p-2 transition-colors duration-300 text-foreground hover:text-accent"
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
          <Image src="/images/logo-isotherm-lux.webp" alt="IsoThermLux" width={96} height={96} className="h-20 w-auto" />
        </div>
      </div>
    </>
  )
}
