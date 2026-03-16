export default function ProgressBar({ percent = 67 }) {
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted text-xs uppercase tracking-wider">Vagas preenchidas</span>
        <span className="text-accent font-heading font-bold">{percent}%</span>
      </div>
      <div className="h-2 bg-surface-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full animate-fill-bar relative"
          style={{ width: `${percent}%` }}
        >
          <div className="absolute inset-0 animate-shimmer rounded-full" />
        </div>
      </div>
    </div>
  )
}
