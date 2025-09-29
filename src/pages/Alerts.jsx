"use client"

import { useMemo, useState } from "react"
import { alerts as allAlerts } from "../data/mockData.js"
import MapMock from "../components/MapMock.jsx"

export default function Alerts() {
  const [filter, setFilter] = useState("All")
  const [list, setList] = useState(allAlerts)

  const filtered = useMemo(() => (filter === "All" ? list : list.filter((a) => a.severity === filter)), [filter, list])

  const updateStatus = (id, status) => {
    setList((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)))
  }

  const pill = (sev) =>
    ({
      High: "badge badge-high",
      Medium: "badge badge-medium",
      Low: "badge badge-low",
    })[sev]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Active Alerts</h2>
        <div className="flex items-center gap-2">
          {["All", "High", "Medium", "Low"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded border ${filter === s ? "bg-slate-800 border-slate-700" : "border-slate-800 hover:bg-slate-800"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-lg border border-slate-800 divide-y divide-slate-800">
          {filtered.map((a) => (
            <div key={a.id} className="p-4 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={pill(a.severity)}>{a.severity}</span>
                  <span className="text-sm text-slate-400">{new Date(a.timestamp).toLocaleString()}</span>
                </div>
                <p className="mt-1 font-medium">{a.title}</p>
                <p className="text-sm text-slate-400">Location: {a.location}</p>
                <p className="text-xs text-slate-500">Tourist ID: {a.touristId}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateStatus(a.id, "Acknowledged")}
                  className="px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white"
                >
                  Acknowledge
                </button>
                <button
                  onClick={() => updateStatus(a.id, "Resolved")}
                  className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white"
                >
                  Resolve
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="p-6 text-slate-400">No alerts found.</div>}
        </div>
        <div className="rounded-lg border border-slate-800 overflow-hidden">
          <div className="p-3 border-b border-slate-800 font-medium">Last Known Positions</div>
          <MapMock className="h-[420px]" />
        </div>
      </div>
    </div>
  )
}
