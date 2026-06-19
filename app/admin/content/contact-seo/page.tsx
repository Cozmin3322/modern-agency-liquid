'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw } from 'lucide-react'

interface ContactSEO {
  phone: string
  email: string
  whatsapp: string
  viber: string
  telegram: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
}

const DEFAULT_CONTACT_SEO: ContactSEO = {
  phone: '+37378370243',
  email: 'infopoliuretan@gmail.com',
  whatsapp: '+37378370243',
  viber: '+37378370243',
  telegram: '+37378370243',
  seoTitle: 'IsoThermLux - Termoizolare și Hidroizolare',
  seoDescription: 'Servicii profesionale de termoizolare și hidroizolare cu garanție 25 ani',
  seoKeywords: 'termoizolare, hidroizolare, izolare termică, Moldova',
}

export default function ContactSEOEditor() {
  const [data, setData] = useState<ContactSEO>(DEFAULT_CONTACT_SEO)
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = adminAuth.getData('contact_seo', DEFAULT_CONTACT_SEO)
    setData(saved)
    setIsLoading(false)
  }, [])

  const handleChange = (field: keyof ContactSEO, value: string) => {
    setData(prev => ({ ...prev, [field]: value }))
    setIsSaved(false)
  }

  const handleSave = () => {
    adminAuth.setData('contact_seo', data)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setData(DEFAULT_CONTACT_SEO)
    adminSiteContent.resetData('contact_seo')
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Contact & SEO
            </h1>
            <p className="text-foreground/60">
              Gestionați informații de contact și metadate SEO
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-none p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Informații de Contact</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                  <input
                    type="text"
                    value={data.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
                  <input
                    type="text"
                    value={data.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Viber</label>
                  <input
                    type="text"
                    value={data.viber}
                    onChange={(e) => handleChange('viber', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telegram</label>
                  <input
                    type="text"
                    value={data.telegram}
                    onChange={(e) => handleChange('telegram', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            <div className="border border-border rounded-none p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">SEO Meta Tags</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Title Tag</label>
                  <input
                    type="text"
                    value={data.seoTitle}
                    onChange={(e) => handleChange('seoTitle', e.target.value)}
                    maxLength={60}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                  <p className="text-xs text-foreground/50 mt-1">{data.seoTitle.length}/60</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Meta Description</label>
                  <textarea
                    value={data.seoDescription}
                    onChange={(e) => handleChange('seoDescription', e.target.value)}
                    maxLength={160}
                    rows={2}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                  <p className="text-xs text-foreground/50 mt-1">{data.seoDescription.length}/160</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Keywords</label>
                  <input
                    type="text"
                    value={data.seoKeywords}
                    onChange={(e) => handleChange('seoKeywords', e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                    placeholder="Separate cu virgulă"
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
                Resetează
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
