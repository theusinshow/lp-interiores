'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=85',
    alt: 'Sala de estar com mármore e madeira — projeto residencial de luxo',
  },
  {
    src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1800&q=85',
    alt: 'Dormitório com design sofisticado e iluminação especial',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=85',
    alt: 'Ambiente integrado com materiais nobres e composição editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=85',
    alt: 'Cozinha autoral com acabamentos premium e curadoria de materiais',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleCtaClick = (target: string) => {
    const el = document.querySelector(target)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] max-h-[1080px] overflow-hidden"
      aria-label="Apresentação da Maison Étoile Interiors"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.04 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 8, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[current].src}
                alt={heroSlides[current].alt}
                fill
                priority={current === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer overlay for editorial look */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-noir/30 to-noir/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/40 via-transparent to-transparent" />
        {/* Subtle warm tone */}
        <div className="absolute inset-0 bg-brown/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end section-padding pb-16 md:pb-20">
        <div className="container-maison">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="block w-10 h-px bg-gold/70" />
            <span className="section-label text-beige/70">São Paulo · Projetos Exclusivos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-hero text-cream font-light max-w-4xl mb-6 text-balance"
          >
            Espaços que
            <br />
            <em className="not-italic text-beige">traduzem quem você é.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-beige/80 max-w-xl mb-10 font-sans font-light"
          >
            Interiores residenciais de alto padrão com curadoria exclusiva de materiais,
            design personalizado e acompanhamento próximo em cada detalhe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleCtaClick('#contact')}
              className="btn-primary bg-cream text-noir hover:bg-beige group"
              aria-label="Solicitar proposta de projeto"
            >
              Solicitar proposta
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </button>
            <button
              onClick={() => handleCtaClick('#portfolio')}
              className="btn-secondary text-cream border-cream/40 hover:border-cream/80 group"
              aria-label="Ver portfólio de projetos"
            >
              Ver portfólio
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                ↓
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 md:right-12 z-10 flex gap-2" aria-hidden="true">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ver slide ${i + 1}`}
            className={`transition-all duration-400 ease-premium ${
              i === current
                ? 'w-8 h-px bg-cream'
                : 'w-3 h-px bg-cream/30 hover:bg-cream/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent"
        />
        <span className="text-micro text-cream/40 uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  )
}
