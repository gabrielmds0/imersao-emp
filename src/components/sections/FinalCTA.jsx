import { hero, finalCta } from '../../data/content'
import Button from '../ui/Button'
import ProgressBar from '../ui/ProgressBar'
import ScrollReveal from '../ui/ScrollReveal'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-base relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-white/40 text-lg md:text-xl font-heading italic mb-2">
            {finalCta.title}<span className="text-[10px] align-super not-italic">&reg;</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight leading-tight">
            {finalCta.headline}
          </h2>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight leading-tight mb-8">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                {finalCta.headlineHighlight}
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-accent/40 to-transparent" />
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="text-white/45 text-base md:text-lg leading-relaxed mb-10 space-y-0.5">
            {finalCta.details.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <Button glow className="text-base md:text-xl !py-4 md:!py-5 !px-8 md:!px-14 w-full sm:w-auto uppercase font-bold tracking-wide">
            {finalCta.cta}
          </Button>

          <div className="mt-6 flex justify-center">
            <ProgressBar percent={hero.vacancyPercent} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
