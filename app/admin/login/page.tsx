'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { adminAuth } from '@/lib/admin-auth'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    if (adminAuth.login(password)) {
      router.push('/admin/dashboard')
    } else {
      setError('Parolă incorectă')
      setPassword('')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground">IsoThermLux</h1>
          <p className="text-foreground/60 text-sm mt-2">Admin Panel</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-accent/5 border border-accent/20 rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Parolă Admin
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduceți parola"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-accent text-white font-medium py-2 rounded-lg hover:bg-accent/90 disabled:opacity-50 transition-all"
          >
            {isLoading ? 'Se încarcă...' : 'Conectare'}
          </button>
        </form>

        <p className="text-center text-foreground/50 text-xs mt-6">
          Admin Panel protejat
        </p>
      </div>
    </div>
  )
}
