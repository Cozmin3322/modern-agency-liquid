'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidateTag } from 'next/cache'

export async function saveContent(key: string, value: unknown): Promise<boolean> {
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
      console.error(`[Content] Error saving "${key}":`, error)
      return false
    }

    console.log(`[Content] Saved "${key}" successfully`)
    
    // Revalidate pages that use this content
    const tagMap: Record<string, string[]> = {
      'faq_items': ['intrebari-frecvente'],
      'reviews_data': ['recenzii'],
      'termoizolare_content': ['termoizolare'],
      'hidroizolare_content': ['hidroizolare'],
      'home_hero': ['/'],
      'projects_items': ['portofoliu'],
      'contact_seo': ['despre-noi'],
    }

    const tags = tagMap[key] || [key]
    tags.forEach(tag => {
      revalidateTag(tag)
      console.log(`[Cache] Revalidated tag: ${tag}`)
    })

    return true
  } catch (error) {
    console.error(`[Content] Supabase error saving "${key}":`, error)
    return false
  }
}
