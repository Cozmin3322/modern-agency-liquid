"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MessageCircle, Phone, ChevronDown } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    // Navigate to homepage
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
        scrolled || mobileMenuOpen
          ? "bg-background backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl border border-border"
          : "bg-background py-4 top-0 left-0 right-0 border-b border-border",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]">
        <Link href="/" className="flex items-center group" onClick={handleLogoClick}>
          <Image src="/images/logo-isotherm-lux.png" alt="IsoThermLux" width={200} height={96} className="h-24 w-auto" priority />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {[
            { label: "Acasă", href: "/" },
            { label: "Beneficii", href: "/beneficii" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300 text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="relative group">
            <button
              className="hover:text-accent transition-colors duration-300 relative text-foreground flex items-center gap-2 font-medium py-2 px-1 group"
            >
              Servicii
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 py-2">
              <Link href="/servicii" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Toate Serviciile
              </Link>
              <Link href="/termoizolare" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Termoizolare
              </Link>
              <Link href="/fatade" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Fațade
              </Link>
              <Link href="/hidroizolare" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Hidroizolare
              </Link>
              <Link href="/fonoizolare" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Fonoizolare
              </Link>
              <Link href="/portofoliu" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Portofoliu
              </Link>
            </div>
          </li>

          {[
            { label: "FAQ", href: "/intrebari-frecvente" },
            { label: "Blog", href: "/blog" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300 text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Gallery Dropdown */}
          <li className="relative group">
            <button
              className="hover:text-accent transition-colors duration-300 relative text-foreground flex items-center gap-2 font-medium py-2 px-1 group"
            >
              Galerie
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Gallery Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 py-2">
              <Link href="/galerie/video" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Video
              </Link>
              <Link href="/galerie/foto" className="block px-6 py-3 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium">
                Foto
              </Link>
            </div>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/calculator"
            className="bg-accent text-background px-6 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition text-sm"
          >
            Calculator
          </Link>
          <a
            href="tel:++37378370243"
            className={cn(
              "inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 bg-accent text-background hover:bg-accent/90",
              scrolled ? "bg-accent text-background" : "bg-accent text-background",
            )}
          >
            Sună Acum
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Phone Number - WhatsApp Link */}
          <a
            href="https://wa.me/37378370243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 transition-all duration-300"
            aria-label="WhatsApp"
          >
            +373 78370243
          </a>
        </div>
        <button
          className="md:hidden z-50 transition-colors duration-300 text-foreground"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out container mx-auto px-6",
          mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-6 mb-8">
          {[
            { label: "Acasă", href: "/" },
            { label: "Beneficii", href: "/beneficii" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-accent transition-colors duration-300 text-foreground text-4xl font-light block"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Mobile Services Menu */}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-foreground text-4xl font-light hover:text-accent transition-colors flex items-center gap-2 w-full"
            >
              Servicii
              <ChevronDown size={24} className={cn("transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-border">
                <Link href="/servicii" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Toate Serviciile
                </Link>
                <Link href="/termoizolare" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Termoizolare
                </Link>
                <Link href="/fatade" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Fațade
                </Link>
                <Link href="/hidroizolare" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Hidroizolare
                </Link>
                <Link href="/fonoizolare" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Fonoizolare
                </Link>
                <Link href="/portofoliu" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Portofoliu
                </Link>
              </div>
            )}
          </li>

          {[
            { label: "FAQ", href: "/intrebari-frecvente" },
            { label: "Blog", href: "/blog" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-accent transition-colors duration-300 text-foreground text-4xl font-light block"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Mobile Gallery Menu */}
          <li>
            <button
              onClick={() => setGalleryOpen(!galleryOpen)}
              className="text-foreground text-4xl font-light hover:text-accent transition-colors flex items-center gap-2 w-full"
            >
              Galerie
              <ChevronDown size={24} className={cn("transition-transform", galleryOpen && "rotate-180")} />
            </button>
            {galleryOpen && (
              <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-border">
                <Link href="/galerie/video" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Video
                </Link>
                <Link href="/galerie/foto" className="text-foreground text-xl hover:text-accent transition-colors" onClick={closeMobileMenu}>
                  Foto
                </Link>
              </div>
            )}
          </li>
        </ul>

        <div className="flex flex-col gap-3">
          <Link
            href="/calculator"
            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
            onClick={closeMobileMenu}
          >
            Calculator
          </Link>
          <a
            href="tel:++37378370243"
            className="inline-flex items-center justify-center gap-2 text-sm px-6 py-3 bg-accent text-background border border-accent hover:bg-accent/90 transition-all duration-300 mb-4 rounded-lg font-semibold w-full"
            onClick={closeMobileMenu}
          >
            Sună Acum
          </a>
        </div>
      </div>
    </header>
  )
}
