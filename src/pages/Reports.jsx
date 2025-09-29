"use client"
import { reports } from "../data/mockData.js"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

export default function Reports() {
  const exportReport = () => {
    const blob = new Blob([JSON.stringify(reports, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `sts-report-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Reports & Analytics</h2>
        <button onClick={exportReport} className="px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white">
          Export Report
        </button>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border border-slate-800 p-4">
          <p className="font-medium mb-2">Tourist Density (24h)</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={reports.density}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="t" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#60a5fa" fill="url(#grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 p-4">
          <p className="font-medium mb-2">Alerts Frequency</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reports.alertsFreq}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="high" stroke="#f87171" />
                <Line type="monotone" dataKey="medium" stroke="#f59e0b" />
                <Line type="monotone" dataKey="low" stroke="#60a5fa" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 p-4">
          <p className="font-medium mb-2">Response Times</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reports.responseTimes}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="t" stroke="#94a3b8" />
                <YAxis unit="m" stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="avg" stroke="#34d399" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
