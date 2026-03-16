import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="glass-card rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left font-heading font-semibold text-white/90 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="pr-4">{item.q}</span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl text-accent ml-4 shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-6 pb-5 text-white/50 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
