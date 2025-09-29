import { anomalies } from "../data/mockData.js"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

export default function AIMonitoring() {
  const flagged = anomalies.flagged

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <h2 className="text-xl font-semibold">AI Monitoring</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {flagged.map((f) => (
          <div key={f.touristId} className="rounded-lg border border-slate-800 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Tourist</p>
                <p className="font-semibold">{f.name}</p>
              </div>
              <span
                className={`badge ${f.state === "Distress" ? "badge-high" : f.state === "Silent" ? "badge-medium" : "badge-low"}`}
              >
                {f.state}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-2">{f.reason}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-slate-800 p-4">
          <p className="font-medium mb-2">Movement Pattern (dummy)</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={anomalies.movementSeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="t" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="speed" stroke="#60a5fa" dot={false} />
                <Line type="monotone" dataKey="deviation" stroke="#f87171" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 p-4">
          <p className="font-medium mb-2">Anomalies by Type</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={anomalies.counts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="type" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="count" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
