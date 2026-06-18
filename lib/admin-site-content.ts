import { createClient } from "@/lib/supabase/client"

export const adminSiteContent = {
  async getData(key: string, defaultValue: any = null) {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("site_content")
        .select("value")
        .eq("key", key)
        .single()

      if (error) {
        console.log("[v0] Supabase fetch error for key:", key, error.message)
        return defaultValue
      }

      return data ? JSON.parse(data.value) : defaultValue
    } catch (error) {
      console.log("[v0] Error parsing site content:", error)
      return defaultValue
    }
  },

  async setData(key: string, value: any) {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("site_content")
        .upsert({
          key,
          value: JSON.stringify(value),
          updated_at: new Date().toISOString(),
        })
        .eq("key", key)

      if (error) {
        console.error("[v0] Error saving site content:", error)
        return false
      }

      return true
    } catch (error) {
      console.error("[v0] Error in setData:", error)
      return false
    }
  },

  async deleteData(key: string) {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("site_content")
        .delete()
        .eq("key", key)

      if (error) {
        console.error("[v0] Error deleting site content:", error)
        return false
      }

      return true
    } catch (error) {
      console.error("[v0] Error in deleteData:", error)
      return false
    }
  },
}
