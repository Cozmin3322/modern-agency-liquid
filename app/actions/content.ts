'use server'

import { createClient } from '@/lib/supabase/server'
import { unstable_cache } from 'next/cache'

async function fetchContentFromSupabase<T>(key: string, defaultValue: T): Promise<T> {
  try {
    // Verify environment variables are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log(`[Content] Missing Supabase env vars, using default for "${key}"`)
      return defaultValue
    }

    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('site_content')
      .select('value')
      .eq('key', key)
      .single()

    if (error || !data) {
      console.log(`[Content] Key "${key}" not found, using default`)
      return defaultValue
    }

    try {
      if (typeof defaultValue === 'object') {
        return JSON.parse(data.value) as T
      }
      return data.value as T
    } catch {
      return defaultValue
    }
  } catch (error) {
    console.error(`[Content] Error for key "${key}":`, error)
    return defaultValue
  }
}

export async function getContent<T>(key: string, defaultValue: T): Promise<T> {
  // Map content keys to cache tags so they revalidate on admin save
  const tagMap: Record<string, string> = {
    'faq_items': 'intrebari-frecvente',
    'reviews_data': 'recenzii',
    'termoizolare_content': 'termoizolare',
    'hidroizolare_content': 'hidroizolare',
    'home_hero': '/',
    'projects_items': 'portofoliu',
    'contact_seo': 'despre-noi',
  }

  const tag = tagMap[key] || key

  // Cache with revalidation tag
  const cachedFetch = unstable_cache(
    async () => fetchContentFromSupabase(key, defaultValue),
    [`content-${key}`],
    { tags: [tag], revalidate: 3600 } // Revalidate every hour or on demand
  )

  return cachedFetch()
}
