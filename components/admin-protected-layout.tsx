'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { adminAuth } from '@/lib/admin-auth'
import { LogOut, Home, Settings, FileText, Users, Package, Phone, Menu, X } from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminProtectedLayout({ children }: AdminLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  // Close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

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
    { label: 'CRM — Cereri Clienți', href: '/admin/crm', icon: Phone },
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

  const activeLabel = navItems.find((item) => pathname?.startsWith(item.href))?.label || 'Admin Panel'

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — drawer on mobile/tablet, static on desktop */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 sm:w-64 border-r border-border bg-accent/5 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-serif font-bold text-foreground">IsoThermLux</h1>
            <p className="text-xs text-foreground/60">Admin Panel</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-foreground/50 hover:text-foreground"
            aria-label="Închide meniu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 sm:py-2 rounded-none transition-colors ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-foreground/80 hover:bg-accent/10 hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-border p-3 sm:p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 sm:py-2 rounded-none text-foreground/80 hover:bg-red-500/10 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <header className="border-b border-border bg-accent/5 px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-1.5 -ml-1.5 text-foreground/70 hover:text-accent flex-shrink-0"
                aria-label="Deschide meniu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-sm sm:text-lg font-semibold text-foreground truncate">{activeLabel}</h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-foreground/60 flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Live pe Vercel</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  )
}
