export default function ProgressBar({ percent = 83 }) {
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted text-xs uppercase tracking-wider">Vagas preenchidas</span>
        <span className="text-crimson font-heading font-bold">{percent}%</span>
      </div>
      <div className="h-2 bg-surface-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-crimson to-crimson/70 rounded-full relative"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
