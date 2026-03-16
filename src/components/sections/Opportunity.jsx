import { opportunity, hero } from '../../data/content'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-20 md:py-28 bg-base relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] text-center mb-4">O modelo</p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            {opportunity.headline}
          </h2>
        </ScrollReveal>

        {/* Desktop: Zigzag horizontal flow */}
        <div className="hidden md:block mb-20">
          <div className="relative grid grid-cols-5 gap-5" style={{ minHeight: '380px' }}>
            {/* Horizontal connecting line through middle */}
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-gradient-to-r from-accent/25 via-accent/12 to-gold/25 -translate-y-1/2 z-0" />

            {opportunity.steps.map((step, i) => {
              const isUp = i % 2 === 0
              const isMoneyStep = i >= 3
              const dotColor = isMoneyStep ? 'bg-gold' : 'bg-accent'
              const dotRing = isMoneyStep ? 'ring-gold/20' : 'ring-accent/20'
              const numColor = isMoneyStep ? 'text-gold/50' : 'text-accent/50'

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative h-full flex flex-col items-center justify-center">
                    {/* Dot on the horizontal line - always centered */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-3 h-3 rounded-full ${dotColor} ring-4 ${dotRing}`} />
                    </div>

                    {/* Card - above or below center */}
                    <div className={`group absolute left-0 right-0 ${isUp ? 'bottom-[54%]' : 'top-[54%]'}`}>
                      {/* Stem connector */}
                      <div className={`absolute left-1/2 -translate-x-1/2 w-px h-4 ${isMoneyStep ? 'bg-gold/20' : 'bg-accent/20'} ${isUp ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full'}`} />

                      <div className="relative bg-surface/80 border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.12] hover:bg-surface-2/80 transition-all duration-300 backdrop-blur-sm">
                        <span className={`text-[10px] font-mono ${numColor} tracking-wider uppercase block mb-1.5`}>
                          Passo {i + 1}
                        </span>
                        <h4 className="font-heading font-semibold text-white text-[13px] mb-2 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-white/35 text-[12px] leading-relaxed group-hover:text-white/50 transition-colors">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Mobile: staggered cards */}
        <div className="md:hidden mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-gold/20" />

            <div className="space-y-6">
              {opportunity.steps.map((step, i) => {
                const isMoneyStep = i >= 3
                const dotColor = isMoneyStep ? 'bg-gold' : 'bg-accent'
                const dotRing = isMoneyStep ? 'ring-gold/15' : 'ring-accent/15'
                const numColor = isMoneyStep ? 'text-gold/50' : 'text-accent/50'
                return (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-4">
                      {/* Dot */}
                      <div className="relative shrink-0 mt-4 ml-[13px]">
                        <div className={`w-[10px] h-[10px] rounded-full ${dotColor} ring-4 ${dotRing}`} />
                      </div>

                      {/* Card */}
                      <div className="flex-1">
                        <div className="group bg-surface/80 border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.12] transition-all duration-300">
                          <span className={`text-[10px] font-mono ${numColor} tracking-wider uppercase block mb-1`}>
                            Passo {i + 1}
                          </span>
                          <h4 className="font-heading font-semibold text-white text-sm mb-1.5">{step.title}</h4>
                          <p className="text-white/40 text-[13px] leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <ScrollReveal>
          <div className="relative mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base px-5">
              <span className="text-gold text-xs font-medium tracking-wide whitespace-nowrap">
                Onde entram os canais anônimos?
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Anonymous channels - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-16">
          {opportunity.anonymous.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative pl-5 py-4 pr-4 rounded-xl border border-white/[0.04] hover:border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300">
                <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-accent/15 group-hover:bg-accent/40 transition-colors duration-300" />
                <h4 className="font-heading font-semibold text-white text-sm mb-1.5 group-hover:text-accent-light transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-white/35 text-[13px] leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-base md:text-lg text-white/40 mb-8 max-w-xl mx-auto leading-relaxed">
              {opportunity.subheadline}
            </p>
            <Button glow scrollTo="schedule">{hero.cta}</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
