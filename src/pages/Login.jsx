"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../state/auth.jsx"

export default function Login() {
  const navigate = useNavigate()
  const { login, lang, setLang } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Police")

  const submit = (e) => {
    e.preventDefault()
    // mock auth success
    login({ username, role })
    navigate("/", { replace: true })
  }

  return (
    <div className="relative min-h-screen grid place-items-center bg-slate-900">
      <div className="relative w-full max-w-md mx-auto">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-emerald-500 text-slate-900 font-extrabold">
              S
            </span>
            <h1 className="text-xl font-semibold tracking-wide text-white">SMART TOURIST SAFETY</h1>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 shadow-xl backdrop-blur"
        >
          <label className="block text-sm text-slate-300 mb-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-3 rounded bg-slate-800 border border-slate-700 px-3 py-2 text-white"
            placeholder="Enter username"
            required
          />

          <label className="block text-sm text-slate-300 mb-1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full mb-3 rounded bg-slate-800 border border-slate-700 px-3 py-2 text-white"
            placeholder="Enter password"
            required
          />

          <fieldset className="mb-4">
            <legend className="text-sm text-slate-300 mb-1">Role</legend>
            <div className="flex items-center gap-4 text-white">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="Police"
                  checked={role === "Police"}
                  onChange={() => setRole("Police")}
                />
                Police
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="Tourism Dept."
                  checked={role === "Tourism Dept."}
                  onChange={() => setRole("Tourism Dept.")}
                />
                Tourism Dept.
              </label>
            </div>
          </fieldset>

          <label className="block text-sm text-slate-300 mb-1">Language</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full mb-6 rounded bg-slate-800 border border-slate-700 px-3 py-2 text-white"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="bn">বাংলা</option>
            <option value="mr">मराठी</option>
          </select>

          <button className="w-full rounded bg-blue-600 hover:bg-blue-500 text-white py-2 font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
