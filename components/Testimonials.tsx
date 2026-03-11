'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './ui/SectionLabel'

const testimonials = [
  {
    id: 1,
    quote:
      'A Isabela entendeu nosso projeto melhor do que nós mesmos. O resultado foi um apartamento que parece feito sob medida para cada detalhe da nossa vida — e de fato foi. A entrega superou todas as expectativas.',
    author: 'Mariana & Ricardo T.',
    detail: 'Apartamento · Vila Nova Conceição, São Paulo',
    initial: 'MR',
  },
  {
    id: 2,
    quote:
      'O que mais nos impressionou foi a tranquilidade que sentimos durante todo o processo. Nenhum imprevisto ficou sem resposta. A Maison Étoile cuidou de tudo com uma precisão que raramente se encontra.',
    author: 'Família Andrade',
    detail: 'Casa · Alphaville, SP',
    initial: 'A',
  },
  {
    id: 3,
    quote:
      'Investi em interiores em outros projetos antes e nunca tive a experiência consultiva que a Maison Étoile proporcionou. A curadoria de materiais, o cuidado com cada peça, a presença na obra — isso não tem preço.',
    author: 'Eduardo M.',
    detail: 'Cobertura · Itaim Bibi, São Paulo',
    initial: 'EM',
  },
  {
    id: 4,
    quote:
      'Minha casa é um reflexo do que eu sempre quis, mas nunca consegui expressar em palavras. A Isabela transformou uma sensação em um projeto concreto e belíssimo. Recomendo sem hesitar.',
    author: 'Carla F.',
    detail: 'Residência · Jardins, São Paulo',
    initial: 'CF',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length)

  return (
    <section
      id="testimonials"
      className="bg-cream-100 section-padding py-24 md:py-32 lg:py-40"
      aria-label="Depoimentos de clientes"
    >
      <div className="container-maison" ref={ref}>
        <SectionLabel className="mb-16">Clientes</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left: list */}
          <div className="hidden lg:flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.07 }}
                onClick={() => setActive(i)}
                className={`text-left px-5 py-4 border-l-2 transition-all duration-400 ease-premium ${
                  active === i
                    ? 'border-gold bg-beige/30 text-noir'
                    : 'border-beige/40 text-taupe hover:border-taupe/60 hover:text-noir/70'
                }`}
              >
                <p className={`font-serif text-[1.05rem] transition-colors duration-300 ${
                  active === i ? 'text-noir' : 'text-taupe'
                }`}>
                  {t.author}
                </p>
                <p className="text-micro uppercase tracking-[0.12em] text-taupe/60 mt-0.5">{t.detail}</p>
              </motion.button>
            ))}
          </div>

          {/* Right: active testimonial */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Quote mark */}
                <span
                  className="block font-serif text-[5rem] text-gold/20 leading-none mb-4 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="font-serif text-[1.35rem] md:text-[1.55rem] text-noir font-light leading-[1.55] mb-8 text-balance">
                  {testimonials[active].quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-beige flex items-center justify-center">
                    <span className="text-caption text-taupe font-sans font-medium">
                      {testimonials[active].initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-body font-medium text-noir">{testimonials[active].author}</p>
                    <p className="text-micro uppercase tracking-[0.12em] text-taupe/70">{testimonials[active].detail}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile nav */}
            <div className="lg:hidden flex items-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 border border-beige flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors duration-300"
              >
                ←
              </button>
              <span className="text-caption text-taupe">
                {active + 1} / {testimonials.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-10 h-10 border border-beige flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-micro text-taupe/40 italic font-sans"
        >
          * Nomes preservados a pedido dos clientes. Depoimentos reais coletados ao longo dos projetos.
        </motion.p>
      </div>
    </section>
  )
}
