import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Recenzii IsoThermLux | Clienți Mulțumiți | 5 Stele",
  description: "Recenzii clienți IsoThermLux. Evaluări 5 stele. Clienți mulțumiți de serviciile de termoizolare și hidroizolare.",
  keywords: "recenzii, evaluări, clienți mulțumiți, testimonii",
  canonical: "https://isothermlux.md/recenzii",
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
      name: "Stefan Ionescu",
      location: "Chișinău",
      rating: 5,
      text: "Profesionalism de top. Consultația gratuită exactă. Recomand 100%.",
      project: "Termoizolare Casa"
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
      text: "Garanția 25 ani me-a convins. Echipă serioas și onestă. Bravo!",
      project: "Hidroizolare Acoperis"
    }
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-serif font-medium mb-8">Recenzii Clienți</h1>
            <p className="text-xl text-foreground/80">
              Peste 500 de clienți mulțumiți. Evaluări 5 stele. Iată ce spun despre serviciile noastre.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg">
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

        <section className="py-24 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-medium mb-6">Satisfacție 100%</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Clienții noștri sunt prioritatea #1. Garanția 25 ani și suportul permanent ne diferențiază.
            </p>
            <a href="tel:++37378370243" className="inline-block bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
              Cere Recenzie pe Loc
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
