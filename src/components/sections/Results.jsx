import { results, hero } from '../../data/content'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

function ResultCard({ item, delay = 0, objectPosition = 'object-top', fullImage = false }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="group relative rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1 h-full">
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/30 via-gold/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-[1px] scale-[1.01]" />

        <div className="relative h-full bg-surface-2 rounded-2xl border border-border group-hover:border-gold/20 transition-colors duration-500 overflow-hidden">
          {/* Image container */}
          <div className={`relative overflow-hidden ${fullImage ? 'min-h-[480px] h-full' : 'h-[480px]'}`}>
            <img
              src={item.image}
              alt={`Resultado de ${item.name}`}
              className={`w-full h-full object-cover ${objectPosition} group-hover:scale-[1.03] transition-transform duration-1000 ease-out`}
              loading="lazy"
            />

            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />

            {/* Bottom gradient - heavier */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-2 via-surface-2/80 to-transparent" />

            {/* Verified badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
              <svg className="w-3.5 h-3.5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] font-medium text-white/80">Verificado</span>
            </div>

            {/* Info overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                      <span className="text-gold font-heading font-bold text-xs">{item.name.charAt(0)}</span>
                    </div>
                    <p className="font-heading font-semibold text-white text-sm">{item.name}</p>
                  </div>
                  {item.value && (
                    <p className="text-gold font-heading font-bold text-2xl tracking-tight ml-9">{item.value}</p>
                  )}
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-500">
                  <svg className="w-4 h-4 text-white/50 group-hover:text-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/4 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-4">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Resultados reais</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center tracking-tight">
              {results.headline}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="text-muted text-center mb-14 max-w-2xl mx-auto">
            Resultados reais de alunos da Channels Educação
          </p>
        </ScrollReveal>

        {/* Social proof bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {[
              { value: '21.000+', label: 'alunos' },
              { value: '15+', label: 'países' },
              { value: 'R$ 30M+', label: 'faturados por alunos' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="font-heading font-bold text-white">{stat.value}</span>
                <span className="text-muted">{stat.label}</span>
                {i < 2 && <span className="w-px h-4 bg-border ml-4" />}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {results.items.map((item, i) => (
            <ResultCard
              key={i}
              item={item}
              delay={0.1 + i * 0.1}
              objectPosition={i === 1 ? 'object-top' : 'object-bottom'}
              fullImage={i >= 2}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-white/40 mb-8 max-w-xl mx-auto text-sm leading-relaxed">{results.subheadline}</p>
            <Button glow scrollTo="offer">{hero.cta}</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
