'use client'

import { Star, ArrowRight } from 'lucide-react'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  location: string
}

export function ReviewsClient({ reviews }: { reviews: Review[] }) {
  return (
    <section id="recenzii" className="py-20 md:py-28 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-sm text-accent font-bold">/ 04</span>
              <span className="h-px flex-1 max-w-[60px] bg-border" />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Recenzii</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight">
              Ce spun<br />clienții noștri
            </h2>
          </div>
          {/* Google badge */}
          <a
            href="https://maps.app.goo.gl/QZjS5k4vB8zVEKGv6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-border px-5 py-3 rounded-full hover:border-accent transition-colors group flex-shrink-0"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9 pe Google</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Reviews */}
        <div className="flex md:grid md:grid-cols-3 gap-px bg-border overflow-x-auto snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 md:mx-0 md:px-0">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background p-6 md:p-8 flex flex-col flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-start"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 line-clamp-5">
                {review.text}
              </p>
              {/* Info */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium">{review.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">{review.location}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
