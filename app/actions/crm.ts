'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export type LeadStatus = 'nou' | 'sunat' | 'oferta_trimisa' | 'contract' | 'finalizat' | 'pierdut'

export interface Lead {
  id: string
  name: string
  phone: string
  location: string | null
  service_type: string | null
  message: string | null
  source: string
  status: LeadStatus
  notes: string | null
  created_at: string
  updated_at: string
}

export interface NewLeadInput {
  name: string
  phone: string
  location?: string
  serviceType?: string
  message?: string
  source?: string
}

// Creează un lead nou — apelat din formularul de contact (public, fără autentificare)
export async function createLead(input: NewLeadInput): Promise<boolean> {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from('crm_leads').insert({
      name: input.name,
      phone: input.phone,
      location: input.location || null,
      service_type: input.serviceType || null,
      message: input.message || null,
      source: input.source || 'website',
      status: 'nou',
    })

    if (error) {
      console.error('[CRM] Error creating lead:', error)
      return false
    }

    revalidatePath('/admin/crm')
    return true
  } catch (error) {
    console.error('[CRM] Unexpected error creating lead:', error)
    return false
  }
}

// Listează toate lead-urile — folosit în admin panel
export async function getLeads(): Promise<Lead[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('crm_leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[CRM] Error fetching leads:', error)
      return []
    }

    return data as Lead[]
  } catch (error) {
    console.error('[CRM] Unexpected error fetching leads:', error)
    return []
  }
}

// Actualizează statusul unui lead
export async function updateLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  try {
    const supabase = await createClient()
    const { error } = await supabase
      .from('crm_leads')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)

    if (error) {
      console.error('[CRM] Error updating lead status:', error)
      return false
    }

    revalidatePath('/admin/crm')
    return true
  } catch (error) {
    console.error('[CRM] Unexpected error updating status:', error)
    return false
  }
}

// Actualizează notițele unui lead
export async function updateLeadNotes(id: string, notes: string): Promise<boolean> {
  try {
    const supabase = await createClient()
    const { error } = await supabase
      .from('crm_leads')
      .update({ notes, updated_at: new Date().toISOString() })
      .eq('id', id)

    if (error) {
      console.error('[CRM] Error updating lead notes:', error)
      return false
    }

    revalidatePath('/admin/crm')
    return true
  } catch (error) {
    console.error('[CRM] Unexpected error updating notes:', error)
    return false
  }
}

// Șterge un lead
export async function deleteLead(id: string): Promise<boolean> {
  try {
    const supabase = await createClient()
    const { error } = await supabase.from('crm_leads').delete().eq('id', id)

    if (error) {
      console.error('[CRM] Error deleting lead:', error)
      return false
    }

    revalidatePath('/admin/crm')
    return true
  } catch (error) {
    console.error('[CRM] Unexpected error deleting lead:', error)
    return false
  }
}
