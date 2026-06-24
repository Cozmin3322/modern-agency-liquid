import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AboutSlider } from "@/components/about-slider"
import { getGalleryImages } from "@/lib/gallery-images"

export function AboutDark() {
  const images = getGalleryImages()
  return (
    <section className="bg-[#203040] text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagine */}
          <AboutSlider images={images} />

          {/* Text */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#D89830] mb-4">Despre noi</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight mb-6">
              Servicii Premium de Izolare în Moldova
            </h2>
            <p className="text-white/75 leading-relaxed mb-8 max-w-md">
              IsoThermLux oferă servicii profesionale de termoizolare, hidroizolare și fonoizolare cu spumă poliuretanică, în toată Moldova. 14 ani de experiență, 3971 de proiecte finalizate și garanție scrisă de până la 25 de ani, pentru un confort termic și acustic real, fără compromisuri.
            </p>
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-[#D89830] text-white px-7 py-3 font-semibold hover:bg-[#c4861f] transition-colors"
            >
              Cere Ofertă <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* SEO keywords */}
        <p className="text-center text-white/60 text-sm md:text-base font-medium leading-relaxed mt-16 max-w-4xl mx-auto">
          Termoizolare Moldova · Hidroizolare Chișinău · Fonoizolare · Spumă Poliuretanică Celulă Deschisă · Spumă Poliuretanică Celulă Închisă · Izolare Fațade · Izolare Acoperiș · Izolare Fundație · Hidroizolare Spumă Poliuretanică · Garanție 25 de Ani
        </p>
      </div>
    </section>
  )
}
