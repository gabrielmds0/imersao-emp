import { useState, useEffect } from 'react'

export default function CountdownTimer({ targetDate = '2026-03-24T19:00:00-03:00' }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ]

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-card rounded-2xl w-18 h-18 md:w-24 md:h-24 flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-heading font-bold text-white tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
          </div>
          <span className="text-xs md:text-sm text-muted mt-2 font-medium uppercase tracking-wider">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}
