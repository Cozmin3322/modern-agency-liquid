'use client'

import { Star } from 'lucide-react'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  location: string
}

interface ReviewsClientProps {
  reviews: Review[]
}

export function ReviewsClient({ reviews }: ReviewsClientProps) {
  return (
    <section className="py-20 md:py-32 bg-[#2C3E50] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-balance text-white">
            Ce spun clienții noștri
          </h2>
          <p className="text-lg text-white/75 mb-8">
            Peste 500 clienți mulțumiți în Chișinău și moldova
          </p>

          {/* Google Reviews Badge */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm font-semibold text-white">
              4.9/5 pe Google Maps
            </p>
            <a
              href="https://maps.app.goo.gl/QZjS5k4vB8zVEKGv6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-white/80 transition-colors underline"
            >
              Vezi pe Google
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-white/20 rounded-lg p-6 text-foreground transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 mb-6 line-clamp-4 leading-relaxed">
                {review.text}
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <div className="flex items-center justify-between mt-2 text-xs text-foreground/60">
                  <span>{review.location}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
            <p className="text-white/75 mb-6">
              Contactează-ne azi pentru o consultație gratuită
            </p>
          <a
            href="https://wa.me/373783702433"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Sună acum
          </a>
        </div>
      </div>
    </section>
  )
}
