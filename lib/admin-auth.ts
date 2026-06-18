// Admin localStorage management utility
export const ADMIN_SESSION_KEY = 'isothermlux_admin_session'
export const ADMIN_DATA_KEY = 'isothermlux_admin_data'

interface AdminSession {
  isAuthenticated: boolean
  loginTime: number
}

export const adminAuth = {
  login: (password: string): boolean => {
    if (password === 'isothermlux2025') {
      const session: AdminSession = {
        isAuthenticated: true,
        loginTime: Date.now()
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session))
      }
      return true
    }
    return false
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ADMIN_SESSION_KEY)
    }
  },

  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false
    const session = localStorage.getItem(ADMIN_SESSION_KEY)
    if (!session) return false
    try {
      const parsed = JSON.parse(session)
      return parsed.isAuthenticated === true
    } catch {
      return false
    }
  },

  // Admin data management
  getData: (key: string, defaultValue: any = null) => {
    if (typeof window === 'undefined') return defaultValue
    const data = localStorage.getItem(`${ADMIN_DATA_KEY}_${key}`)
    if (!data) return defaultValue
    try {
      return JSON.parse(data)
    } catch {
      return defaultValue
    }
  },

  setData: (key: string, value: any) => {
    if (typeof window === 'undefined') return
    localStorage.setItem(`${ADMIN_DATA_KEY}_${key}`, JSON.stringify(value))
  },

  resetData: (key: string) => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(`${ADMIN_DATA_KEY}_${key}`)
  }
}
