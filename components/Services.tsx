'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { SectionLabel } from './ui/SectionLabel'

const services = [
  {
    title: 'Projeto Residencial Completo',
    body: 'Do conceito à entrega — planejamento total do espaço, gestão de obra e styling final. Para quem deseja zero preocupação e resultado impecável.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80',
    tag: 'Mais solicitado',
  },
  {
    title: 'Interiores Personalizados',
    body: 'Design de ambientes específicos: sala, dormitório, escritório, banheiro. Cada espaço tratado como uma obra em si — com atenção irrestrita.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80',
    tag: null,
  },
  {
    title: 'Mobiliário Sob Medida',
    body: 'Desenvolvimento e produção de móveis exclusivos em parceria com marceneiros e ateliês selecionados. Peças que não existem em catálogo — porque são suas.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
    tag: null,
  },
  {
    title: 'Curadoria de Materiais',
    body: 'Seleção criteriosa de revestimentos, tecidos, metais, vidros e acabamentos de alto padrão. Acesso a fornecedores exclusivos nacionais e internacionais.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    tag: null,
  },
  {
    title: 'Acompanhamento de Execução',
    body: 'Gestão ativa da obra com visitas regulares, supervisão técnica e comunicação transparente. Para quem contratou outro arquiteto mas precisa de rigor na execução.',
    image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=700&q=80',
    tag: null,
  },
  {
    title: 'Consultoria Estratégica',
    body: 'Sessão de consultoria para projetos em andamento, revisão de layouts, definição de paleta e direção de compra. Clareza e direção em poucas horas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
    tag: null,
  },
]

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const handleCtaClick = () => {
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="bg-beige/30 section-padding py-24 md:py-32 lg:py-40"
      aria-label="Serviços oferecidos"
    >
      <div className="container-maison" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <SectionLabel className="mb-8">Serviços</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-display text-noir font-light"
            >
              O que podemos
              <br />
              <em className="italic text-taupe">construir juntos.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-body text-taupe font-sans font-light max-w-sm self-end"
          >
            Projetos residenciais acima de R$ 300 mil de investimento total.
            Atendemos em São Paulo e capitais selecionadas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.05 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-cream overflow-hidden hover:shadow-card transition-shadow duration-400"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {service.tag && (
                  <div className="absolute top-4 left-4 bg-gold text-cream text-micro uppercase tracking-[0.12em] px-3 py-1.5">
                    {service.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-serif text-heading text-noir font-medium mb-3">{service.title}</h3>
                <p className="text-body text-taupe font-sans leading-relaxed mb-6">{service.body}</p>
                <button
                  onClick={handleCtaClick}
                  className="btn-ghost text-noir hover:text-gold text-micro group/btn"
                >
                  Saiba mais
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
