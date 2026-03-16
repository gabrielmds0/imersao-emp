import { offer } from '../../data/content'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function Offer() {
  return (
    <section id="offer" className="py-20 md:py-28 bg-base relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-md mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-10 tracking-tight leading-snug">
            {offer.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/30 via-accent/10 to-gold/20" />

            <div className="relative bg-surface rounded-2xl overflow-hidden">
              {/* Ticket image - bleeds into card */}
              <div className="relative bg-gradient-to-b from-accent/[0.04] to-transparent pt-6 px-6">
                <img
                  src="/ticket.png"
                  alt="Ticket - Imersão para Empresários"
                  className="mx-auto w-full max-w-[260px] drop-shadow-[0_8px_30px_rgba(67,97,238,0.15)]"
                />
                {/* Fade ticket into content */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface to-transparent" />
              </div>

              {/* Content */}
              <div className="px-7 md:px-8 pb-8 pt-2">
                {/* Days schedule */}
                <div className="space-y-4 mb-7">
                  {offer.days.map((d, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      {/* Check icon */}
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8.5l3.5 3.5L13 5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          <span className="text-accent">{d.day}</span>
                          <span className="text-white/40 font-normal"> - {d.date}</span>
                        </p>
                        <p className="text-white/60 text-sm">{d.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />

                {/* Badge */}
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-gold/8 text-gold text-[11px] font-bold px-3.5 py-1 rounded-full border border-gold/15 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                    {offer.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="text-center mb-7">
                  <p className="text-white/25 line-through text-sm mb-1">
                    R$ {offer.originalPrice},00
                  </p>
                  <p className="text-5xl font-heading font-extrabold text-white tracking-tight">
                    R$ <span className="text-accent">{offer.price}</span>
                    <span className="text-lg text-white/30 font-semibold">,00</span>
                  </p>
                  <p className="text-white/20 text-xs mt-1.5 uppercase tracking-wider">pagamento único</p>
                </div>

                {/* CTA */}
                <Button glow className="w-full text-lg !py-5">
                  {offer.cta}
                </Button>

                {/* Payment methods */}
                <div className="mt-5 flex items-center justify-center gap-3 text-white/20 text-[11px]">
                  {offer.methods.map((m, i) => (
                    <span key={m} className="flex items-center gap-1.5">
                      {i > 0 && <span className="w-px h-3 bg-white/8 mr-1.5" />}
                      {m}
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-white/15 mt-2.5 text-center">{offer.paymentNote}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
