'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { adminAuth } from '@/lib/admin-auth'
import { LogOut, Home, Settings, FileText, Users, Package } from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminProtectedLayout({ children }: AdminLayoutProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      if (adminAuth.isAuthenticated()) {
        setIsAuthenticated(true)
      } else {
        router.push('/admin/login')
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    adminAuth.logout()
    router.push('/admin/login')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/60">Se încarcă...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: Home },
    { label: 'Acasă', href: '/admin/content/home', icon: FileText },
    { label: 'Termoizolare', href: '/admin/content/termoizolare', icon: FileText },
    { label: 'Hidroizolare', href: '/admin/content/hidroizolare', icon: FileText },
    { label: 'Calculator', href: '/admin/content/calculator', icon: Settings },
    { label: 'FAQ', href: '/admin/content/faq', icon: FileText },
    { label: 'Recenzii', href: '/admin/content/reviews', icon: Users },
    { label: 'Proiecte', href: '/admin/content/projects', icon: Package },
    { label: 'Contact & SEO', href: '/admin/content/contact-seo', icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-accent/5 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-serif font-bold text-foreground">IsoThermLux</h1>
          <p className="text-xs text-foreground/60">Admin Panel</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-none text-foreground/80 hover:bg-accent/10 hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-border p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-none text-foreground/80 hover:bg-red-500/10 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-accent/5 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Admin Panel</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live pe Vercel</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
