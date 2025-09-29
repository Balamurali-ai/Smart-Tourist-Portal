"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthCtx = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const saved = localStorage.getItem("sts_user")
    const savedLang = localStorage.getItem("sts_lang")
    if (saved) setUser(JSON.parse(saved))
    if (savedLang) setLang(savedLang)
  }, [])

  useEffect(() => {
    if (user) localStorage.setItem("sts_user", JSON.stringify(user))
    else localStorage.removeItem("sts_user")
  }, [user])

  useEffect(() => {
    localStorage.setItem("sts_lang", lang)
  }, [lang])

  const login = (payload) => setUser(payload)
  const logout = () => setUser(null)

  return <AuthCtx.Provider value={{ user, login, logout, lang, setLang }}>{children}</AuthCtx.Provider>
}

export function useAuth() {
  return useContext(AuthCtx)
}
