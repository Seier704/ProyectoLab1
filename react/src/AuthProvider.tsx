import { useState, type ReactNode } from 'react'
import { AuthContext, type AuthContextValue, type AuthUser } from './AuthContext'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)

  const value: AuthContextValue = {
    user,
    signIn: (name, email) => setUser({ name, email }),
    signOut: () => setUser(null),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}