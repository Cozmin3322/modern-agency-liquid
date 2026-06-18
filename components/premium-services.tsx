'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function PremiumServices() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const allProjectImages = [
      '/images/hero-family-correct.jpg',
      '/images/project-termoizolare-01.jpg',
      '/images/project-casa-termoizolare-01.jpg',
      '/images/project-hala-industrial-01.jpg',
      '/images/project-terasa-izolare-01.jpg',
      '/images/project-aplicare-spuma-01.jpg',
      '/images/project-finisaj-01.jpg',
      '/images/project-rezultat-final-01.jpg',
    ]
    setImages(allProjectImages)
  }, [])

  useEffect(() => {
    if (images.length === 0) return

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [images.length])

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 md:py-32 bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — Image Slider 16:9 */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
            {images.length > 0 && images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentImageIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  quality={75}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = '/images/premium-services-foam.png'
                  }}
                />
              </div>
            ))}

            {/* Left Arrow - only show if not first image */}
            {currentImageIndex > 0 && (
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 text-slate-700 p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
            )}

            {/* Right Arrow */}
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 text-slate-700 p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-3 p-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'w-6 bg-white' : 'w-3 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Text Content */}
          <div className="space-y-6 text-white">
            {/* Label and accent line */}
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">
                Despre Noi
              </p>
              <div className="w-16 h-0.5 bg-accent" />
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold">
              Servicii Premium
            </h2>

            {/* Description */}
            <p className="text-sm text-white/80 leading-relaxed">
              Utilizăm spumă poliuretanică și poliuree de cea mai înaltă calitate, produsă de unii dintre cei mai mari producători la nivel mondial. Spuma poliuretanică în termeni generici am putea spune că aceasta este o metodă completă de izolație și anume termo, fono și hidroizolație care poate adera la aproape orice suprafață, printre care betonul sau lemnul.
            </p>

            {/* Button */}
            <a
              href="tel:++37378370243"
              className="inline-block px-8 py-3 bg-accent text-slate-900 font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Sună Acum →
            </a>

            {/* Supporting text */}
            <p className="text-sm text-white/70">
              Răspundem rapid • Ofertă gratuită • Fără obligații
            </p>

            {/* Divider */}
            <div className="border-t border-white/20 pt-6 my-4" />

            {/* Services section */}
            <div className="space-y-4">
              <p className="text-sm font-bold tracking-widest uppercase text-accent">
                Servicii Disponibile
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Izolație cu spumă poliuretanică • Izolație termică cu spumă • Izolație cu spumă poliuretanică cu celulă închisă • Izolație cu spumă poliuretanică cu celulă deschisă • Termoizolație poduri, mansarde • Izolație hale industriale • Hidroizolație fundații și subsoluri • Izolație pereți exteriori • Fonoizolație spații comerciale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
