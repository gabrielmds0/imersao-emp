import { hero, finalCta } from '../../data/content'
import Button from '../ui/Button'
import ProgressBar from '../ui/ProgressBar'
import ScrollReveal from '../ui/ScrollReveal'

export default function FinalCTA({ onCtaClick }) {
  return (
    <section id="final-cta" className="py-24 md:py-32 bg-base relative overflow-hidden">
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
          <div className="flex flex-col items-center gap-3 mb-10">
            {/* Date */}
            <div className="flex items-center gap-2.5 text-white/45 text-base md:text-lg">
              <svg className="w-5 h-5 text-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span>{finalCta.details[0]}</span>
            </div>
            {/* Time */}
            <div className="flex items-center gap-2.5 text-white/45 text-base md:text-lg">
              <svg className="w-5 h-5 text-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>{finalCta.details[1]}</span>
            </div>
            {/* Online */}
            <div className="flex items-center gap-2.5 text-white/45 text-base md:text-lg">
              <svg className="w-5 h-5 text-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" />
                <rect x="1" y="6" width="14" height="12" rx="2" />
              </svg>
              <span>{finalCta.details[2]}</span>
            </div>
            {/* Cassiano */}
            <div className="flex items-center gap-2.5 text-white/45 text-base md:text-lg">
              <svg className="w-5 h-5 text-accent/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>{finalCta.details[3]}</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <Button glow red icon={false} className="text-base md:text-xl !py-4 md:!py-5 !px-8 md:!px-14 w-full sm:w-auto uppercase font-bold tracking-wide" scrollTo="offer">
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
