import { faq } from '../../data/content'
import Accordion from '../ui/Accordion'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-accent text-sm font-medium uppercase tracking-widest text-center mb-4">FAQ</p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white text-center mb-14 tracking-tight leading-snug">
            Perguntas frequentes sobre a Imersão para Empresários
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion items={faq} />
        </ScrollReveal>
      </div>
    </section>
  )
}
