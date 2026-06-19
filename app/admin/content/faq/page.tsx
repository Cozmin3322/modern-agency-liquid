'use client'

import { useState, useEffect } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { saveContent } from '@/app/actions/admin'
import { adminAuth } from '@/lib/admin-auth'
import { Save, RotateCcw, Plus, Trash2, Edit2 } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const DEFAULT_FAQ: FAQItem[] = [
  { id: '1', question: 'Cât costă termoizolarea?', answer: 'Prețul depinde de metraj și complexitate. În medie 45 EUR/m².' },
  { id: '2', question: 'Care este garanția?', answer: 'Oferim garanție scrisă de 25 de ani pe material și manoperă.' },
  { id: '3', question: 'Cum fac o comandă?', answer: 'Contactați-ne prin WhatsApp sau apel pentru o consultație gratuită.' },
]

export default function FAQEditor() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>(DEFAULT_FAQ)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load from local cache
    const saved = adminAuth.getData('faq_items', DEFAULT_FAQ)
    setFaqItems(saved)
    setIsLoading(false)
  }, [])

  const handleAdd = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return
    const newItem: FAQItem = {
      id: Date.now().toString(),
      question: newQuestion,
      answer: newAnswer,
    }
    setFaqItems(prev => [...prev, newItem])
    setNewQuestion('')
    setNewAnswer('')
    setIsSaved(false)
  }

  const handleDelete = (id: string) => {
    setFaqItems(prev => prev.filter(item => item.id !== id))
    setIsSaved(false)
  }

  const handleUpdate = (id: string, question: string, answer: string) => {
    setFaqItems(prev => prev.map(item => 
      item.id === id ? { ...item, question, answer } : item
    ))
    setEditingId(null)
    setIsSaved(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const success = await saveContent('faq_items', faqItems)
      if (success) {
        adminAuth.setData('faq_items', faqItems)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      }
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setFaqItems(DEFAULT_FAQ)
    setEditingId(null)
    setNewQuestion('')
    setNewAnswer('')
    setIsSaved(false)
  }

  if (isLoading) return <div className="p-8">Se încarcă...</div>

  return (
    <AdminProtectedLayout>
      <div className="p-8">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Editare FAQ
            </h1>
            <p className="text-foreground/60">
              Adăugați, editați sau ștergeți întrebări frecvente
            </p>
          </div>

          <div className="space-y-6">
            {/* Add New FAQ */}
            <div className="border border-border rounded-none p-6 bg-accent/5">
              <h2 className="text-lg font-semibold text-foreground mb-4">Adaugă Întrebare Nouă</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Introduceți întrebarea..."
                  className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                />
                <textarea
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="Introduceți răspunsul..."
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                />
                <button
                  onClick={handleAdd}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-none hover:bg-accent/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Adaugă
                </button>
              </div>
            </div>

            {/* FAQ Items List */}
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.id} className="border border-border rounded-none p-4 bg-accent/5">
                  {editingId === item.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        defaultValue={item.question}
                        onBlur={(e) => handleUpdate(item.id, e.target.value, item.answer)}
                        className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                      />
                      <textarea
                        defaultValue={item.answer}
                        onBlur={(e) => handleUpdate(item.id, item.question, e.target.value)}
                        rows={2}
                        className="w-full px-4 py-2 border border-border rounded-none bg-background text-foreground focus:outline-none focus:border-accent"
                      />
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-sm text-accent hover:underline"
                      >
                        Gata
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1">{item.question}</p>
                        <p className="text-sm text-foreground/60">{item.answer}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingId(item.id)}
                          className="p-2 text-foreground/60 hover:text-accent"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-foreground/60 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
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
