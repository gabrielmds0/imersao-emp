import { schedule, hero } from '../../data/content'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const dayThemes = [
  { label: 'text-accent', bar: 'bg-accent', check: 'text-accent/40' },
  { label: 'text-gold', bar: 'bg-gold', check: 'text-gold/40' },
  { label: 'text-crimson', bar: 'bg-crimson', check: 'text-crimson/40' },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] text-center mb-4">Cronograma</p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white text-center mb-3 tracking-tight">
            {schedule.headline}
          </h2>
          <p className="text-white/30 text-center mb-14 md:mb-16">3 dias que podem mudar a trajetória do seu negócio</p>
        </ScrollReveal>

        {/* Days - stacked cards */}
        <div className="space-y-5 md:space-y-6 mb-14">
          {schedule.days.map((day, i) => {
            const theme = dayThemes[i]
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group relative">
                  {/* Card */}
                  <div className="relative border border-white/[0.05] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all duration-300 bg-base/50">
                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${theme.bar} opacity-50 group-hover:opacity-100 transition-opacity`} />

                    {/* Day image */}
                    {day.image ? (
                      <div className="relative h-48 md:h-72 overflow-hidden">
                        <img
                          src={day.image}
                          alt={day.title}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: day.imagePosition || 'top' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/30 to-transparent" />
                      </div>
                    ) : (
                      <div className="relative h-32 md:h-40 overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-xl ${theme.bar} opacity-[0.06] blur-xl`} />
                        <span className="absolute text-white/[0.04] font-heading font-extrabold text-6xl md:text-7xl select-none">{day.day}</span>
                      </div>
                    )}

                    <div className={`p-5 md:p-7 pl-6 md:pl-8 ${day.image ? '-mt-12 relative z-10' : ''}`}>
                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-5">
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl md:text-3xl font-heading font-extrabold ${theme.label} opacity-80`}>
                            {day.day}
                          </span>
                          <div className="hidden sm:block w-px h-6 bg-white/8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-white text-lg md:text-xl leading-snug">
                            {day.title}
                          </h3>
                          <p className="text-white/25 text-sm mt-0.5">{day.date}</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-white/[0.04] via-white/[0.06] to-transparent mb-5" />

                      {/* Items - 2 column on desktop */}
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {day.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-white/40 group-hover:text-white/55 transition-colors duration-300">
                            <svg className={`w-4 h-4 ${theme.check} mt-0.5 shrink-0`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 8.5l3.5 3.5L13 5" />
                            </svg>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connector */}
                  {i < schedule.days.length - 1 && (
                    <div className="flex justify-center mt-3 md:mt-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-px h-2.5 bg-white/8" />
                        <svg className="w-2.5 h-2.5 text-white/10" viewBox="0 0 10 10" fill="currentColor">
                          <path d="M5 8L1.5 4h7L5 8z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button glow scrollTo="bio">{hero.cta}</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
