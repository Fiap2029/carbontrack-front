import { createContext, useContext, useState } from 'react'
import { organizacoes } from '../data/data'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentOrg, setCurrentOrg] = useState(() => {
    const stored = localStorage.getItem('carbontrack_org')
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return null
      }
    }
    return null
  })

  const login = (email, senha) => {
    const org = organizacoes.find(
      (o) => o.email === email && o.senha === senha
    )
    if (org) {
      setCurrentOrg(org)
      localStorage.setItem('carbontrack_org', JSON.stringify(org))
      return { success: true }
    }
    return { success: false, error: 'E-mail ou senha incorretos.' }
  }

  const register = (dados) => {
    const newOrg = {
      id: Date.now(),
      nome: dados.nome,
      tipo: 'Organização',
      cnpj: dados.cnpj,
      email: dados.email,
      senha: dados.senha,
      statusConta: 'Ativa',
      iniciais: dados.nome.substring(0, 2).toUpperCase(),
      cor: '#2563FF',
    }
    setCurrentOrg(newOrg)
    localStorage.setItem('carbontrack_org', JSON.stringify(newOrg))
    return { success: true }
  }

  const logout = () => {
    setCurrentOrg(null)
    localStorage.removeItem('carbontrack_org')
  }

  return (
    <AuthContext.Provider value={{ currentOrg, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
