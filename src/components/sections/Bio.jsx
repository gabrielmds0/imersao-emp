import { bio } from '../../data/content'
import Counter from '../ui/Counter'
import ScrollReveal from '../ui/ScrollReveal'

export default function Bio() {
  return (
    <section id="bio" className="relative overflow-hidden bg-base">
      {/* Desktop: Full-bleed image pinned to the right */}
      <div className="hidden md:block absolute inset-0">
        <div className="absolute top-0 right-0 bottom-0 w-[55%]">
          <img
            src={bio.image}
            alt={bio.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          {/* Heavy gradient from left to blend into content */}
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 via-[25%] to-transparent" />
          {/* Top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-base via-transparent via-[15%] to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent via-[10%] to-transparent" />
          {/* Subtle overall darken so text overlay is readable */}
          <div className="absolute inset-0 bg-base/20" />
        </div>
      </div>

      {/* Mobile: Image on top, full width */}
      <div className="md:hidden relative">
        <img
          src={bio.image}
          alt={bio.name}
          className="w-full h-[420px] object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 via-[40%] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 -mt-16 md:mt-0">
        <div className="md:min-h-[720px] md:flex md:items-center">
          <div className="md:w-[55%] py-12 md:py-24">
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
                <p className={`leading-relaxed mb-4 text-[15px] ${i >= 1 ? 'text-white/70 italic pl-4 border-l-2 border-accent/20' : 'text-white/60'}`}>
                  {i === 1 ? `\u201C${paragraph}` : i === bio.text.length - 1 && i >= 1 ? `${paragraph}\u201D` : paragraph}
                </p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-5 glass-card rounded-xl border-l-2 border-accent/50">
                <p className="text-lg font-heading font-semibold text-white/90 italic">
                  &ldquo;{bio.closing}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
