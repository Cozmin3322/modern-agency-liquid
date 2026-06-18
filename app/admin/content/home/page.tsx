'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { saveContent } from '@/app/actions/admin'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw } from 'lucide-react'

interface HomeContent {
  heroTitle: string
  heroSubtitle: string
  whyUsTitle: string
  whyUsDescription: string
  ctaText: string
}

const DEFAULT_HOME_CONTENT: HomeContent = {
  heroTitle: 'Termoizolare și Hidroizolare Profesională',
  heroSubtitle: 'Economisește până la 70% la încălzire',
  whyUsTitle: 'De Ce Să Alegi IsoThermLux',
  whyUsDescription: 'Cu 12 ani de experiență și 3971 proiecte finalizate, garantăm cea mai bună calitate.',
  ctaText: 'Cere Consultație Gratuită',
}

export default function HomeContentEditor() {
  const [content, setContent] = useState<HomeContent>(DEFAULT_HOME_CONTENT)
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = adminAuth.getData('home_content', DEFAULT_HOME_CONTENT)
    setContent(saved)
    setIsLoading(false)
  }, [])

  const handleChange = (field: keyof HomeContent, value: string) => {
    setContent(prev => ({ ...prev, [field]: value }))
    setIsSaved(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const success = await saveContent('home_hero', content)
      if (success) {
        adminAuth.setData('home_content', content)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      }
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setContent(DEFAULT_HOME_CONTENT)
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Editare Pagina Acasă
            </h1>
            <p className="text-foreground/60">
              Modificați conținutul principal al site-ului
            </p>
          </div>

          <div className="space-y-6">
            {/* Hero Section */}
            <div className="border border-border rounded-lg p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Secțiune Hero</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Titlu Principal (H1)
                  </label>
                  <input
                    type="text"
                    value={content.heroTitle}
                    onChange={(e) => handleChange('heroTitle', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subtitlu
                  </label>
                  <input
                    type="text"
                    value={content.heroSubtitle}
                    onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            {/* Why Us Section */}
            <div className="border border-border rounded-lg p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Secțiune De Ce Noi</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Titlu
                  </label>
                  <input
                    type="text"
                    value={content.whyUsTitle}
                    onChange={(e) => handleChange('whyUsTitle', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descriere
                  </label>
                  <textarea
                    value={content.whyUsDescription}
                    onChange={(e) => handleChange('whyUsDescription', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border border-border rounded-lg p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Call to Action</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Text Buton CTA
                </label>
                <input
                  type="text"
                  value={content.ctaText}
                  onChange={(e) => handleChange('ctaText', e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-foreground rounded-lg hover:bg-accent/80 disabled:opacity-50 font-medium transition-colors"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Se salvează...' : 'Salvează'}
            </button>

              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-background transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
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
