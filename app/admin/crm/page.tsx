'use client'

import { useEffect, useState, useCallback } from 'react'
import { AdminProtectedLayout } from '@/components/admin-protected-layout'
import { getLeads, updateLeadStatus, updateLeadNotes, deleteLead, type Lead, type LeadStatus } from '@/app/actions/crm'
import { Phone, MapPin, Wrench, Calendar, Trash2, ChevronDown, MessageSquare } from 'lucide-react'

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string }> = {
  nou: { label: 'Nou', color: 'bg-blue-100 text-blue-700 border-blue-300' },
  sunat: { label: 'Sunat', color: 'bg-amber-100 text-amber-700 border-amber-300' },
  oferta_trimisa: { label: 'Ofertă Trimisă', color: 'bg-purple-100 text-purple-700 border-purple-300' },
  contract: { label: 'Contract', color: 'bg-green-100 text-green-700 border-green-300' },
  finalizat: { label: 'Finalizat', color: 'bg-emerald-100 text-emerald-800 border-emerald-400' },
  pierdut: { label: 'Pierdut', color: 'bg-gray-100 text-gray-500 border-gray-300' },
}

const STATUS_ORDER: LeadStatus[] = ['nou', 'sunat', 'oferta_trimisa', 'contract', 'finalizat', 'pierdut']

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('ro-RO', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
    ' ' + d.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })
}

function LeadCard({ lead, onUpdate }: { lead: Lead; onUpdate: () => void }) {
  const [notesOpen, setNotesOpen] = useState(false)
  const [notes, setNotes] = useState(lead.notes || '')
  const [savingNotes, setSavingNotes] = useState(false)
  const [statusMenuOpen, setStatusMenuOpen] = useState(false)

  const handleStatusChange = async (status: LeadStatus) => {
    setStatusMenuOpen(false)
    await updateLeadStatus(lead.id, status)
    onUpdate()
  }

  const handleSaveNotes = async () => {
    setSavingNotes(true)
    await updateLeadNotes(lead.id, notes)
    setSavingNotes(false)
  }

  const handleDelete = async () => {
    if (!confirm(`Ștergi cererea de la ${lead.name}?`)) return
    await deleteLead(lead.id)
    onUpdate()
  }

  const statusInfo = STATUS_CONFIG[lead.status] || STATUS_CONFIG.nou

  return (
    <div className="border border-border bg-white">
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-semibold text-foreground text-lg">{lead.name}</h3>
            <p className="text-xs text-foreground/50 font-mono flex items-center gap-1 mt-0.5">
              <Calendar className="w-3 h-3" /> {formatDate(lead.created_at)}
            </p>
          </div>

          {/* Status dropdown */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setStatusMenuOpen(!statusMenuOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-none ${statusInfo.color}`}
            >
              {statusInfo.label}
              <ChevronDown className="w-3 h-3" />
            </button>
            {statusMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-border shadow-lg z-20">
                {STATUS_ORDER.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(s)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-accent/10 transition-colors"
                  >
                    {STATUS_CONFIG[s].label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-2 mb-3 text-sm">
          <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-accent hover:underline">
            <Phone className="w-4 h-4 flex-shrink-0" /> {lead.phone}
          </a>
          {lead.location && (
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="w-4 h-4 flex-shrink-0" /> {lead.location}
            </div>
          )}
          {lead.service_type && (
            <div className="flex items-center gap-2 text-foreground/70 sm:col-span-2">
              <Wrench className="w-4 h-4 flex-shrink-0" /> {lead.service_type}
            </div>
          )}
        </div>

        {lead.message && (
          <p className="text-sm text-foreground/70 bg-card p-3 mb-3 border-l-2 border-accent/40">
            {lead.message}
          </p>
        )}

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide px-3 py-1.5 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className="text-xs font-mono uppercase tracking-wide px-3 py-1.5 border border-border text-foreground/60 hover:border-accent hover:text-accent transition-colors"
          >
            {notesOpen ? 'Ascunde Notițe' : lead.notes ? 'Vezi Notițe' : 'Adaugă Notițe'}
          </button>
          <button
            onClick={handleDelete}
            className="ml-auto flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide px-3 py-1.5 text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" /> Șterge
          </button>
        </div>

        {notesOpen && (
          <div className="mt-3 pt-3 border-t border-border">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notițe interne despre acest client..."
              className="w-full p-3 border border-border text-sm focus:outline-none focus:border-accent resize-none"
              rows={3}
            />
            <button
              onClick={handleSaveNotes}
              disabled={savingNotes}
              className="mt-2 text-xs font-mono uppercase tracking-wide px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {savingNotes ? 'Se salvează...' : 'Salvează Notițe'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CrmPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'toate'>('toate')

  const loadLeads = useCallback(async () => {
    setLoading(true)
    const data = await getLeads()
    setLeads(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadLeads()
  }, [loadLeads])

  const filtered = filterStatus === 'toate' ? leads : leads.filter(l => l.status === filterStatus)

  const counts = STATUS_ORDER.reduce((acc, s) => {
    acc[s] = leads.filter(l => l.status === s).length
    return acc
  }, {} as Record<LeadStatus, number>)

  return (
    <AdminProtectedLayout>
      <div className="p-6 sm:p-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-1">CRM — Cereri Clienți</h1>
          <p className="text-foreground/60">Toate cererile primite prin formularul de contact de pe site</p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilterStatus('toate')}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wide border transition-colors ${
              filterStatus === 'toate' ? 'bg-foreground text-white border-foreground' : 'border-border text-foreground/60 hover:border-foreground/40'
            }`}
          >
            Toate ({leads.length})
          </button>
          {STATUS_ORDER.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wide border transition-colors ${
                filterStatus === s ? STATUS_CONFIG[s].color + ' font-semibold' : 'border-border text-foreground/60 hover:border-foreground/40'
              }`}
            >
              {STATUS_CONFIG[s].label} ({counts[s] || 0})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-16 text-foreground/50">Se încarcă...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border">
            <p className="text-foreground/50">
              {leads.length === 0
                ? 'Nicio cerere primită încă. Cererile din formularul de contact vor apărea aici automat.'
                : 'Nicio cerere cu acest status.'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lead) => (
              <LeadCard key={lead.id} lead={lead} onUpdate={loadLeads} />
            ))}
          </div>
        )}
      </div>
    </AdminProtectedLayout>
  )
}
