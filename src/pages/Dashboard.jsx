import StatCard from "../components/StatCard.jsx"
import MapMock from "../components/MapMock.jsx"
import LiveAlerts from "../components/LiveAlerts.jsx"
import { stats } from "../data/mockData.js"

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="Active Tourists" value={stats.activeTourists.toLocaleString()} tone="info" />
        <StatCard title="Ongoing Alerts" value={stats.ongoingAlerts} tone="danger" />
        <StatCard title="Missing Reports" value={stats.missingReports} tone="warning" />
        <StatCard title="Response Rate (24h)" value={stats.responseRate} suffix="%" tone="success" />
        <StatCard title="Avg Response Time" value={stats.avgResponseTime} suffix=" min" tone="info" />
      </div>

      {/* Map + Live alerts */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
          <div className="p-3 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-semibold">City Map</h3>
            <p className="text-xs text-slate-400">Clusters (blue) · Risk Zones (red)</p>
          </div>
          <MapMock className="h-[560px]" />
        </div>
        <LiveAlerts />
      </div>
    </div>
  )
}
