'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CalculatorSettings {
  termoizolarePrice: number
  hidroizolarePrice: number
  travelCostBalti: number
  travelCostOther: number
}

interface CalculatorClientProps {
  settings: CalculatorSettings
}

export function CalculatorClient({ settings }: CalculatorClientProps) {
  const [type, setType] = useState<'termoizolare' | 'hiroizolare'>('termoizolare')
  const [area, setArea] = useState<number>(100)
  const [location, setLocation] = useState<'chisinau' | 'balti' | 'altul'>('chisinau')

  // Prețuri simple în lei moldovenești
  const pricePerM2 = 300 // lei/m²
  const transportFee = location === 'chisinau' ? 0 : location === 'balti' ? 300 : 600
  
  const materialsAndLabor = area * pricePerM2
  const totalEstimate = materialsAndLabor + transportFee
  const savings = type === 'termoizolare' ? Math.round((totalEstimate / 100) * 12) : 0

  return (
    <section className="py-20 md:py-28 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Calcul Rapid</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">Cât Costă Serviciul?</h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Calculator rapid pentru a obține o estimare aproximativă. Oferta exactă se determină după evaluare gratuită pe loc.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-6">
            {/* Service Type */}
            <div>
              <label className="block font-semibold mb-3 text-xs md:text-sm uppercase tracking-wider">1. Serviciu</label>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {[
                  { val: 'termoizolare', label: 'Termoizolare', desc: 'Izolare termică' },
                  { val: 'hidroizolare', label: 'Hidroizolare', desc: 'Protecție umiditate' }
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => setType(opt.val as any)}
                    className={`p-4 rounded-none font-semibold transition border-2 text-left ${
                      type === opt.val
                        ? 'border-accent bg-accent/10 text-foreground'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div>{opt.label}</div>
                    <div className="text-xs text-foreground/70 font-normal mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Area */}
            <div>
              <label htmlFor="area-range" className="block font-semibold mb-3 text-xs md:text-sm uppercase tracking-wider">
                2. Suprafață: <span className="text-foreground">{area} m²</span>
              </label>
              <input
                id="area-range"
                type="range"
                min="10"
                max="1000"
                step="10"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-none appearance-none cursor-pointer accent-accent"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                {[30, 50, 100, 200].map((val) => (
                  <button
                    key={val}
                    onClick={() => setArea(val)}
                    className={`py-2 px-3 rounded font-semibold text-sm transition border ${
                      area === val
                        ? 'border-accent bg-accent text-background'
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
              <label className="block font-semibold mb-3 text-xs md:text-sm uppercase tracking-wider">3. Locație</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                {[
                  { val: 'chisinau', label: 'Chișinău', fee: 'Gratis' },
                  { val: 'balti', label: 'Bălți', fee: '+150 EUR' },
                  { val: 'altul', label: 'Altă locație', fee: '+300 EUR' }
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => setLocation(opt.val as any)}
                    className={`p-3 rounded-none font-semibold transition border-2 text-center ${
                      location === opt.val
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="text-sm">{opt.label}</div>
                    <div className={`text-xs font-normal mt-1 ${location === opt.val ? 'text-foreground' : 'text-foreground/70'}`}>{opt.fee}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity - REMOVED */}
          </div>

          {/* Result Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 md:top-32 bg-background p-6 md:p-8 rounded-none border-2 border-accent">
              <p className="text-sm text-foreground/70 mb-2">ESTIMARE APROXIMATIVĂ</p>
              <div className="mb-6 pb-6 border-b border-border space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Serviciu:</span>
                  <span className="font-semibold capitalize">{type === 'termoizolare' ? 'Termoizolare' : 'Hidroizolare'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Suprafață:</span>
                  <span className="font-semibold">{area} m²</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Preț/m²:</span>
                  <span className="font-semibold">{pricePerM2} lei</span>
                </div>
                {transportFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Transport:</span>
                    <span className="font-semibold text-orange-500">+{transportFee} lei</span>
                  </div>
                )}
              </div>

              <div className="bg-accent/15 p-4 rounded-none mb-6 border border-accent/30">
                <p className="text-xs text-accent font-semibold mb-1">TOTAL ESTIMAT</p>
                <p className="text-4xl font-bold text-accent">{totalEstimate.toLocaleString()}</p>
                <p className="text-xs text-foreground/70 mt-1">lei</p>
              </div>

              {savings > 0 && (
                <div className="bg-green-500/10 p-4 rounded-none mb-6 border border-green-500/30">
                  <p className="text-xs text-green-700 font-semibold mb-1">ECONOMII ANUALE</p>
                  <p className="text-2xl font-bold text-green-700">~{savings}</p>
                  <p className="text-xs text-green-700">lei/an</p>
                </div>
              )}

              <Link
                href="/calculator-oferta"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-4 rounded-none font-semibold hover:bg-accent/90 transition mb-3"
              >
                Calculator Complet <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:++37378370243"
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-accent text-foreground px-6 py-3 rounded-none font-semibold hover:bg-accent/5 transition"
              >
                Sună pentru Ofertă
              </a>

              <p className="text-xs text-foreground/70 mt-4 text-center">
                *Estimare aproximativă. Prețul poate varia în funcție de circum­stanțe locale, accesibilitate și complexitate. Oferta exactă după evaluare gratuită.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
