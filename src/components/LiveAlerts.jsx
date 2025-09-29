import { alerts } from "../data/mockData.js"
import { Link } from "react-router-dom"

export default function LiveAlerts() {
  const latest = [...alerts].sort((a, b) => b.timestamp - a.timestamp).slice(0, 6)

  const pill = (sev) =>
    ({
      High: "badge badge-high",
      Medium: "badge badge-medium",
      Low: "badge badge-low",
    })[sev] || "badge"

  return (
    <aside className="w-full md:w-80 lg:w-96 shrink-0 border-l border-slate-800 bg-slate-900">
      <div className="p-4 border-b border-slate-800">
        <h3 className="font-semibold">Live Alerts</h3>
      </div>
      <div className="divide-y divide-slate-800 max-h-[560px] overflow-auto">
        {latest.map((a) => (
          <div key={a.id} className="p-4 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className={pill(a.severity)}>{a.severity}</span>
              <time className="text-xs text-slate-400">{new Date(a.timestamp).toLocaleTimeString()}</time>
            </div>
            <p className="text-sm text-slate-200">{a.title}</p>
            <p className="text-xs text-slate-400">Location: {a.location}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-800">
        <Link
          to="/alerts"
          className="w-full inline-flex items-center justify-center rounded bg-blue-600 hover:bg-blue-500 text-white px-3 py-2"
        >
          View All Alerts
        </Link>
      </div>
    </aside>
  )
}
