import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ value, prefix = '', suffix = '', label, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const steps = 60
    const increment = value / steps
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-heading font-bold text-accent tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs text-muted mt-1 uppercase tracking-wider">{label}</div>
    </div>
  )
}
