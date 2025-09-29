export default function StatCard({ title, value, icon, tone = "info", suffix }) {
  const toneRing = {
    info: "ring-blue-500/30",
    success: "ring-emerald-500/30",
    warning: "ring-amber-500/30",
    danger: "ring-red-500/30",
  }[tone]

  const toneBg = {
    info: "bg-blue-500/10",
    success: "bg-emerald-500/10",
    warning: "bg-amber-500/10",
    danger: "bg-red-500/10",
  }[tone]

  return (
    <div className={`rounded-lg border border-slate-800 ${toneBg} ring-1 ${toneRing} p-4`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <div className="mt-1 text-2xl font-semibold text-white">
            {value}
            {suffix ? <span className="text-slate-400 text-lg"> {suffix}</span> : null}
          </div>
        </div>
        {icon ? <div className="text-2xl opacity-80">{icon}</div> : null}
      </div>
    </div>
  )
}
