'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useParallax — hook reutilizabil pentru efect parallax bazat pe scroll.
 *
 * @param speed  Fracția din scroll care se aplică ca translateY (0.3 = 30%).
 *               Valori pozitive = imaginea se mișcă mai lent decât conținutul.
 * @returns      { ref, offset } — ref se atașează la container, offset e translateY în px.
 *
 * Dezactivat automat când:
 *  - utilizatorul a activat prefers-reduced-motion
 *  - ecranul e mai mic de 768px (mobil / tabletă)
 */
export function useParallax(speed: number = 0.35) {
  const ref = useRef<HTMLElement | null>(null)
  const [offset, setOffset] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768

    if (prefersReduced || isMobile) return

    const calculate = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const delta = (centerY - viewportCenter) * speed
      setOffset(delta)
    }

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(calculate)
    }

    calculate()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [speed])

  return { ref, offset }
}
