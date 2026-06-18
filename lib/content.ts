import { createClient } from '@/lib/supabase/server'

/**
 * Citește conținut dinamic din Supabase.
 * Dacă Supabase e down sau cheia nu există, returnează defaultValue.
 * Sigur pentru utilizare în async server components.
 */
export async function getContent<T>(key: string, defaultValue: T): Promise<T> {
  try {
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', key)
      .single()

    if (error || !data) {
      console.log(`[Content] Cheia "${key}" nu există în Supabase, folosesc default`)
      return defaultValue
    }

    // Parse JSON dacă defaultValue e obiect, altfel returnează string
    try {
      if (typeof defaultValue === 'object') {
        return JSON.parse(data.value) as T
      }
      return data.value as T
    } catch {
      console.warn(`[Content] Eroare parse JSON pentru "${key}", folosesc default`)
      return defaultValue
    }
  } catch (error) {
    console.error(`[Content] Eroare Supabase pentru "${key}":`, error)
    // Fallback sigur la default dacă Supabase e down
    return defaultValue
  }
}

/**
 * Salvează conținut în Supabase (doar din admin cu service role).
 * Folosit doar în admin panel endpoints.
 */
export async function setContent(key: string, value: unknown): Promise<boolean> {
  try {
    const supabase = await createClient()
    
    const valueString = typeof value === 'string' ? value : JSON.stringify(value)

    const { error } = await supabase
      .from('site_content')
      .upsert(
        {
          key,
          value: valueString,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'key' }
      )

    if (error) {
      console.error(`[Content] Eroare salvare "${key}":`, error)
      return false
    }

    console.log(`[Content] Salvat cu succes "${key}"`)
    return true
  } catch (error) {
    console.error(`[Content] Eroare Supabase salvare "${key}":`, error)
    return false
  }
}
