'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Manifesto() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="manifesto"
      className="bg-noir section-padding py-28 md:py-36 lg:py-44 overflow-hidden"
      aria-label="Manifesto Maison Étoile Interiors"
    >
      <div className="container-maison">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className="block w-8 h-px bg-gold/50" />
            <span className="section-label text-taupe-100">Manifesto</span>
            <span className="block w-8 h-px bg-gold/50" />
          </motion.div>

          {/* Main text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-display text-cream font-light leading-[1.15] tracking-[-0.01em] mb-10"
          >
            &ldquo;Um interior de excelência não é construído —<br className="hidden md:block" />
            {' '}
            <em className="italic text-beige">é cuidadosamente revelado.</em>&rdquo;
          </motion.blockquote>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-taupe-100/80 font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            Cada projeto nasce de uma escuta profunda. Entendemos seu modo de viver, sua
            estética, seus desejos não ditos — e os traduzimos em ambientes que emocionam,
            funcionam com perfeição e resistem ao tempo.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 mx-auto w-16 h-px bg-gold/40 origin-center"
          />

          {/* Author */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 flex flex-col items-center gap-1"
          >
            <span className="font-serif text-[1.1rem] text-beige/70 italic">Isabela Monteiro</span>
            <span className="text-micro uppercase tracking-[0.16em] text-taupe/60">
              Diretora Criativa · Maison Étoile Interiors
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
