import { createContext } from 'react'

export interface AuthUser {
  name: string
  email: string
}

export interface AuthContextValue {
  user: AuthUser | null
  signIn: (name: string, email: string) => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)