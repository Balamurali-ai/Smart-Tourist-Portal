"use client"
import "leaflet/dist/leaflet.css"

import { Outlet, NavLink } from "react-router-dom"
import { useAuth } from "./state/auth.jsx"

export default function App() {
  const { user, logout, lang, setLang } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-emerald-500 text-slate-900 font-extrabold">
              S
            </span>
            <h1 className="text-lg font-semibold tracking-wide">Smart Tourist Safety</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? "bg-slate-800 text-emerald-300" : "text-slate-300 hover:text-white hover:bg-slate-800"}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/tourists"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? "bg-slate-800 text-emerald-300" : "text-slate-300 hover:text-white hover:bg-slate-800"}`
              }
            >
              Tourists
            </NavLink>
            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? "bg-slate-800 text-emerald-300" : "text-slate-300 hover:text-white hover:bg-slate-800"}`
              }
            >
              Alerts
            </NavLink>
            <NavLink
              to="/ai"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? "bg-slate-800 text-emerald-300" : "text-slate-300 hover:text-white hover:bg-slate-800"}`
              }
            >
              AI Monitoring
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? "bg-slate-800 text-emerald-300" : "text-slate-300 hover:text-white hover:bg-slate-800"}`
              }
            >
              Reports
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? "bg-slate-800 text-emerald-300" : "text-slate-300 hover:text-white hover:bg-slate-800"}`
              }
            >
              Settings
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <select
              aria-label="Language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-slate-800 text-slate-200 border border-slate-700 rounded px-2 py-1"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="bn">বাংলা</option>
              <option value="mr">मराठी</option>
            </select>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm text-slate-300">Role:</span>
              <span className="text-sm font-medium text-emerald-300">{user?.role}</span>
            </div>
            <button
              onClick={logout}
              className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 text-center text-xs text-slate-400 py-4">
        © {new Date().getFullYear()} Smart Tourist Safety System · For Authorities Only
      </footer>
    </div>
  )
}
