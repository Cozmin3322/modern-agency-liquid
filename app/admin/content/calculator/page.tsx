'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { saveContent } from '@/app/actions/admin'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw } from 'lucide-react'

interface CalculatorSettings {
  termoizolarePrice: number
  hidroizolarePrice: number
  travelCostBalti: number
  travelCostOther: number
}

const DEFAULT_CALCULATOR: CalculatorSettings = {
  termoizolarePrice: 45,
  hidroizolarePrice: 55,
  travelCostBalti: 30,
  travelCostOther: 50,
}

export default function CalculatorEditor() {
  const [settings, setSettings] = useState<CalculatorSettings>(DEFAULT_CALCULATOR)
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = adminAuth.getData('calculator_settings', DEFAULT_CALCULATOR)
    setSettings(saved)
    setIsLoading(false)
  }, [])

  const handleChange = (field: keyof CalculatorSettings, value: number) => {
    setSettings(prev => ({ ...prev, [field]: value }))
    setIsSaved(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const success = await saveContent('calculator_settings', settings)
      if (success) {
        adminAuth.setData('calculator_settings', settings)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      }
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setSettings(DEFAULT_CALCULATOR)
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Editare Setări Calculator
            </h1>
            <p className="text-foreground/60">
              Configurați prețurile și costurile de deplasare
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Prețuri Servicii</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preț Termoizolare (EUR/m²)
                  </label>
                  <input
                    type="number"
                    value={settings.termoizolarePrice}
                    onChange={(e) => handleChange('termoizolarePrice', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preț Hidroizolare (EUR/m²)
                  </label>
                  <input
                    type="number"
                    value={settings.hidroizolarePrice}
                    onChange={(e) => handleChange('hidroizolarePrice', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Costuri Deplasare</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cost Deplasare Bălți (EUR)
                  </label>
                  <input
                    type="number"
                    value={settings.travelCostBalti}
                    onChange={(e) => handleChange('travelCostBalti', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cost Deplasare Altă Locație (EUR)
                  </label>
                  <input
                    type="number"
                    value={settings.travelCostOther}
                    onChange={(e) => handleChange('travelCostOther', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Save className="w-4 h-4" />
                Salvează
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-2 border border-border text-foreground rounded-lg hover:bg-accent/5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Resetează la Original
              </button>
            </div>

            {isSaved && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-600 text-sm">
                Salvat cu succes!
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminProtectedLayout>
  )
}
