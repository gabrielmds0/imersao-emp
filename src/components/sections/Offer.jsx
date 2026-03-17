import { offer } from '../../data/content'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function Offer() {
  return (
    <section id="offer" className="py-20 md:py-32 bg-base relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white text-center mb-12 md:mb-16 tracking-tight leading-snug">
            {offer.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/30 via-accent/10 to-accent/20" />

            <div className="relative bg-surface rounded-3xl overflow-hidden">
              {/* Top section - Two columns on desktop */}
              <div className="grid md:grid-cols-2">
                {/* Left - Ticket image */}
                <div className="relative bg-gradient-to-br from-accent/[0.06] via-accent/[0.02] to-transparent p-8 md:p-10 flex items-center justify-center">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/[0.03] rounded-full" />
                  <div className="absolute bottom-6 right-6 w-12 h-12 border border-accent/[0.06] rounded-lg rotate-12" />

                  <img
                    src="/ticket.webp"
                    alt="Ticket - Imersão para Empresários"
                    className="w-full max-w-[280px] md:max-w-[300px] drop-shadow-[0_12px_40px_rgba(67,97,238,0.2)] hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Vertical divider on desktop */}
                  <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
                </div>

                {/* Right - Days schedule */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-6">O que está incluso</p>

                  <div className="space-y-5">
                    {offer.days.map((d, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        {/* Numbered check */}
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                          <svg className="w-4 h-4 text-accent" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8.5l3.5 3.5L13 5" />
                          </svg>
                        </div>
                        <div className="pt-0.5">
                          <p className="text-white font-semibold text-[15px] leading-snug">
                            <span className="text-accent">{d.day}</span>
                            <span className="text-white/30 font-normal"> — {d.date}</span>
                          </p>
                          <p className="text-white/50 text-sm mt-0.5">{d.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horizontal divider */}
              <div className="mx-8 md:mx-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

              {/* Bottom section - Price & CTA */}
              <div className="p-8 md:p-10 md:pt-8">
                <div className="flex flex-col items-center gap-6">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 bg-green/8 text-green text-[11px] font-bold px-4 py-1.5 rounded-full border border-green/15 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-green rounded-full" />
                    {offer.badge}
                  </span>

                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-baseline gap-3 justify-center">
                      <p className="text-white/25 line-through text-base">
                        R$ {offer.originalPrice},00
                      </p>
                      <svg className="w-4 h-4 text-white/10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 8h8M9 5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <p className="text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight mt-1">
                      R$ <span className="text-green">{offer.price}</span>
                      <span className="text-xl text-white/30 font-semibold">,00</span>
                    </p>
                    <p className="text-white/20 text-xs mt-2 uppercase tracking-wider">pagamento único</p>
                  </div>

                  {/* CTA */}
                  <Button glow className="w-full max-w-md text-lg !py-5">
                    {offer.cta}
                  </Button>

                  {/* Payment methods */}
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="flex items-center justify-center gap-3 text-white/20 text-[11px] w-full">
                      {offer.methods.map((m, i) => (
                        <span key={m} className="flex items-center gap-1.5">
                          {i > 0 && <span className="w-px h-3 bg-white/8 mr-1.5" />}
                          {m}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-white/15 text-center w-full">{offer.paymentNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
