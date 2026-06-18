'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { saveContent } from '@/app/actions/admin'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw, Plus, Trash2, Edit2 } from 'lucide-react'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  location: string
}

const DEFAULT_REVIEWS: Review[] = [
  { id: '1', name: 'Ion Popescu', rating: 5, text: 'Serviciu profesional, echipă înțelegătoare.', date: '2024-01-15', location: 'Chișinău' },
  { id: '2', name: 'Maria Grigore', rating: 5, text: 'Foarte mulțumit de rezultate și preț.', date: '2024-01-10', location: 'Chișinău' },
]

export default function ReviewsEditor() {
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newReview, setNewReview] = useState({ name: '', location: '', date: '', text: '', rating: 5 })
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = adminAuth.getData('reviews_data', DEFAULT_REVIEWS)
    setReviews(saved)
    setIsLoading(false)
  }, [])

  const handleAdd = () => {
    if (!newReview.name.trim() || !newReview.text.trim()) return
    const item: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: newReview.date || new Date().toISOString().split('T')[0],
      location: newReview.location,
    }
    setReviews(prev => [...prev, item])
    setNewReview({ name: '', location: '', date: '', text: '', rating: 5 })
    setIsSaved(false)
  }

  const handleDelete = (id: string) => {
    setReviews(prev => prev.filter(item => item.id !== id))
    setIsSaved(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const success = await saveContent('reviews_data', reviews)
      if (success) {
        adminAuth.setData('reviews_data', reviews)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      }
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setReviews(DEFAULT_REVIEWS)
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Editare Recenzii
            </h1>
            <p className="text-foreground/60">
              Adăugați, editați sau ștergeți recenziile clienților
            </p>
          </div>

          <div className="space-y-6">
            {/* Add New Review */}
            <div className="border border-border rounded-lg p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Adaugă Recenzie Nouă</h2>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nume client..."
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    placeholder="Oraș..."
                    value={newReview.city}
                    onChange={(e) => setNewReview({...newReview, city: e.target.value})}
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <input
                  type="date"
                  value={newReview.date}
                  onChange={(e) => setNewReview({...newReview, date: e.target.value})}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                />
                <textarea
                  placeholder="Text recenzie..."
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                />
                <button
                  onClick={handleAdd}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Adaugă
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-3">
              {reviews.map((review) => (
                <div key={review.id} className="border border-border rounded-lg p-4 bg-accent/5">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{review.name}</p>
                      <p className="text-sm text-foreground/60">{review.city} • {review.date}</p>
                      <p className="text-sm text-foreground/80 mt-2">{review.text}</p>
                      <p className="text-sm text-yellow-600 mt-1">Rating: {review.rating}/5</p>
                    </div>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="p-2 text-foreground/60 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Save className="w-4 h-4" />
                Salvează
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-2 border border-border text-foreground rounded-lg hover:bg-accent/5 transition-colors"
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
