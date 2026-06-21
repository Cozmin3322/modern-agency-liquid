const STATS = [
  { number: '14', label: 'Ani experiență' },
  { number: '3971', label: 'Clienți mulțumiți' },
  { number: '4200+', label: 'Clădiri izolate' },
]

export function StatsBar() {
  return (
    <section className="bg-accent py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 text-left text-white">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-serif font-bold leading-none">{stat.number}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide mt-2 text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
