'use client'

import { useEffect, useState } from 'react'

export function useAdminData<T>(key: string, defaultValue: T): [T, (value: T) => void, () => void] {
  const [data, setData] = useState<T>(defaultValue)
  const [isMounted, setIsMounted] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(`admin_${key}`)
        if (stored) {
          setData(JSON.parse(stored))
        }
      } catch (error) {
        console.error(`[v0] Failed to load admin data for ${key}:`, error)
      }
      setIsMounted(true)
    }
  }, [key])

  // Save to localStorage
  const saveData = (newData: T) => {
    setData(newData)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(`admin_${key}`, JSON.stringify(newData))
      } catch (error) {
        console.error(`[v0] Failed to save admin data for ${key}:`, error)
      }
    }
  }

  // Reset to default
  const resetData = () => {
    setData(defaultValue)
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(`admin_${key}`)
      } catch (error) {
        console.error(`[v0] Failed to reset admin data for ${key}:`, error)
      }
    }
  }

  return [data, saveData, resetData]
}

export function useIsAdminAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('admin_session')
      setIsAuthenticated(!!session)
      setIsLoading(false)
    }
  }, [])

  return { isAuthenticated, isLoading }
}
