export default function Marquee({ items }) {
  return (
    <div className="overflow-hidden border-y border-border py-4 bg-surface/80">
      <div className="flex whitespace-nowrap">
        {/* Two identical blocks side by side for seamless loop */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="animate-marquee flex shrink-0"
            aria-hidden={copy === 1 ? 'true' : undefined}
          >
            {items.map((item, i) => (
              <span key={i} className="mx-8 text-sm font-medium text-subtle">
                {item}
                <span className="mx-8 text-accent/30">&#x2022;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
