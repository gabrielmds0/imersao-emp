export default function Marquee({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-border py-4 bg-surface/80">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-subtle">
            {item}
            <span className="mx-8 text-accent/30">&#x2022;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
