"use client"

import { useState } from "react"
import { useAuth } from "../state/auth.jsx"
import { users as seedUsers } from "../data/mockData.js"

export default function Settings() {
  const { lang, setLang } = useAuth()
  const [zones, setZones] = useState([{ name: "Old City Market", coords: "17.384, 78.486" }])
  const [users, setUsers] = useState(seedUsers)

  const addZone = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const coords = form.get("coords")
    if (!name || !coords) return
    setZones((prev) => [...prev, { name, coords }])
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <h2 className="text-xl font-semibold">Settings</h2>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-slate-800">
          <div className="p-3 border-b border-slate-800 font-medium">Manage High-Risk Zones</div>
          <form onSubmit={addZone} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              name="name"
              placeholder="Area name"
              className="rounded bg-slate-800 border border-slate-700 px-3 py-2 md:col-span-1"
            />
            <input
              name="coords"
              placeholder="Coordinates (lat, lng)"
              className="rounded bg-slate-800 border border-slate-700 px-3 py-2 md:col-span-1"
            />
            <button className="rounded bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 md:col-span-1">
              Add Zone
            </button>
          </form>
          <ul className="divide-y divide-slate-800">
            {zones.map((z, i) => (
              <li key={i} className="p-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{z.name}</p>
                  <p className="text-xs text-slate-400">{z.coords}</p>
                </div>
                <button
                  onClick={() => setZones((prev) => prev.filter((_, idx) => idx !== i))}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800">
          <div className="p-3 border-b border-slate-800 font-medium">Manage Authority Users</div>
          <div className="p-4 overflow-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800/60 text-slate-300">
                <tr>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Department</th>
                  <th className="text-left p-2">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {users.map((u) => (
                  <tr key={u.id}>
                    <td className="p-2">{u.name}</td>
                    <td className="p-2">{u.department}</td>
                    <td className="p-2">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-800 p-4">
        <p className="font-medium">Language</p>
        <div className="mt-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="rounded bg-slate-800 border border-slate-700 px-3 py-2"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="bn">বাংলা</option>
            <option value="mr">मराठी</option>
          </select>
        </div>
      </section>
    </div>
  )
}
