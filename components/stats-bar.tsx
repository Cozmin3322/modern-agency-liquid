const STATS = [
  { number: '14', label: 'Ani experiență' },
  { number: '3971', label: 'Clienți mulțumiți' },
  { number: '4200+', label: 'Clădiri izolate' },
]

export function StatsBar() {
  return (
    <section className="bg-accent py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/25 text-center text-white">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 py-3 md:py-0">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-none">{stat.number}</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide mt-2 text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
