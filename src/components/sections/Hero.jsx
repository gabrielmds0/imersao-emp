import { hero, marqueeTestimonials, finalCta } from '../../data/content'
import Button from '../ui/Button'
import ProgressBar from '../ui/ProgressBar'
import Marquee from '../ui/Marquee'
import CountdownTimer from '../ui/CountdownTimer'
import ScrollReveal from '../ui/ScrollReveal'

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden">
        {/* Ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,#4361EE10,transparent)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px]" />

        {/* Top fade for header blend */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base to-transparent z-[1]" />

        {/* Mobile: Cassiano image at top */}
        <div className="lg:hidden relative w-full pt-20 flex justify-center">
          <div className="relative h-[340px] w-full flex justify-center">
            {/* Glow behind */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[80px]" />
            <img
              src="/cassiano-palestra-azul.webp"
              alt="Cassiano Girardi"
              className="relative h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(67,97,238,0.12)]"
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-base to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-6 pb-16 lg:pt-32 lg:pb-20 w-full -mt-10 lg:mt-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              {/* Event info */}
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6 lg:mb-8">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-accent text-sm font-medium tracking-wide">
                    {hero.event.dates} às {hero.event.time}
                  </span>
                  <span className="text-white/10">|</span>
                  <span className="text-white/30 text-sm">{hero.event.format}</span>
                </div>
              </ScrollReveal>

              {/* Headline */}
              <ScrollReveal delay={0.1}>
                <h1 className="text-[2rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-heading font-extrabold text-white leading-[1.08] mb-5 lg:mb-6 tracking-tight">
                  Em 3 dias, você vai criar seu novo negócio digital que{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                      fatura em dólar.
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                  </span>
                </h1>
              </ScrollReveal>

              {/* Subheadline */}
              <ScrollReveal delay={0.2}>
                <p className="text-base md:text-lg text-white/45 leading-relaxed mb-6 lg:mb-8 max-w-xl">
                  {hero.subheadline}
                </p>
              </ScrollReveal>

              {/* Bullets */}
              <ScrollReveal delay={0.25}>
                <div className="flex flex-col gap-2.5 mb-8 lg:mb-10">
                  {hero.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-white/60 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Countdown */}
              <ScrollReveal delay={0.3}>
                <div className="mb-8">
                  <p className="text-[11px] text-white/25 uppercase tracking-[0.15em] mb-3 font-medium">{finalCta.countdownLabel}</p>
                  <CountdownTimer />
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal delay={0.35}>
                <div className="flex flex-col items-start gap-5">
                  <Button glow scrollTo="offer" className="w-full sm:w-auto whitespace-nowrap">
                    {hero.cta}
                  </Button>
                  <ProgressBar percent={hero.vacancyPercent} />
                </div>
              </ScrollReveal>
            </div>

            {/* Right - spacer for desktop image */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Desktop: Cassiano image */}
        <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none z-[5]">
          <div className="absolute -inset-12 bg-gradient-to-tr from-accent/10 via-transparent to-gold/8 rounded-full blur-[100px]" />
          <img
            src="/cassiano-palestra-azul.webp"
            alt="Cassiano Girardi"
            className="absolute bottom-0 right-[calc(5%-15px)] h-[92%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_0_80px_rgba(67,97,238,0.15)]"
          />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent z-10" />
      </section>

      <Marquee items={marqueeTestimonials} />
    </>
  )
}
