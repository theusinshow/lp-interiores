'use client'

import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stats = [
  { value: 12, suffix: '+', label: 'Anos de experiência', detail: 'Em projetos residenciais de alto padrão' },
  { value: 87, suffix: '', label: 'Projetos entregues', detail: 'Em São Paulo e capitais selecionadas' },
  { value: 100, suffix: '%', label: 'Clientes por indicação', detail: 'A maior prova de confiança' },
  { value: 4, suffix: ' estados', label: 'Atuação nacional', detail: 'SP · RJ · SC · DF' },
]

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString() + suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix])

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      0{suffix}
    </span>
  )
}

export function SocialProof() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="social-proof"
      className="relative overflow-hidden bg-noir"
      aria-label="Números e credenciais"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=70"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/90 to-noir/60" />
      </div>

      <div className="relative z-10 section-padding py-24 md:py-32">
        <div className="container-maison" ref={ref}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-beige/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-noir/20 px-8 py-10 lg:py-14"
              >
                <div className="font-serif text-[3rem] md:text-[3.5rem] text-cream font-light leading-none mb-3 tracking-[-0.02em]">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-body text-beige/80 font-sans font-medium mb-1">{stat.label}</p>
                <p className="text-micro text-taupe/60 uppercase tracking-[0.1em]">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
