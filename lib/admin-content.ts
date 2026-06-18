import { setContent } from '@/lib/content'

/**
 * Admin utility - Salvează conținut în Supabase din admin panel.
 * Se apelează din editoarele admin pentru a persista datele.
 */
export const adminContent = {
  async save(key: string, value: unknown): Promise<boolean> {
    return setContent(key, value)
  },
}
