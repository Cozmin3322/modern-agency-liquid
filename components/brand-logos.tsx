const BRANDS = ["Baymer", "Synthesia", "BASF", "ATK"]

export function BrandLogos() {
  return (
    <section className="py-10 bg-white border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Lucrăm cu materiale de la
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {BRANDS.map((brand) => (
            <span key={brand} className="font-serif text-xl text-muted-foreground/60 grayscale">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
