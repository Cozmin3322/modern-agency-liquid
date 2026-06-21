import { MapPin, Phone, Navigation } from "lucide-react"

export function LocationMap() {
  return (
    <section className="w-full bg-[#1A1D21] relative overflow-hidden">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 h-1 w-full bg-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* Left — info */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-4 block">
              / Locație
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.05] mb-6">
              <span className="block text-white">IsoThermLux</span>
              <span className="block text-accent">în Moldova.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-md leading-relaxed">
              Activăm pe tot teritoriul Moldovei. Sunați-ne pentru o evaluare gratuită la fața locului, indiferent de localitate.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-accent/40 flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Zonă deservită</span>
                  <p className="text-white font-semibold">Toată Moldova</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-accent/40 flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Telefon</span>
                  <a href="tel:+37360811115" className="text-white font-semibold hover:text-accent transition-colors">
                    +373 60 811 115
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+37360811115"
                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 font-mono text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Sună Acum
              </a>
              <a
                href="https://www.google.com/maps/place/ISO+THERM/data=!4m2!3m1!1s0x0:0x311eabf73c6aea32?sa=X&ved=1t:2428&hl=en-MD&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 font-mono text-sm uppercase tracking-wider hover:border-white/60 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Vezi pe Hartă
              </a>
            </div>
          </div>

          {/* Right — map */}
          <div className="relative min-h-[320px] lg:min-h-0 border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=ISO+THERM+Chisinau+Moldova&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) contrast(85%)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație IsoThermLux pe Google Maps"
              className="absolute inset-0 w-full h-full grayscale-0"
            />
            <div className="absolute bottom-4 right-4">
              <a
                href="https://www.google.com/maps/place/ISO+THERM/data=!4m2!3m1!1s0x0:0x311eabf73c6aea32?sa=X&ved=1t:2428&hl=en-MD&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-accent/90 transition-colors shadow-lg"
              >
                Deschide în Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
