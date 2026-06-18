'use client'

import { useEffect, useState } from 'react'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Check if splash screen has already been shown in this session
    const splashShown = sessionStorage.getItem('splashScreenShown')
    
    if (!splashShown) {
      setIsVisible(true)
      sessionStorage.setItem('splashScreenShown', 'true')
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Fade out splash screen when page is fully loaded
    const handlePageLoad = () => {
      setFadeOut(true)
      // Remove splash screen from DOM after fade animation completes
      setTimeout(() => {
        setIsVisible(false)
      }, 1000)
    }

    // Use window.onload to ensure all resources are loaded
    window.addEventListener('load', handlePageLoad)

    // Fallback: hide splash screen after 4 seconds if load event doesn't fire
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 1000)
    }, 4000)

    return () => {
      window.removeEventListener('load', handlePageLoad)
      clearTimeout(timer)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/logo-isotherm-lux.webp"
            alt="IsoThermLux"
            className="h-20 w-auto"
          />
        </div>

        {/* Tagline */}
        <h1 className="font-serif text-2xl font-semibold text-foreground mb-2">
          IsoThermLux
        </h1>
        <p className="text-sm tracking-wide text-muted-foreground mb-12">
          Termoizolare și Hidroizolare Profesională
        </p>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-1">
          <div className="h-1 w-1 rounded-full bg-accent animate-pulse" />
          <div className="h-1 w-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="h-1 w-1 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Alternative: Progress Bar Animation */}
        <div className="mt-8 w-32 mx-auto h-0.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full animate-pulse"
            style={{
              animation: 'slideProgress 2s infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slideProgress {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
