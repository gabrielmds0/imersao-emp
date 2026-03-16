import { forWho, hero } from '../../data/content'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const iconSvgs = [
  // Briefcase
  <svg key="0" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <path d="M12 12v.01" />
  </svg>,
  // Cog/Settings
  <svg key="1" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>,
  // Trending up
  <svg key="2" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
  // Unlock
  <svg key="3" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 019.9-1" />
  </svg>,
]

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      {/* Decorative geometric shapes */}
      <div className="absolute top-16 right-12 opacity-[0.04] hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="20" y="20" width="80" height="80" rx="16" stroke="#4361EE" strokeWidth="1" />
          <rect x="35" y="35" width="50" height="50" rx="10" stroke="#4361EE" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-8 opacity-[0.04] hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="30" stroke="#4361EE" strokeWidth="1" />
          <circle cx="40" cy="40" r="15" stroke="#4361EE" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Publico-alvo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center tracking-tight">
              {forWho.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* Editorial list */}
        <div className="mb-20">
          {forWho.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative">
                {/* Top border line */}
                <div className="h-px bg-gradient-to-r from-border via-border-hover to-border group-hover:via-accent/30 transition-colors duration-700" />

                <div className="py-8 md:py-10 flex items-start gap-5 md:gap-8">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-5xl md:text-7xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-accent/25 to-accent/5 group-hover:from-accent/50 group-hover:to-accent/15 transition-all duration-700 select-none leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent/40 group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-500">
                      {iconSvgs[i]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-3">
                    <p className="text-white/70 text-base md:text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {item.text}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden md:flex items-center pt-3 shrink-0 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Last item bottom border */}
                {i === forWho.items.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-border via-border-hover to-border" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-heading font-medium text-white/70 mb-2 leading-snug">
              {forWho.subheadline}
            </p>
            <p className="text-xl md:text-2xl font-heading font-bold text-accent mb-10">
              {forWho.subheadline2}
            </p>
            <Button glow scrollTo="opportunity">{hero.cta}</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
