import { bio } from '../../data/content'
import Counter from '../ui/Counter'
import ScrollReveal from '../ui/ScrollReveal'

export default function Bio() {
  return (
    <section id="bio" className="relative overflow-hidden">
      {/* Desktop: Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${bio.image})` }}
      />
      {/* Desktop overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-base/98 via-base/90 to-base/40 hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/70 hidden md:block" />

      <div className="relative z-10">
        {/* Mobile: Image visible */}
        <div className="md:hidden relative">
          <img
            src={bio.image}
            alt={bio.name}
            className="w-full h-[400px] object-cover object-top"
          />
          {/* Gradient fade into content below */}
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base to-transparent" />
        </div>

        <div className="py-12 md:py-32 max-w-6xl mx-auto px-6 -mt-20 md:mt-0 relative z-10">
          <div className="max-w-xl">
            <ScrollReveal>
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">Quem ensina</p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-1 tracking-tight">
                {bio.name}
              </h2>
              <p className="text-accent font-medium mb-10 text-sm uppercase tracking-wider">Fundador da Channels Educação</p>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 p-5 glass-card rounded-xl">
                {bio.stats.map((stat, i) => (
                  <Counter
                    key={i}
                    value={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    label={stat.label}
                  />
                ))}
              </div>
            </ScrollReveal>

            {bio.text.map((paragraph, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                <p className="text-white/60 leading-relaxed mb-4 text-[15px]">{paragraph}</p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-5 glass-card rounded-xl border-l-2 border-accent/50">
                <p className="text-lg font-heading font-semibold text-white/90 italic">
                  "{bio.closing}"
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
