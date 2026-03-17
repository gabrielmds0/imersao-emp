export default function Counter({ value, prefix = '', suffix = '', label }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-heading font-bold text-accent tabular-nums">
        {prefix}{value}{suffix}
      </div>
      <div className="text-xs text-muted mt-1 uppercase tracking-wider">{label}</div>
    </div>
  )
}
