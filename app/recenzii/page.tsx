import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

const galleryPhotos = [
  "/images/project-acoperis-new.webp",
  "/images/hidroizolare-fundatie-02.webp",
  "/images/project-apartament-izolare-01.jpg",
]

export const metadata: Metadata = {
  title: "Recenzii IsoThermLux | Clienți Mulțumiți | 5 Stele",
  description: "Recenzii clienți IsoThermLux. Evaluări 5 stele. Clienți mulțumiți de serviciile de termoizolare și hidroizolare.",
  keywords: "recenzii, evaluări, clienți mulțumiți, testimonii",
  alternates: { canonical: "https://www.isothermlux.md/recenzii" },
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Maria Gheorghe",
      location: "Chișinău",
      rating: 5,
      text: "Echipă profesionistă. Mansarda termoizolată perfect. Recomand cu încredere!",
      project: "Termoizolare Mansardă"
    },
    {
      name: "Alexei Petrov",
      location: "Bălți",
      rating: 5,
      text: "Hidroizolare de calitate. Fundația complet protejată. Suportul post-vânzare excelent.",
      project: "Hidroizolare Fundație"
    },
    {
      name: "Ioana Popescu",
      location: "Orhei",
      rating: 5,
      text: "Investiție minunată. Deja se vede economia la facturi. Mulțumesc!",
      project: "Izolare Termică Completă"
    },
    {
      name: "Ștefan Ionescu",
      location: "Chișinău",
      rating: 5,
      text: "Profesionalism de top. Consultația gratuită exactă. Recomand 100%.",
      project: "Termoizolare Casă"
    },
    {
      name: "Luiza Mihai",
      location: "Bălți",
      rating: 5,
      text: "Subsol uscat! Finalmente o soluție reală. Mulțumesc echipei!",
      project: "Hidroizolare Subsol"
    },
    {
      name: "Viorel Popescu",
      location: "Orhei",
      rating: 5,
      text: "Garanția 25 de ani m-a convins. Echipă serioasă și onestă. Bravo!",
      project: "Hidroizolare Acoperiș"
    }
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-none">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-foreground/60">{review.location}</p>
                    <p className="text-sm text-accent mt-2">{review.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {galleryPhotos.map((src) => (
                <Link key={src} href="/galerie/foto" className="relative h-56 block group overflow-hidden">
                  <Image src={src} alt="Galerie foto IsoThermLux" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:opacity-80 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
