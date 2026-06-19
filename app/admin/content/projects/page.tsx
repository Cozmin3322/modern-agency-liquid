'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw, Trash2, Edit2 } from 'lucide-react'

interface Project {
  id: string
  title: string
  location: string
  year: number
  type: string
}

const DEFAULT_PROJECTS: Project[] = [
  { id: '1', title: 'Vila Moderna', location: 'Chișinău', year: 2024, type: 'Termoizolare' },
  { id: '2', title: 'Subsol Uscat', location: 'Bălți', year: 2023, type: 'Hidroizolare' },
]

export default function ProjectsEditor() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = adminAuth.getData('projects_items', DEFAULT_PROJECTS)
    setProjects(saved)
    setIsLoading(false)
  }, [])

  const handleUpdate = (id: string, field: keyof Project, value: any) => {
    setProjects(prev => prev.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ))
    setIsSaved(false)
  }

  const handleDelete = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id))
    setIsSaved(false)
  }

  const handleSave = () => {
    adminAuth.setData('projects_items', projects)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleReset = () => {
    setProjects(DEFAULT_PROJECTS)
    adminSiteContent.resetData('projects_items')
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Editare Proiecte
            </h1>
            <p className="text-foreground/60">
              Editați detaliile proiectelor din portofoliu
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-border rounded-none p-4 bg-accent/5">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Titlu</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleUpdate(project.id, 'title', e.target.value)}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Locație</label>
                    <input
                      type="text"
                      value={project.location}
                      onChange={(e) => handleUpdate(project.id, 'location', e.target.value)}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-foreground/60">An</label>
                    <input
                      type="number"
                      value={project.year}
                      onChange={(e) => handleUpdate(project.id, 'year', parseInt(e.target.value))}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Tip Serviciu</label>
                    <select
                      value={project.type}
                      onChange={(e) => handleUpdate(project.id, 'type', e.target.value)}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:border-accent"
                    >
                      <option>Termoizolare</option>
                      <option>Hidroizolare</option>
                      <option>Ambele</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="mt-3 p-2 text-foreground/60 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
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
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-600 text-sm mt-4">
              Salvat cu succes!
            </div>
          )}
        </div>
      </div>
    </AdminProtectedLayout>
  )
}
