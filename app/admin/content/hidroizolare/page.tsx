'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { saveContent } from '@/app/actions/admin'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw } from 'lucide-react'

interface ServiceContent {
  pageTitle: string
  description: string
  pricePerM2: number
}

const DEFAULT_HIDROIZOLARE: ServiceContent = {
  pageTitle: 'Hidroizolare Profesională',
  description: 'Protecție completă a fundației și pereților împotriva infiltrării apei.',
  pricePerM2: 55,
}

export default function HidroizolareEditor() {
  const [content, setContent] = useState<ServiceContent>(DEFAULT_HIDROIZOLARE)
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = adminAuth.getData('hidroizolare_content', DEFAULT_HIDROIZOLARE)
    setContent(saved)
    setIsLoading(false)
  }, [])

  const handleChange = (field: keyof ServiceContent, value: string | number) => {
    setContent(prev => ({ ...prev, [field]: value }))
    setIsSaved(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const success = await saveContent('hidroizolare_content', content)
      if (success) {
        adminAuth.setData('hidroizolare_content', content)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      }
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setContent(DEFAULT_HIDROIZOLARE)
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Editare Pagina Hidroizolare
            </h1>
            <p className="text-foreground/60">
              Modificați conținutul paginii de serviciu
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-none p-6 bg-accent/5">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Titlu Pagină
                  </label>
                  <input
                    type="text"
                    value={content.pageTitle}
                    onChange={(e) => handleChange('pageTitle', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descriere Serviciu
                  </label>
                  <textarea
                    value={content.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preț per m² (EUR)
                  </label>
                  <input
                    type="number"
                    value={content.pricePerM2}
                    onChange={(e) => handleChange('pricePerM2', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-none hover:bg-accent/90 transition-colors"
              >
                <Save className="w-4 h-4" />
                Salvează
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-2 border border-border text-foreground rounded-none hover:bg-accent/5 transition-colors"
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
