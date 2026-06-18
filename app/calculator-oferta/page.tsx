'use client'

import { useState } from "react"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export default function CalculatorPage() {
  const [type, setType] = useState<'termoizolare' | 'hidroizolare'>('termoizolare')
  const [area, setArea] = useState<number>(100)
  const [location, setLocation] = useState<'chisinau' | 'balti' | 'altul'>('chisinau')
  const [complexity, setComplexity] = useState<'low' | 'medium' | 'high'>('medium')
  const [submitted, setSubmitted] = useState(false)

  // Pricing estimates (RON per m2) - updated to 300 RON/m2 for termoizolare
  const basePricing = {
    termoizolare: {
      low: 250,
      medium: 300,
      high: 380
    },
    hidroizolare: {
      low: 180,
      medium: 250,
      high: 320
    }
  }

  // Transport fee based on location (RON)
  const transportFee = location === 'chisinau' ? 0 : location === 'balti' ? 200 : 400

  const pricePerM2 = basePricing[type][complexity]
  const materialsAndLabor = area * pricePerM2
  const totalEstimate = materialsAndLabor + transportFee

  const savings = type === 'termoizolare'
    ? Math.round((totalEstimate / 100) * 15) // Estimated savings per year (15% of total cost = 45% economy over 3 years)
    : 0

  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'CalculatorTool',
    name: 'Calculator Ofertă IsoThermLux',
    description: 'Estimare rapidă și precisă a costului serviciilor de termoizolare și hidroizolare',
    url: 'https://www.isothermlux.md/calculator-oferta'
  }

  return (
    <>
      <Script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />
      <Header />
      <main className="bg-background">
        <section className="py-20 md:py-28 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-4">Calculator Ofertă</h1>
            <p className="text-xl text-foreground/70">
              Calculează o estimare aproximativă pentru serviciile tale de termoizolare sau hidroizolare. Consultația exactă pe loc este gratuită și fără angajamente.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Calculator Form */}
              <div className="md:col-span-3 space-y-8">

                {/* Service Type */}
                <div>
                  <label className="block font-semibold mb-4 text-lg">1. Tip Serviciu</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: 'termoizolare', label: 'Termoizolare', desc: 'Izolație termică pentru case, mansarde, hale' },
                      { val: 'hidroizolare', label: 'Hidroizolare', desc: 'Protecție contra umidității și infiltrațiilor' }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => setType(opt.val as any)}
                        className={`p-4 border-2 rounded-lg font-semibold transition text-left ${
                          type === opt.val
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <div>{opt.label}</div>
                        <div className="text-xs text-foreground/60 font-normal mt-1">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Surface Area */}
                <div>
                  <label className="block font-semibold mb-4 text-lg">
                    2. Suprafață: <span className="text-accent">{area} m²</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="grid grid-cols-4 gap-2 mt-4 text-sm">
                    {[30, 50, 100, 200].map((val) => (
                      <button
                        key={val}
                        onClick={() => setArea(val)}
                        className={`p-2 border rounded transition font-medium ${
                          area === val
                            ? 'border-accent bg-accent/10 text-accent'
                            : 'border-border hover:border-accent'
                        }`}
                      >
                        {val}m²
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block font-semibold mb-4 text-lg">3. Locație</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { val: 'chisinau', label: 'Chișinău', fee: 'Fără taxă' },
                      { val: 'balti', label: 'Bălți', fee: '+200 RON' },
                      { val: 'altul', label: 'Altă locație', fee: '+400 RON' }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => setLocation(opt.val as any)}
                        className={`p-3 border-2 rounded-lg font-semibold transition ${
                          location === opt.val
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <div>{opt.label}</div>
                        <div className="text-xs font-normal text-foreground/60">{opt.fee}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complexity */}
                <div>
                  <label className="block font-semibold mb-4 text-lg">4. Complexitate</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { val: 'low', label: 'Ușoară', desc: 'Suprafață plană, ușor accesibilă' },
                      { val: 'medium', label: 'Medie', desc: 'Complexitate normală' },
                      { val: 'high', label: 'Complexă', desc: 'Acces dificil, forme complicate' }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => setComplexity(opt.val as any)}
                        className={`p-3 border-2 rounded-lg font-semibold transition text-left ${
                          complexity === opt.val
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <div>{opt.label}</div>
                        <div className="text-xs text-foreground/60 font-normal">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Display */}
              <div className="md:col-span-2">
                <div className="sticky top-32 bg-background p-8 rounded-lg border-2 border-accent">
                  <h2 className="text-2xl font-serif font-medium mb-8 text-accent">Estimare Aproximativă</h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between pb-3 border-b border-border">
                      <span className="text-sm text-foreground/70">Serviciu:</span>
                      <span className="font-semibold capitalize">{type === 'termoizolare' ? 'Termoizolare' : 'Hidroizolare'}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-border">
                      <span className="text-sm text-foreground/70">Suprafață:</span>
                      <span className="font-semibold">{area} m²</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-border">
                      <span className="text-sm text-foreground/70">Preț/m²:</span>
                      <span className="font-semibold">{pricePerM2} RON</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-border">
                      <span className="text-sm text-foreground/70">Materiale și manopera:</span>
                      <span className="font-semibold">{materialsAndLabor.toLocaleString()} RON</span>
                    </div>
                    {transportFee > 0 && (
                      <div className="flex justify-between pb-3 border-b border-border">
                        <span className="text-sm text-foreground/70">Transport:</span>
                        <span className="font-semibold text-orange-500">{transportFee} RON</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mb-8 border-2 border-accent">
                    <p className="text-sm text-accent font-semibold mb-1">Total Estimat:</p>
                    <p className="text-4xl font-bold text-accent">{totalEstimate.toLocaleString()} RON</p>
                  </div>

                  {savings > 0 && (
                    <div className="bg-green-500/10 p-4 rounded-lg mb-8 border border-green-500">
                      <p className="text-sm text-green-700 font-semibold mb-1">Economii Anuale Estimate:</p>
                      <p className="text-2xl font-bold text-green-600">~{savings} RON/an</p>
                    </div>
                  )}

                  <div className="bg-accent/5 p-3 rounded-lg mb-8 border border-accent">
                    <p className="text-xs text-foreground/60">
                      * Aceasta este o estimare aproximativă. Oferta finală se determină după evaluare pe loc și nu are costuri ascunse.
                    </p>
                  </div>

                  <a
                    href="tel:+37378370243"
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-lg font-semibold hover:bg-accent/90 transition text-lg"
                  >
                    Obțin Ofertă Exactă <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">De Ce Alege IsoThermLux?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Estimare Transparentă", desc: "Fără costuri ascunse. Ce vezi în calculator este oferta reală." },
                { title: "Consultație Gratuită", desc: "Evaluarea pe loc este complet gratuită și fără angajamente." },
                { title: "Oferta Detaliată", desc: "După vizită primești ofertă scrisă cu cronograma și garantii." },
                { title: "Garanție 25 Ani", desc: "Toată lucrarea și materialele sunt garantate 25 de ani." },
                { title: "Echipă Profesionistă", desc: "12 ani experiență cu 500+ proiecte finalizate cu succes." },
                { title: "Economii Reale", desc: "Economisești 40-50% la energie. ROI în 2-3 ani." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-medium mb-12">Cum Funcționează?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Calculator", desc: "Introduci parametrii și obții estimare aproximativă." },
                { step: "2", title: "Consultație", desc: "Sunăm pe loc. Evaluarea exactă a proiectului tău." },
                { step: "3", title: "Ofertă", desc: "Primești ofertă detaliată cu plan de lucru complet." },
                { step: "4", title: "Execuție", desc: "Realizare profesională cu garanție 25 ani." }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
