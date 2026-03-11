'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { SectionLabel } from './ui/SectionLabel'

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="studio"
      className="bg-cream-100 section-padding py-24 md:py-32 lg:py-40"
      aria-label="Sobre o estúdio Maison Étoile Interiors"
    >
      <div className="container-maison" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=85"
                alt="Isabela Monteiro — Diretora Criativa da Maison Étoile Interiors"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-premium hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-brown/5" />
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-0 lg:-right-8 bg-cream border border-beige/60 px-6 py-5 shadow-card"
            >
              <p className="font-serif text-[2.2rem] text-brown font-light leading-none">12+</p>
              <p className="text-micro uppercase tracking-[0.14em] text-taupe mt-1">
                Anos de experiência
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <SectionLabel className="mb-8">Sobre o estúdio</SectionLabel>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-noir font-light mb-8 text-balance"
            >
              Rigor estético.<br />
              <em className="italic text-taupe">Atenção humana.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 text-body text-taupe-300 font-sans leading-relaxed"
            >
              <p>
                A Maison Étoile Interiors é um estúdio boutique fundado por{' '}
                <strong className="text-noir font-medium">Isabela Monteiro</strong>, arquiteta com
                formação em design de interiores e especialização em curadoria de materiais nobres.
                Com mais de uma década dedicada a projetos residenciais de alto padrão, o estúdio
                construiu sua reputação pela excelência de execução e pelo atendimento genuinamente
                personalizado.
              </p>
              <p>
                Cada projeto é tratado como único. Trabalhamos com um número selecionado de clientes
                por vez — o que nos permite oferecer atenção irrestrita, presença em cada etapa da
                obra e um resultado que vai além do esperado.
              </p>
              <p>
                Nosso método combina direção de arte refinada, especificação técnica rigorosa e
                curadoria de fornecedores exclusivos para entregar ambientes que unem beleza,
                funcionalidade e coerência de estilo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.querySelector('#contact')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }}
                className="btn-ghost text-noir hover:text-gold group"
              >
                Conhecer o processo
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
