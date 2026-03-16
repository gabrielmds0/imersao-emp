import { guarantee } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-16 md:py-20 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/4 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-accent/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            {/* Decorative corner brackets */}
            <div className="absolute top-3 left-3 opacity-[0.1]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 8V3a1 1 0 011-1h5" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="absolute bottom-3 right-3 opacity-[0.1]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16v5a1 1 0 01-1 1h-5" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center relative">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border border-accent/10 animate-pulse" />
                <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                  {guarantee.headline}
                </h2>
                <svg className="w-6 h-6 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/50 leading-relaxed text-[15px]">
                {guarantee.text}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
