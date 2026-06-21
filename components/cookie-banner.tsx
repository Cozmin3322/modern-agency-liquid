'use client'

import { useState, useEffect } from 'react'
import { X, Settings } from 'lucide-react'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    } else {
      setHasConsent(true)
    }
    setIsLoading(false)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
    setHasConsent(true)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
    setHasConsent(true)
  }

  if (isLoading) return null

  if (!isVisible) {
    if (!hasConsent) return null
    return (
      <button
        onClick={() => setIsVisible(true)}
        aria-label="Setări cookies"
        className="fixed bottom-4 left-4 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-700 transition-colors"
      >
        <Settings className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Prelucrarea datelor cu caracter personal</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Siturile noastre folosesc cookies și alte tehnologii de urmărire pentru a îmbunătăți experiența dvs., a analiza traficul și a vă oferi conținut personalizat. 
              Prin continuarea utilizării site-ului, vă exprimați acordul pentru colectarea și prelucrarea datelor cu caracter personal în conformitate cu 
              <Link href="/politica-de-confidentialitate" className="text-accent hover:underline ml-1">Politica de confidențialitate</Link> și 
              <Link href="/termenii-si-conditiile" className="text-accent hover:underline ml-1">Termenii și condițiile</Link>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-none transition-colors"
            >
              Respinge
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-none transition-colors"
            >
              Accept
            </button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 md:hidden text-gray-500 hover:text-gray-700"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
