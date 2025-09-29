"use client"

import { useMemo, useState } from "react"
import { tourists, alerts } from "../data/mockData.js"

export default function Tourists() {
  const [query, setQuery] = useState("")
  const [activeId, setActiveId] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tourists.slice(0, 10)
    return tourists.filter((t) => t.id.toLowerCase().includes(q) || t.name.toLowerCase().includes(q))
  }, [query])

  const active = tourists.find((t) => t.id === activeId) || filtered[0]

  const history = useMemo(() => {
    return alerts.filter((a) => a.touristId === active?.id).sort((a, b) => b.timestamp - a.timestamp)
  }, [active])

  const generateEFIR = () => {
    alert(`E-FIR generated (dummy) for ${active?.name} - ID: ${active?.id}`)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Tourist ID or name..."
          className="flex-1 rounded bg-slate-800 border border-slate-700 px-3 py-2"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 rounded-lg border border-slate-800">
          <div className="p-3 border-b border-slate-800 font-medium">Results</div>
          <ul className="max-h-[520px] overflow-auto divide-y divide-slate-800">
            {filtered.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setActiveId(t.id)}
                  className={`w-full text-left p-3 hover:bg-slate-800 ${active?.id === t.id ? "bg-slate-800/60" : ""}`}
                >
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    ID: {t.id} · Safety Score: {t.safetyScore}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 rounded-lg border border-slate-800">
          <div className="p-3 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-semibold">Tourist Details</h3>
            <button onClick={generateEFIR} className="rounded bg-red-600 hover:bg-red-500 text-white px-3 py-1.5">
              Generate E-FIR
            </button>
          </div>
          {active ? (
            <div className="p-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-400">Digital ID</p>
                <p className="font-medium">{active.id}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Name</p>
                <p className="font-medium">{active.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Itinerary</p>
                <p className="font-medium">{active.itinerary}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Emergency Contacts</p>
                <p className="font-medium">{active.emergencyContacts.join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Safety Score</p>
                <p className="font-medium">{active.safetyScore}/100</p>
              </div>

              <div className="md:col-span-2 mt-2">
                <p className="font-medium mb-2">Alert History</p>
                <div className="overflow-auto rounded border border-slate-800">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-800/60 text-slate-300">
                      <tr>
                        <th className="text-left p-2">Time</th>
                        <th className="text-left p-2">Title</th>
                        <th className="text-left p-2">Severity</th>
                        <th className="text-left p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {history.map((h) => (
                        <tr key={h.id}>
                          <td className="p-2">{new Date(h.timestamp).toLocaleString()}</td>
                          <td className="p-2">{h.title}</td>
                          <td className="p-2">
                            <span
                              className={`badge ${h.severity === "High" ? "badge-high" : h.severity === "Medium" ? "badge-medium" : "badge-low"}`}
                            >
                              {h.severity}
                            </span>
                          </td>
                          <td className="p-2">{h.status}</td>
                        </tr>
                      ))}
                      {history.length === 0 && (
                        <tr>
                          <td className="p-3 text-slate-400" colSpan="4">
                            No alerts for this tourist.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-slate-400">Select a tourist from the list to view details.</div>
          )}
        </div>
      </div>
    </div>
  )
}
